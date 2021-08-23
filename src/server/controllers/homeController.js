const path = require('path');
const indexPath = path.resolve('/build/index.html');

const homeController = {
    index: (req, res) => {
        res.sendFile(indexPath);
    },
}

module.exports = homeController;