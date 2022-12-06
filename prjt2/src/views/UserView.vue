<template>
    <div id="app">
        <form>
            <label for="pw">password: </label><input type="text" v-model.trim="pw" id="pw" name="pw"><br>
            <label for="name">name: </label><input type="text" v-model.trim="uname" id="name" name="name"><br>
            <label for="id">id: </label><input type="text" v-model.trim="id" id="id" name="id"><br>
            <label for="role">role: </label>
            <select v-model="role" id="role" name="role">
                <option disabled>::선택::</option>
                <option v-for="(val, idx) in job" v-bind:value="idx" v-bind:key="idx">{{val}}</option>
            </select> <br>
            <button type="button" @click="insertUser">등록</button>
        </form>
        <div>
            <table>
                <thead>
                    <th v-for="(user, idx) in users[0]" v-bind:key="(user+idx)">{{idx}}</th>
                    <th>삭제</th>
                    <th>업데이트</th>
                </thead>
                <tbody>
                    <tr v-for="(user, idx) in users" :class="{backColor:yellow}" @click="cssUser(user)" v-bind:key="idx">
                        <td v-for="(u, i) in user" v-bind:key="(u+i)">{{u}}</td>
                        <td><button type="button" @click="deleteUser(user)">삭제</button></td>
                        <td><button type="button" @click="updateUser(idx)">업데이트</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            name: 'UserView',
            users: [],
            pw: '',
            role: '',
            uname: '',
            id: '',
            yellow:false,
            job: {
                User: '유저',
                Admin: '운영자'
            }
        }
    },
    created() {
        let url = 'http://localhost:8081/myserver/userSelectAll';
        axios.get(url)
          .then(res => {this.users = res.data});
    },
    methods : {
        //등록
        insertUser(){
            let url = "http://localhost:8081/myserver/userInsert";
            let data = {params: { id: this.id, password: this.pw, name: this.uname, role: this.role}}
            axios.get(url, data)
              .then(res => {this.users.push(res.data)});
            this.init();
        },
        //삭제
        deleteUser(user){
            let url = "http://localhost:8081/myserver/userDelete"
            axios.get(url, {params:{ id: user.id}})
              .then(res => {
                console.log(res);
                let newUsers = [];
                for(let u of this.users){
                    if(u.id!=user.id)
                    newUsers.push(u);
                }
                this.users = newUsers;
                this.init();
              })
        },
        //초기화
        init(){
            this.pw = '',
            this.role = '',
            this.uname = '',
            this.id = ''
        },
        //클릭, 스타일
        cssUser(user){
            this.yellow = !this.yellow;

            this.pw = user.password;
            this.role = user.role;
            this.uname = user.name;
            this.id = user.id
        },
        updateUser(){
            let url = "http://localhost:8081/myserver/userUpdate";
            let data = {params: { id: this.id, password: this.pw, name: this.uname, role: this.role}}
            axios.get(url, data)
              .then(res =>{
                let inx=0;
                this.users.forEach((ele, idx) => {
                    if(ele.id==this.id){
                        inx=idx;
                    }
                })
                this.users.splice(inx, 1, res.data);
                this.init();
               })
        }
    }
}
</script>

<style>
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