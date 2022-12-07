<template>
    <div>
        <h3>myBoardRead</h3>
        <table>
        <thead>
            <th>글번호</th>
            <td>{{board.no}}</td>
            <th>글제목</th>
            <td><input type="text" v-model="board.title"></td>
            <th>작성자</th>
            <td>{{board.writer}}</td>
            <th>조회수</th>
            <td>{{board.views}}</td>
        </thead>
        <tbody>
            <tr>
                <th>글내용</th>
                <td colspan="7"><textarea v-model="board.contents"></textarea></td>
            </tr>
        </tbody>
        </table>
        <button type="button" @click="updateBoard">수정</button>
        <button type="button" @click="redo">취소</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'myBoardUpdate',
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
        redo() {
            this.$router.push("/")
        },
        updateBoard() {
            let url = "http://localhost:8081/myserver/boardUpdate";
            console.log(this.board);
            axios.get(url, {params: this.board})
              .then(res => {
                console.log(res.data);
                console.log(res.data.no);
                alert('수정완료');
                this.$router.push({name:'myboardread', query:{no:res.data.no}})
              })
        }
    }
}
</script>

<style src="@/assets/mystyle.css">
    tr:hover{
        cursor: pointer;
    }
</style>