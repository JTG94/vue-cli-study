import axios from 'axios'

// 1. Http Request & Response 관련된 기본 설정 
// 토근 설정같은 로직도 여기서 config에서 해줄수 있음 자동으로 넣어주는 로직 가능
const config = {
  baseUrl: "https://api.hnpwa.com/v0/"
};
// 2. API 함수들을 정리
function fetchNewsList() {
    //return axios.get(config.baseUrl + "news/1.json");
    return axios.get(`${config.baseUrl}news/1.json`); //백틱? ES6 
}

export {
    fetchNewsList
}