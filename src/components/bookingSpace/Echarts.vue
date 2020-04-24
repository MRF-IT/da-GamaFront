<template>
    <div class="wrapBox">
        <!-- 船东 -->
        <div id="shipowner" class="shipowner">

        </div>
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
        this.drawLine(chart1)
    },
    methods: {
        drawLine(myChart) {
            // 基于准备好的dom，初始化echarts实例
    
            // 指定图表的配置项和数据
            var option = {
                title: {
                    text: '船东2020和2019年的T量展示'
                },
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
                series: [
                    {
                        name: '2020年T量',  // 系列名称
                        type: 'bar',  // 系列图表类型
                        color: '#3c6291',
                        data: [5, 20, 36, 10, 10, 20,8,12]  // 系列中的数据内容
                    },
                    {
                        name: '2019年T量',  // 系列名称
                        type: 'bar',  // 系列图表类型
                        data: [15, 70, 36, 60, 40, 20,8,12]  // 系列中的数据内容
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
    .shipowner {
        width: 830px;
        height: 500px;
        margin: auto;
        border: 1px solid #e1e5e6;
    }

</style>