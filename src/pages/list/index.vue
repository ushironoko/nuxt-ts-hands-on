<template>
  <dev>
    <nuxt-link to="/">
      <page-header title="リスト表示"></page-header>
    </nuxt-link>
  </dev>
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
