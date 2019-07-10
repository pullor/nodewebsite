<template>
  <div>
    <canvas class="mask" id="tutorial"></canvas>
  </div>
</template>

<script>
export default {
  mounted() {
    this.guidance();
    window.onresize = () => {
      this.guidance();
    };
  },
  methods: {
    guidance() {
      const body = document.querySelector('body');
      const canvas = document.getElementById('tutorial');
      canvas.width = body.offsetWidth;
      canvas.height = body.offsetHeight;
      const jltitle = document.querySelector('#jltitle');
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.globalAlpha = 0.5;
        ctx.clearRect(0, 0, body.offsetWidth, body.offsetHeight);
        ctx.fillRect(0, 0, body.offsetWidth, body.offsetHeight);
        ctx.clearRect(jltitle.offsetLeft - 10, jltitle.offsetTop - 10, jltitle.offsetWidth + 20, jltitle.offsetHeight + 20);
      } else {
        // canvas-unsupported code here
      }
    },
  },
};
</script>

<style scoped lang="scss">
.mask {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
}
</style>
