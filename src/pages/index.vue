<template>
  <div class="flex justify-center content-center text-center mx-auto">
    <div>
      <page-header title="勉強会"></page-header>
    </div>
    <div>
      <card-view></card-view>
    </div>
    <div>
      <input v-model="cardNumber" type="text" placeholder="カード番号を入力" />
    </div>
    <div>
      <button @click="getCardDara">見る</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Cards } from 'princess'
import PageHeader from '~/components/PageHeader.vue'
import CardView from '~/components/CardView.vue'
import { getCardData } from '~/api/princess'

export default Vue.extend({
  components: {
    PageHeader,
    CardView
  },
  data() {
    return {
      cardData: {} as Cards,
      cardNumber: 0
    }
  },
  methods: {
    async getCardDara() {
      const data = await getCardData(this.cardNumber)
      this.cardData = data
    }
  }
})
</script>

<style></style>
