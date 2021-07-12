<template>
  <div class="container 100vh">
    <div class="d-flex align-items-center justify-content-center h-100">
      <div class="d-flex flex-column form">
          <h3 class="text-center mb-4">Welcome</h3>
          <form id="form-validator" @submit.prevent="submit">
              <div class="form-group">
                  <input type="text" id="email" class="form-control" placeholder="Email" v-model.trim="$v.email.$model"
                  :class="{ 'is-invalid': $v.email.$error, 'is-valid': !$v.email.$invalid}">
                  <div class="valid-feedback">Your email is valid!</div>
                  <div class="invalid-feedback">
                    <span v-if="!$v.email.required">Email is required.</span>
                    <span v-if="!$v.email.isUnique">This email is invalid</span>
                  </div>
              </div>
              <div class="form-group">
                  <input type="password" id="password" class="form-control" placeholder="Password" v-model.trim="$v.password.$model"
                 :class="{ 'is-invalid': $v.password.$error, 'is-valid': !$v.password.$invalid}">
                  <div class="valid-feedback">Your password is valid!</div>
                  <div class="invalid-feedback">
                    <span v-if="!$v.password.required">Password is required.</span>
                    <span v-if="!$v.password.minLength">{{ $v.password.$params.minLength.min  }} characters minimun.</span>
                  </div>
              </div>
              <button type="submit" class="form-submit" id="submit" >Login</button>
          </form>
          <div class="d-flex flex-row mt-2">
              <button class="btn-fb me-3">Facebook</button>
              <button class="btn-gg">Google</button>
          </div>
      </div>
    </div>
  </div>
  
</template>

<script>
import { required, email, minLength } from 'vuelidate/lib/validators'

export default {
  name: 'LoginForm',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  validations: {
    email: {
      required,
      email,
      isUnique (value) {
        if (value === '') return true

        var email_regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        return new Promise((resolve)=>{
          setTimeout(() => {
            resolve(email_regex.test(value))
          }, 350 + Math.random() * 300)
        })
      }
    },
    password: {
      required,
      minLength: minLength(6)
    }
  },
  methods: {
    submit() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        this.$store.dispatch("login", {
          email: this.email,
          password: this.password
        })
      }
    },
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/common.scss';

body {
    background-color: #DBDBDB;
}
textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus {   
box-shadow: none;
outline: 0 none;
}
.form {
    width: 360px;
    padding: 32px 28px;
    background-color: #F2F2F2;
    border-radius: 2px;
    margin: 24px;
    box-shadow: 0 2px 5px 0 rgba(51, 62, 73, 0.1);
    position: relative;
    top: 100px;
}
.form-group {
    margin-bottom: 20px;
}

.form-label {
    font-weight: bold;
}

.form-control {
    height: 50px;
    padding: 8px 12px !important;
    background-color: #F2F2F2;
    border: 2px solid #6B7A8F;
    border-radius: 5px;
    outline: none;
}

.form-group.invalid .form-control {
    border-color: #f33a58;
    color: #f33a58;
}

.form-submit, .btn-fb, .btn-gg {
    outline: none;
    background-color: #7ec2df;
    margin-top: 8px;
    padding: 12px 16px;
    font-weight: 600;
    color: #fff;
    border: none;
    width: 100%;
    font-size: 14px;
    border-radius: 5px;
    cursor: pointer;
}

.btn-fb {
    background-color: #4795FF;
}

.btn-gg {
    background-color: #EA4336;
}

.form-submit:hover {
    background-color: #7ec2df;
}

.spacer {
    margin-top: 36px;
}

.valid-feedback, .invalid-feedback {
  position: relative !important;
  text-align: left;
  top: 3px;
  right: -5px;
}

</style>
