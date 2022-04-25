const express = require('express')
const router = express.Router()

let i = 1
/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' })
})

router.post('/data', (req, res, next) => {
  console.log(i++, req.body)
  res.send('ok')
})

module.exports = router
