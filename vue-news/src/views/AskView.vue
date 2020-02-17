<template>
  <div>
    <div v-for="item in ask">{{ item.title }}</div>
  </div>
</template>

<script>
import { fetchAskList } from '../api/index.js'
export default {
  data() {
    return {
      ask: []
    }
  },
  //컴포넌트가 생성되자 마자 필요한 로직이 들어가는곳 (라이플 사이클 훅), beforeMount, mounted 등이 있음
  created() {
    var vm = this
    fetchAskList()  // return new Promise() 가 생성되어 .then() .catch() 가능 - 비동기
    .then(function(response) {
      vm.ask = response.data;
    })
    .catch(error => console.log(error))
  },
  
}
</script>

<style>

</style>