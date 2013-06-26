var url = require('url')

exports.isGitUrl = isGitUrl
function isGitUrl (u) {
  var p = url.parse(u) || {}

  switch (p.protocol) {
    case 'git:':
    case 'git+http:':
    case 'git+https:':
    case 'git+rsync:':
    case 'git+ftp:':
    case 'git+ssh:':
      return true
  }
  return false
}

exports.isGistUrl = isGistUrl
function isGistUrl (u) {
  var p = url.parse(u) || {}
  if (p.hostname === 'gist.github.com')
    return true
  else
    return false
}