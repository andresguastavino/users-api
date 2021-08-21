const path = require('path');
const usersData = require(path.resolve('public/users.json'));

const usersApiController = {
    list: (req, res) => {
        const page = req.query.page !== undefined ? parseInt(req.query.page) : 0;
        const validate = req.query.validated === '' || req.query.validated === 'true';
        const response = validate ? 
            usersApiController.getValidatedResponse(page) : 
            usersApiController.getUnvalidatedResponse(page);
    
        res.status(200).json(response);
    },

    getValidatedResponse: (page) => {
        // Preventing negative numbers to be used
        const firstPage = 0;
        page = page >= firstPage ? page : firstPage;
        // Preventing page index greater than total num of users
        const lastPage = Math.floor(usersData.length / 10);
        page = page > lastPage ? lastPage : page;
    
        const usersPerPage = 10;
        const limitMin = 0 + (page * 10);
        const limitMax = (page * 10) + usersPerPage > usersData.length ? usersData.length : (page * 10) + usersPerPage;
    
        const results = [];
        for(let i = limitMin; i < limitMax; i++) {
            results.push(usersData[i]);
        }
        
        return {
            count: usersData.length,
            page,
            results
        };
    },
    
    getUnvalidatedResponse: (page) => {
        const usersPerPage = 10;
        const limitMin = 0 + (page * 10);
        const limitMax = (page * 10) + usersPerPage > usersData.length ? usersData.length : (page * 10) + usersPerPage;
    
        const results = [];
        for(let i = limitMin; i < limitMax; i++) {
            usersData[i] && results.push(usersData[i]);
        }
    
        return {
            count: usersData.length,
            page,
            results
        };
    },
}

module.exports = usersApiController;