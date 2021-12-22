<template>
  <div id="nav" v-if="$route.name !== 'Home'">
    <router-link id="watermark" to="/">stckoverflw.</router-link>
  </div>
  <router-view/>
</template>

<script>

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Gudea&family=Lato&family=Rubik&family=Source+Sans+Pro:wght@300&display=swap');

/*
    font-family: 'Gudea', sans-serif;

    font-family: 'Lato', sans-serif;

    font-family: 'Rubik', sans-serif;

    font-family: 'Source Sans Pro', sans-serif;
 */

html {
  background-color: #000000;
  font-family: 'Rubik', sans-serif;
  color: #FFFFFF;
}

#nav {
  position: fixed;
  right: 5%;
  top: 8%;
}

#watermark {
  float: right;
  text-decoration: none;
  font-size: x-large;
  color: #FFFFFF;
}

a#watermark:hover::after {
  content: "net";
}
a#watermark:hover {
  animation: fadetextin .6s cubic-bezier(0.2, 0.6, 0.2, 1);
}
a#watermark {
  animation: fadetextout .6s cubic-bezier(0.2, 0.6, 0.2, 1);
}

@keyframes fadetextin {
  0% {transform: translateX(2ch);}
  100% {transform: translateX(0ch);}
}
@keyframes fadetextout {
  0% {transform: translateX(-2ch);}
  100% {transform: translateX(0ch);}
}

.text-color-secondary {
  color: #ff2d3c;
}

</style>
