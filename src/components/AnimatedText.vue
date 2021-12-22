<template>
  <p>
    {{ text }}
  </p>
</template>

<script lang="ts">
import {Options, Vue} from "vue-class-component";

@Options({
  props: {
    text: String
  }
})
export default class AnimatedText extends Vue {
  text!: string
}
</script>

<style scoped>
  p {
    opacity: 0;
    animation: fadetext .6s cubic-bezier(0.2, 0.6, 0.2, 1);
    animation-fill-mode: forwards;
  }

  @keyframes fadetext {
    0% { opacity: 0; transform: translateY(100%) }
    100% { opacity: 1; transform: translateY(0%) }
  }
</style>