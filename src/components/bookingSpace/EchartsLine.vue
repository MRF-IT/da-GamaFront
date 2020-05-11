<template>
    <div class="wrapBox">
        <div class="selectType mainBg" @click="clickLine">柱形图</div>
        <div class="searchBox">
            <div>ETD起始日期:</div>
            <el-date-picker v-model="startDate" type="date" placeholder="选择日期" class="selectDate"></el-date-picker>
            <!-- <input class="searchInput"> -->
            <div>结束日期:</div>
            <el-date-picker v-model="endDate" type="date" placeholder="选择日期" class="selectDate"></el-date-picker>
            <div class="searchBtn mainBg" @click="clickSearch">搜索</div>
        </div>
        <!-- 折线图 -->
        <!-- <div id="foldLine1" class="echartsBox"></div> -->
        <!-- 船东 -->
        <div class="echartsWrap">
            <div class="echartsTitle">{{title[0]}}</div>
            <div id="shipowner" class="shipowner echartsBox"></div>
        </div>

        <div class="echartsWrap">
            <div class="echartsTitle">{{title[1]}}</div>
            <div id="businessman" class="businessman echartsBox"></div>
        </div>

        <div class="echartsWrap">
            <div class="echartsTitle">{{title[2]}}</div>
            <div id="businessmanager" class="businessmanager echartsBox"></div>
        </div>
        
        <!-- <div id="businessman" class="businessman echartsBox"></div>
        <div id="businessmanager" class="businessmanager echartsBox"></div> -->


    </div>
</template>
<script>
export default {
    data() {
        return {
            startDate: '',
            endDate: '',
            lineData: [],
            title: ['','',''],
            seriesData: []
        }
    },
    created() {
        this.getLineData()
    },
    mounted() {
        
    },
    watch: {
        lineData(newVaule,oldValue) {
            // console.log('')
            if(newVaule.length!==0) {
                newVaule.forEach((item,index) => {
                    this.$set(this.seriesData,index,[])
                    item.datas.forEach((item1,index1) => {
                        this.seriesData[index].push({
                            name: item.shiparray[index1],
                            type: 'line',
                            data: item1
                        })
                    })
                    
                });
                // console.log(this.seriesData)
                this.$set(this.title,0,this.lineData[0].title)
                this.$set(this.title,1,this.lineData[1].title)
                this.$set(this.title,2,this.lineData[1].title)
                // this.title[0] = this.lineData[0].title
                // console.log(this.lineData[0].title)
                var echart1 = document.getElementById('shipowner')
                var echart2 = document.getElementById('businessman')
                var echart3 = document.getElementById('businessmanager')
                this.drawEcharts(echart1,this.lineData[0],this.seriesData[0])
                this.drawEcharts(echart2,this.lineData[1],this.seriesData[1])
                this.drawEcharts(echart3,this.lineData[2],this.seriesData[2])
            }
        }
    },
    methods: {
        // 点击搜索触发
        clickSearch() {
            if((!this.startDate)&&(this.endDate)) {
                this.$message({
                    message: '请选择起始日期',
                    type: 'warning'
                });
                return
            }
            if((this.startDate)&&(!this.endDate)) {
                this.$message({
                    message: '请选择结束日期',
                    type: 'warning'
                });
                return
            }
            this.getLineData()
        },
        // 点击折线图按钮时跳转
        clickLine() {
            this.$router.push('/home/bookingSpace/echarts')
        },
        // 获取柱状图数据
        async getLineData() {
            var startday = this.startDate
            var endday = this.endDate 
            if(this.startDate != '') {
                startday = this.changeDate(this.startDate)
            }
            if(this.endDate != '') {
                endday = this.changeDate(this.endDate)
            }
            var obj = {
                startday: startday,
                endday: endday
            }
            const res = await this.$http.post('http://192.168.53.132/tp5seawatch/public/index/tuxing/index.html',obj)
            if(res.status == 200 && res.data.ret == 200) {
                this.lineData = res.data.data
                // console.log(this.lineData)
            }else {
                this.$message({
                    message: '获取数据失败',
                    type: 'warning'
                });
            }
            // console.log(res)
        },
        drawEcharts(myChart,data,series) {
            var option = {
                // title: {
                //     text: data.title
                // },
                // color: ['#3c6291','#c23531'],
                tooltip: {},
                legend: {
                    // x: 'right',
                    padding: 10,
                    data: data.shiparray
                },
                xAxis: {
                    type: 'category',
                    boundaryGap: false,
                    data: ['周一', '周二', '周三', '周四', '周五','周六','周日']
                },
                yAxis: {},
                toolbox: {
                    show: true,
                    feature: {
                        // dataView: {show: true, readOnly: false},
                        // magicType: {show: true, type: ['line', 'bar']},
                        // restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                
                grid: {
                    left: '3%',
                    right: '4%',
                    bottom: '3%',
                    containLabel: true
                },
                series: series
                // series: [
                //     {
                //         name: data.shiparray[0]+'-',  // 系列名称
                //         type: 'line',  // 系列图表类型
                //         data: data.datas[0]  // 系列中的数据内容
                //     },
                //     // {
                //     //     name: data.titledayy+"年T量",  // 系列名称
                //     //     type: 'line',  // 系列图表类型
                //     //     data: data.countjsy  // 系列中的数据内容
                //     // },
                // ]
            };
 
            // // 使用刚指定的配置项和数据显示图表。
            this.$echarts.init(myChart).setOption(option);
        },
        changeDate(str) {
            return str.getFullYear()+'-'+(str.getMonth()+1)+'-'+str.getDate()
        }
    }
}
</script>
<style scoped>
    .echartsWrap {
        width: 830px;
        margin: auto;
    }
    .echartsTitle {
        color: #333;
        font-size: 18px;
        margin-bottom: 20px;
        font-weight: bold;
    }
    .echartsBox {
        width: 830px;
        height: 500px;
        padding-top: 10px;
        margin: auto;
        border: 1px solid #e1e5e6;
    }
    .searchBox {
        display: flex;
        flex-direction: row;
        align-items: center;
        /* margin-left: 40px; */
        width: 830px;
        margin: auto;
        font-size: 16px;
        color: #333;
        margin-bottom: 20px;
    }
    .searchBox div {
        margin-right: 10px
    }
    .selectDate {
        margin-right: 20px;
    }
    .businessmanager {
        margin-bottom: 90px;
    }
    .searchBtn {
        width: 60px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
        border-radius: 5px
    }
    .selectType {
        position: fixed;
        top: 5px;
        right: 100px;
        width: 64px;
        height: 30px;
        line-height: 30px;
        border-radius: 4px;
        text-align: center;
        cursor: pointer;
    }

</style>