const express = require('express')
const cors = require('cors')
const mealCtrl = require('./controllers/mealCtrl')
const snackCtrl = require('./controllers/snackCtrl')

const app = express()

app.use(express.json())
app.use(cors())

// Endpoints go here meal and snack

app.get('/api/meals', mealCtrl.getMeals)
app.get('/api/snacks', snackCtrl.getSnacks)

app.post('/api/createMeal', mealCtrl.createMeal)
app.post('/api/createSnack', snackCtrl.createSnack)

app.delete('/api/deleteMeal/:id', mealCtrl.deleteMeal)
app.delete('/api/deleteSnack/:id', snackCtrl.deleteSnack)

app.put('/api/updateMeal/:id', mealCtrl.updateMeal)
app.put('/api/updateSnack/:id', snackCtrl.updateSnack)

const port = 6060
app.listen(port, () => {
    console.log(`Serving on port ${port}`)
})