const fs = require('fs')
const path = require('path')

const mockBaseURL = '//note-server.huger-valley.com'
const realBaseURL = '//note-server.huger-valley.com'

exports.config = function ({ isDev = true } = { isDev: true }) {
    let fileTxt = `
    module.exports = {
        baseURL: '${isDev ? mockBaseURL : realBaseURL}
    }
    `
    fs.writeFileSync(path.join(_dirname, '../src/helpers/config-baseURL.js'), fileTxt)
}