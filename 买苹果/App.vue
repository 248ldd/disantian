<template>
  <div class="box">
    <div>苹果10元一斤,折扣 8折</div>
    <hr />
    <p>请输入你要购买的斤数<input type="number" v-model.number="change" /></p>
    <hr />
    <button @click="maidan">结账买单</button>
    <p>结账但:总价：{{ zj }}元 ,折后价{{ zhj }}元, 省了{{ sl }}元</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      zj: "",
      zhj: "",
      sl: "",
      change: "",
    };
  },
  methods: {
    maidan() {
      this.zj = this.change * 10;
      this.zhj = this.zj * 0.8;
      this.sl = this.zj - this.zhj;
    },
  },
};
</script>

<style scoped>
.box {
  width: 500px;
  margin: 50px auto;
}
</style>
