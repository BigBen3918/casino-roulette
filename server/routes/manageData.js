const usercontroller = require('./../controllers/managedb_ctrl')

module.exports = (router) => {
    router.route('/start-signal').post(usercontroller.startSignal)
}