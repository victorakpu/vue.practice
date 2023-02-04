
import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home.vue";
import About from '@/views/About.vue';
import Sports from '@/views/Sports.vue';
const router = createRouter(
    {history: createWebHistory(),
    routes: [
        {
            path: "/",
            name: "Home",
            component: Home,
        
        }, 
          {
            path: "/About",
            name: "About",
            component: About, 
        
        },
        {
            path: "/Sports",
            name: "Sports",
            component: Sports,
        }
    ]}
)

createApp(App).use(router).mount("#app");




