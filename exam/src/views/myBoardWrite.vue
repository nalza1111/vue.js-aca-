<template>
    <div>
        <h3>글쓰기</h3>
        title: <input type="text" v-model="board.title">
        writer: <input type="text" v-model="board.writer">
        contents: <textarea v-model="board.contents"></textarea>
        <button type="button" @click="write">글등록</button>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'myBoardWrite',
    data() {
        return {
            board: {
                title: '',
                writer: '',
                contents: '',
                views: 1
            }
        }
    },
    methods: {
        write(){
            let url = "http://localhost:8081/myserver/boardInsert";
            console.log(this.board);
            axios.get(url, {params: this.board})
              .then(res => {
                console.log(res.data);
                console.log(res.data.no);
                alert('등록완료');
                this.$router.push({name:'myboardread', query:{no:res.data.no}})
              })
        }
    }
}
</script>

<style>

</style>