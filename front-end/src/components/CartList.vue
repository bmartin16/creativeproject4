<template>
<div class="wrapper">
  <div class="items">
    <div class="item" v-for="item in cart" :key="item.id">
      <div class="info">
        <h1>{{item.title}}</h1>
        <p>Made in {{item.country}}</p>
      </div>
      <div class="image">
        <img :src="item.path">
      </div>
      <div class="price">
        <h2>{{item.price}}</h2>
        <button @click = "removeFromCart(item)" class="auto">Remove From Cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'ShirtList',
  props: {
    cart: Array,
  },
  methods: {
    removeFromCart(item) {
      this.$root.$data.cart.splice(this.$root.$data.cart.indexOf(item), 1);
    },
  }
}


</script>

<style scoped>
.wrapper {
}

.items {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.item {
  margin: 10px;
  margin-top: 50px;
  width: 100%;
}

.item img {
  border: none;
  height: 300px;
  width: 300px;
  object-fit: cover;
}

.item .image {
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin: 50px;
}

.info {
  background: #1EA1A1;
  color: #000;
  padding: 10px 30px;
  height: 80px;
  width: 100%;
  text-align: center;
}

.info h1 {
  font-size: 30px;
}

.info h2 {
  font-size: 20px;
}

.info p {
  margin: 0px;
  font-size: 15px;
}


.price {
  background: #1EA1A1;
  text-align: center;
}

button {
  height: 50px;
  background: white;
  color: black;
  border: 2px solid #1EA1A1;
}

.auto {
  margin-left: auto;
}
#leftArrow {
  background-image: url("/images/LeftArrow.jpg");
  width: 20%;
  height: 20%;
  background: #fff;
  border: none;
}
#rightArrow {
  width: 20%;
  height: 20%;
  background: white;
  border: none;
}
</style>
