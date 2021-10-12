const router = require('express').Router()

router.post('/person', async (req, res) => {
    const { name, salary, approved } = req.body
    if(!name) {
        res.status(422).json({error: 'the name is mandatory '})
    }
  
    const person = {
      name,
      salary,
      approved
    }
  
    // create
    try {
  
      await Person.create(person)
      res.status(201).json({message: 'user insert with sucess'})
  
    }catch (error) {
        res.status(500).json({ error: error })
    }
  
  })

  module.exports = router