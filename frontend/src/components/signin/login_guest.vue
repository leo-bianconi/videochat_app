<template>
  <div id="login-guest">
    <login-input
      id="login-guest-code"
      v-model="guestCode"
      login-label="Codice di accesso"
      @submit="codeSubmit"
    />

    <submit-button :disabled="isDisabled" @click="loginGuest(guestCode)">
      Accedi
    </submit-button>
  </div>
</template>

<script>
import LoginInput from './login_input.vue';
import SubmitButton from './submit_button.vue';

export default {
  name: 'LoginGuest',
  components: {
    LoginInput,
    SubmitButton
  },
  data: function () {
    return {
      guestCode: ''
    };
  },
  computed: {
    isDisabled: function () {
      if (this.guestCode.length > 0) {
        return false;
      }
      return true;
    }
  },
  methods: {
    codeSubmit: function (code) {
      if (this.isDisabled === false) {
        this.loginGuest(code);
      }
    },
    loginGuest: function (code) {
      alert("Richiesta di accesso con codice '" + code + "'");
    }
  }
};
</script>

<style scoped>
#login-guest-code {
  margin: 0 auto 20px auto;
}
</style>
