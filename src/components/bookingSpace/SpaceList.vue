<template>
<div class="wrapBox">
    <div class="searchBox">
        <div class="typeBtn" @click="searchTypeChange">{{typeText}}</div>
        <el-row>
            <!-- <el-col :md="8" :sm="10" :xs="20" class="searchCol">
                <div></div>
            </el-col> -->
            <el-col :md="8" :sm="10" :xs="20" class="searchCol" v-if="searchType">
                <span class="condition">ETD时间：</span>
                <el-date-picker v-model="date1" type="date" placeholder="选择日期" style="width:100%"></el-date-picker>
            </el-col>
            <el-col :md="8" :sm="10" :xs="20" class="searchCol" v-if="!searchType">
                <span class="condition">录入时间：</span>
                <el-date-picker v-model="date1" type="date" placeholder="选择日期" style="width:100%"></el-date-picker>
            </el-col>
            <el-col :md="8" :sm="10" :xs="20" class="searchCol">
                <span class="condition">离港时间：</span>
                <el-date-picker v-model="date1" type="date" placeholder="选择日期" style="width:100%"></el-date-picker>
            </el-col>
            <el-col  :md="8" :sm="10" :xs="20" class="searchCol">
                <span class="condition">部门:</span>
                <input type="text" class="searchInput">
            </el-col>
            <el-col  :md="8" :sm="10" :xs="20" class="searchCol" v-if="!searchType">
                <span class="condition">船东:</span>
                <input type="text" class="searchInput">
            </el-col>
            <el-col  :md="8" :sm="10" :xs="20" class="searchCol" v-if="!searchType">
                <span class="condition">订舱方:</span>
                <input type="text" class="searchInput">
            </el-col>
            <el-col  :md="8" :sm="10" :xs="20" class="searchCol" v-if="searchType">
                <span class="condition">订舱号:</span>
                <input type="text" class="searchInput">
            </el-col>
            <el-col  :md="8" :sm="10" :xs="20" class="searchCol" v-if="searchType">
                <span class="condition">业务编号:</span>
                <input type="text" class="searchInput">
            </el-col>
            <el-col  :md="8" :sm="10" :xs="20" class="searchCol">
                <div class="searchBtn">搜索</div>
            </el-col>
        </el-row>
        <!-- <el-row>
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
                <el-date-picker v-model="date1" type="date" placeholder="选择日期" style="width:150px"></el-date-picker>
            </div>
            <div class="block">
                <span>选择日期：</span>
                <el-date-picker v-model="date2" type="date" placeholder="选择日期" style="width:150px"></el-date-picker>
            </div>
            <div class="searchBtn">搜索</div>
        </div> -->
    </div>


    <el-table :data="bookList" style="width: 90%;margin: 0 auto" height="400" border>
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
            searchType: true,
            // typeFont: '按ETD、订舱号、业务编号搜索',
            date1: '',
            date2: '',
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
                    bookid: '1',
                    bookclerk: 'zs',
                    bookdate: '2019-11-28',
                    bookpro: 'jc',
                    servicenumber: '这是一段文字',
                    bookcydate: '这是一段文字',
                    book20gp: '这是一段文字',
                    book40gp: '这是一段文字',
                    book40hq: '这是一段文字',
                    booktue: '这是一段文字',
                    bookpol: '这是一段文字',
                    bookpod: '这是一段文字',
                    bookship: '这是一段文字',
                    bookside: '这是一段文字',
                    bookcontract: '这是一段文字',
                    hpl: '这是一段文字',
                    bookso: '这是一段文字',
                    bookvelvoy: '这是一段文字',
                    bookdepart: '部门',
                    servicemanager: '这是一段文字',
                    serviceman: '这是一段文字',
                    fileman: '这是一段文字',
                    recordingtime: '这是一段文字',
                    cabinet: '这是一段文字'
                }
            ],
            bookEditDialog: false, //编辑对话框
            currentPage4: 4
        }
    },
    computed: {
        typeText() {
            if(this.searchType) {
                return '按录入时间、船东、订舱方搜索'
            }else {
                return '按ETD、业务编号、订舱号搜索'
            }
        }
    },
    created() {
        this.getBookList()
    },
    methods: {
        getBookList() { // 获取订舱列表
            this.$http.post('/index/search/index').then( res => {
                console.log(res)
                if(res.status === 200 && res.data.ret == 200) {
                    this.bookList = res.data.data.list.data
                }
            })
        },
        searchTypeChange() {
            this.searchType = !this.searchType
        },
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
        margin-left: 40px;
        width: 60px;
        min-width: 60px;
    }
    .searchBox {
        width: 90%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding:0 20px;
    }
    /* .searchCol:first-child {
        margin-top: 20px;
    } */
    .searchCol {
        margin-bottom: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .searchInput {
        /* width: 100px; */
        min-width: 20px !important;
        flex: 1;
        height: 20px !important;
        border: 1px solid #DCDFE6;
        border-radius: 5px;
    }

    .pagination {
        float: right;
        margin-right: 40px;
        margin-top: 20px;
        padding-bottom: 70px;
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
        margin-left: 40px;
        background: #3c6291;
        color: #fff;
        font-size: 14px;
        line-height: 26px;
        text-align: center;
        border-radius: 4px;
        cursor: pointer;
    }
    .typeBtn {
        width: 84px;
        min-width: 84px;
        margin-top: -20px;
        /* height: 80px; */
        background: #3c6291;
        color: #fff;
        line-height: 1.5em;
        padding: 10px;
        font-size: 14px;
        border-radius: 5px;
        overflow: hidden;
        white-space: normal;
        word-wrap: break-all;
        cursor: pointer;
    }
    /* .el-input__inner {
        height: 20px !important;
        line-height: 20px !important;
    } */
</style>
