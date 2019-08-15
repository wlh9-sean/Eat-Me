const express = require('express')
const cors = require('cors')
const mealCtrl = require('./controllers/mealCtrl')
const snackCtrl = require('./controllers/snackCtrl')

const app = express()

app.use(express.json())
app.use(cors())

// Endpoints go here meal and snack

// Meals
app.get('/api/meals', mealCtrl.getMeals)
app.get('/api/snacks', snackCtrl.getSnacks)

const port = 6060
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})