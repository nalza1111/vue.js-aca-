<template>
  <div>product {{id}} </div>
</template>

<script>
export default {
    data() {
        return { id: 0, name:''}
    },
    created() {
        this.id = this.$route.params.id
        this.name = this.$route.params.name
    }
}
</script>

<style>

</style>