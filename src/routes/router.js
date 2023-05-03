import {createRouter,createWebHistory} from "vue-router";
import About from "../view/About.vue";
import Projects from "../view/Projects.vue";
import Contact from "../view/Contact.vue";


const routes=[
    {path: "/",component: About},
    {path: "/projects",component: Projects},
    {path: "/contact",component: Contact},
];

const router= createRouter({
    history: createWebHistory(),
    routes
});

export default router;