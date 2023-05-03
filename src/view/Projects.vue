<script>
    import Glide from '@glidejs/glide';

    const projects=[
        {
            name: "Mindhub Brothers Homebanking",
            tags: ["Web","Frontend","Backend"],
            technologies: ["JavaScript","VueJs","Java","Spring","PostgreSQL"],
            videoURL:"",
            repoURL:"https://github.com/Oscar-Sch/homebanking",
            description:"A fantasy homebanking application made with VueJs for the frontend and Spring for the backend. Session management, accounts, credit cards, transactions, loans, among other features. Complex use of CSS to give it a futuristic look.",
        },
        {
            name: "Arthub",
            tags: ["Web","Frontend","Backend","Teamwork"],
            technologies: ["JavaScript","VueJs","Java","Spring","PostgreSQL","Firebase"],
            videoURL:"",
            repoURL:"https://github.com/Oscar-Sch/Arthub",
            description:"E-commerce for on-demand printing of products with the artwork of your choosing. Focused on providing an artistic experience from the first minute, thanks to the original works of Joel Trinidad. I was the team leader and my tasks were to orginice the workflow using SCRUM metodology, to be a technical assistant when a problem arised and to develop both on front and backend.",
        },
        {
            name: "Oh my dog!",
            tags: ["Web","Frontend","Teamwork"],
            technologies: ["JavaScript","VueJs"],
            videoURL:"",
            repoURL:"https://github.com/Oscar-Sch/Oh-My-Dog",
            description:"Petshop made with VueJs. I was the team leader and my tasks were to orginice the workflow using SCRUM metodology, to be a technical assistant when a problem arised and to develop new features.",
        },
    ];

    export default {
        data(){
            return{
                checkboxList:[],
                activeCheckboxList:[],
                filteredProjects:[]
            }
        },
        created(){
            this.checkboxList= [...new Set(projects.reduce((acum,pj)=>{
                return acum.concat(pj.tags)
            },[]))]
            this.filteredProjects= projects;
        },
        mounted(){
            new Glide('.glide', {
                type:"carousel"
            }).mount()
        }
    }
</script>

<template>
    <div class="container">
        <div class="check-container">
            <template v-if="checkboxList.length" v-for="check of checkboxList">
                <input class="checkbox" type="checkbox" name="tags" :id="check" v-model="activeCheckboxList" :value="check">
                <label :for="check" class="checkbutton">{{ check }}</label>
            </template>
        </div>
        <div class="glide carousel">
            <div class="glide__track carousel-container" data-glide-el="track">
                <ul class="glide__slides">
                    <li class="glide__slide carousel-slide" v-for="project of filteredProjects">
                        <div class="info">
                            <h2>{{ project.name }}</h2>
                            <div class="tags">
                                <span v-for="tag of project.tags">{{ tag }}</span>
                            </div>
                            <p>{{ project.description }}</p>
                            <a :href="project.repoURL" target="_blank">{{ project.name }} repository</a>
                        </div>
                        <div class="video">
                            <iframe src="https://youtu.be/embed/H115V3sw768" frameborder="0"></iframe>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="glide__bullets" data-glide-el="controls[nav]">
                <button v-for="(project, index) of filteredProjects" class="glide__bullet" :data-glide-dir="'='+index"></button>
            </div>
            <div class="glide__arrows" data-glide-el="controls">
                <button data-glide-dir="<">&lt;</button>
                <button data-glide-dir=">">&gt;</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .container{
        position: relative;
        z-index: 3;
        display: flex;
        flex-direction: column;
        width: 100%;
        color: #8ef98ecc;
    }
    .check-container{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 2rem;
        flex-wrap: wrap;
        margin-bottom: 2rem;
    }

    .checkbutton{
        font-size: 1.2rem;
        font-family: 'Press Start 2P', cursive;
        padding: .5em 1em;
        cursor: pointer;
        transition: all .3s;
    }
    .checkbutton:hover{
        box-shadow: 0 0 0 3px #8ef98ecc inset;
    }
    .checkbox{
        display: none;
    }
    .checkbox:checked +.checkbutton {
        background-color: #8ef98ecc;
        color: #181e17;
    }
    .carousel{
        border: 3px solid #8ef98ecc;
    }
    .carousel-container{}
    .carousel-slide{
        display: flex;
    }
    .info{
        width: 50%;
    }
    .video{
        width: 50%;
    }
</style>