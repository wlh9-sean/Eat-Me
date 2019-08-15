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

module.exports = {
    getSnacks
}