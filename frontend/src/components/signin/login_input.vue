<template>
  <div id="login-input">
    <label id="login-input-label" for="login-input">{{ loginLabel }}</label>
    <input
      id="login-input-field"
      :value="loginValue"
      :type="type"
      @input="$emit('update:loginValue', $event.target.value)"
      @keyup.enter="submitValue"
    />
  </div>
</template>

<script>
export default {
  name: 'LoginInput',
  props: {
    loginLabel: {
      type: String,
      default: function () {
        return '';
      }
    },
    loginValue: {
      type: String,
      default: function () {
        return '';
      }
    },
    type: {
      type: String,
      default: function () {
        return 'text';
      }
    }
  },
  emits: {
    'update:loginValue': null,
    submit: function (val) {
      if (val.length === 0) {
        return false;
      }
      return true;
    }
  },
  methods: {
    submitValue: function () {
      console.log('login-input - ' + this.loginValue);
      this.$emit('submit', this.loginValue);
    }
  }
};
</script>

<style scoped>
#login-input-label {
  display: block;
  text-align: left;
  width: 100%;
  margin-bottom: 5px;
}

#login-input-field {
  display: block;
  width: 100%;
  height: 24pt;
  margin-top: 0px;
  padding: 1px 5px 1px 5px;

  border: 1px solid gray;
  border-radius: 5px;
}
</style>
