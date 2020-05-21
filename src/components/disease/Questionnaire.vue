<template>
    <div class="wrapBox">
        <div class="section">
            <el-form :model="questionData" label-width="100px" :rules="rules" ref="infoForm">
                <el-form-item>
                    <el-col :span="7">
                        <el-form-item label="姓名" class="form-item" prop="username">
                            <el-input v-model="questionData.username"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="英文名" class="form-item" prop="englishname">
                            <el-input v-model="questionData.englishname"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" class="form-item">
                        <el-form-item label="部门" prop="depart">
                            <el-select  placeholder="请选择部门" v-model="questionData.depart">
                                <el-option v-for="(item,index) in departData" :key="index" :label="item.departname" :value="item.departname"></el-option>
                                
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-form-item>
            </el-form>
            <div class="questions">
                <el-form label-position="top" :model="questionData" :rules="rules" ref="questionsForm">
                    <el-form-item label="1.请问您是否离开过公司所在地？" prop="optionsz">
                        <el-radio v-model="questionData.optionsz" label="是">是</el-radio>
                        <el-radio v-model="questionData.optionsz" label="否">否</el-radio>
                    </el-form-item>
                    <el-form-item label="2.请问您的身体状况如何？" prop="healthy">
                        <el-radio v-model="questionData.healthy" label="良好">良好</el-radio>
                        <el-radio v-model="questionData.healthy" label="有疑似症状（发热、乏力、呼吸困难）">有疑似症状（发热、乏力、呼吸困难）</el-radio>
                    </el-form-item>
                    <el-form-item label="3.请问您在公司所在地居住的小区是否发生疫情病例？" prop="pneumonia">
                        <el-radio v-model="questionData.pneumonia" label="是">是</el-radio>
                        <el-radio v-model="questionData.pneumonia" label="否">否</el-radio>
                    </el-form-item>
                    <el-form-item label="4.请问您有测量过体温吗？（如无测量、36.5度）" prop="temperature">
                        <el-input class="questionInput" v-model="questionData.temperature" required></el-input>
                    </el-form-item>
                    <el-form-item label="5.填表日期" prop="bookday">
                        <el-date-picker type="date" placeholder="选择日期" v-model="questionData.bookday" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="6.请问您年休假的去向是？" prop="place">
                        <el-input class="questionInput" v-model="questionData.place"></el-input>
                    </el-form-item>
                    <el-form-item label="7.请问您现在在何地？" prop="placem">
                        <el-input class="questionInput" v-model="questionData.placem"></el-input>
                    </el-form-item>
                    <el-form-item label="8.请问您何时回公司所在地或计划何时回公司所在地？" prop="goday">
                        <el-date-picker type="date" placeholder="选择日期" v-model="questionData.goday" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="9.请问您是否到过湖北省？" prop="optionhb">
                        <el-radio v-model="questionData.optionhb" label="是">是</el-radio>
                        <el-radio v-model="questionData.optionhb" label="否">否</el-radio>
                    </el-form-item>
                    <el-form-item label="10.请问您何时离开湖北或现在在湖北计划何时离开湖北？" prop="leaveday">
                        <el-date-picker type="date" placeholder="选择日期" v-model="questionData.leaveday" style="width: 100%;"></el-date-picker>
                    </el-form-item>
                    <el-form-item label="11.请问您14天内是否与湖北省等重点防护地区人员有过紧密接触？" prop="optionjc">
                        <el-radio v-model="questionData.optionjc" label="是">是</el-radio>
                        <el-radio v-model="questionData.optionjc" label="否">否</el-radio>
                    </el-form-item>
                    <el-form-item label="12.请问您14天内是否接触过被确诊为新型肺炎或疑似病例人员？" prop="optionbin">
                        <el-radio v-model="questionData.optionbin" label="是">是</el-radio>
                        <el-radio v-model="questionData.optionbin" label="否">否</el-radio>
                    </el-form-item>
                    <el-form-item label="13.请问您今天外出了么？外出去了哪？（如附近超市），接触了什么人？（如一切正常）" prop="outdoors">
                        <el-input class="questionInput" v-model="questionData.outdoors"></el-input>
                    </el-form-item>
                    <el-form-item label="14.请问您的个人口罩的型号?（n95/kn95/医用一次性/其他）" prop="mask">
                        <el-input class="questionInput" v-model="questionData.mask"></el-input>
                    </el-form-item>
                    <el-form-item label="15.请问您的个人口罩的数量?" prop="masknum">
                        <el-input class="questionInput" v-model="questionData.masknum"></el-input>
                    </el-form-item>
                    <el-form-item label="16.请问您上班需要领口罩吗?" prop="lmask">
                        <el-radio v-model="questionData.lmask" label="是">是</el-radio>
                        <el-radio v-model="questionData.lmask" label="否">否</el-radio>
                    </el-form-item>
                </el-form>
            </div>
            
            <!-- <div>
                <div class="questionItem">
                    <div class="questionTitle">1.请问您是否离开过公司所在地？</div>
                    <div class="questionAnswer">
                        <el-radio v-model="question[0]" label="1">是</el-radio>
                        <el-radio v-model="question[0]" label="2">否</el-radio>
                    </div>
                </div>
                <div class="questionItem">
                    <div class="questionTitle">2.请问您的身体状况如何？</div>
                    <div class="questionAnswer">
                        <el-radio v-model="question[1]" label="1">良好</el-radio>
                        <el-radio v-model="question[1]" label="2">有疑似症状（发热、乏力、呼吸困难）</el-radio>
                    </div>
                </div>

                <div class="questionItem">
                    <div class="questionTitle">3.请问您在公司所在地居住的小区是否发生疫情病例？</div>
                    <div class="questionAnswer">
                        <el-radio v-model="question[2]" label="1">是</el-radio>
                        <el-radio v-model="question[2]" label="2">否</el-radio>
                    </div>
                </div>
                <div class="questionItem">
                    <div class="questionTitle">4.请问您有测量过体温吗？（如无测量、36.5度）</div>
                    <div class="questionAnswer">
                        <el-input class="questionInput" v-model="question[3]" required></el-input>
                    </div>
                </div>
                <div class="questionItem">
                    <div class="questionTitle">5.填表日期</div>
                    <div class="questionAnswer">
                        <el-date-picker type="date" placeholder="选择日期" v-model="question[4]" style="width: 100%;"></el-date-picker>
                    </div>
                </div>
                <div class="questionItem">
                    <div class="questionTitle">6.请问您年休假的去向是？</div>
                    <div class="questionAnswer">
                        <el-input class="questionInput" v-model="question[5]"></el-input>
                    </div>
                </div>  
                <div class="questionItem">
                    <div class="questionTitle">7.请问您现在在何地？</div>
                    <div class="questionAnswer">
                        <el-input class="questionInput" v-model="question[6]"></el-input>
                    </div>
                </div> 
                <div class="questionItem">
                    <div class="questionTitle">8.请问您何时回公司所在地或计划何时回公司所在地？</div>
                    <div class="questionAnswer">
                        <el-date-picker type="date" placeholder="选择日期" v-model="question[7]" style="width: 100%;"></el-date-picker>
                    </div>
                </div>

                 <div class="questionItem">
                    <div class="questionTitle">9.请问您是否到过湖北省？</div>
                    <div class="questionAnswer">
                        <el-radio v-model="question[8]" label="1">是</el-radio>
                        <el-radio v-model="question[8]" label="2">否</el-radio>
                    </div>
                </div>
                <div class="questionItem">
                    <div class="questionTitle">10.请问您何时离开湖北或现在在湖北计划何时离开湖北？</div>
                    <div class="questionAnswer">
                        <el-date-picker type="date" placeholder="选择日期" v-model="question[9]" style="width: 100%;"></el-date-picker>
                    </div>
                </div>
                <div class="questionItem">
                    <div class="questionTitle">11.请问您14天内是否与湖北省等重点防护地区人员有过紧密接触？</div>
                    <div class="questionAnswer">
                        <el-radio v-model="question[10]" label="1">是</el-radio>
                        <el-radio v-model="question[10]" label="2">否</el-radio>
                    </div>
                </div>
                <div class="questionItem">
                    <div class="questionTitle">12.请问您14天内是否接触过被确诊为新型肺炎或疑似病例人员？</div>
                    <div class="questionAnswer">
                        <el-radio v-model="question[11]" label="1">是</el-radio>
                        <el-radio v-model="question[11]" label="2">否</el-radio>
                    </div>
                </div>
                <div class="questionItem">
                    <div class="questionTitle">13.请问您今天外出了么？外出去了哪？（如附近超市），接触了什么人？（如一切正常）</div>
                    <div class="questionAnswer">
                        <el-input class="questionInput" v-model="question[12]"></el-input>
                    </div>
                </div>
                <div class="questionItem">
                    <div class="questionTitle">14.请问您的个人口罩的型号?（n95/kn95/医用一次性/其他）</div>
                    <div class="questionAnswer">
                        <el-input class="questionInput" v-model="question[13]"></el-input>
                    </div>
                </div>
                <div class="questionItem">
                    <div class="questionTitle">15.请问您的个人口罩的数量?</div>
                    <div class="questionAnswer">
                        <el-input class="questionInput" v-model="question[14]"></el-input>
                    </div>
                </div>
                <div class="questionItem">
                    <div class="questionTitle">16.请问您上班需要领口罩吗?</div>
                    <div class="questionAnswer">
                        <el-radio v-model="question[15]" label="1">是</el-radio>
                        <el-radio v-model="question[15]" label="2">否</el-radio>
                    </div>
                </div>
            </div> -->
            <div class="buttons">
                <div class="button button-ensure" @click="submitForm">提交</div>
                <div class="button button-reset" @click="resetForm">重置</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            departData: [],
            question: ['','','','','','','','','','','','','','','',''],
            ruleForm: {
                department: '',
            },
            questionData: {
                username: '',
                englishname: '',
                bookday: '',
                temperature: '',
                pneumonia: '',
                depart: '',
                optionsz: '',
                healthy: '',
                placem: '',
                goday: '',
                optionhb: '',
                leaveday: '',
                optionjc: '',
                optionbin: '',
                outdoors: '',
                mask: '',
                masknum: '',
                lmask: ''
            },
            rules: {
                username: [
                    { required: true, message: '请输入姓名', trigger: 'blur' },
                ],
                englishname: [
                    { required: true, message: '请输入英文名',trigger: 'blur' },
                ],
                depart: [
                    { required: true, message: '请选择部门',trigger: 'blur' }
                ],
                temperature: [
                    { required: true, message: '请填写体温',trigger: 'blur' }
                ],
                bookday: [
                    { type: 'date', required: true, message: '请选择填表日期',trigger: 'blur' }
                ],
                place: [
                    { required: true, message: '请填写年休地',trigger: 'blur' }
                ],
                placem: [
                    { required: true, message: '请填写现在地',trigger: 'blur' }
                ],
                goday: [
                    { type: 'date', required: true, message: '请选择回公司日期',trigger: 'blur' }
                ],
            }
        }
    },
    created() {
        this.getDepart()
    },
    methods: {
        resetForm() {
            // console.log('reset')
            this.$refs['infoForm'].resetFields();
            this.$refs['questionsForm'].resetFields()
        },
        submitForm() {
            // console.log(this.questionData)
            var info = false;
            var question = false
            this.$refs['infoForm'].validate((valid) => {
                if(valid) {
                    info = true
                }
            })
            this.$refs['questionsForm'].validate((valid) => {
                if(valid) {
                    question = true
                }
            })
            if(info && question) {
                var obj = this.questionData
                if(obj.bookday) {
                    obj.bookday = this.changeDate(obj.bookday)
                }
                if(obj.goday) {
                    obj.goday = this.changeDate(obj.goday)
                }
                if(obj.leaveday) {
                    obj.leaveday = this.changeDate(obj.leaveday)
                }
                this.$http.post('/index/pneumonia/index',obj).then(res => {
                    if(res.status == 200 && res.data.ret == 200) {
                        this.resetForm()
                        // console.log(res)
                        this.$message({
                            message: '提交成功！',
                            type: 'success'
                        });
                    }else {
                        this.$message({
                            message: '提交失败,请重新操作',
                            type: 'warning'
                        });
                    }
                    }).catch(() => {
                    this.$message({
                        message: '未连接到服务器，提交失败',
                        type: 'warning'
                    });
                })
            }else {
                // console.log('false')
                return
            }
        },
        async getDepart() {
            var res = await this.$http.post('/index/depart/index')
            // console.log(res)
            if(res.status == 200 && res.data.ret == 200) {
                this.departData = res.data.data.depart
            }
        },
        changeDate(str) {
            return str.getFullYear()+'-'+(str.getMonth()+1)+'-'+str.getDate()
        }
    }
}
</script>
<style scoped>
    .section {
        padding-bottom: 80px;
    }
    .el-form-item > .el-form-item__content:first-child {
        margin-left: 50px !important;
    }
    
    .questionItem {
        margin-top: 10px;
        margin-left: 40px;
        overflow: hidden;
    }
    .questions {
        width: 90%;
        margin: auto;
    }
    .questionTitle {
        margin: 20px 0;
        color: #333;
        font-size: 16px;
    }
    .questionAnswer {
        padding:0 40px 0 20px;
    }
    .buttons {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-top: 30px;
    }

</style>