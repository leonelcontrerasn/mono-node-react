const Buffer = require('safe-buffer').Buffer
const Keygrip = require('keygrip')
const keys = require('../../config/keys')

module.exports = (user) => {
  const sessionData = {
    passport: {
      user: user._id.toString()
    }
  }

  const keygrip = new Keygrip([keys.cookieKey])
  const session = Buffer.from(
    JSON.stringify(sessionData)
  ).toString('base64')

  const sign = keygrip.sign('session=' + session)

  return {
    session,
    sign
  }
}
