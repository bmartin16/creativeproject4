<template>
  <div>
    <h3>Please explore our wide selection of hilarious t-items below!</h3>
    <ItemList :items="items"/>
  </div>
</template>

<script>
// @ is an alias to /src

import ItemList from "../components/ItemList.vue";
export default {
  name: 'Home',
  components: {
    ItemList
  },
  computed: {
    items() {
      return this.$root.$data.items.filter(item => item.num == this.$root.$data.currentId);
    }
  },
}
</script>

<style>
h3 {
  text-align: center;
}
</style>
