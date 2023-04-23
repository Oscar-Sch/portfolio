<script>
  import Navigation from "./components/Navigation.vue";
  import MainContent from "./components/MainContent.vue";
  import About from "./components/About.vue";

  export default{
    components:{
      Navigation,
      MainContent,
      About
    }
  }
</script>

<template>
  <div class="background">
    <div class="foreground"></div>
    <div class="hero-display">
        <Navigation/>
        <MainContent>
          <About/>
        </MainContent>
        <div class="hero-display_lines"></div>
    </div>
  </div>
</template>

<style scoped>
  .background{
      margin-top: 1rem;
      width: 1500px;
      max-width: 1500px;
      height: 95vh;
      background: #535654;
      background: linear-gradient(180deg, #7d7f7e 0%, #676a68 2%, #535654 49%, #4b4e4c 97%, #444645); 
      position: relative;
      border-radius: 10rem;
      box-shadow: 0 .5rem .8rem #fff8 inset,0 -.5rem .8rem #0005 inset;
  }
  .foreground{
      border-radius: 10rem;
      position: absolute;
      inset: 0;
      background: rgb(166,147,122);
      background: linear-gradient(0deg, rgba(166,147,122,1) 0%, rgba(142,121,92,1) 2%, rgba(118,100,72,1) 49%, rgba(116,97,69,1) 97%, rgba(79,67,50,1) 100%); 
      mask-image: url(./assets/images/chipped-mask-final.png);
      mask-size: contain;
      transform: rotateX(180deg);
      box-shadow: 0 -.5rem .8rem #fff8 inset,0 .5rem .8rem #0005 inset;
  }
  .hero-display{
      position: absolute;
      inset: 4rem;
      border: 2rem solid #333;
      background: #181e17;
      border-radius: 8rem;
      box-shadow: 0 .5rem .8rem #fff8,0 -.5rem .8rem #0008,0 0 0 .5rem #000 inset,0 0 8rem .5rem #fff5 inset;
      padding: 3rem;
  }
</style>
