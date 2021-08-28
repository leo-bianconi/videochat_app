<template>
  <div>
    <login-input
      id="login-doctor-user"
      login-label="Nome utente"
      :login-value="userName"
      @update:loginValue="userName = $event"
      @submit="loginClick(userName, userPass)"
    />
    <password-input
      id="login-doctor-pass"
      :password-value="userPass"
      @update:passwordValue="userPass = $event"
      @submit="loginClick(userName, userPass)"
    />
    <submit-button
      :disabled="isDisabled"
      @click="loginClick(userName, userPass)"
    >
      Accedi
    </submit-button>
  </div>
</template>

<script>
import LoginInput from './login_input.vue';
import PasswordInput from './password_input.vue';
import SubmitButton from './submit_button.vue';

export default {
  name: 'LoginDoctor',
  components: {
    SubmitButton,
    LoginInput,
    PasswordInput
  },
  data: function () {
    return {
      userName: '',
      userPass: ''
    };
  },
  computed: {
    isDisabled: function () {
      if (this.userName.length > 0 && this.userPass.length > 0) {
        return false;
      }
      return true;
    }
  },
  methods: {
    loginClick(userName, password) {
      if (!this.isDisabled) {
        alert(
          "Richiesta di accesso da parte di '" + userName + ':' + password + "'"
        );
      }
    }
  }
};
</script>

<style scoped>
#login-doctor-user {
  margin-bottom: 20px;
}

#login-doctor-pass {
  margin-bottom: 20px;
}
</style>
