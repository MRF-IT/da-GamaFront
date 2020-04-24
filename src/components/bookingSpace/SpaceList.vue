<template>
<div class="wrapBox">
    <div class="searchBox">
        <el-row>
            <el-col  :md="4" :sm="10" :xs="20" class="searchCol">
                <span class="condition">船东:</span>
                <input type="text" class="searchInput">
            </el-col>
            <el-col  :md="4" :sm="10" :xs="20" class="searchCol">
                <span class="condition">部门:</span>
                <input type="text" class="searchInput">
            </el-col>
            <el-col  :md="4" :sm="10" :xs="20" class="searchCol">
                <span class="condition">订舱方:</span>
                <input type="text" class="searchInput">
            </el-col>
            <el-col  :md="4" :sm="10" :xs="20" class="searchCol">
                <span class="condition">票数:</span>
                <input type="text" class="searchInput">
            </el-col>
            <el-col  :md="4" :sm="10" :xs="20" class="searchCol">
                <span class="condition">T量:</span>
                <input type="text" class="searchInput">
            </el-col>
        </el-row>
    </div>
    <div class="tableWrap">
        <div class="table">
            <div class="thead">
                <div>编号</div>
                <div>订舱员</div>
                <div>日期</div>
                <div>进程</div>
                <div>业务单号</div>
                <div>CYETD</div>
                <div>20'GP</div>
                <div>40'GP</div>
                <div>40'HQ</div>
                <div>TUE</div>
                <div>POL</div>
                <div>POD</div>
                <div>船东</div>
                <div>订舱方</div>	
                <div>Contract</div>
                <div>HPL合约号</div>	
                <div>S/O NO</div>	
                <div>VEL/VOY</div>
                <div>部门</div>
                <div>业务经理</div>
                <div>业务员</div>	
                <div>文件员</div>	
                <div>录入时间</div>
                <div>甩柜、换船</div>
                <div class="deal">操作</div>																		
            </div>
            <div class="tbody">
                <div class="tr">
                    <div>编号</div>	
                    <div>订舱员</div> 
                    <div>日期</div>
                    <div>进程</div>
                    <div>业务单号</div>
                    <div>CYETD</div>
                    <div>20'GP</div>
                    <div>40'GP</div>
                    <div>40'HQ</div>
                    <div>TUE</div>
                    <div>POL</div>
                    <div>POD</div>
                    <div>船东</div>
                    <div>订舱方</div>	
                    <div>Contract</div>
                    <div>HPL合约号</div>	
                    <div>S/O NO</div>	
                    <div>VEL/VOY</div>
                    <div>部门</div>
                    <div>业务经理</div>
                    <div>业务员</div>	
                    <div>文件员</div>	
                    <div>录入时间</div>
                    <div>甩柜、换船</div>
                    <div class="deal">
                        <div class="alter">修改</div>
                        <div class="del" @click="delList">删除</div>
                    </div>
                </div>
                
            </div>
        </div>
    </div>
    
    <!-- 分页 -->
    <el-pagination class="pagination"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400">
    </el-pagination>
  </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                {id: 111,bookingClerk: 'zs',date: '2019-11-28',process: 'jc',businessId: '1111',cyedt: '',twentyGp: '',fortyGp: '',fortyHp: '',toe: '',pol: '',pod:'',shipowner: ''}
            ],
            currentPage4: 4
        }
    },
     methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
    //   点击删除
      delList() {
        this.$confirm('确认删除该条记录吗?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
        })
        .then(()=> {

        })
        .catch(()=> {
            this.$message({
                type: 'info',
                message: '已取消删除'
            })
        })
      }
    },
}
</script>

<style scoped>
    /* .wrapBox {
        display: flex;
        flex-direction: row;
        width: 100%;
        height: 100%;
        overflow: auto
    } */
    .tableWrap {
        width: 90%;
        height: 400px;
        margin: auto;
        overflow: auto;
        border: 1px solid #333;
    }
    .thead {
        display: flex;
        flex-direction: row;
        align-items: center;
        line-height: 40px;
        font-size: 14px;
        color: #fff;
        /* overflow: auto */
    }
    .tr {
        display: flex;
        flex-direction: row;
        border-top: 1px solid #e1e5e6;
        /* border-right: 1px solid #e1e5e6; */
        align-items: center;
        line-height: 34px;
        font-size: 14px;
        /* overflow: auto */
    }
    .thead div {
        min-width: 100px;
        width: 100px;
        text-align: center;
        font-family: "微软雅黑";
        font-weight: bold;
        background: #3c6291;
        border-right: 1px solid #e1e5e6;
    }
    .deal {
        min-width: 120px !important;
        width: 120px !important;
    }  
    .tr > div {
        min-width: 100px;
        width: 100px;
        border-bottom: 1px solid #e1e5e6;
        border-left: 1px solid #e1e5e6;
        font-family: "微软雅黑";
        font-size: 12px;
        white-space: wrap;
    }
    .condition {
        color: #333;
        font-size: 12px;
        width: 60px;
        min-width: 60px;
    }
    .searchBox {
        padding: 20px;
        padding-top: 0px;
    }
    .searchCol {
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .searchInput {
        width: 100px;
        flex: 1;
        height: 20px !important;
        border: 1px solid #e1e5e6;
    }

    .pagination {
        float: right;
        margin-right: 40px;
        margin-top: 40px
    }
    .tr .deal {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        height: 34px;
    }
    .deal div {
        width: 46px;
        height: 20px;
        line-height: 20px;
        text-align: center;
        border-radius: 4px;
        color: #fff;
        font-size: 12px;
        cursor: pointer;
    }
    .deal div:hover {
        opacity: 0.9;
        /* background: rgba(255,255,255,0.8) */
    }
    .deal .alter {
        background: #3c6291;
    }
    .deal .del{
        background: #FF3000;
    }
</style>
