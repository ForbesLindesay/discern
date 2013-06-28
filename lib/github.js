var url = require('url')
var normalize = require('./normalize')
var re = /^\/([^\/]+?)\/([^\/]+?)$/

module.exports = github
function github(u) {
  try {
    u = normalize(u)
    var p = url.parse(u)
    if (p.hostname !== 'github.com') return null
    var m = re.exec(p.path.replace(/\.git$/, ''))
    var user = m[1]
    var repo = m[2]
    var hash = (p.hash || '#master').substring(1)
    return [user, repo, hash]
  } catch (err) {
    return null
  }
}