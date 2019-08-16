let snacks = [
    {
        id: 1,
        name: 'Cookie',
        calories: 200
    },
    {
        id: 2,
        name: 'Cake',
        calories: 500
    }
]

const getSnacks = (request, response) => {
    response.status(200).send(snacks)
}

const createSnack = (request, response) => {
    const {name, calories} = request.body
    let id

    if(snacks.length === 0){
        id = 1
    } else {
        id = snacks[snacks.length - 1].id + 1
    }

    const newSnack = {
        id,
        name,
        calories
    }

    snacks.push(newSnack)

    response.status(200).send(snacks)
}

const updateSnack = (request, response) => {
    const {id} = request.params
    const updateSnack = request.body

    let mySnack = snacks.findIndex(snack => {
        return snack.id === +id
    })

    snacks[mySnack]=updateSnack

    response.status(200).send(meals)
}

const deleteSnack = ((request, response) => {
    const {id} = request.params
    snacks = snacks.filter(snack => {
        return snack.id !== +id
    })
    response.status(200).send(snacks)
})

module.exports = {
    getSnacks,
    createSnack,
    deleteSnack,
    updateSnack
}