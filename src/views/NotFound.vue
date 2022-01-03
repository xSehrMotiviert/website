<template>
  <div class="not-found vertical-center">
    <div class="content">
      <h1>404 Page Not Found</h1>
      <h3>This Page wasn't found</h3>
      <h3>Go back <router-link class="text-color-secondary" to="/">Home</router-link></h3>
    </div>
  </div>
</template>

<style scoped>
  .not-found {
    width: 99%;
    justify-content: center;
  }
  .content {
    text-align: center;
  }
  div h1 {
    display: block;
  }
  div h3 {
    display: block;
    font-weight: lighter;
    color: rgba(255, 255, 255, 0.80);
  }
</style>