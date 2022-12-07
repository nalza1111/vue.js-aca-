<template>
  <div>
    <ul>
      <li>
        <router-link to="/product">상품페이지로 이동</router-link>
      </li>
      <li> 
        <router-link :to="{name:'product', params:{id:1}}">상품페이지로 이동(path)</router-link>
      </li>  
      <li>
        <router-link :to="{path:'/product', query:{name:'computer'}}">상품페이지로 이동(query)</router-link>
      </li>
      <li>
        <a href="#" @click="goproduct">상품페이지로이동(push)</a>
      </li>    
    </ul>
    <h3>컴포넌테 테스트</h3> 
    <IncrementComp @addCountP="addCount" :count="counter"/>

    <fancy-button/>
    <fancy-button>등록{{counter}}</fancy-button> <br/><br/>

    <fancy-button>
      <span style="color:red">클릭 미!!</span>
    </fancy-button>

    <base-layout>
      <template v-slot:header>
        회원등록
      </template>
      <template v-slot:default>
        <input><button>저장</button>
      </template>
      <template v-slot:footer>
        <button type="reset">취소</button>
      </template>
    </base-layout>


    <modal-popup>
      <template v-slot:title>
        회원가입
      </template>
      <template v-slot:default>
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">Email address</label>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
        </div>
        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
          <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
        </div>
      </template>
    </modal-popup>
  </div>
</template>
<script>
import BaseLayout from '../components/BaseLayout.vue'
import FancyButton from '../components/FancyButton.vue'
import IncrementComp from '../components/IncrementComp.vue'
import ModalPopup from '../components/ModalPopup.vue'
export default {
  components: {
    IncrementComp,
    FancyButton,
    BaseLayout,
    ModalPopup
  },
  data(){
    return{
      counter: 0
    }
  },
  methods: {
    addCount(count){
      this.counter = count
    },
    goproduct() {
      //this.$router.push('/product')
      //this.$router.push({name:'productinfo',}})
      //this.$router.push({path:'/product',query:{name:'computer'}})
      this.$router.push({name:'productinfo',params:{id:1}}) //name? 
    }
  }
}
</script>

<style scoped>
  .fancy-btn{ display: block; font-size: 3em; }
</style>