<script>
    export default{
        data(){
            return{
                stats:[
                    {
                        skill:"Frontend",
                        number:10
                    },
                    {
                        skill:"Backend",
                        number:8
                    },
                    {
                        skill:"Creativity",
                        number:11
                    },
                    {
                        skill:"Tools",
                        number:7
                    },
                    {
                        skill:"Passion",
                        number:19
                    },
                ],
                activeStat:"Frontend",
                activeElement:null,
            }
        },
        // inject:["aStat"],
        mounted(){
            this.activeElement=document.querySelector(".active");
            // this.activeStat=this.aStat;
            // console.log(this.aStat)
        },
        methods:{
            handleActiveStat(event,skill){
                this.activeElement?.classList.toggle("active");
                event.target.classList.toggle("active");
                this.activeElement=event.target;
                // this.aStat=skill;
                this.activeStat=skill;
                // console.log(event.target)
            }
        },
        computed:{
            statDescription(){
                switch (this.activeStat) {
                    case "Frontend":
                        return "In love of CSS. Capable of embodying his ideas and implement them. He can work both with vanilla JavaScript or with some framework such as ReactJs or VueJs. He can also use Bootstrap or make complex layouts by hand.";
                    case "Backend":
                        return "Has worked with java, using spring as framework. He has created REST APIs using the MVC paradigm. Handles relational databases such as H2 and PostgreSQL, Hibernate as ORM and JPA for managing repositories.";
                    case "Creativity":
                        return "Has a very active imagination, and uses it as a tool to constantly improve and challenge himself. He is not afraid of complex ideas, on the contrary, tries to find a way to make them come to life.";
                    case "Tools":
                        return "Uses development tools like VSC, IntelliJ IDEA and Postman. He also uses design tools to achieve the styles he is looking for, such as Photoshop, Inkscape, Figma and Aseprite.";
                    case "Passion":
                        return "Loves the vast world of technology, its constant evolution and the challenges that arise from that. His goal is to be, every day, a better developer than the day before. Due to the above, he can always find a way to be motivated.";
                        
                }
            }
        }
    }
</script>

<template>
    <div class="container">
        <div class="left-side">
            <div class="hero-title">
                <h1>
                    <span>Subject: </span>
                    <span>Oscar Schwerdt</span>
                </h1>
            </div>
            <ul>
                <li>
                    <i class="fa-solid fa-keyboard fa-2xl"></i>
                    <h3>FullStack Developer</h3>
                </li>
                <li>
                    <i class="fa-solid fa-earth-americas fa-2xl"></i>
                    <h3>La Plata, Argentina</h3>
                </li>
                <li>
                    <i class="fa-brands fa-linkedin fa-2xl"></i>
                    <h3><a href="https://www.linkedin.com/in/oscar-schwerdt/" target="_blank">LinkedIn Page</a></h3>
                </li>
                <li>
                    <i class="fa-brands fa-square-github fa-2xl"></i>
                    <h3><a href="https://github.com/Oscar-Sch" target="_blank">GitHub Page</a></h3>
                </li>
            </ul>
            <div class="resume">
                <h3>Resume Download</h3>
                <i class="fa-regular fa-file-pdf fa-2xl"></i>
            </div>
        </div>
        <div class="right-side">
            <div class="right-side_upper">
                <div class="image-container">
                    <img src="../assets/images/walking-2.webp">
                    <div class="status-bar bar-top"></div>
                    <div class="status-bar bar-top-left"></div>
                    <div class="status-bar bar-top-right"></div>
                    <div class="status-bar bar-bot-left"></div>
                    <div class="status-bar bar-bot-right"></div>
                    <div class="status-bar bar-bot"></div>
                </div>
                <table>
                    <thead>
                        <tr>
                            <th>Stats</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(stat,index) of stats">
                            <td @click.self="handleActiveStat($event,stat.skill)" :class="index?'':'active'">
                                <span class="non-clickable">{{ stat.skill }}</span>
                                <span class="non-clickable">{{ stat.number }}</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="right-side_lower">
                <p>{{ statDescription }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .non-clickable{
        pointer-events: none;
    }
    .container{
        position: relative;
        /* top: calc(-200% - 10rem); */
        display: flex;
        width: 100%;
        height: 100%;
        z-index: 3;
        /* opacity: 0; */
        /* animation: appear .5s forwards; */
        /* animation: glitch 10s ease-out infinite; */
    }
    @keyframes appear {
        to{
            opacity: 1;
        }
    }
    @keyframes glitch {
        0%{
            top: calc(-200% - 10rem);
        }
        5%{
            top: 3rem;
        }
        5.4%{
            top: 3rem;
        }
        5.8%{
            top: -2rem;
        }
        6.2%{
            top: 1rem;
        }
        6.6%{
            top: 0;
        }
        100%{
            top: 0;
        }
    }
    .left-side{
        width: 40%;
        color: #8ef98ecc;
        text-shadow: 0 0 1rem limegreen;
        font-family: 'Press Start 2P', cursive;
        font-size: .9rem;
        position: relative;
    }
    .left-side ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .left-side li{
        display: flex;
        gap: 1rem;
        justify-content: flex-start;
        align-items: center;
    }
    .left-side i{
        width: 3rem;
        min-height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .left-side a{
        /* text-decoration: none; */
        color: #8ef98ecc;
    }
    .left-side h3{
        /* text-align: center; */
        width: 90%;
    }
    .resume{
        position: absolute;
        width: 10rem;
        height: 10rem;
        border: 3px dashed #8ef98ecc;
        left: 50%;
        bottom: 4rem;
        translate: -50% 0;
        text-align: center;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: .5rem 0;
        gap: 2.5rem;
    }
    .resume i{
        scale: 3;
        padding-left: .5rem;
    }
    .right-side{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-bottom: 3rem;
    }
    .right-side_upper{
        width: 100%;
        height: 60%;
        display: flex;
        gap: 2rem;
        justify-content: space-around;
    }
    .image-container{
        width: 30%;
        min-width: 12rem;
        position: relative;
        display: flex;
        justify-content: center;
    }
    .right-side_upper img{
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0px 0px 1rem limegreen);
    }
    .status-bar{
        position: absolute;
        width: 3rem;
        height: .7rem;
        background-color: #8ef98ecc;
        box-shadow: 0 0 .2rem limegreen;
    }
    .bar-top{
        top: 0;
        left: 50%;
        translate: -50% -150%;
    }
    .bar-top-left{
        top: 30%;
        left: 0%;
        translate: -50% 0;
    }
    .bar-top-right{
        top: 30%;
        right: 0%;
        translate: 50% 0%;
    }
    .bar-bot{
        bottom: 0;
        left: 50%;
        translate: -50% 150%;
    }
    .bar-bot-left{
        bottom: 30%;
        left: 0%;
        translate: -50% 0%;
    }
    .bar-bot-right{
        bottom: 30%;
        right: 0%;
        translate: 50% 0%;
    }
    .right-side_upper table{
        width: 300px;
        height: 100%;
        color: #8ef98ecc;
        border-collapse: collapse;
        font-family: 'Press Start 2P', cursive;
        text-shadow: 0 0 1rem limegreen;
    }
    .right-side_upper table th{
        border-bottom: 3px solid #8ef98ecc;
    } 
    .right-side_upper table td{
        display: flex;
        justify-content: space-between;
        padding: 1.3rem .5rem;
        cursor: pointer;
        transition: all .1s;
    }
    .right-side_upper table tr>td:hover{
        box-shadow: 0 0 0 3px #8ef98ecc inset;
    }
    .active{
        background-color: #8ef98ecc;
        color: #181e17;
    }
    .right-side_upper table tr>td:focus{
        background-color: #8ef98ecc;
        color: #181e17;
    }
    .right-side_lower{
        color: #8ef98ecc;
        text-shadow: 0 0 1rem limegreen;
        font-size: 1rem;
        font-family: 'Press Start 2P', cursive;
        padding: 0 2rem;
        min-height: 8rem;
    }
    .hero-title h1{
        display: flex;
        flex-direction: column;
        font-size: 1.5rem;
        /* font-family: 'DotGothic16', sans-serif; */
        margin-bottom: 3rem;
    }
    .hero-title h1 span:first-child{
        text-decoration: underline;
        margin-bottom: .5rem;
        font-size: 2rem;
    }
    .left-side p{
        color: #8ef98ecc;
        text-shadow: 0 0 1rem limegreen;
        font-size: 1rem;
        font-family: 'Press Start 2P', cursive;
        
    }
</style>