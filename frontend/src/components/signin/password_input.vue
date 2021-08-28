<template>
  <div>
    <div id="password-input">
      <a id="password-input-forgot"> Hai dimenticato la password? </a>
      <login-input
        :login-value="passwordValue"
        type="password"
        login-label="Password"
        @update:loginValue="$emit('update:passwordValue', $event)"
        @submit="submitValue"
      />
    </div>
  </div>
</template>

<script>
import LoginInput from './login_input.vue';

export default {
  name: 'PasswordInput',
  components: {
    LoginInput
  },
  props: {
    passwordValue: {
      type: String,
      default: function () {
        return '';
      }
    }
  },
  emits: {
    'update:passwordValue': null,
    submit: function (val) {
      if (val.length > 0) {
        return true;
      }
      return false;
    }
  },
  methods: {
    submitValue() {
      this.$emit('submit', this.passwordValue);
    }
  }
};
</script>

<style scoped>
#password-input {
  position: relative;
}
#password-input-forgot {
  position: absolute;
  top: 2px;
  right: 0%;

  font-size: 10pt;
  text-decoration: underline;
  cursor: pointer;
}
</style>
