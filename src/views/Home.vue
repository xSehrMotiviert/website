<template>
  <div class="hide-mobile mobile-tap-area">
    <div class="max-width">
      <div class="vertical-center">
        <h1>
          <div class="text-color-white hide-text-block">
            <div class="animate toggle-mobile-first">Hey</div>
          </div>
          <div class="text-color-red hide-text-block">
            <div class="animate delay04 toggle-mobile-first">I am</div>
          </div>
          <div class="text-color-red hide-text-block">
            <div class="animate delay08 toggle-mobile-first">StckOverflw</div>
          </div>
        </h1>
      </div>
    </div>
    <div class="tap-indication">Tap anywhere</div>
  </div>
  <div class="home">
  <div class="max-width">
    <div class="vertical-center">
      <h1>
        <div style="width: max-content" class="hide-text-block" id="about">
          <a href="about/">
            <div class="animate text-color-white on-hover hide-web label-hello"></div>
            <div class="animate text-color-white on-hover hide-mobile toggle-mobile-second">About</div>
          </a>
        </div>
        <div style="width: max-content" class="hide-text-block" id="work">
          <a href="work/">
            <div class="animate text-color-red on-hover delay04 hide-web label-iam"></div>
            <div class="animate text-color-red on-hover delay04 hide-mobile toggle-mobile-second">Work</div>
          </a>
        </div>
        <div class="hide-text-block" id="contact">
          <a href="contact/">
            <div class="animate text-color-red on-hover delay08 hide-web label-name"></div>
            <div class="animate text-color-red on-hover delay08 hide-mobile toggle-mobile-second">Contact</div>
          </a>
        </div>
      </h1>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import $ from 'jquery';

@Options({
  components: {

  },
})
export default class Home extends Vue {
  mounted(): void {
    document.addEventListener("click", () => {
      toggle('.toggle-mobile-first')
      toggle('.toggle-mobile-second')
    })
  }
}

</script>

<style scoped>
  .label-hello:after{
    content:"Hey";
  }
  .label-hello:hover:after{
    content:"About";
  }
  .label-iam:after{
    content:"I am";
  }
  .label-iam:hover:after{
    content:"Work";
  }
  .label-name:after{
    content:"StckOverflw";
  }
  .label-name:hover:after{
    content:"Contact Me";
  }

  #about {
    font-size: 13vmin;
  }
  #work {
    font-size: 13vmin;
  }
  #contact {
    font-size: 13vmin;
  }

  /* ------ Hover states ------ */
  .on-hover {
    transition: all .4s cubic-bezier(0.2, 0.6, 0.2, 1);
  }
  .on-hover:hover {
    margin-left: 40px;
    transition: all .4s cubic-bezier(0.2, 0.6, 0.2, 1);
  }

  /* Mobile */

  .toggle-mobile-first {
    font-size: 12vmin;
  }

  .max-width {
    max-width: 68%;
    max-width: 21.5em;
    margin-left: 10%;
  }
  @media screen and (max-width: 767px) {
    .max-width {
      max-width: 100%;
      max-width: 86%;
    }
  }

  .hide-text-block {
    position: relative;
    display: block;
    overflow: hidden;
  }

  @media screen and (min-width: 768px) {
    .hide-mobile {
      display: none;
    }
  }

  @media screen and (max-width: 767px) {
    .hide-web {
      display: none;
    }
    .toggle-mobile-second {
      display: none;
    }
    .mobile-tap-area {
      background: transparent;
      position: absolute;
      width: 96%;
      height: 98%;
    }
    .tap-indication {
      text-align: center;
      width: 100%;
      font-family:"Medium",serif;
      color: #ffffff;
      position: fixed;
      bottom: 4%;
      font-size: 0.6em; /* general fallback */
      font-size: 3.6vm; /* IE9 fallback */
      font-size: 3.6vmin;
      animation: bounce 1s infinite alternate;

      animation:bounce .5s cubic-bezier(.5, .6, .6, 1) infinite alternate;
    }
    @keyframes bounce {
      from {
        transform: translateY(0px);
      }
      to {
        transform: translateY(-8px);
      }
    }
  }

  .animate {
    animation:animate .6s cubic-bezier(0.2, 0.6, 0.2, 1);
    animation-fill-mode:backwards;
  }

  @keyframes animate {
    0% {opacity: 0;transform: translateY(30vh);}
    /* 	0% {transform: translateY(100%);} */
    100% {opacity: 1;transform: translateY(0%);}
  }

  @keyframes reduce-padding {
    100% { padding-right: 0 }
  }

  /* Delay */
  .delay04 { -webkit-animation-delay: .4s; animation-delay: .4s;}
  .delay08 { -webkit-animation-delay: .8s; animation-delay: .8s;}
</style>
