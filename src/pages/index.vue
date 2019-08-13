<template>
  <div>
    <div>
      <page-header title="勉強会"></page-header>
    </div>
    <div>
      <card-view :card-data="cardData"></card-view>
    </div>
    <div class="mt-4 mb-4">
      <label
        class="block text-gray-700 text-sm font-bold mb-2"
        for="cardnumber"
      >
        カード番号
      </label>
      <input
        id="cardnumber"
        v-model="cardNumber"
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
      />
    </div>
    <div>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        @click="getCardDara"
      >
        見る
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Cards } from 'princess'
import { getCardData } from '~/api/princess'
import PageHeader from '~/components/PageHeader.vue'
import CardView from '~/components/CardView.vue'

export default Vue.extend({
  components: {
    PageHeader,
    CardView
  },
  data() {
    return {
      cardData: [] as Cards,
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
