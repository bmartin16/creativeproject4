<template>
<div class="wrapper">
  <div class="items">
    <div class="item" v-for="item in items" :key="item.id">
      <div class="info">
        <h1>{{item.title}}</h1>
        <p>Made in {{item.country}}</p>
      </div>
      <div class="image">
        <button v-on:click="previousItem" id = "leftArrow"><img id = "leftArrow" src='/images/LeftArrow.jpg'></button>
        <img id="itemPic" :src="item.path">
        <button v-on:click="nextItem" id = "rightArrow"><img id = "rightArrow" src='/images/RightArrow.jpg'></button>
      </div>
      <div class="price">
        <h2>{{item.price}}</h2>
        <button @click = "addToCart(item)" class="auto">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'ItemList',
  props: {
    items: Array
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.$root.$data.items = response.data;
        return true;
        } catch (error) {
        console.log(error);
        }
    },
    nextItem() {
      if(this.$root.$data.currentId < this.$root.$data.items.length){
        console.log(event);
        this.$root.$data.currentId += 1;
      }
      else{
        this.$root.$data.currentId = this.$root.$data.items.length;
      }
    },
    previousItem() {
      if(this.$root.$data.currentId > 1){
        this.$root.$data.currentId -= 1;
      }
      else{
        this.$root.$data.currentId = 1;
      }
    },
    addToCart(item) {
      console.log(event);
      this.$root.$data.cart.push(item);
      console.log(this.$root.$data.cart);
    }
  },
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
  border: 2px solid #333;
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
  background: #000;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
#itemPic {
  margin-left: 10px;
}
#leftArrow {
  background-image: url("/images/LeftArrow.jpg");
  width: 80px;
  height: 80px;
  background: #fff;
  border: none;
}
#rightArrow {
  width: 80px;
  height: 80px;
  background: white;
  border: none;
}
</style>
