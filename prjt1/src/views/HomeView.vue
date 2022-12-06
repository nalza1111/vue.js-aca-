<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <IncreView/>
    <!-- <IncreView/> -->
      <div :style="{ fontSize: postFontSize + 'em'}">
        <!-- <BlogPost title="blog" cnt="5"/>부모에서 데이터이동..가능?
        <BlogPost title="Vue"/>
        <BlogPost/> -->
        <BlogPost v-bind="blog"/><!-- 라우터를 거치지 않음 -->
        <BlogPost v-for="post in posts" :key="post.id" :cnt="post.id" v-bind="post" @enlarge-text="postFontSize += 0.1" @ensmall-text="postFontSize -= 0.1"/>
      </div>
    </div>
</template>

<script>
// @ is an alias to /src
import IncreView from '@/views/IncreView.vue'
import BlogPost from '@/components/BlogPost.vue'

export default {
  name: 'HomeView',
  components: {
    IncreView,
    BlogPost
  },
  data() {
    return {  blog: { title: 'spring', cnt: 20 },
              posts: [
                  { id: 1, title: 'My journey with Vue' },
                  { id: 2, title: 'Blogging with Vue' },
                  { id: 3, title: 'Why Vue is so fun' }
                ],
              postFontSize: 1
            }
  }
}
</script>
