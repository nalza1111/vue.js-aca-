<template>
    <div>
        parent : {{count}}
        <button @click="addCount">증가</button>
    </div>
</template>

<script>
export default {
    props: ['count']
    ,data(){
        return{

        }
    },
    methods: {
        addCount(){
            this.$emit('addCountP',this.count+1)
        }
    }
}
</script>

<style>

</style>