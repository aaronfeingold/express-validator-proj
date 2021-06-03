const { v4 } = require ('uuid')
const { validationResult } = require('express-validator')

exports.create = (req, res) => {
  const errors = validationResult(req)
  
  if (!errors.isEmpty()){
    return res.send(errors)
  } else {
      let uuid = v4()
      let title = req.body.title
      let math = title * 2

      return res.send({title: math, id: uuid})
    }
  }

exports.get = (req, res) => {
  return res.send('Received a GET HTTP method')
}



