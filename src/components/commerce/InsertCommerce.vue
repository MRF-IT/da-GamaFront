<template>
  <div class="wrapBox">
    <!-- <div style="overflow:auto"> -->
      <el-form :model="formData" :rules="rules" ref="ruleForm" label-width="120px" class="demo-ruleForm">
        <el-form-item>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="业务员" prop="clerk">
              <el-input v-model="formData.clerk"></el-input>
            </el-form-item>
          </el-col>
          
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="所属部门" prop="nowdepart">
                <el-input v-model="formData.nowdepart"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="隶属部门" prop="nowmember">
              <el-input v-model="formData.nowmember"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="参考号" prop="referencenum">
              <el-input v-model="formData.referencenum"></el-input>
            </el-form-item>
          </el-col>
          
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="订舱号" prop="bookingnum">
                <el-input v-model="formData.bookingnum"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="工作号" prop="jobnum">
              <el-input v-model="formData.jobnum"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="起运港国家" prop="departurecountry">
              <el-input v-model="formData.departurecountry"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="起运港" prop="departure">
              <el-input v-model="formData.departure"></el-input>
            </el-form-item>
          </el-col>
          
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="目的港" prop="destination">
              <el-input v-model="formData.destination"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="目的港国家" prop="destinationcountry">
              <el-input v-model="formData.destinationcountry"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="柜型" prop="cabinettype">
              <el-input v-model="formData.cabinettype"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="20`" prop="type20">
              <el-input v-model="formData.type20"></el-input>
            </el-form-item>
          </el-col>

          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="40`" prop="type40">
              <el-input v-model="formData.type40"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="45`" prop="type45">
              <el-input v-model="formData.type45"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="HQ" prop="typehq">
              <el-input v-model="formData.typehq"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="其他" prop="othertype">
              <el-input v-model="formData.othertype"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="TEU" prop="teu">
              <el-input v-model="formData.teu"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="ETD" prop="etdtime">
              <el-date-picker type="date" placeholder="选择日期" v-model="formData.etdtime" style="width: 100%;"></el-date-picker>
            </el-form-item>
          </el-col>

          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="船名航次" prop="vevo">
              <el-input v-model="formData.vevo"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="航线区域" prop="routearea">
              <el-input v-model="formData.routearea"></el-input>
            </el-form-item>
          </el-col>
          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="船东名字" prop="shipowner">
              <el-input v-model="formData.shipowner"></el-input>
            </el-form-item>
          </el-col>

          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="合约号" prop="contractno">
              <el-input v-model="formData.contractno"></el-input>
            </el-form-item>
          </el-col>

          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="订舱状态" prop="bookingstatus">
              <el-input v-model="formData.bookingstatus"></el-input>
            </el-form-item>
          </el-col>

          <el-col :md="7" :sm="11" :xs="20">
            <el-form-item label="预审" prop="preliminary">
              <el-input v-model="formData.preliminary"></el-input>
            </el-form-item>
          </el-col>

          <!-- <el-col :md="24"  class="button">
            <el-button type="primary" @click="submitForm('ruleForm')">确认录入</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-col> -->
        </el-form-item>
        <div class="buttons">
          <div class="button button-ensure" @click="submitForm('ruleForm')">确认录入</div>
          <div @click="resetForm('ruleForm')" class="button button-reset">重置</div>
        </div>
      </el-form>
    <!-- </div> -->
    <!-- <breadcrumb :breadcrumb="['订舱管理','录入订舱']"></breadcrumb> -->
    
  </div>
</template>

<script>
  import axios from 'axios'
  // import breadcrumb from '../common/breadcrumb'
  export default {
    data() {
      return {
        formData: {
          clerk: '',
          nowdepart: '',
          nowmember: '',
          referencenum: '',
          bookingnum: '',
          jobnum: '',
          departurecountry: '',
          departure: '',
          destination: '',
          destinationcountry: '',
          cabinettype: '',
          type20: '',
          type40: '',
          type45: '',
          typehq: '',
          othertype: '',
          teu: '',
          etdtime: '',
          vevo: '',
          routearea:　'',
          shipowner: '',
          contractno: '',
          bookingstatus: '',
          preliminary: ''
        },
        rules: {
          clerk: [
            { required: true, message: '请输入业务员', trigger: 'blur' },
            // { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          nowdepart: [
            { required: true, message: '请输入所属部门', trigger: 'blur' }
          ],
          nowmember: [
            { required: true, message: '请输入隶属部门', trigger: 'blur' }
          ],
          referencenum: [
            { required: true, message: '请输入参考号', trigger: 'blur' }
          ],
          bookingnum: [
            {  required: true, message: '请输入订舱号', trigger: 'blur' }
          ],
          jobnum: [
            { required: true, message: '请输入工作号', trigger: 'blur' }
          ],
          departurecountry: [
            { required: true, message: '请输入起运港国家', trigger: 'blur' }
          ],
          departure: [
            { required: true, message: '请输入起运港', trigger: 'blur' }
          ],
          destination: [
            { required: true, message: '请输入目的港', trigger: 'blur' }
          ],
          destinationcountry: [
            { required: true, message: '请输入目的港国家', trigger: 'blur' }
          ],
          cabinettype: [
            { required: true, message: '请输入柜型', trigger: 'blur' }
          ],
          type20: [
            { required: true, message: '请输入20`', trigger: 'blur' }
          ],
          type40: [
            { required: true, message: '请输入40`', trigger: 'blur' }
          ],
          type45: [
            { required: true, message: '请输入45`', trigger: 'blur' }
          ],
          typehq: [
            { required: true, message: '请输入HQ', trigger: 'blur' }
          ],
          othertype: [
            { required: true, message: '请输入其他', trigger: 'blur' }
          ],
          teu: [
            { required: true, message: '请输入TEU', trigger: 'blur' }
          ],
          etdtime: [
            { type: 'date', required: true, message: '请选择ETD', trigger: 'blur' }
          ],
          vevo: [
            { required: true, message: '请输入船名航次', trigger: 'blur' }
          ],
          routearea: [
            { required: true, message: '请输入航线区域', trigger: 'blur' }
          ],
          shipowner: [
            { required: true, message: '请输入船东名字', trigger: 'blur' }
          ],
          contractno: [
            { required: true, message: '请输入合约号', trigger: 'blur' }
          ],
          bookingstatus: [
            { required: true, message: '请输入订舱状态', trigger: 'blur' }
          ],
          preliminary: [
            { required: true, message: '请输入预审', trigger: 'blur' }
          ]
        }
      };
    },
    // components: {breadcrumb},
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            // alert('submit!');
            // console.log('ruleForm:',this.ruleForm);
            // console.log('etdtime:',this.formData.etdtime)
            this.formData.etdtime = this.changeDate(this.formData.etdtime)
            this.$http.post('/index/add/indextrade',this.formData).then(res => {
              if(res.status == 200 && res.data.ret == 200) {
                this.resetForm('ruleForm')
                this.$message({
                  message: '商务录入成功！',
                  type: 'success'
                });
              }else {
                this.$message({
                  message: '商务录入失败',
                  type: 'warning'
                });
              }
            })
            // console.log(res)
          } else {
            // console.log('ruleForm:',this.ruleForm);
            // this.$http.post('http://127.0.0.1:8888/').then(res => {
            //   console.log(res)
            // })
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      changeDate(str) {
        return str.getFullYear()+'-'+(str.getMonth()+1)+'-'+str.getDate()
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
  .buttons {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
  .button {
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

