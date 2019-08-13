import axiosBase from 'axios'
const axios = axiosBase.create({
  baseURL: 'https://api.matsurihi.me/mltd/v1/'
})

export const getCardData = async (id: number | string) => {
  const response = await axios.get(`/cards/${id}`)
  const cards: princess.Cards = response.data
  return cards
}

export const getCardList = async () => {
  const response = await axios.get('/cards/')
  const cards: princess.Cards = response.data
  return cards
}

