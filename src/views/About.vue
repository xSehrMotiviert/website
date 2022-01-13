<template>
  <div class="about">
    <h1 class="subpage-title animate">About</h1>
    <div class="subtitle animate delay02">
      <p>
        Hey, I am <span class="text-color-secondary name"></span>
      </p>
      <p class="desc">
        Experienced full-stack developer based in germany. <br>
        System administrator and DevOps engineer.
      </p>
    </div>
    <div class="subpage-text animate delay06">
      <p>
        I'm focusing on collaborating with mainly minecraft content creators and their communitys. I work on minecraft, web and discord bot development
      </p>
    </div>
    <div class="subpage-text animate delay08">
      <p>
        I don't want to define myself by the work I've done or skills I have,
        I like to define myself by the work I want to do and the skills I can learn from doing that.
      </p>
    </div>
    <div class="subpage-text animate delay1">
      <p>
        My proficiency in full-stack development and system administration, though, allows me to build elegant applications
        with scalable backend that stays online to ensure a great user experience.
      </p>
    </div>
    <div class="subpage-text animate delay12">
      <p>
        If you want to contact me click <router-link class="text-color-secondary" to="contact">here</router-link>
      </p>
    </div>
  </div>
</template>

<style scoped>
  .about {
    justify-content: center;
  }
  .subtitle .desc {
    color: #FFFFFF;
    font-size: 1.7rem;
    font-weight: lighter;
    margin-top: -1.5vh;
    margin-bottom: 3vh;
  }

  .name::before {
    content: "StckOverflw";
  }
  .name:hover::before {
    content: "Emma";
  }
</style>
