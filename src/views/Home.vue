<template>
    <div class="container">
        <h1>Home</h1>
        <p>My name is {{ name }}</p>
        <h3>{{ student.name }}</h3>
        <h3>{{ student.school }}</h3>
        <button @click="changeName">Change name</button>
        <p>This is an about Home</p>
        <RouterLink to="/about">About page</RouterLink>
        <br>
        <RouterLink to="/sports">Sports page</RouterLink>
    </div>
</template>
<script setup>
import { ref, reactive } from "@vue/reactivity"
const name = ref('John Doe');
const student = reactive({
    name: 'King Victor',
    school: 'Altschool',
})

const changeName = () => {
    name.value = 'Akpu Obiahu'
}

</script>
