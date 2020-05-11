<template>
    <div class="wrap">
        <div class="section">
            <div class="list">
                <div class="text">企业邮箱</div>
                <div>
                    <el-input type="text" v-model="email"></el-input>
                </div>
            </div>
            <div class="list">
                <div class="text">启用/禁用成员</div>
                <div>
                    <el-radio v-model="enable" label="1">启用</el-radio>
                    <el-radio v-model="enable" label="2">禁用</el-radio>
                </div>
            </div>
            <div class="list">
                <div class="text">密码</div>
                <div>
                    <el-input type="password" v-model="password"></el-input>
                </div>
            </div>
            <div class="list">
                <div class="text">重新登录时是否重设密码</div>
                <div>
                    <el-radio v-model="reset" label="1">是</el-radio>
                    <el-radio v-model="reset" label="2">否</el-radio>
                </div>
            </div>
            <!-- <div class="btns">

            </div> -->
            <div class="button button-ensure">确定</div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            email: '',
            enable: true,
            password: '',
            reset: true
        }
    }
}
</script>
<style scoped>
.wrap {
    width: 100%;
    height: 100%;
    margin-top: -20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}
.section {
    width: 400px;
    /* height: 300px; */
    padding: 40px;
    box-sizing: border-box;
    border: 1px solid #e1e5e6;
    border-radius: 5px;
    box-shadow: 2px 2px 4px 4px rgba(0,0,0,0.04); 
}
.list {
    margin-bottom: 20px;
    /* display: flex;
    flex-direction: row;
    align-items: center; */
}
.text {
    /* width: 80px; */
    margin-bottom: 10px;
    font-size: 16px;
    color: #333;
}
.input {
    flex: 1;
    height: 30px;
    border-radius: 5px;
    border: 1px solid #DCDFE6;
    text-align: center;
}
.button-ensure {
    width: 100%;
    margin: 0 auto
}
</style>