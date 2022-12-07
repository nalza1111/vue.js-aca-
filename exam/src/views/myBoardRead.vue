<template>
    <div>
        <h3>myBoardRead</h3>
        <table>
        <thead>
            <th>글번호</th>
            <td>{{board.no}}</td>
            <th>글제목</th>
            <td>{{board.title}}</td>
            <th>작성자</th>
            <td>{{board.writer}}</td>
            <th>조회수</th>
            <td>{{board.views}}</td>
        </thead>
        <tbody>
            <tr>
                <th>글내용</th>
                <td colspan="7">{{board.contents}}</td>
            </tr>
        </tbody>
        </table>
        <button type="button" @click="updateBoard">수정</button>
        <button type="button" @click="deleteBoard">삭제</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'myBoardRead',
    data() {
        return {
            board: {
                no: '',
                title: '',
                contents: '',
                writer: '',
                views: ''
            }
        }
    },
    created() {
        let url = 'http://localhost:8081/myserver/boardSelect?no='+this.$route.query.no;
        axios.get(url)
          .then(res => {this.board = res.data});
    },
    methods: {
        deleteBoard() {
            let url = "http://localhost:8081/myserver/boardDelete"
            axios.get(url, {params:{ no: this.board.no}})
              .then(res => {
                console.log(res);
                alert('삭제완료')
                this.$router.push("/")
            })
        },
        updateBoard() {
            this.$router.push({name:"myboarupdate", query:{no: this.board.no}})
        }
    }
}
</script>

<style src="@/assets/mystyle.css">

</style>