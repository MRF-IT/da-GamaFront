<template>
    <div class="wrapBox">
        <div class="section">
            <!-- <el-row>
                <el-col :span="7">
                    <span>姓名</span>
                    <el-input></el-input>
                </el-col>
            </el-row> -->
            <el-form :model="ruleForm" label-width="100px">
                <el-form-item>
                    <el-col :span="7">
                        <el-form-item label="姓名" class="form-item">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7">
                        <el-form-item label="英文名" class="form-item">
                            <el-input></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="7" class="form-item">
                        <el-form-item label="部门" prop="department" :rules="rules" ref="ruleForm">
                            <el-select  placeholder="请选择部门" v-model="ruleForm.department">
                                <el-option label="部门一" value="shanghai"></el-option>
                                <el-option label="部门二" value="beijing"></el-option>
                            </el-select>
                        </el-form-item>
                    </el-col>
                </el-form-item>
            </el-form>
            <div>
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
                        <el-input class="questionInput" v-model="question[3]"></el-input>
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
                    <div class="questionTitle">11.请问您14天内是否与湖北省等重点防护地区人员有过紧密接触？？</div>
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
            </div>
            <div class="buttons">
                <div class="button button-ensure">提交</div>
                <div class="button button-reset">重置</div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            question: ['','','','','','','','','','','','','','','',''],
            ruleForm: {
                department: '',
            },
            rules: {
                department: [
                    { required: true, message: '请选择部门', trigger: 'blur' },
                ],
            }
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