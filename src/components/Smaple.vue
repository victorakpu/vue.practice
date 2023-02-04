<template>
    <div class="hello">
      <h1>{{ msg }}</h1>
      <p>First vue shit that i will be writing it is crazy</p>
      <p>hello everyone welcome to alt school africa</p>
      <p>{{   Count }}</p>
      <button @click="incrementCount">Click me</button>
      <p v-if="inventory > 10" > We have {{ inventory }} items in stock </p>
      <p v-else-if="inventory <= 10"> Only few product left </p>
      <p v-else> We are out of stock </p>
     <p v-for = "student in students" :key="student.id"> {{ student.name }} has a grade of {{ student.grade }} </p>
      <p>What is your name?</p>
      <input type="text" v-focus v-model="username" />
      <p>{{ username }}</p>
      <button v-show="username" @click="handleSubmit">Submit</button>
    </div>
  </template>
  
  <script>
  export default {
    name: "HelloWorld",
    props: {
      msg: String,
    },
  
    data() {
      // return {
      //   Count: 0,
      // };
      return {
        Count: 0,
        inventory: 25,
        students: [
          { id: 1, name: "John" , grade: 100},
          { id: 2, name: "Jane" , grade: 200},
          { id: 3, name: "Jack" , grade: 300},
        ],
        username: "",
      };
  
    },
  
  
   
  
    methods: {
      incrementCount() {
        this.Count++;
      },
    },
    directives: {
      focus: {
        inserted: function (el) {
          el.focus();
        },
      },
    },
     
    watch: {
        count(newVal, oldVal) {
          console.log("oldVal is " + newVal, "newVal is " + oldVal);
  
        },
      },
   
  
    beforeCreate() {
      console.log("before create has been  called");
    },
  
    created() {
      console.log("created has been called");
    },
  
    beforeMount() {
      console.log("before mount has been called");
    },
  
    mounted() {
      console.log("mounted has been called");
    },
  
    beforeUpdate() {
      console.log("before update has been called");
    },
  
    updated() {
      console.log("updated has been called");
    },
    handleSubmit() {
      console.log ("submitted");
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
  </style>
  