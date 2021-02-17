const axios = require('axios')

module.exports = {
  getSingleCard: async (req, res) => {
    const { card_id } = req.params

    await axios.get(`http://swdestinydb.com/api/public/card/${card_id}.json`).then(card => {
      res.status(200).send(card.data)
    }).catch(err => {
      console.log(err)
    })
  },

  getCards: async (req, res) => {

    const { q } = req.query

    if (q) {
      await axios.get(`http://swdestinydb.com/api/public/find?q=${q}`).then(cards => {
        console.log(q)
        console.log(cards.data)
        res.status(200).send(cards.data)
      }).catch(err => {
        console.log(err)
      })
    } else {
      await axios.get('http://swdestinydb.com/api/public/cards/').then(cards => {
        res.status(200).send(cards.data)
      }).catch(err => {
        console.log(err)
      })
    }
  },

  getAllSet: async (req, res) => {
    const { set_code } = req.params

    await axios.get(`http://swdestinydb.com/api/public/cards/${set_code}.json`).then(set => {
      res.status(200).send(set.data)
    }).catch(err => {
      console.log(err)
    })
  },

  getSets: async (req, res) => {
    await axios.get('http://swdestinydb.com/api/public/sets').then(sets => {
      res.status(200).send(sets.data)
    }).catch(err => {
      console.log(err)
    })
  }
}