<!-- views 의 컴포넌트는 페이지의 라우팅 관련 정보들만 들어가는게 좋다
    : ex) axios 로직이 들어간다면 개발은 가능한데 데이터 캐치해오는 로직이 들어가면 좋지 않는 설계이다.<template>
      설계가 바꼈을때 유연하게 대처가 힘들수가있음 따라서 APi 호출등은 따로 컴포넌트로 작성 -->
<template>
  <div>
      <div v-for="user in users">{{ user.title }}</div>
  </div>
</template>

<script>
import { fetchNewsList } from '../api/index.js'

export default {
    data() {
        return {
            users: []
        }
    },
    created() {
        var vm = this;
        fetchNewsList()
        .then(response => vm.users = response.data)
        .catch(error => console.log(error))
    }
}
</script>

<style>

</style>