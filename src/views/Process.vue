<template>
  <div class="Process">
      <div ref="father" class="fatherProcess">
          <div ref="son" class="sonProcess" />
          <br />
          <button @click="changeProcessNumber(data.number)">进度+10%</button>
          <br />
          <input ref="input" style="margin-top: 10px; border: 1px solid #000;" @keyup.enter="enterChangeProcessNumber()" />
      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      data: {
        number: 0
      }
    };
  },
  methods: {
    changeProcessNumber(num) {
      let math = Number(num);
      const { data } = this;
      const { style } = this.$refs.son;
      if (math > 100) {
        return;
      }
      data.number = math + 10;
      style.width = `${data.number}%`;
    },
    enterChangeProcessNumber() {
      const num = Number(this.$refs.input.value);
      if (num) {
        alert("请输入数值");
        return false;
      }
      if (num < 0 || num > 100) {
        alert("请输入1-100之间的数值");
        return false;
      }
      this.$refs.son.style.width = `${num}%`;
      this.data.number = num;
    }
  },
  mounted() {
    this.changeProcessNumber(0);
  }
};
</script>

<style lang="scss" scoped>
.Process {
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .fatherProcess {
    height: 5px;
    width: 20vw;
    background: #ccc;
    position: relative;
    .sonProcess {
      height: 5px;
      width: 0%;
      position: absolute;
      background: #007aff;
    }
  }
}
</style>