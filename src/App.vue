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
}

#watermark {
  color: #FFFFFF;
  float: right;
  text-decoration: none;
  font-size: x-large;
}
#watermark:hover::after {
  color: #FFFFFF;
  content: "net";
}

#watermark:hover {
  animation: fadetextin .6s cubic-bezier(0.2, 0.6, 0.2, 1);
}
#watermark {
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

.vertical-center {
  position: absolute;
  height: 100%;
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
  color: #000000;
}

</style>
