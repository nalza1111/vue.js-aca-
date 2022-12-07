<template>
    <form>
        <h3>유저 등록2</h3>
        <label for="password">password: </label><input type="text" v-model.trim="user.password" id="password" name="password"><br>
        <label for="role">role: </label>
        <select v-model="user.role" id="role" name="role">
            <option disabled>::선택::</option>
            <option v-for="(val, idx) in job" v-bind:value="idx" v-bind:key="idx">{{val}}</option>
        </select> <br>
        <label for="name">name: </label><input type="text" v-model.trim="user.name" id="name" name="name"><br>
        <label for="id">id: </label><input type="text" v-model.trim="user.id" id="id" name="id"><br>
        <button type="button" @click.stop="insertUser">등록</button>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name: "UserInput2",
    // props: {
    //     inputBox :{
    //         pid: { type: String, required: true },
    //         ppw: { type: String, required: true },
    //         prole: { type: String, required: true },
    //         pname: { type: String, required: true }
    // }
    // },
    data() {
        return {
            user: {id: '',
                password: '',
                role: '',
                name: '',
            },
            job: {
                User: '유저',
                Admin: '운영자'
            }
        }
    },
    methods: {
        //입력 굳이 부모까지 갈 필요 없음 //푸쉬할 필요 없이 리스트페이지로 넘어감
        // insertUser() {
        //     let person = { id: this.id, pw: this.pw, role: this.role, uname: this.uname };
        //     this.$emit( 'insertUserPa', person);
        //     // this.init();
        // },
        insertUser(){
            let url = "http://localhost:8081/myserver/userInsert";
            console.log(this.user)
            axios.get(url, {params: this.user})
              .then(res => {
                console.log(res.data);
                alert('등록완료');
                this.$router.push('user')
            });
        },
    },
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