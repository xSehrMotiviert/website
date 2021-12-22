<template>
  <div class="home">
    <AnimatedText text="Hey," id="hey"/>
    <AnimatedText text="I am" id="iam" class="text-color-secondary"/>
    <AnimatedText text="StckOverflw" id="name" class="text-color-secondary"/>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import AnimatedText from '@/components/AnimatedText.vue';

@Options({
  components: {
    AnimatedText,
  },
})
export default class Home extends Vue {}
</script>

<style scoped>
  .home {
    top: 50%;
    position: absolute;
    margin-left: 12%;
    margin-right: 12%;
    transform: translateY(-55%);
  }
  #hey {
    font-size: 13vmin;
    margin-bottom: -0.5em;
  }
  #iam {
    font-size: 13vmin;
    animation-delay: .4s;
    margin-bottom: -0.7em;
  }
  #name {
    font-size: 13vmin;
    animation-delay: .8s;
  }
</style>
