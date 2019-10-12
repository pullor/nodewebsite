<template>
  <div>
    <canvas class="mask" id="tutorial"></canvas>
    <div id="tipBox">
      <div>第{{'一'}}步</div>
      <div>{{'这是第一步'}}</div>
      <div @click="next">下一步</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      step: 1,
    }
  },
  props: {
    guidList: {
      type: Array,
      default: () => {
        return [{
          id: 'title',
          tips: '这是第一步'
        }];
      }
    }
  },
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
      const tipNode = document.querySelector('#jltitle');
      if (canvas.getContext) {
        const ctx = canvas.getContext('2d');
        ctx.globalAlpha = 0.5;
        ctx.clearRect(0, 0, body.offsetWidth, body.offsetHeight);
        ctx.fillRect(0, 0, body.offsetWidth, body.offsetHeight);
        ctx.clearRect(tipNode.offsetLeft - 10, tipNode.offsetTop - 10, tipNode.offsetWidth + 20, tipNode.offsetHeight + 20);
        const tipBox = document.querySelector('#tipBox');
        tipBox.style.top = tipNode.offsetTop;
        tipBox.style.left = tipNode.offsetLeft;
        tipBox.style.display = 'block';
      } else {
        // canvas-unsupported code here
      }
    },
    next(){
      this.guidance()
    }
  },
};
</script>

<style scoped lang="scss">
.mask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
}
#tipBox {
  position: absolute;
  display: none;
}
</style>
