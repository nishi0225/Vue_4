<template>
  <div>
    <img alt="Vue logo" src="../assets//logo.png">
    <h1>test</h1>
    <p>{{ }}</p>
    <button>サインアウト</button>
  </div>
</template>

<script>
import axios from 'axios'


export default {
  data() {
    return {
      posts : []
    }
  },
  created() {
    //登録情報を取得
    axios.get('https://firestore.googleapis.com/v1/projects/vue-4-9c525/databases/(default)/documents/userData',)
    .then(res => {
      this.posts = res.data.documents;
    })
  }
}
</script>