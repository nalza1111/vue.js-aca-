<template>
  <div>
    <h3>자유 게시판</h3>
    <table>
      <thead>
        <th>글번호</th>
        <th>글제목</th>
        <th>조회수</th>
        <th>삭제</th>
      </thead>
      <tbody>
        <tr v-for="(row, idx) in board" :key=row[0] @click="viewBoard(row.no)">
          <td v-for="one in row" :key=one  >{{one}}</td>
          <td><button @click.stop="delBoard(row.no, idx)">삭제</button></td>
        </tr>
      </tbody>
    </table>
    <button type="button" @click="writeBoard">글쓰기</button>
  </div>
</template>

<script>
import axios from 'axios';
export default {
    name: 'myBoardList',
    data() {
      return {
        board: {
          no: '',
          title: '',
          views: ''
        }
      }
    },
    created(){
      let url = 'http://localhost:8081/myserver/boardSelectAll';
                axios.get(url)
                  .then(res => {
                    console.log(res.data) 
                    this.board = res.data}
                    )
    },
    methods: {
      writeBoard() {
        this.$router.push("/myboardwrite")
      },
      viewBoard(no) {
        this.$router.push({name:'myboardread', query:{no:no}})
      },
      delBoard(no, idx) {
        let url = "http://localhost:8081/myserver/boardDelete"
            axios.get(url, {params:{ no: no}})
              .then(res => {
                console.log(res);
                alert('삭제완료')
               
                this.board.splice(idx,1);
            })
      }
    }
}
</script>

<style src="@/assets/mystyle.css">
</style>