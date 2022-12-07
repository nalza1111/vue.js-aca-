<template>
    <div>
        <UserInput @insertUserPa="insertUser" v-bind="inputBox" v-if="UserInUp"/>
        <router-link to="/userinput2">입력창2으로 이동</router-link>
        <div>
            <table>
                <thead>
                    <th>PASSWORD</th>
                    <th>ROLE</th>
                    <th>NAME</th>
                    <th>ID</th>
                    <th>삭제</th>
                    <th>업데이트</th>
                </thead>
                <tbody>
                    <!-- <tr v-for="(user, idx) in users" :class="{backColor:yellow}" @click="cssUser(user)" v-bind:key="idx"> -->
                    <tr v-for="(user, idx) in users" v-bind:key="idx">
                        <td v-for="(u, i) in user" v-bind:key="(u+i)">{{u}}</td>
                        <td><button type="button" @click="deleteUser(user)">삭제</button></td>
                        <td><button type="button" @click="updateBtn(user.id)">업데이트</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import UserInput from '@/components/UserInput.vue'
import UserUpForm from '@/components/UserUpForm.vue'

export default {
    components: {
        UserInput,
        UserUpForm
    },
    data(){
        return {
            inputBox: { pid: 'zzz', ppw: 'zzz', prole: 'zzz', pname: 'zzz' },
            users: [],
            yellow: false,
            UserInUp: true
        }
    },
    created() {
        let url = 'http://localhost:8081/myserver/userSelectAll';
        axios.get(url)
          .then(res => {this.users = res.data});
    },
    methods : {
        //등록페이지로 이동
        insertUser(person){
            this.$route.push("/UserInput");

            // let url = "http://localhost:8081/myserver/userInsert";
            // let data = {params: { id: person.id, password: person.pw, name: person.uname, role: person.role}}
            // axios.get(url, data)
            //   .then(res => {this.users.push(res.data)});
            // this.inputBoxTF = !this.inputBoxTF;
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
              })
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
        },
        //수정페이지로 이동
        updateBtn(id){
            this.$router.push({name:"userupform", query:{id:id}})
        }
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