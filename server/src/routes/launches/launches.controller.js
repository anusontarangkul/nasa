const { getAllLaunche } = require('../../models/launches.model');

function httpGetAllLaunches(req, res) {
    return res.status(200).json(getAllLaunche());
}

module.exports = {
    httpGetAllLaunches,
}