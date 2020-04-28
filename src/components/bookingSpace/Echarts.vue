<template>
    <div class="wrapBox">
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

        }
    },
    mounted() {
        var chart1 = document.getElementById('shipowner')
        var chart2 = document.getElementById('businessman')
        var chart3 = document.getElementById('businessmanager')
        this.drawLine(chart1,'船东2020和2019年的T量展示')
        this.drawLine(chart2,'业务员2020和2019年的T量展示')
        this.drawLine(chart3,'业务经理2020和2019年的T量展示')
    },
    methods: {
        drawLine(myChart,title) {
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
    .businessmanager {
        margin-bottom: 90px;
    }

</style>