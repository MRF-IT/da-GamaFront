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
        <div class="row2">
            <div class="block">
                <span>选择录入日期：</span>
                <!-- <input type="date" class="searchInput"> -->
                <el-date-picker v-model="date1" type="date" placeholder="选择日期" style="width:150px"></el-date-picker>
            </div>
            <div class="block">
                <span>选择日期：</span>
                <el-date-picker v-model="date2" type="date" placeholder="选择日期" style="width:150px"></el-date-picker>
            </div>
            <div class="searchBtn">搜索</div>
        </div>
    </div>


    <el-table :data="bookList" style="width: 90%;margin: 0 auto" height="400" border>
        <el-table-column prop="id" label="编号" width="100" fixed> </el-table-column>
        <el-table-column prop="bookingClerk" label="订舱员" width="100"> </el-table-column>
        <el-table-column prop="date" label="日期" width="100"> </el-table-column>
        <el-table-column prop="process" label="进程" width="100"> </el-table-column>
        <el-table-column prop="businessId" label="业务单号" width="100"> </el-table-column>
        <el-table-column prop="cyetd" label="CYETD" width="100"> </el-table-column>
        <el-table-column prop="twentyGp" label="20`GP" width="100"> </el-table-column>
        <el-table-column prop="fortyGp" label="40`GP" width="100"> </el-table-column>
        <el-table-column prop="fortyHq" label="40`HQ" width="100"> </el-table-column>
        <el-table-column prop="tue" label="TUE" width="100"> </el-table-column>
        <el-table-column prop="pol" label="POL" width="100"> </el-table-column>
        <el-table-column prop="pod" label="POD" width="100"> </el-table-column>
        <el-table-column prop="shipowner" label="船东" width="100"> </el-table-column>
        <el-table-column prop="bookingSide" label="订舱方" width="100"> </el-table-column>
        <el-table-column prop="contract" label="Contract" width="100"> </el-table-column>
        <el-table-column prop="hpl" label="HPL合约号" width="100"> </el-table-column>
        <el-table-column prop="so" label="S/O NO" width="100"> </el-table-column>
        <el-table-column prop="vel" label="VEL/VOY" width="100"> </el-table-column>
        <el-table-column prop="department" label="部门" width="100"> </el-table-column>
        <el-table-column prop="businessManager" label="业务经理" width="100"> </el-table-column>
        <el-table-column prop="salesman" label="业务员" width="100"> </el-table-column>
        <el-table-column prop="documentClerk" label="文件员" width="100"> </el-table-column>
        <el-table-column prop="insertDate" label="录入时间" width="100"> </el-table-column>
        <el-table-column prop="etd" label="甩柜、换船" width="100"> </el-table-column>
        <el-table-column label="操作" width="130" fixed="right">
            <template slot-scope="scope">
            <el-button type="primary" plain size="mini" icon="el-icon-edit" @click="showBookEditDailog(scope.row)"></el-button>
            <el-button type="danger" plain size="mini" icon="el-icon-delete" @click="delList(scope.row.id)"></el-button>
            </template>
        </el-table-column>
        
    </el-table>
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

    <!-- 修改弹框 -->
    <el-dialog title="修改订舱信息" :visible.sync="bookEditDialog" @close="closeBookEditDialog" width="80%">
        <el-form :model="bookEditData" :rules="bookEditRules" ref="bookEditData">
            <el-form-item>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="id" label="编号" label-width="120px">
                        <el-input disabled :value="bookEditData.id"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="bookingClerk" label="订舱员" label-width="120px">
                        <el-input :value="bookEditData.bookingClerk"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="date" label="日期" label-width="120px">
                        <el-date-picker type="date" placeholder="选择日期" v-model="bookEditData.date" style="width: 100%;" autocomplete="off"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="process" label="进程" label-width="120px">
                        <el-input v-model="bookEditData.process" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="businessId" label="业务单号" label-width="120px">
                        <el-input v-model="bookEditData.businessId" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="cyetd" label="CYETD" label-width="120px">
                        <el-date-picker type="date" placeholder="选择日期" v-model="bookEditData.cyetd" style="width: 100%;" autocomplete="off"></el-date-picker>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="twentyGp" label="20`GP" label-width="120px">
                        <el-input v-model="bookEditData.twentyGp" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="fortyGp" label="40`GP" label-width="120px">
                        <el-input v-model="bookEditData.fortyGp" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="fortyHq" label="40`HQ" label-width="120px">
                        <el-input v-model="bookEditData.fortyHq" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="tue" label="TUE" label-width="120px">
                        <el-input v-model="bookEditData.tue" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="pol" label="POL" label-width="120px">
                        <el-input v-model="bookEditData.pol" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="pod" label="POD" label-width="120px">
                        <el-input v-model="bookEditData.pod" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="shipowner" label="船东" label-width="120px">
                        <el-input v-model="bookEditData.shipowner" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="bookingSide" label="订舱方" label-width="120px">
                        <el-input v-model="bookEditData.bookingSide" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="contract" label="Contract" label-width="120px">
                        <el-input v-model="bookEditData.contract" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="hpl" label="hpl合约号" label-width="120px">
                        <el-input v-model="bookEditData.hpl" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="so" label="S/O NO" label-width="120px">
                        <el-input v-model="bookEditData.so" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="vel" label="VEL/VOY" label-width="120px">
                        <el-input v-model="bookEditData.vel" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item label="部门" prop="department" label-width="120px">
                        <el-select v-model="bookEditData.department" placeholder="请选择部门">
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
                    <el-form-item prop="businessManager" label="业务经理" label-width="120px">
                        <el-input v-model="bookEditData.businessManager" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="salesman" label="业务员" label-width="120px">
                        <el-input v-model="bookEditData.salesman" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="documentClerk" label="文件员" label-width="120px">
                        <el-input v-model="bookEditData.documentClerk" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
                <el-col :md="7" :sm="11" :xs="20">
                    <el-form-item prop="etd" label="用柜、换船ETD" label-width="120px">
                        <el-input v-model="bookEditData.etd" autocomplete="off"></el-input>
                    </el-form-item>
                </el-col>
            </el-form-item>
        <!-- <el-form-item prop="bookingClerk" label="订舱员" label-width="120px">
          <el-input disabled :value="bookEditData.bookingClerk"></el-input>
        </el-form-item>
        <el-form-item prop="date" label="日期" label-width="120px">
          <el-input v-model="bookEditData.date" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item prop="process" label="进程" label-width="120px">
          <el-input v-model="bookEditData.process" autocomplete="off"></el-input>
        </el-form-item> -->
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
            date1: '',
            date2: '',
            bookEditData: {
                id: '-1',
                bookingClerk: '',
                date: '',
                process: '',
                businessId: '',
                cyetd: '',
                twentyGp: '',
                fortyGp: '',
                fortyHq: '',
                tue: '',
                pol: '',
                pod: '',
                shipowner: '',
                bookingSide: '',
                contract: '',
                hpl: '',
                so: '',
                vel: '',
                department: '',
                businessManager: '',
                salesman: '',
                documentClerk: '',
                insertDate: '',
                etd: ''
            },
            bookEditRules: {
                bookingClerk: [
                    { required: true, message: '请输入订舱员', trigger: 'blur' }
                ],
                // date: [
                //     { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                // ],
                // process: [
                //     { required: true, message: '请输入进程', trigger: 'blur' }
                // ],
                // businessId: [
                //     { required: true, message: '请输入业务单号', trigger: 'blur' }
                // ],
                // etdcy: [
                //     { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
                // ],
                // twentyGp: [
                //     // { required: true, message: '请输入20`GP', trigger: 'blur' }
                // ],
                // fortyGp: [
                //     // { required: true, message: '请输入40`GP', trigger: 'blur' }
                // ],
                // fortyHq: [
                //     // { required: true, message: '请输入40`HQ', trigger: 'blur' }
                // ],
                // tue: [
                //     { required: true, message: '请输入TUE', trigger: 'blur' }
                // ],
                // pol: [
                //     { required: true, message: '请输入POL', trigger: 'blur' }
                // ],
                // pod: [
                //     { required: true, message: '请输入POD', trigger: 'blur' }
                // ],
                // shipowner: [
                //     { required: true, message: '请输入船东', trigger: 'blur' }
                // ],
                // bookingSide: [
                //     { required: true, message: '请输入订舱方', trigger: 'blur' }
                // ],
                // contract: [
                //     { required: true, message: '请输入contract', trigger: 'blur' }
                // ],
                // hpl: [
                //     // { required: true, message: '请输入hpl合约号', trigger: 'blur' }
                // ],
                // so: [
                //     { required: true, message: '请输入S/O NO', trigger: 'blur' }
                // ],
                // vel: [
                //     { required: true, message: '请输入VEL/VOY', trigger: 'blur' }
                // ],
                // department: [
                //     { required: true, message: '请选择部门', trigger: 'blur' }
                // ],
                // businessManager: [
                //     { required: true, message: '请输入业务经理', trigger: 'blur' }
                // ],
                // salesman: [
                //     { required: true, message: '请输入业务员', trigger: 'blur' }
                // ],
                // documentClerk: [
                //     { required: true, message: '请输入文件员', trigger: 'blur' }
                // ],
                // etd: [
                //     // { required: true, message: '请输入甩柜、换船ETD', trigger: 'blur' }
                // ],
            },
            bookList: [ //订舱列表
                {
                    id: '1',
                    bookingClerk: 'zs',
                    date: '2019-11-28',
                    process: 'jc',
                    businessId: '这是一段文字',
                    cyetd: '这是一段文字',
                    twentyGp: '这是一段文字',
                    fortyGp: '这是一段文字',
                    fortyHq: '这是一段文字',
                    tue: '这是一段文字',
                    pol: '这是一段文字',
                    pod: '这是一段文字',
                    shipowner: '这是一段文字',
                    bookingSide: '这是一段文字',
                    contract: '这是一段文字',
                    hpl: '这是一段文字',
                    so: '这是一段文字',
                    vel: '这是一段文字',
                    department: '部门',
                    businessManager: '这是一段文字',
                    salesman: '这是一段文字',
                    documentClerk: '这是一段文字',
                    insertDate: '这是一段文字',
                    etd: '这是一段文字'
                }
            ],
            bookEditDialog: false, //编辑对话框
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
            for (const key in this.bookEditData) {
                this.bookEditData[key] = bookInfo[key]
            }
            this.bookEditDialog = true
        },
        // 关闭订舱编辑对话框
        closeBookEditDialog() {
            console.log('ruleForm:',this.bookEditData);
            this.$refs.bookEditData.resetFields()
        },
        //编辑订舱按确定按钮后触发
        editBook() {
            // console.log('ruleForm:',this.bookEditData);
            this.$refs.bookEditData.validate((valid) => {
                if (valid) {
                    // alert('submit!');
                    console.log('ruleForm:',this.bookEditData);
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
        margin-left: 20px;
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
        margin-top: 40px;
        padding-bottom: 90px;
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
    .searchBtn {
        width: 50px;
        height: 26px;
        margin-left: 20px;
        background: #3c6291;
        color: #fff;
        font-size: 14px;
        line-height: 26px;
        text-align: center;
        border-radius: 4px;
        cursor: pointer;
    }
    /* .el-input__inner {
        height: 20px !important;
        line-height: 20px !important;
    } */
</style>
