<template>
  <div id="app">
    <router-view></router-view>
    <van-tabbar v-model="active">
      <van-tabbar-item
        v-for="item in footer"
        :key="item.name"
        :icon="item.icon"
        :to="item.path"
        :value="item.text"
        @click="goto(item)"
      >{{item.text}}</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>

export default {
  name: 'app',
  data() {
    return {
      active:0,
      value: "",
      footer: [
        {
          name: "home",
          path: "/home",
          text: "首页",
          icon: "wap-home-o"
        },
        {
          name: "list",
          path: "/list",
          text: "分类",
          icon: "apps-o"
        },
        {
          name: "cart",
          path: "/cart",
          text: "购物车",
          icon: "shopping-cart-o"
        },
        {
          name: "mine",
          path: "/mine",
          text: "我的",
          icon: "friends-o"
        }
      ],
    };
  },
  methods: {
    goto(item) {
      this.$router.push(item.path);
    }
  }
}
</script>

<style lang="scss">
h1{
  color:red;
}

</style>
