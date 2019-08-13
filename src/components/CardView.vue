<template>
  <div class="max-w-sm rounded overflow-hidden shadow-lg">
    <img class="w-full" :src="imgSrc" :alt="cardName" />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ cardName }}</div>
      <p class="text-gray-700 text-base">
        {{ cardText }}
      </p>
    </div>
    <div class="px-6 py-4">
      <span
        v-if="rarity"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >{{ rarity }}</span
      >
      <span
        v-if="idolType"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >{{ idolType }}</span
      >
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Cards } from 'princess'

export default Vue.extend({
  props: {
    cardData: {
      type: Array as () => Cards,
      required: true
    }
  },
  computed: {
    cardName(): string {
      if (this.cardData.length !== 0) {
        return this.cardData[0].name
      }
      return ''
    },
    imgSrc(): string {
      if (this.cardData.length !== 0) {
        return `https://storage.matsurihi.me/mltd/card_bg/${this.cardData[0].resourceId}_1.png`
      }
      return ''
    },
    rarity(): string | null {
      if (this.cardData.length !== 0) {
        switch (this.cardData[0].rarity) {
          case 1:
            return 'N'
          case 2:
            return 'R'
          case 3:
            return 'SR'
          default:
            return 'SSR'
        }
      }
      return null
    },
    idolType(): string | null {
      if (this.cardData.length !== 0) {
        switch (this.cardData[0].idolType) {
          case 1:
            return 'Princess'
          case 2:
            return 'Faily'
          default:
            return 'Angle'
        }
      }
      return null
    },
    cardText(): string {
      if (this.cardData.length !== 0) {
        return this.cardData[0].awakeningText
      }
      return ''
    }
  }
})
</script>
