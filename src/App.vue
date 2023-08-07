<script>
  import Navigation from "./components/Navigation.vue";
  import MainContent from "./components/MainContent.vue";
  import Loading from "./components/Loading.vue";
  // import Vue from 'vue'
  // import EasySlider from 'vue-easy-slider'

  // Vue.use(EasySlider)
  // import About from "./components/About.vue";

  export default{
    data(){
      return{
        activeStat:"Frontend",
        isLoading:true
      }
    },
    provide(){
      return{
        aStat:this.activeStat
      }
    },
    components:{
      Navigation,
      MainContent,
      Loading
    },
    methods:{
      load(){
        setTimeout(() => {
          this.isLoading=false;
          console.log("done")
        }, 3000)
      }
    },
    computed:{
      showLog(){
        console.log(this.activeStat)
      }
    },

  }
</script>

<template>
  <div class="background">
    <div class="foreground"></div>
    <div class="hero-display">
      <template v-if="isLoading">
        <Loading/>
        {{ load() }}
      </template>
      <template v-else>
        <Navigation class="view"/>
        <div class="content-container">
          <router-view class="view principal"/>
          <!-- <router-view class="glitch top"/> -->
          <!-- <router-view class="glitch bot"/> -->
        </div>
      </template>
        <div class="hero-display_lines"></div>
    </div>
  </div>
</template>

<style scoped>
  .background{
      margin-top: 1rem;
      width: 100%;
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
      -webkit-mask-image: url(./assets/images/chipped-mask-final.png);
      -webkit-mask-size: contain;
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
    padding: 2.5rem;
    overflow: hidden;
    z-index: 1;
  }
  .hero-display::before{
    content: "";
    width: calc(100% - 1rem);
    height: 50%;
    position: absolute;
    background: rgb(10,228,20);
    background: linear-gradient(0deg, rgba(10,228,20,0) 0%, rgba(142, 249, 142,0.2) 10%, rgba(1,255,0,0) 50%,
    #181e174d 51%, rgba(1,255,0,0) 56%);
    top: 0;
    left: .5rem;
    animation: crt 8s linear infinite;
    z-index: 7;
    pointer-events: none;
  }
  @keyframes crt {
    0%{
      top:-50%;
    }
    40%{
      top: 150%;
    }
    100%{
      top: 150%;
    }
  }
  .hero-display::after{
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 6rem;
    box-shadow:0 0 0 .5rem #000 inset;
  }
  .hero-display_lines{
    position: absolute;
    inset: 0;
    border-radius: 8rem;
    background-image:repeating-linear-gradient(0deg,
    rgb(100, 100, 100,0),
    rgba(29, 204, 26, 0.08).2rem,
    rgba(29, 204, 26, 0.08) .4rem,
    rgb(100, 100, 100,0) .4rem,
    rgb(100, 100, 100,0) .6rem
    );
  }
  .view{
    opacity: 0;
        animation:glitch-anim-flash .5s  linear forwards;
        /* animation: glitch 10s ease-out infinite; */
  }
  @keyframes appear {
      to{
          opacity: 1;
      }
  }
  .content-container{
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 5rem;
    position: relative;
  }
  .glitch{
    position: absolute !important;
    inset: 0;
    opacity: 0;
    /* background-color: red; */
    z-index: 0;
    pointer-events: none;
  }
  /* .top{
    clip-path: polygon(0 0, 100% 0, 100% 30%, 0 40%);
    animation: glitch-slide-top 5s infinite;
  }
  .bot{
    clip-path: polygon(0 100%, 100% 100%, 100% 70%, 0 55%);
    animation: glitch-slide-bot 5s infinite;
  } */
.principal{
	/* transform: translateX(-5%); */
	/* animation: glitch-anim-1 2s infinite linear alternate; */
  /* animation: glitch-anim-flash 1s  linear; */
}
.top {
	/* transform: translateX(3%) translateY(3%); */
	animation: glitch-anim-2 .5s -.8s  linear ;
}
.bot {
	/* transform: translateX(5%); */
	/* animation: glitch-anim-flash 1s  linear; */
  animation: glitch-anim-1 .5s  linear ;
}
@keyframes glitch-anim-1 {
	0% {
    opacity: 1;
		clip-path: polygon(0 0%, 100% 0%, 100% 5%, 0 5%);
	}
	10% {
		clip-path: polygon(0 15%, 100% 15%, 100% 15%, 0 15%);
	}
	20% {
		clip-path: polygon(0 10%, 100% 10%, 100% 20%, 0 20%);
	}
	30% {
		clip-path: polygon(0 1%, 100% 1%, 100% 2%, 0 2%);
	}
	40% {
		clip-path: polygon(0 35%, 100% 35%, 100% 35%, 0 35%);
	}
	50% {
		clip-path: polygon(0 45%, 100% 45%, 100% 46%, 0 46%);
	}
	60% {
		clip-path: polygon(0 50%, 100% 50%, 100% 70%, 0 70%);
	}
	70% {
		clip-path: polygon(0 70%, 100% 70%, 100% 70%, 0 70%);
	}
	80% {
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	90% {
		clip-path: polygon(0 50%, 100% 50%, 100% 55%, 0 55%);
	}
	100% {
    opacity: 0;
		clip-path: polygon(0 60%, 100% 60%, 100% 70%, 0 70%);
	}
}
@keyframes glitch-anim-2 {
	0% {
    opacity: 1;
		clip-path: polygon(0 15%, 100% 15%, 100% 30%, 0 30%);
	}
	15% {
		clip-path: polygon(0 3%, 100% 3%, 100% 3%, 0 3%);
	}
	25% {
		clip-path: polygon(0 8%, 100% 8%, 100% 20%, 0 20%);
	}
	30% {
		clip-path: polygon(0 20%, 100% 20%, 100% 20%, 0 20%);
	}
	45% {
		clip-path: polygon(0 45%, 100% 45%, 100% 45%, 0 45%);
	}
	50% {
		clip-path: polygon(0 50%, 100% 50%, 100% 57%, 0 57%);
	}
	65% {
		clip-path: polygon(0 60%, 100% 60%, 100% 60%, 0 60%);
	}
	75% {
		clip-path: polygon(0 80%, 100% 80%, 100% 80%, 0 80%);
	}
	80% {
		clip-path: polygon(0 40%, 100% 40%, 100% 60%, 0 60%);
	}
	95% {
		clip-path: polygon(0 45%, 100% 45%, 100% 60%, 0 60%);
	}
	100% {
    opacity: 0;
		clip-path: polygon(0 11%, 100% 11%, 100% 15%, 0 15%);
	}
}
@keyframes glitch-anim-flash {
	0% {
		opacity: .1;
	}
	10% {
		opacity: .7;
	}
	/* 20% {
		opacity: .3;
	}
	30% {
		opacity: 0;
	} */
	40% {
		opacity: .5;
	}
	50% {
		opacity: .1;
	}
	/* 60% {
		opacity: .8;
	}
	70% {
		opacity: 0;
	} */
	80% {
		opacity: .5;
	}
	90% {
		opacity: .1;
	}
	100% {
		opacity: 1;
	}
}
  @keyframes glitch-slide-top {
    0%{
        translate: 1em -.3em;
    }
    2%{
        translate: 1em -.3em;
    }
    3%{
        translate: -.3em .3em;
    }
    4%{
        translate: -.3em .3em;
    }
    5%{
        translate: .3em -1.4em;
    }
    6%{
        translate: .3em -1.4em;
    }
    7%{
        translate: 0 0;
    }
}
@keyframes glitch-slide-bot {
    0%{
        translate: .3em -1.4em;
    }
    2%{
        translate: .3em -1.4em;
    }
    3%{
        translate: -.7em .7em;
    }
    4%{
        translate: -.7em .7em;
    }
    5%{
        translate: .1em -.7em;
    }
    6%{
        translate: .1em -.7em;
    }
    7%{
        translate: 0 0;
    }
}
</style>
