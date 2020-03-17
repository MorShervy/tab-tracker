<template>
<div class="wrap">
        <form class="login-form" action="">
            <div class="form-header">
                <h3>Register </h3>
            </div>
            <!--Email Input-->
            <div class="form-group">
                <input type="text" v-model="email" class="form-input" placeholder="email@example.com">
            </div>
            <!--Password Input-->
            <div class="form-group">
                <input type="password" v-model="password" class="form-input" placeholder="password">
            </div>
            <!--Login Button-->
            <div class="form-group">
                <button @click="register" class="form-button" type="submit">Register</button>
            </div>
            <div class="form-footer">
              {{error}}
            </div>
        </form>
    </div><!--/.wrap-->
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wrap {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fafafa;
}
.login-form{
    width: 350px;
    margin: 125px auto;
    border: 1px solid #ddd;
    padding: 2rem;
    background: #ffffff;
    box-shadow: 0.2px 0.2px 1px 1px #ddd;
}
.form-input{
    background: #fafafa;
    border: 1px solid #eeeeee;
    padding: 12px;
    width: 100%;
}
.form-group{
    margin-bottom: 1rem;
}
.form-button{
    background: #69d2e7;
    border: 1px solid #ddd;
    color: #ffffff;
    padding: 10px;
    width: 100%;
    text-transform: uppercase;
}
.form-button:hover{
    background: #69c8e7;
}
.form-header{
    text-align: center;
    margin-bottom : 2rem;
}
.form-footer{
    text-align: center;
}
</style>
