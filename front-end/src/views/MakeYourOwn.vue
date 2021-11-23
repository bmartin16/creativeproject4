<template>
<div class="wrapper">
  <div class="shirts">
    <div class="shirt">
      <div class="info">
      </div>
      <div class="image">
        <div class="shirtPic">
          <img v-if="this.$root.$data.color == ''" src='/images/Products/black.jpg'>
          <img v-else :src="'/images/Products/'+this.$root.$data.color">
          <p class = "shirtOverlay" v-if="this.$root.$data.color == 'black.jpg' || this.$root.$data.color == 'blue.jpg' || this.$root.$data.color == ''" style="color: white;">{{shirtNameText}}</p>
          <p class = "shirtOverlay" v-else style="color: black;">{{shirtNameText}}</p>
        </div>
        <div class="forms">
          <div class="color-buttons">
            <button type="button" v-on:click="blueShirt" class="btn btn-primary">Blue</button>
            <button type="button" v-on:click="grayShirt" class="btn btn-secondary">Gray</button>
            <button type="button" v-on:click="redShirt" class="btn btn-danger">Red</button>
            <button type="button" v-on:click="whiteShirt" class="btn btn-light">White</button>
            <button type="button" v-on:click="blackShirt" class="btn btn-dark">Black</button>
          </div>
          <form onsubmit = "event.preventDefault(); myValidation();" class="pure-form">
            <h3>Shirt Text </h3>
            <input v-model="shirtNameText" />
          </form>
        </div>
      </div>
      <div class="price">
        <h2>$14.50</h2>
        <button @click = "addToCart(shirtNameText)" class="auto">Add to Cart</button>
      </div>
    </div>
  </div>
</div>
</template>


<script>
export default {
  name: 'ShirtList',
  data() {
    return {
      shirtNameText: "",
    }
  },
  props: {
    shirts: Array
  },
  methods: {
    blackShirt() {
      this.$root.$data.color = 'black.jpg';
    },
    blueShirt() {
      this.$root.$data.color = 'blue.jpg';
    },
    redShirt() {
      this.$root.$data.color = 'red.jpg';
    },
    grayShirt() {
      this.$root.$data.color = 'gray.jpg';
    },
    whiteShirt() {
      this.$root.$data.color = 'white.jpg';
    },
    addToCart(shirtNameText) {
      const shirt = {
      title: shirtNameText,
      price: "$14.50",
      country: "United States",
      path: "/images/Products/"+this.$root.$data.color,
      }
      this.$root.$data.cart.push(shirt);
    }
  },
}
</script>


<style>
.wrapper {
}

.shirts {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.shirt {
  margin: 10px;
  margin-top: 50px;
  width: 100%;
}

.shirt img {
  border: 2px solid #333;
  height: 100%;
  width: 100%;
  margin-right: 20px;
  object-fit: cover;
  max-width: 300px;
  max-height: 350px;
}

.image {
  position: relative;
  text-align: center;
  display: flex;
  flex: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 50px;
  flex: 1;
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
.forms {
  display: flex;
  flex-direction: column;
}
#leftArrow {
  background-image: url("/images/LeftArrow.jpg");
  width: 20%;
  height: 20%;
  background: #fff;
  border: none;
}
.color-buttons {
  display: flex;
  justify-content: space-between;
}
#rightArrow {
  width: 20%;
  height: 20%;
  background: white;
  border: none;
}
.btn {
  margin-right: 10px;
}
.pure-form {
  display: flex;
  margin-top: 50px;
}
.shirtOverlay {
  position: absolute;
  top: 30%;
  left: 48%;
  transform: translate(-50%, -50%);
  width: 110px;
  word-wrap: break-word;
  font-size: 1em;
}
.shirtPic {
  position: relative;
  text-align: center;
  flex-direction: column;
}
</style>
