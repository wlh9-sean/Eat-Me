let meals = [
    {
        id: 1,
        name: 'Ravioli',
        calories: 800
    },
    {
        id: 2,
        name: 'Nachos',
        calories: 1200
    }
]

const getMeals = (request, response) => {
    response.status(200).send(meals)
}

const createMeal = (request, response) => {
    const {name, calories} = request.body
    let id

    if(meals.length === 0){
        id =1
    } else {
        id = meals[meals.length -1].id + 1
    }

    const newMeal = {
        id,
        name,
        calories
    }

    meals.push(newMeal)

    response.status(200).send(meals)
}

const deleteMeal = ('/api/meals/:id',(request, response) => {
    const {id} =request.params
    meals = meals.filter(meal => {
        if(meal.id !== +id) return meal
    })
    response.status(200).send(meals)
})

module.exports = {
    getMeals,
    createMeal,
    deleteMeal
}