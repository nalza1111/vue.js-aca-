<template>
  <button class="fancy-btn">
    <slot>대체텍스트</slot><!--태크내용이 slot에 들어감-->
  </button>
</template>

<script>
export default {

}
</script>

<style>
    .fancy-btn{ display: block; font-size: 3em; }
</style>