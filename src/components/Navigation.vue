<script>
    export default{
        data(){
            return{
                activeLink:0,
                navigation: null,
                offset:["19.2rem","9.1rem",".3rem"],
                width:["7rem","10rem","8.5rem"]
            }
        },
        mounted(){
            this.navigation=document.querySelector(".navigation");
            this.manageActiveLink(this.activeLink);
        },
        methods:{
            manageActiveLink(link){
                this.navigation.style.setProperty("--activeLinkOffset",this.offset[link]);
                this.navigation.style.setProperty("--activeLinkWidth",this.width[link]);
                this.navigation.classList.add("view");
                setTimeout(() => {
                    this.navigation.classList.remove("view");
                }, 500);
            }
        },
    }
</script>

<template>
    <nav class="navigation">
        <div class="active-link"></div>
        <ul>
            <li>
                <router-link to="/" class="link" @click="manageActiveLink(0)">About</router-link>
            </li>
            <li>
                <router-link to="/projects" class="link" @click="manageActiveLink(1)">Projects</router-link>
            </li>
            <li>
                <router-link to="/contact" class="link" @click="manageActiveLink(2)">Contact</router-link>
            </li>
        </ul>
    </nav>
</template>

<style scoped>
    .navigation{
    --activeLinkOffset:0;
    --activeLinkWidth:7rem;
    width: 100%;
    border-bottom: 3px solid #8ef98ecc;
    margin-bottom: 2rem;
    position: relative;
    z-index: 1;
    }
    .navigation ul{
        list-style: none;
        display: flex;
        justify-content: end;
        padding: .5rem 1rem;
        gap: 2rem;
    }
    .link{
        text-decoration: none;
        color: #8ef98ecc;
        font-size: 1rem;
        font-family: 'Press Start 2P', cursive;
        text-shadow: 0 0 1rem limegreen;
        padding: .3rem 0;
    }
    .active-link{
        position: absolute;
        bottom: -3px;
        right: calc(0rem + var(--activeLinkOffset));
        width: var(--activeLinkWidth);
        height: 3rem;
        border: 3px solid #8ef98ecc;
        border-bottom: 3px solid #181e17;
        z-index: -1;
        transition: all .2s ease;
    }
</style>