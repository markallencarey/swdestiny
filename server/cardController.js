const axios = require('axios')

module.exports = {
  getSingleCard: (req, res) => {
    const { card_id } = req.params

    axios.get(`http://swdestinydb.com/api/public/card/${card_id}.json`).then(card => {
      res.status(200).send(card.data)
    }).catch(err => {
      console.log(err)
    })
  },

  getAllCards: (req, res) => {
    axios.get('http://swdestinydb.com/api/public/cards/').then(cards => {
      res.status(200).send(cards.data)
    }).catch(err => {
      console.log(err)
    })
  },

  getAllSet: (req, res) => {
    const { set_code } = req.params

    axios.get(`http://swdestinydb.com/api/public/cards/${set_code}.json`).then(set => {
      res.status(200).send(set.data)
    }).catch(err => {
      console.log(err)
    })
  },

  findCard: (req, res) => {
    const { keyword } = req.params

    axios.get(`http://swdestinydb.com/api/public/find?q=${keyword}`).then(cards => {
      res.status(200).send(cards.data)
    }).catch(err => {
      console.log(err)
    })
  },

  getSets: (req, res) => {
    axios.get('http://swdestinydb.com/api/public/sets').then(sets => {
      res.status(200).send(sets.data)
    }).catch(err => {
      console.log(err)
    })
  }
}