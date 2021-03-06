# Discern

Discern information about git and github urls.

[![Build Status](https://img.shields.io/travis/ForbesLindesay/discern/master.svg)](https://travis-ci.org/ForbesLindesay/discern)
[![Dependency Status](https://img.shields.io/david/ForbesLindesay/discern.svg)](https://david-dm.org/ForbesLindesay/discern)
[![NPM version](https://img.shields.io/npm/v/discern.svg)](https://www.npmjs.com/package/discern)

## Installation

```console
$ npm install discern
```

## API

### folder(dir, callback) / folder.sync(dir)

For a folder that represents a github url, this will attempt to return the "origin" remote.
On failure, the callback of the async version returns an error. In case of the synchronous version it will throw an Exception.

### github(url)

Takes a github url with the optional extension of using `#branch-name` on the end to denote a branch/tag/commit.  It returns an array containing `[user, repo, branch]` where `branch` defaults to `master`.  This can be used to build the GitHub url, a url to the tarball etc. etc.

### normalize(url)

Currently just a pass through, but the aim will be to get git urls as close as possible to some normal form.  In particular, it should do the work required by npm's [addRemoteGit](https://github.com/isaacs/npm/blob/master/lib/cache.js#L392-L413)

### isGitUrl(url)

Returns `true` if the url has a protocol of 'git:', 'git+http:', 'git+https:', 'git+rsync:', 'git+ftp:', 'git+ssh:' or path ending in '.git'.

Returns `false` otherwise.

### isGistUrl(url)

Returns `true` if the url is a `gist.github.com` url, otherwise `false`.

### isGitHubUrl(url)

Returns `true` if the url is a `github.com` url, otherwise `false`.

## License

MIT