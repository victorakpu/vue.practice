<template>
  <div class="container">
    <div class= "jokes" v-for="joke in data.results" : key="">

    </div>
  </div>
</template>

<script>
export default {
    name: "Dadjoke",
    data(){
        return {
            data: "",
        };
    },
    mounted() {
        fetch("https://icanhazdadjoke.com/search?term=dog", {
            headers: {
                Accept: "application/json",
            },
        })
            .then((res) => res.json())
            .then((data) => {
                this.data = data.joke;
            });
    }

}

</script>