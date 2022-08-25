<template>
  <div>
    <span v-for="(item, i) in arr" :key="i">
      <input type="checkbox" :value="item" v-model="xz" /> {{ item }}
    </span>
    <h3>和是{{ he }}</h3>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      xz: [],
    };
  },
  computed: {
    he() {
      return this.xz.reduce((sum, val) => {
        return (sum += val);
      }, 0);
    },
  },
};
</script>

<style></style>
