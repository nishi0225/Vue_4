<template>
  <div>
    <div>
      <img alt="Vue logo" src="../assets//logo.png">
      <h1>ログイン画面</h1>
      <ul>
        <li>
          <label for="mail">メールアドレス</label>
          <input type="email" id="mail" v-model="email">
        </li>
        <li>
          <label for="password">パスワード</label>
          <input type="text" id="password" v-model="password">
        </li>
      </ul>
    </div>
    <div>
      <button class="btn" @click="login">ログイン</button><br>
      <router-link to="/" class="btn">新規登録はこちら</router-link>
    </div>
    <footer>
      <p>Copyright @2019 ⚪︎⚪︎ Inc All rights reserved</p>
    </footer>
  </div>
</template>

<script>


export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    //ログイン処理
  }
}
</script>


