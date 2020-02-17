<template>
  <div>
      <div v-for="job in jobs">{{ job.title }}</div>
  </div>
</template>

<script>
import { fetchJobsList } from '../api/index.js'
export default {
  data() {
    return {
      jobs: []
    }
  },
  created() {
    fetchJobsList()
    .then(response => this.jobs = response.data) // 화살표 표기로 바꾸면 this 바인딩을 그냥 this 해주면 되기떄문에 번거로움이 사라짐
    .catch(error => console.log(error))
  }
}
</script>

<style>

</style>