<template>
  <div>
    <a @click="redirectToHomepage">
      <img id="logo" src="../assets/logo.svg" :width="sizeX" :height="sizeY" />
    </a>
  </div>
</template>

<script>
export default {
  name: 'Logo',
  props: {
    link: {
      type: Boolean,
      default: function () {
        return false;
      }
    },
    sizeX: {
      type: Number,
      default: function () {
        return 256;
      }
    },
    sizeY: {
      type: Number,
      default: function () {
        return 256;
      }
    }
  },
  methods: {
    redirectToHomepage() {
      if (this.link == true) {
        alert('Redirecting to homepage'); // placeholder
      }
    }
  }
};
</script>

<style scoped>
a {
  cursor: pointer;
}
img {
  display: block;
  margin: 0 auto 0 auto;
}
</style>
