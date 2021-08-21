const homeController = {
    index: (req, res) => {
        res.render('/public/index.html');
    },
}

module.exports = homeController;