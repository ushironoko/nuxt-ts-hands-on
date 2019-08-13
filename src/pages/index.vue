<template>
  <div class="container">
    <page-header title="勉強会"></page-header>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import PageHeader from '~/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader
  }
})
</script>

<style>
.container {
  @apply min-h-screen flex justify-center content-center text-center mx-auto;
  margin-top: 10px;
}
</style>
