<template>
  <div class="wrapBox">
    <!-- <div style="overflow:auto"> -->
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="订舱员" prop="name">
              <el-input v-model="ruleForm.name"></el-input>
            </el-form-item>
          </el-col>
          
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="日期" prop="date">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.date" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="进程" prop="process">
              <el-input v-model="ruleForm.process"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="业务单号" prop="businessId">
              <el-input v-model="ruleForm.businessId"></el-input>
            </el-form-item>
          </el-col>
          
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="ETDCY" prop="etdcy">
              <el-date-picker type="date" placeholder="选择日期" v-model="ruleForm.etdcy" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="20`GP" prop="twentyGp">
              <el-input v-model="ruleForm.twentyGp"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="40`GP" prop="fortyGp">
              <el-input v-model="ruleForm.fortyGp"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="40`HQ" prop="fortyHq">
              <el-input v-model="ruleForm.fortyHq"></el-input>
            </el-form-item>
          </el-col>
          
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="TUE" prop="tue">
              <el-input v-model="ruleForm.tue"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="POL" prop="pol">
              <el-input v-model="ruleForm.pol"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="POD" prop="pod">
              <el-input v-model="ruleForm.pod"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="船东" prop="shipowner">
              <el-input v-model="ruleForm.shipowner"></el-input>
            </el-form-item>
          </el-col>

          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="订舱方" prop="bookingSide">
              <el-input v-model="ruleForm.bookingSide"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="Contract" prop="contract">
              <el-input v-model="ruleForm.contract"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="hpl合约号" prop="hpl">
              <el-input v-model="ruleForm.hpl"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="S/O NO" prop="so">
              <el-input v-model="ruleForm.so"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="VEL/VOY" prop="vel">
              <el-input v-model="ruleForm.vel"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="部门" prop="department">
              <el-select v-model="ruleForm.department" placeholder="请选择部门">
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
            <el-form-item label="业务经理" prop="businessManager">
              <el-input v-model="ruleForm.businessManager"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="业务员" prop="salesman">
              <el-input v-model="ruleForm.salesman"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="文件员" prop="documentClerk">
              <el-input v-model="ruleForm.documentClerk"></el-input>
            </el-form-item>
          </el-col>

          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="甩柜、换船ETD" prop="etd">
              <el-input v-model="ruleForm.etd"></el-input>
            </el-form-item>
          </el-col>

          <!-- <el-col :md="24"  class="button">
            <el-button type="primary" @click="submitForm('ruleForm')">确认录入</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-col> -->
        </el-form-item>
        <el-form-item class="button">
          <el-button type="primary" @click="submitForm('ruleForm')">确认录入</el-button>
          <el-button @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
      </el-form>
    <!-- </div> -->
    <!-- <breadcrumb :breadcrumb="['订舱管理','录入订舱']"></breadcrumb> -->
    
  </div>
</template>

<script>
  // import breadcrumb from '../common/breadcrumb'
  export default {
    data() {
      return {
        ruleForm: {
          name: '',
          date: '',
          process: '',//进程
          businessId: '',//业务单号
          etdcy: '',
          twentyGp: '',
          fortyGp: '',
          fortyHp: '',
          tue: '',
          pol: '',
          pod: '',
          shipowner: '',//船东
          bookingSide: '',//订舱方
          contract: '',
          hpl: '',
          so: '',
          vel: '',
          department: '',//部门
          businessManager: '',//业务经理
          salesman:　'',//业务员
          documentClerk: '',//文件员
          etd: '',
        },
        rules: {
          name: [
            { required: true, message: '请输入订舱员姓名', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          date: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          process: [
            { required: true, message: '请输入进程', trigger: 'blur' }
          ],
          businessId: [
            { required: true, message: '请输入业务单号', trigger: 'blur' }
          ],
          etdcy: [
            { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
          ],
          twentyGp: [
            // { required: true, message: '请输入20`GP', trigger: 'blur' }
          ],
          fortyGp: [
            // { required: true, message: '请输入40`GP', trigger: 'blur' }
          ],
          fortyHq: [
            // { required: true, message: '请输入40`HQ', trigger: 'blur' }
          ],
          tue: [
            { required: true, message: '请输入TUE', trigger: 'blur' }
          ],
          pol: [
            { required: true, message: '请输入POL', trigger: 'blur' }
          ],
          pod: [
            { required: true, message: '请输入POD', trigger: 'blur' }
          ],
          shipowner: [
            { required: true, message: '请输入船东', trigger: 'blur' }
          ],
          bookingSide: [
            { required: true, message: '请输入订舱方', trigger: 'blur' }
          ],
          contract: [
            { required: true, message: '请输入contract', trigger: 'blur' }
          ],
          hpl: [
            // { required: true, message: '请输入hpl合约号', trigger: 'blur' }
          ],
          so: [
            { required: true, message: '请输入S/O NO', trigger: 'blur' }
          ],
          vel: [
            { required: true, message: '请输入VEL/VOY', trigger: 'blur' }
          ],
          department: [
            { required: true, message: '请选择部门', trigger: 'blur' }
          ],
          businessManager: [
            { required: true, message: '请输入业务经理', trigger: 'blur' }
          ],
          salesman: [
            { required: true, message: '请输入业务员', trigger: 'blur' }
          ],
          documentClerk: [
            { required: true, message: '请输入文件员', trigger: 'blur' }
          ],
          etd: [
            // { required: true, message: '请输入甩柜、换船ETD', trigger: 'blur' }
          ],
        }
      };
    },
    // components: {breadcrumb},
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            console.log('ruleForm:',this.ruleForm);
          } else {
            console.log('ruleForm:',this.ruleForm);
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }
</script>

<style scoped>
  .wrapBox {
    width: 100%;
    height: 100%;
    overflow: auto
  }
  .el-button--primary {
    color: #FFF;
    background-color: #3C6291;
    border-color: #3C6291;
  }
  /* .el-button--primary:hover {

  } */
  .el-button--default:hover{
    color: #3C6291;
  }
  .button {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .el-button {
    width: 100px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding: 0;
  }
  .el-form {
    padding-bottom: 90px;
  }
  .el-form-item > .el-form-item__content:first-child {
    margin-left: 50px !important;
  }
  .el-form-item {
    margin-bottom: 0px !important;
  }
  .el-form-item .el-form-item {
    margin-bottom: 22px !important;
  }
</style>

