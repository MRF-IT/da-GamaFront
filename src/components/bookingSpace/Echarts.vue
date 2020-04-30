<template>
    <div class="wrapBox">
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
        <div id="shipowner" class="shipowner echartsBox"></div>
        <div id="businessman" class="businessman echartsBox"></div>
        <div id="businessmanager" class="businessmanager echartsBox"></div>


    </div>
</template>
<script>
export default {
    data() {
        return {
            startDate: '',
            endDate: '',
            barData: [],
            lineData: []
        }
    },
    created() {
        this.getBarData()
    },
    mounted() {
        
        // var line1 = document.getElementById('foldLine1')
        var chart1 = document.getElementById('shipowner')
        var chart2 = document.getElementById('businessman')
        var chart3 = document.getElementById('businessmanager')
        // this.drawLine(line1,'船东2020和2019年的T量展示')
        this.drawBar(chart1,'船东2020和2019年的T量展示')
        this.drawBar(chart2,'业务员2020和2019年的T量展示')
        this.drawBar(chart3,'业务经理2020和2019年的T量展示')
    },
    methods: {
        // 点击搜索触发
        clickSearch() {
            // console.log('startDate:',this.startDate.getFullYear(),'---endDate:',this.endDate)
        },
        // 获取柱状图数据
        async getBarData() {
            const res = await this.$http.post('/index/echarts/index.html')
            if(res.status == 200 && res.data.ret == 200) {
                this.barData = res.data.data
            }
            // console.log(res)
        },
        // 画折线图
        drawLine(myChart,title) {
             var option = {
                title: {
                    text: title
                },
                color: ['#3c6291','#c23531'],
                tooltip: {},
                legend: {
                    // x: 'right',
                    padding: 10,
                    data: [
                        {name: '2020年T量'},
                        {name: '2019年T量'}
                    ]
                },
                xAxis: {
                    data: ["HPL","MSK","APL","EMC","COSCO","OOCL","ONE","CMA"]
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
                        name: '2020年T量',  // 系列名称
                        type: 'line',  // 系列图表类型
                        data: [5, 20, 36, 10, 10, 20,8,12]  // 系列中的数据内容
                    },
                    {
                        name: '2019年T量',  // 系列名称
                        type: 'line',  // 系列图表类型
                        data: [15, 69, 36, 60, 40, 20,8,12]  // 系列中的数据内容
                    },
                ]
            };
 
            // // 使用刚指定的配置项和数据显示图表。
            this.$echarts.init(myChart).setOption(option);
        },
        // 画柱形图
        drawBar(myChart,title) {
            // 基于准备好的dom，初始化echarts实例
    
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: title
                },
                color: ['#3c6291','#c23531'],
                tooltip: {},
                legend: {
                    // x: 'right',
                    padding: 10,
                    data: [
                        {name: '2020年T量'},
                        {name: '2019年T量'}
                    ]
                },
                xAxis: {
                    data: ["HPL","MSK","APL","EMC","COSCO","OOCL","ONE","CMA"]
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
                        name: '2020年T量',  // 系列名称
                        type: 'bar',  // 系列图表类型
                        data: [5, 20, 36, 10, 10, 20,8,12]  // 系列中的数据内容
                    },
                    {
                        name: '2019年T量',  // 系列名称
                        type: 'bar',  // 系列图表类型
                        data: [15, 69, 36, 60, 40, 20,8,12]  // 系列中的数据内容
                    },
                    {
                        type: 'pie',
                        radius: '20%',
                        center: ['85%','15%'],
                        data: [
                            {value: 121,name: '2020年当段时间总T量'},
                            {value: 260,name: '2019年当段时间总T量'},
                        ]
                    }
                ]
            };
 
            // // 使用刚指定的配置项和数据显示图表。
            this.$echarts.init(myChart).setOption(option);
        }
    }
}
</script>
<style scoped>
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

</style>