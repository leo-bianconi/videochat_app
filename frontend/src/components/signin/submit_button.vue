<template>
  <div>
    <button id="login-signin-button" :disabled="disabled">
      <slot />
    </button>
  </div>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    disabled: {
      type: Boolean,
      default: function () {
        return false;
      }
    }
  }
};
</script>

<style scoped>
#login-signin-button {
  display: block;
  width: 100%;
  height: 24pt;

  color: white;
  font-size: 11pt;
  font-weight: 400;

  border-style: solid;
  border-width: 1px;
  border-color: #0e792b;
  background-color: #199c3d;
  border-radius: 5px;

  cursor: pointer;

  transition-duration: 0.4s;
}

#login-signin-button:disabled {
  background-color: #cccccc;
  border-width: 1px;
  border-color: #b0b0b0;
}

#login-signin-button:disabled:hover {
  background-color: #cccccc;
  border-width: 1px;
  border-color: #b0b0b0;
}

#login-signin-button:hover {
  background-color: #229140;
  border-width: 2px;
}
</style>
