var assert = require('assert')
var testUrl = require('../').testUrl

var isGitUrl = testUrl.isGitUrl
describe('isGitUrl(url)', function () {
  it('should support git://*', function () {
    var url = 'git://github.com/jamesor/mongoose-versioner'
    assert.ok(isGitUrl(url))
  })
  it('should support git+ssh://*', function () {
    var url = 'git+ssh://github.com/jamesor/mongoose-versioner'
    assert.ok(isGitUrl(url))
  })
  it('should return false for http://*', function () {
    var url = 'http://github.com/jamesor/mongoose-versioner'
    assert.ok(isGitUrl(url) === false)
  })
})

var isGistUrl = testUrl.isGistUrl
describe('isGistUrl(url)', function () {
  it('should return false for other urls than github-gist', function () {
    var url = 'git://github.com/jamesor/mongoose-versioner'
    assert.ok(isGistUrl(url) === false)
  })
  it('should support github-gist urls', function () {
    var url = 'https://gist.github.com/robertkowalski/892z34hjk324h24234/'
    assert.ok(isGistUrl(url))
  })
})