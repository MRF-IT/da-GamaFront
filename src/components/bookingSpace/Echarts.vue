<template>
    <div class="wrapBox">
        <div class="selectType mainBg" @click="clickLine">折线图</div>
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
            barData: [],
            title: ['','','']
        }
    },
    created() {
        this.getBarData()
    },
    mounted() {
        
    },
    watch: {
        barData(newVaule,oldValue) {
            // console.log('')
            if(newVaule.length!==0) {
                this.$set(this.title,0,this.barData[0].title)
                this.$set(this.title,1,this.barData[1].title)
                this.$set(this.title,2,this.barData[1].title)
                // this.title[0] = this.barData[0].title
                // console.log(this.barData[0].title)
                var echart1 = document.getElementById('shipowner')
                var echart2 = document.getElementById('businessman')
                var echart3 = document.getElementById('businessmanager')
                this.drawEcharts(echart1,this.barData[0])
                this.drawEcharts(echart2,this.barData[1])
                this.drawEcharts(echart3,this.barData[2])
            }
        }
    },
    methods: {
        // 点击搜索触发
        clickSearch() {
            if((!this.startDate)&&(this.endDate)) {
                // console.log('1:',this.startDate,this.endDate)
                this.$message({
                    message: '请选择起始日期',
                    type: 'warning'
                });
                return
            }
            // console.log((this.startDate))
            // console.log(!this.endDAte)
            // console.log((this.startDate)&&(!this.endDAte))
            if((this.startDate)&&(!this.endDate)) {
                // console.log('1:',this.startDate,this.endDate)
                this.$message({
                    message: '请选择结束日期',
                    type: 'warning'
                });
                return
            }
            this.getBarData()
        },
        // 点击折线图按钮时跳转
        clickLine() {
            this.$router.push('/home/bookingSpace/echartsLine')
        },
        // 获取柱状图数据
        async getBarData() {
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
            const res = await this.$http.post('http://192.168.53.132/tp5seawatch/public/index/echarts/index.html',obj)
            if(res.status == 200 && res.data.ret == 200) {
                this.barData = res.data.data
                console.log(this.barData)
            }else {
                this.$message({
                    message: '获取数据失败',
                    type: 'warning'
                });
            }
            // console.log(res)
        },
        drawEcharts(myChart,data) {
            var option = {
                // title: {
                //     text: data.title
                // },
                color: ['#3c6291','#c23531'],
                tooltip: {},
                legend: {
                    // x: 'right',
                    padding: 10,
                    data: [
                        {name: data.titleday+'年T量'},
                        {name: data.titledayy+'年T量'}
                    ]
                },
                xAxis: {
                    data: data.shipjs
                },
                yAxis: {},
                toolbox: {
                    show: true,
                    feature: {
                        dataView: {show: true, readOnly: false},
                        magicType: {show: true, type: ['line', 'bar']},
                        restore: {show: true},
                        saveAsImage: {show: true}
                    }
                },
                series: [
                    {
                        name: data.titleday+"年T量",  // 系列名称
                        type: 'bar',  // 系列图表类型
                        data: data.countjs  // 系列中的数据内容
                    },
                    {
                        name: data.titledayy+"年T量",  // 系列名称
                        type: 'bar',  // 系列图表类型
                        data: data.countjsy  // 系列中的数据内容
                    },
                    {
                        type: 'pie',
                        radius: '20%',
                        center: ['85%','20%'],
                        data: [
                            {value: data.all,name: data.titleday+'年当段时间总T量'},
                            {value: data.ally,name: data.titledayy+'年当段时间总T量'},
                        ]
                    }
                ]
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
        margin:20px 0 10px;
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