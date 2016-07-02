(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function() {
  var Chainer, plus,
    slice = [].slice;

  plus = require('./plus');

  module.exports = Chainer = (function() {
    function Chainer(_verbMethods) {
      this._verbMethods = _verbMethods;
    }

    Chainer.prototype.chain = function(path, name, contextTree, fn) {
      var fn1;
      if (fn == null) {
        fn = (function(_this) {
          return function() {
            var args, separator;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            if (!args.length) {
              throw new Error('BUG! must be called with at least one argument');
            }
            if (name === 'compare') {
              separator = '...';
            } else {
              separator = '/';
            }
            return _this.chain(path + "/" + (args.join(separator)), name, contextTree);
          };
        })(this);
      }
      this._verbMethods.injectVerbMethods(path, fn);
      if (typeof fn === 'function' || typeof fn === 'object') {
        fn1 = (function(_this) {
          return function(name) {
            delete fn[plus.camelize(name)];
            return Object.defineProperty(fn, plus.camelize(name), {
              configurable: true,
              enumerable: true,
              get: function() {
                return _this.chain(path + "/" + name, name, contextTree[name]);
              }
            });
          };
        })(this);
        for (name in contextTree || {}) {
          fn1(name);
        }
      }
      return fn;
    };

    return Chainer;

  })();

  module.exports = Chainer;

}).call(this);

},{"./plus":24}],2:[function(require,module,exports){
(function() {
  module.exports = function(message) {
    return typeof console !== "undefined" && console !== null ? typeof console.warn === "function" ? console.warn("Octokat Deprecation: " + message) : void 0 : void 0;
  };

}).call(this);

},{}],3:[function(require,module,exports){
(function() {
  module.exports = {
    'repos': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/repos\/[^\/]+\/[^\/]+$/,
    'gists': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/gists\/[^\/]+$/,
    'issues': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/repos\/[^\/]+\/[^\/]+\/(issues|pulls)\/[^\/]+$/,
    'users': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/users\/[^\/]+$/,
    'orgs': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/orgs\/[^\/]+$/,
    'teams': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/teams\/[^\/]+$/,
    'repos.comments': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/repos\/[^\/]+\/[^\/]+\/comments\/[^\/]+$/
  };

}).call(this);

},{}],4:[function(require,module,exports){
(function() {
  module.exports = {
    'application/vnd.github.drax-preview+json': /^(https?:\/\/[^\/]+)?(\/api\/v3)?(\/licenses|\/licenses\/([^\/]+)|\/repos\/([^\/]+)\/([^\/]+))$/,
    'application/vnd.github.v3.star+json': /^(https?:\/\/[^\/]+)?(\/api\/v3)?\/users\/([^\/]+)\/starred$/
  };

}).call(this);

},{}],5:[function(require,module,exports){
(function() {
  module.exports = {
    'zen': false,
    'octocat': false,
    'organizations': false,
    'issues': false,
    'emojis': false,
    'markdown': false,
    'meta': false,
    'rate_limit': false,
    'feeds': false,
    'events': false,
    'notifications': {
      'threads': {
        'subscription': false
      }
    },
    'gitignore': {
      'templates': false
    },
    'user': {
      'repos': false,
      'orgs': false,
      'followers': false,
      'following': false,
      'emails': false,
      'issues': false,
      'starred': false,
      'teams': false
    },
    'orgs': {
      'repos': false,
      'issues': false,
      'members': false,
      'events': false,
      'teams': false
    },
    'teams': {
      'members': false,
      'memberships': false,
      'repos': false
    },
    'users': {
      'repos': false,
      'orgs': false,
      'gists': false,
      'followers': false,
      'following': false,
      'keys': false,
      'starred': false,
      'received_events': {
        'public': false
      },
      'events': {
        'public': false,
        'orgs': false
      },
      'site_admin': false,
      'suspended': false
    },
    'search': {
      'repositories': false,
      'issues': false,
      'users': false,
      'code': false
    },
    'gists': {
      'public': false,
      'starred': false,
      'star': false,
      'comments': false,
      'forks': false
    },
    'repos': {
      'readme': false,
      'tarball': false,
      'zipball': false,
      'compare': false,
      'deployments': {
        'statuses': false
      },
      'hooks': {
        'tests': false
      },
      'assignees': false,
      'languages': false,
      'teams': false,
      'tags': false,
      'branches': false,
      'contributors': false,
      'subscribers': false,
      'subscription': false,
      'stargazers': false,
      'comments': false,
      'downloads': false,
      'forks': false,
      'milestones': {
        'labels': false
      },
      'labels': false,
      'releases': {
        'assets': false,
        'latest': false,
        'tags': false
      },
      'events': false,
      'notifications': false,
      'merges': false,
      'statuses': false,
      'pulls': {
        'merge': false,
        'comments': false,
        'commits': false,
        'files': false,
        'events': false,
        'labels': false
      },
      'pages': {
        'builds': {
          'latest': false
        }
      },
      'commits': {
        'comments': false,
        'status': false,
        'statuses': false
      },
      'contents': false,
      'collaborators': false,
      'issues': {
        'events': false,
        'comments': false,
        'labels': false
      },
      'git': {
        'refs': {
          'heads': false,
          'tags': false
        },
        'trees': false,
        'blobs': false,
        'commits': false
      },
      'stats': {
        'contributors': false,
        'commit_activity': false,
        'code_frequency': false,
        'participation': false,
        'punch_card': false
      }
    },
    'licenses': false,
    'authorizations': {
      'clients': false
    },
    'applications': {
      'tokens': false
    },
    'enterprise': {
      'settings': {
        'license': false
      },
      'stats': {
        'issues': false,
        'hooks': false,
        'milestones': false,
        'orgs': false,
        'comments': false,
        'pages': false,
        'users': false,
        'gists': false,
        'pulls': false,
        'repos': false,
        'all': false
      }
    },
    'staff': {
      'indexing_jobs': false
    },
    'setup': {
      'api': {
        'start': false,
        'upgrade': false,
        'configcheck': false,
        'configure': false,
        'settings': {
          'authorized-keys': false
        },
        'maintenance': false
      }
    }
  };

}).call(this);

},{}],6:[function(require,module,exports){
(function() {
  module.exports = /^(https:\/\/status.github.com\/api\/(status.json|last-message.json|messages.json)$)|(https?:\/\/[^\/]+)?(\/api\/v3)?\/(zen|octocat|users|organizations|issues|gists|emojis|markdown|meta|rate_limit|feeds|events|notifications|notifications\/threads(\/[^\/]+)|notifications\/threads(\/[^\/]+)\/subscription|gitignore\/templates(\/[^\/]+)?|user(\/\d+)?|user(\/\d+)?\/(|repos|orgs|followers|following(\/[^\/]+)?|emails(\/[^\/]+)?|issues|starred|starred(\/[^\/]+){2}|teams)|orgs\/[^\/]+|orgs\/[^\/]+\/(repos|issues|members|events|teams)|teams\/[^\/]+|teams\/[^\/]+\/(members(\/[^\/]+)?|memberships\/[^\/]+|repos|repos(\/[^\/]+){2})|users\/[^\/]+|users\/[^\/]+\/(repos|orgs|gists|followers|following(\/[^\/]+){0,2}|keys|starred|received_events(\/public)?|events(\/public)?|events\/orgs\/[^\/]+)|search\/(repositories|issues|users|code)|gists\/(public|starred|([a-f0-9]{20}|[0-9]+)|([a-f0-9]{20}|[0-9]+)\/forks|([a-f0-9]{20}|[0-9]+)\/comments(\/[0-9]+)?|([a-f0-9]{20}|[0-9]+)\/star)|repos(\/[^\/]+){2}|repos(\/[^\/]+){2}\/(readme|tarball(\/[^\/]+)?|zipball(\/[^\/]+)?|compare\/([^\.{3}]+)\.{3}([^\.{3}]+)|deployments(\/[0-9]+)?|deployments\/[0-9]+\/statuses(\/[0-9]+)?|hooks|hooks\/[^\/]+|hooks\/[^\/]+\/tests|assignees|languages|teams|tags|branches(\/[^\/]+){0,2}|contributors|subscribers|subscription|stargazers|comments(\/[0-9]+)?|downloads(\/[0-9]+)?|forks|milestones|milestones\/[0-9]+|milestones\/[0-9]+\/labels|labels(\/[^\/]+)?|releases|releases\/([0-9]+)|releases\/([0-9]+)\/assets|releases\/latest|releases\/tags\/([^\/]+)|releases\/assets\/([0-9]+)|events|notifications|merges|statuses\/[a-f0-9]{40}|pages|pages\/builds|pages\/builds\/latest|commits|commits\/[a-f0-9]{40}|commits\/[a-f0-9]{40}\/(comments|status|statuses)?|contents\/|contents(\/[^\/]+)*|collaborators(\/[^\/]+)?|(issues|pulls)|(issues|pulls)\/(events|events\/[0-9]+|comments(\/[0-9]+)?|[0-9]+|[0-9]+\/events|[0-9]+\/comments|[0-9]+\/labels(\/[^\/]+)?)|pulls\/[0-9]+\/(files|commits)|git\/(refs|refs\/(.+|heads(\/[^\/]+)?|tags(\/[^\/]+)?)|trees(\/[^\/]+)?|blobs(\/[a-f0-9]{40}$)?|commits(\/[a-f0-9]{40}$)?)|stats\/(contributors|commit_activity|code_frequency|participation|punch_card))|licenses|licenses\/([^\/]+)|authorizations|authorizations\/((\d+)|clients\/([^\/]{20})|clients\/([^\/]{20})\/([^\/]+))|applications\/([^\/]{20})\/tokens|applications\/([^\/]{20})\/tokens\/([^\/]+)|enterprise\/(settings\/license|stats\/(issues|hooks|milestones|orgs|comments|pages|users|gists|pulls|repos|all))|staff\/indexing_jobs|users\/[^\/]+\/(site_admin|suspended)|setup\/api\/(start|upgrade|configcheck|configure|settings(authorized-keys)?|maintenance))(\?.*)?$/;

}).call(this);

},{}],7:[function(require,module,exports){
(function (global){
(function() {
  var base64encode;

  if (typeof window !== "undefined" && window !== null) {
    base64encode = window.btoa;
  } else if (typeof global !== "undefined" && global !== null ? global['Buffer'] : void 0) {
    base64encode = function(str) {
      var buffer;
      buffer = new global['Buffer'](str, 'binary');
      return buffer.toString('base64');
    };
  } else {
    throw new Error('Native btoa function or Buffer is missing');
  }

  module.exports = base64encode;

}).call(this);

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],8:[function(require,module,exports){
(function() {
  var allPromises, injector, newPromise, ref,
    slice = [].slice;

  if (typeof window !== "undefined" && window !== null) {
    if (window.Q) {
      newPromise = (function(_this) {
        return function(fn) {
          var deferred, reject, resolve;
          deferred = window.Q.defer();
          resolve = function(val) {
            return deferred.resolve(val);
          };
          reject = function(err) {
            return deferred.reject(err);
          };
          fn(resolve, reject);
          return deferred.promise;
        };
      })(this);
      allPromises = function(promises) {
        return window.Q.all(promises);
      };
    } else if (window.angular) {
      newPromise = null;
      allPromises = null;
      injector = angular.injector(['ng']);
      injector.invoke(function($q) {
        newPromise = function(fn) {
          var deferred, reject, resolve;
          deferred = $q.defer();
          resolve = function(val) {
            return deferred.resolve(val);
          };
          reject = function(err) {
            return deferred.reject(err);
          };
          fn(resolve, reject);
          return deferred.promise;
        };
        return allPromises = function(promises) {
          return $q.all(promises);
        };
      });
    } else if ((ref = window.jQuery) != null ? ref.Deferred : void 0) {
      newPromise = (function(_this) {
        return function(fn) {
          var promise, reject, resolve;
          promise = window.jQuery.Deferred();
          resolve = function(val) {
            return promise.resolve(val);
          };
          reject = function(val) {
            return promise.reject(val);
          };
          fn(resolve, reject);
          return promise.promise();
        };
      })(this);
      allPromises = (function(_this) {
        return function(promises) {
          var ref1;
          return (ref1 = window.jQuery).when.apply(ref1, promises).then(function() {
            var promises;
            promises = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return promises;
          });
        };
      })(this);
    }
  }

  module.exports = {
    newPromise: newPromise,
    allPromises: allPromises
  };

}).call(this);

},{}],9:[function(require,module,exports){
(function() {
  var allPromises, newPromise;

  if (typeof Promise !== "undefined" && Promise !== null) {
    newPromise = (function(_this) {
      return function(fn) {
        return new Promise(function(resolve, reject) {
          if (resolve.fulfill) {
            return fn(resolve.resolve.bind(resolve), resolve.reject.bind(resolve));
          } else {
            return fn.apply(null, arguments);
          }
        });
      };
    })(this);
    allPromises = (function(_this) {
      return function(promises) {
        return Promise.all(promises);
      };
    })(this);
  }

  module.exports = {
    newPromise: newPromise,
    allPromises: allPromises
  };

}).call(this);

},{}],10:[function(require,module,exports){
(function() {
  var Promise, allPromises, newPromise, req;

  req = require;

  Promise = this.Promise || req('es6-promise').Promise;

  newPromise = function(fn) {
    return new Promise(fn);
  };

  allPromises = function(promises) {
    return Promise.all(promises);
  };

  module.exports = {
    newPromise: newPromise,
    allPromises: allPromises
  };

}).call(this);

},{}],11:[function(require,module,exports){
(function() {
  var toQueryString;

  toQueryString = function(options, omitQuestionMark) {
    var key, params, ref, value;
    if (!options || options === {}) {
      return '';
    }
    params = [];
    ref = options || {};
    for (key in ref) {
      value = ref[key];
      if (value) {
        params.push(key + "=" + (encodeURIComponent(value)));
      }
    }
    if (params.length) {
      if (omitQuestionMark) {
        return "&" + (params.join('&'));
      } else {
        return "?" + (params.join('&'));
      }
    } else {
      return '';
    }
  };

  module.exports = toQueryString;

}).call(this);

},{}],12:[function(require,module,exports){
(function() {
  var Authorization, base64encode;

  base64encode = require('../helpers/base64');

  module.exports = new (Authorization = (function() {
    function Authorization() {}

    Authorization.prototype.requestMiddleware = function(arg) {
      var auth, password, ref, token, username;
      ref = arg.clientOptions, token = ref.token, username = ref.username, password = ref.password;
      if (token || (username && password)) {
        if (token) {
          auth = "token " + token;
        } else {
          auth = 'Basic ' + base64encode(username + ":" + password);
        }
        return {
          headers: {
            'Authorization': auth
          }
        };
      }
    };

    return Authorization;

  })());

}).call(this);

},{"../helpers/base64":7}],13:[function(require,module,exports){
(function() {
  var CamelCase, plus;

  plus = require('../plus');

  module.exports = new (CamelCase = (function() {
    function CamelCase() {}

    CamelCase.prototype.responseMiddleware = function(arg) {
      var data;
      data = arg.data;
      data = this.replace(data);
      return {
        data: data
      };
    };

    CamelCase.prototype.replace = function(data) {
      if (Array.isArray(data)) {
        return this._replaceArray(data);
      } else if (typeof data === 'function') {
        return data;
      } else if (data instanceof Date) {
        return data;
      } else if (data === Object(data)) {
        return this._replaceObject(data);
      } else {
        return data;
      }
    };

    CamelCase.prototype._replaceObject = function(orig) {
      var acc, i, key, len, ref, value;
      acc = {};
      ref = Object.keys(orig);
      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i];
        value = orig[key];
        this._replaceKeyValue(acc, key, value);
      }
      return acc;
    };

    CamelCase.prototype._replaceArray = function(orig) {
      var arr, i, item, key, len, ref, value;
      arr = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = orig.length; i < len; i++) {
          item = orig[i];
          results.push(this.replace(item));
        }
        return results;
      }).call(this);
      ref = Object.keys(orig);
      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i];
        value = orig[key];
        this._replaceKeyValue(arr, key, value);
      }
      return arr;
    };

    CamelCase.prototype._replaceKeyValue = function(acc, key, value) {
      return acc[plus.camelize(key)] = this.replace(value);
    };

    return CamelCase;

  })());

}).call(this);

},{"../plus":24}],14:[function(require,module,exports){
(function() {
  var FetchAll, fetchNextPage, getMore, pushAll, toQueryString;

  toQueryString = require('../helpers/querystring');

  pushAll = function(target, source) {
    if (!Array.isArray(source)) {
      throw new Error('Octokat Error: Calling fetchAll on a request that does not yield an array');
    }
    return target.push.apply(target, source);
  };

  getMore = function(fetchable, requester, acc, cb) {
    var doStuff;
    doStuff = function(err, results) {
      if (err) {
        return cb(err);
      }
      pushAll(acc, results.items);
      return getMore(results, requester, acc, cb);
    };
    if (!fetchNextPage(fetchable, requester, doStuff)) {
      return cb(null, acc);
    }
  };

  fetchNextPage = function(obj, requester, cb) {
    if (typeof obj.next_page_url === 'string') {
      requester.request('GET', obj.next_page, null, null, cb);
      return true;
    } else if (obj.next_page) {
      obj.next_page.fetch(cb);
      return true;
    } else if (typeof obj.nextPageUrl === 'string') {
      requester.request('GET', obj.nextPageUrl, null, null, cb);
      return true;
    } else if (obj.nextPage) {
      obj.nextPage.fetch(cb);
      return true;
    } else {
      return false;
    }
  };

  module.exports = new (FetchAll = (function() {
    function FetchAll() {}

    FetchAll.prototype.asyncVerbs = {
      fetchAll: function(requester, path) {
        return function(cb, query) {
          return requester.request('GET', "" + path + (toQueryString(query)), null, null, function(err, results) {
            var acc;
            if (err) {
              return cb(err);
            }
            acc = [];
            pushAll(acc, results.items);
            return getMore(results, requester, acc, cb);
          });
        };
      }
    };

    return FetchAll;

  })());

}).call(this);

},{"../helpers/querystring":11}],15:[function(require,module,exports){
(function() {
  var HyperMedia, deprecate,
    slice = [].slice;

  deprecate = require('../deprecate');

  module.exports = new (HyperMedia = (function() {
    function HyperMedia() {}

    HyperMedia.prototype.replace = function(instance, data) {
      if (Array.isArray(data)) {
        return this._replaceArray(instance, data);
      } else if (typeof data === 'function') {
        return data;
      } else if (data instanceof Date) {
        return data;
      } else if (data === Object(data)) {
        return this._replaceObject(instance, data);
      } else {
        return data;
      }
    };

    HyperMedia.prototype._replaceObject = function(instance, orig) {
      var acc, i, key, len, ref, value;
      acc = {};
      ref = Object.keys(orig);
      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i];
        value = orig[key];
        this._replaceKeyValue(instance, acc, key, value);
      }
      return acc;
    };

    HyperMedia.prototype._replaceArray = function(instance, orig) {
      var arr, i, item, key, len, ref, value;
      arr = (function() {
        var i, len, results;
        results = [];
        for (i = 0, len = orig.length; i < len; i++) {
          item = orig[i];
          results.push(this.replace(instance, item));
        }
        return results;
      }).call(this);
      ref = Object.keys(orig);
      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i];
        value = orig[key];
        this._replaceKeyValue(instance, arr, key, value);
      }
      return arr;
    };

    HyperMedia.prototype._replaceKeyValue = function(instance, acc, key, value) {
      var defaultFn, fn, newKey;
      if (/_url$/.test(key)) {
        if (/^upload_url$/.test(key)) {
          defaultFn = function() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            deprecate('call .upload({name, label}).create(data, contentType)' + ' instead of .upload(name, data, contentType)');
            return defaultFn.create.apply(defaultFn, args);
          };
          fn = function() {
            var args;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            return instance._fromUrlWithDefault.apply(instance, [value, defaultFn].concat(slice.call(args)))();
          };
        } else {
          defaultFn = function() {
            deprecate('instead of directly calling methods like .nextPage(), use .nextPage.fetch()');
            return this.fetch();
          };
          fn = instance._fromUrlCurried(value, defaultFn);
        }
        newKey = key.substring(0, key.length - '_url'.length);
        acc[newKey] = fn;
        if (!/\{/.test(value)) {
          return acc[key] = value;
        }
      } else if (/_at$/.test(key)) {
        return acc[key] = value ? new Date(value) : null;
      } else {
        return acc[key] = this.replace(instance, value);
      }
    };

    HyperMedia.prototype.responseMiddleware = function(arg) {
      var data, instance;
      instance = arg.instance, data = arg.data;
      data = this.replace(instance, data);
      return {
        data: data
      };
    };

    return HyperMedia;

  })());

}).call(this);

},{"../deprecate":2}],16:[function(require,module,exports){
(function() {
  var Chainer, OBJECT_MATCHER, ObjectChainer, TREE_OPTIONS, VerbMethods;

  OBJECT_MATCHER = require('../grammar/object-matcher');

  TREE_OPTIONS = require('../grammar/tree-options');

  VerbMethods = require('../verb-methods');

  Chainer = require('../chainer');

  module.exports = new (ObjectChainer = (function() {
    function ObjectChainer() {}

    ObjectChainer.prototype.chainChildren = function(chainer, url, obj) {
      var context, i, k, key, len, re, ref, results;
      results = [];
      for (key in OBJECT_MATCHER) {
        re = OBJECT_MATCHER[key];
        if (re.test(obj.url)) {
          context = TREE_OPTIONS;
          ref = key.split('.');
          for (i = 0, len = ref.length; i < len; i++) {
            k = ref[i];
            context = context[k];
          }
          results.push(chainer.chain(url, k, context, obj));
        } else {
          results.push(void 0);
        }
      }
      return results;
    };

    ObjectChainer.prototype.responseMiddleware = function(arg) {
      var chainer, data, datum, i, len, plugins, requester, url, verbMethods;
      plugins = arg.plugins, requester = arg.requester, data = arg.data, url = arg.url;
      verbMethods = new VerbMethods(plugins, requester);
      chainer = new Chainer(verbMethods);
      if (url) {
        chainer.chain(url, true, {}, data);
        this.chainChildren(chainer, url, data);
      } else {
        chainer.chain('', null, {}, data);
        if (Array.isArray(data)) {
          for (i = 0, len = data.length; i < len; i++) {
            datum = data[i];
            this.chainChildren(chainer, datum.url, datum);
          }
        }
      }
      return {
        data: data
      };
    };

    return ObjectChainer;

  })());

}).call(this);

},{"../chainer":1,"../grammar/object-matcher":3,"../grammar/tree-options":5,"../verb-methods":25}],17:[function(require,module,exports){
(function() {
  var Pagination;

  module.exports = new (Pagination = (function() {
    function Pagination() {}

    Pagination.prototype.responseMiddleware = function(arg) {
      var data, discard, href, i, jqXHR, len, links, part, ref, ref1, rel;
      jqXHR = arg.jqXHR, data = arg.data;
      if (!jqXHR) {
        return;
      }
      if (Array.isArray(data)) {
        data = {
          items: data.slice(0)
        };
        links = jqXHR.getResponseHeader('Link');
        ref = (links != null ? links.split(',') : void 0) || [];
        for (i = 0, len = ref.length; i < len; i++) {
          part = ref[i];
          ref1 = part.match(/<([^>]+)>;\ rel="([^"]+)"/), discard = ref1[0], href = ref1[1], rel = ref1[2];
          data[rel + "_page_url"] = href;
        }
        return {
          data: data
        };
      }
    };

    return Pagination;

  })());

}).call(this);

},{}],18:[function(require,module,exports){
(function() {
  var PathValidator, URL_VALIDATOR;

  URL_VALIDATOR = require('../grammar/url-validator');

  module.exports = new (PathValidator = (function() {
    function PathValidator() {}

    PathValidator.prototype.requestMiddleware = function(arg) {
      var err, path;
      path = arg.path;
      if (!URL_VALIDATOR.test(path)) {
        err = "Octokat BUG: Invalid Path. If this is actually a valid path then please update the URL_VALIDATOR. path=" + path;
        return console.warn(err);
      }
    };

    return PathValidator;

  })());

}).call(this);

},{"../grammar/url-validator":6}],19:[function(require,module,exports){
(function() {
  var DEFAULT_HEADER, PREVIEW_HEADERS, PreviewApis;

  PREVIEW_HEADERS = require('../grammar/preview-headers');

  DEFAULT_HEADER = function(url) {
    var key, val;
    for (key in PREVIEW_HEADERS) {
      val = PREVIEW_HEADERS[key];
      if (val.test(url)) {
        return key;
      }
    }
  };

  module.exports = new (PreviewApis = (function() {
    function PreviewApis() {}

    PreviewApis.prototype.requestMiddleware = function(arg) {
      var acceptHeader, path;
      path = arg.path;
      acceptHeader = DEFAULT_HEADER(path);
      if (acceptHeader) {
        return {
          headers: {
            'Accept': acceptHeader
          }
        };
      }
    };

    return PreviewApis;

  })());

}).call(this);

},{"../grammar/preview-headers":4}],20:[function(require,module,exports){
(function() {
  var PreferLibraryOverNativePromises, allPromises, newPromise, ref, ref1, ref2;

  ref = require('../../helpers/promise-find-library'), newPromise = ref.newPromise, allPromises = ref.allPromises;

  if (!(newPromise && allPromises)) {
    ref1 = require('../../helpers/promise-find-native'), newPromise = ref1.newPromise, allPromises = ref1.allPromises;
  }

  if (!((typeof window !== "undefined" && window !== null) || newPromise)) {
    ref2 = require('../../helpers/promise-node'), newPromise = ref2.newPromise, allPromises = ref2.allPromises;
  }

  if ((typeof window !== "undefined" && window !== null) && !newPromise) {
    if (typeof console !== "undefined" && console !== null) {
      if (typeof console.warn === "function") {
        console.warn('Octokat: A Promise API was not found. Supported libraries that have Promises are jQuery, angularjs, and es6-promise');
      }
    }
  } else if ((typeof window === "undefined" || window === null) && !newPromise) {
    throw new Error('Could not find a promise lib for node. Seems like a bug');
  }

  module.exports = new (PreferLibraryOverNativePromises = (function() {
    function PreferLibraryOverNativePromises() {}

    PreferLibraryOverNativePromises.prototype.promiseCreator = {
      newPromise: newPromise,
      allPromises: allPromises
    };

    return PreferLibraryOverNativePromises;

  })());

}).call(this);

},{"../../helpers/promise-find-library":8,"../../helpers/promise-find-native":9,"../../helpers/promise-node":10}],21:[function(require,module,exports){
(function() {
  var ReadBinary, toQueryString;

  toQueryString = require('../helpers/querystring');

  module.exports = new (ReadBinary = (function() {
    function ReadBinary() {}

    ReadBinary.prototype.verbs = {
      readBinary: function(path, query) {
        return {
          method: 'GET',
          path: "" + path + (toQueryString(query)),
          options: {
            isRaw: true,
            isBase64: true
          }
        };
      }
    };

    ReadBinary.prototype.requestMiddleware = function(arg) {
      var isBase64, options;
      options = arg.options;
      if (options) {
        isBase64 = options.isBase64;
        if (isBase64) {
          return {
            headers: {
              Accept: 'application/vnd.github.raw'
            },
            mimeType: 'text/plain; charset=x-user-defined'
          };
        }
      }
    };

    ReadBinary.prototype.responseMiddleware = function(arg) {
      var converted, data, i, isBase64, j, options, ref;
      options = arg.options, data = arg.data;
      if (options) {
        isBase64 = options.isBase64;
        if (isBase64) {
          converted = '';
          for (i = j = 0, ref = data.length; 0 <= ref ? j < ref : j > ref; i = 0 <= ref ? ++j : --j) {
            converted += String.fromCharCode(data.charCodeAt(i) & 0xff);
          }
          return {
            data: converted
          };
        }
      }
    };

    return ReadBinary;

  })());

}).call(this);

},{"../helpers/querystring":11}],22:[function(require,module,exports){
(function() {
  var SimpleVerbs, toQueryString,
    slice = [].slice;

  toQueryString = require('../helpers/querystring');

  module.exports = new (SimpleVerbs = (function() {
    function SimpleVerbs() {}

    SimpleVerbs.prototype.verbs = {
      fetch: function(path, query) {
        return {
          method: 'GET',
          path: "" + path + (toQueryString(query))
        };
      },
      read: function(path, query) {
        return {
          method: 'GET',
          path: "" + path + (toQueryString(query)),
          options: {
            isRaw: true
          }
        };
      },
      remove: function(path, data) {
        return {
          method: 'DELETE',
          path: path,
          data: data,
          options: {
            isBoolean: true
          }
        };
      },
      create: function(path, data, contentType) {
        if (contentType) {
          return {
            method: 'POST',
            path: path,
            data: data,
            options: {
              isRaw: true,
              contentType: contentType
            }
          };
        } else {
          return {
            method: 'POST',
            path: path,
            data: data
          };
        }
      },
      update: function(path, data) {
        return {
          method: 'PATCH',
          path: path,
          data: data
        };
      },
      add: function(path, data) {
        return {
          method: 'PUT',
          path: path,
          data: data,
          options: {
            isBoolean: true
          }
        };
      },
      contains: function() {
        var args, path;
        path = arguments[0], args = 2 <= arguments.length ? slice.call(arguments, 1) : [];
        return {
          method: 'GET',
          path: path + "/" + (args.join('/')),
          options: {
            isBoolean: true
          }
        };
      }
    };

    return SimpleVerbs;

  })());

}).call(this);

},{"../helpers/querystring":11}],23:[function(require,module,exports){
(function() {
  var UsePostInsteadOfPatch;

  module.exports = new (UsePostInsteadOfPatch = (function() {
    function UsePostInsteadOfPatch() {}

    UsePostInsteadOfPatch.prototype.requestMiddleware = function(arg) {
      var method, ref, usePostInsteadOfPatch;
      (ref = arg.clientOptions, usePostInsteadOfPatch = ref.usePostInsteadOfPatch), method = arg.method;
      if (usePostInsteadOfPatch && method === 'PATCH') {
        return {
          method: 'POST'
        };
      }
    };

    return UsePostInsteadOfPatch;

  })());

}).call(this);

},{}],24:[function(require,module,exports){
(function() {
  var filter, forEach, plus;

  filter = require('lodash/internal/arrayFilter');

  forEach = require('lodash/internal/arrayEach');

  plus = {
    camelize: function(string) {
      if (string) {
        return string.replace(/[_-]+(\w)/g, function(m) {
          return m[1].toUpperCase();
        });
      } else {
        return '';
      }
    },
    uncamelize: function(string) {
      if (!string) {
        return '';
      }
      return string.replace(/([A-Z])+/g, function(match, letter) {
        if (letter == null) {
          letter = '';
        }
        return "_" + (letter.toLowerCase());
      });
    },
    dasherize: function(string) {
      if (!string) {
        return '';
      }
      string = string[0].toLowerCase() + string.slice(1);
      return string.replace(/([A-Z])|(_)/g, function(m, letter) {
        if (letter) {
          return '-' + letter.toLowerCase();
        } else {
          return '-';
        }
      });
    },
    extend: function(target, source) {
      var i, key, len, ref, results;
      if (source) {
        ref = Object.keys(source);
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          key = ref[i];
          results.push(target[key] = source[key]);
        }
        return results;
      }
    },
    forOwn: function(obj, iterator) {
      var i, key, len, ref, results;
      ref = Object.keys(obj);
      results = [];
      for (i = 0, len = ref.length; i < len; i++) {
        key = ref[i];
        results.push(iterator(obj[key], key));
      }
      return results;
    },
    filter: filter,
    forEach: forEach
  };

  module.exports = plus;

}).call(this);

},{"lodash/internal/arrayEach":26,"lodash/internal/arrayFilter":27}],25:[function(require,module,exports){
(function() {
  var VerbMethods, extend, filter, forOwn, ref, toPromise, toQueryString,
    slice = [].slice;

  ref = require('./plus'), filter = ref.filter, forOwn = ref.forOwn, extend = ref.extend;

  toQueryString = require('./helpers/querystring');

  toPromise = function(orig, newPromise) {
    return function() {
      var args, last;
      args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
      last = args[args.length - 1];
      if (typeof last === 'function') {
        args.pop();
        return orig.apply(null, [last].concat(slice.call(args)));
      } else if (newPromise) {
        return newPromise(function(resolve, reject) {
          var cb;
          cb = function(err, val) {
            if (err) {
              return reject(err);
            }
            return resolve(val);
          };
          return orig.apply(null, [cb].concat(slice.call(args)));
        });
      } else {
        throw new Error('You must specify a callback or have a promise library loaded');
      }
    };
  };

  module.exports = VerbMethods = (function() {
    function VerbMethods(plugins, _requester) {
      var i, j, len, len1, plugin, promisePlugins, ref1, ref2;
      this._requester = _requester;
      if (!this._requester) {
        throw new Error('Octokat BUG: request is required');
      }
      promisePlugins = filter(plugins, function(arg) {
        var promiseCreator;
        promiseCreator = arg.promiseCreator;
        return promiseCreator;
      });
      if (promisePlugins) {
        this._promisePlugin = promisePlugins[0];
      }
      this._syncVerbs = {};
      ref1 = filter(plugins, function(arg) {
        var verbs;
        verbs = arg.verbs;
        return verbs;
      });
      for (i = 0, len = ref1.length; i < len; i++) {
        plugin = ref1[i];
        extend(this._syncVerbs, plugin.verbs);
      }
      this._asyncVerbs = {};
      ref2 = filter(plugins, function(arg) {
        var asyncVerbs;
        asyncVerbs = arg.asyncVerbs;
        return asyncVerbs;
      });
      for (j = 0, len1 = ref2.length; j < len1; j++) {
        plugin = ref2[j];
        extend(this._asyncVerbs, plugin.asyncVerbs);
      }
    }

    VerbMethods.prototype.injectVerbMethods = function(path, obj) {
      var allPromises, newPromise, ref1;
      if (this._promisePlugin) {
        ref1 = this._promisePlugin.promiseCreator, newPromise = ref1.newPromise, allPromises = ref1.allPromises;
      }
      obj.url = path;
      forOwn(this._syncVerbs, (function(_this) {
        return function(verbFunc, verbName) {
          return obj[verbName] = function() {
            var args, makeRequest;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            makeRequest = function() {
              var cb, data, method, options, originalArgs, ref2;
              cb = arguments[0], originalArgs = 2 <= arguments.length ? slice.call(arguments, 1) : [];
              ref2 = verbFunc.apply(null, [path].concat(slice.call(originalArgs))), method = ref2.method, path = ref2.path, data = ref2.data, options = ref2.options;
              return _this._requester.request(method, path, data, options, cb);
            };
            return toPromise(makeRequest, newPromise).apply(null, args);
          };
        };
      })(this));
      return forOwn(this._asyncVerbs, (function(_this) {
        return function(verbFunc, verbName) {
          return obj[verbName] = function() {
            var args, makeRequest;
            args = 1 <= arguments.length ? slice.call(arguments, 0) : [];
            makeRequest = verbFunc(_this._requester, path);
            return toPromise(makeRequest, newPromise).apply(null, args);
          };
        };
      })(this));
    };

    return VerbMethods;

  })();

}).call(this);

},{"./helpers/querystring":11,"./plus":24}],26:[function(require,module,exports){
/**
 * A specialized version of `_.forEach` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;

},{}],27:[function(require,module,exports){
/**
 * A specialized version of `_.filter` for arrays without support for callback
 * shorthands and `this` binding.
 *
 * @private
 * @param {Array} array The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array.length,
      resIndex = -1,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[++resIndex] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;

},{}],28:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const rxjs_1 = require('rxjs');
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const utils_1 = require('../utils');
const store_1 = require('../store');
let App = class App {
    constructor(state) {
        this.state = state;
    }
};
App = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'app/app.component.html',
        directives: [
            router_1.ROUTER_DIRECTIVES,
            utils_1.Debug,
        ]
    }),
    __param(0, core_1.Inject(store_1.state)), 
    __metadata('design:paramtypes', [rxjs_1.Observable])
], App);
exports.App = App;
},{"../store":45,"../utils":48,"@angular/core":"@angular/core","@angular/router":"@angular/router","rxjs":"rxjs"}],29:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./app.component'));
},{"./app.component":28}],30:[function(require,module,exports){
module.exports={
    // uncomment the line below and ad your github token to raise github rate limit for unauthenticated users
    //"githubtoken": <your github token here>
}
},{}],31:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
const core_1 = require('@angular/core');
const octokat = require('octokat');
const PLUGINS = [
    require('octokat/dist/node/plugins/object-chainer'),
    require('octokat/dist/node/plugins/promise/library-first'),
    require('octokat/dist/node/plugins/path-validator'),
    require('octokat/dist/node/plugins/authorization'),
    require('octokat/dist/node/plugins/preview-apis'),
    require('octokat/dist/node/plugins/use-post-instead-of-patch'),
    require('octokat/dist/node/plugins/simple-verbs'),
    require('octokat/dist/node/plugins/fetch-all'),
    require('octokat/dist/node/plugins/read-binary'),
    require('octokat/dist/node/plugins/pagination'),
    // FIXME: disable octokat's buggy cache handler
    //require('octokat/dist/node/plugins/cache-handler'), 
    require('octokat/dist/node/plugins/hypermedia'),
    require('octokat/dist/node/plugins/camel-case')
];
exports.githubtoken = new core_1.OpaqueToken("githubtoken");
class GitHubService {
    constructor(token) {
        this.octo = octokat({ token: token, plugins: PLUGINS });
    }
    searchRepos(q) {
        return GitHubService.handle('search repo', (q) => this.octo
            .search
            .repositories
            .fetch({ q: q }), q);
    }
    repo(owner, name) {
        return __awaiter(this, void 0, Promise, function* () {
            return GitHubService.handle('load repo', (owner, name) => this.octo
                .repos(owner, name)
                .fetch(), owner, name);
        });
    }
    issues(owner, repoName, params) {
        return __awaiter(this, void 0, Promise, function* () {
            return GitHubService.handle('load issues', (owner, repoName, params) => this.octo
                .repos(owner, repoName)
                .issues
                .fetch(params), owner, repoName, params);
        });
    }
    more(list) {
        return __awaiter(this, void 0, Promise, function* () {
            return GitHubService.handle('more', (list) => list
                .nextPage
                .fetch(), list);
        });
    }
    static handle(op, p, ...args) {
        return __awaiter(this, void 0, Promise, function* () {
            console.log({ fetching: op, args: args });
            try {
                const res = yield p(...args);
                // KLUDGE: octokat fails to throw when there is no internet.
                if (res == "")
                    throw res;
                console.log({ fetched: op, res: res, args: args });
                return res;
            }
            catch (er) {
                const msg = GitHubService.message(er);
                console.log({ 'fetch failed': op, er: er, msg: msg, args: args });
                throw msg;
            }
        });
    }
    static message(er) {
        if (er.message) {
            try {
                const json = JSON.parse(er.message);
                if (json.message) {
                    if (json.message == "Validation Failed" && json.errors && json.errors.length > 0)
                        return json.errors[0].message;
                    else
                        return json.message;
                }
                else
                    return er.message;
            }
            catch (erT) {
                return er.message;
            }
        }
        return "An error occured";
    }
}
GitHubService = __decorate([
    __param(0, core_1.Inject(exports.githubtoken)), 
    __metadata('design:paramtypes', [String])
], GitHubService);
exports.GitHubService = GitHubService;
},{"@angular/core":"@angular/core","octokat":"octokat","octokat/dist/node/plugins/authorization":12,"octokat/dist/node/plugins/camel-case":13,"octokat/dist/node/plugins/fetch-all":14,"octokat/dist/node/plugins/hypermedia":15,"octokat/dist/node/plugins/object-chainer":16,"octokat/dist/node/plugins/pagination":17,"octokat/dist/node/plugins/path-validator":18,"octokat/dist/node/plugins/preview-apis":19,"octokat/dist/node/plugins/promise/library-first":20,"octokat/dist/node/plugins/read-binary":21,"octokat/dist/node/plugins/simple-verbs":22,"octokat/dist/node/plugins/use-post-instead-of-patch":23}],32:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./github.service'));
},{"./github.service":31}],33:[function(require,module,exports){
"use strict";
const platform_browser_dynamic_1 = require('@angular/platform-browser-dynamic');
const forms_1 = require('@angular/forms');
const core_1 = require('@angular/core');
const app_1 = require('./app');
const github_1 = require('./github');
const store_1 = require('./store');
const routes_1 = require('./routes');
platform_browser_dynamic_1.bootstrap(app_1.App, [
    forms_1.disableDeprecatedForms(),
    forms_1.provideForms(),
    github_1.GitHubService,
    store_1.provideController(),
    routes_1.default,
    core_1.provide(github_1.githubtoken, { useValue: require('./config.json').githubtoken }),
])
    .catch(err => console.error(err));
},{"./app":29,"./config.json":30,"./github":32,"./routes":37,"./store":45,"@angular/core":"@angular/core","@angular/forms":"@angular/forms","@angular/platform-browser-dynamic":"@angular/platform-browser-dynamic"}],34:[function(require,module,exports){
"use strict";
var repo_detail_component_1 = require('./repo-detail.component');
exports.RepoDetail = repo_detail_component_1.RepoDetail;
},{"./repo-detail.component":36}],35:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require('@angular/core');
const store_1 = require('../store');
let IssueList = class IssueList {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
    }
    more() {
        this.dispatcher.next(new store_1.FetchMoreIssuesAction(this.repoName));
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], IssueList.prototype, "repoName", void 0);
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], IssueList.prototype, "issues", void 0);
IssueList = __decorate([
    core_1.Component({
        selector: 'issue-list',
        templateUrl: 'repo/issue-list.component.html'
    }),
    __param(0, core_1.Inject(store_1.dispatcher)), 
    __metadata('design:paramtypes', [Object])
], IssueList);
exports.IssueList = IssueList;
},{"../store":45,"@angular/core":"@angular/core"}],36:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const rxjs_1 = require('rxjs');
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
const store_1 = require('../store');
const issue_list_component_1 = require('./issue-list.component');
let RepoDetail = class RepoDetail {
    constructor(dispatcher, state, route) {
        this.dispatcher = dispatcher;
        this.state = state;
        this.route = route;
        const repoDetail = state.map(state => state.repoCache[state.repoDetail.selectedRepo]);
        this.repo = repoDetail.map(state => state && state.repo);
        this.issues = repoDetail.map(state => state && state.issues);
        this.fetching = repoDetail.map(state => state && state.isFetching);
        this.sub = route.params.subscribe(params => {
            this.dispatcher.next(new store_1.SelectRepoAction(params['owner'], params['repo']));
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
};
RepoDetail = __decorate([
    core_1.Component({
        selector: 'repo-detail',
        templateUrl: 'repo/repo-detail.component.html',
        directives: [issue_list_component_1.IssueList]
    }),
    __param(0, core_1.Inject(store_1.dispatcher)),
    __param(1, core_1.Inject(store_1.state)),
    __param(2, core_1.Inject(router_1.ActivatedRoute)), 
    __metadata('design:paramtypes', [Object, rxjs_1.Observable, router_1.ActivatedRoute])
], RepoDetail);
exports.RepoDetail = RepoDetail;
},{"../store":45,"./issue-list.component":35,"@angular/core":"@angular/core","@angular/router":"@angular/router","rxjs":"rxjs"}],37:[function(require,module,exports){
"use strict";
const router_1 = require('@angular/router');
const search_1 = require('./search');
const repo_1 = require('./repo');
const common_1 = require('@angular/common');
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    router_1.provideRouter([
        { path: '', redirectTo: '/search', terminal: true },
        { path: 'search', component: search_1.SearchRepo },
        { path: 'repo/:owner/:repo', component: repo_1.RepoDetail },
    ]),
    { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy },
];
},{"./repo":34,"./search":38,"@angular/common":"@angular/common","@angular/router":"@angular/router"}],38:[function(require,module,exports){
"use strict";
var search_repo_component_1 = require('./search-repo.component');
exports.SearchRepo = search_repo_component_1.SearchRepo;
},{"./search-repo.component":41}],39:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require('@angular/core');
const router_1 = require('@angular/router');
let RepoCard = class RepoCard {
    constructor(router) {
        this.router = router;
    }
    select() {
        this.router.navigate(['/repo', this.repo.owner.login, this.repo.name]);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', Object)
], RepoCard.prototype, "repo", void 0);
RepoCard = __decorate([
    core_1.Component({
        selector: 'repo-card',
        templateUrl: 'search/repo-card.component.html',
    }),
    __param(0, core_1.Inject(router_1.Router)), 
    __metadata('design:paramtypes', [router_1.Router])
], RepoCard);
exports.RepoCard = RepoCard;
},{"@angular/core":"@angular/core","@angular/router":"@angular/router"}],40:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require('@angular/core');
const rxjs_1 = require('rxjs');
const forms_1 = require('@angular/forms');
const store_1 = require('../store');
let SearchBar = class SearchBar {
    constructor(dispatcher) {
        this.dispatcher = dispatcher;
        this.termControl = new forms_1.FormControl('');
        this.searchClick$ = new rxjs_1.Subject();
        const term$ = this.termControl.valueChanges.skip(1);
        this.sub = rxjs_1.Observable.combineLatest(term$.debounceTime(1000), this.searchClick$.startWith(null))
            .withLatestFrom(term$, (_, term) => term)
            .filter(term => term.length > 0)
            .distinctUntilChanged()
            .subscribe(term => {
            this.dispatcher.next(new store_1.SearchAction(term));
        });
    }
    ngOnDestroy() {
        this.sub.unsubscribe();
    }
    searchClick() {
        this.searchClick$.next(null);
    }
};
__decorate([
    core_1.Input(), 
    __metadata('design:type', String)
], SearchBar.prototype, "term", void 0);
SearchBar = __decorate([
    core_1.Component({
        selector: 'search-bar',
        templateUrl: 'search/search-bar.component.html',
        directives: [forms_1.REACTIVE_FORM_DIRECTIVES]
    }),
    __param(0, core_1.Inject(store_1.dispatcher)), 
    __metadata('design:paramtypes', [Object])
], SearchBar);
exports.SearchBar = SearchBar;
},{"../store":45,"@angular/core":"@angular/core","@angular/forms":"@angular/forms","rxjs":"rxjs"}],41:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const rxjs_1 = require('rxjs');
const core_1 = require('@angular/core');
const repo_card_component_1 = require('./repo-card.component');
const search_bar_component_1 = require('./search-bar.component');
const store_1 = require('../store');
let SearchRepo = class SearchRepo {
    constructor(state) {
        this.state = state;
        this.term = state.map(state => state.search.term);
        this.searchResult = state.map(state => state.search.result);
    }
    repoKey(index, repo) {
        return repo.id;
    }
};
SearchRepo = __decorate([
    core_1.Component({
        selector: 'search-repo',
        templateUrl: 'search/search-repo.component.html',
        directives: [
            repo_card_component_1.RepoCard,
            search_bar_component_1.SearchBar,
        ]
    }),
    __param(0, core_1.Inject(store_1.state)), 
    __metadata('design:paramtypes', [rxjs_1.Observable])
], SearchRepo);
exports.SearchRepo = SearchRepo;
},{"../store":45,"./repo-card.component":39,"./search-bar.component":40,"@angular/core":"@angular/core","rxjs":"rxjs"}],42:[function(require,module,exports){
"use strict";
function isError(action) {
    return action.er !== undefined;
}
exports.isError = isError;
class DismissError {
}
exports.DismissError = DismissError;
class SearchAction {
    constructor(term) {
        this.term = term;
    }
}
exports.SearchAction = SearchAction;
class SearchResultAction extends DismissError {
    constructor(result) {
        super();
        this.result = result;
    }
}
exports.SearchResultAction = SearchResultAction;
class ErrorFetchingSearchResultAction {
    constructor(er) {
        this.er = er;
    }
}
exports.ErrorFetchingSearchResultAction = ErrorFetchingSearchResultAction;
class SelectRepoAction {
    constructor(owner, repo) {
        this.owner = owner;
        this.repo = repo;
    }
}
exports.SelectRepoAction = SelectRepoAction;
class RepoFetchedAction extends DismissError {
    constructor(repoName, repo, issues) {
        super();
        this.repoName = repoName;
        this.repo = repo;
        this.issues = issues;
    }
}
exports.RepoFetchedAction = RepoFetchedAction;
class ErrorFetchingRepoAction {
    constructor(repoName, er) {
        this.repoName = repoName;
        this.er = er;
    }
}
exports.ErrorFetchingRepoAction = ErrorFetchingRepoAction;
class FetchMoreIssuesAction {
    constructor(repoName) {
        this.repoName = repoName;
    }
}
exports.FetchMoreIssuesAction = FetchMoreIssuesAction;
class MoreIssuesFetchedAction extends DismissError {
    constructor(repoName, issues) {
        super();
        this.repoName = repoName;
        this.issues = issues;
    }
}
exports.MoreIssuesFetchedAction = MoreIssuesFetchedAction;
class ErrorFetchingMoreIssuesAction {
    constructor(repoName, er) {
        this.repoName = repoName;
        this.er = er;
    }
}
exports.ErrorFetchingMoreIssuesAction = ErrorFetchingMoreIssuesAction;
},{}],43:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const _ = require('../utils');
const rxjs_1 = require('rxjs');
const core_1 = require('@angular/core');
const github_1 = require('../github');
const core_2 = require('./core');
const Action = require('./action');
class Controller {
    constructor(dispatcher, githubservice) {
        this.dispatcher = dispatcher;
        this.githubservice = githubservice;
    }
    error(init, actions) {
        return actions.scan((state, action) => {
            if (Action.isError(action)) {
                return action.er;
            }
            if (action instanceof Action.DismissError) {
                return undefined;
            }
            return state;
        }, init);
    }
    search(init, actions) {
        return actions.scan((state, action) => {
            if (action instanceof Action.SearchAction) {
                if (state.term != action.term /* KLUDGE */) {
                    this.githubservice
                        .searchRepos(action.term)
                        .then(res => this.dispatcher.next(new Action.SearchResultAction(res)))
                        .catch(er => this.dispatcher.next(new Action.ErrorFetchingSearchResultAction(er)));
                }
                return _.merge(state, { term: action.term });
            }
            if (action instanceof Action.SearchResultAction) {
                return _.merge(state, { result: _.replace(action.result) });
            }
            if (action instanceof Action.ErrorFetchingSearchResultAction) {
                return _.merge(state, { result: _.remove() });
            }
            return state;
        }, init);
    }
    repoDetail(init, actions) {
        return actions.scan((state, action) => {
            if (action instanceof Action.SelectRepoAction) {
                return _.merge(state, {
                    selectedRepo: action.owner + '/' + action.repo,
                });
            }
            return state;
        }, init);
    }
    repoCache(init, actions) {
        return actions.scan((state, action) => {
            if (action instanceof Action.SelectRepoAction) {
                const repoName = action.owner + '/' + action.repo;
                if (state[repoName]) {
                    return state;
                }
                Promise.all([
                    this.githubservice.repo(action.owner, action.repo),
                    this.githubservice.issues(action.owner, action.repo, {})
                ])
                    .then(([repo, issues]) => this.dispatcher.next(new Action.RepoFetchedAction(repoName, repo, issues)))
                    .catch(er => this.dispatcher.next(new Action.ErrorFetchingRepoAction(repoName, er)));
                return _.merge(state, {
                    [repoName]: { isFetching: true, repo: _.remove(), issues: _.remove() }
                });
            }
            if (action instanceof Action.RepoFetchedAction) {
                return _.merge(state, {
                    [action.repoName]: {
                        isFetching: false,
                        repo: _.replace(action.repo),
                        issues: _.replace(action.issues),
                    }
                });
            }
            if (action instanceof Action.FetchMoreIssuesAction) {
                const { repoName } = action;
                const { issues } = state[repoName];
                this.githubservice.more(issues)
                    .then(moreIssues => {
                    moreIssues.items.unshift(...issues.items);
                    this.dispatcher.next(new Action.MoreIssuesFetchedAction(repoName, moreIssues));
                })
                    .catch(er => {
                    this.dispatcher.next(new Action.ErrorFetchingMoreIssuesAction(repoName, er));
                });
                return _.merge(state, {
                    [repoName]: {
                        isFetching: true,
                    }
                });
            }
            if (action instanceof Action.MoreIssuesFetchedAction) {
                return _.merge(state, {
                    [action.repoName]: {
                        isFetching: false,
                        issues: _.replace(action.issues),
                    }
                });
            }
            if (action instanceof Action.ErrorFetchingRepoAction || action instanceof Action.ErrorFetchingMoreIssuesAction) {
                return _.merge(state, {
                    [action.repoName]: _.remove()
                });
            }
            return state;
        }, init);
    }
    reduce(init, actions) {
        const res = new rxjs_1.BehaviorSubject(init);
        rxjs_1.Observable
            .zip(actions.do(action => console.log({ action: action })), actions.scan((ver, actions) => ver + 1, init.ver), this.error(init.error, actions), this.search(init.search, actions), this.repoDetail(init.repoDetail, actions), this.repoCache(init.repoCache, actions), (_, ver, error, search, repoDetail, repoCache) => ({ ver: ver, error: error, search: search, repoDetail: repoDetail, repoCache: repoCache }))
            .do(model => console.log({ model: model, ver: model.ver }))
            .subscribe(state => res.next(state));
        return res;
    }
}
Controller = __decorate([
    __param(0, core_1.Inject(core_2.dispatcher)),
    __param(1, core_1.Inject(github_1.GitHubService)), 
    __metadata('design:paramtypes', [Object, github_1.GitHubService])
], Controller);
exports.Controller = Controller;
},{"../github":32,"../utils":48,"./action":42,"./core":44,"@angular/core":"@angular/core","rxjs":"rxjs"}],44:[function(require,module,exports){
"use strict";
const core_1 = require('@angular/core');
exports.initState = new core_1.OpaqueToken("initState");
exports.dispatcher = new core_1.OpaqueToken("dispatcher");
exports.state = new core_1.OpaqueToken("state");
},{"@angular/core":"@angular/core"}],45:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
const rxjs_1 = require('rxjs');
const core_1 = require('@angular/core');
const core_2 = require('./core');
const controller_1 = require('./controller');
__export(require('./core'));
__export(require('./action'));
function provideController() {
    const init = {
        ver: 0,
        error: null,
        search: {
            term: '',
            result: null,
        },
        repoDetail: {
            selectedRepo: null,
        },
        repoCache: {},
    };
    return [
        core_1.provide(core_2.initState, { useValue: init }),
        core_1.provide(core_2.dispatcher, { useValue: new rxjs_1.Subject(null) }),
        controller_1.Controller,
        core_1.provide(core_2.state, {
            useFactory: (controller, initState, dispatcher) => controller.reduce(initState, dispatcher),
            deps: [controller_1.Controller, new core_1.Inject(core_2.initState), new core_1.Inject(core_2.dispatcher)]
        })
    ];
}
exports.provideController = provideController;
},{"./action":42,"./controller":43,"./core":44,"@angular/core":"@angular/core","rxjs":"rxjs"}],46:[function(require,module,exports){

},{}],47:[function(require,module,exports){
"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
const core_1 = require('@angular/core');
const github_1 = require('../github');
const _ = require('./merge');
let Debug = class Debug {
    constructor(githubservice) {
        this.githubservice = githubservice;
    }
    run(q) {
        var e = "(function unnamed(octo, _){return " + q + ";})";
        console.dir(q);
        try {
            var r = eval(e);
            r = r(this.githubservice.octo, _);
            console.dir(r);
            if (r && r.then)
                r.then((o) => {
                    console.log("async from " + q);
                    console.dir(o);
                });
        }
        catch (er) {
            console.dir(er);
        }
    }
};
Debug = __decorate([
    core_1.Component({
        selector: 'debug',
        template: `
    <form (ngSubmit)="run(qqq.value)" class="navbar-form navbar-left">
        <div class="form-group">
            <input type="text" #qqq class="form-control"/>
        </div>
        <button type="submit" class="btn btn-primary">Eval</button>
    </form>
  `,
    }),
    __param(0, core_1.Inject(github_1.GitHubService)), 
    __metadata('design:paramtypes', [github_1.GitHubService])
], Debug);
exports.Debug = Debug;
},{"../github":32,"./merge":49,"@angular/core":"@angular/core"}],48:[function(require,module,exports){
"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
__export(require('./result'));
var debug_component_1 = require('./debug.component');
exports.Debug = debug_component_1.Debug;
__export(require('./merge'));
},{"./debug.component":47,"./merge":49,"./result":50}],49:[function(require,module,exports){
"use strict";
const _ = require('lodash');
function replace(o) {
    return _.merge(o, { __replace: true });
}
exports.replace = replace;
function remove() {
    return null;
}
exports.remove = remove;
function merge(src1, ...srcN) {
    return _.mergeWith({}, src1, ...srcN, (dest, src, key) => {
        if (src) {
            if (src.__replace) {
                delete src.__replace;
                return src;
            }
        }
        return undefined;
    });
}
exports.merge = merge;
},{"lodash":"lodash"}],50:[function(require,module,exports){
"use strict";
function fail(error) {
    return { error: error };
}
exports.fail = fail;
function success(value) {
    return { success: value };
}
exports.success = success;
function succeeded(res) {
    return res.success !== undefined;
}
exports.succeeded = succeeded;
},{}]},{},[46,33])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvY2hhaW5lci5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9kZXByZWNhdGUuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvZ3JhbW1hci9vYmplY3QtbWF0Y2hlci5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9ncmFtbWFyL3ByZXZpZXctaGVhZGVycy5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9ncmFtbWFyL3RyZWUtb3B0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9ncmFtbWFyL3VybC12YWxpZGF0b3IuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvaGVscGVycy9iYXNlNjQuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvaGVscGVycy9wcm9taXNlLWZpbmQtbGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9oZWxwZXJzL3Byb21pc2UtZmluZC1uYXRpdmUuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvaGVscGVycy9wcm9taXNlLW5vZGUuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvaGVscGVycy9xdWVyeXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9wbHVnaW5zL2F1dGhvcml6YXRpb24uanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvcGx1Z2lucy9jYW1lbC1jYXNlLmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvZmV0Y2gtYWxsLmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvaHlwZXJtZWRpYS5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9wbHVnaW5zL29iamVjdC1jaGFpbmVyLmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvcGFnaW5hdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9wbHVnaW5zL3BhdGgtdmFsaWRhdG9yLmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvcHJldmlldy1hcGlzLmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvcHJvbWlzZS9saWJyYXJ5LWZpcnN0LmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvcmVhZC1iaW5hcnkuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvcGx1Z2lucy9zaW1wbGUtdmVyYnMuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvcGx1Z2lucy91c2UtcG9zdC1pbnN0ZWFkLW9mLXBhdGNoLmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvZGlzdC9ub2RlL3BsdXMuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvdmVyYi1tZXRob2RzLmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvbm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9hcnJheUVhY2guanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9ub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2FycmF5RmlsdGVyLmpzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwic3JjL2FwcC9pbmRleC50cyIsInNyYy9jb25maWcuanNvbiIsInNyYy9naXRodWIvZ2l0aHViLnNlcnZpY2UudHMiLCJzcmMvZ2l0aHViL2luZGV4LnRzIiwic3JjL21haW4udHMiLCJzcmMvcmVwby9pbmRleC50cyIsInNyYy9yZXBvL2lzc3VlLWxpc3QuY29tcG9uZW50LnRzIiwic3JjL3JlcG8vcmVwby1kZXRhaWwuY29tcG9uZW50LnRzIiwic3JjL3JvdXRlcy50cyIsInNyYy9zZWFyY2gvaW5kZXgudHMiLCJzcmMvc2VhcmNoL3JlcG8tY2FyZC5jb21wb25lbnQudHMiLCJzcmMvc2VhcmNoL3NlYXJjaC1iYXIuY29tcG9uZW50LnRzIiwic3JjL3NlYXJjaC9zZWFyY2gtcmVwby5jb21wb25lbnQudHMiLCJzcmMvc3RvcmUvYWN0aW9uLnRzIiwic3JjL3N0b3JlL2NvbnRyb2xsZXIudHMiLCJzcmMvc3RvcmUvY29yZS50cyIsInNyYy9zdG9yZS9pbmRleC50cyIsInNyYy90eXBpbmdzLmQudHMiLCJzcmMvdXRpbHMvZGVidWcuY29tcG9uZW50LnRzIiwic3JjL3V0aWxzL2luZGV4LnRzIiwic3JjL3V0aWxzL21lcmdlLnRzIiwic3JjL3V0aWxzL3Jlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkEsdUJB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QyxFQUFFLEVBQUUsSUFBSSxFQUFFLEdBQUcsSUFBSSxFQUFFLENBQUMsSUFBUyxFQUFFLEdBQVEsRUFBRSxHQUFRO1FBQ3pFLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDTixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsT0FBTyxHQUFHLENBQUMsU0FBUyxDQUFDO2dCQUNyQixNQUFNLENBQUMsR0FBRyxDQUFDO1lBQ2YsQ0FBQztRQUNMLENBQUM7UUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDO0lBQ3JCLENBQUMsQ0FBQyxDQUFBO0FBQ04sQ0FBQztBQWRlLGFBQUssUUFjcEIsQ0FBQTs7O0FDZEQsY0FBd0IsS0FBVTtJQUM5QixNQUFNLENBQUMsRUFBQyxLQUFLLEVBQUUsS0FBSyxFQUFDLENBQUM7QUFDMUIsQ0FBQztBQUZlLFlBQUksT0FFbkIsQ0FBQTtBQUVELGlCQUEyQixLQUFRO0lBQy9CLE1BQU0sQ0FBQyxFQUFDLE9BQU8sRUFBRSxLQUFLLEVBQUMsQ0FBQztBQUM1QixDQUFDO0FBRmUsZUFBTyxVQUV0QixDQUFBO0FBRUQsbUJBQTZCLEdBQWM7SUFDdkMsTUFBTSxDQUFFLEdBQWtCLENBQUMsT0FBTyxLQUFLLFNBQVMsQ0FBQztBQUNyRCxDQUFDO0FBRmUsaUJBQVMsWUFFeEIsQ0FBQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBDaGFpbmVyLCBwbHVzLFxuICAgIHNsaWNlID0gW10uc2xpY2U7XG5cbiAgcGx1cyA9IHJlcXVpcmUoJy4vcGx1cycpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gQ2hhaW5lciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBDaGFpbmVyKF92ZXJiTWV0aG9kcykge1xuICAgICAgdGhpcy5fdmVyYk1ldGhvZHMgPSBfdmVyYk1ldGhvZHM7XG4gICAgfVxuXG4gICAgQ2hhaW5lci5wcm90b3R5cGUuY2hhaW4gPSBmdW5jdGlvbihwYXRoLCBuYW1lLCBjb250ZXh0VHJlZSwgZm4pIHtcbiAgICAgIHZhciBmbjE7XG4gICAgICBpZiAoZm4gPT0gbnVsbCkge1xuICAgICAgICBmbiA9IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhcmdzLCBzZXBhcmF0b3I7XG4gICAgICAgICAgICBhcmdzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gICAgICAgICAgICBpZiAoIWFyZ3MubGVuZ3RoKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignQlVHISBtdXN0IGJlIGNhbGxlZCB3aXRoIGF0IGxlYXN0IG9uZSBhcmd1bWVudCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdjb21wYXJlJykge1xuICAgICAgICAgICAgICBzZXBhcmF0b3IgPSAnLi4uJztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHNlcGFyYXRvciA9ICcvJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBfdGhpcy5jaGFpbihwYXRoICsgXCIvXCIgKyAoYXJncy5qb2luKHNlcGFyYXRvcikpLCBuYW1lLCBjb250ZXh0VHJlZSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcyk7XG4gICAgICB9XG4gICAgICB0aGlzLl92ZXJiTWV0aG9kcy5pbmplY3RWZXJiTWV0aG9kcyhwYXRoLCBmbik7XG4gICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBmbiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgZm4xID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBmbltwbHVzLmNhbWVsaXplKG5hbWUpXTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIHBsdXMuY2FtZWxpemUobmFtZSksIHtcbiAgICAgICAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgICAgICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBfdGhpcy5jaGFpbihwYXRoICsgXCIvXCIgKyBuYW1lLCBuYW1lLCBjb250ZXh0VHJlZVtuYW1lXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH07XG4gICAgICAgIH0pKHRoaXMpO1xuICAgICAgICBmb3IgKG5hbWUgaW4gY29udGV4dFRyZWUgfHwge30pIHtcbiAgICAgICAgICBmbjEobmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBmbjtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENoYWluZXI7XG5cbiAgfSkoKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IENoYWluZXI7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obWVzc2FnZSkge1xuICAgIHJldHVybiB0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlICE9PSBudWxsID8gdHlwZW9mIGNvbnNvbGUud2FybiA9PT0gXCJmdW5jdGlvblwiID8gY29uc29sZS53YXJuKFwiT2N0b2thdCBEZXByZWNhdGlvbjogXCIgKyBtZXNzYWdlKSA6IHZvaWQgMCA6IHZvaWQgMDtcbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgJ3JlcG9zJzogL14oaHR0cHM/OlxcL1xcL1teXFwvXSspPyhcXC9hcGlcXC92Myk/XFwvcmVwb3NcXC9bXlxcL10rXFwvW15cXC9dKyQvLFxuICAgICdnaXN0cyc6IC9eKGh0dHBzPzpcXC9cXC9bXlxcL10rKT8oXFwvYXBpXFwvdjMpP1xcL2dpc3RzXFwvW15cXC9dKyQvLFxuICAgICdpc3N1ZXMnOiAvXihodHRwcz86XFwvXFwvW15cXC9dKyk/KFxcL2FwaVxcL3YzKT9cXC9yZXBvc1xcL1teXFwvXStcXC9bXlxcL10rXFwvKGlzc3Vlc3xwdWxscylcXC9bXlxcL10rJC8sXG4gICAgJ3VzZXJzJzogL14oaHR0cHM/OlxcL1xcL1teXFwvXSspPyhcXC9hcGlcXC92Myk/XFwvdXNlcnNcXC9bXlxcL10rJC8sXG4gICAgJ29yZ3MnOiAvXihodHRwcz86XFwvXFwvW15cXC9dKyk/KFxcL2FwaVxcL3YzKT9cXC9vcmdzXFwvW15cXC9dKyQvLFxuICAgICd0ZWFtcyc6IC9eKGh0dHBzPzpcXC9cXC9bXlxcL10rKT8oXFwvYXBpXFwvdjMpP1xcL3RlYW1zXFwvW15cXC9dKyQvLFxuICAgICdyZXBvcy5jb21tZW50cyc6IC9eKGh0dHBzPzpcXC9cXC9bXlxcL10rKT8oXFwvYXBpXFwvdjMpP1xcL3JlcG9zXFwvW15cXC9dK1xcL1teXFwvXStcXC9jb21tZW50c1xcL1teXFwvXSskL1xuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnYXBwbGljYXRpb24vdm5kLmdpdGh1Yi5kcmF4LXByZXZpZXcranNvbic6IC9eKGh0dHBzPzpcXC9cXC9bXlxcL10rKT8oXFwvYXBpXFwvdjMpPyhcXC9saWNlbnNlc3xcXC9saWNlbnNlc1xcLyhbXlxcL10rKXxcXC9yZXBvc1xcLyhbXlxcL10rKVxcLyhbXlxcL10rKSkkLyxcbiAgICAnYXBwbGljYXRpb24vdm5kLmdpdGh1Yi52My5zdGFyK2pzb24nOiAvXihodHRwcz86XFwvXFwvW15cXC9dKyk/KFxcL2FwaVxcL3YzKT9cXC91c2Vyc1xcLyhbXlxcL10rKVxcL3N0YXJyZWQkL1xuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAnemVuJzogZmFsc2UsXG4gICAgJ29jdG9jYXQnOiBmYWxzZSxcbiAgICAnb3JnYW5pemF0aW9ucyc6IGZhbHNlLFxuICAgICdpc3N1ZXMnOiBmYWxzZSxcbiAgICAnZW1vamlzJzogZmFsc2UsXG4gICAgJ21hcmtkb3duJzogZmFsc2UsXG4gICAgJ21ldGEnOiBmYWxzZSxcbiAgICAncmF0ZV9saW1pdCc6IGZhbHNlLFxuICAgICdmZWVkcyc6IGZhbHNlLFxuICAgICdldmVudHMnOiBmYWxzZSxcbiAgICAnbm90aWZpY2F0aW9ucyc6IHtcbiAgICAgICd0aHJlYWRzJzoge1xuICAgICAgICAnc3Vic2NyaXB0aW9uJzogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgICdnaXRpZ25vcmUnOiB7XG4gICAgICAndGVtcGxhdGVzJzogZmFsc2VcbiAgICB9LFxuICAgICd1c2VyJzoge1xuICAgICAgJ3JlcG9zJzogZmFsc2UsXG4gICAgICAnb3Jncyc6IGZhbHNlLFxuICAgICAgJ2ZvbGxvd2Vycyc6IGZhbHNlLFxuICAgICAgJ2ZvbGxvd2luZyc6IGZhbHNlLFxuICAgICAgJ2VtYWlscyc6IGZhbHNlLFxuICAgICAgJ2lzc3Vlcyc6IGZhbHNlLFxuICAgICAgJ3N0YXJyZWQnOiBmYWxzZSxcbiAgICAgICd0ZWFtcyc6IGZhbHNlXG4gICAgfSxcbiAgICAnb3Jncyc6IHtcbiAgICAgICdyZXBvcyc6IGZhbHNlLFxuICAgICAgJ2lzc3Vlcyc6IGZhbHNlLFxuICAgICAgJ21lbWJlcnMnOiBmYWxzZSxcbiAgICAgICdldmVudHMnOiBmYWxzZSxcbiAgICAgICd0ZWFtcyc6IGZhbHNlXG4gICAgfSxcbiAgICAndGVhbXMnOiB7XG4gICAgICAnbWVtYmVycyc6IGZhbHNlLFxuICAgICAgJ21lbWJlcnNoaXBzJzogZmFsc2UsXG4gICAgICAncmVwb3MnOiBmYWxzZVxuICAgIH0sXG4gICAgJ3VzZXJzJzoge1xuICAgICAgJ3JlcG9zJzogZmFsc2UsXG4gICAgICAnb3Jncyc6IGZhbHNlLFxuICAgICAgJ2dpc3RzJzogZmFsc2UsXG4gICAgICAnZm9sbG93ZXJzJzogZmFsc2UsXG4gICAgICAnZm9sbG93aW5nJzogZmFsc2UsXG4gICAgICAna2V5cyc6IGZhbHNlLFxuICAgICAgJ3N0YXJyZWQnOiBmYWxzZSxcbiAgICAgICdyZWNlaXZlZF9ldmVudHMnOiB7XG4gICAgICAgICdwdWJsaWMnOiBmYWxzZVxuICAgICAgfSxcbiAgICAgICdldmVudHMnOiB7XG4gICAgICAgICdwdWJsaWMnOiBmYWxzZSxcbiAgICAgICAgJ29yZ3MnOiBmYWxzZVxuICAgICAgfSxcbiAgICAgICdzaXRlX2FkbWluJzogZmFsc2UsXG4gICAgICAnc3VzcGVuZGVkJzogZmFsc2VcbiAgICB9LFxuICAgICdzZWFyY2gnOiB7XG4gICAgICAncmVwb3NpdG9yaWVzJzogZmFsc2UsXG4gICAgICAnaXNzdWVzJzogZmFsc2UsXG4gICAgICAndXNlcnMnOiBmYWxzZSxcbiAgICAgICdjb2RlJzogZmFsc2VcbiAgICB9LFxuICAgICdnaXN0cyc6IHtcbiAgICAgICdwdWJsaWMnOiBmYWxzZSxcbiAgICAgICdzdGFycmVkJzogZmFsc2UsXG4gICAgICAnc3Rhcic6IGZhbHNlLFxuICAgICAgJ2NvbW1lbnRzJzogZmFsc2UsXG4gICAgICAnZm9ya3MnOiBmYWxzZVxuICAgIH0sXG4gICAgJ3JlcG9zJzoge1xuICAgICAgJ3JlYWRtZSc6IGZhbHNlLFxuICAgICAgJ3RhcmJhbGwnOiBmYWxzZSxcbiAgICAgICd6aXBiYWxsJzogZmFsc2UsXG4gICAgICAnY29tcGFyZSc6IGZhbHNlLFxuICAgICAgJ2RlcGxveW1lbnRzJzoge1xuICAgICAgICAnc3RhdHVzZXMnOiBmYWxzZVxuICAgICAgfSxcbiAgICAgICdob29rcyc6IHtcbiAgICAgICAgJ3Rlc3RzJzogZmFsc2VcbiAgICAgIH0sXG4gICAgICAnYXNzaWduZWVzJzogZmFsc2UsXG4gICAgICAnbGFuZ3VhZ2VzJzogZmFsc2UsXG4gICAgICAndGVhbXMnOiBmYWxzZSxcbiAgICAgICd0YWdzJzogZmFsc2UsXG4gICAgICAnYnJhbmNoZXMnOiBmYWxzZSxcbiAgICAgICdjb250cmlidXRvcnMnOiBmYWxzZSxcbiAgICAgICdzdWJzY3JpYmVycyc6IGZhbHNlLFxuICAgICAgJ3N1YnNjcmlwdGlvbic6IGZhbHNlLFxuICAgICAgJ3N0YXJnYXplcnMnOiBmYWxzZSxcbiAgICAgICdjb21tZW50cyc6IGZhbHNlLFxuICAgICAgJ2Rvd25sb2Fkcyc6IGZhbHNlLFxuICAgICAgJ2ZvcmtzJzogZmFsc2UsXG4gICAgICAnbWlsZXN0b25lcyc6IHtcbiAgICAgICAgJ2xhYmVscyc6IGZhbHNlXG4gICAgICB9LFxuICAgICAgJ2xhYmVscyc6IGZhbHNlLFxuICAgICAgJ3JlbGVhc2VzJzoge1xuICAgICAgICAnYXNzZXRzJzogZmFsc2UsXG4gICAgICAgICdsYXRlc3QnOiBmYWxzZSxcbiAgICAgICAgJ3RhZ3MnOiBmYWxzZVxuICAgICAgfSxcbiAgICAgICdldmVudHMnOiBmYWxzZSxcbiAgICAgICdub3RpZmljYXRpb25zJzogZmFsc2UsXG4gICAgICAnbWVyZ2VzJzogZmFsc2UsXG4gICAgICAnc3RhdHVzZXMnOiBmYWxzZSxcbiAgICAgICdwdWxscyc6IHtcbiAgICAgICAgJ21lcmdlJzogZmFsc2UsXG4gICAgICAgICdjb21tZW50cyc6IGZhbHNlLFxuICAgICAgICAnY29tbWl0cyc6IGZhbHNlLFxuICAgICAgICAnZmlsZXMnOiBmYWxzZSxcbiAgICAgICAgJ2V2ZW50cyc6IGZhbHNlLFxuICAgICAgICAnbGFiZWxzJzogZmFsc2VcbiAgICAgIH0sXG4gICAgICAncGFnZXMnOiB7XG4gICAgICAgICdidWlsZHMnOiB7XG4gICAgICAgICAgJ2xhdGVzdCc6IGZhbHNlXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAnY29tbWl0cyc6IHtcbiAgICAgICAgJ2NvbW1lbnRzJzogZmFsc2UsXG4gICAgICAgICdzdGF0dXMnOiBmYWxzZSxcbiAgICAgICAgJ3N0YXR1c2VzJzogZmFsc2VcbiAgICAgIH0sXG4gICAgICAnY29udGVudHMnOiBmYWxzZSxcbiAgICAgICdjb2xsYWJvcmF0b3JzJzogZmFsc2UsXG4gICAgICAnaXNzdWVzJzoge1xuICAgICAgICAnZXZlbnRzJzogZmFsc2UsXG4gICAgICAgICdjb21tZW50cyc6IGZhbHNlLFxuICAgICAgICAnbGFiZWxzJzogZmFsc2VcbiAgICAgIH0sXG4gICAgICAnZ2l0Jzoge1xuICAgICAgICAncmVmcyc6IHtcbiAgICAgICAgICAnaGVhZHMnOiBmYWxzZSxcbiAgICAgICAgICAndGFncyc6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgICd0cmVlcyc6IGZhbHNlLFxuICAgICAgICAnYmxvYnMnOiBmYWxzZSxcbiAgICAgICAgJ2NvbW1pdHMnOiBmYWxzZVxuICAgICAgfSxcbiAgICAgICdzdGF0cyc6IHtcbiAgICAgICAgJ2NvbnRyaWJ1dG9ycyc6IGZhbHNlLFxuICAgICAgICAnY29tbWl0X2FjdGl2aXR5JzogZmFsc2UsXG4gICAgICAgICdjb2RlX2ZyZXF1ZW5jeSc6IGZhbHNlLFxuICAgICAgICAncGFydGljaXBhdGlvbic6IGZhbHNlLFxuICAgICAgICAncHVuY2hfY2FyZCc6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICAnbGljZW5zZXMnOiBmYWxzZSxcbiAgICAnYXV0aG9yaXphdGlvbnMnOiB7XG4gICAgICAnY2xpZW50cyc6IGZhbHNlXG4gICAgfSxcbiAgICAnYXBwbGljYXRpb25zJzoge1xuICAgICAgJ3Rva2Vucyc6IGZhbHNlXG4gICAgfSxcbiAgICAnZW50ZXJwcmlzZSc6IHtcbiAgICAgICdzZXR0aW5ncyc6IHtcbiAgICAgICAgJ2xpY2Vuc2UnOiBmYWxzZVxuICAgICAgfSxcbiAgICAgICdzdGF0cyc6IHtcbiAgICAgICAgJ2lzc3Vlcyc6IGZhbHNlLFxuICAgICAgICAnaG9va3MnOiBmYWxzZSxcbiAgICAgICAgJ21pbGVzdG9uZXMnOiBmYWxzZSxcbiAgICAgICAgJ29yZ3MnOiBmYWxzZSxcbiAgICAgICAgJ2NvbW1lbnRzJzogZmFsc2UsXG4gICAgICAgICdwYWdlcyc6IGZhbHNlLFxuICAgICAgICAndXNlcnMnOiBmYWxzZSxcbiAgICAgICAgJ2dpc3RzJzogZmFsc2UsXG4gICAgICAgICdwdWxscyc6IGZhbHNlLFxuICAgICAgICAncmVwb3MnOiBmYWxzZSxcbiAgICAgICAgJ2FsbCc6IGZhbHNlXG4gICAgICB9XG4gICAgfSxcbiAgICAnc3RhZmYnOiB7XG4gICAgICAnaW5kZXhpbmdfam9icyc6IGZhbHNlXG4gICAgfSxcbiAgICAnc2V0dXAnOiB7XG4gICAgICAnYXBpJzoge1xuICAgICAgICAnc3RhcnQnOiBmYWxzZSxcbiAgICAgICAgJ3VwZ3JhZGUnOiBmYWxzZSxcbiAgICAgICAgJ2NvbmZpZ2NoZWNrJzogZmFsc2UsXG4gICAgICAgICdjb25maWd1cmUnOiBmYWxzZSxcbiAgICAgICAgJ3NldHRpbmdzJzoge1xuICAgICAgICAgICdhdXRob3JpemVkLWtleXMnOiBmYWxzZVxuICAgICAgICB9LFxuICAgICAgICAnbWFpbnRlbmFuY2UnOiBmYWxzZVxuICAgICAgfVxuICAgIH1cbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSAvXihodHRwczpcXC9cXC9zdGF0dXMuZ2l0aHViLmNvbVxcL2FwaVxcLyhzdGF0dXMuanNvbnxsYXN0LW1lc3NhZ2UuanNvbnxtZXNzYWdlcy5qc29uKSQpfChodHRwcz86XFwvXFwvW15cXC9dKyk/KFxcL2FwaVxcL3YzKT9cXC8oemVufG9jdG9jYXR8dXNlcnN8b3JnYW5pemF0aW9uc3xpc3N1ZXN8Z2lzdHN8ZW1vamlzfG1hcmtkb3dufG1ldGF8cmF0ZV9saW1pdHxmZWVkc3xldmVudHN8bm90aWZpY2F0aW9uc3xub3RpZmljYXRpb25zXFwvdGhyZWFkcyhcXC9bXlxcL10rKXxub3RpZmljYXRpb25zXFwvdGhyZWFkcyhcXC9bXlxcL10rKVxcL3N1YnNjcmlwdGlvbnxnaXRpZ25vcmVcXC90ZW1wbGF0ZXMoXFwvW15cXC9dKyk/fHVzZXIoXFwvXFxkKyk/fHVzZXIoXFwvXFxkKyk/XFwvKHxyZXBvc3xvcmdzfGZvbGxvd2Vyc3xmb2xsb3dpbmcoXFwvW15cXC9dKyk/fGVtYWlscyhcXC9bXlxcL10rKT98aXNzdWVzfHN0YXJyZWR8c3RhcnJlZChcXC9bXlxcL10rKXsyfXx0ZWFtcyl8b3Jnc1xcL1teXFwvXSt8b3Jnc1xcL1teXFwvXStcXC8ocmVwb3N8aXNzdWVzfG1lbWJlcnN8ZXZlbnRzfHRlYW1zKXx0ZWFtc1xcL1teXFwvXSt8dGVhbXNcXC9bXlxcL10rXFwvKG1lbWJlcnMoXFwvW15cXC9dKyk/fG1lbWJlcnNoaXBzXFwvW15cXC9dK3xyZXBvc3xyZXBvcyhcXC9bXlxcL10rKXsyfSl8dXNlcnNcXC9bXlxcL10rfHVzZXJzXFwvW15cXC9dK1xcLyhyZXBvc3xvcmdzfGdpc3RzfGZvbGxvd2Vyc3xmb2xsb3dpbmcoXFwvW15cXC9dKyl7MCwyfXxrZXlzfHN0YXJyZWR8cmVjZWl2ZWRfZXZlbnRzKFxcL3B1YmxpYyk/fGV2ZW50cyhcXC9wdWJsaWMpP3xldmVudHNcXC9vcmdzXFwvW15cXC9dKyl8c2VhcmNoXFwvKHJlcG9zaXRvcmllc3xpc3N1ZXN8dXNlcnN8Y29kZSl8Z2lzdHNcXC8ocHVibGljfHN0YXJyZWR8KFthLWYwLTldezIwfXxbMC05XSspfChbYS1mMC05XXsyMH18WzAtOV0rKVxcL2ZvcmtzfChbYS1mMC05XXsyMH18WzAtOV0rKVxcL2NvbW1lbnRzKFxcL1swLTldKyk/fChbYS1mMC05XXsyMH18WzAtOV0rKVxcL3N0YXIpfHJlcG9zKFxcL1teXFwvXSspezJ9fHJlcG9zKFxcL1teXFwvXSspezJ9XFwvKHJlYWRtZXx0YXJiYWxsKFxcL1teXFwvXSspP3x6aXBiYWxsKFxcL1teXFwvXSspP3xjb21wYXJlXFwvKFteXFwuezN9XSspXFwuezN9KFteXFwuezN9XSspfGRlcGxveW1lbnRzKFxcL1swLTldKyk/fGRlcGxveW1lbnRzXFwvWzAtOV0rXFwvc3RhdHVzZXMoXFwvWzAtOV0rKT98aG9va3N8aG9va3NcXC9bXlxcL10rfGhvb2tzXFwvW15cXC9dK1xcL3Rlc3RzfGFzc2lnbmVlc3xsYW5ndWFnZXN8dGVhbXN8dGFnc3xicmFuY2hlcyhcXC9bXlxcL10rKXswLDJ9fGNvbnRyaWJ1dG9yc3xzdWJzY3JpYmVyc3xzdWJzY3JpcHRpb258c3RhcmdhemVyc3xjb21tZW50cyhcXC9bMC05XSspP3xkb3dubG9hZHMoXFwvWzAtOV0rKT98Zm9ya3N8bWlsZXN0b25lc3xtaWxlc3RvbmVzXFwvWzAtOV0rfG1pbGVzdG9uZXNcXC9bMC05XStcXC9sYWJlbHN8bGFiZWxzKFxcL1teXFwvXSspP3xyZWxlYXNlc3xyZWxlYXNlc1xcLyhbMC05XSspfHJlbGVhc2VzXFwvKFswLTldKylcXC9hc3NldHN8cmVsZWFzZXNcXC9sYXRlc3R8cmVsZWFzZXNcXC90YWdzXFwvKFteXFwvXSspfHJlbGVhc2VzXFwvYXNzZXRzXFwvKFswLTldKyl8ZXZlbnRzfG5vdGlmaWNhdGlvbnN8bWVyZ2VzfHN0YXR1c2VzXFwvW2EtZjAtOV17NDB9fHBhZ2VzfHBhZ2VzXFwvYnVpbGRzfHBhZ2VzXFwvYnVpbGRzXFwvbGF0ZXN0fGNvbW1pdHN8Y29tbWl0c1xcL1thLWYwLTldezQwfXxjb21taXRzXFwvW2EtZjAtOV17NDB9XFwvKGNvbW1lbnRzfHN0YXR1c3xzdGF0dXNlcyk/fGNvbnRlbnRzXFwvfGNvbnRlbnRzKFxcL1teXFwvXSspKnxjb2xsYWJvcmF0b3JzKFxcL1teXFwvXSspP3woaXNzdWVzfHB1bGxzKXwoaXNzdWVzfHB1bGxzKVxcLyhldmVudHN8ZXZlbnRzXFwvWzAtOV0rfGNvbW1lbnRzKFxcL1swLTldKyk/fFswLTldK3xbMC05XStcXC9ldmVudHN8WzAtOV0rXFwvY29tbWVudHN8WzAtOV0rXFwvbGFiZWxzKFxcL1teXFwvXSspPyl8cHVsbHNcXC9bMC05XStcXC8oZmlsZXN8Y29tbWl0cyl8Z2l0XFwvKHJlZnN8cmVmc1xcLyguK3xoZWFkcyhcXC9bXlxcL10rKT98dGFncyhcXC9bXlxcL10rKT8pfHRyZWVzKFxcL1teXFwvXSspP3xibG9icyhcXC9bYS1mMC05XXs0MH0kKT98Y29tbWl0cyhcXC9bYS1mMC05XXs0MH0kKT8pfHN0YXRzXFwvKGNvbnRyaWJ1dG9yc3xjb21taXRfYWN0aXZpdHl8Y29kZV9mcmVxdWVuY3l8cGFydGljaXBhdGlvbnxwdW5jaF9jYXJkKSl8bGljZW5zZXN8bGljZW5zZXNcXC8oW15cXC9dKyl8YXV0aG9yaXphdGlvbnN8YXV0aG9yaXphdGlvbnNcXC8oKFxcZCspfGNsaWVudHNcXC8oW15cXC9dezIwfSl8Y2xpZW50c1xcLyhbXlxcL117MjB9KVxcLyhbXlxcL10rKSl8YXBwbGljYXRpb25zXFwvKFteXFwvXXsyMH0pXFwvdG9rZW5zfGFwcGxpY2F0aW9uc1xcLyhbXlxcL117MjB9KVxcL3Rva2Vuc1xcLyhbXlxcL10rKXxlbnRlcnByaXNlXFwvKHNldHRpbmdzXFwvbGljZW5zZXxzdGF0c1xcLyhpc3N1ZXN8aG9va3N8bWlsZXN0b25lc3xvcmdzfGNvbW1lbnRzfHBhZ2VzfHVzZXJzfGdpc3RzfHB1bGxzfHJlcG9zfGFsbCkpfHN0YWZmXFwvaW5kZXhpbmdfam9ic3x1c2Vyc1xcL1teXFwvXStcXC8oc2l0ZV9hZG1pbnxzdXNwZW5kZWQpfHNldHVwXFwvYXBpXFwvKHN0YXJ0fHVwZ3JhZGV8Y29uZmlnY2hlY2t8Y29uZmlndXJlfHNldHRpbmdzKGF1dGhvcml6ZWQta2V5cyk/fG1haW50ZW5hbmNlKSkoXFw/LiopPyQvO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgYmFzZTY0ZW5jb2RlO1xuXG4gIGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdyAhPT0gbnVsbCkge1xuICAgIGJhc2U2NGVuY29kZSA9IHdpbmRvdy5idG9hO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBnbG9iYWwgIT09IFwidW5kZWZpbmVkXCIgJiYgZ2xvYmFsICE9PSBudWxsID8gZ2xvYmFsWydCdWZmZXInXSA6IHZvaWQgMCkge1xuICAgIGJhc2U2NGVuY29kZSA9IGZ1bmN0aW9uKHN0cikge1xuICAgICAgdmFyIGJ1ZmZlcjtcbiAgICAgIGJ1ZmZlciA9IG5ldyBnbG9iYWxbJ0J1ZmZlciddKHN0ciwgJ2JpbmFyeScpO1xuICAgICAgcmV0dXJuIGJ1ZmZlci50b1N0cmluZygnYmFzZTY0Jyk7XG4gICAgfTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ05hdGl2ZSBidG9hIGZ1bmN0aW9uIG9yIEJ1ZmZlciBpcyBtaXNzaW5nJyk7XG4gIH1cblxuICBtb2R1bGUuZXhwb3J0cyA9IGJhc2U2NGVuY29kZTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIGFsbFByb21pc2VzLCBpbmplY3RvciwgbmV3UHJvbWlzZSwgcmVmLFxuICAgIHNsaWNlID0gW10uc2xpY2U7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93ICE9PSBudWxsKSB7XG4gICAgaWYgKHdpbmRvdy5RKSB7XG4gICAgICBuZXdQcm9taXNlID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihmbikge1xuICAgICAgICAgIHZhciBkZWZlcnJlZCwgcmVqZWN0LCByZXNvbHZlO1xuICAgICAgICAgIGRlZmVycmVkID0gd2luZG93LlEuZGVmZXIoKTtcbiAgICAgICAgICByZXNvbHZlID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucmVzb2x2ZSh2YWwpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVqZWN0ID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucmVqZWN0KGVycik7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBmbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcyk7XG4gICAgICBhbGxQcm9taXNlcyA9IGZ1bmN0aW9uKHByb21pc2VzKSB7XG4gICAgICAgIHJldHVybiB3aW5kb3cuUS5hbGwocHJvbWlzZXMpO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5hbmd1bGFyKSB7XG4gICAgICBuZXdQcm9taXNlID0gbnVsbDtcbiAgICAgIGFsbFByb21pc2VzID0gbnVsbDtcbiAgICAgIGluamVjdG9yID0gYW5ndWxhci5pbmplY3RvcihbJ25nJ10pO1xuICAgICAgaW5qZWN0b3IuaW52b2tlKGZ1bmN0aW9uKCRxKSB7XG4gICAgICAgIG5ld1Byb21pc2UgPSBmdW5jdGlvbihmbikge1xuICAgICAgICAgIHZhciBkZWZlcnJlZCwgcmVqZWN0LCByZXNvbHZlO1xuICAgICAgICAgIGRlZmVycmVkID0gJHEuZGVmZXIoKTtcbiAgICAgICAgICByZXNvbHZlID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucmVzb2x2ZSh2YWwpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVqZWN0ID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmZXJyZWQucmVqZWN0KGVycik7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBmbihyZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5wcm9taXNlO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gYWxsUHJvbWlzZXMgPSBmdW5jdGlvbihwcm9taXNlcykge1xuICAgICAgICAgIHJldHVybiAkcS5hbGwocHJvbWlzZXMpO1xuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICgocmVmID0gd2luZG93LmpRdWVyeSkgIT0gbnVsbCA/IHJlZi5EZWZlcnJlZCA6IHZvaWQgMCkge1xuICAgICAgbmV3UHJvbWlzZSA9IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oZm4pIHtcbiAgICAgICAgICB2YXIgcHJvbWlzZSwgcmVqZWN0LCByZXNvbHZlO1xuICAgICAgICAgIHByb21pc2UgPSB3aW5kb3cualF1ZXJ5LkRlZmVycmVkKCk7XG4gICAgICAgICAgcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2UucmVzb2x2ZSh2YWwpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmVqZWN0ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZWplY3QodmFsKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGZuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgcmV0dXJuIHByb21pc2UucHJvbWlzZSgpO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcyk7XG4gICAgICBhbGxQcm9taXNlcyA9IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24ocHJvbWlzZXMpIHtcbiAgICAgICAgICB2YXIgcmVmMTtcbiAgICAgICAgICByZXR1cm4gKHJlZjEgPSB3aW5kb3cualF1ZXJ5KS53aGVuLmFwcGx5KHJlZjEsIHByb21pc2VzKS50aGVuKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIHByb21pc2VzO1xuICAgICAgICAgICAgcHJvbWlzZXMgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlcztcbiAgICAgICAgICB9KTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpO1xuICAgIH1cbiAgfVxuXG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIG5ld1Byb21pc2U6IG5ld1Byb21pc2UsXG4gICAgYWxsUHJvbWlzZXM6IGFsbFByb21pc2VzXG4gIH07XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBhbGxQcm9taXNlcywgbmV3UHJvbWlzZTtcblxuICBpZiAodHlwZW9mIFByb21pc2UgIT09IFwidW5kZWZpbmVkXCIgJiYgUHJvbWlzZSAhPT0gbnVsbCkge1xuICAgIG5ld1Byb21pc2UgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihmbikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgaWYgKHJlc29sdmUuZnVsZmlsbCkge1xuICAgICAgICAgICAgcmV0dXJuIGZuKHJlc29sdmUucmVzb2x2ZS5iaW5kKHJlc29sdmUpLCByZXNvbHZlLnJlamVjdC5iaW5kKHJlc29sdmUpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH07XG4gICAgfSkodGhpcyk7XG4gICAgYWxsUHJvbWlzZXMgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbihwcm9taXNlcykge1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKTtcbiAgfVxuXG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIG5ld1Byb21pc2U6IG5ld1Byb21pc2UsXG4gICAgYWxsUHJvbWlzZXM6IGFsbFByb21pc2VzXG4gIH07XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBQcm9taXNlLCBhbGxQcm9taXNlcywgbmV3UHJvbWlzZSwgcmVxO1xuXG4gIHJlcSA9IHJlcXVpcmU7XG5cbiAgUHJvbWlzZSA9IHRoaXMuUHJvbWlzZSB8fCByZXEoJ2VzNi1wcm9taXNlJykuUHJvbWlzZTtcblxuICBuZXdQcm9taXNlID0gZnVuY3Rpb24oZm4pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoZm4pO1xuICB9O1xuXG4gIGFsbFByb21pc2VzID0gZnVuY3Rpb24ocHJvbWlzZXMpIHtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgIG5ld1Byb21pc2U6IG5ld1Byb21pc2UsXG4gICAgYWxsUHJvbWlzZXM6IGFsbFByb21pc2VzXG4gIH07XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciB0b1F1ZXJ5U3RyaW5nO1xuXG4gIHRvUXVlcnlTdHJpbmcgPSBmdW5jdGlvbihvcHRpb25zLCBvbWl0UXVlc3Rpb25NYXJrKSB7XG4gICAgdmFyIGtleSwgcGFyYW1zLCByZWYsIHZhbHVlO1xuICAgIGlmICghb3B0aW9ucyB8fCBvcHRpb25zID09PSB7fSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICBwYXJhbXMgPSBbXTtcbiAgICByZWYgPSBvcHRpb25zIHx8IHt9O1xuICAgIGZvciAoa2V5IGluIHJlZikge1xuICAgICAgdmFsdWUgPSByZWZba2V5XTtcbiAgICAgIGlmICh2YWx1ZSkge1xuICAgICAgICBwYXJhbXMucHVzaChrZXkgKyBcIj1cIiArIChlbmNvZGVVUklDb21wb25lbnQodmFsdWUpKSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJhbXMubGVuZ3RoKSB7XG4gICAgICBpZiAob21pdFF1ZXN0aW9uTWFyaykge1xuICAgICAgICByZXR1cm4gXCImXCIgKyAocGFyYW1zLmpvaW4oJyYnKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gXCI/XCIgKyAocGFyYW1zLmpvaW4oJyYnKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB0b1F1ZXJ5U3RyaW5nO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgQXV0aG9yaXphdGlvbiwgYmFzZTY0ZW5jb2RlO1xuXG4gIGJhc2U2NGVuY29kZSA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvYmFzZTY0Jyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBuZXcgKEF1dGhvcml6YXRpb24gPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQXV0aG9yaXphdGlvbigpIHt9XG5cbiAgICBBdXRob3JpemF0aW9uLnByb3RvdHlwZS5yZXF1ZXN0TWlkZGxld2FyZSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgdmFyIGF1dGgsIHBhc3N3b3JkLCByZWYsIHRva2VuLCB1c2VybmFtZTtcbiAgICAgIHJlZiA9IGFyZy5jbGllbnRPcHRpb25zLCB0b2tlbiA9IHJlZi50b2tlbiwgdXNlcm5hbWUgPSByZWYudXNlcm5hbWUsIHBhc3N3b3JkID0gcmVmLnBhc3N3b3JkO1xuICAgICAgaWYgKHRva2VuIHx8ICh1c2VybmFtZSAmJiBwYXNzd29yZCkpIHtcbiAgICAgICAgaWYgKHRva2VuKSB7XG4gICAgICAgICAgYXV0aCA9IFwidG9rZW4gXCIgKyB0b2tlbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhdXRoID0gJ0Jhc2ljICcgKyBiYXNlNjRlbmNvZGUodXNlcm5hbWUgKyBcIjpcIiArIHBhc3N3b3JkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICdBdXRob3JpemF0aW9uJzogYXV0aFxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIEF1dGhvcml6YXRpb247XG5cbiAgfSkoKSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBDYW1lbENhc2UsIHBsdXM7XG5cbiAgcGx1cyA9IHJlcXVpcmUoJy4uL3BsdXMnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IG5ldyAoQ2FtZWxDYXNlID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIENhbWVsQ2FzZSgpIHt9XG5cbiAgICBDYW1lbENhc2UucHJvdG90eXBlLnJlc3BvbnNlTWlkZGxld2FyZSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgdmFyIGRhdGE7XG4gICAgICBkYXRhID0gYXJnLmRhdGE7XG4gICAgICBkYXRhID0gdGhpcy5yZXBsYWNlKGRhdGEpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgQ2FtZWxDYXNlLnByb3RvdHlwZS5yZXBsYWNlID0gZnVuY3Rpb24oZGF0YSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VBcnJheShkYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSBlbHNlIGlmIChkYXRhID09PSBPYmplY3QoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VPYmplY3QoZGF0YSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgQ2FtZWxDYXNlLnByb3RvdHlwZS5fcmVwbGFjZU9iamVjdCA9IGZ1bmN0aW9uKG9yaWcpIHtcbiAgICAgIHZhciBhY2MsIGksIGtleSwgbGVuLCByZWYsIHZhbHVlO1xuICAgICAgYWNjID0ge307XG4gICAgICByZWYgPSBPYmplY3Qua2V5cyhvcmlnKTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBrZXkgPSByZWZbaV07XG4gICAgICAgIHZhbHVlID0gb3JpZ1trZXldO1xuICAgICAgICB0aGlzLl9yZXBsYWNlS2V5VmFsdWUoYWNjLCBrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhY2M7XG4gICAgfTtcblxuICAgIENhbWVsQ2FzZS5wcm90b3R5cGUuX3JlcGxhY2VBcnJheSA9IGZ1bmN0aW9uKG9yaWcpIHtcbiAgICAgIHZhciBhcnIsIGksIGl0ZW0sIGtleSwgbGVuLCByZWYsIHZhbHVlO1xuICAgICAgYXJyID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgbGVuLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IG9yaWcubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBpdGVtID0gb3JpZ1tpXTtcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5yZXBsYWNlKGl0ZW0pKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH0pLmNhbGwodGhpcyk7XG4gICAgICByZWYgPSBPYmplY3Qua2V5cyhvcmlnKTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBrZXkgPSByZWZbaV07XG4gICAgICAgIHZhbHVlID0gb3JpZ1trZXldO1xuICAgICAgICB0aGlzLl9yZXBsYWNlS2V5VmFsdWUoYXJyLCBrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnI7XG4gICAgfTtcblxuICAgIENhbWVsQ2FzZS5wcm90b3R5cGUuX3JlcGxhY2VLZXlWYWx1ZSA9IGZ1bmN0aW9uKGFjYywga2V5LCB2YWx1ZSkge1xuICAgICAgcmV0dXJuIGFjY1twbHVzLmNhbWVsaXplKGtleSldID0gdGhpcy5yZXBsYWNlKHZhbHVlKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIENhbWVsQ2FzZTtcblxuICB9KSgpKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIEZldGNoQWxsLCBmZXRjaE5leHRQYWdlLCBnZXRNb3JlLCBwdXNoQWxsLCB0b1F1ZXJ5U3RyaW5nO1xuXG4gIHRvUXVlcnlTdHJpbmcgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3F1ZXJ5c3RyaW5nJyk7XG5cbiAgcHVzaEFsbCA9IGZ1bmN0aW9uKHRhcmdldCwgc291cmNlKSB7XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNvdXJjZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignT2N0b2thdCBFcnJvcjogQ2FsbGluZyBmZXRjaEFsbCBvbiBhIHJlcXVlc3QgdGhhdCBkb2VzIG5vdCB5aWVsZCBhbiBhcnJheScpO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0LnB1c2guYXBwbHkodGFyZ2V0LCBzb3VyY2UpO1xuICB9O1xuXG4gIGdldE1vcmUgPSBmdW5jdGlvbihmZXRjaGFibGUsIHJlcXVlc3RlciwgYWNjLCBjYikge1xuICAgIHZhciBkb1N0dWZmO1xuICAgIGRvU3R1ZmYgPSBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgcmV0dXJuIGNiKGVycik7XG4gICAgICB9XG4gICAgICBwdXNoQWxsKGFjYywgcmVzdWx0cy5pdGVtcyk7XG4gICAgICByZXR1cm4gZ2V0TW9yZShyZXN1bHRzLCByZXF1ZXN0ZXIsIGFjYywgY2IpO1xuICAgIH07XG4gICAgaWYgKCFmZXRjaE5leHRQYWdlKGZldGNoYWJsZSwgcmVxdWVzdGVyLCBkb1N0dWZmKSkge1xuICAgICAgcmV0dXJuIGNiKG51bGwsIGFjYyk7XG4gICAgfVxuICB9O1xuXG4gIGZldGNoTmV4dFBhZ2UgPSBmdW5jdGlvbihvYmosIHJlcXVlc3RlciwgY2IpIHtcbiAgICBpZiAodHlwZW9mIG9iai5uZXh0X3BhZ2VfdXJsID09PSAnc3RyaW5nJykge1xuICAgICAgcmVxdWVzdGVyLnJlcXVlc3QoJ0dFVCcsIG9iai5uZXh0X3BhZ2UsIG51bGwsIG51bGwsIGNiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAob2JqLm5leHRfcGFnZSkge1xuICAgICAgb2JqLm5leHRfcGFnZS5mZXRjaChjYik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBvYmoubmV4dFBhZ2VVcmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1ZXN0ZXIucmVxdWVzdCgnR0VUJywgb2JqLm5leHRQYWdlVXJsLCBudWxsLCBudWxsLCBjYik7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKG9iai5uZXh0UGFnZSkge1xuICAgICAgb2JqLm5leHRQYWdlLmZldGNoKGNiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gbmV3IChGZXRjaEFsbCA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBGZXRjaEFsbCgpIHt9XG5cbiAgICBGZXRjaEFsbC5wcm90b3R5cGUuYXN5bmNWZXJicyA9IHtcbiAgICAgIGZldGNoQWxsOiBmdW5jdGlvbihyZXF1ZXN0ZXIsIHBhdGgpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGNiLCBxdWVyeSkge1xuICAgICAgICAgIHJldHVybiByZXF1ZXN0ZXIucmVxdWVzdCgnR0VUJywgXCJcIiArIHBhdGggKyAodG9RdWVyeVN0cmluZyhxdWVyeSkpLCBudWxsLCBudWxsLCBmdW5jdGlvbihlcnIsIHJlc3VsdHMpIHtcbiAgICAgICAgICAgIHZhciBhY2M7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIHJldHVybiBjYihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWNjID0gW107XG4gICAgICAgICAgICBwdXNoQWxsKGFjYywgcmVzdWx0cy5pdGVtcyk7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TW9yZShyZXN1bHRzLCByZXF1ZXN0ZXIsIGFjYywgY2IpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gRmV0Y2hBbGw7XG5cbiAgfSkoKSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBIeXBlck1lZGlhLCBkZXByZWNhdGUsXG4gICAgc2xpY2UgPSBbXS5zbGljZTtcblxuICBkZXByZWNhdGUgPSByZXF1aXJlKCcuLi9kZXByZWNhdGUnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IG5ldyAoSHlwZXJNZWRpYSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBIeXBlck1lZGlhKCkge31cblxuICAgIEh5cGVyTWVkaWEucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbihpbnN0YW5jZSwgZGF0YSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VBcnJheShpbnN0YW5jZSwgZGF0YSk7XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBkYXRhID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSBlbHNlIGlmIChkYXRhIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YSA9PT0gT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9yZXBsYWNlT2JqZWN0KGluc3RhbmNlLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBIeXBlck1lZGlhLnByb3RvdHlwZS5fcmVwbGFjZU9iamVjdCA9IGZ1bmN0aW9uKGluc3RhbmNlLCBvcmlnKSB7XG4gICAgICB2YXIgYWNjLCBpLCBrZXksIGxlbiwgcmVmLCB2YWx1ZTtcbiAgICAgIGFjYyA9IHt9O1xuICAgICAgcmVmID0gT2JqZWN0LmtleXMob3JpZyk7XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAga2V5ID0gcmVmW2ldO1xuICAgICAgICB2YWx1ZSA9IG9yaWdba2V5XTtcbiAgICAgICAgdGhpcy5fcmVwbGFjZUtleVZhbHVlKGluc3RhbmNlLCBhY2MsIGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9O1xuXG4gICAgSHlwZXJNZWRpYS5wcm90b3R5cGUuX3JlcGxhY2VBcnJheSA9IGZ1bmN0aW9uKGluc3RhbmNlLCBvcmlnKSB7XG4gICAgICB2YXIgYXJyLCBpLCBpdGVtLCBrZXksIGxlbiwgcmVmLCB2YWx1ZTtcbiAgICAgIGFyciA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGksIGxlbiwgcmVzdWx0cztcbiAgICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSBvcmlnLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgaXRlbSA9IG9yaWdbaV07XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHRoaXMucmVwbGFjZShpbnN0YW5jZSwgaXRlbSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHJlZiA9IE9iamVjdC5rZXlzKG9yaWcpO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGtleSA9IHJlZltpXTtcbiAgICAgICAgdmFsdWUgPSBvcmlnW2tleV07XG4gICAgICAgIHRoaXMuX3JlcGxhY2VLZXlWYWx1ZShpbnN0YW5jZSwgYXJyLCBrZXksIHZhbHVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBhcnI7XG4gICAgfTtcblxuICAgIEh5cGVyTWVkaWEucHJvdG90eXBlLl9yZXBsYWNlS2V5VmFsdWUgPSBmdW5jdGlvbihpbnN0YW5jZSwgYWNjLCBrZXksIHZhbHVlKSB7XG4gICAgICB2YXIgZGVmYXVsdEZuLCBmbiwgbmV3S2V5O1xuICAgICAgaWYgKC9fdXJsJC8udGVzdChrZXkpKSB7XG4gICAgICAgIGlmICgvXnVwbG9hZF91cmwkLy50ZXN0KGtleSkpIHtcbiAgICAgICAgICBkZWZhdWx0Rm4gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhcmdzO1xuICAgICAgICAgICAgYXJncyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICAgICAgICAgICAgZGVwcmVjYXRlKCdjYWxsIC51cGxvYWQoe25hbWUsIGxhYmVsfSkuY3JlYXRlKGRhdGEsIGNvbnRlbnRUeXBlKScgKyAnIGluc3RlYWQgb2YgLnVwbG9hZChuYW1lLCBkYXRhLCBjb250ZW50VHlwZSknKTtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0Rm4uY3JlYXRlLmFwcGx5KGRlZmF1bHRGbiwgYXJncyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBmbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3M7XG4gICAgICAgICAgICBhcmdzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2UuX2Zyb21VcmxXaXRoRGVmYXVsdC5hcHBseShpbnN0YW5jZSwgW3ZhbHVlLCBkZWZhdWx0Rm5dLmNvbmNhdChzbGljZS5jYWxsKGFyZ3MpKSkoKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZmF1bHRGbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZGVwcmVjYXRlKCdpbnN0ZWFkIG9mIGRpcmVjdGx5IGNhbGxpbmcgbWV0aG9kcyBsaWtlIC5uZXh0UGFnZSgpLCB1c2UgLm5leHRQYWdlLmZldGNoKCknKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZldGNoKCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICBmbiA9IGluc3RhbmNlLl9mcm9tVXJsQ3VycmllZCh2YWx1ZSwgZGVmYXVsdEZuKTtcbiAgICAgICAgfVxuICAgICAgICBuZXdLZXkgPSBrZXkuc3Vic3RyaW5nKDAsIGtleS5sZW5ndGggLSAnX3VybCcubGVuZ3RoKTtcbiAgICAgICAgYWNjW25ld0tleV0gPSBmbjtcbiAgICAgICAgaWYgKCEvXFx7Ly50ZXN0KHZhbHVlKSkge1xuICAgICAgICAgIHJldHVybiBhY2Nba2V5XSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKC9fYXQkLy50ZXN0KGtleSkpIHtcbiAgICAgICAgcmV0dXJuIGFjY1trZXldID0gdmFsdWUgPyBuZXcgRGF0ZSh2YWx1ZSkgOiBudWxsO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGFjY1trZXldID0gdGhpcy5yZXBsYWNlKGluc3RhbmNlLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEh5cGVyTWVkaWEucHJvdG90eXBlLnJlc3BvbnNlTWlkZGxld2FyZSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgdmFyIGRhdGEsIGluc3RhbmNlO1xuICAgICAgaW5zdGFuY2UgPSBhcmcuaW5zdGFuY2UsIGRhdGEgPSBhcmcuZGF0YTtcbiAgICAgIGRhdGEgPSB0aGlzLnJlcGxhY2UoaW5zdGFuY2UsIGRhdGEpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YTogZGF0YVxuICAgICAgfTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEh5cGVyTWVkaWE7XG5cbiAgfSkoKSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBDaGFpbmVyLCBPQkpFQ1RfTUFUQ0hFUiwgT2JqZWN0Q2hhaW5lciwgVFJFRV9PUFRJT05TLCBWZXJiTWV0aG9kcztcblxuICBPQkpFQ1RfTUFUQ0hFUiA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvb2JqZWN0LW1hdGNoZXInKTtcblxuICBUUkVFX09QVElPTlMgPSByZXF1aXJlKCcuLi9ncmFtbWFyL3RyZWUtb3B0aW9ucycpO1xuXG4gIFZlcmJNZXRob2RzID0gcmVxdWlyZSgnLi4vdmVyYi1tZXRob2RzJyk7XG5cbiAgQ2hhaW5lciA9IHJlcXVpcmUoJy4uL2NoYWluZXInKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IG5ldyAoT2JqZWN0Q2hhaW5lciA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBPYmplY3RDaGFpbmVyKCkge31cblxuICAgIE9iamVjdENoYWluZXIucHJvdG90eXBlLmNoYWluQ2hpbGRyZW4gPSBmdW5jdGlvbihjaGFpbmVyLCB1cmwsIG9iaikge1xuICAgICAgdmFyIGNvbnRleHQsIGksIGssIGtleSwgbGVuLCByZSwgcmVmLCByZXN1bHRzO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChrZXkgaW4gT0JKRUNUX01BVENIRVIpIHtcbiAgICAgICAgcmUgPSBPQkpFQ1RfTUFUQ0hFUltrZXldO1xuICAgICAgICBpZiAocmUudGVzdChvYmoudXJsKSkge1xuICAgICAgICAgIGNvbnRleHQgPSBUUkVFX09QVElPTlM7XG4gICAgICAgICAgcmVmID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBrID0gcmVmW2ldO1xuICAgICAgICAgICAgY29udGV4dCA9IGNvbnRleHRba107XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlc3VsdHMucHVzaChjaGFpbmVyLmNoYWluKHVybCwgaywgY29udGV4dCwgb2JqKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKHZvaWQgMCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH07XG5cbiAgICBPYmplY3RDaGFpbmVyLnByb3RvdHlwZS5yZXNwb25zZU1pZGRsZXdhcmUgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHZhciBjaGFpbmVyLCBkYXRhLCBkYXR1bSwgaSwgbGVuLCBwbHVnaW5zLCByZXF1ZXN0ZXIsIHVybCwgdmVyYk1ldGhvZHM7XG4gICAgICBwbHVnaW5zID0gYXJnLnBsdWdpbnMsIHJlcXVlc3RlciA9IGFyZy5yZXF1ZXN0ZXIsIGRhdGEgPSBhcmcuZGF0YSwgdXJsID0gYXJnLnVybDtcbiAgICAgIHZlcmJNZXRob2RzID0gbmV3IFZlcmJNZXRob2RzKHBsdWdpbnMsIHJlcXVlc3Rlcik7XG4gICAgICBjaGFpbmVyID0gbmV3IENoYWluZXIodmVyYk1ldGhvZHMpO1xuICAgICAgaWYgKHVybCkge1xuICAgICAgICBjaGFpbmVyLmNoYWluKHVybCwgdHJ1ZSwge30sIGRhdGEpO1xuICAgICAgICB0aGlzLmNoYWluQ2hpbGRyZW4oY2hhaW5lciwgdXJsLCBkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNoYWluZXIuY2hhaW4oJycsIG51bGwsIHt9LCBkYXRhKTtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGF0YSkpIHtcbiAgICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSBkYXRhLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgICBkYXR1bSA9IGRhdGFbaV07XG4gICAgICAgICAgICB0aGlzLmNoYWluQ2hpbGRyZW4oY2hhaW5lciwgZGF0dW0udXJsLCBkYXR1bSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gT2JqZWN0Q2hhaW5lcjtcblxuICB9KSgpKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIFBhZ2luYXRpb247XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBuZXcgKFBhZ2luYXRpb24gPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gUGFnaW5hdGlvbigpIHt9XG5cbiAgICBQYWdpbmF0aW9uLnByb3RvdHlwZS5yZXNwb25zZU1pZGRsZXdhcmUgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHZhciBkYXRhLCBkaXNjYXJkLCBocmVmLCBpLCBqcVhIUiwgbGVuLCBsaW5rcywgcGFydCwgcmVmLCByZWYxLCByZWw7XG4gICAgICBqcVhIUiA9IGFyZy5qcVhIUiwgZGF0YSA9IGFyZy5kYXRhO1xuICAgICAgaWYgKCFqcVhIUikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICBkYXRhID0ge1xuICAgICAgICAgIGl0ZW1zOiBkYXRhLnNsaWNlKDApXG4gICAgICAgIH07XG4gICAgICAgIGxpbmtzID0ganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0xpbmsnKTtcbiAgICAgICAgcmVmID0gKGxpbmtzICE9IG51bGwgPyBsaW5rcy5zcGxpdCgnLCcpIDogdm9pZCAwKSB8fCBbXTtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAgcGFydCA9IHJlZltpXTtcbiAgICAgICAgICByZWYxID0gcGFydC5tYXRjaCgvPChbXj5dKyk+O1xcIHJlbD1cIihbXlwiXSspXCIvKSwgZGlzY2FyZCA9IHJlZjFbMF0sIGhyZWYgPSByZWYxWzFdLCByZWwgPSByZWYxWzJdO1xuICAgICAgICAgIGRhdGFbcmVsICsgXCJfcGFnZV91cmxcIl0gPSBocmVmO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gUGFnaW5hdGlvbjtcblxuICB9KSgpKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIFBhdGhWYWxpZGF0b3IsIFVSTF9WQUxJREFUT1I7XG5cbiAgVVJMX1ZBTElEQVRPUiA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvdXJsLXZhbGlkYXRvcicpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gbmV3IChQYXRoVmFsaWRhdG9yID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFBhdGhWYWxpZGF0b3IoKSB7fVxuXG4gICAgUGF0aFZhbGlkYXRvci5wcm90b3R5cGUucmVxdWVzdE1pZGRsZXdhcmUgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHZhciBlcnIsIHBhdGg7XG4gICAgICBwYXRoID0gYXJnLnBhdGg7XG4gICAgICBpZiAoIVVSTF9WQUxJREFUT1IudGVzdChwYXRoKSkge1xuICAgICAgICBlcnIgPSBcIk9jdG9rYXQgQlVHOiBJbnZhbGlkIFBhdGguIElmIHRoaXMgaXMgYWN0dWFsbHkgYSB2YWxpZCBwYXRoIHRoZW4gcGxlYXNlIHVwZGF0ZSB0aGUgVVJMX1ZBTElEQVRPUi4gcGF0aD1cIiArIHBhdGg7XG4gICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oZXJyKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFBhdGhWYWxpZGF0b3I7XG5cbiAgfSkoKSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBERUZBVUxUX0hFQURFUiwgUFJFVklFV19IRUFERVJTLCBQcmV2aWV3QXBpcztcblxuICBQUkVWSUVXX0hFQURFUlMgPSByZXF1aXJlKCcuLi9ncmFtbWFyL3ByZXZpZXctaGVhZGVycycpO1xuXG4gIERFRkFVTFRfSEVBREVSID0gZnVuY3Rpb24odXJsKSB7XG4gICAgdmFyIGtleSwgdmFsO1xuICAgIGZvciAoa2V5IGluIFBSRVZJRVdfSEVBREVSUykge1xuICAgICAgdmFsID0gUFJFVklFV19IRUFERVJTW2tleV07XG4gICAgICBpZiAodmFsLnRlc3QodXJsKSkge1xuICAgICAgICByZXR1cm4ga2V5O1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IG5ldyAoUHJldmlld0FwaXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gUHJldmlld0FwaXMoKSB7fVxuXG4gICAgUHJldmlld0FwaXMucHJvdG90eXBlLnJlcXVlc3RNaWRkbGV3YXJlID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICB2YXIgYWNjZXB0SGVhZGVyLCBwYXRoO1xuICAgICAgcGF0aCA9IGFyZy5wYXRoO1xuICAgICAgYWNjZXB0SGVhZGVyID0gREVGQVVMVF9IRUFERVIocGF0aCk7XG4gICAgICBpZiAoYWNjZXB0SGVhZGVyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0FjY2VwdCc6IGFjY2VwdEhlYWRlclxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFByZXZpZXdBcGlzO1xuXG4gIH0pKCkpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgUHJlZmVyTGlicmFyeU92ZXJOYXRpdmVQcm9taXNlcywgYWxsUHJvbWlzZXMsIG5ld1Byb21pc2UsIHJlZiwgcmVmMSwgcmVmMjtcblxuICByZWYgPSByZXF1aXJlKCcuLi8uLi9oZWxwZXJzL3Byb21pc2UtZmluZC1saWJyYXJ5JyksIG5ld1Byb21pc2UgPSByZWYubmV3UHJvbWlzZSwgYWxsUHJvbWlzZXMgPSByZWYuYWxsUHJvbWlzZXM7XG5cbiAgaWYgKCEobmV3UHJvbWlzZSAmJiBhbGxQcm9taXNlcykpIHtcbiAgICByZWYxID0gcmVxdWlyZSgnLi4vLi4vaGVscGVycy9wcm9taXNlLWZpbmQtbmF0aXZlJyksIG5ld1Byb21pc2UgPSByZWYxLm5ld1Byb21pc2UsIGFsbFByb21pc2VzID0gcmVmMS5hbGxQcm9taXNlcztcbiAgfVxuXG4gIGlmICghKCh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdyAhPT0gbnVsbCkgfHwgbmV3UHJvbWlzZSkpIHtcbiAgICByZWYyID0gcmVxdWlyZSgnLi4vLi4vaGVscGVycy9wcm9taXNlLW5vZGUnKSwgbmV3UHJvbWlzZSA9IHJlZjIubmV3UHJvbWlzZSwgYWxsUHJvbWlzZXMgPSByZWYyLmFsbFByb21pc2VzO1xuICB9XG5cbiAgaWYgKCh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdyAhPT0gbnVsbCkgJiYgIW5ld1Byb21pc2UpIHtcbiAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZSAhPT0gbnVsbCkge1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLndhcm4gPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICBjb25zb2xlLndhcm4oJ09jdG9rYXQ6IEEgUHJvbWlzZSBBUEkgd2FzIG5vdCBmb3VuZC4gU3VwcG9ydGVkIGxpYnJhcmllcyB0aGF0IGhhdmUgUHJvbWlzZXMgYXJlIGpRdWVyeSwgYW5ndWxhcmpzLCBhbmQgZXM2LXByb21pc2UnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSBpZiAoKHR5cGVvZiB3aW5kb3cgPT09IFwidW5kZWZpbmVkXCIgfHwgd2luZG93ID09PSBudWxsKSAmJiAhbmV3UHJvbWlzZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignQ291bGQgbm90IGZpbmQgYSBwcm9taXNlIGxpYiBmb3Igbm9kZS4gU2VlbXMgbGlrZSBhIGJ1ZycpO1xuICB9XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBuZXcgKFByZWZlckxpYnJhcnlPdmVyTmF0aXZlUHJvbWlzZXMgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gUHJlZmVyTGlicmFyeU92ZXJOYXRpdmVQcm9taXNlcygpIHt9XG5cbiAgICBQcmVmZXJMaWJyYXJ5T3Zlck5hdGl2ZVByb21pc2VzLnByb3RvdHlwZS5wcm9taXNlQ3JlYXRvciA9IHtcbiAgICAgIG5ld1Byb21pc2U6IG5ld1Byb21pc2UsXG4gICAgICBhbGxQcm9taXNlczogYWxsUHJvbWlzZXNcbiAgICB9O1xuXG4gICAgcmV0dXJuIFByZWZlckxpYnJhcnlPdmVyTmF0aXZlUHJvbWlzZXM7XG5cbiAgfSkoKSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBSZWFkQmluYXJ5LCB0b1F1ZXJ5U3RyaW5nO1xuXG4gIHRvUXVlcnlTdHJpbmcgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3F1ZXJ5c3RyaW5nJyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBuZXcgKFJlYWRCaW5hcnkgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gUmVhZEJpbmFyeSgpIHt9XG5cbiAgICBSZWFkQmluYXJ5LnByb3RvdHlwZS52ZXJicyA9IHtcbiAgICAgIHJlYWRCaW5hcnk6IGZ1bmN0aW9uKHBhdGgsIHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICBwYXRoOiBcIlwiICsgcGF0aCArICh0b1F1ZXJ5U3RyaW5nKHF1ZXJ5KSksXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgaXNSYXc6IHRydWUsXG4gICAgICAgICAgICBpc0Jhc2U2NDogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgUmVhZEJpbmFyeS5wcm90b3R5cGUucmVxdWVzdE1pZGRsZXdhcmUgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHZhciBpc0Jhc2U2NCwgb3B0aW9ucztcbiAgICAgIG9wdGlvbnMgPSBhcmcub3B0aW9ucztcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGlzQmFzZTY0ID0gb3B0aW9ucy5pc0Jhc2U2NDtcbiAgICAgICAgaWYgKGlzQmFzZTY0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vdm5kLmdpdGh1Yi5yYXcnXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWltZVR5cGU6ICd0ZXh0L3BsYWluOyBjaGFyc2V0PXgtdXNlci1kZWZpbmVkJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgUmVhZEJpbmFyeS5wcm90b3R5cGUucmVzcG9uc2VNaWRkbGV3YXJlID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICB2YXIgY29udmVydGVkLCBkYXRhLCBpLCBpc0Jhc2U2NCwgaiwgb3B0aW9ucywgcmVmO1xuICAgICAgb3B0aW9ucyA9IGFyZy5vcHRpb25zLCBkYXRhID0gYXJnLmRhdGE7XG4gICAgICBpZiAob3B0aW9ucykge1xuICAgICAgICBpc0Jhc2U2NCA9IG9wdGlvbnMuaXNCYXNlNjQ7XG4gICAgICAgIGlmIChpc0Jhc2U2NCkge1xuICAgICAgICAgIGNvbnZlcnRlZCA9ICcnO1xuICAgICAgICAgIGZvciAoaSA9IGogPSAwLCByZWYgPSBkYXRhLmxlbmd0aDsgMCA8PSByZWYgPyBqIDwgcmVmIDogaiA+IHJlZjsgaSA9IDAgPD0gcmVmID8gKytqIDogLS1qKSB7XG4gICAgICAgICAgICBjb252ZXJ0ZWQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShkYXRhLmNoYXJDb2RlQXQoaSkgJiAweGZmKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGE6IGNvbnZlcnRlZFxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFJlYWRCaW5hcnk7XG5cbiAgfSkoKSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBTaW1wbGVWZXJicywgdG9RdWVyeVN0cmluZyxcbiAgICBzbGljZSA9IFtdLnNsaWNlO1xuXG4gIHRvUXVlcnlTdHJpbmcgPSByZXF1aXJlKCcuLi9oZWxwZXJzL3F1ZXJ5c3RyaW5nJyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBuZXcgKFNpbXBsZVZlcmJzID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFNpbXBsZVZlcmJzKCkge31cblxuICAgIFNpbXBsZVZlcmJzLnByb3RvdHlwZS52ZXJicyA9IHtcbiAgICAgIGZldGNoOiBmdW5jdGlvbihwYXRoLCBxdWVyeSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgcGF0aDogXCJcIiArIHBhdGggKyAodG9RdWVyeVN0cmluZyhxdWVyeSkpXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgcmVhZDogZnVuY3Rpb24ocGF0aCwgcXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgIHBhdGg6IFwiXCIgKyBwYXRoICsgKHRvUXVlcnlTdHJpbmcocXVlcnkpKSxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBpc1JhdzogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uKHBhdGgsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBpc0Jvb2xlYW46IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgY3JlYXRlOiBmdW5jdGlvbihwYXRoLCBkYXRhLCBjb250ZW50VHlwZSkge1xuICAgICAgICBpZiAoY29udGVudFR5cGUpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgaXNSYXc6IHRydWUsXG4gICAgICAgICAgICAgIGNvbnRlbnRUeXBlOiBjb250ZW50VHlwZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgdXBkYXRlOiBmdW5jdGlvbihwYXRoLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWV0aG9kOiAnUEFUQ0gnLFxuICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGFkZDogZnVuY3Rpb24ocGF0aCwgZGF0YSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1ldGhvZDogJ1BVVCcsXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGlzQm9vbGVhbjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBjb250YWluczogZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBhcmdzLCBwYXRoO1xuICAgICAgICBwYXRoID0gYXJndW1lbnRzWzBdLCBhcmdzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICBwYXRoOiBwYXRoICsgXCIvXCIgKyAoYXJncy5qb2luKCcvJykpLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGlzQm9vbGVhbjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFNpbXBsZVZlcmJzO1xuXG4gIH0pKCkpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgVXNlUG9zdEluc3RlYWRPZlBhdGNoO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gbmV3IChVc2VQb3N0SW5zdGVhZE9mUGF0Y2ggPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gVXNlUG9zdEluc3RlYWRPZlBhdGNoKCkge31cblxuICAgIFVzZVBvc3RJbnN0ZWFkT2ZQYXRjaC5wcm90b3R5cGUucmVxdWVzdE1pZGRsZXdhcmUgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHZhciBtZXRob2QsIHJlZiwgdXNlUG9zdEluc3RlYWRPZlBhdGNoO1xuICAgICAgKHJlZiA9IGFyZy5jbGllbnRPcHRpb25zLCB1c2VQb3N0SW5zdGVhZE9mUGF0Y2ggPSByZWYudXNlUG9zdEluc3RlYWRPZlBhdGNoKSwgbWV0aG9kID0gYXJnLm1ldGhvZDtcbiAgICAgIGlmICh1c2VQb3N0SW5zdGVhZE9mUGF0Y2ggJiYgbWV0aG9kID09PSAnUEFUQ0gnKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWV0aG9kOiAnUE9TVCdcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgcmV0dXJuIFVzZVBvc3RJbnN0ZWFkT2ZQYXRjaDtcblxuICB9KSgpKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIGZpbHRlciwgZm9yRWFjaCwgcGx1cztcblxuICBmaWx0ZXIgPSByZXF1aXJlKCdsb2Rhc2gvaW50ZXJuYWwvYXJyYXlGaWx0ZXInKTtcblxuICBmb3JFYWNoID0gcmVxdWlyZSgnbG9kYXNoL2ludGVybmFsL2FycmF5RWFjaCcpO1xuXG4gIHBsdXMgPSB7XG4gICAgY2FtZWxpemU6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgaWYgKHN0cmluZykge1xuICAgICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoL1tfLV0rKFxcdykvZywgZnVuY3Rpb24obSkge1xuICAgICAgICAgIHJldHVybiBtWzFdLnRvVXBwZXJDYXNlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgIH0sXG4gICAgdW5jYW1lbGl6ZTogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICBpZiAoIXN0cmluZykge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbQS1aXSkrL2csIGZ1bmN0aW9uKG1hdGNoLCBsZXR0ZXIpIHtcbiAgICAgICAgaWYgKGxldHRlciA9PSBudWxsKSB7XG4gICAgICAgICAgbGV0dGVyID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFwiX1wiICsgKGxldHRlci50b0xvd2VyQ2FzZSgpKTtcbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZGFzaGVyaXplOiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgIGlmICghc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIHN0cmluZyA9IHN0cmluZ1swXS50b0xvd2VyQ2FzZSgpICsgc3RyaW5nLnNsaWNlKDEpO1xuICAgICAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKC8oW0EtWl0pfChfKS9nLCBmdW5jdGlvbihtLCBsZXR0ZXIpIHtcbiAgICAgICAgaWYgKGxldHRlcikge1xuICAgICAgICAgIHJldHVybiAnLScgKyBsZXR0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gJy0nO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LFxuICAgIGV4dGVuZDogZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2UpIHtcbiAgICAgIHZhciBpLCBrZXksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICByZWYgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGtleSA9IHJlZltpXTtcbiAgICAgICAgICByZXN1bHRzLnB1c2godGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9XG4gICAgfSxcbiAgICBmb3JPd246IGZ1bmN0aW9uKG9iaiwgaXRlcmF0b3IpIHtcbiAgICAgIHZhciBpLCBrZXksIGxlbiwgcmVmLCByZXN1bHRzO1xuICAgICAgcmVmID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBrZXkgPSByZWZbaV07XG4gICAgICAgIHJlc3VsdHMucHVzaChpdGVyYXRvcihvYmpba2V5XSwga2V5KSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0cztcbiAgICB9LFxuICAgIGZpbHRlcjogZmlsdGVyLFxuICAgIGZvckVhY2g6IGZvckVhY2hcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IHBsdXM7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBWZXJiTWV0aG9kcywgZXh0ZW5kLCBmaWx0ZXIsIGZvck93biwgcmVmLCB0b1Byb21pc2UsIHRvUXVlcnlTdHJpbmcsXG4gICAgc2xpY2UgPSBbXS5zbGljZTtcblxuICByZWYgPSByZXF1aXJlKCcuL3BsdXMnKSwgZmlsdGVyID0gcmVmLmZpbHRlciwgZm9yT3duID0gcmVmLmZvck93biwgZXh0ZW5kID0gcmVmLmV4dGVuZDtcblxuICB0b1F1ZXJ5U3RyaW5nID0gcmVxdWlyZSgnLi9oZWxwZXJzL3F1ZXJ5c3RyaW5nJyk7XG5cbiAgdG9Qcm9taXNlID0gZnVuY3Rpb24ob3JpZywgbmV3UHJvbWlzZSkge1xuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBhcmdzLCBsYXN0O1xuICAgICAgYXJncyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICAgICAgbGFzdCA9IGFyZ3NbYXJncy5sZW5ndGggLSAxXTtcbiAgICAgIGlmICh0eXBlb2YgbGFzdCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBhcmdzLnBvcCgpO1xuICAgICAgICByZXR1cm4gb3JpZy5hcHBseShudWxsLCBbbGFzdF0uY29uY2F0KHNsaWNlLmNhbGwoYXJncykpKTtcbiAgICAgIH0gZWxzZSBpZiAobmV3UHJvbWlzZSkge1xuICAgICAgICByZXR1cm4gbmV3UHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICB2YXIgY2I7XG4gICAgICAgICAgY2IgPSBmdW5jdGlvbihlcnIsIHZhbCkge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZSh2YWwpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgcmV0dXJuIG9yaWcuYXBwbHkobnVsbCwgW2NiXS5jb25jYXQoc2xpY2UuY2FsbChhcmdzKSkpO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignWW91IG11c3Qgc3BlY2lmeSBhIGNhbGxiYWNrIG9yIGhhdmUgYSBwcm9taXNlIGxpYnJhcnkgbG9hZGVkJyk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IFZlcmJNZXRob2RzID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIFZlcmJNZXRob2RzKHBsdWdpbnMsIF9yZXF1ZXN0ZXIpIHtcbiAgICAgIHZhciBpLCBqLCBsZW4sIGxlbjEsIHBsdWdpbiwgcHJvbWlzZVBsdWdpbnMsIHJlZjEsIHJlZjI7XG4gICAgICB0aGlzLl9yZXF1ZXN0ZXIgPSBfcmVxdWVzdGVyO1xuICAgICAgaWYgKCF0aGlzLl9yZXF1ZXN0ZXIpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdPY3Rva2F0IEJVRzogcmVxdWVzdCBpcyByZXF1aXJlZCcpO1xuICAgICAgfVxuICAgICAgcHJvbWlzZVBsdWdpbnMgPSBmaWx0ZXIocGx1Z2lucywgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHZhciBwcm9taXNlQ3JlYXRvcjtcbiAgICAgICAgcHJvbWlzZUNyZWF0b3IgPSBhcmcucHJvbWlzZUNyZWF0b3I7XG4gICAgICAgIHJldHVybiBwcm9taXNlQ3JlYXRvcjtcbiAgICAgIH0pO1xuICAgICAgaWYgKHByb21pc2VQbHVnaW5zKSB7XG4gICAgICAgIHRoaXMuX3Byb21pc2VQbHVnaW4gPSBwcm9taXNlUGx1Z2luc1swXTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3N5bmNWZXJicyA9IHt9O1xuICAgICAgcmVmMSA9IGZpbHRlcihwbHVnaW5zLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgdmFyIHZlcmJzO1xuICAgICAgICB2ZXJicyA9IGFyZy52ZXJicztcbiAgICAgICAgcmV0dXJuIHZlcmJzO1xuICAgICAgfSk7XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYxLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIHBsdWdpbiA9IHJlZjFbaV07XG4gICAgICAgIGV4dGVuZCh0aGlzLl9zeW5jVmVyYnMsIHBsdWdpbi52ZXJicyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9hc3luY1ZlcmJzID0ge307XG4gICAgICByZWYyID0gZmlsdGVyKHBsdWdpbnMsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICB2YXIgYXN5bmNWZXJicztcbiAgICAgICAgYXN5bmNWZXJicyA9IGFyZy5hc3luY1ZlcmJzO1xuICAgICAgICByZXR1cm4gYXN5bmNWZXJicztcbiAgICAgIH0pO1xuICAgICAgZm9yIChqID0gMCwgbGVuMSA9IHJlZjIubGVuZ3RoOyBqIDwgbGVuMTsgaisrKSB7XG4gICAgICAgIHBsdWdpbiA9IHJlZjJbal07XG4gICAgICAgIGV4dGVuZCh0aGlzLl9hc3luY1ZlcmJzLCBwbHVnaW4uYXN5bmNWZXJicyk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgVmVyYk1ldGhvZHMucHJvdG90eXBlLmluamVjdFZlcmJNZXRob2RzID0gZnVuY3Rpb24ocGF0aCwgb2JqKSB7XG4gICAgICB2YXIgYWxsUHJvbWlzZXMsIG5ld1Byb21pc2UsIHJlZjE7XG4gICAgICBpZiAodGhpcy5fcHJvbWlzZVBsdWdpbikge1xuICAgICAgICByZWYxID0gdGhpcy5fcHJvbWlzZVBsdWdpbi5wcm9taXNlQ3JlYXRvciwgbmV3UHJvbWlzZSA9IHJlZjEubmV3UHJvbWlzZSwgYWxsUHJvbWlzZXMgPSByZWYxLmFsbFByb21pc2VzO1xuICAgICAgfVxuICAgICAgb2JqLnVybCA9IHBhdGg7XG4gICAgICBmb3JPd24odGhpcy5fc3luY1ZlcmJzLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZlcmJGdW5jLCB2ZXJiTmFtZSkge1xuICAgICAgICAgIHJldHVybiBvYmpbdmVyYk5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYXJncywgbWFrZVJlcXVlc3Q7XG4gICAgICAgICAgICBhcmdzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gICAgICAgICAgICBtYWtlUmVxdWVzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICB2YXIgY2IsIGRhdGEsIG1ldGhvZCwgb3B0aW9ucywgb3JpZ2luYWxBcmdzLCByZWYyO1xuICAgICAgICAgICAgICBjYiA9IGFyZ3VtZW50c1swXSwgb3JpZ2luYWxBcmdzID0gMiA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpIDogW107XG4gICAgICAgICAgICAgIHJlZjIgPSB2ZXJiRnVuYy5hcHBseShudWxsLCBbcGF0aF0uY29uY2F0KHNsaWNlLmNhbGwob3JpZ2luYWxBcmdzKSkpLCBtZXRob2QgPSByZWYyLm1ldGhvZCwgcGF0aCA9IHJlZjIucGF0aCwgZGF0YSA9IHJlZjIuZGF0YSwgb3B0aW9ucyA9IHJlZjIub3B0aW9ucztcbiAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLl9yZXF1ZXN0ZXIucmVxdWVzdChtZXRob2QsIHBhdGgsIGRhdGEsIG9wdGlvbnMsIGNiKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICByZXR1cm4gdG9Qcm9taXNlKG1ha2VSZXF1ZXN0LCBuZXdQcm9taXNlKS5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgICAgcmV0dXJuIGZvck93bih0aGlzLl9hc3luY1ZlcmJzLCAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZlcmJGdW5jLCB2ZXJiTmFtZSkge1xuICAgICAgICAgIHJldHVybiBvYmpbdmVyYk5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYXJncywgbWFrZVJlcXVlc3Q7XG4gICAgICAgICAgICBhcmdzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gICAgICAgICAgICBtYWtlUmVxdWVzdCA9IHZlcmJGdW5jKF90aGlzLl9yZXF1ZXN0ZXIsIHBhdGgpO1xuICAgICAgICAgICAgcmV0dXJuIHRvUHJvbWlzZShtYWtlUmVxdWVzdCwgbmV3UHJvbWlzZSkuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfTtcbiAgICAgIH0pKHRoaXMpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFZlcmJNZXRob2RzO1xuXG4gIH0pKCk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5mb3JFYWNoYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KSA9PT0gZmFsc2UpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXJyYXk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gYXJyYXlFYWNoO1xuIiwiLyoqXG4gKiBBIHNwZWNpYWxpemVkIHZlcnNpb24gb2YgYF8uZmlsdGVyYCBmb3IgYXJyYXlzIHdpdGhvdXQgc3VwcG9ydCBmb3IgY2FsbGJhY2tcbiAqIHNob3J0aGFuZHMgYW5kIGB0aGlzYCBiaW5kaW5nLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7QXJyYXl9IFJldHVybnMgdGhlIG5ldyBmaWx0ZXJlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlGaWx0ZXIoYXJyYXksIHByZWRpY2F0ZSkge1xuICB2YXIgaW5kZXggPSAtMSxcbiAgICAgIGxlbmd0aCA9IGFycmF5Lmxlbmd0aCxcbiAgICAgIHJlc0luZGV4ID0gLTEsXG4gICAgICByZXN1bHQgPSBbXTtcblxuICB3aGlsZSAoKytpbmRleCA8IGxlbmd0aCkge1xuICAgIHZhciB2YWx1ZSA9IGFycmF5W2luZGV4XTtcbiAgICBpZiAocHJlZGljYXRlKHZhbHVlLCBpbmRleCwgYXJyYXkpKSB7XG4gICAgICByZXN1bHRbKytyZXNJbmRleF0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUZpbHRlcjtcbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJPVVRFUl9ESVJFQ1RJVkVTIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgRGVidWcgfSBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IE1vZGVsLCBzdGF0ZSB9IGZyb20gJy4uL3N0b3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnYXBwJyxcclxuICB0ZW1wbGF0ZVVybDogJ2FwcC9hcHAuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGRpcmVjdGl2ZXM6IFtcclxuICAgIFJPVVRFUl9ESVJFQ1RJVkVTLFxyXG4gICAgRGVidWcsXHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwIHtcclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3Qoc3RhdGUpIHByaXZhdGUgc3RhdGU6IE9ic2VydmFibGU8TW9kZWw+XHJcbiAgKSB7fVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vYXBwLmNvbXBvbmVudCc7IiwibW9kdWxlLmV4cG9ydHM9e1xyXG4gICAgLy8gdW5jb21tZW50IHRoZSBsaW5lIGJlbG93IGFuZCBhZCB5b3VyIGdpdGh1YiB0b2tlbiB0byByYWlzZSBnaXRodWIgcmF0ZSBsaW1pdCBmb3IgdW5hdXRoZW50aWNhdGVkIHVzZXJzXHJcbiAgICAvL1wiZ2l0aHVidG9rZW5cIjogPHlvdXIgZ2l0aHViIHRva2VuIGhlcmU+XHJcbn0iLCJpbXBvcnQgeyBPcGFxdWVUb2tlbiwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCBvY3Rva2F0ID0gcmVxdWlyZSgnb2N0b2thdCcpO1xyXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQsIFJlcG8sIExpc3QsIElzc3VlUXVlcnksIElzc3VlUXVlcnlQYXJhbXMsIExpc3RRdWVyeSB9IGZyb20gJ29jdG9rYXQnO1xyXG5cclxuY29uc3QgUExVR0lOUyA9IFtcclxuICAgIHJlcXVpcmUoJ29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvb2JqZWN0LWNoYWluZXInKSwgXHJcbiAgICByZXF1aXJlKCdvY3Rva2F0L2Rpc3Qvbm9kZS9wbHVnaW5zL3Byb21pc2UvbGlicmFyeS1maXJzdCcpLCBcclxuICAgIHJlcXVpcmUoJ29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvcGF0aC12YWxpZGF0b3InKSwgXHJcbiAgICByZXF1aXJlKCdvY3Rva2F0L2Rpc3Qvbm9kZS9wbHVnaW5zL2F1dGhvcml6YXRpb24nKSwgXHJcbiAgICByZXF1aXJlKCdvY3Rva2F0L2Rpc3Qvbm9kZS9wbHVnaW5zL3ByZXZpZXctYXBpcycpLCBcclxuICAgIHJlcXVpcmUoJ29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvdXNlLXBvc3QtaW5zdGVhZC1vZi1wYXRjaCcpLCBcclxuICAgIHJlcXVpcmUoJ29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvc2ltcGxlLXZlcmJzJyksIFxyXG4gICAgcmVxdWlyZSgnb2N0b2thdC9kaXN0L25vZGUvcGx1Z2lucy9mZXRjaC1hbGwnKSwgXHJcbiAgICByZXF1aXJlKCdvY3Rva2F0L2Rpc3Qvbm9kZS9wbHVnaW5zL3JlYWQtYmluYXJ5JyksIFxyXG4gICAgcmVxdWlyZSgnb2N0b2thdC9kaXN0L25vZGUvcGx1Z2lucy9wYWdpbmF0aW9uJyksIFxyXG4gICAgLy8gRklYTUU6IGRpc2FibGUgb2N0b2thdCdzIGJ1Z2d5IGNhY2hlIGhhbmRsZXJcclxuICAgIC8vcmVxdWlyZSgnb2N0b2thdC9kaXN0L25vZGUvcGx1Z2lucy9jYWNoZS1oYW5kbGVyJyksIFxyXG4gICAgcmVxdWlyZSgnb2N0b2thdC9kaXN0L25vZGUvcGx1Z2lucy9oeXBlcm1lZGlhJyksIFxyXG4gICAgcmVxdWlyZSgnb2N0b2thdC9kaXN0L25vZGUvcGx1Z2lucy9jYW1lbC1jYXNlJylcclxuXTtcclxuXHJcbmV4cG9ydCBjb25zdCBnaXRodWJ0b2tlbiA9IG5ldyBPcGFxdWVUb2tlbihcImdpdGh1YnRva2VuXCIpO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdpdEh1YlNlcnZpY2Uge1xyXG4gICAgb2N0bzogb2N0b2thdC5PY3Rva2F0O1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIEBJbmplY3QoZ2l0aHVidG9rZW4pIHRva2VuOiBzdHJpbmdcclxuICAgICkge1xyXG4gICAgICAgIHRoaXMub2N0byA9IG9jdG9rYXQoe3Rva2VuLCBwbHVnaW5zOiBQTFVHSU5TfSk7IFxyXG4gICAgfVxyXG5cclxuICAgIHNlYXJjaFJlcG9zKHE6IHN0cmluZyk6IFByb21pc2U8U2VhcmNoUmVzdWx0PFJlcG8+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdpdEh1YlNlcnZpY2UuaGFuZGxlKCdzZWFyY2ggcmVwbycsIChxKSA9PiB0aGlzLm9jdG9cclxuICAgICAgICAgICAgLnNlYXJjaFxyXG4gICAgICAgICAgICAucmVwb3NpdG9yaWVzXHJcbiAgICAgICAgICAgIC5mZXRjaCh7cTpxfSksXHJcbiAgICAgICAgICAgIHFcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIHJlcG8ob3duZXI6IHN0cmluZywgbmFtZTogc3RyaW5nKTogUHJvbWlzZTxSZXBvPiB7XHJcbiAgICAgICAgcmV0dXJuIEdpdEh1YlNlcnZpY2UuaGFuZGxlKCdsb2FkIHJlcG8nLCAob3duZXIsIG5hbWUpID0+IHRoaXMub2N0b1xyXG4gICAgICAgICAgICAucmVwb3Mob3duZXIsIG5hbWUpXHJcbiAgICAgICAgICAgIC5mZXRjaCgpLFxyXG4gICAgICAgICAgICBvd25lciwgbmFtZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgYXN5bmMgaXNzdWVzKG93bmVyOiBzdHJpbmcsIHJlcG9OYW1lOiBzdHJpbmcsIHBhcmFtcz86IElzc3VlUXVlcnlQYXJhbXMpOiBQcm9taXNlPElzc3VlUXVlcnk+IHtcclxuICAgICAgICByZXR1cm4gR2l0SHViU2VydmljZS5oYW5kbGUoJ2xvYWQgaXNzdWVzJywgKG93bmVyLCByZXBvTmFtZSwgcGFyYW1zKSA9PiB0aGlzLm9jdG9cclxuICAgICAgICAgICAgLnJlcG9zKG93bmVyLCByZXBvTmFtZSlcclxuICAgICAgICAgICAgLmlzc3Vlc1xyXG4gICAgICAgICAgICAuZmV0Y2gocGFyYW1zKSxcclxuICAgICAgICAgICAgb3duZXIsIHJlcG9OYW1lLCBwYXJhbXNcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIG1vcmU8SUQsIE8sIFI+KGxpc3Q6IExpc3RRdWVyeTxJRCwgTywgUj4pOiBQcm9taXNlPExpc3RRdWVyeTxJRCwgTywgUj4+IHtcclxuICAgICAgICByZXR1cm4gR2l0SHViU2VydmljZS5oYW5kbGUoJ21vcmUnLCAobGlzdDogTGlzdFF1ZXJ5PElELE8sUj4pID0+IGxpc3RcclxuICAgICAgICAgICAgLm5leHRQYWdlXHJcbiAgICAgICAgICAgIC5mZXRjaCgpLFxyXG4gICAgICAgICAgICBsaXN0XHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhc3luYyBoYW5kbGU8VD4ob3A6IHN0cmluZywgcDogKC4uLmFyZ3M6YW55W10pID0+IFByb21pc2U8VD4sIC4uLmFyZ3M6YW55W10pOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyh7ZmV0Y2hpbmc6b3AsIGFyZ3N9KTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBwKC4uLmFyZ3MpO1xyXG5cclxuICAgICAgICAgICAgLy8gS0xVREdFOiBvY3Rva2F0IGZhaWxzIHRvIHRocm93IHdoZW4gdGhlcmUgaXMgbm8gaW50ZXJuZXQuXHJcbiAgICAgICAgICAgIGlmIChyZXMgYXMgYW55ID09IFwiXCIpIHRocm93IHJlcztcclxuXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHtmZXRjaGVkOm9wLCByZXMsIGFyZ3N9KTtcclxuICAgICAgICAgICAgcmV0dXJuIHJlcztcclxuICAgICAgICB9IGNhdGNoKGVyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1zZyA9IEdpdEh1YlNlcnZpY2UubWVzc2FnZShlcik7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHsnZmV0Y2ggZmFpbGVkJzpvcCwgZXIsIG1zZywgYXJnc30pO1xyXG4gICAgICAgICAgICB0aHJvdyBtc2c7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIG1lc3NhZ2UoZXI6YW55KTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoZXIubWVzc2FnZSkge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IEpTT04ucGFyc2UoZXIubWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoanNvbi5tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGpzb24ubWVzc2FnZSA9PSBcIlZhbGlkYXRpb24gRmFpbGVkXCIgJiYganNvbi5lcnJvcnMgJiYganNvbi5lcnJvcnMubGVuZ3RoID4gMClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpzb24uZXJyb3JzWzBdLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGpzb24ubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXIubWVzc2FnZTtcclxuICAgICAgICAgICAgfSBjYXRjaChlclQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBlci5tZXNzYWdlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBcclxuICAgICAgICByZXR1cm4gXCJBbiBlcnJvciBvY2N1cmVkXCI7XHJcbiAgICB9XHJcbn0iLCJleHBvcnQgeyBTZWFyY2hSZXN1bHQsIFJlcG8sIExpc3QsIExpc3RRdWVyeSwgSXNzdWUsIElzc3VlUXVlcnlQYXJhbXMsIElzc3VlUXVlcnkgfSBmcm9tICdvY3Rva2F0JztcclxuZXhwb3J0ICogZnJvbSAnLi9naXRodWIuc2VydmljZSc7IiwiaW1wb3J0IHsgYm9vdHN0cmFwIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcclxuaW1wb3J0IHsgZGlzYWJsZURlcHJlY2F0ZWRGb3JtcywgcHJvdmlkZUZvcm1zIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBwcm92aWRlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFwcCB9IGZyb20gJy4vYXBwJztcclxuaW1wb3J0IHsgR2l0SHViU2VydmljZSwgZ2l0aHVidG9rZW4gfSBmcm9tICcuL2dpdGh1Yic7XHJcbmltcG9ydCB7IHByb3ZpZGVDb250cm9sbGVyIH0gZnJvbSAnLi9zdG9yZSc7XHJcbmltcG9ydCByb3V0ZXMgZnJvbSAnLi9yb3V0ZXMnO1xyXG5cclxuYm9vdHN0cmFwKEFwcCwgW1xyXG4gICAgZGlzYWJsZURlcHJlY2F0ZWRGb3JtcygpLFxyXG4gICAgcHJvdmlkZUZvcm1zKCksXHJcbiAgICBHaXRIdWJTZXJ2aWNlLFxyXG4gICAgcHJvdmlkZUNvbnRyb2xsZXIoKSxcclxuICAgIHJvdXRlcyxcclxuICAgIHByb3ZpZGUoZ2l0aHVidG9rZW4sIHsgdXNlVmFsdWU6IHJlcXVpcmUoJy4vY29uZmlnLmpzb24nKS5naXRodWJ0b2tlbn0pLFxyXG5dKVxyXG4uY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoZXJyKSk7IiwiZXhwb3J0IHsgUmVwb0RldGFpbCB9IGZyb20gJy4vcmVwby1kZXRhaWwuY29tcG9uZW50JzsiLCJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUmVwbywgSXNzdWUsIExpc3QgfSBmcm9tICcuLi9naXRodWInO1xyXG5pbXBvcnQgeyBEaXNwYXRjaGVyLCBkaXNwYXRjaGVyLCBGZXRjaE1vcmVJc3N1ZXNBY3Rpb24gfSBmcm9tICcuLi9zdG9yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2lzc3VlLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAncmVwby9pc3N1ZS1saXN0LmNvbXBvbmVudC5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgSXNzdWVMaXN0ICB7XHJcbiAgQElucHV0KCkgcmVwb05hbWU6IHN0cmluZztcclxuICBASW5wdXQoKSBpc3N1ZXM6IExpc3Q8SXNzdWU+O1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoZGlzcGF0Y2hlcikgcHJpdmF0ZSBkaXNwYXRjaGVyOiBEaXNwYXRjaGVyXHJcbiAgKSB7fVxyXG5cclxuICBtb3JlKCkge1xyXG4gICAgdGhpcy5kaXNwYXRjaGVyLm5leHQobmV3IEZldGNoTW9yZUlzc3Vlc0FjdGlvbih0aGlzLnJlcG9OYW1lKSk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE9ic2VydmFibGUsIFN1YnNjcmlwdGlvbiB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBSZXBvLCBJc3N1ZSwgTGlzdCB9IGZyb20gJy4uL2dpdGh1Yic7XHJcbmltcG9ydCB7IE1vZGVsLCBzdGF0ZSwgRGlzcGF0Y2hlciwgZGlzcGF0Y2hlciwgRmV0Y2hNb3JlSXNzdWVzQWN0aW9uLCBTZWxlY3RSZXBvQWN0aW9uIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5pbXBvcnQgeyBJc3N1ZUxpc3QgfSBmcm9tICcuL2lzc3VlLWxpc3QuY29tcG9uZW50JztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAncmVwby1kZXRhaWwnLFxyXG4gIHRlbXBsYXRlVXJsOiAncmVwby9yZXBvLWRldGFpbC5jb21wb25lbnQuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW0lzc3VlTGlzdF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9EZXRhaWwgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHJlcG86IE9ic2VydmFibGU8UmVwbz47XHJcbiAgaXNzdWVzOiBPYnNlcnZhYmxlPExpc3Q8SXNzdWU+PjtcclxuICBmZXRjaGluZzogT2JzZXJ2YWJsZTxib29sZWFuPjtcclxuICBzdWI6IFN1YnNjcmlwdGlvblxyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoZGlzcGF0Y2hlcikgcHJpdmF0ZSBkaXNwYXRjaGVyOiBEaXNwYXRjaGVyLFxyXG4gICAgQEluamVjdChzdGF0ZSkgcHJpdmF0ZSBzdGF0ZTogT2JzZXJ2YWJsZTxNb2RlbD4sXHJcbiAgICBASW5qZWN0KEFjdGl2YXRlZFJvdXRlKSBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZVxyXG4gICkge1xyXG4gICAgY29uc3QgcmVwb0RldGFpbCA9IHN0YXRlLm1hcChzdGF0ZSA9PiBzdGF0ZS5yZXBvQ2FjaGVbc3RhdGUucmVwb0RldGFpbC5zZWxlY3RlZFJlcG9dKTtcclxuICAgIHRoaXMucmVwbyA9IHJlcG9EZXRhaWwubWFwKHN0YXRlID0+IHN0YXRlICYmIHN0YXRlLnJlcG8pO1xyXG4gICAgdGhpcy5pc3N1ZXMgPSByZXBvRGV0YWlsLm1hcChzdGF0ZSA9PiBzdGF0ZSAmJiBzdGF0ZS5pc3N1ZXMpO1xyXG4gICAgdGhpcy5mZXRjaGluZyA9IHJlcG9EZXRhaWwubWFwKHN0YXRlID0+IHN0YXRlICYmIHN0YXRlLmlzRmV0Y2hpbmcpO1xyXG5cclxuICAgIHRoaXMuc3ViID0gcm91dGUucGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICB0aGlzLmRpc3BhdGNoZXIubmV4dChuZXcgU2VsZWN0UmVwb0FjdGlvbihwYXJhbXNbJ293bmVyJ10sIHBhcmFtc1sncmVwbyddKSlcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IHByb3ZpZGVSb3V0ZXIsIFJvdXRlckNvbmZpZyB9ICBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBTZWFyY2hSZXBvIH0gZnJvbSAnLi9zZWFyY2gnO1xyXG5pbXBvcnQgeyBSZXBvRGV0YWlsIH0gZnJvbSAnLi9yZXBvJztcclxuaW1wb3J0IHsgTG9jYXRpb25TdHJhdGVneSwgSGFzaExvY2F0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xyXG5leHBvcnQgZGVmYXVsdCBbXHJcbiAgICBwcm92aWRlUm91dGVyKFtcclxuICAgICAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL3NlYXJjaCcsIHRlcm1pbmFsOiB0cnVlIH0sIFxyXG4gICAgICAgIHsgcGF0aDogJ3NlYXJjaCcsIGNvbXBvbmVudDogU2VhcmNoUmVwbyB9LFxyXG4gICAgICAgIHsgcGF0aDogJ3JlcG8vOm93bmVyLzpyZXBvJywgY29tcG9uZW50OiBSZXBvRGV0YWlsIH0sXHJcbiAgICBdKSxcclxuICAgIHtwcm92aWRlOiBMb2NhdGlvblN0cmF0ZWd5LCB1c2VDbGFzczogSGFzaExvY2F0aW9uU3RyYXRlZ3l9LFxyXG5dOyIsImV4cG9ydCB7IFNlYXJjaFJlcG8gfSBmcm9tICcuL3NlYXJjaC1yZXBvLmNvbXBvbmVudCc7IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJlcG8gfSBmcm9tICcuLi9naXRodWInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdyZXBvLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2VhcmNoL3JlcG8tY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBvQ2FyZCB7XHJcbiAgQElucHV0KCkgcmVwbzogUmVwbztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KFJvdXRlcikgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlclxyXG4gICkge31cclxuXHJcbiAgc2VsZWN0KCkge1xyXG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvcmVwbycsIHRoaXMucmVwby5vd25lci5sb2dpbiwgdGhpcy5yZXBvLm5hbWVdKTtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBPdXRwdXQsIElucHV0LCBJbmplY3QsIE9uRGVzdHJveSwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgU3ViamVjdCwgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEZvcm1Db250cm9sLCBSRUFDVElWRV9GT1JNX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFNlYXJjaEFjdGlvbiwgRGlzcGF0Y2hlciwgZGlzcGF0Y2hlciB9IGZyb20gJy4uL3N0b3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnc2VhcmNoLWJhcicsXHJcbiAgdGVtcGxhdGVVcmw6ICdzZWFyY2gvc2VhcmNoLWJhci5jb21wb25lbnQuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW1JFQUNUSVZFX0ZPUk1fRElSRUNUSVZFU11cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaEJhciBpbXBsZW1lbnRzIE9uRGVzdHJveSB7XHJcbiAgcHJpdmF0ZSB0ZXJtQ29udHJvbDogRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycpO1xyXG4gIHByaXZhdGUgc2VhcmNoQ2xpY2skID0gbmV3IFN1YmplY3Q8dm9pZD4oKTtcclxuICBwcml2YXRlIHN1YjpTdWJzY3JpcHRpb247XHJcblxyXG4gIEBJbnB1dCgpIHRlcm06IHN0cmluZztcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIEBJbmplY3QoZGlzcGF0Y2hlcikgcHJpdmF0ZSBkaXNwYXRjaGVyOiBEaXNwYXRjaGVyXHJcbiAgKSB7XHJcbiAgICBjb25zdCB0ZXJtJCA9ICh0aGlzLnRlcm1Db250cm9sLnZhbHVlQ2hhbmdlcyBhcyBPYnNlcnZhYmxlPHN0cmluZz4pLnNraXAoMSk7XHJcblxyXG4gICAgdGhpcy5zdWIgPSBPYnNlcnZhYmxlLmNvbWJpbmVMYXRlc3QoXHJcbiAgICAgICAgdGVybSQuZGVib3VuY2VUaW1lKDEwMDApLFxyXG4gICAgICAgIHRoaXMuc2VhcmNoQ2xpY2skLnN0YXJ0V2l0aChudWxsKVxyXG4gICAgICApXHJcbiAgICAgIC53aXRoTGF0ZXN0RnJvbSh0ZXJtJCwgKF8sIHRlcm0pID0+IHRlcm0pXHJcbiAgICAgIC5maWx0ZXIodGVybSA9PiB0ZXJtLmxlbmd0aCA+IDApXHJcbiAgICAgIC5kaXN0aW5jdFVudGlsQ2hhbmdlZCgpXHJcbiAgICAgIC5zdWJzY3JpYmUodGVybSA9PiB7XHJcbiAgICAgICAgdGhpcy5kaXNwYXRjaGVyLm5leHQobmV3IFNlYXJjaEFjdGlvbih0ZXJtKSlcclxuICAgICAgfSk7XHJcbiAgfVxyXG5cclxuICBuZ09uRGVzdHJveSgpIHtcclxuICAgIHRoaXMuc3ViLnVuc3Vic2NyaWJlKCk7XHJcbiAgfVxyXG5cclxuICBzZWFyY2hDbGljaygpIHtcclxuICAgIHRoaXMuc2VhcmNoQ2xpY2skLm5leHQobnVsbCk7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIElucHV0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBTZWFyY2hSZXN1bHQsIFJlcG8gfSBmcm9tICcuLi9naXRodWInO1xyXG5pbXBvcnQgeyBSZXBvQ2FyZCB9IGZyb20gJy4vcmVwby1jYXJkLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFNlYXJjaEJhciB9IGZyb20gJy4vc2VhcmNoLWJhci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBzdGF0ZSwgTW9kZWwgfSBmcm9tICcuLi9zdG9yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3NlYXJjaC1yZXBvJyxcclxuICB0ZW1wbGF0ZVVybDogJ3NlYXJjaC9zZWFyY2gtcmVwby5jb21wb25lbnQuaHRtbCcsXHJcbiAgZGlyZWN0aXZlczogW1xyXG4gICAgUmVwb0NhcmQsIFxyXG4gICAgU2VhcmNoQmFyLFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFNlYXJjaFJlcG8ge1xyXG4gIHRlcm06IE9ic2VydmFibGU8c3RyaW5nPjtcclxuICBzZWFyY2hSZXN1bHQ6IE9ic2VydmFibGU8U2VhcmNoUmVzdWx0PFJlcG8+PjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICAgIEBJbmplY3Qoc3RhdGUpIHByaXZhdGUgc3RhdGU6IE9ic2VydmFibGU8TW9kZWw+XHJcbiAgKSB7XHJcbiAgICB0aGlzLnRlcm0gPSBzdGF0ZS5tYXAoc3RhdGUgPT4gc3RhdGUuc2VhcmNoLnRlcm0pO1xyXG4gICAgdGhpcy5zZWFyY2hSZXN1bHQgPSBzdGF0ZS5tYXAoc3RhdGUgPT4gc3RhdGUuc2VhcmNoLnJlc3VsdCk7XHJcbiAgfSBcclxuXHJcbiAgcmVwb0tleShpbmRleDogbnVtYmVyLCByZXBvOiBSZXBvKSB7XHJcbiAgICByZXR1cm4gcmVwby5pZDtcclxuICB9XHJcbn1cclxuIiwiaW1wb3J0IHsgUmVwbywgU2VhcmNoUmVzdWx0LCBJc3N1ZVF1ZXJ5IH0gZnJvbSAnLi4vZ2l0aHViJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRXJyb3JBY3Rpb24geyBlcjogc3RyaW5nIH1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0Vycm9yKGFjdGlvbjogQWN0aW9uKTogYWN0aW9uIGlzIEVycm9yQWN0aW9uIHtcclxuICAgIHJldHVybiAoYWN0aW9uIGFzIEVycm9yQWN0aW9uKS5lciAhPT0gdW5kZWZpbmVkO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgRGlzbWlzc0Vycm9yIHt9XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hBY3Rpb24geyBjb25zdHJ1Y3RvcihwdWJsaWMgdGVybTogc3RyaW5nKSB7fSB9XHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hSZXN1bHRBY3Rpb24gZXh0ZW5kcyBEaXNtaXNzRXJyb3IgeyBjb25zdHJ1Y3RvcihwdWJsaWMgcmVzdWx0OiBTZWFyY2hSZXN1bHQ8UmVwbz4pIHtzdXBlcigpfSB9XHJcbmV4cG9ydCBjbGFzcyBFcnJvckZldGNoaW5nU2VhcmNoUmVzdWx0QWN0aW9uIHsgY29uc3RydWN0b3IocHVibGljIGVyOiBzdHJpbmcpIHt9IH1cclxuZXhwb3J0IGNsYXNzIFNlbGVjdFJlcG9BY3Rpb24geyBjb25zdHJ1Y3RvcihwdWJsaWMgb3duZXI6IHN0cmluZywgcHVibGljIHJlcG86IHN0cmluZykge30gfVxyXG5leHBvcnQgY2xhc3MgUmVwb0ZldGNoZWRBY3Rpb24gZXh0ZW5kcyBEaXNtaXNzRXJyb3IgeyBjb25zdHJ1Y3RvcihwdWJsaWMgcmVwb05hbWU6IHN0cmluZywgcHVibGljIHJlcG86IFJlcG8sIHB1YmxpYyBpc3N1ZXM6IElzc3VlUXVlcnkpIHtzdXBlcigpfSB9XHJcbmV4cG9ydCBjbGFzcyBFcnJvckZldGNoaW5nUmVwb0FjdGlvbiB7IGNvbnN0cnVjdG9yKHB1YmxpYyByZXBvTmFtZTogc3RyaW5nLCBwdWJsaWMgZXI6IHN0cmluZykge30gfVxyXG5leHBvcnQgY2xhc3MgRmV0Y2hNb3JlSXNzdWVzQWN0aW9uIHsgY29uc3RydWN0b3IocHVibGljIHJlcG9OYW1lOiBzdHJpbmcpIHt9IH1cclxuZXhwb3J0IGNsYXNzIE1vcmVJc3N1ZXNGZXRjaGVkQWN0aW9uIGV4dGVuZHMgRGlzbWlzc0Vycm9yIHsgY29uc3RydWN0b3IocHVibGljIHJlcG9OYW1lOiBzdHJpbmcsIHB1YmxpYyBpc3N1ZXM6IElzc3VlUXVlcnkpIHtzdXBlcigpfSB9XHJcbmV4cG9ydCBjbGFzcyBFcnJvckZldGNoaW5nTW9yZUlzc3Vlc0FjdGlvbiB7IGNvbnN0cnVjdG9yKHB1YmxpYyByZXBvTmFtZTogc3RyaW5nLCBwdWJsaWMgZXI6IHN0cmluZykge30gfVxyXG5cclxuZXhwb3J0IHR5cGUgQWN0aW9uID0gXHJcbiAgICBEaXNtaXNzRXJyb3JcclxuICAgIHwgU2VhcmNoQWN0aW9uIFxyXG4gICAgfCBTZWFyY2hSZXN1bHRBY3Rpb24gXHJcbiAgICB8IFNlbGVjdFJlcG9BY3Rpb24gXHJcbiAgICB8IFJlcG9GZXRjaGVkQWN0aW9uXHJcbiAgICB8IEVycm9yRmV0Y2hpbmdSZXBvQWN0aW9uXHJcbiAgICB8IEZldGNoTW9yZUlzc3Vlc0FjdGlvblxyXG4gICAgfCBFcnJvckZldGNoaW5nTW9yZUlzc3Vlc0FjdGlvblxyXG47XHJcblxyXG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBHaXRIdWJTZXJ2aWNlLCBSZXBvLCBTZWFyY2hSZXN1bHQsIElzc3VlUXVlcnkgfSBmcm9tICcuLi9naXRodWInO1xyXG5pbXBvcnQgeyBkaXNwYXRjaGVyLCBEaXNwYXRjaGVyIH0gZnJvbSAnLi9jb3JlJztcclxuaW1wb3J0ICogYXMgQWN0aW9uIGZyb20gJy4vYWN0aW9uJztcclxuaW1wb3J0ICogYXMgTW9kZWwgZnJvbSAnLi9tb2RlbCc7IFxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRyb2xsZXIge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgQEluamVjdChkaXNwYXRjaGVyKSBwcml2YXRlIGRpc3BhdGNoZXI6IERpc3BhdGNoZXIsXHJcbiAgICAgICAgQEluamVjdChHaXRIdWJTZXJ2aWNlKSBwcml2YXRlIGdpdGh1YnNlcnZpY2U6IEdpdEh1YlNlcnZpY2VcclxuICAgICkge31cclxuXHJcbiAgICBlcnJvcihpbml0OiBzdHJpbmcsIGFjdGlvbnM6IE9ic2VydmFibGU8QWN0aW9uLkFjdGlvbj4pOiBPYnNlcnZhYmxlPHN0cmluZz4ge1xyXG4gICAgICAgIHJldHVybiBhY3Rpb25zLnNjYW4oKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKEFjdGlvbi5pc0Vycm9yKGFjdGlvbikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhY3Rpb24uZXI7XHJcbiAgICAgICAgICAgIH0gXHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24gaW5zdGFuY2VvZiBBY3Rpb24uRGlzbWlzc0Vycm9yKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LCBpbml0KTtcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2goaW5pdDogTW9kZWwuU2VhcmNoTW9kZWwsIGFjdGlvbnM6IE9ic2VydmFibGU8QWN0aW9uLkFjdGlvbj4pOiBPYnNlcnZhYmxlPE1vZGVsLlNlYXJjaE1vZGVsPiB7XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbnMuc2Nhbigoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgQWN0aW9uLlNlYXJjaEFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKHN0YXRlLnRlcm0gIT0gYWN0aW9uLnRlcm0gLyogS0xVREdFICovKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5naXRodWJzZXJ2aWNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWFyY2hSZXBvcyhhY3Rpb24udGVybSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHRoaXMuZGlzcGF0Y2hlci5uZXh0KG5ldyBBY3Rpb24uU2VhcmNoUmVzdWx0QWN0aW9uKHJlcykpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXIgPT4gdGhpcy5kaXNwYXRjaGVyLm5leHQobmV3IEFjdGlvbi5FcnJvckZldGNoaW5nU2VhcmNoUmVzdWx0QWN0aW9uKGVyKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8ubWVyZ2Uoc3RhdGUsIHt0ZXJtOiBhY3Rpb24udGVybX0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgQWN0aW9uLlNlYXJjaFJlc3VsdEFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8ubWVyZ2Uoc3RhdGUsIHtyZXN1bHQ6IF8ucmVwbGFjZShhY3Rpb24ucmVzdWx0KX0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgQWN0aW9uLkVycm9yRmV0Y2hpbmdTZWFyY2hSZXN1bHRBY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfLm1lcmdlKHN0YXRlLCB7cmVzdWx0OiBfLnJlbW92ZSgpfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LCBpbml0KTtcclxuICAgIH1cclxuXHJcbiAgICByZXBvRGV0YWlsKGluaXQ6IE1vZGVsLlJlcG9EZXRhaWxNb2RlbCwgYWN0aW9uczogT2JzZXJ2YWJsZTxBY3Rpb24uQWN0aW9uPik6IE9ic2VydmFibGU8TW9kZWwuUmVwb0RldGFpbE1vZGVsPiB7XHJcbiAgICAgICAgcmV0dXJuIGFjdGlvbnMuc2Nhbigoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgQWN0aW9uLlNlbGVjdFJlcG9BY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfLm1lcmdlKHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRSZXBvOiBhY3Rpb24ub3duZXIgKyAnLycgKyBhY3Rpb24ucmVwbyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSwgaW5pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVwb0NhY2hlKGluaXQ6IE1vZGVsLlJlcG9DYWNoZU1vZGVsLCBhY3Rpb25zOiBPYnNlcnZhYmxlPEFjdGlvbi5BY3Rpb24+KTogT2JzZXJ2YWJsZTxNb2RlbC5SZXBvQ2FjaGVNb2RlbD4ge1xyXG4gICAgICAgIHJldHVybiBhY3Rpb25zLnNjYW4oKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIEFjdGlvbi5TZWxlY3RSZXBvQWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXBvTmFtZSA9IGFjdGlvbi5vd25lciArICcvJyArIGFjdGlvbi5yZXBvO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZVtyZXBvTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2l0aHVic2VydmljZS5yZXBvKGFjdGlvbi5vd25lciwgYWN0aW9uLnJlcG8pLFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2l0aHVic2VydmljZS5pc3N1ZXMoYWN0aW9uLm93bmVyLCBhY3Rpb24ucmVwbywge30pXHJcbiAgICAgICAgICAgICAgICBdKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4oKFtyZXBvLCBpc3N1ZXNdKSA9PiB0aGlzLmRpc3BhdGNoZXIubmV4dChuZXcgQWN0aW9uLlJlcG9GZXRjaGVkQWN0aW9uKHJlcG9OYW1lLCByZXBvLCBpc3N1ZXMpKSlcclxuICAgICAgICAgICAgICAgIC5jYXRjaChlciA9PiB0aGlzLmRpc3BhdGNoZXIubmV4dChuZXcgQWN0aW9uLkVycm9yRmV0Y2hpbmdSZXBvQWN0aW9uKHJlcG9OYW1lLCBlcikpKTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5tZXJnZShzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIFtyZXBvTmFtZV06IHsgaXNGZXRjaGluZzogdHJ1ZSwgcmVwbzogXy5yZW1vdmUoKSwgaXNzdWVzOiBfLnJlbW92ZSgpIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgQWN0aW9uLlJlcG9GZXRjaGVkQWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5tZXJnZShzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIFthY3Rpb24ucmVwb05hbWVdOiB7IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVwbzogXy5yZXBsYWNlKGFjdGlvbi5yZXBvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBfLnJlcGxhY2UoYWN0aW9uLmlzc3VlcyksIFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgQWN0aW9uLkZldGNoTW9yZUlzc3Vlc0FjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyByZXBvTmFtZSB9ID0gYWN0aW9uO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBpc3N1ZXMgfSA9IHN0YXRlW3JlcG9OYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLmdpdGh1YnNlcnZpY2UubW9yZShpc3N1ZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4obW9yZUlzc3VlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vcmVJc3N1ZXMuaXRlbXMudW5zaGlmdCguLi5pc3N1ZXMuaXRlbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoZXIubmV4dChuZXcgQWN0aW9uLk1vcmVJc3N1ZXNGZXRjaGVkQWN0aW9uKHJlcG9OYW1lLCBtb3JlSXNzdWVzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoZXIubmV4dChuZXcgQWN0aW9uLkVycm9yRmV0Y2hpbmdNb3JlSXNzdWVzQWN0aW9uKHJlcG9OYW1lLCBlcikpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiBfLm1lcmdlKHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgW3JlcG9OYW1lXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgQWN0aW9uLk1vcmVJc3N1ZXNGZXRjaGVkQWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5tZXJnZShzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIFthY3Rpb24ucmVwb05hbWVdOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzRmV0Y2hpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc3N1ZXM6IF8ucmVwbGFjZShhY3Rpb24uaXNzdWVzKSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgQWN0aW9uLkVycm9yRmV0Y2hpbmdSZXBvQWN0aW9uIHx8IGFjdGlvbiBpbnN0YW5jZW9mIEFjdGlvbi5FcnJvckZldGNoaW5nTW9yZUlzc3Vlc0FjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8ubWVyZ2Uoc3RhdGUsIHtcclxuICAgICAgICAgICAgICAgICAgICBbYWN0aW9uLnJlcG9OYW1lXTogXy5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBzdGF0ZTtcclxuICAgICAgICB9LCBpbml0KTtcclxuICAgIH1cclxuXHJcbiAgICByZWR1Y2UoaW5pdDogTW9kZWwuTW9kZWwsIGFjdGlvbnM6IE9ic2VydmFibGU8QWN0aW9uLkFjdGlvbj4pOiBPYnNlcnZhYmxlPE1vZGVsLk1vZGVsPiB7XHJcbiAgICAgICAgY29uc3QgcmVzID0gbmV3IEJlaGF2aW9yU3ViamVjdChpbml0KTtcclxuICAgICAgICBPYnNlcnZhYmxlXHJcbiAgICAgICAgICAgIC56aXAoXHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zLmRvKGFjdGlvbiA9PiBjb25zb2xlLmxvZyh7YWN0aW9ufSkpLFxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5zY2FuKCh2ZXIsIGFjdGlvbnMpID0+IHZlcisxLCBpbml0LnZlciksXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvcihpbml0LmVycm9yLCBhY3Rpb25zKSxcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VhcmNoKGluaXQuc2VhcmNoLCBhY3Rpb25zKSxcclxuICAgICAgICAgICAgICAgIHRoaXMucmVwb0RldGFpbChpbml0LnJlcG9EZXRhaWwsIGFjdGlvbnMpLFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXBvQ2FjaGUoaW5pdC5yZXBvQ2FjaGUsIGFjdGlvbnMpLFxyXG5cclxuICAgICAgICAgICAgICAgIChfLCB2ZXIsIGVycm9yLCBzZWFyY2gsIHJlcG9EZXRhaWwsIHJlcG9DYWNoZSkgPT4gKHt2ZXIsIGVycm9yLCBzZWFyY2gsIHJlcG9EZXRhaWwsIHJlcG9DYWNoZX0pXHJcbiAgICAgICAgICAgIClcclxuICAgICAgICAgICAgLmRvKG1vZGVsID0+IGNvbnNvbGUubG9nKHttb2RlbCwgdmVyOiBtb2RlbC52ZXJ9KSlcclxuICAgICAgICAgICAgLnN1YnNjcmliZShzdGF0ZSA9PiByZXMubmV4dChzdGF0ZSkpO1xyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9wYXF1ZVRva2VuIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vYWN0aW9uJztcclxuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsJztcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U3RhdGUgPSBuZXcgT3BhcXVlVG9rZW4oXCJpbml0U3RhdGVcIik7XHJcbmV4cG9ydCBjb25zdCBkaXNwYXRjaGVyID0gbmV3IE9wYXF1ZVRva2VuKFwiZGlzcGF0Y2hlclwiKTtcclxuZXhwb3J0IGNvbnN0IHN0YXRlID0gbmV3IE9wYXF1ZVRva2VuKFwic3RhdGVcIik7XHJcblxyXG5leHBvcnQgdHlwZSBEaXNwYXRjaGVyID0gT2JzZXJ2ZXI8QWN0aW9uPjtcclxuZXhwb3J0IHR5cGUgU3RhdGUgPSBPYnNlcnZhYmxlPE1vZGVsPjtcclxuIiwiaW1wb3J0IHsgU3ViamVjdCwgT2JzZXJ2YWJsZSwgT2JzZXJ2ZXIgfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgT3BhcXVlVG9rZW4sIEluamVjdCwgcHJvdmlkZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBpbml0U3RhdGUsIGRpc3BhdGNoZXIsIHN0YXRlIH0gZnJvbSAnLi9jb3JlJztcclxuaW1wb3J0IHsgQWN0aW9uIH0gZnJvbSAnLi9hY3Rpb24nO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVyJztcclxuXHJcbmV4cG9ydCAqIGZyb20gJy4vY29yZSc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWwnO1xyXG5leHBvcnQgKiBmcm9tICcuL2FjdGlvbic7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcHJvdmlkZUNvbnRyb2xsZXIoKSB7XHJcbiAgICBjb25zdCBpbml0OiBNb2RlbCA9IHtcclxuICAgICAgICB2ZXI6IDAsXHJcbiAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgc2VhcmNoOiB7XHJcbiAgICAgICAgICAgIHRlcm06JycsIFxyXG4gICAgICAgICAgICByZXN1bHQ6IG51bGwsXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgcmVwb0RldGFpbDoge1xyXG4gICAgICAgICAgICBzZWxlY3RlZFJlcG86IG51bGwsXHJcbiAgICAgICAgfSwgXHJcbiAgICAgICAgcmVwb0NhY2hlOiB7fSxcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIFtcclxuICAgICAgICBwcm92aWRlKGluaXRTdGF0ZSwge3VzZVZhbHVlOiBpbml0fSksXHJcbiAgICAgICAgcHJvdmlkZShkaXNwYXRjaGVyLCB7dXNlVmFsdWU6IG5ldyBTdWJqZWN0PEFjdGlvbj4obnVsbCl9KSxcclxuICAgICAgICBDb250cm9sbGVyLFxyXG4gICAgICAgIHByb3ZpZGUoc3RhdGUsIHtcclxuICAgICAgICAgICAgdXNlRmFjdG9yeTogKGNvbnRyb2xsZXI6IENvbnRyb2xsZXIsIGluaXRTdGF0ZTogTW9kZWwsIGRpc3BhdGNoZXI6IE9ic2VydmFibGU8QWN0aW9uPikgPT4gY29udHJvbGxlci5yZWR1Y2UoaW5pdFN0YXRlLCBkaXNwYXRjaGVyKSwgXHJcbiAgICAgICAgICAgIGRlcHM6IFtDb250cm9sbGVyLCBuZXcgSW5qZWN0KGluaXRTdGF0ZSksIG5ldyBJbmplY3QoZGlzcGF0Y2hlcildXHJcbiAgICAgICAgfSlcclxuICAgIF07XHJcbn1cclxuIiwiIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2l0SHViU2VydmljZSB9IGZyb20gJy4uL2dpdGh1Yic7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnLi9tZXJnZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2RlYnVnJyxcclxuICB0ZW1wbGF0ZTogYFxyXG4gICAgPGZvcm0gKG5nU3VibWl0KT1cInJ1bihxcXEudmFsdWUpXCIgY2xhc3M9XCJuYXZiYXItZm9ybSBuYXZiYXItbGVmdFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XHJcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNxcXEgY2xhc3M9XCJmb3JtLWNvbnRyb2xcIi8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5FdmFsPC9idXR0b24+XHJcbiAgICA8L2Zvcm0+XHJcbiAgYCxcclxufSlcclxuZXhwb3J0IGNsYXNzIERlYnVnIHtcclxuICBjb25zdHJ1Y3RvcihASW5qZWN0KEdpdEh1YlNlcnZpY2UpIHByaXZhdGUgZ2l0aHVic2VydmljZTogR2l0SHViU2VydmljZSkge31cclxuXHJcbiAgcnVuKHE6IHN0cmluZykge1xyXG4gICAgICB2YXIgZSA9IFwiKGZ1bmN0aW9uIHVubmFtZWQob2N0bywgXyl7cmV0dXJuIFwiK3ErXCI7fSlcIjtcclxuICAgICAgY29uc29sZS5kaXIocSk7XHJcbiAgICAgIHRyeSB7IFxyXG4gICAgICAgIHZhciByID0gZXZhbChlKTtcclxuICAgICAgICByID0gcih0aGlzLmdpdGh1YnNlcnZpY2Uub2N0bywgXyk7XHJcbiAgICAgICAgY29uc29sZS5kaXIocik7XHJcbiAgICAgICAgaWYociAmJiByLnRoZW4pIHIudGhlbigobzphbnkpPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJhc3luYyBmcm9tIFwiICsgcSk7XHJcbiAgICAgICAgICBjb25zb2xlLmRpcihvKTtcclxuICAgICAgICB9KTsgXHJcbiAgICAgIH0gY2F0Y2goZXIpIHtcclxuICAgICAgICBjb25zb2xlLmRpcihlcik7XHJcbiAgICAgIH1cclxuICB9XHJcbn1cclxuIiwiZXhwb3J0ICogZnJvbSAnLi9yZXN1bHQnO1xyXG5leHBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4vZGVidWcuY29tcG9uZW50JztcclxuZXhwb3J0ICogZnJvbSAnLi9tZXJnZSc7XHJcbiIsImltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZXBsYWNlPFQ+KG86IFQpOiBUIHtcclxuICAgIHJldHVybiBfLm1lcmdlKG8sIHtfX3JlcGxhY2U6IHRydWV9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZSgpOiBhbnkge1xyXG4gICAgcmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZTxUPihcclxuICAgIHNyYzE6IFQsXHJcbiAgICAuLi5zcmNOOiBhbnlbXVxyXG4pOiBUIFxyXG57XHJcbiAgICByZXR1cm4gKF8gYXMgYW55KS5tZXJnZVdpdGgoe30sIHNyYzEsIC4uLnNyY04sIChkZXN0OiBhbnksIHNyYzogYW55LCBrZXk6IGFueSkgPT4ge1xyXG4gICAgICAgIGlmIChzcmMpIHtcclxuICAgICAgICAgICAgaWYgKHNyYy5fX3JlcGxhY2UpIHtcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBzcmMuX19yZXBsYWNlO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHNyYztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfSlcclxufVxyXG4iLCJpbnRlcmZhY2UgRmFpbHVyZSB7XHJcbiAgICBlcnJvcjogYW55O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3VjY2VzczxUPiB7XHJcbiAgICBzdWNjZXNzOiBUO1xyXG59XHJcblxyXG5leHBvcnQgdHlwZSBSZXN1bHQ8VD4gPSBGYWlsdXJlIHwgU3VjY2VzczxUPjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBmYWlsPFQ+KGVycm9yOiBhbnkpOiBSZXN1bHQ8VD4ge1xyXG4gICAgcmV0dXJuIHtlcnJvcjogZXJyb3J9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc3VjY2VzczxUPih2YWx1ZTogVCk6IFJlc3VsdDxUPiB7XHJcbiAgICByZXR1cm4ge3N1Y2Nlc3M6IHZhbHVlfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1Y2NlZWRlZDxUPihyZXM6IFJlc3VsdDxUPik6IHJlcyBpcyBTdWNjZXNzPFQ+IHtcclxuICAgIHJldHVybiAocmVzIGFzIFN1Y2Nlc3M8VD4pLnN1Y2Nlc3MgIT09IHVuZGVmaW5lZDtcclxufSJdfQ==
