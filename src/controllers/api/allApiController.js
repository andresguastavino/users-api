const path = require('path');
const usersData = require(path.resolve('public/users.json'));

const allApiController = {
    list: (req, res) => {
        const response = {
            count: usersData.length,
            results: usersData
        }
            
        res.status(200).json(response);
    },

}

module.exports = allApiController;