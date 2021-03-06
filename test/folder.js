var assert = require('assert')
var discern = require('../')

var folder = discern.folder
describe('folder(path, cb)', function () {
  it('should call a callback with an git-url', function (done) {
    folder(__dirname + '/../', function (er, u) {
      assert.ok(er === null)
      assert.ok(/discern.git$/.test(u))
      done()
    })
  })
  it('should call a callback with an error', function (done) {
    folder(__dirname + '/enteEnteEnte', function (er, u) {
      assert.ok(er)
      assert.ok(er.code === 'ENOENT')
      done()
    })
  })
})

var folderSync = discern.folder.sync
describe('discern.sync(path)', function () {
  it('returns a git-url', function () {
    var res = folderSync(__dirname + '/../')
    assert.ok(/discern.git$/.test(res))
  })
  it('should throw in case of an error', function () {
    assert.throws(function () {
      var res = folderSync(__dirname + './enteEnteEnte')
    }, /ENOENT/)
  })
})
