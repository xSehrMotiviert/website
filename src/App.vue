<template>
  <div id="nav" v-if="$route.name !== 'Home'">
    <router-link id="watermark" to="/">stckoverflw.</router-link>
  </div>
  <router-view/>
</template>

<script>
  let text = ""
  document.addEventListener('keydown', function (event) {
    text += event.key
    if (text.includes("apple")) {
      window.location.href = "https://google.com"
    }
    if (text.includes("iphone")) {
      window.location.href = "https://google.com/phone"
    }
  })
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Rubik&display=swap');

html {
  background-color: #000000;
  font-family: 'Rubik', sans-serif;
  color: #FFFFFF;
}

#nav {
  position: fixed;
  right: 5%;
  top: 8%;
  z-index: 1;
}

#watermark {
  color: #FFFFFF;
  text-shadow: 0 0 20px #000;
  float: right;
  text-decoration: none;
  font-size: x-large;
  animation: fadetextout .6s cubic-bezier(0.2, 0.6, 0.2, 1);
}
#watermark:hover::after {
  color: #FFFFFF;
  content: "net";
}

#watermark:hover {
  animation: fadetextin .6s cubic-bezier(0.2, 0.6, 0.2, 1);
}

.animate {
  animation: animate .6s cubic-bezier(0.2, 0.6, 0.2, 1);
  animation-fill-mode: backwards;
}

@keyframes animate {
  0% {
    opacity: 0;
    transform: translateY(30vh);
  }
  /* 	0% {transform: translateY(100%);} */
  100% {
    opacity: 1;
    transform: translateY(0%);
  }
}

@keyframes fadetextin {
  0% {transform: translateX(2ch);}
  100% {transform: translateX(0ch);}
}
@keyframes fadetextout {
  0% {transform: translateX(-2ch);}
  100% {transform: translateX(0ch);}
}

h1.subpage-title {
  color: #FFFFFF;
  font-size: 4em;
  font-weight: bolder;
  margin-left: 10vmin;
  margin-top: 3ch;
}

.subpage-text {
  color: #FFFFFF;
  max-width: 50em;
  font-size: 1.2em;
  font-weight: 1;
  margin-left: 10vmin;
  margin-right: 10vmin;
  overflow-wrap: break-word;
}

.vertical-center {
  position: absolute;
  height: 90vh;
  display: -webkit-flex; /* Safari */
  display: flex;
  -webkit-align-items: center; /* Safari */
  align-items: center;
  transform: translateY(-5%);
}

.text-color-white {
  color: #ffffff;
}
.text-color-red {
  color: #ea0f1e;
}

/* ------ Links ------ */
a, a:after, a:visited {
  text-decoration: none;
  cursor: pointer;
}

/* Delay */
.delay02 { animation-delay: .2s; }
.delay04 { animation-delay: .4s; }
.delay06 { animation-delay: .6s; }
.delay08 { animation-delay: .8s; }
.delay1 { animation-delay: 1s; }

</style>
