<template>
    <div>
        <label for="pw">password: </label><input type="text" v-model.trim="pw" id="pw" name="pw"><br>
        <label for="role">role: </label>
        <select v-model="role" id="role" name="role">
            <option disabled>::선택::</option>
            <option v-for="(val, idx) in job" v-bind:value="idx" v-bind:key="idx">{{val}}</option>
        </select> <br>
        <label for="name">name: </label><input type="text" v-model.trim="uname" id="name" name="name"><br>
        <label for="id">id: </label><input type="text" v-model.trim="id" id="id" name="id"><br>
        <button type="button" @click.stop="insertUser">등록</button>
    </div>
</template>

<script>
export default {
    name: "UserInput",
    props: {
        pid: { type: String, required: true },
        ppw: { type: String, required: true },
        prole: { type: String, required: true },
        pname: { type: String, required: true }
    },
    data() {
        return {
            id: '',
            pw: '',
            role: '',
            uname: '',
            job: {
                User: '유저',
                Admin: '운영자'
            }
        }
    },
    methods: {
        //입력
        insertUser() {
            let person = { id: this.id, pw: this.pw, role: this.role, uname: this.uname };
            this.$emit( 'insertUserPa', person);
            this.init();
        },
        //초기화
         init(){
            this.pw = 33;
            this.role = 33;
            this.uname = 33;
            this.id = 33;
            // this.pw = this.ppw;
            // this.role = this.prole;
            // this.uname = this.pname;
            // this.id = this.pid
        },
    }
}
</script>

<style scoped>
    label{
            width: 80px;
            display: inline-block;
        }
    input, select{
        width: 100px;
        display: inline-block;
    }
    .backColor{
        background-color: yellow;
    }
    table, td, th{
        border: 1px solid black;
        border-collapse: collapse;
        margin-left: auto;
        margin-right: auto;
    }
</style>