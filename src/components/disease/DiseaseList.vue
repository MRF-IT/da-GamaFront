<template>
<div class="wrapBox">
    <div class="searchBox">
        
        <el-row>
            <el-col :md="7" :sm="10" :xs="20" class="searchCol">
                <span class="condition">起始时间：</span>
                <el-date-picker v-model="startday" type="date" placeholder="选择日期" style="width:100%"></el-date-picker>
            </el-col>
            <el-col :md="7" :sm="10" :xs="20" class="searchCol">
                <span class="condition">结束时间：</span>
                <el-date-picker v-model="endday" type="date" placeholder="选择日期" style="width:100%"></el-date-picker>
            </el-col>
            <el-col  :md="7" :sm="10" :xs="20" class="searchCol">
                <span class="condition">部门:</span>
                <input type="text" class="searchInput" v-model="depart">
            </el-col>
            <el-col  :md="3" :sm="10" :xs="20" class="searchCol">
                <div class="searchBtn mainBg" @click="clickSearch">搜索</div>
            </el-col>
        </el-row>
    </div>


    <el-table :data="listData" style="max-width: 90%;margin: 0 auto" height="400" border>
        <el-table-column prop="bookday" label="填表日期" width="100" fixed> </el-table-column>
        <el-table-column prop="username" label="姓名" width="70"> </el-table-column>
        <el-table-column prop="englishname" label="英文名" width="100"> </el-table-column>
        <el-table-column prop="depart" label="所属部门" width="100"> </el-table-column>
        <el-table-column prop="temperature" label="体温测量" width="100"> </el-table-column>
        <el-table-column prop="pneumonia" label="小区病例" width="100"> </el-table-column>
        <el-table-column prop="optionsz" label="离开深圳" width="100"> </el-table-column>
        <el-table-column prop="healthy" label="健康" width="100"> </el-table-column>
        <el-table-column prop="place" label="休假地" width="100"> </el-table-column>
        <el-table-column prop="placem" label="现在地" width="100"> </el-table-column>
        <el-table-column prop="goday" label="回深圳时间" width="100"> </el-table-column>
        <el-table-column prop="optionhb" label="途径湖北" width="100"> </el-table-column>
        <el-table-column prop="leaveday" label="离开湖北时间" width="100"> </el-table-column>
        <el-table-column prop="optionjc" label="与重点防护区接触" width="100"> </el-table-column>
        <el-table-column prop="optionbin" label="与感染人员接触" width="100"> </el-table-column>
        <el-table-column prop="outdoors" label="是否外出" width="100"> </el-table-column>
        <el-table-column prop="mask" label="口罩型号" width="100"> </el-table-column>
        <el-table-column prop="masknum" label="口罩数量" width="100"> </el-table-column>
        <el-table-column prop="lmask" label="上班是否领口罩" width="100"> </el-table-column>
        <el-table-column prop="recordingtime" label="记录时间" width="100"> </el-table-column>
        <el-table-column label="操作" width="130" fixed="right">
            <template slot-scope="scope">
            <el-button type="primary" plain size="mini" icon="el-icon-edit" @click="showBookEditDailog(scope.row)"></el-button>
            <el-button type="danger" plain size="mini" icon="el-icon-delete" @click="delList(scope.row.bookid)"></el-button>
            </template>
        </el-table-column>
        
    </el-table>
    <!-- 分页 -->
    <div class="footer">
        <div class="TBox">
            <div>疑似症状人数:</div>
            <div class="TNumber">{{sum}}</div>
        </div>
        <div class="TBox TBox2">
            <div>自备口罩总和:</div>
            <div class="TNumber">{{zmask}}</div>
        </div>
        <el-pagination class="pagination"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
            :current-page="currentPage"
            :page-sizes="[10, 20, 30, 40]"
            :page-size=limit
            layout="total, sizes, prev, pager, next, jumper"
            :total=total>
        </el-pagination>
    </div>
    
  </div>
</template>

<script>
export default {
    data() {
        return {
            listData: [],// 订舱列表
            currentPage: 1, // 当前页码
            total: 0, // 总数
            limit: 10, // 每页显示条数
            sum: 0, // 疑似症状人数
            zmask: 0,// 自备口罩总和
            startday: '', // 录入日期
            endday: '', // 离港日期
            depart: '',// 部门
            // bookso: '',// 订舱号
            // servicenumber: '', //业务编号
        }
    },
    computed: {
        // typeText() {
        //     if(this.searchType) {
        //         return '按录入时间、船东、订舱方搜索'
        //     }else {
        //         return '按ETD、业务编号、订舱号搜索'
        //     }
        // }
    },
    created() {
        this.getBookList()
        // console.log('date:',new Date(158636160).toLocaleString())
    },
    methods: {
        // 获取订舱列表
        getBookList() { 
            // 查询条件
            var startday = this.startday
            var endday = this.endday
            // console.log(startday,'---',endday)
            if(startday) {
                startday = this.changeDate(this.startday)
            }
            if(endday) {
                endday = this.changeDate(this.endday)
            }
            var obj = {
                current: this.currentPage,
                limit: this.limit,
                startday: startday,
                endday: endday,
                depart: this.depart
            }
            // console.log(obj)
            this.$http.post('/index/pneumonia/search',obj).then( res => {
                // console.log(res)
                if(res.status === 200 && res.data.ret == 200) {
                    // console.log('data=',res.data.data.list)
                    this.listData = res.data.data.list;
                    this.listData.forEach(item => {
                        if(item.bookday) {
                            item.bookday = this.changeDate(new Date(item.bookday*1000))
                        } 
                        if(item.goday) {
                            item.goday = this.changeDate(new Date(item.goday*1000))
                        }
                        if(item.leaveday) {
                            item.leaveday = this.changeDate(new Date(item.leaveday*1000))
                        }
                        if(item.recordingtime) {
                            item.recordingtime = this.changeDate(new Date(item.recordingtime*1000))
                        }
                        
                    });
                    this.total = res.data.data.total
                    this.sum = res.data.data.sum
                    this.zmask = res.data.data.zmask
                    // this.sumtue = res.data.data.sumtue
                }else {
                    this.$message({
                        message: '请求数据失败',
                        type: 'warning'
                    });
                }
            }).catch(() => {
                this.$message({
                    message: '未连接到服务器，请求数据失败',
                    type: 'warning'
                });
            })
        },
        transformDate(date) {
            return new Date(date)
        },
        // 点击搜索时
        clickSearch() {
            if((!this.startday)&&(this.endday)) {
                this.$message({
                    message: '请选择起始时间',
                    type: 'warning'
                });
                return
            }
            if((this.startday)&&(!this.endday)) {
                this.$message({
                    message: '请选择结束时间',
                    type: 'warning'
                });
                return
            }
            this.getBookList()
        },
        // 当每页显示条数改变时
        handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
            this.limit = val
            this.currentPage = 1
            this.getBookList()
        },
        // 当前页码改变
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.currentPage = val
            this.getBookList()
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
        }

    },
}
</script>

<style scoped>
    .tableWrap {
        width: 90%;
        height: 400px;
        margin: auto;
        overflow: auto;
        border: 1px solid #333;
    }
    
    .condition {
        color: #333;
        font-size: 12px;
        margin-left: 40px;
        width: 60px;
        min-width: 60px;
    }
    .searchBox {
        position: relative;
        left: -20px;
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding:0 20px;
    }
    .searchCol {
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .searchInput {
        min-width: 20px !important;
        flex: 1;
        height: 20px !important;
        border: 1px solid #DCDFE6;
        border-radius: 5px;
        text-indent: 1em;
    }

    .pagination {
        float: right;
        /* margin-right: 40px; */
        padding-bottom: 70px;
    }
    
    .el-form-item .el-form-item {
        margin-bottom: 20px;
    }
    .row2 {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #333;
        font-size: 12px;
    }
    .row2 .block {
        margin-left: 20px;
    }
    .row2 .block input {
        height: 20px !important;
        line-height: 20px !important;
    }
    .typeBtn {
        position: fixed;
        top: 5px;
        right: 6%;
        width: 210px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 14px;
        border-radius: 4px;
        cursor: pointer;
    }
    .searchBtn {
        width: 50px;
        height: 26px;
        margin-left: 40px;
        font-size: 14px;
        line-height: 26px;
        text-align: center;
        border-radius: 4px;
        cursor: pointer;
    }
    .el-dialog__body {
        padding: 0 !important;
    }
    .TBox {
        float: left;
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #606266;
        font-size: 13px;
    }
    .TBox2 {
        margin-left: 10px;
    }
    .TNumber {
        padding:0 10px;
        line-height: 28px;
        border: 1px solid #e1e5e6;
        margin-left: 10px;
    }
    .footer {
        width: 90%;
        overflow: hidden;
        margin: 20px auto;
    }
</style>
