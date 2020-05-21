<template>
    <div class="flex">
        <div>
            <div class="searchBox">
                <input placeholder="请输入工作单号" v-model="mbfNum" class="searchInput">
                <div class="mainBg searchBtn">搜索</div>
            </div>
            <div>
                <el-table :data="listData" style="margin: 20px auto 0; max-height: 400px" border>
                    <!-- <el-table-column prop="mbfid" label="订舱号" width="100" fixed> </el-table-column> -->
                    <el-table-column prop="mbfnum" label="工作单号" width="180"> </el-table-column>
                    <el-table-column prop="mbffilename" label="文件名" width="340"> </el-table-column>
                    <el-table-column prop="mbfstatus" label="文件状态" width="100"> </el-table-column>
                    <el-table-column prop="mbftime" label="上传时间" width="120"> </el-table-column>
                </el-table>
            </div>
            

            <div class="paginationBox">
                <el-pagination class="pagination"
                    @size-change="handleSizeChange"
                    @current-change="handleCurrentChange"
                    :current-page="current"
                    :page-sizes="[10, 20, 30, 40]"
                    :page-size=limit
                    layout="total, sizes, prev, pager, next, jumper"
                    :total=total>
                </el-pagination>
            </div>
        </div>
        
        
    </div>
</template>
<script>
export default {
    data() {
        return {
            listData: [],
            current: 1,
            limit: 10,
            total: 0,
            mbfNum: ''
        }
    },
    created() {
        this.getList();
    },
    methods: {
        getList() {
            this.$http.post('/index/edishow/index',{current: this.current,limit: this.limit,mbfnum: this.mbfNum}).then((res) => {
                // console.log(res)
                if(res.status == 200 && res.data.ret == 200) {
                    this.listData = res.data.data.list
                    this.total = res.data.data.total
                    this.listData.forEach((item,index) => {
                        item.mbftime = this.changeDate(new Date(item.mbftime*1000))
                    })
                    // console.log(this.listData)
                }else {
                    this.$message({
                        message: '数据请求失败',
                        type: 'warning'
                    })
                }
            }).catch(() => {
                this.$message({
                    message: '未连接到服务器，数据请求失败',
                    type: 'warning'
                })
            })
        },
        changeDate(str) {
            return str.getFullYear()+'-'+this.checkNum(str.getMonth()+1)+'-'+this.checkNum(str.getDate())
        },
        checkNum(num) {
            if(num < 10) {
                return '0'+num
            }else {
                return num
            }
        },
        // 当每页显示条数改变时
        handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
            this.limit = val
            this.current = 1
            this.getList()
        },
        // 当前页码改变
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.current = val
            this.getList()
        },
    }
}
</script>
<style scoped>
.flex {
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.pagination {
    float: right;
    margin-top: 10px;
    /* margin-right: 40px; */
    padding-bottom: 70px;
}
.paginationBox {
    /* width: 682px; */
    margin: 0 auto;
    /* display: flex;
    flex-direction: row;
    justify-content: center; */
    overflow: hidden;
}
.searchBox {
    /* width: 682px; */
    margin: 40px auto 0;
    display: flex;
    flex-direction: row;
    align-items: center;
}
.searchBtn {
    width: 50px;
    height: 26px;
    margin-left: 10px;
    font-size: 14px;
    line-height: 26px;
    text-align: center;
    border-radius: 4px;
    cursor: pointer;
}
.searchInput {
    /* width: 100px; */
    width: 200px;
    height: 24px !important;
    border: 1px solid #DCDFE6;
    border-radius: 5px;
    text-indent: 1em;
}
</style>