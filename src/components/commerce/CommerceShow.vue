<template>
<div class="wrapBox">
    <el-table :data="bookList" style="width: 90%;margin: 0 auto" height="500" border>
        <el-table-column prop="bookid" label="编号" width="100" fixed> </el-table-column>
        <el-table-column prop="bookclerk" label="订舱员" width="100"> </el-table-column>
        <el-table-column prop="bookdate" label="日期" width="100"> </el-table-column>
        <el-table-column prop="bookpro" label="进程" width="100"> </el-table-column>
        <el-table-column prop="servicenumber" label="业务单号" width="100"> </el-table-column>
        <el-table-column prop="bookcydate" label="CYETD" width="100"> </el-table-column>
        <el-table-column prop="book20gp" label="20`GP" width="100"> </el-table-column>
        <el-table-column prop="book40gp" label="40`GP" width="100"> </el-table-column>
        <el-table-column prop="book40hq" label="40`HQ" width="100"> </el-table-column>
        <el-table-column prop="booktue" label="TUE" width="100"> </el-table-column>
        <el-table-column prop="bookpol" label="POL" width="100"> </el-table-column>
        <el-table-column prop="bookpod" label="POD" width="100"> </el-table-column>
        <el-table-column prop="bookship" label="船东" width="100"> </el-table-column>
        <el-table-column prop="bookside" label="订舱方" width="100"> </el-table-column>
        <el-table-column prop="bookcontract" label="Contract" width="100"> </el-table-column>
        <el-table-column prop="hpl" label="HPL合约号" width="100"> </el-table-column>
        <el-table-column prop="bookso" label="S/O NO" width="100"> </el-table-column>
        <el-table-column prop="bookvelvoy" label="VEL/VOY" width="100"> </el-table-column>
        <el-table-column prop="bookdepart" label="部门" width="100"> </el-table-column>
        <el-table-column prop="servicemanager" label="业务经理" width="100"> </el-table-column>
        <el-table-column prop="serviceman" label="业务员" width="100"> </el-table-column>
        <el-table-column prop="fileman" label="文件员" width="100"> </el-table-column>
        <el-table-column prop="recordingtime" label="录入时间" width="100"> </el-table-column>
        <el-table-column prop="cabinet" label="甩柜、换船" width="100"> </el-table-column>
        <el-table-column label="操作" width="130" fixed="right">
            <template slot-scope="scope">
            <el-button type="primary" plain size="mini" icon="el-icon-edit" @click="showBookEditDailog(scope.row)"></el-button>
            <el-button type="danger" plain size="mini" icon="el-icon-delete" @click="delList(scope.row.id)"></el-button>
            </template>
        </el-table-column>
        
    </el-table>
    <!-- 分页 -->
    <div class="footer">
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
    

    <!-- 修改弹框 -->
    <el-dialog title="修改订舱信息" :visible.sync="bookEditDialog" @close="closeBookEditDialog" width="80%">
        <el-form :model="bookEditData" :rules="bookEditRules" ref="bookEditData">
            <el-form-item>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="bookid" label="编号" label-width="120px">
                        <el-input disabled :value="bookEditData.bookid"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="bookclerk" label="订舱员" label-width="120px">
                        <el-input :value="bookEditData.bookclerk"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="bookdate" label="日期" label-width="120px">
                        <el-date-picker type="date" placeholder="选择日期" v-model="bookEditData.bookdate" style="width: 100%;" autocomplete="off"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="bookpro" label="进程" label-width="120px">
                        <el-input v-model="bookEditData.bookpro" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="servicenumber" label="业务单号" label-width="120px">
                        <el-input v-model="bookEditData.servicenumber" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="bookcydate" label="CYETD" label-width="120px">
                        <el-date-picker type="date" placeholder="选择日期" v-model="bookEditData.bookcydate" style="width: 100%;" autocomplete="off"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="book20gp" label="20`GP" label-width="120px">
                        <el-input v-model="bookEditData.book20gp" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="book40gp" label="40`GP" label-width="120px">
                        <el-input v-model="bookEditData.book40gp" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="book40hq" label="40`HQ" label-width="120px">
                        <el-input v-model="bookEditData.book40hq" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="booktue" label="TUE" label-width="120px">
                        <el-input v-model="bookEditData.booktue" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="bookpol" label="POL" label-width="120px">
                        <el-input v-model="bookEditData.bookpol" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="bookpod" label="POD" label-width="120px">
                        <el-input v-model="bookEditData.bookpod" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="bookship" label="船东" label-width="120px">
                        <el-input v-model="bookEditData.bookship" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="bookside" label="订舱方" label-width="120px">
                        <el-input v-model="bookEditData.bookside" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="bookcontract" label="Contract" label-width="120px">
                        <el-input v-model="bookEditData.bookcontract" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="hpl" label="hpl合约号" label-width="120px">
                        <el-input v-model="bookEditData.hpl" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="bookso" label="S/O NO" label-width="120px">
                        <el-input v-model="bookEditData.bookso" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="bookvelvoy" label="VEL/VOY" label-width="120px">
                        <el-input v-model="bookEditData.bookvelvoy" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item label="部门" prop="bookdepart" label-width="120px">
                        <el-select v-model="bookEditData.bookdepart" placeholder="请选择部门">
                            <el-option label="LILY" value="LILY"></el-option>
                            <el-option label="FIONA" value="FIONA"></el-option>
                            <el-option label="JANA" value="JANA"></el-option>
                            <el-option label="JIM" value="JIM"></el-option>
                            <el-option label="TYLER" value="TYLER"></el-option>
                            <el-option label="YANNIS" value="YANNIS"></el-option>
                        </el-select>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="servicemanager" label="业务经理" label-width="120px">
                        <el-input v-model="bookEditData.servicemanager" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="serviceman" label="业务员" label-width="120px">
                        <el-input v-model="bookEditData.serviceman" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="fileman" label="文件员" label-width="120px">
                        <el-input v-model="bookEditData.fileman" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="cabinet" label="用柜、换船ETD" label-width="120px">
                        <el-input v-model="bookEditData.cabinet" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-form-item>
        </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="bookEditDialog = false">取 消</el-button>
        <el-button type="primary" @click="editBook">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
    data() {
        return {
            // typeFont: '按ETD、订舱号、业务编号搜索',
            // 订舱修改表单数据
            bookEditData: {
                bookid: '-1',
                bookclerk: '',
                bookdate: '',
                bookpro: '',
                servicenumber: '',
                bookcydate: '',
                book20gp: '',
                book40gp: '',
                book40hq: '',
                booktue: '',
                bookpol: '',
                bookpod: '',
                bookship: '',
                bookside: '',
                bookcontract: '',
                hpl: '',
                bookso: '',
                bookvelvoy: '',
                bookdepart: '',
                servicemanager: '',
                serviceman: '',
                fileman: '',
                recordingtime: '',
                cabinet: ''
            },
            // 订舱修改规则
            bookEditRules: {
                bookclerk: [
                    { required: true, message: '请输入订舱员', trigger: 'blur' }
                ],
                bookdate: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                ],
                bookpro: [
                    { required: true, message: '请输入进程', trigger: 'blur' }
                ],
                servicenumber: [
                    { required: true, message: '请输入业务单号', trigger: 'blur' }
                ],
                bookcydate: [
                    { type: 'date', required: true, message: '请选择日期', trigger: 'blur' }
                ],
                booktue: [
                    { required: true, message: '请输入TUE', trigger: 'blur' }
                ],
                bookpol: [
                    { required: true, message: '请输入POL', trigger: 'blur' }
                ],
                bookpod: [
                    { required: true, message: '请输入POD', trigger: 'blur' }
                ],
                bookship: [
                    { required: true, message: '请输入船东', trigger: 'blur' }
                ],
                bookside: [
                    { required: true, message: '请输入订舱方', trigger: 'blur' }
                ],
                bookcontract: [
                    { required: true, message: '请输入contract', trigger: 'blur' }
                ],
                bookso: [
                    { required: true, message: '请输入S/O NO', trigger: 'blur' }
                ],
                bookvelvoy: [
                    { required: true, message: '请输入VEL/VOY', trigger: 'blur' }
                ],
                bookdepart: [
                    { required: true, message: '请选择部门', trigger: 'blur' }
                ],
                servicemanager: [
                    { required: true, message: '请输入业务经理', trigger: 'blur' }
                ],
                serviceman: [
                    { required: true, message: '请输入业务员', trigger: 'blur' }
                ],
                fileman: [
                    { required: true, message: '请输入文件员', trigger: 'blur' }
                ],
            },
            bookList: [],// 订舱列表
            bookEditDialog: false, //编辑对话框
            currentPage: 1, // 当前页码
            total: 0, // 总数
            limit: 10, // 每页显示条数
        }
    },
    computed: {
        
    },
    created() {
        this.getCommerceList()
        console.log('date:',new Date(158636160).toLocaleString())
    },
    methods: {
        // 获取订舱列表
        getCommerceList() { 
            // 查询条件
            var obj = {
                current: this.currentPage,
                limit: this.limit
            }
            this.$http.post('/index/search/index.html',obj).then( res => {
                
                if(res.status === 200 && res.data.ret == 200) {
                    // console.log('data=',res.data.data.list)
                    this.bookList = res.data.data.list;
                    this.total = res.data.data.total
                    this.sumtue = res.data.data.sumtue
                }
            })
        },
        transformDate(date) {
            return new Date(date)
        },
        // 当每页显示条数改变时
        handleSizeChange(val) {
            // console.log(`每页 ${val} 条`);
            this.limit = val
            this.currentPage = 1
            this.getCommerceList()
        },
        // 当前页码改变
        handleCurrentChange(val) {
            // console.log(`当前页: ${val}`);
            this.currentPage = val
            this.getCommerceList()
        },
        //   点击删除
        delList(id) {
            this.$confirm('确认删除该条记录吗?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
            .then(()=> {
                console.log('id:',id)
            })
            .catch(()=> {
                this.$message({
                    type: 'info',
                    message: '已取消删除'
                })
            })
        },
        // 点击编辑后触发
        showBookEditDailog(bookInfo) {
            // for (const key in this.bookEditData) {
            //     this.bookEditData[key] = bookInfo[key]
            // }
            // this.bookEditDialog = true
        },
        // 关闭订舱编辑对话框
        closeBookEditDialog() {
            // console.log('ruleForm:',this.bookEditData);
            this.$refs.bookEditData.resetFields()
        },
        //编辑订舱按确定按钮后触发
        editBook() {
            this.$refs.bookEditData.validate((valid) => {
                if (valid) {
                    // console.log('ruleForm:',this.bookEditData);
                } else {
                    // console.log('ruleForm:',this.bookEditData);
                    return false;
                }
            });
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
    .pagination {
        float: right;
        /* margin-right: 40px; */
        padding-bottom: 70px;
    }
    
    .el-form-item .el-form-item {
        margin-bottom: 20px;
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
    .TNumber {
        padding:0 10px;
        line-height: 28px;
        border: 1px solid #e1e5e6;
        margin-left: 10px;
    }
    .footer {
        /* display: flex;
        flex-direction: row;
        align-items: center; */
        width: 90%;
        overflow: hidden;
        margin: 20px auto;
    }
    /* .el-input__inner {
        height: 20px !important;
        line-height: 20px !important;
    } */
</style>
