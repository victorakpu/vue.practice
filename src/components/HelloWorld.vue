<template> <!-- <School>
  <p>Welcome Altschoolers</p>
 </School>
  <div class="hello">
 -->
<!-- <input type="text" v-model="username" />
  <p>{{ username }}</p> -->
 <!-- <Button title="KING" /> -->
  <!-- </div> -->
  <!-- <Dadjoke ><p class="joke">{{ joke.joke }}</p></Dadjoke> -->
  <div class="hello">
    <hi>{{ msg }}</hi>
    <p class="joke">{{ data.joke }}</p>
  </div>
 
</template>

<script>
// import Dadjoke from "./Dadjoke.vue";
// import Button  from "./Hope.vue";
// import School from "./School.vue";
export default{

  data() {
    return {
      msg : "Welcome to Altschool",
      data: "",
    };
  },
mounted() {
   fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => (this.data = data));
},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.joke {
  font-size: 20px;
  font-weight: 500;
  color: #42b983;
}
</style>
