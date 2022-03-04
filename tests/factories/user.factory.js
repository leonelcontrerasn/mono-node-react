const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = async () => new User({}).save()
