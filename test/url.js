var assert = require('assert')
var discern = require('../')

var isGitUrl = discern.isGitUrl
describe('isGitUrl(url)', function () {
  it('should support git://*', function () {
    var url = 'git://github.com/jamesor/mongoose-versioner'
    assert.ok(isGitUrl(url))
  })
  it('should support git+ssh://*', function () {
    var url = 'git+ssh://github.com/jamesor/mongoose-versioner'
    assert.ok(isGitUrl(url))
  })
  it('should support *.git', function () {
    var url = 'http://github.com/jamesor/mongoose-versioner.git'
    assert.ok(isGitUrl(url))
  })
  it('should return false for http://*', function () {
    var url = 'http://github.com/jamesor/mongoose-versioner'
    assert.ok(isGitUrl(url) === false)
  })
  it('should support ssh', function(){
    var url = 'git@github.com:ForbesLindesay/discern.git';
    assert.ok(isGitUrl(url))
  })
  it('should support git+file://', function () {
    var url = 'git+file:///foo';
    assert.ok(isGitUrl('git+file:///foo'))
  })
})

var isGistUrl = discern.isGistUrl
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

var isGitHubUrl = discern.isGitHubUrl
describe('isGitHubUrl(url)', function () {
  it('should return false for other urls than github', function () {
    var url = 'git://gist.github.com/jamesor/mongoose-versioner'
    assert.ok(isGitHubUrl(url) === false)
  })
  it('should support github urls', function () {
    var url = 'https://github.com/robertkowalski/892z34hjk324h24234/'
    assert.ok(isGitHubUrl(url))
  })
  it('should support ssh', function(){
    var url = 'git@github.com:ForbesLindesay/discern.git';
    assert.ok(isGitHubUrl(url))
  })
  it('should not support wrong urls', function(){
    var url = 'git@githsub.com:ForbesLindesay/discern.git';
    assert.ok(isGitHubUrl(url) === false)
  })
})