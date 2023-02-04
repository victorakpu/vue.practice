<template>
    <div class="Hope">
       <button>{{ title }}</button>
    </div>
</template>

<script>

export default {
    name: "Button",
    props: ["title"],
    
    
    // methods: {
    //     handleSubmit() {
    //         this.$emit("submit", this.username);
    //     },
    // },
};
</script>