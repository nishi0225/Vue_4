<template>
  <div>
    <div>
      <img alt="Vue logo" src="../assets//logo.png">
      <h1>新規登録画面</h1>
      <ul>
        <li>
          <label for="userName">ユーザ名</label>
          <input type="text" id="userName" style="width:150px" v-model="userName">
        </li>
        <li>
          <label for="email">メールアドレス</label>
          <input type="email" id="email" style="width:150px" v-model="email">
        </li>
        <li>
          <label for="password">パスワード</label>
          <input type="password" id="password" style="width:150px" v-model="password">
        </li>
      </ul>
    </div>
    <div>
      <button class="btn" @click="register">新規登録</button><br>
      <router-link to="./login" class="btn">ログインはこちら</router-link>
    </div>
    <footer>
      <small>Copyright @2019 ⚪︎⚪︎ Inc All rights reserved</small>
    </footer>
  </div>
</template>


<script>
import axios from 'axios';
import instance from '../axios-auth.js';


export default {
  data() {
    return {
      userName: '',
      email: '',
      password: '',
      wallet: 1000
    }
  },

  methods: {
    register() {
      instance.post('/accounts:signUp?key=AIzaSyA70JNTYroQo3pBY9ZqYo8xlsUlIRN35FU',
      {
        email: this.email,
        password: this.password,
        returnSecureToken: true
      }
      )
      axios.post('https://firestore.googleapis.com/v1/projects/vue-4-9c525/databases/(default)/documents/userData',
      {
        fields: {
          name: {
            stringValue: this.userName
          },
          email: {
            stringValue: this.email
          },
          password: {
            stringValue:this.password
          },
          wallet: {
            integerValue: this.wallet
          }
        }
      })
      .then(() => {
        this.userName = '';
        this.email = '';
        this.password = '';
      })
      .catch(error => {
        console.log(error);
      })
    }
  }
};

</script>

<style>
li {
  list-style-type: none;
}
label {
  display: inline-block;
  margin-right: 10px;
  width: 110px
}
button {
  margin: 20px auto 0;
  padding: 5px 10px;
  border: 1px solid #0099ff;
  border-radius: 5px;
  background-color: white;
}
.btn {
  color: #0099ff;
}

</style>