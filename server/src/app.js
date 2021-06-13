const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')
const { sequelize } = require('./models')
const config = require('./config/config')
const { User } = require('./models')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

require('./routes/index')(app)

async function initAdmin (User) {
  const user = await User.findOne({
    where: {
      username: 'admin'
    }
  })

  if (!user) {
    User.create({
      name: 'admin',
      addressId: 0,
      email: 'admin@gmail.com',
      type: 'Admin',
      username: 'admin',
      password: 'Password123'
    })
  }
}

sequelize.sync({})
  .then(() => {
    app.listen(config.port)
    initAdmin(User)
    console.log(`Server started on port ${config.port}`)
  })
