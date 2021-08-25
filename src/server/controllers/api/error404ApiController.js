const error404ApiController = {
    get: (req, res) => {
        res.status(404).json({
            status: 'error',
            statusCode: 404,
            message: 'not found'
        });
    },
}

module.exports = error404ApiController;