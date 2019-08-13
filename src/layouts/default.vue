<template>
  <div class="container">
    <div class="contents-wrapper">
      <nuxt />
    </div>
  </div>
</template>

<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}

.container {
  display: flex;
  align-items: flex-start;
  height: 100vh;
}

.contents-wrapper {
  margin-left: 220px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 100px;
  width: 100%;
  overflow-x: hidden;
}
</style>
