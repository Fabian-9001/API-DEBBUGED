const express = require('express')
const db = require('./utils/database')
const usersRoutes = require('./users/users.router')

const app = express()

const port = 9000

app.use(express.json())

db.authenticate()
    .then(() => console.log('This Server is Authenticated'))
    .catch(err => console.log(err))

db.sync()
    .then(() => console.log('This Server is Synced'))
    .catch(err => console.log(err))


app.use('/api/v1', usersRoutes)


app.get('/', (req, res) => {
    res.status(200).json({ message: 'Ok!' })
})

app.listen(port, () => {
    console.log(`Server started at port ${port}`)
})
