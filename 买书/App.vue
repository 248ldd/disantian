<template>
  <div class="box">
    <p>请选择你要购买的书籍</p>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        {{ item.name }}
        <button @click="btn(index)">买书</button>
      </li>
      <!-- <li>水浒传 <button>买书</button></li>
      <br />
      <li>西游记<button>买书</button></li>
      <li>三国演义<button>买书</button></li>
      <li>红楼梦<button>买书</button></li> -->
    </ul>
    <ul></ul>
    <table border="1" width="500" cellspacing="0">
      <tr>
        <th>序号</th>
        <th>书名</th>
        <th>单价</th>
        <th>数量</th>
        <th>合计</th>
      </tr>
      <tbody>
        <tr v-for="(item, index) in arr" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.price }}</td>
          <td>{{ item.count }}</td>
          <td>{{ item.price * item.count }}</td>
        </tr>
      </tbody>
    </table>
    <p>总价格为:{{ zjg }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hj: 0,
      // zjg: 0,
      arr: [
        {
          name: "水浒传",
          price: 107,
          count: 0,
        },
        {
          name: "西游记",
          price: 192,
          count: 0,
        },
        {
          name: "三国演义",
          price: 219,
          count: 0,
        },
        {
          name: "红楼梦",
          price: 178,
          count: 0,
        },
      ],
    };
  },
  methods: {
    btn(index) {
      this.arr[index].count++;
    },
  },
  computed: {
    zjg() {
      return this.arr.reduce((sum, obj) => {
        return (sum += obj.price * obj.count);
      }, 0);
    },
  },
};
</script>
<style scoped>
.box {
  width: 500px;
  margin: 60px auto;
}
</style>
