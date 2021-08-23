const allApiController = {
    list: (req, res) => {
        const response = {
            all: 'https://users-list-api.herokuapp.com/api/all',
            users: 'https://users-list-api.herokuapp.com/api/users'
        }
            
        res.status(200).json(response);
    },
}

module.exports = allApiController;