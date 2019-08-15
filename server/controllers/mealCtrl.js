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

module.exports = {
    getMeals
}