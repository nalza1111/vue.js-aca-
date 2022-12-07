<template>
    <form>
        <h3>유저 갱신</h3>
        <label for="password">password: </label><input type="text" v-model.trim="user.password" id="pw" name="pw"><br>
        <label for="role">role: </label>
        <select v-model="user.role" id="role" name="role">
            <option disabled>::선택::</option>
            <option v-for="(val, idx) in job" v-bind:value="idx" v-bind:key="idx">{{val}}</option>
        </select> <br>
        <label for="name">name: </label><input type="text" v-model.trim="user.name" id="name" name="name"><br>
        <label for="id">id: </label><input type="text" v-model.trim="user.id" id="id" name="id" readonly><br>
        <button type="button" @click.stop="updateUser">수정</button>
    </form>
</template>

<script>
import axios from 'axios'
export default {
    name: "UserUpForm",
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
    created() {
        //유저데이터 초기화
        //단건조회
        let url = 'http://localhost:8081/myserver/userSelect?id='+this.$route.query.id;
        axios.get(url)
          .then(res => {this.user = res.data});
    },
    methods: {
        updateUser(){
            let url = "http://localhost:8081/myserver/userUpdate";
            this.user.id = this.$route.query.id;
            axios.get(url, {params: this.user})
              .then(res => {
                console.log(res);
                alert('수정완료');
                this.$router.push('user'); //페이지 이동
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