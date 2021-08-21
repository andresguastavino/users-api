const path = require('path');
const indexPath = path.resolve('./public/index.html');

const homeController = {
    index: (req, res) => {
        res.sendFile(indexPath);
    },
}

module.exports = homeController;