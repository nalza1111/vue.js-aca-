<template>
    <div>
        <h4>{{ title }}</h4>
         <div v-text="cnt"></div>
         <button @click="$emit('enlarge-text')"> Enlarge text </button><!--부모에게 이벤트 전달$emit-->
         <button @click="$emit('ensmall-text')"> Ensmall text </button><!--부모에게 이벤트 전달$emit('ㅌ') ㅌ는 부모에게@click의 클릭과 같은원리로 작동 -->
    </div>
</template>

<script>
export default {
    props: {
        // ['title', 'cnt']
        title: { type: String, required: true },
        cnt: { type: Number, required: false, default: 100}
    },//부모로부터 받아오는 값
    // data(){
    //     return {
    //         title: 'test'
    //     }
    // }
    
}
</script>
<!--스타일은 생략가능-->