<script>

</script>

<template>
    <div class="hero_left-side">
        <div class="hero-title">
            <h1>
                <span>Subject: </span>
                <span>Oscar Schwerdt</span>
            </h1>
        </div>
        <ul>
            <li>
                <i class="fa-solid fa-keyboard fa-2xl"></i>
                <h3>Java FullStack Developer</h3>
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
    <div class="hero_right-side">
        <div class="hero_right-side_upper">
            <div class="hero_image-container">
                <img src="../assets/images/vault boy-about.png">
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Stats</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td class="active"><span>Frontend</span><span>10</span></td>
                    </tr>
                    <tr>
                        <td><span>Backend</span><span>8</span></td>
                    </tr>
                    <tr>
                        <td><span>Creativity</span><span>11</span></td>
                    </tr>
                    <tr>
                        <td><span>Tools</span><span>7</span></td>
                    </tr>
                    <tr>
                        <td><span>Passion</span><span>19</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="hero_right-side_lower">
            <p>In love of CSS. Capable of embodying his ideas and implement them. He can work both with vanilla JavaScript or with some framework such as ReactJs or VueJs. He can also use Bootstrap or make complex layouts by hand.</p>
        </div>
    </div>
</template>

<style>
    .hero_left-side{
        width: 40%;
        color: #8ef98ecc;
        text-shadow: 0 0 1rem limegreen;
        font-family: 'Press Start 2P', cursive;
        font-size: .9rem;
        position: relative;
    }
    .hero_left-side ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    .hero_left-side li{
        display: flex;
        gap: 1rem;
        justify-content: flex-start;
        align-items: center;
    }
    .hero_left-side i{
        width: 3rem;
        min-height: 2rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .hero_left-side a{
        /* text-decoration: none; */
        color: #8ef98ecc;
    }
    .hero_left-side h3{
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
    .hero_right-side{
        width: 60%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding-bottom: 3rem;
    }
    .hero_right-side_upper{
        width: 100%;
        height: 60%;
        display: flex;
        justify-content: space-around;
    }
    .hero_image-container{
        width: 30%;
    }
    .hero_right-side_upper img{
        height: 100%;
        object-fit: contain;
        filter: drop-shadow(0px 0px 2rem limegreen);
    }
    .hero_right-side_upper table{
        width: 300px;
        height: 100%;
        color: #8ef98ecc;
        border-collapse: collapse;
        font-family: 'Press Start 2P', cursive;
        text-shadow: 0 0 1rem limegreen;
    }
    .hero_right-side_upper table th{
        border-bottom: 3px solid #8ef98ecc;
    } 
    .hero_right-side_upper table td{
        display: flex;
        justify-content: space-between;
        padding: 1.3rem .5rem;
    }
    .hero_right-side_upper table tr>td:hover , .active{
        background-color: #8ef98ecc;
        color: #181e17;
    }
    .hero_right-side_upper table tr>td:focus{
        background-color: #8ef98ecc;
        color: #181e17;
    }
    .hero_right-side_lower{
        color: #8ef98ecc;
        text-shadow: 0 0 1rem limegreen;
        font-size: 1rem;
        font-family: 'Press Start 2P', cursive;
        padding: 0 2rem;
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
    .hero_left-side p{
        color: #8ef98ecc;
        text-shadow: 0 0 1rem limegreen;
        font-size: 1rem;
        font-family: 'Press Start 2P', cursive;
    }
</style>