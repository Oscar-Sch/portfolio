<script>
    const projects=[
        {
            name: "Mindhub Brothers",
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
        {
            name: "Maze Game",
            tags: ["Web","Frontend","Game"],
            technologies: ["JavaScript"],
            videoURL:"",
            repoURL:"https://github.com/Oscar-Sch/Oh-My-Dog",
            description:"A turn based game being made in canvas, using OOP in Javascript.",
        },
    ];

    export default {
        components:{
        },
        data(){
            return{
                checkboxList:[],
                activeCheckboxList:[],
                filteredProjects:[],
                techIcons:{
                    javascript: "fa-brands fa-js",
                    java:"fa-brands fa-java",
                    spring:"fa-solid fa-leaf",
                    react:"fa-brands fa-react",
                    vuejs:"fa-brands fa-vuejs",
                    postgresql:"fa-solid fa-database",
                    firebase:"fa-solid fa-fire",
                },
                activeProject:"Mindhub Brothers",
                activeElement:null,
                buttonList:null
            }
        },
        mounted(){
            this.activeElement=document.querySelector(".active");
            this.activeProject=projects[0];
            // this.buttonList=document.querySelectorAll(".project-selector_button")
        },
        created(){
            this.checkboxList= [...new Set(projects.reduce((acum,pj)=>{
                return acum.concat(pj.tags)
            },[]))]
            this.filteredProjects= projects;
        },
        methods:{
            filterProjects(){
                this.filteredProjects= projects.filter(proj=> {
                    let found=false;
                    proj.tags.forEach(tag=> {
                        if (this.activeCheckboxList.includes(tag)){
                            found=true;
                            return;
                        }})
                    return found;
                })
                if (this.activeCheckboxList.length===0){
                    this.filteredProjects=projects;
                }
                this.activeProject=this.filteredProjects[0];
                // this.buttonList=document.querySelectorAll(".project-selector_button");
                // console.log(this.buttonList)
                // this.buttonList[0].classList.toggle(".active");
            },
            handleActiveProject(event,project){
                this.activeElement?.classList.toggle("active");
                event.target.classList.toggle("active");
                this.activeElement=event.target;
                this.activeProject=project;
            },
        }
    }
</script>

<template>
    <div class="container">
        <div class="check-container">
            <template v-if="checkboxList.length" v-for="check of checkboxList">
                <input class="checkbox" type="checkbox" name="tags" :id="check" v-model="activeCheckboxList" :value="check" @change="filterProjects">
                <label :for="check" class="checkbutton">{{ check }}</label>
            </template>
        </div>
        <div class="projects-container">
            <div class="project-selector">
                <button :class="index?'project-selector_button':'project-selector_button active'" v-for="(project,index) of filteredProjects" @click.self="handleActiveProject($event,project)">
                    {{ project.name }}
                </button>
            </div>
            <div class="active-project-container">
                <div class="active-project-top">
                    <div class="info">
                        <h2>{{ activeProject.name }}</h2>
                        <div class="tags">
                            <span v-for="tag of activeProject.tags">{{ tag }}</span>
                        </div>
                        <p>{{ activeProject.description }}</p>
                        <a :href="activeProject.repoURL" target="_blank">{{ activeProject.name }} repository</a>
                    </div>
                    <div class="video">
                        <iframe src="https://www.youtube.com/embed/H115V3sw768" :title="activeProject.name+' video'" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                    </div>
                </div>
                <div class="active-project-bot">
                    <div class="tech-container">
                        <div class="tech" v-for="tech of activeProject.technologies">
                            <i :class="techIcons[tech.toLowerCase()]+' fa-2xl'"></i>
                            <span>{{tech}}</span>
                        </div>
                    </div>
                </div>
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
        font-family: 'Press Start 2P', cursive;
        text-shadow: 0 0 1rem limegreen;
        height: calc(100% - 4rem);
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
    .projects-container{
        width: 100%;
        height: 100%;
        display: flex;
    }
    .project-selector{
        display: flex;
        flex-direction: column;
        width: 25%;
        border-right: 3px solid #8ef98ecc;
        padding: 1rem .5rem;
        /* gap: 1rem; */
        overflow-y: scroll;
        flex-shrink: 0;
    }
    .project-selector_button{
        background:none;
        border: none;
        color: #8ef98ecc;
        font-family: 'Press Start 2P', cursive;
        text-shadow: 0 0 1rem limegreen;
        font-size: 1.2rem;
        cursor: pointer;
        padding: .8em 0;
        transition: all .3s;
    }
    .project-selector_button:hover{
        box-shadow: 0 0 0 3px #8ef98ecc inset;
    }
    .active{
        background-color: #8ef98ecc;
        color: #181e17;
    }
    .active-project-container{
        width: 75%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 0 1rem;
    }
    .active-project-top{
        display: flex;
    }
    .info{
        width: 100%;
        max-width: 30rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        max-height: 100%;
        flex-shrink: 2;
    }
    .info p{
        height: 100%;
        max-height: 12rem;
        overflow-y: scroll;
    }
    .tags{
        width: 100%;
        display: flex;
        font-size: .8rem;
        gap: 1rem;
        flex-wrap: wrap;
    }
    .video{
        width: 50%;
        min-width: 20rem;
        display: flex;
        justify-content: center;
        
    }
    .video iframe{
        aspect-ratio: 16/9;
        width: 90%;
        border: 3px solid #8ef98e;
        opacity: .75;
        box-shadow: 0 0 1rem limegreen;
    }
    .tech-container{
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 1.5rem;
        margin-top: 3rem;
        flex-wrap: wrap;
    }
    .tech{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
    }
</style>