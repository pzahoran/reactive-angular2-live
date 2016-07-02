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
        //changeDetection: ChangeDetectionStrategy.OnPush,
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = [
    router_1.provideRouter([
        { path: '', redirectTo: '/search', terminal: true },
        { path: 'search', component: search_1.SearchRepo },
        { path: 'repo/:owner/:repo', component: repo_1.RepoDetail },
    ]),
];
},{"./repo":34,"./search":38,"@angular/router":"@angular/router"}],38:[function(require,module,exports){
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
        //changeDetection: ChangeDetectionStrategy.OnPush,
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
        const term$ = this.termControl.valueChanges.startWith('');
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
        //changeDetection: ChangeDetectionStrategy.OnPush,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvY2hhaW5lci5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9kZXByZWNhdGUuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvZ3JhbW1hci9vYmplY3QtbWF0Y2hlci5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9ncmFtbWFyL3ByZXZpZXctaGVhZGVycy5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9ncmFtbWFyL3RyZWUtb3B0aW9ucy5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9ncmFtbWFyL3VybC12YWxpZGF0b3IuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvaGVscGVycy9iYXNlNjQuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvaGVscGVycy9wcm9taXNlLWZpbmQtbGlicmFyeS5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9oZWxwZXJzL3Byb21pc2UtZmluZC1uYXRpdmUuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvaGVscGVycy9wcm9taXNlLW5vZGUuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvaGVscGVycy9xdWVyeXN0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9wbHVnaW5zL2F1dGhvcml6YXRpb24uanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvcGx1Z2lucy9jYW1lbC1jYXNlLmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvZmV0Y2gtYWxsLmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvaHlwZXJtZWRpYS5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9wbHVnaW5zL29iamVjdC1jaGFpbmVyLmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvcGFnaW5hdGlvbi5qcyIsIm5vZGVfbW9kdWxlcy9vY3Rva2F0L2Rpc3Qvbm9kZS9wbHVnaW5zL3BhdGgtdmFsaWRhdG9yLmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvcHJldmlldy1hcGlzLmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvcHJvbWlzZS9saWJyYXJ5LWZpcnN0LmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvcmVhZC1iaW5hcnkuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvcGx1Z2lucy9zaW1wbGUtdmVyYnMuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvcGx1Z2lucy91c2UtcG9zdC1pbnN0ZWFkLW9mLXBhdGNoLmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvZGlzdC9ub2RlL3BsdXMuanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9kaXN0L25vZGUvdmVyYi1tZXRob2RzLmpzIiwibm9kZV9tb2R1bGVzL29jdG9rYXQvbm9kZV9tb2R1bGVzL2xvZGFzaC9pbnRlcm5hbC9hcnJheUVhY2guanMiLCJub2RlX21vZHVsZXMvb2N0b2thdC9ub2RlX21vZHVsZXMvbG9kYXNoL2ludGVybmFsL2FycmF5RmlsdGVyLmpzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnRzIiwic3JjL2FwcC9pbmRleC50cyIsInNyYy9jb25maWcuanNvbiIsInNyYy9naXRodWIvZ2l0aHViLnNlcnZpY2UudHMiLCJzcmMvZ2l0aHViL2luZGV4LnRzIiwic3JjL21haW4udHMiLCJzcmMvcmVwby9pbmRleC50cyIsInNyYy9yZXBvL2lzc3VlLWxpc3QuY29tcG9uZW50LnRzIiwic3JjL3JlcG8vcmVwby1kZXRhaWwuY29tcG9uZW50LnRzIiwic3JjL3JvdXRlcy50cyIsInNyYy9zZWFyY2gvaW5kZXgudHMiLCJzcmMvc2VhcmNoL3JlcG8tY2FyZC5jb21wb25lbnQudHMiLCJzcmMvc2VhcmNoL3NlYXJjaC1iYXIuY29tcG9uZW50LnRzIiwic3JjL3NlYXJjaC9zZWFyY2gtcmVwby5jb21wb25lbnQudHMiLCJzcmMvc3RvcmUvYWN0aW9uLnRzIiwic3JjL3N0b3JlL2NvbnRyb2xsZXIudHMiLCJzcmMvc3RvcmUvY29yZS50cyIsInNyYy9zdG9yZS9pbmRleC50cyIsInNyYy90eXBpbmdzLmQudHMiLCJzcmMvdXRpbHMvZGVidWcuY29tcG9uZW50LnRzIiwic3JjL3V0aWxzL2luZGV4LnRzIiwic3JjL3V0aWxzL21lcmdlLnRzIiwic3JjL3V0aWxzL3Jlc3VsdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQ2xCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUN6QkEsdUJBQTJCLE1BQU0sQ0FBQyxDQUFBO0FBQ2xDLHVCQUEyRCxlQUFlLENBQUMsQ0FBQTtBQUMzRSx5QkFBa0MsaUJBQWlCLENBQUMsQ0FBQTtBQUNwRCx3QkFBc0IsVUFBVSxDQUFDLENBQUE7QUFDakMsd0JBQTZCLFVBQVUsQ0FBQyxDQUFBO0FBV3hDO0lBQ0UsWUFDeUIsS0FBd0I7UUFBeEIsVUFBSyxHQUFMLEtBQUssQ0FBbUI7SUFDOUMsQ0FBQztBQUNOLENBQUM7QUFiRDtJQUFDLGdCQUFTLENBQUM7UUFDVCxrREFBa0Q7UUFDbEQsUUFBUSxFQUFFLEtBQUs7UUFDZixXQUFXLEVBQUUsd0JBQXdCO1FBQ3JDLFVBQVUsRUFBRTtZQUNWLDBCQUFpQjtZQUNqQixhQUFLO1NBQ047S0FDRixDQUFDO2VBR0csYUFBTSxDQUFDLGFBQUssQ0FBQzs7T0FIaEI7QUFDVyxXQUFHLE1BSWYsQ0FBQTs7Ozs7O0FDbkJELGlCQUFjLGlCQUFpQixDQUFDLEVBQUE7O0FDQWhDO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBLHVCQUFvQyxlQUFlLENBQUMsQ0FBQTtBQUNwRCxNQUFPLE9BQU8sV0FBVyxTQUFTLENBQUMsQ0FBQztBQUdwQyxNQUFNLE9BQU8sR0FBRztJQUNaLE9BQU8sQ0FBQywwQ0FBMEMsQ0FBQztJQUNuRCxPQUFPLENBQUMsaURBQWlELENBQUM7SUFDMUQsT0FBTyxDQUFDLDBDQUEwQyxDQUFDO0lBQ25ELE9BQU8sQ0FBQyx5Q0FBeUMsQ0FBQztJQUNsRCxPQUFPLENBQUMsd0NBQXdDLENBQUM7SUFDakQsT0FBTyxDQUFDLHFEQUFxRCxDQUFDO0lBQzlELE9BQU8sQ0FBQyx3Q0FBd0MsQ0FBQztJQUNqRCxPQUFPLENBQUMscUNBQXFDLENBQUM7SUFDOUMsT0FBTyxDQUFDLHVDQUF1QyxDQUFDO0lBQ2hELE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQztJQUMvQywrQ0FBK0M7SUFDL0Msc0RBQXNEO0lBQ3RELE9BQU8sQ0FBQyxzQ0FBc0MsQ0FBQztJQUMvQyxPQUFPLENBQUMsc0NBQXNDLENBQUM7Q0FDbEQsQ0FBQztBQUVXLG1CQUFXLEdBQUcsSUFBSSxrQkFBVyxDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBRTFEO0lBR0ksWUFDeUIsS0FBYTtRQUVsQyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxFQUFDLE9BQUEsS0FBSyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FBQyxDQUFDO0lBQ25ELENBQUM7SUFFRCxXQUFXLENBQUMsQ0FBUztRQUNqQixNQUFNLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLElBQUk7YUFDdEQsTUFBTTthQUNOLFlBQVk7YUFDWixLQUFLLENBQUMsRUFBQyxDQUFDLEVBQUMsQ0FBQyxFQUFDLENBQUMsRUFDYixDQUFDLENBQ0osQ0FBQztJQUNOLENBQUM7SUFFSyxJQUFJLENBQUMsS0FBYSxFQUFFLElBQVk7O1lBQ2xDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEtBQUssSUFBSSxDQUFDLElBQUk7aUJBQzlELEtBQUssQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDO2lCQUNsQixLQUFLLEVBQUUsRUFDUixLQUFLLEVBQUUsSUFBSSxDQUNkLENBQUM7UUFDTixDQUFDO0tBQUE7SUFFSyxNQUFNLENBQUMsS0FBYSxFQUFFLFFBQWdCLEVBQUUsTUFBeUI7O1lBQ25FLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsTUFBTSxLQUFLLElBQUksQ0FBQyxJQUFJO2lCQUM1RSxLQUFLLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQztpQkFDdEIsTUFBTTtpQkFDTixLQUFLLENBQUMsTUFBTSxDQUFDLEVBQ2QsS0FBSyxFQUFFLFFBQVEsRUFBRSxNQUFNLENBQzFCLENBQUM7UUFDTixDQUFDO0tBQUE7SUFFSyxJQUFJLENBQVcsSUFBeUI7O1lBQzFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQXVCLEtBQUssSUFBSTtpQkFDaEUsUUFBUTtpQkFDUixLQUFLLEVBQUUsRUFDUixJQUFJLENBQ1AsQ0FBQztRQUNOLENBQUM7S0FBQTtJQUVELE9BQXFCLE1BQU0sQ0FBSSxFQUFVLEVBQUUsQ0FBZ0MsRUFBRSxHQUFHLElBQVU7O1lBQ3RGLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFFLE1BQUEsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUNqQyxJQUFJLENBQUM7Z0JBQ0QsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQztnQkFFN0IsNERBQTREO2dCQUM1RCxFQUFFLENBQUMsQ0FBQyxHQUFVLElBQUksRUFBRSxDQUFDO29CQUFDLE1BQU0sR0FBRyxDQUFDO2dCQUVoQyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUMsT0FBTyxFQUFDLEVBQUUsRUFBRSxLQUFBLEdBQUcsRUFBRSxNQUFBLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQ3JDLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDZixDQUFFO1lBQUEsS0FBSyxDQUFBLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDVCxNQUFNLEdBQUcsR0FBRyxhQUFhLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUN0QyxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUMsY0FBYyxFQUFDLEVBQUUsRUFBRSxJQUFBLEVBQUUsRUFBRSxLQUFBLEdBQUcsRUFBRSxNQUFBLElBQUksRUFBQyxDQUFDLENBQUM7Z0JBQ2hELE1BQU0sR0FBRyxDQUFDO1lBQ2QsQ0FBQztRQUNMLENBQUM7S0FBQTtJQUVELE9BQWUsT0FBTyxDQUFDLEVBQU07UUFDekIsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDYixJQUFJLENBQUM7Z0JBQ0QsTUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQ3BDLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNmLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLElBQUksbUJBQW1CLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7d0JBQzdFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQztvQkFDbEMsSUFBSTt3QkFDQSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztnQkFDNUIsQ0FBQztnQkFBQyxJQUFJO29CQUNGLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQzFCLENBQUU7WUFBQSxLQUFLLENBQUEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUNWLE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO1lBQ3RCLENBQUM7UUFDTCxDQUFDO1FBQ0QsTUFBTSxDQUFDLGtCQUFrQixDQUFDO0lBQzlCLENBQUM7QUFDTCxDQUFDO0FBekVPO2VBQUMsYUFBTSxDQUFDLG1CQUFXLENBQUM7O2lCQUFBO0FBSmYscUJBQWEsZ0JBNkV6QixDQUFBOzs7Ozs7QUNuR0QsaUJBQWMsa0JBQWtCLENBQUMsRUFBQTs7O0FDRGpDLDJDQUEwQixtQ0FBbUMsQ0FBQyxDQUFBO0FBQzlELHdCQUFxRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3RFLHVCQUF3QixlQUFlLENBQUMsQ0FBQTtBQUN4QyxzQkFBb0IsT0FBTyxDQUFDLENBQUE7QUFDNUIseUJBQTJDLFVBQVUsQ0FBQyxDQUFBO0FBQ3RELHdCQUFrQyxTQUFTLENBQUMsQ0FBQTtBQUM1Qyx5QkFBbUIsVUFBVSxDQUFDLENBQUE7QUFFOUIsb0NBQVMsQ0FBQyxTQUFHLEVBQUU7SUFDWCw4QkFBc0IsRUFBRTtJQUN4QixvQkFBWSxFQUFFO0lBQ2Qsc0JBQWE7SUFDYix5QkFBaUIsRUFBRTtJQUNuQixnQkFBTTtJQUNOLGNBQU8sQ0FBQyxvQkFBVyxFQUFFLEVBQUUsUUFBUSxFQUFFLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQyxXQUFXLEVBQUMsQ0FBQztDQUMxRSxDQUFDO0tBQ0QsS0FBSyxDQUFDLEdBQUcsSUFBSSxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7OztBQ2hCbEMsc0NBQTJCLHlCQUF5QixDQUFDO0FBQTVDLHdEQUE0Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQXJELHVCQUFrRSxlQUFlLENBQUMsQ0FBQTtBQUdsRix3QkFBOEQsVUFBVSxDQUFDLENBQUE7QUFNekU7SUFJRSxZQUM4QixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBQ2pELENBQUM7SUFFSixJQUFJO1FBQ0YsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSw2QkFBcUIsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztJQUNqRSxDQUFDO0FBQ0gsQ0FBQztBQVZDO0lBQUMsWUFBSyxFQUFFOzsyQ0FBQTtBQUNSO0lBQUMsWUFBSyxFQUFFOzt5Q0FBQTtBQU5WO0lBQUMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxZQUFZO1FBQ3RCLFdBQVcsRUFBRSxnQ0FBZ0M7S0FDOUMsQ0FBQztlQU1HLGFBQU0sQ0FBQyxrQkFBVSxDQUFDOzthQU5yQjtBQUNXLGlCQUFTLFlBV3JCLENBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ3BCRCx1QkFBeUMsTUFBTSxDQUFDLENBQUE7QUFDaEQsdUJBQTZFLGVBQWUsQ0FBQyxDQUFBO0FBQzdGLHlCQUErQixpQkFBaUIsQ0FBQyxDQUFBO0FBRWpELHdCQUE4RixVQUFVLENBQUMsQ0FBQTtBQUN6Ryx1Q0FBMEIsd0JBQXdCLENBQUMsQ0FBQTtBQU9uRDtJQU1FLFlBQzhCLFVBQXNCLEVBQzNCLEtBQXdCLEVBQ2YsS0FBcUI7UUFGekIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUMzQixVQUFLLEdBQUwsS0FBSyxDQUFtQjtRQUNmLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBRXJELE1BQU0sVUFBVSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO1FBQ3RGLElBQUksQ0FBQyxJQUFJLEdBQUcsVUFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsTUFBTSxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxVQUFVLENBQUMsR0FBRyxDQUFDLEtBQUssSUFBSSxLQUFLLElBQUksS0FBSyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBRW5FLElBQUksQ0FBQyxHQUFHLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsTUFBTTtZQUN0QyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLHdCQUFnQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQzdFLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxDQUFDO0lBQ3pCLENBQUM7QUFDSCxDQUFDO0FBN0JEO0lBQUMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxhQUFhO1FBQ3ZCLFdBQVcsRUFBRSxpQ0FBaUM7UUFDOUMsVUFBVSxFQUFFLENBQUMsZ0NBQVMsQ0FBQztLQUN4QixDQUFDO2VBUUcsYUFBTSxDQUFDLGtCQUFVLENBQUM7ZUFDbEIsYUFBTSxDQUFDLGFBQUssQ0FBQztlQUNiLGFBQU0sQ0FBQyx1QkFBYyxDQUFDOztjQVZ6QjtBQUNXLGtCQUFVLGFBd0J0QixDQUFBOzs7QUNwQ0QseUJBQTZDLGlCQUFpQixDQUFDLENBQUE7QUFDL0QseUJBQTJCLFVBQVUsQ0FBQyxDQUFBO0FBQ3RDLHVCQUEyQixRQUFRLENBQUMsQ0FBQTtBQUNwQztrQkFBZTtJQUNYLHNCQUFhLENBQUM7UUFDVixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFFO1FBQ25ELEVBQUUsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsbUJBQVUsRUFBRTtRQUN6QyxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxTQUFTLEVBQUUsaUJBQVUsRUFBRTtLQUN2RCxDQUFDO0NBQ0wsQ0FBQzs7O0FDVEYsc0NBQTJCLHlCQUF5QixDQUFDO0FBQTVDLHdEQUE0Qzs7Ozs7Ozs7Ozs7Ozs7O0FDQ3JELHVCQUFrRSxlQUFlLENBQUMsQ0FBQTtBQUNsRix5QkFBdUIsaUJBQWlCLENBQUMsQ0FBQTtBQVF6QztJQUdFLFlBQzBCLE1BQWM7UUFBZCxXQUFNLEdBQU4sTUFBTSxDQUFRO0lBQ3JDLENBQUM7SUFFSixNQUFNO1FBQ0osSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUN6RSxDQUFDO0FBQ0gsQ0FBQztBQVRDO0lBQUMsWUFBSyxFQUFFOztzQ0FBQTtBQU5WO0lBQUMsZ0JBQVMsQ0FBQztRQUNULGtEQUFrRDtRQUNsRCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsaUNBQWlDO0tBQy9DLENBQUM7ZUFLRyxhQUFNLENBQUMsZUFBTSxDQUFDOztZQUxqQjtBQUNXLGdCQUFRLFdBVXBCLENBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ3BCRCx1QkFBcUYsZUFBZSxDQUFDLENBQUE7QUFDckcsdUJBQWtELE1BQU0sQ0FBQyxDQUFBO0FBQ3pELHdCQUFzRCxnQkFBZ0IsQ0FBQyxDQUFBO0FBQ3ZFLHdCQUFxRCxVQUFVLENBQUMsQ0FBQTtBQVFoRTtJQU9FLFlBQ2dDLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFQOUMsZ0JBQVcsR0FBZ0IsSUFBSSxtQkFBVyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQy9DLGlCQUFZLEdBQUcsSUFBSSxjQUFPLEVBQVEsQ0FBQztRQVF6QyxNQUFNLEtBQUssR0FBSSxJQUFJLENBQUMsV0FBVyxDQUFDLFlBQW1DLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBRWxGLElBQUksQ0FBQyxHQUFHLEdBQUcsaUJBQVUsQ0FBQyxhQUFhLENBQy9CLEtBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUNsQzthQUNBLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLEVBQUUsSUFBSSxLQUFLLElBQUksQ0FBQzthQUN4QyxNQUFNLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO2FBQy9CLG9CQUFvQixFQUFFO2FBQ3RCLFNBQVMsQ0FBQyxJQUFJO1lBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxvQkFBWSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUE7UUFDOUMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELFdBQVc7UUFDVCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMvQixDQUFDO0FBQ0gsQ0FBQztBQTFCQztJQUFDLFlBQUssRUFBRTs7dUNBQUE7QUFYVjtJQUFDLGdCQUFTLENBQUM7UUFDVCxrREFBa0Q7UUFDbEQsUUFBUSxFQUFFLFlBQVk7UUFDdEIsV0FBVyxFQUFFLGtDQUFrQztRQUMvQyxVQUFVLEVBQUUsQ0FBQyxnQ0FBd0IsQ0FBQztLQUN2QyxDQUFDO2VBU0ssYUFBTSxDQUFDLGtCQUFVLENBQUM7O2FBVHZCO0FBQ1csaUJBQVMsWUErQnJCLENBQUE7Ozs7Ozs7Ozs7Ozs7OztBQzFDRCx1QkFBMkIsTUFBTSxDQUFDLENBQUE7QUFDbEMsdUJBQWtFLGVBQWUsQ0FBQyxDQUFBO0FBRWxGLHNDQUF5Qix1QkFBdUIsQ0FBQyxDQUFBO0FBQ2pELHVDQUEwQix3QkFBd0IsQ0FBQyxDQUFBO0FBQ25ELHdCQUE2QixVQUFVLENBQUMsQ0FBQTtBQVV4QztJQUlFLFlBQzJCLEtBQXdCO1FBQXhCLFVBQUssR0FBTCxLQUFLLENBQW1CO1FBRWpELElBQUksQ0FBQyxJQUFJLEdBQUcsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsWUFBWSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsS0FBSyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELE9BQU8sQ0FBQyxLQUFhLEVBQUUsSUFBVTtRQUMvQixNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUNqQixDQUFDO0FBQ0gsQ0FBQztBQXRCRDtJQUFDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsYUFBYTtRQUN2QixXQUFXLEVBQUUsbUNBQW1DO1FBQ2hELFVBQVUsRUFBRTtZQUNWLDhCQUFRO1lBQ1IsZ0NBQVM7U0FDVjtLQUNGLENBQUM7ZUFNSyxhQUFNLENBQUMsYUFBSyxDQUFDOztjQU5sQjtBQUNXLGtCQUFVLGFBY3RCLENBQUE7OztBQ3pCRCxpQkFBd0IsTUFBYztJQUNsQyxNQUFNLENBQUUsTUFBc0IsQ0FBQyxFQUFFLEtBQUssU0FBUyxDQUFDO0FBQ3BELENBQUM7QUFGZSxlQUFPLFVBRXRCLENBQUE7QUFFRDtBQUEyQixDQUFDO0FBQWYsb0JBQVksZUFBRyxDQUFBO0FBQzVCO0lBQTRCLFlBQW1CLElBQVk7UUFBWixTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUcsQ0FBQztBQUFDLENBQUM7QUFBcEQsb0JBQVksZUFBd0MsQ0FBQTtBQUNqRSxpQ0FBd0MsWUFBWTtJQUFHLFlBQW1CLE1BQTBCO1FBQUcsT0FBTyxDQUFBO1FBQXBDLFdBQU0sR0FBTixNQUFNLENBQW9CO0lBQVUsQ0FBQztBQUFDLENBQUM7QUFBcEcsMEJBQWtCLHFCQUFrRixDQUFBO0FBQ2pIO0lBQStDLFlBQW1CLEVBQVU7UUFBVixPQUFFLEdBQUYsRUFBRSxDQUFRO0lBQUcsQ0FBQztBQUFDLENBQUM7QUFBckUsdUNBQStCLGtDQUFzQyxDQUFBO0FBQ2xGO0lBQWdDLFlBQW1CLEtBQWEsRUFBUyxJQUFZO1FBQWxDLFVBQUssR0FBTCxLQUFLLENBQVE7UUFBUyxTQUFJLEdBQUosSUFBSSxDQUFRO0lBQUcsQ0FBQztBQUFDLENBQUM7QUFBOUUsd0JBQWdCLG1CQUE4RCxDQUFBO0FBQzNGLGdDQUF1QyxZQUFZO0lBQUcsWUFBbUIsUUFBZ0IsRUFBUyxJQUFVLEVBQVMsTUFBa0I7UUFBRyxPQUFPLENBQUE7UUFBeEUsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUFTLFNBQUksR0FBSixJQUFJLENBQU07UUFBUyxXQUFNLEdBQU4sTUFBTSxDQUFZO0lBQVUsQ0FBQztBQUFDLENBQUM7QUFBdkkseUJBQWlCLG9CQUFzSCxDQUFBO0FBQ3BKO0lBQXVDLFlBQW1CLFFBQWdCLEVBQVMsRUFBVTtRQUFuQyxhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQVMsT0FBRSxHQUFGLEVBQUUsQ0FBUTtJQUFHLENBQUM7QUFBQyxDQUFDO0FBQXRGLCtCQUF1QiwwQkFBK0QsQ0FBQTtBQUNuRztJQUFxQyxZQUFtQixRQUFnQjtRQUFoQixhQUFRLEdBQVIsUUFBUSxDQUFRO0lBQUcsQ0FBQztBQUFDLENBQUM7QUFBakUsNkJBQXFCLHdCQUE0QyxDQUFBO0FBQzlFLHNDQUE2QyxZQUFZO0lBQUcsWUFBbUIsUUFBZ0IsRUFBUyxNQUFrQjtRQUFHLE9BQU8sQ0FBQTtRQUFyRCxhQUFRLEdBQVIsUUFBUSxDQUFRO1FBQVMsV0FBTSxHQUFOLE1BQU0sQ0FBWTtJQUFVLENBQUM7QUFBQyxDQUFDO0FBQTFILCtCQUF1QiwwQkFBbUcsQ0FBQTtBQUN2STtJQUE2QyxZQUFtQixRQUFnQixFQUFTLEVBQVU7UUFBbkMsYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUFTLE9BQUUsR0FBRixFQUFFLENBQVE7SUFBRyxDQUFDO0FBQUMsQ0FBQztBQUE1RixxQ0FBNkIsZ0NBQStELENBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ2pCekcsTUFBWSxDQUFDLFdBQU0sVUFBVSxDQUFDLENBQUE7QUFDOUIsdUJBQTRDLE1BQU0sQ0FBQyxDQUFBO0FBQ25ELHVCQUF1QixlQUFlLENBQUMsQ0FBQTtBQUN2Qyx5QkFBOEQsV0FBVyxDQUFDLENBQUE7QUFDMUUsdUJBQXVDLFFBQVEsQ0FBQyxDQUFBO0FBQ2hELE1BQVksTUFBTSxXQUFNLFVBQVUsQ0FBQyxDQUFBO0FBR25DO0lBQ0ksWUFDZ0MsVUFBc0IsRUFDbkIsYUFBNEI7UUFEL0IsZUFBVSxHQUFWLFVBQVUsQ0FBWTtRQUNuQixrQkFBYSxHQUFiLGFBQWEsQ0FBZTtJQUM1RCxDQUFDO0lBRUosS0FBSyxDQUFDLElBQVksRUFBRSxPQUFrQztRQUNsRCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN6QixNQUFNLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQztZQUNyQixDQUFDO1lBQ0QsRUFBRSxDQUFDLENBQUMsTUFBTSxZQUFZLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO2dCQUN4QyxNQUFNLENBQUMsU0FBUyxDQUFDO1lBQ3JCLENBQUM7WUFDRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxNQUFNLENBQUMsSUFBdUIsRUFBRSxPQUFrQztRQUM5RCxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sWUFBWSxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztnQkFDeEMsRUFBRSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxhQUFhO3lCQUNiLFdBQVcsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3lCQUN4QixJQUFJLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLGtCQUFrQixDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7eUJBQ3JFLEtBQUssQ0FBQyxFQUFFLElBQUksSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsK0JBQStCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUMzRixDQUFDO2dCQUNELE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFDLElBQUksRUFBRSxNQUFNLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQztZQUMvQyxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxZQUFZLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7Z0JBQzlDLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFDLE1BQU0sRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsRUFBQyxDQUFDLENBQUM7WUFDOUQsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sWUFBWSxNQUFNLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFDO2dCQUMzRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFBRSxFQUFDLENBQUMsQ0FBQztZQUNoRCxDQUFDO1lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsVUFBVSxDQUFDLElBQTJCLEVBQUUsT0FBa0M7UUFDdEUsTUFBTSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTTtZQUM5QixFQUFFLENBQUMsQ0FBQyxNQUFNLFlBQVksTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQztnQkFDNUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO29CQUNsQixZQUFZLEVBQUUsTUFBTSxDQUFDLEtBQUssR0FBRyxHQUFHLEdBQUcsTUFBTSxDQUFDLElBQUk7aUJBQ2pELENBQUMsQ0FBQztZQUNQLENBQUM7WUFFRCxNQUFNLENBQUMsS0FBSyxDQUFDO1FBQ2pCLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNiLENBQUM7SUFFRCxTQUFTLENBQUMsSUFBMEIsRUFBRSxPQUFrQztRQUNwRSxNQUFNLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUssRUFBRSxNQUFNO1lBQzlCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sWUFBWSxNQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxNQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUVsRCxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNsQixNQUFNLENBQUMsS0FBSyxDQUFDO2dCQUNqQixDQUFDO2dCQUVELE9BQU8sQ0FBQyxHQUFHLENBQUM7b0JBQ1IsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDO29CQUNsRCxJQUFJLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDO2lCQUMzRCxDQUFDO3FCQUNELElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFLE1BQU0sQ0FBQyxLQUFLLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQztxQkFDcEcsS0FBSyxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUVyRixNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7b0JBQ2xCLENBQUMsUUFBUSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFLEVBQUUsTUFBTSxFQUFFLENBQUMsQ0FBQyxNQUFNLEVBQUUsRUFBRTtpQkFDekUsQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sWUFBWSxNQUFNLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxDQUFDO2dCQUM3QyxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7b0JBQ2xCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUNmLFVBQVUsRUFBRSxLQUFLO3dCQUNqQixJQUFJLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO3dCQUM1QixNQUFNLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO3FCQUNuQztpQkFDSixDQUFDLENBQUM7WUFDUCxDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxZQUFZLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pELE1BQU0sRUFBRSxRQUFRLEVBQUUsR0FBRyxNQUFNLENBQUM7Z0JBQzVCLE1BQU0sRUFBRSxNQUFNLEVBQUUsR0FBRyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBRW5DLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQztxQkFDMUIsSUFBSSxDQUFDLFVBQVU7b0JBQ1osVUFBVSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzFDLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksTUFBTSxDQUFDLHVCQUF1QixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO2dCQUNuRixDQUFDLENBQUM7cUJBQ0QsS0FBSyxDQUFDLEVBQUU7b0JBQ0wsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsNkJBQTZCLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pGLENBQUMsQ0FBQyxDQUFDO2dCQUVQLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssRUFBRTtvQkFDbEIsQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDUixVQUFVLEVBQUUsSUFBSTtxQkFDbkI7aUJBQ0osQ0FBQyxDQUFDO1lBQ1AsQ0FBQztZQUVELEVBQUUsQ0FBQyxDQUFDLE1BQU0sWUFBWSxNQUFNLENBQUMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO2dCQUNuRCxNQUFNLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxLQUFLLEVBQUU7b0JBQ2xCLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxFQUFFO3dCQUNmLFVBQVUsRUFBRSxLQUFLO3dCQUNqQixNQUFNLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDO3FCQUNuQztpQkFDSixDQUFDLENBQUE7WUFDTixDQUFDO1lBRUQsRUFBRSxDQUFDLENBQUMsTUFBTSxZQUFZLE1BQU0sQ0FBQyx1QkFBdUIsSUFBSSxNQUFNLFlBQVksTUFBTSxDQUFDLDZCQUE2QixDQUFDLENBQUMsQ0FBQztnQkFDN0csTUFBTSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFO29CQUNsQixDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUFFO2lCQUNoQyxDQUFDLENBQUM7WUFDUCxDQUFDO1lBRUQsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDYixDQUFDO0lBRUQsTUFBTSxDQUFDLElBQWlCLEVBQUUsT0FBa0M7UUFDeEQsTUFBTSxHQUFHLEdBQUcsSUFBSSxzQkFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3RDLGlCQUFVO2FBQ0wsR0FBRyxDQUNBLE9BQU8sQ0FBQyxFQUFFLENBQUMsTUFBTSxJQUFJLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBQyxRQUFBLE1BQU0sRUFBQyxDQUFDLENBQUMsRUFDM0MsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxPQUFPLEtBQUssR0FBRyxHQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBRS9DLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsRUFDL0IsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE9BQU8sQ0FBQyxFQUNqQyxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsT0FBTyxDQUFDLEVBQ3pDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsRUFFdkMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsVUFBVSxFQUFFLFNBQVMsS0FBSyxDQUFDLEVBQUMsS0FBQSxHQUFHLEVBQUUsT0FBQSxLQUFLLEVBQUUsUUFBQSxNQUFNLEVBQUUsWUFBQSxVQUFVLEVBQUUsV0FBQSxTQUFTLEVBQUMsQ0FBQyxDQUNsRzthQUNBLEVBQUUsQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFDLE9BQUEsS0FBSyxFQUFFLEdBQUcsRUFBRSxLQUFLLENBQUMsR0FBRyxFQUFDLENBQUMsQ0FBQzthQUNqRCxTQUFTLENBQUMsS0FBSyxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUN6QyxNQUFNLENBQUMsR0FBRyxDQUFDO0lBQ2YsQ0FBQztBQUNMLENBQUM7QUE1SU87ZUFBQyxhQUFNLENBQUMsaUJBQVUsQ0FBQztlQUNsQixhQUFNLENBQUMsc0JBQWEsQ0FBQzs7Y0FESDtBQUZkLGtCQUFVLGFBOEl0QixDQUFBOzs7QUNySkQsdUJBQTRCLGVBQWUsQ0FBQyxDQUFBO0FBSS9CLGlCQUFTLEdBQUcsSUFBSSxrQkFBVyxDQUFDLFdBQVcsQ0FBQyxDQUFDO0FBQ3pDLGtCQUFVLEdBQUcsSUFBSSxrQkFBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzNDLGFBQUssR0FBRyxJQUFJLGtCQUFXLENBQUMsT0FBTyxDQUFDLENBQUM7Ozs7OztBQ1A5Qyx1QkFBOEMsTUFBTSxDQUFDLENBQUE7QUFDckQsdUJBQTZDLGVBQWUsQ0FBQyxDQUFBO0FBQzdELHVCQUE2QyxRQUFRLENBQUMsQ0FBQTtBQUd0RCw2QkFBMkIsY0FBYyxDQUFDLENBQUE7QUFFMUMsaUJBQWMsUUFBUSxDQUFDLEVBQUE7QUFFdkIsaUJBQWMsVUFBVSxDQUFDLEVBQUE7QUFFekI7SUFDSSxNQUFNLElBQUksR0FBVTtRQUNoQixHQUFHLEVBQUUsQ0FBQztRQUNOLEtBQUssRUFBRSxJQUFJO1FBQ1gsTUFBTSxFQUFFO1lBQ0osSUFBSSxFQUFDLEVBQUU7WUFDUCxNQUFNLEVBQUUsSUFBSTtTQUNmO1FBQ0QsVUFBVSxFQUFFO1lBQ1IsWUFBWSxFQUFFLElBQUk7U0FDckI7UUFDRCxTQUFTLEVBQUUsRUFBRTtLQUNoQixDQUFDO0lBRUYsTUFBTSxDQUFDO1FBQ0gsY0FBTyxDQUFDLGdCQUFTLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUM7UUFDcEMsY0FBTyxDQUFDLGlCQUFVLEVBQUUsRUFBQyxRQUFRLEVBQUUsSUFBSSxjQUFPLENBQVMsSUFBSSxDQUFDLEVBQUMsQ0FBQztRQUMxRCx1QkFBVTtRQUNWLGNBQU8sQ0FBQyxZQUFLLEVBQUU7WUFDWCxVQUFVLEVBQUUsQ0FBQyxVQUFzQixFQUFFLFNBQWdCLEVBQUUsVUFBOEIsS0FBSyxVQUFVLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxVQUFVLENBQUM7WUFDbEksSUFBSSxFQUFFLENBQUMsdUJBQVUsRUFBRSxJQUFJLGFBQU0sQ0FBQyxnQkFBUyxDQUFDLEVBQUUsSUFBSSxhQUFNLENBQUMsaUJBQVUsQ0FBQyxDQUFDO1NBQ3BFLENBQUM7S0FDTCxDQUFDO0FBQ04sQ0FBQztBQXZCZSx5QkFBaUIsb0JBdUJoQyxDQUFBOztBQ2xDRDs7Ozs7Ozs7Ozs7Ozs7O0FDQUEsdUJBQWtDLGVBQWUsQ0FBQyxDQUFBO0FBQ2xELHlCQUE4QixXQUFXLENBQUMsQ0FBQTtBQUMxQyxNQUFZLENBQUMsV0FBTSxTQUFTLENBQUMsQ0FBQTtBQWE3QjtJQUNFLFlBQTJDLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO0lBQUcsQ0FBQztJQUUzRSxHQUFHLENBQUMsQ0FBUztRQUNULElBQUksQ0FBQyxHQUFHLG9DQUFvQyxHQUFDLENBQUMsR0FBQyxLQUFLLENBQUM7UUFDckQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQztZQUNILElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNoQixDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ2xDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQztnQkFBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBSztvQkFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2pCLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBRTtRQUFBLEtBQUssQ0FBQSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDWCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2xCLENBQUM7SUFDTCxDQUFDO0FBQ0gsQ0FBQztBQTdCRDtJQUFDLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsT0FBTztRQUNqQixRQUFRLEVBQUU7Ozs7Ozs7R0FPVDtLQUNGLENBQUM7ZUFFYSxhQUFNLENBQUMsc0JBQWEsQ0FBQzs7U0FGbEM7QUFDVyxhQUFLLFFBa0JqQixDQUFBOzs7Ozs7QUNqQ0QsaUJBQWMsVUFBVSxDQUFDLEVBQUE7QUFDekIsZ0NBQXNCLG1CQUFtQixDQUFDO0FBQWpDLHdDQUFpQztBQUMxQyxpQkFBYyxTQUFTLENBQUMsRUFBQTs7O0FDRnhCLE1BQVksQ0FBQyxXQUFNLFFBQVEsQ0FBQyxDQUFBO0FBRTVCLGlCQUEyQixDQUFJO0lBQzNCLE1BQU0sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFBRSxFQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUMsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFGZSxlQUFPLFVBRXRCLENBQUE7QUFFRDtJQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDaEIsQ0FBQztBQUZlLGNBQU0sU0FFckIsQ0FBQTtBQUVELGVBQ0ksSUFBTyxFQUNQLEdBQUcsSUFBVztJQUdkLE1BQU0sQ0FBRSxDQUFTLENBQUMsU0FBUyxDQUFDLEVBQUUsRUFBRSxJQUFJLEVBQUUsR0FBRyxJQUFJLEVBQUUsQ0FBQyxJQUFTLEVBQUUsR0FBUSxFQUFFLEdBQVE7UUFDekUsRUFBRSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNOLEVBQUUsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixPQUFPLEdBQUcsQ0FBQyxTQUFTLENBQUM7Z0JBQ3JCLE1BQU0sQ0FBQyxHQUFHLENBQUM7WUFDZixDQUFDO1FBQ0wsQ0FBQztRQUNELE1BQU0sQ0FBQyxTQUFTLENBQUM7SUFDckIsQ0FBQyxDQUFDLENBQUE7QUFDTixDQUFDO0FBZGUsYUFBSyxRQWNwQixDQUFBOzs7QUNkRCxjQUF3QixLQUFVO0lBQzlCLE1BQU0sQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsQ0FBQztBQUMxQixDQUFDO0FBRmUsWUFBSSxPQUVuQixDQUFBO0FBRUQsaUJBQTJCLEtBQVE7SUFDL0IsTUFBTSxDQUFDLEVBQUMsT0FBTyxFQUFFLEtBQUssRUFBQyxDQUFDO0FBQzVCLENBQUM7QUFGZSxlQUFPLFVBRXRCLENBQUE7QUFFRCxtQkFBNkIsR0FBYztJQUN2QyxNQUFNLENBQUUsR0FBa0IsQ0FBQyxPQUFPLEtBQUssU0FBUyxDQUFDO0FBQ3JELENBQUM7QUFGZSxpQkFBUyxZQUV4QixDQUFBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIihmdW5jdGlvbigpIHtcbiAgdmFyIENoYWluZXIsIHBsdXMsXG4gICAgc2xpY2UgPSBbXS5zbGljZTtcblxuICBwbHVzID0gcmVxdWlyZSgnLi9wbHVzJyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBDaGFpbmVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIENoYWluZXIoX3ZlcmJNZXRob2RzKSB7XG4gICAgICB0aGlzLl92ZXJiTWV0aG9kcyA9IF92ZXJiTWV0aG9kcztcbiAgICB9XG5cbiAgICBDaGFpbmVyLnByb3RvdHlwZS5jaGFpbiA9IGZ1bmN0aW9uKHBhdGgsIG5hbWUsIGNvbnRleHRUcmVlLCBmbikge1xuICAgICAgdmFyIGZuMTtcbiAgICAgIGlmIChmbiA9PSBudWxsKSB7XG4gICAgICAgIGZuID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3MsIHNlcGFyYXRvcjtcbiAgICAgICAgICAgIGFyZ3MgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgICAgICAgICAgIGlmICghYXJncy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdCVUchIG11c3QgYmUgY2FsbGVkIHdpdGggYXQgbGVhc3Qgb25lIGFyZ3VtZW50Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobmFtZSA9PT0gJ2NvbXBhcmUnKSB7XG4gICAgICAgICAgICAgIHNlcGFyYXRvciA9ICcuLi4nO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgc2VwYXJhdG9yID0gJy8nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNoYWluKHBhdGggKyBcIi9cIiArIChhcmdzLmpvaW4oc2VwYXJhdG9yKSksIG5hbWUsIGNvbnRleHRUcmVlKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9KSh0aGlzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3ZlcmJNZXRob2RzLmluamVjdFZlcmJNZXRob2RzKHBhdGgsIGZuKTtcbiAgICAgIGlmICh0eXBlb2YgZm4gPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGZuID09PSAnb2JqZWN0Jykge1xuICAgICAgICBmbjEgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24obmFtZSkge1xuICAgICAgICAgICAgZGVsZXRlIGZuW3BsdXMuY2FtZWxpemUobmFtZSldO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgcGx1cy5jYW1lbGl6ZShuYW1lKSwge1xuICAgICAgICAgICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICAgICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIF90aGlzLmNoYWluKHBhdGggKyBcIi9cIiArIG5hbWUsIG5hbWUsIGNvbnRleHRUcmVlW25hbWVdKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSkodGhpcyk7XG4gICAgICAgIGZvciAobmFtZSBpbiBjb250ZXh0VHJlZSB8fCB7fSkge1xuICAgICAgICAgIGZuMShuYW1lKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZuO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ2hhaW5lcjtcblxuICB9KSgpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gQ2hhaW5lcjtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBjb25zb2xlICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnNvbGUgIT09IG51bGwgPyB0eXBlb2YgY29uc29sZS53YXJuID09PSBcImZ1bmN0aW9uXCIgPyBjb25zb2xlLndhcm4oXCJPY3Rva2F0IERlcHJlY2F0aW9uOiBcIiArIG1lc3NhZ2UpIDogdm9pZCAwIDogdm9pZCAwO1xuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAncmVwb3MnOiAvXihodHRwcz86XFwvXFwvW15cXC9dKyk/KFxcL2FwaVxcL3YzKT9cXC9yZXBvc1xcL1teXFwvXStcXC9bXlxcL10rJC8sXG4gICAgJ2dpc3RzJzogL14oaHR0cHM/OlxcL1xcL1teXFwvXSspPyhcXC9hcGlcXC92Myk/XFwvZ2lzdHNcXC9bXlxcL10rJC8sXG4gICAgJ2lzc3Vlcyc6IC9eKGh0dHBzPzpcXC9cXC9bXlxcL10rKT8oXFwvYXBpXFwvdjMpP1xcL3JlcG9zXFwvW15cXC9dK1xcL1teXFwvXStcXC8oaXNzdWVzfHB1bGxzKVxcL1teXFwvXSskLyxcbiAgICAndXNlcnMnOiAvXihodHRwcz86XFwvXFwvW15cXC9dKyk/KFxcL2FwaVxcL3YzKT9cXC91c2Vyc1xcL1teXFwvXSskLyxcbiAgICAnb3Jncyc6IC9eKGh0dHBzPzpcXC9cXC9bXlxcL10rKT8oXFwvYXBpXFwvdjMpP1xcL29yZ3NcXC9bXlxcL10rJC8sXG4gICAgJ3RlYW1zJzogL14oaHR0cHM/OlxcL1xcL1teXFwvXSspPyhcXC9hcGlcXC92Myk/XFwvdGVhbXNcXC9bXlxcL10rJC8sXG4gICAgJ3JlcG9zLmNvbW1lbnRzJzogL14oaHR0cHM/OlxcL1xcL1teXFwvXSspPyhcXC9hcGlcXC92Myk/XFwvcmVwb3NcXC9bXlxcL10rXFwvW15cXC9dK1xcL2NvbW1lbnRzXFwvW15cXC9dKyQvXG4gIH07XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICdhcHBsaWNhdGlvbi92bmQuZ2l0aHViLmRyYXgtcHJldmlldytqc29uJzogL14oaHR0cHM/OlxcL1xcL1teXFwvXSspPyhcXC9hcGlcXC92Myk/KFxcL2xpY2Vuc2VzfFxcL2xpY2Vuc2VzXFwvKFteXFwvXSspfFxcL3JlcG9zXFwvKFteXFwvXSspXFwvKFteXFwvXSspKSQvLFxuICAgICdhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnYzLnN0YXIranNvbic6IC9eKGh0dHBzPzpcXC9cXC9bXlxcL10rKT8oXFwvYXBpXFwvdjMpP1xcL3VzZXJzXFwvKFteXFwvXSspXFwvc3RhcnJlZCQvXG4gIH07XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIG1vZHVsZS5leHBvcnRzID0ge1xuICAgICd6ZW4nOiBmYWxzZSxcbiAgICAnb2N0b2NhdCc6IGZhbHNlLFxuICAgICdvcmdhbml6YXRpb25zJzogZmFsc2UsXG4gICAgJ2lzc3Vlcyc6IGZhbHNlLFxuICAgICdlbW9qaXMnOiBmYWxzZSxcbiAgICAnbWFya2Rvd24nOiBmYWxzZSxcbiAgICAnbWV0YSc6IGZhbHNlLFxuICAgICdyYXRlX2xpbWl0JzogZmFsc2UsXG4gICAgJ2ZlZWRzJzogZmFsc2UsXG4gICAgJ2V2ZW50cyc6IGZhbHNlLFxuICAgICdub3RpZmljYXRpb25zJzoge1xuICAgICAgJ3RocmVhZHMnOiB7XG4gICAgICAgICdzdWJzY3JpcHRpb24nOiBmYWxzZVxuICAgICAgfVxuICAgIH0sXG4gICAgJ2dpdGlnbm9yZSc6IHtcbiAgICAgICd0ZW1wbGF0ZXMnOiBmYWxzZVxuICAgIH0sXG4gICAgJ3VzZXInOiB7XG4gICAgICAncmVwb3MnOiBmYWxzZSxcbiAgICAgICdvcmdzJzogZmFsc2UsXG4gICAgICAnZm9sbG93ZXJzJzogZmFsc2UsXG4gICAgICAnZm9sbG93aW5nJzogZmFsc2UsXG4gICAgICAnZW1haWxzJzogZmFsc2UsXG4gICAgICAnaXNzdWVzJzogZmFsc2UsXG4gICAgICAnc3RhcnJlZCc6IGZhbHNlLFxuICAgICAgJ3RlYW1zJzogZmFsc2VcbiAgICB9LFxuICAgICdvcmdzJzoge1xuICAgICAgJ3JlcG9zJzogZmFsc2UsXG4gICAgICAnaXNzdWVzJzogZmFsc2UsXG4gICAgICAnbWVtYmVycyc6IGZhbHNlLFxuICAgICAgJ2V2ZW50cyc6IGZhbHNlLFxuICAgICAgJ3RlYW1zJzogZmFsc2VcbiAgICB9LFxuICAgICd0ZWFtcyc6IHtcbiAgICAgICdtZW1iZXJzJzogZmFsc2UsXG4gICAgICAnbWVtYmVyc2hpcHMnOiBmYWxzZSxcbiAgICAgICdyZXBvcyc6IGZhbHNlXG4gICAgfSxcbiAgICAndXNlcnMnOiB7XG4gICAgICAncmVwb3MnOiBmYWxzZSxcbiAgICAgICdvcmdzJzogZmFsc2UsXG4gICAgICAnZ2lzdHMnOiBmYWxzZSxcbiAgICAgICdmb2xsb3dlcnMnOiBmYWxzZSxcbiAgICAgICdmb2xsb3dpbmcnOiBmYWxzZSxcbiAgICAgICdrZXlzJzogZmFsc2UsXG4gICAgICAnc3RhcnJlZCc6IGZhbHNlLFxuICAgICAgJ3JlY2VpdmVkX2V2ZW50cyc6IHtcbiAgICAgICAgJ3B1YmxpYyc6IGZhbHNlXG4gICAgICB9LFxuICAgICAgJ2V2ZW50cyc6IHtcbiAgICAgICAgJ3B1YmxpYyc6IGZhbHNlLFxuICAgICAgICAnb3Jncyc6IGZhbHNlXG4gICAgICB9LFxuICAgICAgJ3NpdGVfYWRtaW4nOiBmYWxzZSxcbiAgICAgICdzdXNwZW5kZWQnOiBmYWxzZVxuICAgIH0sXG4gICAgJ3NlYXJjaCc6IHtcbiAgICAgICdyZXBvc2l0b3JpZXMnOiBmYWxzZSxcbiAgICAgICdpc3N1ZXMnOiBmYWxzZSxcbiAgICAgICd1c2Vycyc6IGZhbHNlLFxuICAgICAgJ2NvZGUnOiBmYWxzZVxuICAgIH0sXG4gICAgJ2dpc3RzJzoge1xuICAgICAgJ3B1YmxpYyc6IGZhbHNlLFxuICAgICAgJ3N0YXJyZWQnOiBmYWxzZSxcbiAgICAgICdzdGFyJzogZmFsc2UsXG4gICAgICAnY29tbWVudHMnOiBmYWxzZSxcbiAgICAgICdmb3Jrcyc6IGZhbHNlXG4gICAgfSxcbiAgICAncmVwb3MnOiB7XG4gICAgICAncmVhZG1lJzogZmFsc2UsXG4gICAgICAndGFyYmFsbCc6IGZhbHNlLFxuICAgICAgJ3ppcGJhbGwnOiBmYWxzZSxcbiAgICAgICdjb21wYXJlJzogZmFsc2UsXG4gICAgICAnZGVwbG95bWVudHMnOiB7XG4gICAgICAgICdzdGF0dXNlcyc6IGZhbHNlXG4gICAgICB9LFxuICAgICAgJ2hvb2tzJzoge1xuICAgICAgICAndGVzdHMnOiBmYWxzZVxuICAgICAgfSxcbiAgICAgICdhc3NpZ25lZXMnOiBmYWxzZSxcbiAgICAgICdsYW5ndWFnZXMnOiBmYWxzZSxcbiAgICAgICd0ZWFtcyc6IGZhbHNlLFxuICAgICAgJ3RhZ3MnOiBmYWxzZSxcbiAgICAgICdicmFuY2hlcyc6IGZhbHNlLFxuICAgICAgJ2NvbnRyaWJ1dG9ycyc6IGZhbHNlLFxuICAgICAgJ3N1YnNjcmliZXJzJzogZmFsc2UsXG4gICAgICAnc3Vic2NyaXB0aW9uJzogZmFsc2UsXG4gICAgICAnc3RhcmdhemVycyc6IGZhbHNlLFxuICAgICAgJ2NvbW1lbnRzJzogZmFsc2UsXG4gICAgICAnZG93bmxvYWRzJzogZmFsc2UsXG4gICAgICAnZm9ya3MnOiBmYWxzZSxcbiAgICAgICdtaWxlc3RvbmVzJzoge1xuICAgICAgICAnbGFiZWxzJzogZmFsc2VcbiAgICAgIH0sXG4gICAgICAnbGFiZWxzJzogZmFsc2UsXG4gICAgICAncmVsZWFzZXMnOiB7XG4gICAgICAgICdhc3NldHMnOiBmYWxzZSxcbiAgICAgICAgJ2xhdGVzdCc6IGZhbHNlLFxuICAgICAgICAndGFncyc6IGZhbHNlXG4gICAgICB9LFxuICAgICAgJ2V2ZW50cyc6IGZhbHNlLFxuICAgICAgJ25vdGlmaWNhdGlvbnMnOiBmYWxzZSxcbiAgICAgICdtZXJnZXMnOiBmYWxzZSxcbiAgICAgICdzdGF0dXNlcyc6IGZhbHNlLFxuICAgICAgJ3B1bGxzJzoge1xuICAgICAgICAnbWVyZ2UnOiBmYWxzZSxcbiAgICAgICAgJ2NvbW1lbnRzJzogZmFsc2UsXG4gICAgICAgICdjb21taXRzJzogZmFsc2UsXG4gICAgICAgICdmaWxlcyc6IGZhbHNlLFxuICAgICAgICAnZXZlbnRzJzogZmFsc2UsXG4gICAgICAgICdsYWJlbHMnOiBmYWxzZVxuICAgICAgfSxcbiAgICAgICdwYWdlcyc6IHtcbiAgICAgICAgJ2J1aWxkcyc6IHtcbiAgICAgICAgICAnbGF0ZXN0JzogZmFsc2VcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgICdjb21taXRzJzoge1xuICAgICAgICAnY29tbWVudHMnOiBmYWxzZSxcbiAgICAgICAgJ3N0YXR1cyc6IGZhbHNlLFxuICAgICAgICAnc3RhdHVzZXMnOiBmYWxzZVxuICAgICAgfSxcbiAgICAgICdjb250ZW50cyc6IGZhbHNlLFxuICAgICAgJ2NvbGxhYm9yYXRvcnMnOiBmYWxzZSxcbiAgICAgICdpc3N1ZXMnOiB7XG4gICAgICAgICdldmVudHMnOiBmYWxzZSxcbiAgICAgICAgJ2NvbW1lbnRzJzogZmFsc2UsXG4gICAgICAgICdsYWJlbHMnOiBmYWxzZVxuICAgICAgfSxcbiAgICAgICdnaXQnOiB7XG4gICAgICAgICdyZWZzJzoge1xuICAgICAgICAgICdoZWFkcyc6IGZhbHNlLFxuICAgICAgICAgICd0YWdzJzogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgJ3RyZWVzJzogZmFsc2UsXG4gICAgICAgICdibG9icyc6IGZhbHNlLFxuICAgICAgICAnY29tbWl0cyc6IGZhbHNlXG4gICAgICB9LFxuICAgICAgJ3N0YXRzJzoge1xuICAgICAgICAnY29udHJpYnV0b3JzJzogZmFsc2UsXG4gICAgICAgICdjb21taXRfYWN0aXZpdHknOiBmYWxzZSxcbiAgICAgICAgJ2NvZGVfZnJlcXVlbmN5JzogZmFsc2UsXG4gICAgICAgICdwYXJ0aWNpcGF0aW9uJzogZmFsc2UsXG4gICAgICAgICdwdW5jaF9jYXJkJzogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgICdsaWNlbnNlcyc6IGZhbHNlLFxuICAgICdhdXRob3JpemF0aW9ucyc6IHtcbiAgICAgICdjbGllbnRzJzogZmFsc2VcbiAgICB9LFxuICAgICdhcHBsaWNhdGlvbnMnOiB7XG4gICAgICAndG9rZW5zJzogZmFsc2VcbiAgICB9LFxuICAgICdlbnRlcnByaXNlJzoge1xuICAgICAgJ3NldHRpbmdzJzoge1xuICAgICAgICAnbGljZW5zZSc6IGZhbHNlXG4gICAgICB9LFxuICAgICAgJ3N0YXRzJzoge1xuICAgICAgICAnaXNzdWVzJzogZmFsc2UsXG4gICAgICAgICdob29rcyc6IGZhbHNlLFxuICAgICAgICAnbWlsZXN0b25lcyc6IGZhbHNlLFxuICAgICAgICAnb3Jncyc6IGZhbHNlLFxuICAgICAgICAnY29tbWVudHMnOiBmYWxzZSxcbiAgICAgICAgJ3BhZ2VzJzogZmFsc2UsXG4gICAgICAgICd1c2Vycyc6IGZhbHNlLFxuICAgICAgICAnZ2lzdHMnOiBmYWxzZSxcbiAgICAgICAgJ3B1bGxzJzogZmFsc2UsXG4gICAgICAgICdyZXBvcyc6IGZhbHNlLFxuICAgICAgICAnYWxsJzogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuICAgICdzdGFmZic6IHtcbiAgICAgICdpbmRleGluZ19qb2JzJzogZmFsc2VcbiAgICB9LFxuICAgICdzZXR1cCc6IHtcbiAgICAgICdhcGknOiB7XG4gICAgICAgICdzdGFydCc6IGZhbHNlLFxuICAgICAgICAndXBncmFkZSc6IGZhbHNlLFxuICAgICAgICAnY29uZmlnY2hlY2snOiBmYWxzZSxcbiAgICAgICAgJ2NvbmZpZ3VyZSc6IGZhbHNlLFxuICAgICAgICAnc2V0dGluZ3MnOiB7XG4gICAgICAgICAgJ2F1dGhvcml6ZWQta2V5cyc6IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgICdtYWludGVuYW5jZSc6IGZhbHNlXG4gICAgICB9XG4gICAgfVxuICB9O1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICBtb2R1bGUuZXhwb3J0cyA9IC9eKGh0dHBzOlxcL1xcL3N0YXR1cy5naXRodWIuY29tXFwvYXBpXFwvKHN0YXR1cy5qc29ufGxhc3QtbWVzc2FnZS5qc29ufG1lc3NhZ2VzLmpzb24pJCl8KGh0dHBzPzpcXC9cXC9bXlxcL10rKT8oXFwvYXBpXFwvdjMpP1xcLyh6ZW58b2N0b2NhdHx1c2Vyc3xvcmdhbml6YXRpb25zfGlzc3Vlc3xnaXN0c3xlbW9qaXN8bWFya2Rvd258bWV0YXxyYXRlX2xpbWl0fGZlZWRzfGV2ZW50c3xub3RpZmljYXRpb25zfG5vdGlmaWNhdGlvbnNcXC90aHJlYWRzKFxcL1teXFwvXSspfG5vdGlmaWNhdGlvbnNcXC90aHJlYWRzKFxcL1teXFwvXSspXFwvc3Vic2NyaXB0aW9ufGdpdGlnbm9yZVxcL3RlbXBsYXRlcyhcXC9bXlxcL10rKT98dXNlcihcXC9cXGQrKT98dXNlcihcXC9cXGQrKT9cXC8ofHJlcG9zfG9yZ3N8Zm9sbG93ZXJzfGZvbGxvd2luZyhcXC9bXlxcL10rKT98ZW1haWxzKFxcL1teXFwvXSspP3xpc3N1ZXN8c3RhcnJlZHxzdGFycmVkKFxcL1teXFwvXSspezJ9fHRlYW1zKXxvcmdzXFwvW15cXC9dK3xvcmdzXFwvW15cXC9dK1xcLyhyZXBvc3xpc3N1ZXN8bWVtYmVyc3xldmVudHN8dGVhbXMpfHRlYW1zXFwvW15cXC9dK3x0ZWFtc1xcL1teXFwvXStcXC8obWVtYmVycyhcXC9bXlxcL10rKT98bWVtYmVyc2hpcHNcXC9bXlxcL10rfHJlcG9zfHJlcG9zKFxcL1teXFwvXSspezJ9KXx1c2Vyc1xcL1teXFwvXSt8dXNlcnNcXC9bXlxcL10rXFwvKHJlcG9zfG9yZ3N8Z2lzdHN8Zm9sbG93ZXJzfGZvbGxvd2luZyhcXC9bXlxcL10rKXswLDJ9fGtleXN8c3RhcnJlZHxyZWNlaXZlZF9ldmVudHMoXFwvcHVibGljKT98ZXZlbnRzKFxcL3B1YmxpYyk/fGV2ZW50c1xcL29yZ3NcXC9bXlxcL10rKXxzZWFyY2hcXC8ocmVwb3NpdG9yaWVzfGlzc3Vlc3x1c2Vyc3xjb2RlKXxnaXN0c1xcLyhwdWJsaWN8c3RhcnJlZHwoW2EtZjAtOV17MjB9fFswLTldKyl8KFthLWYwLTldezIwfXxbMC05XSspXFwvZm9ya3N8KFthLWYwLTldezIwfXxbMC05XSspXFwvY29tbWVudHMoXFwvWzAtOV0rKT98KFthLWYwLTldezIwfXxbMC05XSspXFwvc3Rhcil8cmVwb3MoXFwvW15cXC9dKyl7Mn18cmVwb3MoXFwvW15cXC9dKyl7Mn1cXC8ocmVhZG1lfHRhcmJhbGwoXFwvW15cXC9dKyk/fHppcGJhbGwoXFwvW15cXC9dKyk/fGNvbXBhcmVcXC8oW15cXC57M31dKylcXC57M30oW15cXC57M31dKyl8ZGVwbG95bWVudHMoXFwvWzAtOV0rKT98ZGVwbG95bWVudHNcXC9bMC05XStcXC9zdGF0dXNlcyhcXC9bMC05XSspP3xob29rc3xob29rc1xcL1teXFwvXSt8aG9va3NcXC9bXlxcL10rXFwvdGVzdHN8YXNzaWduZWVzfGxhbmd1YWdlc3x0ZWFtc3x0YWdzfGJyYW5jaGVzKFxcL1teXFwvXSspezAsMn18Y29udHJpYnV0b3JzfHN1YnNjcmliZXJzfHN1YnNjcmlwdGlvbnxzdGFyZ2F6ZXJzfGNvbW1lbnRzKFxcL1swLTldKyk/fGRvd25sb2FkcyhcXC9bMC05XSspP3xmb3Jrc3xtaWxlc3RvbmVzfG1pbGVzdG9uZXNcXC9bMC05XSt8bWlsZXN0b25lc1xcL1swLTldK1xcL2xhYmVsc3xsYWJlbHMoXFwvW15cXC9dKyk/fHJlbGVhc2VzfHJlbGVhc2VzXFwvKFswLTldKyl8cmVsZWFzZXNcXC8oWzAtOV0rKVxcL2Fzc2V0c3xyZWxlYXNlc1xcL2xhdGVzdHxyZWxlYXNlc1xcL3RhZ3NcXC8oW15cXC9dKyl8cmVsZWFzZXNcXC9hc3NldHNcXC8oWzAtOV0rKXxldmVudHN8bm90aWZpY2F0aW9uc3xtZXJnZXN8c3RhdHVzZXNcXC9bYS1mMC05XXs0MH18cGFnZXN8cGFnZXNcXC9idWlsZHN8cGFnZXNcXC9idWlsZHNcXC9sYXRlc3R8Y29tbWl0c3xjb21taXRzXFwvW2EtZjAtOV17NDB9fGNvbW1pdHNcXC9bYS1mMC05XXs0MH1cXC8oY29tbWVudHN8c3RhdHVzfHN0YXR1c2VzKT98Y29udGVudHNcXC98Y29udGVudHMoXFwvW15cXC9dKykqfGNvbGxhYm9yYXRvcnMoXFwvW15cXC9dKyk/fChpc3N1ZXN8cHVsbHMpfChpc3N1ZXN8cHVsbHMpXFwvKGV2ZW50c3xldmVudHNcXC9bMC05XSt8Y29tbWVudHMoXFwvWzAtOV0rKT98WzAtOV0rfFswLTldK1xcL2V2ZW50c3xbMC05XStcXC9jb21tZW50c3xbMC05XStcXC9sYWJlbHMoXFwvW15cXC9dKyk/KXxwdWxsc1xcL1swLTldK1xcLyhmaWxlc3xjb21taXRzKXxnaXRcXC8ocmVmc3xyZWZzXFwvKC4rfGhlYWRzKFxcL1teXFwvXSspP3x0YWdzKFxcL1teXFwvXSspPyl8dHJlZXMoXFwvW15cXC9dKyk/fGJsb2JzKFxcL1thLWYwLTldezQwfSQpP3xjb21taXRzKFxcL1thLWYwLTldezQwfSQpPyl8c3RhdHNcXC8oY29udHJpYnV0b3JzfGNvbW1pdF9hY3Rpdml0eXxjb2RlX2ZyZXF1ZW5jeXxwYXJ0aWNpcGF0aW9ufHB1bmNoX2NhcmQpKXxsaWNlbnNlc3xsaWNlbnNlc1xcLyhbXlxcL10rKXxhdXRob3JpemF0aW9uc3xhdXRob3JpemF0aW9uc1xcLygoXFxkKyl8Y2xpZW50c1xcLyhbXlxcL117MjB9KXxjbGllbnRzXFwvKFteXFwvXXsyMH0pXFwvKFteXFwvXSspKXxhcHBsaWNhdGlvbnNcXC8oW15cXC9dezIwfSlcXC90b2tlbnN8YXBwbGljYXRpb25zXFwvKFteXFwvXXsyMH0pXFwvdG9rZW5zXFwvKFteXFwvXSspfGVudGVycHJpc2VcXC8oc2V0dGluZ3NcXC9saWNlbnNlfHN0YXRzXFwvKGlzc3Vlc3xob29rc3xtaWxlc3RvbmVzfG9yZ3N8Y29tbWVudHN8cGFnZXN8dXNlcnN8Z2lzdHN8cHVsbHN8cmVwb3N8YWxsKSl8c3RhZmZcXC9pbmRleGluZ19qb2JzfHVzZXJzXFwvW15cXC9dK1xcLyhzaXRlX2FkbWlufHN1c3BlbmRlZCl8c2V0dXBcXC9hcGlcXC8oc3RhcnR8dXBncmFkZXxjb25maWdjaGVja3xjb25maWd1cmV8c2V0dGluZ3MoYXV0aG9yaXplZC1rZXlzKT98bWFpbnRlbmFuY2UpKShcXD8uKik/JC87XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBiYXNlNjRlbmNvZGU7XG5cbiAgaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93ICE9PSBudWxsKSB7XG4gICAgYmFzZTY0ZW5jb2RlID0gd2luZG93LmJ0b2E7XG4gIH0gZWxzZSBpZiAodHlwZW9mIGdsb2JhbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBnbG9iYWwgIT09IG51bGwgPyBnbG9iYWxbJ0J1ZmZlciddIDogdm9pZCAwKSB7XG4gICAgYmFzZTY0ZW5jb2RlID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICB2YXIgYnVmZmVyO1xuICAgICAgYnVmZmVyID0gbmV3IGdsb2JhbFsnQnVmZmVyJ10oc3RyLCAnYmluYXJ5Jyk7XG4gICAgICByZXR1cm4gYnVmZmVyLnRvU3RyaW5nKCdiYXNlNjQnKTtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBFcnJvcignTmF0aXZlIGJ0b2EgZnVuY3Rpb24gb3IgQnVmZmVyIGlzIG1pc3NpbmcnKTtcbiAgfVxuXG4gIG1vZHVsZS5leHBvcnRzID0gYmFzZTY0ZW5jb2RlO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgYWxsUHJvbWlzZXMsIGluamVjdG9yLCBuZXdQcm9taXNlLCByZWYsXG4gICAgc2xpY2UgPSBbXS5zbGljZTtcblxuICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cgIT09IG51bGwpIHtcbiAgICBpZiAod2luZG93LlEpIHtcbiAgICAgIG5ld1Byb21pc2UgPSAoZnVuY3Rpb24oX3RoaXMpIHtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgdmFyIGRlZmVycmVkLCByZWplY3QsIHJlc29sdmU7XG4gICAgICAgICAgZGVmZXJyZWQgPSB3aW5kb3cuUS5kZWZlcigpO1xuICAgICAgICAgIHJlc29sdmUgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5yZXNvbHZlKHZhbCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWplY3QgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGZuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKTtcbiAgICAgIGFsbFByb21pc2VzID0gZnVuY3Rpb24ocHJvbWlzZXMpIHtcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5RLmFsbChwcm9taXNlcyk7XG4gICAgICB9O1xuICAgIH0gZWxzZSBpZiAod2luZG93LmFuZ3VsYXIpIHtcbiAgICAgIG5ld1Byb21pc2UgPSBudWxsO1xuICAgICAgYWxsUHJvbWlzZXMgPSBudWxsO1xuICAgICAgaW5qZWN0b3IgPSBhbmd1bGFyLmluamVjdG9yKFsnbmcnXSk7XG4gICAgICBpbmplY3Rvci5pbnZva2UoZnVuY3Rpb24oJHEpIHtcbiAgICAgICAgbmV3UHJvbWlzZSA9IGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgICAgdmFyIGRlZmVycmVkLCByZWplY3QsIHJlc29sdmU7XG4gICAgICAgICAgZGVmZXJyZWQgPSAkcS5kZWZlcigpO1xuICAgICAgICAgIHJlc29sdmUgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5yZXNvbHZlKHZhbCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWplY3QgPSBmdW5jdGlvbihlcnIpIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZlcnJlZC5yZWplY3QoZXJyKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGZuKHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgcmV0dXJuIGRlZmVycmVkLnByb21pc2U7XG4gICAgICAgIH07XG4gICAgICAgIHJldHVybiBhbGxQcm9taXNlcyA9IGZ1bmN0aW9uKHByb21pc2VzKSB7XG4gICAgICAgICAgcmV0dXJuICRxLmFsbChwcm9taXNlcyk7XG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKChyZWYgPSB3aW5kb3cualF1ZXJ5KSAhPSBudWxsID8gcmVmLkRlZmVycmVkIDogdm9pZCAwKSB7XG4gICAgICBuZXdQcm9taXNlID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihmbikge1xuICAgICAgICAgIHZhciBwcm9taXNlLCByZWplY3QsIHJlc29sdmU7XG4gICAgICAgICAgcHJvbWlzZSA9IHdpbmRvdy5qUXVlcnkuRGVmZXJyZWQoKTtcbiAgICAgICAgICByZXNvbHZlID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICAgICAgICByZXR1cm4gcHJvbWlzZS5yZXNvbHZlKHZhbCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZWplY3QgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgICAgICAgIHJldHVybiBwcm9taXNlLnJlamVjdCh2YWwpO1xuICAgICAgICAgIH07XG4gICAgICAgICAgZm4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICByZXR1cm4gcHJvbWlzZS5wcm9taXNlKCk7XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKTtcbiAgICAgIGFsbFByb21pc2VzID0gKGZ1bmN0aW9uKF90aGlzKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbihwcm9taXNlcykge1xuICAgICAgICAgIHZhciByZWYxO1xuICAgICAgICAgIHJldHVybiAocmVmMSA9IHdpbmRvdy5qUXVlcnkpLndoZW4uYXBwbHkocmVmMSwgcHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgcHJvbWlzZXM7XG4gICAgICAgICAgICBwcm9taXNlcyA9IDEgPD0gYXJndW1lbnRzLmxlbmd0aCA/IHNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSA6IFtdO1xuICAgICAgICAgICAgcmV0dXJuIHByb21pc2VzO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcyk7XG4gICAgfVxuICB9XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbmV3UHJvbWlzZTogbmV3UHJvbWlzZSxcbiAgICBhbGxQcm9taXNlczogYWxsUHJvbWlzZXNcbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIGFsbFByb21pc2VzLCBuZXdQcm9taXNlO1xuXG4gIGlmICh0eXBlb2YgUHJvbWlzZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBQcm9taXNlICE9PSBudWxsKSB7XG4gICAgbmV3UHJvbWlzZSA9IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKGZuKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICBpZiAocmVzb2x2ZS5mdWxmaWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gZm4ocmVzb2x2ZS5yZXNvbHZlLmJpbmQocmVzb2x2ZSksIHJlc29sdmUucmVqZWN0LmJpbmQocmVzb2x2ZSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZm4uYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICB9KSh0aGlzKTtcbiAgICBhbGxQcm9taXNlcyA9IChmdW5jdGlvbihfdGhpcykge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHByb21pc2VzKSB7XG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICB9O1xuICAgIH0pKHRoaXMpO1xuICB9XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbmV3UHJvbWlzZTogbmV3UHJvbWlzZSxcbiAgICBhbGxQcm9taXNlczogYWxsUHJvbWlzZXNcbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIFByb21pc2UsIGFsbFByb21pc2VzLCBuZXdQcm9taXNlLCByZXE7XG5cbiAgcmVxID0gcmVxdWlyZTtcblxuICBQcm9taXNlID0gdGhpcy5Qcm9taXNlIHx8IHJlcSgnZXM2LXByb21pc2UnKS5Qcm9taXNlO1xuXG4gIG5ld1Byb21pc2UgPSBmdW5jdGlvbihmbikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmbik7XG4gIH07XG5cbiAgYWxsUHJvbWlzZXMgPSBmdW5jdGlvbihwcm9taXNlcykge1xuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSB7XG4gICAgbmV3UHJvbWlzZTogbmV3UHJvbWlzZSxcbiAgICBhbGxQcm9taXNlczogYWxsUHJvbWlzZXNcbiAgfTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIHRvUXVlcnlTdHJpbmc7XG5cbiAgdG9RdWVyeVN0cmluZyA9IGZ1bmN0aW9uKG9wdGlvbnMsIG9taXRRdWVzdGlvbk1hcmspIHtcbiAgICB2YXIga2V5LCBwYXJhbXMsIHJlZiwgdmFsdWU7XG4gICAgaWYgKCFvcHRpb25zIHx8IG9wdGlvbnMgPT09IHt9KSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHBhcmFtcyA9IFtdO1xuICAgIHJlZiA9IG9wdGlvbnMgfHwge307XG4gICAgZm9yIChrZXkgaW4gcmVmKSB7XG4gICAgICB2YWx1ZSA9IHJlZltrZXldO1xuICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgIHBhcmFtcy5wdXNoKGtleSArIFwiPVwiICsgKGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtcy5sZW5ndGgpIHtcbiAgICAgIGlmIChvbWl0UXVlc3Rpb25NYXJrKSB7XG4gICAgICAgIHJldHVybiBcIiZcIiArIChwYXJhbXMuam9pbignJicpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBcIj9cIiArIChwYXJhbXMuam9pbignJicpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IHRvUXVlcnlTdHJpbmc7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBBdXRob3JpemF0aW9uLCBiYXNlNjRlbmNvZGU7XG5cbiAgYmFzZTY0ZW5jb2RlID0gcmVxdWlyZSgnLi4vaGVscGVycy9iYXNlNjQnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IG5ldyAoQXV0aG9yaXphdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBBdXRob3JpemF0aW9uKCkge31cblxuICAgIEF1dGhvcml6YXRpb24ucHJvdG90eXBlLnJlcXVlc3RNaWRkbGV3YXJlID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICB2YXIgYXV0aCwgcGFzc3dvcmQsIHJlZiwgdG9rZW4sIHVzZXJuYW1lO1xuICAgICAgcmVmID0gYXJnLmNsaWVudE9wdGlvbnMsIHRva2VuID0gcmVmLnRva2VuLCB1c2VybmFtZSA9IHJlZi51c2VybmFtZSwgcGFzc3dvcmQgPSByZWYucGFzc3dvcmQ7XG4gICAgICBpZiAodG9rZW4gfHwgKHVzZXJuYW1lICYmIHBhc3N3b3JkKSkge1xuICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICBhdXRoID0gXCJ0b2tlbiBcIiArIHRva2VuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGF1dGggPSAnQmFzaWMgJyArIGJhc2U2NGVuY29kZSh1c2VybmFtZSArIFwiOlwiICsgcGFzc3dvcmQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0F1dGhvcml6YXRpb24nOiBhdXRoXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gQXV0aG9yaXphdGlvbjtcblxuICB9KSgpKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIENhbWVsQ2FzZSwgcGx1cztcblxuICBwbHVzID0gcmVxdWlyZSgnLi4vcGx1cycpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gbmV3IChDYW1lbENhc2UgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gQ2FtZWxDYXNlKCkge31cblxuICAgIENhbWVsQ2FzZS5wcm90b3R5cGUucmVzcG9uc2VNaWRkbGV3YXJlID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICB2YXIgZGF0YTtcbiAgICAgIGRhdGEgPSBhcmcuZGF0YTtcbiAgICAgIGRhdGEgPSB0aGlzLnJlcGxhY2UoZGF0YSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9O1xuICAgIH07XG5cbiAgICBDYW1lbENhc2UucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbihkYXRhKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVwbGFjZUFycmF5KGRhdGEpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgZGF0YSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICAgIH0gZWxzZSBpZiAoZGF0YSBpbnN0YW5jZW9mIERhdGUpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEgPT09IE9iamVjdChkYXRhKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVwbGFjZU9iamVjdChkYXRhKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBDYW1lbENhc2UucHJvdG90eXBlLl9yZXBsYWNlT2JqZWN0ID0gZnVuY3Rpb24ob3JpZykge1xuICAgICAgdmFyIGFjYywgaSwga2V5LCBsZW4sIHJlZiwgdmFsdWU7XG4gICAgICBhY2MgPSB7fTtcbiAgICAgIHJlZiA9IE9iamVjdC5rZXlzKG9yaWcpO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGtleSA9IHJlZltpXTtcbiAgICAgICAgdmFsdWUgPSBvcmlnW2tleV07XG4gICAgICAgIHRoaXMuX3JlcGxhY2VLZXlWYWx1ZShhY2MsIGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9O1xuXG4gICAgQ2FtZWxDYXNlLnByb3RvdHlwZS5fcmVwbGFjZUFycmF5ID0gZnVuY3Rpb24ob3JpZykge1xuICAgICAgdmFyIGFyciwgaSwgaXRlbSwga2V5LCBsZW4sIHJlZiwgdmFsdWU7XG4gICAgICBhcnIgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpLCBsZW4sIHJlc3VsdHM7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gb3JpZy5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICAgIGl0ZW0gPSBvcmlnW2ldO1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh0aGlzLnJlcGxhY2UoaXRlbSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHRzO1xuICAgICAgfSkuY2FsbCh0aGlzKTtcbiAgICAgIHJlZiA9IE9iamVjdC5rZXlzKG9yaWcpO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGtleSA9IHJlZltpXTtcbiAgICAgICAgdmFsdWUgPSBvcmlnW2tleV07XG4gICAgICAgIHRoaXMuX3JlcGxhY2VLZXlWYWx1ZShhcnIsIGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFycjtcbiAgICB9O1xuXG4gICAgQ2FtZWxDYXNlLnByb3RvdHlwZS5fcmVwbGFjZUtleVZhbHVlID0gZnVuY3Rpb24oYWNjLCBrZXksIHZhbHVlKSB7XG4gICAgICByZXR1cm4gYWNjW3BsdXMuY2FtZWxpemUoa2V5KV0gPSB0aGlzLnJlcGxhY2UodmFsdWUpO1xuICAgIH07XG5cbiAgICByZXR1cm4gQ2FtZWxDYXNlO1xuXG4gIH0pKCkpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgRmV0Y2hBbGwsIGZldGNoTmV4dFBhZ2UsIGdldE1vcmUsIHB1c2hBbGwsIHRvUXVlcnlTdHJpbmc7XG5cbiAgdG9RdWVyeVN0cmluZyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcXVlcnlzdHJpbmcnKTtcblxuICBwdXNoQWxsID0gZnVuY3Rpb24odGFyZ2V0LCBzb3VyY2UpIHtcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkoc291cmNlKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdPY3Rva2F0IEVycm9yOiBDYWxsaW5nIGZldGNoQWxsIG9uIGEgcmVxdWVzdCB0aGF0IGRvZXMgbm90IHlpZWxkIGFuIGFycmF5Jyk7XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQucHVzaC5hcHBseSh0YXJnZXQsIHNvdXJjZSk7XG4gIH07XG5cbiAgZ2V0TW9yZSA9IGZ1bmN0aW9uKGZldGNoYWJsZSwgcmVxdWVzdGVyLCBhY2MsIGNiKSB7XG4gICAgdmFyIGRvU3R1ZmY7XG4gICAgZG9TdHVmZiA9IGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICAgICAgaWYgKGVycikge1xuICAgICAgICByZXR1cm4gY2IoZXJyKTtcbiAgICAgIH1cbiAgICAgIHB1c2hBbGwoYWNjLCByZXN1bHRzLml0ZW1zKTtcbiAgICAgIHJldHVybiBnZXRNb3JlKHJlc3VsdHMsIHJlcXVlc3RlciwgYWNjLCBjYik7XG4gICAgfTtcbiAgICBpZiAoIWZldGNoTmV4dFBhZ2UoZmV0Y2hhYmxlLCByZXF1ZXN0ZXIsIGRvU3R1ZmYpKSB7XG4gICAgICByZXR1cm4gY2IobnVsbCwgYWNjKTtcbiAgICB9XG4gIH07XG5cbiAgZmV0Y2hOZXh0UGFnZSA9IGZ1bmN0aW9uKG9iaiwgcmVxdWVzdGVyLCBjYikge1xuICAgIGlmICh0eXBlb2Ygb2JqLm5leHRfcGFnZV91cmwgPT09ICdzdHJpbmcnKSB7XG4gICAgICByZXF1ZXN0ZXIucmVxdWVzdCgnR0VUJywgb2JqLm5leHRfcGFnZSwgbnVsbCwgbnVsbCwgY2IpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIGlmIChvYmoubmV4dF9wYWdlKSB7XG4gICAgICBvYmoubmV4dF9wYWdlLmZldGNoKGNiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iai5uZXh0UGFnZVVybCA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJlcXVlc3Rlci5yZXF1ZXN0KCdHRVQnLCBvYmoubmV4dFBhZ2VVcmwsIG51bGwsIG51bGwsIGNiKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSBpZiAob2JqLm5leHRQYWdlKSB7XG4gICAgICBvYmoubmV4dFBhZ2UuZmV0Y2goY2IpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH07XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBuZXcgKEZldGNoQWxsID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEZldGNoQWxsKCkge31cblxuICAgIEZldGNoQWxsLnByb3RvdHlwZS5hc3luY1ZlcmJzID0ge1xuICAgICAgZmV0Y2hBbGw6IGZ1bmN0aW9uKHJlcXVlc3RlciwgcGF0aCkge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24oY2IsIHF1ZXJ5KSB7XG4gICAgICAgICAgcmV0dXJuIHJlcXVlc3Rlci5yZXF1ZXN0KCdHRVQnLCBcIlwiICsgcGF0aCArICh0b1F1ZXJ5U3RyaW5nKHF1ZXJ5KSksIG51bGwsIG51bGwsIGZ1bmN0aW9uKGVyciwgcmVzdWx0cykge1xuICAgICAgICAgICAgdmFyIGFjYztcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNiKGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhY2MgPSBbXTtcbiAgICAgICAgICAgIHB1c2hBbGwoYWNjLCByZXN1bHRzLml0ZW1zKTtcbiAgICAgICAgICAgIHJldHVybiBnZXRNb3JlKHJlc3VsdHMsIHJlcXVlc3RlciwgYWNjLCBjYik7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBGZXRjaEFsbDtcblxuICB9KSgpKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIEh5cGVyTWVkaWEsIGRlcHJlY2F0ZSxcbiAgICBzbGljZSA9IFtdLnNsaWNlO1xuXG4gIGRlcHJlY2F0ZSA9IHJlcXVpcmUoJy4uL2RlcHJlY2F0ZScpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gbmV3IChIeXBlck1lZGlhID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIEh5cGVyTWVkaWEoKSB7fVxuXG4gICAgSHlwZXJNZWRpYS5wcm90b3R5cGUucmVwbGFjZSA9IGZ1bmN0aW9uKGluc3RhbmNlLCBkYXRhKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcmVwbGFjZUFycmF5KGluc3RhbmNlLCBkYXRhKTtcbiAgICAgIH0gZWxzZSBpZiAodHlwZW9mIGRhdGEgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9IGVsc2UgaWYgKGRhdGEgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgfSBlbHNlIGlmIChkYXRhID09PSBPYmplY3QoZGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3JlcGxhY2VPYmplY3QoaW5zdGFuY2UsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICB9XG4gICAgfTtcblxuICAgIEh5cGVyTWVkaWEucHJvdG90eXBlLl9yZXBsYWNlT2JqZWN0ID0gZnVuY3Rpb24oaW5zdGFuY2UsIG9yaWcpIHtcbiAgICAgIHZhciBhY2MsIGksIGtleSwgbGVuLCByZWYsIHZhbHVlO1xuICAgICAgYWNjID0ge307XG4gICAgICByZWYgPSBPYmplY3Qua2V5cyhvcmlnKTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZi5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBrZXkgPSByZWZbaV07XG4gICAgICAgIHZhbHVlID0gb3JpZ1trZXldO1xuICAgICAgICB0aGlzLl9yZXBsYWNlS2V5VmFsdWUoaW5zdGFuY2UsIGFjYywga2V5LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH07XG5cbiAgICBIeXBlck1lZGlhLnByb3RvdHlwZS5fcmVwbGFjZUFycmF5ID0gZnVuY3Rpb24oaW5zdGFuY2UsIG9yaWcpIHtcbiAgICAgIHZhciBhcnIsIGksIGl0ZW0sIGtleSwgbGVuLCByZWYsIHZhbHVlO1xuICAgICAgYXJyID0gKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaSwgbGVuLCByZXN1bHRzO1xuICAgICAgICByZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IG9yaWcubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBpdGVtID0gb3JpZ1tpXTtcbiAgICAgICAgICByZXN1bHRzLnB1c2godGhpcy5yZXBsYWNlKGluc3RhbmNlLCBpdGVtKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgICB9KS5jYWxsKHRoaXMpO1xuICAgICAgcmVmID0gT2JqZWN0LmtleXMob3JpZyk7XG4gICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAga2V5ID0gcmVmW2ldO1xuICAgICAgICB2YWx1ZSA9IG9yaWdba2V5XTtcbiAgICAgICAgdGhpcy5fcmVwbGFjZUtleVZhbHVlKGluc3RhbmNlLCBhcnIsIGtleSwgdmFsdWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFycjtcbiAgICB9O1xuXG4gICAgSHlwZXJNZWRpYS5wcm90b3R5cGUuX3JlcGxhY2VLZXlWYWx1ZSA9IGZ1bmN0aW9uKGluc3RhbmNlLCBhY2MsIGtleSwgdmFsdWUpIHtcbiAgICAgIHZhciBkZWZhdWx0Rm4sIGZuLCBuZXdLZXk7XG4gICAgICBpZiAoL191cmwkLy50ZXN0KGtleSkpIHtcbiAgICAgICAgaWYgKC9edXBsb2FkX3VybCQvLnRlc3Qoa2V5KSkge1xuICAgICAgICAgIGRlZmF1bHRGbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGFyZ3M7XG4gICAgICAgICAgICBhcmdzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gICAgICAgICAgICBkZXByZWNhdGUoJ2NhbGwgLnVwbG9hZCh7bmFtZSwgbGFiZWx9KS5jcmVhdGUoZGF0YSwgY29udGVudFR5cGUpJyArICcgaW5zdGVhZCBvZiAudXBsb2FkKG5hbWUsIGRhdGEsIGNvbnRlbnRUeXBlKScpO1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRGbi5jcmVhdGUuYXBwbHkoZGVmYXVsdEZuLCBhcmdzKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGZuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYXJncztcbiAgICAgICAgICAgIGFyZ3MgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZS5fZnJvbVVybFdpdGhEZWZhdWx0LmFwcGx5KGluc3RhbmNlLCBbdmFsdWUsIGRlZmF1bHRGbl0uY29uY2F0KHNsaWNlLmNhbGwoYXJncykpKSgpO1xuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGVmYXVsdEZuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBkZXByZWNhdGUoJ2luc3RlYWQgb2YgZGlyZWN0bHkgY2FsbGluZyBtZXRob2RzIGxpa2UgLm5leHRQYWdlKCksIHVzZSAubmV4dFBhZ2UuZmV0Y2goKScpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmV0Y2goKTtcbiAgICAgICAgICB9O1xuICAgICAgICAgIGZuID0gaW5zdGFuY2UuX2Zyb21VcmxDdXJyaWVkKHZhbHVlLCBkZWZhdWx0Rm4pO1xuICAgICAgICB9XG4gICAgICAgIG5ld0tleSA9IGtleS5zdWJzdHJpbmcoMCwga2V5Lmxlbmd0aCAtICdfdXJsJy5sZW5ndGgpO1xuICAgICAgICBhY2NbbmV3S2V5XSA9IGZuO1xuICAgICAgICBpZiAoIS9cXHsvLnRlc3QodmFsdWUpKSB7XG4gICAgICAgICAgcmV0dXJuIGFjY1trZXldID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoL19hdCQvLnRlc3Qoa2V5KSkge1xuICAgICAgICByZXR1cm4gYWNjW2tleV0gPSB2YWx1ZSA/IG5ldyBEYXRlKHZhbHVlKSA6IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYWNjW2tleV0gPSB0aGlzLnJlcGxhY2UoaW5zdGFuY2UsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgSHlwZXJNZWRpYS5wcm90b3R5cGUucmVzcG9uc2VNaWRkbGV3YXJlID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICB2YXIgZGF0YSwgaW5zdGFuY2U7XG4gICAgICBpbnN0YW5jZSA9IGFyZy5pbnN0YW5jZSwgZGF0YSA9IGFyZy5kYXRhO1xuICAgICAgZGF0YSA9IHRoaXMucmVwbGFjZShpbnN0YW5jZSwgZGF0YSk7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBkYXRhOiBkYXRhXG4gICAgICB9O1xuICAgIH07XG5cbiAgICByZXR1cm4gSHlwZXJNZWRpYTtcblxuICB9KSgpKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIENoYWluZXIsIE9CSkVDVF9NQVRDSEVSLCBPYmplY3RDaGFpbmVyLCBUUkVFX09QVElPTlMsIFZlcmJNZXRob2RzO1xuXG4gIE9CSkVDVF9NQVRDSEVSID0gcmVxdWlyZSgnLi4vZ3JhbW1hci9vYmplY3QtbWF0Y2hlcicpO1xuXG4gIFRSRUVfT1BUSU9OUyA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvdHJlZS1vcHRpb25zJyk7XG5cbiAgVmVyYk1ldGhvZHMgPSByZXF1aXJlKCcuLi92ZXJiLW1ldGhvZHMnKTtcblxuICBDaGFpbmVyID0gcmVxdWlyZSgnLi4vY2hhaW5lcicpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gbmV3IChPYmplY3RDaGFpbmVyID0gKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIE9iamVjdENoYWluZXIoKSB7fVxuXG4gICAgT2JqZWN0Q2hhaW5lci5wcm90b3R5cGUuY2hhaW5DaGlsZHJlbiA9IGZ1bmN0aW9uKGNoYWluZXIsIHVybCwgb2JqKSB7XG4gICAgICB2YXIgY29udGV4dCwgaSwgaywga2V5LCBsZW4sIHJlLCByZWYsIHJlc3VsdHM7XG4gICAgICByZXN1bHRzID0gW107XG4gICAgICBmb3IgKGtleSBpbiBPQkpFQ1RfTUFUQ0hFUikge1xuICAgICAgICByZSA9IE9CSkVDVF9NQVRDSEVSW2tleV07XG4gICAgICAgIGlmIChyZS50ZXN0KG9iai51cmwpKSB7XG4gICAgICAgICAgY29udGV4dCA9IFRSRUVfT1BUSU9OUztcbiAgICAgICAgICByZWYgPSBrZXkuc3BsaXQoJy4nKTtcbiAgICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGsgPSByZWZbaV07XG4gICAgICAgICAgICBjb250ZXh0ID0gY29udGV4dFtrXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmVzdWx0cy5wdXNoKGNoYWluZXIuY2hhaW4odXJsLCBrLCBjb250ZXh0LCBvYmopKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXN1bHRzLnB1c2godm9pZCAwKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJlc3VsdHM7XG4gICAgfTtcblxuICAgIE9iamVjdENoYWluZXIucHJvdG90eXBlLnJlc3BvbnNlTWlkZGxld2FyZSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgdmFyIGNoYWluZXIsIGRhdGEsIGRhdHVtLCBpLCBsZW4sIHBsdWdpbnMsIHJlcXVlc3RlciwgdXJsLCB2ZXJiTWV0aG9kcztcbiAgICAgIHBsdWdpbnMgPSBhcmcucGx1Z2lucywgcmVxdWVzdGVyID0gYXJnLnJlcXVlc3RlciwgZGF0YSA9IGFyZy5kYXRhLCB1cmwgPSBhcmcudXJsO1xuICAgICAgdmVyYk1ldGhvZHMgPSBuZXcgVmVyYk1ldGhvZHMocGx1Z2lucywgcmVxdWVzdGVyKTtcbiAgICAgIGNoYWluZXIgPSBuZXcgQ2hhaW5lcih2ZXJiTWV0aG9kcyk7XG4gICAgICBpZiAodXJsKSB7XG4gICAgICAgIGNoYWluZXIuY2hhaW4odXJsLCB0cnVlLCB7fSwgZGF0YSk7XG4gICAgICAgIHRoaXMuY2hhaW5DaGlsZHJlbihjaGFpbmVyLCB1cmwsIGRhdGEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2hhaW5lci5jaGFpbignJywgbnVsbCwge30sIGRhdGEpO1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhKSkge1xuICAgICAgICAgIGZvciAoaSA9IDAsIGxlbiA9IGRhdGEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgIGRhdHVtID0gZGF0YVtpXTtcbiAgICAgICAgICAgIHRoaXMuY2hhaW5DaGlsZHJlbihjaGFpbmVyLCBkYXR1bS51cmwsIGRhdHVtKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB7XG4gICAgICAgIGRhdGE6IGRhdGFcbiAgICAgIH07XG4gICAgfTtcblxuICAgIHJldHVybiBPYmplY3RDaGFpbmVyO1xuXG4gIH0pKCkpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgUGFnaW5hdGlvbjtcblxuICBtb2R1bGUuZXhwb3J0cyA9IG5ldyAoUGFnaW5hdGlvbiA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBQYWdpbmF0aW9uKCkge31cblxuICAgIFBhZ2luYXRpb24ucHJvdG90eXBlLnJlc3BvbnNlTWlkZGxld2FyZSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgdmFyIGRhdGEsIGRpc2NhcmQsIGhyZWYsIGksIGpxWEhSLCBsZW4sIGxpbmtzLCBwYXJ0LCByZWYsIHJlZjEsIHJlbDtcbiAgICAgIGpxWEhSID0gYXJnLmpxWEhSLCBkYXRhID0gYXJnLmRhdGE7XG4gICAgICBpZiAoIWpxWEhSKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGRhdGEpKSB7XG4gICAgICAgIGRhdGEgPSB7XG4gICAgICAgICAgaXRlbXM6IGRhdGEuc2xpY2UoMClcbiAgICAgICAgfTtcbiAgICAgICAgbGlua3MgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcignTGluaycpO1xuICAgICAgICByZWYgPSAobGlua3MgIT0gbnVsbCA/IGxpbmtzLnNwbGl0KCcsJykgOiB2b2lkIDApIHx8IFtdO1xuICAgICAgICBmb3IgKGkgPSAwLCBsZW4gPSByZWYubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICBwYXJ0ID0gcmVmW2ldO1xuICAgICAgICAgIHJlZjEgPSBwYXJ0Lm1hdGNoKC88KFtePl0rKT47XFwgcmVsPVwiKFteXCJdKylcIi8pLCBkaXNjYXJkID0gcmVmMVswXSwgaHJlZiA9IHJlZjFbMV0sIHJlbCA9IHJlZjFbMl07XG4gICAgICAgICAgZGF0YVtyZWwgKyBcIl9wYWdlX3VybFwiXSA9IGhyZWY7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBQYWdpbmF0aW9uO1xuXG4gIH0pKCkpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgUGF0aFZhbGlkYXRvciwgVVJMX1ZBTElEQVRPUjtcblxuICBVUkxfVkFMSURBVE9SID0gcmVxdWlyZSgnLi4vZ3JhbW1hci91cmwtdmFsaWRhdG9yJyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBuZXcgKFBhdGhWYWxpZGF0b3IgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gUGF0aFZhbGlkYXRvcigpIHt9XG5cbiAgICBQYXRoVmFsaWRhdG9yLnByb3RvdHlwZS5yZXF1ZXN0TWlkZGxld2FyZSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgdmFyIGVyciwgcGF0aDtcbiAgICAgIHBhdGggPSBhcmcucGF0aDtcbiAgICAgIGlmICghVVJMX1ZBTElEQVRPUi50ZXN0KHBhdGgpKSB7XG4gICAgICAgIGVyciA9IFwiT2N0b2thdCBCVUc6IEludmFsaWQgUGF0aC4gSWYgdGhpcyBpcyBhY3R1YWxseSBhIHZhbGlkIHBhdGggdGhlbiBwbGVhc2UgdXBkYXRlIHRoZSBVUkxfVkFMSURBVE9SLiBwYXRoPVwiICsgcGF0aDtcbiAgICAgICAgcmV0dXJuIGNvbnNvbGUud2FybihlcnIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gUGF0aFZhbGlkYXRvcjtcblxuICB9KSgpKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIERFRkFVTFRfSEVBREVSLCBQUkVWSUVXX0hFQURFUlMsIFByZXZpZXdBcGlzO1xuXG4gIFBSRVZJRVdfSEVBREVSUyA9IHJlcXVpcmUoJy4uL2dyYW1tYXIvcHJldmlldy1oZWFkZXJzJyk7XG5cbiAgREVGQVVMVF9IRUFERVIgPSBmdW5jdGlvbih1cmwpIHtcbiAgICB2YXIga2V5LCB2YWw7XG4gICAgZm9yIChrZXkgaW4gUFJFVklFV19IRUFERVJTKSB7XG4gICAgICB2YWwgPSBQUkVWSUVXX0hFQURFUlNba2V5XTtcbiAgICAgIGlmICh2YWwudGVzdCh1cmwpKSB7XG4gICAgICAgIHJldHVybiBrZXk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gbmV3IChQcmV2aWV3QXBpcyA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBQcmV2aWV3QXBpcygpIHt9XG5cbiAgICBQcmV2aWV3QXBpcy5wcm90b3R5cGUucmVxdWVzdE1pZGRsZXdhcmUgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHZhciBhY2NlcHRIZWFkZXIsIHBhdGg7XG4gICAgICBwYXRoID0gYXJnLnBhdGg7XG4gICAgICBhY2NlcHRIZWFkZXIgPSBERUZBVUxUX0hFQURFUihwYXRoKTtcbiAgICAgIGlmIChhY2NlcHRIZWFkZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQWNjZXB0JzogYWNjZXB0SGVhZGVyXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gUHJldmlld0FwaXM7XG5cbiAgfSkoKSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBQcmVmZXJMaWJyYXJ5T3Zlck5hdGl2ZVByb21pc2VzLCBhbGxQcm9taXNlcywgbmV3UHJvbWlzZSwgcmVmLCByZWYxLCByZWYyO1xuXG4gIHJlZiA9IHJlcXVpcmUoJy4uLy4uL2hlbHBlcnMvcHJvbWlzZS1maW5kLWxpYnJhcnknKSwgbmV3UHJvbWlzZSA9IHJlZi5uZXdQcm9taXNlLCBhbGxQcm9taXNlcyA9IHJlZi5hbGxQcm9taXNlcztcblxuICBpZiAoIShuZXdQcm9taXNlICYmIGFsbFByb21pc2VzKSkge1xuICAgIHJlZjEgPSByZXF1aXJlKCcuLi8uLi9oZWxwZXJzL3Byb21pc2UtZmluZC1uYXRpdmUnKSwgbmV3UHJvbWlzZSA9IHJlZjEubmV3UHJvbWlzZSwgYWxsUHJvbWlzZXMgPSByZWYxLmFsbFByb21pc2VzO1xuICB9XG5cbiAgaWYgKCEoKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93ICE9PSBudWxsKSB8fCBuZXdQcm9taXNlKSkge1xuICAgIHJlZjIgPSByZXF1aXJlKCcuLi8uLi9oZWxwZXJzL3Byb21pc2Utbm9kZScpLCBuZXdQcm9taXNlID0gcmVmMi5uZXdQcm9taXNlLCBhbGxQcm9taXNlcyA9IHJlZjIuYWxsUHJvbWlzZXM7XG4gIH1cblxuICBpZiAoKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93ICE9PSBudWxsKSAmJiAhbmV3UHJvbWlzZSkge1xuICAgIGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlICE9PSBudWxsKSB7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUud2FybiA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIGNvbnNvbGUud2FybignT2N0b2thdDogQSBQcm9taXNlIEFQSSB3YXMgbm90IGZvdW5kLiBTdXBwb3J0ZWQgbGlicmFyaWVzIHRoYXQgaGF2ZSBQcm9taXNlcyBhcmUgalF1ZXJ5LCBhbmd1bGFyanMsIGFuZCBlczYtcHJvbWlzZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIGlmICgodHlwZW9mIHdpbmRvdyA9PT0gXCJ1bmRlZmluZWRcIiB8fCB3aW5kb3cgPT09IG51bGwpICYmICFuZXdQcm9taXNlKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb3VsZCBub3QgZmluZCBhIHByb21pc2UgbGliIGZvciBub2RlLiBTZWVtcyBsaWtlIGEgYnVnJyk7XG4gIH1cblxuICBtb2R1bGUuZXhwb3J0cyA9IG5ldyAoUHJlZmVyTGlicmFyeU92ZXJOYXRpdmVQcm9taXNlcyA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBQcmVmZXJMaWJyYXJ5T3Zlck5hdGl2ZVByb21pc2VzKCkge31cblxuICAgIFByZWZlckxpYnJhcnlPdmVyTmF0aXZlUHJvbWlzZXMucHJvdG90eXBlLnByb21pc2VDcmVhdG9yID0ge1xuICAgICAgbmV3UHJvbWlzZTogbmV3UHJvbWlzZSxcbiAgICAgIGFsbFByb21pc2VzOiBhbGxQcm9taXNlc1xuICAgIH07XG5cbiAgICByZXR1cm4gUHJlZmVyTGlicmFyeU92ZXJOYXRpdmVQcm9taXNlcztcblxuICB9KSgpKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIFJlYWRCaW5hcnksIHRvUXVlcnlTdHJpbmc7XG5cbiAgdG9RdWVyeVN0cmluZyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcXVlcnlzdHJpbmcnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IG5ldyAoUmVhZEJpbmFyeSA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBSZWFkQmluYXJ5KCkge31cblxuICAgIFJlYWRCaW5hcnkucHJvdG90eXBlLnZlcmJzID0ge1xuICAgICAgcmVhZEJpbmFyeTogZnVuY3Rpb24ocGF0aCwgcXVlcnkpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgIHBhdGg6IFwiXCIgKyBwYXRoICsgKHRvUXVlcnlTdHJpbmcocXVlcnkpKSxcbiAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICBpc1JhdzogdHJ1ZSxcbiAgICAgICAgICAgIGlzQmFzZTY0OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICBSZWFkQmluYXJ5LnByb3RvdHlwZS5yZXF1ZXN0TWlkZGxld2FyZSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgdmFyIGlzQmFzZTY0LCBvcHRpb25zO1xuICAgICAgb3B0aW9ucyA9IGFyZy5vcHRpb25zO1xuICAgICAgaWYgKG9wdGlvbnMpIHtcbiAgICAgICAgaXNCYXNlNjQgPSBvcHRpb25zLmlzQmFzZTY0O1xuICAgICAgICBpZiAoaXNCYXNlNjQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi92bmQuZ2l0aHViLnJhdydcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtaW1lVHlwZTogJ3RleHQvcGxhaW47IGNoYXJzZXQ9eC11c2VyLWRlZmluZWQnXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBSZWFkQmluYXJ5LnByb3RvdHlwZS5yZXNwb25zZU1pZGRsZXdhcmUgPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgIHZhciBjb252ZXJ0ZWQsIGRhdGEsIGksIGlzQmFzZTY0LCBqLCBvcHRpb25zLCByZWY7XG4gICAgICBvcHRpb25zID0gYXJnLm9wdGlvbnMsIGRhdGEgPSBhcmcuZGF0YTtcbiAgICAgIGlmIChvcHRpb25zKSB7XG4gICAgICAgIGlzQmFzZTY0ID0gb3B0aW9ucy5pc0Jhc2U2NDtcbiAgICAgICAgaWYgKGlzQmFzZTY0KSB7XG4gICAgICAgICAgY29udmVydGVkID0gJyc7XG4gICAgICAgICAgZm9yIChpID0gaiA9IDAsIHJlZiA9IGRhdGEubGVuZ3RoOyAwIDw9IHJlZiA/IGogPCByZWYgOiBqID4gcmVmOyBpID0gMCA8PSByZWYgPyArK2ogOiAtLWopIHtcbiAgICAgICAgICAgIGNvbnZlcnRlZCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGRhdGEuY2hhckNvZGVBdChpKSAmIDB4ZmYpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0YTogY29udmVydGVkXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gUmVhZEJpbmFyeTtcblxuICB9KSgpKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIFNpbXBsZVZlcmJzLCB0b1F1ZXJ5U3RyaW5nLFxuICAgIHNsaWNlID0gW10uc2xpY2U7XG5cbiAgdG9RdWVyeVN0cmluZyA9IHJlcXVpcmUoJy4uL2hlbHBlcnMvcXVlcnlzdHJpbmcnKTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IG5ldyAoU2ltcGxlVmVyYnMgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gU2ltcGxlVmVyYnMoKSB7fVxuXG4gICAgU2ltcGxlVmVyYnMucHJvdG90eXBlLnZlcmJzID0ge1xuICAgICAgZmV0Y2g6IGZ1bmN0aW9uKHBhdGgsIHF1ZXJ5KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICBwYXRoOiBcIlwiICsgcGF0aCArICh0b1F1ZXJ5U3RyaW5nKHF1ZXJ5KSlcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICByZWFkOiBmdW5jdGlvbihwYXRoLCBxdWVyeSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgcGF0aDogXCJcIiArIHBhdGggKyAodG9RdWVyeVN0cmluZyhxdWVyeSkpLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGlzUmF3OiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24ocGF0aCwgZGF0YSkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgIGlzQm9vbGVhbjogdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBjcmVhdGU6IGZ1bmN0aW9uKHBhdGgsIGRhdGEsIGNvbnRlbnRUeXBlKSB7XG4gICAgICAgIGlmIChjb250ZW50VHlwZSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICAgIHBhdGg6IHBhdGgsXG4gICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICBpc1JhdzogdHJ1ZSxcbiAgICAgICAgICAgICAgY29udGVudFR5cGU6IGNvbnRlbnRUeXBlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgICAgZGF0YTogZGF0YVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uKHBhdGgsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXRob2Q6ICdQQVRDSCcsXG4gICAgICAgICAgcGF0aDogcGF0aCxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgYWRkOiBmdW5jdGlvbihwYXRoLCBkYXRhKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICBwYXRoOiBwYXRoLFxuICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgaXNCb29sZWFuOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGNvbnRhaW5zOiBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGFyZ3MsIHBhdGg7XG4gICAgICAgIHBhdGggPSBhcmd1bWVudHNbMF0sIGFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgIHBhdGg6IHBhdGggKyBcIi9cIiArIChhcmdzLmpvaW4oJy8nKSksXG4gICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgaXNCb29sZWFuOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gU2ltcGxlVmVyYnM7XG5cbiAgfSkoKSk7XG5cbn0pLmNhbGwodGhpcyk7XG4iLCIoZnVuY3Rpb24oKSB7XG4gIHZhciBVc2VQb3N0SW5zdGVhZE9mUGF0Y2g7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBuZXcgKFVzZVBvc3RJbnN0ZWFkT2ZQYXRjaCA9IChmdW5jdGlvbigpIHtcbiAgICBmdW5jdGlvbiBVc2VQb3N0SW5zdGVhZE9mUGF0Y2goKSB7fVxuXG4gICAgVXNlUG9zdEluc3RlYWRPZlBhdGNoLnByb3RvdHlwZS5yZXF1ZXN0TWlkZGxld2FyZSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgdmFyIG1ldGhvZCwgcmVmLCB1c2VQb3N0SW5zdGVhZE9mUGF0Y2g7XG4gICAgICAocmVmID0gYXJnLmNsaWVudE9wdGlvbnMsIHVzZVBvc3RJbnN0ZWFkT2ZQYXRjaCA9IHJlZi51c2VQb3N0SW5zdGVhZE9mUGF0Y2gpLCBtZXRob2QgPSBhcmcubWV0aG9kO1xuICAgICAgaWYgKHVzZVBvc3RJbnN0ZWFkT2ZQYXRjaCAmJiBtZXRob2QgPT09ICdQQVRDSCcpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJ1xuICAgICAgICB9O1xuICAgICAgfVxuICAgIH07XG5cbiAgICByZXR1cm4gVXNlUG9zdEluc3RlYWRPZlBhdGNoO1xuXG4gIH0pKCkpO1xuXG59KS5jYWxsKHRoaXMpO1xuIiwiKGZ1bmN0aW9uKCkge1xuICB2YXIgZmlsdGVyLCBmb3JFYWNoLCBwbHVzO1xuXG4gIGZpbHRlciA9IHJlcXVpcmUoJ2xvZGFzaC9pbnRlcm5hbC9hcnJheUZpbHRlcicpO1xuXG4gIGZvckVhY2ggPSByZXF1aXJlKCdsb2Rhc2gvaW50ZXJuYWwvYXJyYXlFYWNoJyk7XG5cbiAgcGx1cyA9IHtcbiAgICBjYW1lbGl6ZTogZnVuY3Rpb24oc3RyaW5nKSB7XG4gICAgICBpZiAoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvW18tXSsoXFx3KS9nLCBmdW5jdGlvbihtKSB7XG4gICAgICAgICAgcmV0dXJuIG1bMV0udG9VcHBlckNhc2UoKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgICB9XG4gICAgfSxcbiAgICB1bmNhbWVsaXplOiBmdW5jdGlvbihzdHJpbmcpIHtcbiAgICAgIGlmICghc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICAgIH1cbiAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvKFtBLVpdKSsvZywgZnVuY3Rpb24obWF0Y2gsIGxldHRlcikge1xuICAgICAgICBpZiAobGV0dGVyID09IG51bGwpIHtcbiAgICAgICAgICBsZXR0ZXIgPSAnJztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gXCJfXCIgKyAobGV0dGVyLnRvTG93ZXJDYXNlKCkpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBkYXNoZXJpemU6IGZ1bmN0aW9uKHN0cmluZykge1xuICAgICAgaWYgKCFzdHJpbmcpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgICAgfVxuICAgICAgc3RyaW5nID0gc3RyaW5nWzBdLnRvTG93ZXJDYXNlKCkgKyBzdHJpbmcuc2xpY2UoMSk7XG4gICAgICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoLyhbQS1aXSl8KF8pL2csIGZ1bmN0aW9uKG0sIGxldHRlcikge1xuICAgICAgICBpZiAobGV0dGVyKSB7XG4gICAgICAgICAgcmV0dXJuICctJyArIGxldHRlci50b0xvd2VyQ2FzZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAnLSc7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0sXG4gICAgZXh0ZW5kOiBmdW5jdGlvbih0YXJnZXQsIHNvdXJjZSkge1xuICAgICAgdmFyIGksIGtleSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgIHJlZiA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gICAgICAgIHJlc3VsdHMgPSBbXTtcbiAgICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgICAga2V5ID0gcmVmW2ldO1xuICAgICAgICAgIHJlc3VsdHMucHVzaCh0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0cztcbiAgICAgIH1cbiAgICB9LFxuICAgIGZvck93bjogZnVuY3Rpb24ob2JqLCBpdGVyYXRvcikge1xuICAgICAgdmFyIGksIGtleSwgbGVuLCByZWYsIHJlc3VsdHM7XG4gICAgICByZWYgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgcmVzdWx0cyA9IFtdO1xuICAgICAgZm9yIChpID0gMCwgbGVuID0gcmVmLmxlbmd0aDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgICAgIGtleSA9IHJlZltpXTtcbiAgICAgICAgcmVzdWx0cy5wdXNoKGl0ZXJhdG9yKG9ialtrZXldLCBrZXkpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHRzO1xuICAgIH0sXG4gICAgZmlsdGVyOiBmaWx0ZXIsXG4gICAgZm9yRWFjaDogZm9yRWFjaFxuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gcGx1cztcblxufSkuY2FsbCh0aGlzKTtcbiIsIihmdW5jdGlvbigpIHtcbiAgdmFyIFZlcmJNZXRob2RzLCBleHRlbmQsIGZpbHRlciwgZm9yT3duLCByZWYsIHRvUHJvbWlzZSwgdG9RdWVyeVN0cmluZyxcbiAgICBzbGljZSA9IFtdLnNsaWNlO1xuXG4gIHJlZiA9IHJlcXVpcmUoJy4vcGx1cycpLCBmaWx0ZXIgPSByZWYuZmlsdGVyLCBmb3JPd24gPSByZWYuZm9yT3duLCBleHRlbmQgPSByZWYuZXh0ZW5kO1xuXG4gIHRvUXVlcnlTdHJpbmcgPSByZXF1aXJlKCcuL2hlbHBlcnMvcXVlcnlzdHJpbmcnKTtcblxuICB0b1Byb21pc2UgPSBmdW5jdGlvbihvcmlnLCBuZXdQcm9taXNlKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGFyZ3MsIGxhc3Q7XG4gICAgICBhcmdzID0gMSA8PSBhcmd1bWVudHMubGVuZ3RoID8gc2xpY2UuY2FsbChhcmd1bWVudHMsIDApIDogW107XG4gICAgICBsYXN0ID0gYXJnc1thcmdzLmxlbmd0aCAtIDFdO1xuICAgICAgaWYgKHR5cGVvZiBsYXN0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGFyZ3MucG9wKCk7XG4gICAgICAgIHJldHVybiBvcmlnLmFwcGx5KG51bGwsIFtsYXN0XS5jb25jYXQoc2xpY2UuY2FsbChhcmdzKSkpO1xuICAgICAgfSBlbHNlIGlmIChuZXdQcm9taXNlKSB7XG4gICAgICAgIHJldHVybiBuZXdQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgIHZhciBjYjtcbiAgICAgICAgICBjYiA9IGZ1bmN0aW9uKGVyciwgdmFsKSB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZWplY3QoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlKHZhbCk7XG4gICAgICAgICAgfTtcbiAgICAgICAgICByZXR1cm4gb3JpZy5hcHBseShudWxsLCBbY2JdLmNvbmNhdChzbGljZS5jYWxsKGFyZ3MpKSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3UgbXVzdCBzcGVjaWZ5IGEgY2FsbGJhY2sgb3IgaGF2ZSBhIHByb21pc2UgbGlicmFyeSBsb2FkZWQnKTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gVmVyYk1ldGhvZHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgZnVuY3Rpb24gVmVyYk1ldGhvZHMocGx1Z2lucywgX3JlcXVlc3Rlcikge1xuICAgICAgdmFyIGksIGosIGxlbiwgbGVuMSwgcGx1Z2luLCBwcm9taXNlUGx1Z2lucywgcmVmMSwgcmVmMjtcbiAgICAgIHRoaXMuX3JlcXVlc3RlciA9IF9yZXF1ZXN0ZXI7XG4gICAgICBpZiAoIXRoaXMuX3JlcXVlc3Rlcikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ09jdG9rYXQgQlVHOiByZXF1ZXN0IGlzIHJlcXVpcmVkJyk7XG4gICAgICB9XG4gICAgICBwcm9taXNlUGx1Z2lucyA9IGZpbHRlcihwbHVnaW5zLCBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgdmFyIHByb21pc2VDcmVhdG9yO1xuICAgICAgICBwcm9taXNlQ3JlYXRvciA9IGFyZy5wcm9taXNlQ3JlYXRvcjtcbiAgICAgICAgcmV0dXJuIHByb21pc2VDcmVhdG9yO1xuICAgICAgfSk7XG4gICAgICBpZiAocHJvbWlzZVBsdWdpbnMpIHtcbiAgICAgICAgdGhpcy5fcHJvbWlzZVBsdWdpbiA9IHByb21pc2VQbHVnaW5zWzBdO1xuICAgICAgfVxuICAgICAgdGhpcy5fc3luY1ZlcmJzID0ge307XG4gICAgICByZWYxID0gZmlsdGVyKHBsdWdpbnMsIGZ1bmN0aW9uKGFyZykge1xuICAgICAgICB2YXIgdmVyYnM7XG4gICAgICAgIHZlcmJzID0gYXJnLnZlcmJzO1xuICAgICAgICByZXR1cm4gdmVyYnM7XG4gICAgICB9KTtcbiAgICAgIGZvciAoaSA9IDAsIGxlbiA9IHJlZjEubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgcGx1Z2luID0gcmVmMVtpXTtcbiAgICAgICAgZXh0ZW5kKHRoaXMuX3N5bmNWZXJicywgcGx1Z2luLnZlcmJzKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2FzeW5jVmVyYnMgPSB7fTtcbiAgICAgIHJlZjIgPSBmaWx0ZXIocGx1Z2lucywgZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHZhciBhc3luY1ZlcmJzO1xuICAgICAgICBhc3luY1ZlcmJzID0gYXJnLmFzeW5jVmVyYnM7XG4gICAgICAgIHJldHVybiBhc3luY1ZlcmJzO1xuICAgICAgfSk7XG4gICAgICBmb3IgKGogPSAwLCBsZW4xID0gcmVmMi5sZW5ndGg7IGogPCBsZW4xOyBqKyspIHtcbiAgICAgICAgcGx1Z2luID0gcmVmMltqXTtcbiAgICAgICAgZXh0ZW5kKHRoaXMuX2FzeW5jVmVyYnMsIHBsdWdpbi5hc3luY1ZlcmJzKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBWZXJiTWV0aG9kcy5wcm90b3R5cGUuaW5qZWN0VmVyYk1ldGhvZHMgPSBmdW5jdGlvbihwYXRoLCBvYmopIHtcbiAgICAgIHZhciBhbGxQcm9taXNlcywgbmV3UHJvbWlzZSwgcmVmMTtcbiAgICAgIGlmICh0aGlzLl9wcm9taXNlUGx1Z2luKSB7XG4gICAgICAgIHJlZjEgPSB0aGlzLl9wcm9taXNlUGx1Z2luLnByb21pc2VDcmVhdG9yLCBuZXdQcm9taXNlID0gcmVmMS5uZXdQcm9taXNlLCBhbGxQcm9taXNlcyA9IHJlZjEuYWxsUHJvbWlzZXM7XG4gICAgICB9XG4gICAgICBvYmoudXJsID0gcGF0aDtcbiAgICAgIGZvck93bih0aGlzLl9zeW5jVmVyYnMsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odmVyYkZ1bmMsIHZlcmJOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIG9ialt2ZXJiTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhcmdzLCBtYWtlUmVxdWVzdDtcbiAgICAgICAgICAgIGFyZ3MgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgICAgICAgICAgIG1ha2VSZXF1ZXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBjYiwgZGF0YSwgbWV0aG9kLCBvcHRpb25zLCBvcmlnaW5hbEFyZ3MsIHJlZjI7XG4gICAgICAgICAgICAgIGNiID0gYXJndW1lbnRzWzBdLCBvcmlnaW5hbEFyZ3MgPSAyIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMSkgOiBbXTtcbiAgICAgICAgICAgICAgcmVmMiA9IHZlcmJGdW5jLmFwcGx5KG51bGwsIFtwYXRoXS5jb25jYXQoc2xpY2UuY2FsbChvcmlnaW5hbEFyZ3MpKSksIG1ldGhvZCA9IHJlZjIubWV0aG9kLCBwYXRoID0gcmVmMi5wYXRoLCBkYXRhID0gcmVmMi5kYXRhLCBvcHRpb25zID0gcmVmMi5vcHRpb25zO1xuICAgICAgICAgICAgICByZXR1cm4gX3RoaXMuX3JlcXVlc3Rlci5yZXF1ZXN0KG1ldGhvZCwgcGF0aCwgZGF0YSwgb3B0aW9ucywgY2IpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiB0b1Byb21pc2UobWFrZVJlcXVlc3QsIG5ld1Byb21pc2UpLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgICB9KSh0aGlzKSk7XG4gICAgICByZXR1cm4gZm9yT3duKHRoaXMuX2FzeW5jVmVyYnMsIChmdW5jdGlvbihfdGhpcykge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24odmVyYkZ1bmMsIHZlcmJOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIG9ialt2ZXJiTmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciBhcmdzLCBtYWtlUmVxdWVzdDtcbiAgICAgICAgICAgIGFyZ3MgPSAxIDw9IGFyZ3VtZW50cy5sZW5ndGggPyBzbGljZS5jYWxsKGFyZ3VtZW50cywgMCkgOiBbXTtcbiAgICAgICAgICAgIG1ha2VSZXF1ZXN0ID0gdmVyYkZ1bmMoX3RoaXMuX3JlcXVlc3RlciwgcGF0aCk7XG4gICAgICAgICAgICByZXR1cm4gdG9Qcm9taXNlKG1ha2VSZXF1ZXN0LCBuZXdQcm9taXNlKS5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgICB9O1xuICAgICAgICB9O1xuICAgICAgfSkodGhpcykpO1xuICAgIH07XG5cbiAgICByZXR1cm4gVmVyYk1ldGhvZHM7XG5cbiAgfSkoKTtcblxufSkuY2FsbCh0aGlzKTtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBpdGVyYXRlZSBUaGUgZnVuY3Rpb24gaW52b2tlZCBwZXIgaXRlcmF0aW9uLlxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIGBhcnJheWAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5RWFjaChhcnJheSwgaXRlcmF0ZWUpIHtcbiAgdmFyIGluZGV4ID0gLTEsXG4gICAgICBsZW5ndGggPSBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5maWx0ZXJgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBjYWxsYmFja1xuICogc2hvcnRoYW5kcyBhbmQgYHRoaXNgIGJpbmRpbmcuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IGFycmF5IFRoZSBhcnJheSB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkaWNhdGUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IGZpbHRlcmVkIGFycmF5LlxuICovXG5mdW5jdGlvbiBhcnJheUZpbHRlcihhcnJheSwgcHJlZGljYXRlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkubGVuZ3RoLFxuICAgICAgcmVzSW5kZXggPSAtMSxcbiAgICAgIHJlc3VsdCA9IFtdO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgdmFyIHZhbHVlID0gYXJyYXlbaW5kZXhdO1xuICAgIGlmIChwcmVkaWNhdGUodmFsdWUsIGluZGV4LCBhcnJheSkpIHtcbiAgICAgIHJlc3VsdFsrK3Jlc0luZGV4XSA9IHZhbHVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5RmlsdGVyO1xuIiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIEluamVjdCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgUk9VVEVSX0RJUkVDVElWRVMgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBEZWJ1ZyB9IGZyb20gJy4uL3V0aWxzJztcclxuaW1wb3J0IHsgTW9kZWwsIHN0YXRlIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy9jaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ2FwcCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdhcHAvYXBwLmNvbXBvbmVudC5odG1sJyxcclxuICBkaXJlY3RpdmVzOiBbXHJcbiAgICBST1VURVJfRElSRUNUSVZFUyxcclxuICAgIERlYnVnLFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEFwcCB7XHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KHN0YXRlKSBwcml2YXRlIHN0YXRlOiBPYnNlcnZhYmxlPE1vZGVsPlxyXG4gICkge31cclxufVxyXG4iLCJleHBvcnQgKiBmcm9tICcuL2FwcC5jb21wb25lbnQnOyIsIm1vZHVsZS5leHBvcnRzPXtcclxuICAgIC8vIHVuY29tbWVudCB0aGUgbGluZSBiZWxvdyBhbmQgYWQgeW91ciBnaXRodWIgdG9rZW4gdG8gcmFpc2UgZ2l0aHViIHJhdGUgbGltaXQgZm9yIHVuYXV0aGVudGljYXRlZCB1c2Vyc1xyXG4gICAgLy9cImdpdGh1YnRva2VuXCI6IDx5b3VyIGdpdGh1YiB0b2tlbiBoZXJlPlxyXG59IiwiaW1wb3J0IHsgT3BhcXVlVG9rZW4sIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgb2N0b2thdCA9IHJlcXVpcmUoJ29jdG9rYXQnKTtcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0LCBSZXBvLCBMaXN0LCBJc3N1ZVF1ZXJ5LCBJc3N1ZVF1ZXJ5UGFyYW1zLCBMaXN0UXVlcnkgfSBmcm9tICdvY3Rva2F0JztcclxuXHJcbmNvbnN0IFBMVUdJTlMgPSBbXHJcbiAgICByZXF1aXJlKCdvY3Rva2F0L2Rpc3Qvbm9kZS9wbHVnaW5zL29iamVjdC1jaGFpbmVyJyksIFxyXG4gICAgcmVxdWlyZSgnb2N0b2thdC9kaXN0L25vZGUvcGx1Z2lucy9wcm9taXNlL2xpYnJhcnktZmlyc3QnKSwgXHJcbiAgICByZXF1aXJlKCdvY3Rva2F0L2Rpc3Qvbm9kZS9wbHVnaW5zL3BhdGgtdmFsaWRhdG9yJyksIFxyXG4gICAgcmVxdWlyZSgnb2N0b2thdC9kaXN0L25vZGUvcGx1Z2lucy9hdXRob3JpemF0aW9uJyksIFxyXG4gICAgcmVxdWlyZSgnb2N0b2thdC9kaXN0L25vZGUvcGx1Z2lucy9wcmV2aWV3LWFwaXMnKSwgXHJcbiAgICByZXF1aXJlKCdvY3Rva2F0L2Rpc3Qvbm9kZS9wbHVnaW5zL3VzZS1wb3N0LWluc3RlYWQtb2YtcGF0Y2gnKSwgXHJcbiAgICByZXF1aXJlKCdvY3Rva2F0L2Rpc3Qvbm9kZS9wbHVnaW5zL3NpbXBsZS12ZXJicycpLCBcclxuICAgIHJlcXVpcmUoJ29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvZmV0Y2gtYWxsJyksIFxyXG4gICAgcmVxdWlyZSgnb2N0b2thdC9kaXN0L25vZGUvcGx1Z2lucy9yZWFkLWJpbmFyeScpLCBcclxuICAgIHJlcXVpcmUoJ29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvcGFnaW5hdGlvbicpLCBcclxuICAgIC8vIEZJWE1FOiBkaXNhYmxlIG9jdG9rYXQncyBidWdneSBjYWNoZSBoYW5kbGVyXHJcbiAgICAvL3JlcXVpcmUoJ29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvY2FjaGUtaGFuZGxlcicpLCBcclxuICAgIHJlcXVpcmUoJ29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvaHlwZXJtZWRpYScpLCBcclxuICAgIHJlcXVpcmUoJ29jdG9rYXQvZGlzdC9ub2RlL3BsdWdpbnMvY2FtZWwtY2FzZScpXHJcbl07XHJcblxyXG5leHBvcnQgY29uc3QgZ2l0aHVidG9rZW4gPSBuZXcgT3BhcXVlVG9rZW4oXCJnaXRodWJ0b2tlblwiKTtcclxuXHJcbmV4cG9ydCBjbGFzcyBHaXRIdWJTZXJ2aWNlIHtcclxuICAgIG9jdG86IG9jdG9rYXQuT2N0b2thdDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihcclxuICAgICAgICBASW5qZWN0KGdpdGh1YnRva2VuKSB0b2tlbjogc3RyaW5nXHJcbiAgICApIHtcclxuICAgICAgICB0aGlzLm9jdG8gPSBvY3Rva2F0KHt0b2tlbiwgcGx1Z2luczogUExVR0lOU30pOyBcclxuICAgIH1cclxuXHJcbiAgICBzZWFyY2hSZXBvcyhxOiBzdHJpbmcpOiBQcm9taXNlPFNlYXJjaFJlc3VsdDxSZXBvPj4ge1xyXG4gICAgICAgIHJldHVybiBHaXRIdWJTZXJ2aWNlLmhhbmRsZSgnc2VhcmNoIHJlcG8nLCAocSkgPT4gdGhpcy5vY3RvXHJcbiAgICAgICAgICAgIC5zZWFyY2hcclxuICAgICAgICAgICAgLnJlcG9zaXRvcmllc1xyXG4gICAgICAgICAgICAuZmV0Y2goe3E6cX0pLFxyXG4gICAgICAgICAgICBxXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyByZXBvKG93bmVyOiBzdHJpbmcsIG5hbWU6IHN0cmluZyk6IFByb21pc2U8UmVwbz4ge1xyXG4gICAgICAgIHJldHVybiBHaXRIdWJTZXJ2aWNlLmhhbmRsZSgnbG9hZCByZXBvJywgKG93bmVyLCBuYW1lKSA9PiB0aGlzLm9jdG9cclxuICAgICAgICAgICAgLnJlcG9zKG93bmVyLCBuYW1lKVxyXG4gICAgICAgICAgICAuZmV0Y2goKSxcclxuICAgICAgICAgICAgb3duZXIsIG5hbWVcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGlzc3Vlcyhvd25lcjogc3RyaW5nLCByZXBvTmFtZTogc3RyaW5nLCBwYXJhbXM/OiBJc3N1ZVF1ZXJ5UGFyYW1zKTogUHJvbWlzZTxJc3N1ZVF1ZXJ5PiB7XHJcbiAgICAgICAgcmV0dXJuIEdpdEh1YlNlcnZpY2UuaGFuZGxlKCdsb2FkIGlzc3VlcycsIChvd25lciwgcmVwb05hbWUsIHBhcmFtcykgPT4gdGhpcy5vY3RvXHJcbiAgICAgICAgICAgIC5yZXBvcyhvd25lciwgcmVwb05hbWUpXHJcbiAgICAgICAgICAgIC5pc3N1ZXNcclxuICAgICAgICAgICAgLmZldGNoKHBhcmFtcyksXHJcbiAgICAgICAgICAgIG93bmVyLCByZXBvTmFtZSwgcGFyYW1zXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBtb3JlPElELCBPLCBSPihsaXN0OiBMaXN0UXVlcnk8SUQsIE8sIFI+KTogUHJvbWlzZTxMaXN0UXVlcnk8SUQsIE8sIFI+PiB7XHJcbiAgICAgICAgcmV0dXJuIEdpdEh1YlNlcnZpY2UuaGFuZGxlKCdtb3JlJywgKGxpc3Q6IExpc3RRdWVyeTxJRCxPLFI+KSA9PiBsaXN0XHJcbiAgICAgICAgICAgIC5uZXh0UGFnZVxyXG4gICAgICAgICAgICAuZmV0Y2goKSxcclxuICAgICAgICAgICAgbGlzdFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYXN5bmMgaGFuZGxlPFQ+KG9wOiBzdHJpbmcsIHA6ICguLi5hcmdzOmFueVtdKSA9PiBQcm9taXNlPFQ+LCAuLi5hcmdzOmFueVtdKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coe2ZldGNoaW5nOm9wLCBhcmdzfSk7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcCguLi5hcmdzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEtMVURHRTogb2N0b2thdCBmYWlscyB0byB0aHJvdyB3aGVuIHRoZXJlIGlzIG5vIGludGVybmV0LlxyXG4gICAgICAgICAgICBpZiAocmVzIGFzIGFueSA9PSBcIlwiKSB0aHJvdyByZXM7XHJcblxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7ZmV0Y2hlZDpvcCwgcmVzLCBhcmdzfSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSBjYXRjaChlcikge1xyXG4gICAgICAgICAgICBjb25zdCBtc2cgPSBHaXRIdWJTZXJ2aWNlLm1lc3NhZ2UoZXIpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh7J2ZldGNoIGZhaWxlZCc6b3AsIGVyLCBtc2csIGFyZ3N9KTtcclxuICAgICAgICAgICAgdGhyb3cgbXNnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBtZXNzYWdlKGVyOmFueSk6IHN0cmluZyB7XHJcbiAgICAgICAgaWYgKGVyLm1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGpzb24gPSBKU09OLnBhcnNlKGVyLm1lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGpzb24ubWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChqc29uLm1lc3NhZ2UgPT0gXCJWYWxpZGF0aW9uIEZhaWxlZFwiICYmIGpzb24uZXJyb3JzICYmIGpzb24uZXJyb3JzLmxlbmd0aCA+IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBqc29uLmVycm9yc1swXS5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBqc29uLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGVyLm1lc3NhZ2U7XHJcbiAgICAgICAgICAgIH0gY2F0Y2goZXJUKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZXIubWVzc2FnZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gXHJcbiAgICAgICAgcmV0dXJuIFwiQW4gZXJyb3Igb2NjdXJlZFwiO1xyXG4gICAgfVxyXG59IiwiZXhwb3J0IHsgU2VhcmNoUmVzdWx0LCBSZXBvLCBMaXN0LCBMaXN0UXVlcnksIElzc3VlLCBJc3N1ZVF1ZXJ5UGFyYW1zLCBJc3N1ZVF1ZXJ5IH0gZnJvbSAnb2N0b2thdCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vZ2l0aHViLnNlcnZpY2UnOyIsImltcG9ydCB7IGJvb3RzdHJhcCB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XHJcbmltcG9ydCB7IGRpc2FibGVEZXByZWNhdGVkRm9ybXMsIHByb3ZpZGVGb3JtcyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgcHJvdmlkZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBcHAgfSBmcm9tICcuL2FwcCc7XHJcbmltcG9ydCB7IEdpdEh1YlNlcnZpY2UsIGdpdGh1YnRva2VuIH0gZnJvbSAnLi9naXRodWInO1xyXG5pbXBvcnQgeyBwcm92aWRlQ29udHJvbGxlciB9IGZyb20gJy4vc3RvcmUnO1xyXG5pbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcclxuXHJcbmJvb3RzdHJhcChBcHAsIFtcclxuICAgIGRpc2FibGVEZXByZWNhdGVkRm9ybXMoKSxcclxuICAgIHByb3ZpZGVGb3JtcygpLFxyXG4gICAgR2l0SHViU2VydmljZSxcclxuICAgIHByb3ZpZGVDb250cm9sbGVyKCksXHJcbiAgICByb3V0ZXMsXHJcbiAgICBwcm92aWRlKGdpdGh1YnRva2VuLCB7IHVzZVZhbHVlOiByZXF1aXJlKCcuL2NvbmZpZy5qc29uJykuZ2l0aHVidG9rZW59KSxcclxuXSlcclxuLmNhdGNoKGVyciA9PiBjb25zb2xlLmVycm9yKGVycikpOyIsImV4cG9ydCB7IFJlcG9EZXRhaWwgfSBmcm9tICcuL3JlcG8tZGV0YWlsLmNvbXBvbmVudCc7IiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSW5qZWN0LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJlcG8sIElzc3VlLCBMaXN0IH0gZnJvbSAnLi4vZ2l0aHViJztcclxuaW1wb3J0IHsgRGlzcGF0Y2hlciwgZGlzcGF0Y2hlciwgRmV0Y2hNb3JlSXNzdWVzQWN0aW9uIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdpc3N1ZS1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJ3JlcG8vaXNzdWUtbGlzdC5jb21wb25lbnQuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIElzc3VlTGlzdCAge1xyXG4gIEBJbnB1dCgpIHJlcG9OYW1lOiBzdHJpbmc7XHJcbiAgQElucHV0KCkgaXNzdWVzOiBMaXN0PElzc3VlPjtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KGRpc3BhdGNoZXIpIHByaXZhdGUgZGlzcGF0Y2hlcjogRGlzcGF0Y2hlclxyXG4gICkge31cclxuXHJcbiAgbW9yZSgpIHtcclxuICAgIHRoaXMuZGlzcGF0Y2hlci5uZXh0KG5ldyBGZXRjaE1vcmVJc3N1ZXNBY3Rpb24odGhpcy5yZXBvTmFtZSkpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgSW5qZWN0LCBPbkRlc3Ryb3ksIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgUmVwbywgSXNzdWUsIExpc3QgfSBmcm9tICcuLi9naXRodWInO1xyXG5pbXBvcnQgeyBNb2RlbCwgc3RhdGUsIERpc3BhdGNoZXIsIGRpc3BhdGNoZXIsIEZldGNoTW9yZUlzc3Vlc0FjdGlvbiwgU2VsZWN0UmVwb0FjdGlvbiB9IGZyb20gJy4uL3N0b3JlJztcclxuaW1wb3J0IHsgSXNzdWVMaXN0IH0gZnJvbSAnLi9pc3N1ZS1saXN0LmNvbXBvbmVudCc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ3JlcG8tZGV0YWlsJyxcclxuICB0ZW1wbGF0ZVVybDogJ3JlcG8vcmVwby1kZXRhaWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGRpcmVjdGl2ZXM6IFtJc3N1ZUxpc3RdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBSZXBvRGV0YWlsIGltcGxlbWVudHMgT25EZXN0cm95IHtcclxuICByZXBvOiBPYnNlcnZhYmxlPFJlcG8+O1xyXG4gIGlzc3VlczogT2JzZXJ2YWJsZTxMaXN0PElzc3VlPj47XHJcbiAgZmV0Y2hpbmc6IE9ic2VydmFibGU8Ym9vbGVhbj47XHJcbiAgc3ViOiBTdWJzY3JpcHRpb25cclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBASW5qZWN0KGRpc3BhdGNoZXIpIHByaXZhdGUgZGlzcGF0Y2hlcjogRGlzcGF0Y2hlcixcclxuICAgIEBJbmplY3Qoc3RhdGUpIHByaXZhdGUgc3RhdGU6IE9ic2VydmFibGU8TW9kZWw+LFxyXG4gICAgQEluamVjdChBY3RpdmF0ZWRSb3V0ZSkgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGVcclxuICApIHtcclxuICAgIGNvbnN0IHJlcG9EZXRhaWwgPSBzdGF0ZS5tYXAoc3RhdGUgPT4gc3RhdGUucmVwb0NhY2hlW3N0YXRlLnJlcG9EZXRhaWwuc2VsZWN0ZWRSZXBvXSk7XHJcbiAgICB0aGlzLnJlcG8gPSByZXBvRGV0YWlsLm1hcChzdGF0ZSA9PiBzdGF0ZSAmJiBzdGF0ZS5yZXBvKTtcclxuICAgIHRoaXMuaXNzdWVzID0gcmVwb0RldGFpbC5tYXAoc3RhdGUgPT4gc3RhdGUgJiYgc3RhdGUuaXNzdWVzKTtcclxuICAgIHRoaXMuZmV0Y2hpbmcgPSByZXBvRGV0YWlsLm1hcChzdGF0ZSA9PiBzdGF0ZSAmJiBzdGF0ZS5pc0ZldGNoaW5nKTtcclxuXHJcbiAgICB0aGlzLnN1YiA9IHJvdXRlLnBhcmFtcy5zdWJzY3JpYmUocGFyYW1zID0+IHtcclxuICAgICAgdGhpcy5kaXNwYXRjaGVyLm5leHQobmV3IFNlbGVjdFJlcG9BY3Rpb24ocGFyYW1zWydvd25lciddLCBwYXJhbXNbJ3JlcG8nXSkpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBwcm92aWRlUm91dGVyLCBSb3V0ZXJDb25maWcgfSAgZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgU2VhcmNoUmVwbyB9IGZyb20gJy4vc2VhcmNoJztcclxuaW1wb3J0IHsgUmVwb0RldGFpbCB9IGZyb20gJy4vcmVwbyc7XHJcbmV4cG9ydCBkZWZhdWx0IFtcclxuICAgIHByb3ZpZGVSb3V0ZXIoW1xyXG4gICAgICAgIHsgcGF0aDogJycsIHJlZGlyZWN0VG86ICcvc2VhcmNoJywgdGVybWluYWw6IHRydWUgfSwgXHJcbiAgICAgICAgeyBwYXRoOiAnc2VhcmNoJywgY29tcG9uZW50OiBTZWFyY2hSZXBvIH0sXHJcbiAgICAgICAgeyBwYXRoOiAncmVwby86b3duZXIvOnJlcG8nLCBjb21wb25lbnQ6IFJlcG9EZXRhaWwgfSxcclxuICAgIF0pLFxyXG5dOyIsImV4cG9ydCB7IFNlYXJjaFJlcG8gfSBmcm9tICcuL3NlYXJjaC1yZXBvLmNvbXBvbmVudCc7IiwiaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBJbmplY3QsIENoYW5nZURldGVjdGlvblN0cmF0ZWd5IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IFJlcG8gfSBmcm9tICcuLi9naXRodWInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy9jaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ3JlcG8tY2FyZCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdzZWFyY2gvcmVwby1jYXJkLmNvbXBvbmVudC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIFJlcG9DYXJkIHtcclxuICBASW5wdXQoKSByZXBvOiBSZXBvO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIEBJbmplY3QoUm91dGVyKSBwcml2YXRlIHJvdXRlcjogUm91dGVyXHJcbiAgKSB7fVxyXG5cclxuICBzZWxlY3QoKSB7XHJcbiAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9yZXBvJywgdGhpcy5yZXBvLm93bmVyLmxvZ2luLCB0aGlzLnJlcG8ubmFtZV0pO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIE91dHB1dCwgSW5wdXQsIEluamVjdCwgT25EZXN0cm95LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlLCBTdWJqZWN0LCBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzJztcclxuaW1wb3J0IHsgRm9ybUNvbnRyb2wsIFJFQUNUSVZFX0ZPUk1fRElSRUNUSVZFUyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgU2VhcmNoQWN0aW9uLCBEaXNwYXRjaGVyLCBkaXNwYXRjaGVyIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgLy9jaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcclxuICBzZWxlY3RvcjogJ3NlYXJjaC1iYXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnc2VhcmNoL3NlYXJjaC1iYXIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIGRpcmVjdGl2ZXM6IFtSRUFDVElWRV9GT1JNX0RJUkVDVElWRVNdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hCYXIgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xyXG4gIHByaXZhdGUgdGVybUNvbnRyb2w6IEZvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnKTtcclxuICBwcml2YXRlIHNlYXJjaENsaWNrJCA9IG5ldyBTdWJqZWN0PHZvaWQ+KCk7XHJcbiAgcHJpdmF0ZSBzdWI6U3Vic2NyaXB0aW9uO1xyXG5cclxuICBASW5wdXQoKSB0ZXJtOiBzdHJpbmc7XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBASW5qZWN0KGRpc3BhdGNoZXIpIHByaXZhdGUgZGlzcGF0Y2hlcjogRGlzcGF0Y2hlclxyXG4gICkge1xyXG4gICAgY29uc3QgdGVybSQgPSAodGhpcy50ZXJtQ29udHJvbC52YWx1ZUNoYW5nZXMgYXMgT2JzZXJ2YWJsZTxzdHJpbmc+KS5zdGFydFdpdGgoJycpO1xyXG5cclxuICAgIHRoaXMuc3ViID0gT2JzZXJ2YWJsZS5jb21iaW5lTGF0ZXN0KFxyXG4gICAgICAgIHRlcm0kLmRlYm91bmNlVGltZSgxMDAwKSxcclxuICAgICAgICB0aGlzLnNlYXJjaENsaWNrJC5zdGFydFdpdGgobnVsbClcclxuICAgICAgKVxyXG4gICAgICAud2l0aExhdGVzdEZyb20odGVybSQsIChfLCB0ZXJtKSA9PiB0ZXJtKVxyXG4gICAgICAuZmlsdGVyKHRlcm0gPT4gdGVybS5sZW5ndGggPiAwKVxyXG4gICAgICAuZGlzdGluY3RVbnRpbENoYW5nZWQoKVxyXG4gICAgICAuc3Vic2NyaWJlKHRlcm0gPT4ge1xyXG4gICAgICAgIHRoaXMuZGlzcGF0Y2hlci5uZXh0KG5ldyBTZWFyY2hBY3Rpb24odGVybSkpXHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgbmdPbkRlc3Ryb3koKSB7XHJcbiAgICB0aGlzLnN1Yi51bnN1YnNjcmliZSgpO1xyXG4gIH1cclxuXHJcbiAgc2VhcmNoQ2xpY2soKSB7XHJcbiAgICB0aGlzLnNlYXJjaENsaWNrJC5uZXh0KG51bGwpO1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBJbnB1dCwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgU2VhcmNoUmVzdWx0LCBSZXBvIH0gZnJvbSAnLi4vZ2l0aHViJztcclxuaW1wb3J0IHsgUmVwb0NhcmQgfSBmcm9tICcuL3JlcG8tY2FyZC5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBTZWFyY2hCYXIgfSBmcm9tICcuL3NlYXJjaC1iYXIuY29tcG9uZW50JztcclxuaW1wb3J0IHsgc3RhdGUsIE1vZGVsIH0gZnJvbSAnLi4vc3RvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdzZWFyY2gtcmVwbycsXHJcbiAgdGVtcGxhdGVVcmw6ICdzZWFyY2gvc2VhcmNoLXJlcG8uY29tcG9uZW50Lmh0bWwnLFxyXG4gIGRpcmVjdGl2ZXM6IFtcclxuICAgIFJlcG9DYXJkLCBcclxuICAgIFNlYXJjaEJhcixcclxuICBdXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTZWFyY2hSZXBvIHtcclxuICB0ZXJtOiBPYnNlcnZhYmxlPHN0cmluZz47XHJcbiAgc2VhcmNoUmVzdWx0OiBPYnNlcnZhYmxlPFNlYXJjaFJlc3VsdDxSZXBvPj47XHJcblxyXG4gIGNvbnN0cnVjdG9yKFxyXG4gICAgICBASW5qZWN0KHN0YXRlKSBwcml2YXRlIHN0YXRlOiBPYnNlcnZhYmxlPE1vZGVsPlxyXG4gICkge1xyXG4gICAgdGhpcy50ZXJtID0gc3RhdGUubWFwKHN0YXRlID0+IHN0YXRlLnNlYXJjaC50ZXJtKTtcclxuICAgIHRoaXMuc2VhcmNoUmVzdWx0ID0gc3RhdGUubWFwKHN0YXRlID0+IHN0YXRlLnNlYXJjaC5yZXN1bHQpO1xyXG4gIH0gXHJcblxyXG4gIHJlcG9LZXkoaW5kZXg6IG51bWJlciwgcmVwbzogUmVwbykge1xyXG4gICAgcmV0dXJuIHJlcG8uaWQ7XHJcbiAgfVxyXG59XHJcbiIsImltcG9ydCB7IFJlcG8sIFNlYXJjaFJlc3VsdCwgSXNzdWVRdWVyeSB9IGZyb20gJy4uL2dpdGh1Yic7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEVycm9yQWN0aW9uIHsgZXI6IHN0cmluZyB9XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNFcnJvcihhY3Rpb246IEFjdGlvbik6IGFjdGlvbiBpcyBFcnJvckFjdGlvbiB7XHJcbiAgICByZXR1cm4gKGFjdGlvbiBhcyBFcnJvckFjdGlvbikuZXIgIT09IHVuZGVmaW5lZDtcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIERpc21pc3NFcnJvciB7fVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoQWN0aW9uIHsgY29uc3RydWN0b3IocHVibGljIHRlcm06IHN0cmluZykge30gfVxyXG5leHBvcnQgY2xhc3MgU2VhcmNoUmVzdWx0QWN0aW9uIGV4dGVuZHMgRGlzbWlzc0Vycm9yIHsgY29uc3RydWN0b3IocHVibGljIHJlc3VsdDogU2VhcmNoUmVzdWx0PFJlcG8+KSB7c3VwZXIoKX0gfVxyXG5leHBvcnQgY2xhc3MgRXJyb3JGZXRjaGluZ1NlYXJjaFJlc3VsdEFjdGlvbiB7IGNvbnN0cnVjdG9yKHB1YmxpYyBlcjogc3RyaW5nKSB7fSB9XHJcbmV4cG9ydCBjbGFzcyBTZWxlY3RSZXBvQWN0aW9uIHsgY29uc3RydWN0b3IocHVibGljIG93bmVyOiBzdHJpbmcsIHB1YmxpYyByZXBvOiBzdHJpbmcpIHt9IH1cclxuZXhwb3J0IGNsYXNzIFJlcG9GZXRjaGVkQWN0aW9uIGV4dGVuZHMgRGlzbWlzc0Vycm9yIHsgY29uc3RydWN0b3IocHVibGljIHJlcG9OYW1lOiBzdHJpbmcsIHB1YmxpYyByZXBvOiBSZXBvLCBwdWJsaWMgaXNzdWVzOiBJc3N1ZVF1ZXJ5KSB7c3VwZXIoKX0gfVxyXG5leHBvcnQgY2xhc3MgRXJyb3JGZXRjaGluZ1JlcG9BY3Rpb24geyBjb25zdHJ1Y3RvcihwdWJsaWMgcmVwb05hbWU6IHN0cmluZywgcHVibGljIGVyOiBzdHJpbmcpIHt9IH1cclxuZXhwb3J0IGNsYXNzIEZldGNoTW9yZUlzc3Vlc0FjdGlvbiB7IGNvbnN0cnVjdG9yKHB1YmxpYyByZXBvTmFtZTogc3RyaW5nKSB7fSB9XHJcbmV4cG9ydCBjbGFzcyBNb3JlSXNzdWVzRmV0Y2hlZEFjdGlvbiBleHRlbmRzIERpc21pc3NFcnJvciB7IGNvbnN0cnVjdG9yKHB1YmxpYyByZXBvTmFtZTogc3RyaW5nLCBwdWJsaWMgaXNzdWVzOiBJc3N1ZVF1ZXJ5KSB7c3VwZXIoKX0gfVxyXG5leHBvcnQgY2xhc3MgRXJyb3JGZXRjaGluZ01vcmVJc3N1ZXNBY3Rpb24geyBjb25zdHJ1Y3RvcihwdWJsaWMgcmVwb05hbWU6IHN0cmluZywgcHVibGljIGVyOiBzdHJpbmcpIHt9IH1cclxuXHJcbmV4cG9ydCB0eXBlIEFjdGlvbiA9IFxyXG4gICAgRGlzbWlzc0Vycm9yXHJcbiAgICB8IFNlYXJjaEFjdGlvbiBcclxuICAgIHwgU2VhcmNoUmVzdWx0QWN0aW9uIFxyXG4gICAgfCBTZWxlY3RSZXBvQWN0aW9uIFxyXG4gICAgfCBSZXBvRmV0Y2hlZEFjdGlvblxyXG4gICAgfCBFcnJvckZldGNoaW5nUmVwb0FjdGlvblxyXG4gICAgfCBGZXRjaE1vcmVJc3N1ZXNBY3Rpb25cclxuICAgIHwgRXJyb3JGZXRjaGluZ01vcmVJc3N1ZXNBY3Rpb25cclxuO1xyXG5cclxuIiwiaW1wb3J0ICogYXMgXyBmcm9tICcuLi91dGlscyc7XHJcbmltcG9ydCB7IE9ic2VydmFibGUsIEJlaGF2aW9yU3ViamVjdCB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBJbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgR2l0SHViU2VydmljZSwgUmVwbywgU2VhcmNoUmVzdWx0LCBJc3N1ZVF1ZXJ5IH0gZnJvbSAnLi4vZ2l0aHViJztcclxuaW1wb3J0IHsgZGlzcGF0Y2hlciwgRGlzcGF0Y2hlciB9IGZyb20gJy4vY29yZSc7XHJcbmltcG9ydCAqIGFzIEFjdGlvbiBmcm9tICcuL2FjdGlvbic7XHJcbmltcG9ydCAqIGFzIE1vZGVsIGZyb20gJy4vbW9kZWwnOyBcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250cm9sbGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIEBJbmplY3QoZGlzcGF0Y2hlcikgcHJpdmF0ZSBkaXNwYXRjaGVyOiBEaXNwYXRjaGVyLFxyXG4gICAgICAgIEBJbmplY3QoR2l0SHViU2VydmljZSkgcHJpdmF0ZSBnaXRodWJzZXJ2aWNlOiBHaXRIdWJTZXJ2aWNlXHJcbiAgICApIHt9XHJcblxyXG4gICAgZXJyb3IoaW5pdDogc3RyaW5nLCBhY3Rpb25zOiBPYnNlcnZhYmxlPEFjdGlvbi5BY3Rpb24+KTogT2JzZXJ2YWJsZTxzdHJpbmc+IHtcclxuICAgICAgICByZXR1cm4gYWN0aW9ucy5zY2FuKChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChBY3Rpb24uaXNFcnJvcihhY3Rpb24pKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYWN0aW9uLmVyO1xyXG4gICAgICAgICAgICB9IFxyXG4gICAgICAgICAgICBpZiAoYWN0aW9uIGluc3RhbmNlb2YgQWN0aW9uLkRpc21pc3NFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSwgaW5pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2VhcmNoKGluaXQ6IE1vZGVsLlNlYXJjaE1vZGVsLCBhY3Rpb25zOiBPYnNlcnZhYmxlPEFjdGlvbi5BY3Rpb24+KTogT2JzZXJ2YWJsZTxNb2RlbC5TZWFyY2hNb2RlbD4ge1xyXG4gICAgICAgIHJldHVybiBhY3Rpb25zLnNjYW4oKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIEFjdGlvbi5TZWFyY2hBY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGlmIChzdGF0ZS50ZXJtICE9IGFjdGlvbi50ZXJtIC8qIEtMVURHRSAqLykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2l0aHVic2VydmljZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VhcmNoUmVwb3MoYWN0aW9uLnRlcm0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB0aGlzLmRpc3BhdGNoZXIubmV4dChuZXcgQWN0aW9uLlNlYXJjaFJlc3VsdEFjdGlvbihyZXMpKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyID0+IHRoaXMuZGlzcGF0Y2hlci5uZXh0KG5ldyBBY3Rpb24uRXJyb3JGZXRjaGluZ1NlYXJjaFJlc3VsdEFjdGlvbihlcikpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBfLm1lcmdlKHN0YXRlLCB7dGVybTogYWN0aW9uLnRlcm19KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIEFjdGlvbi5TZWFyY2hSZXN1bHRBY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfLm1lcmdlKHN0YXRlLCB7cmVzdWx0OiBfLnJlcGxhY2UoYWN0aW9uLnJlc3VsdCl9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIEFjdGlvbi5FcnJvckZldGNoaW5nU2VhcmNoUmVzdWx0QWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5tZXJnZShzdGF0ZSwge3Jlc3VsdDogXy5yZW1vdmUoKX0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSwgaW5pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVwb0RldGFpbChpbml0OiBNb2RlbC5SZXBvRGV0YWlsTW9kZWwsIGFjdGlvbnM6IE9ic2VydmFibGU8QWN0aW9uLkFjdGlvbj4pOiBPYnNlcnZhYmxlPE1vZGVsLlJlcG9EZXRhaWxNb2RlbD4ge1xyXG4gICAgICAgIHJldHVybiBhY3Rpb25zLnNjYW4oKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgICAgICAgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIEFjdGlvbi5TZWxlY3RSZXBvQWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5tZXJnZShzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkUmVwbzogYWN0aW9uLm93bmVyICsgJy8nICsgYWN0aW9uLnJlcG8sXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgIH0sIGluaXQpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlcG9DYWNoZShpbml0OiBNb2RlbC5SZXBvQ2FjaGVNb2RlbCwgYWN0aW9uczogT2JzZXJ2YWJsZTxBY3Rpb24uQWN0aW9uPik6IE9ic2VydmFibGU8TW9kZWwuUmVwb0NhY2hlTW9kZWw+IHtcclxuICAgICAgICByZXR1cm4gYWN0aW9ucy5zY2FuKChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChhY3Rpb24gaW5zdGFuY2VvZiBBY3Rpb24uU2VsZWN0UmVwb0FjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVwb05hbWUgPSBhY3Rpb24ub3duZXIgKyAnLycgKyBhY3Rpb24ucmVwbztcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGVbcmVwb05hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0YXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdpdGh1YnNlcnZpY2UucmVwbyhhY3Rpb24ub3duZXIsIGFjdGlvbi5yZXBvKSxcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdpdGh1YnNlcnZpY2UuaXNzdWVzKGFjdGlvbi5vd25lciwgYWN0aW9uLnJlcG8sIHt9KVxyXG4gICAgICAgICAgICAgICAgXSlcclxuICAgICAgICAgICAgICAgIC50aGVuKChbcmVwbywgaXNzdWVzXSkgPT4gdGhpcy5kaXNwYXRjaGVyLm5leHQobmV3IEFjdGlvbi5SZXBvRmV0Y2hlZEFjdGlvbihyZXBvTmFtZSwgcmVwbywgaXNzdWVzKSkpXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXIgPT4gdGhpcy5kaXNwYXRjaGVyLm5leHQobmV3IEFjdGlvbi5FcnJvckZldGNoaW5nUmVwb0FjdGlvbihyZXBvTmFtZSwgZXIpKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8ubWVyZ2Uoc3RhdGUsIHtcclxuICAgICAgICAgICAgICAgICAgICBbcmVwb05hbWVdOiB7IGlzRmV0Y2hpbmc6IHRydWUsIHJlcG86IF8ucmVtb3ZlKCksIGlzc3VlczogXy5yZW1vdmUoKSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIEFjdGlvbi5SZXBvRmV0Y2hlZEFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8ubWVyZ2Uoc3RhdGUsIHtcclxuICAgICAgICAgICAgICAgICAgICBbYWN0aW9uLnJlcG9OYW1lXTogeyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGZXRjaGluZzogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcG86IF8ucmVwbGFjZShhY3Rpb24ucmVwbyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzc3VlczogXy5yZXBsYWNlKGFjdGlvbi5pc3N1ZXMpLCBcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIEFjdGlvbi5GZXRjaE1vcmVJc3N1ZXNBY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVwb05hbWUgfSA9IGFjdGlvbjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaXNzdWVzIH0gPSBzdGF0ZVtyZXBvTmFtZV07XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5naXRodWJzZXJ2aWNlLm1vcmUoaXNzdWVzKVxyXG4gICAgICAgICAgICAgICAgICAgIC50aGVuKG1vcmVJc3N1ZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtb3JlSXNzdWVzLml0ZW1zLnVuc2hpZnQoLi4uaXNzdWVzLml0ZW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyLm5leHQobmV3IEFjdGlvbi5Nb3JlSXNzdWVzRmV0Y2hlZEFjdGlvbihyZXBvTmFtZSwgbW9yZUlzc3VlcykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgLmNhdGNoKGVyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaGVyLm5leHQobmV3IEFjdGlvbi5FcnJvckZldGNoaW5nTW9yZUlzc3Vlc0FjdGlvbihyZXBvTmFtZSwgZXIpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gXy5tZXJnZShzdGF0ZSwge1xyXG4gICAgICAgICAgICAgICAgICAgIFtyZXBvTmFtZV06IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNGZXRjaGluZzogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIEFjdGlvbi5Nb3JlSXNzdWVzRmV0Y2hlZEFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIF8ubWVyZ2Uoc3RhdGUsIHtcclxuICAgICAgICAgICAgICAgICAgICBbYWN0aW9uLnJlcG9OYW1lXToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpc0ZldGNoaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNzdWVzOiBfLnJlcGxhY2UoYWN0aW9uLmlzc3VlcyksXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFjdGlvbiBpbnN0YW5jZW9mIEFjdGlvbi5FcnJvckZldGNoaW5nUmVwb0FjdGlvbiB8fCBhY3Rpb24gaW5zdGFuY2VvZiBBY3Rpb24uRXJyb3JGZXRjaGluZ01vcmVJc3N1ZXNBY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfLm1lcmdlKHN0YXRlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgW2FjdGlvbi5yZXBvTmFtZV06IF8ucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICAgICAgfSwgaW5pdCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVkdWNlKGluaXQ6IE1vZGVsLk1vZGVsLCBhY3Rpb25zOiBPYnNlcnZhYmxlPEFjdGlvbi5BY3Rpb24+KTogT2JzZXJ2YWJsZTxNb2RlbC5Nb2RlbD4ge1xyXG4gICAgICAgIGNvbnN0IHJlcyA9IG5ldyBCZWhhdmlvclN1YmplY3QoaW5pdCk7XHJcbiAgICAgICAgT2JzZXJ2YWJsZVxyXG4gICAgICAgICAgICAuemlwKFxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucy5kbyhhY3Rpb24gPT4gY29uc29sZS5sb2coe2FjdGlvbn0pKSxcclxuICAgICAgICAgICAgICAgIGFjdGlvbnMuc2NhbigodmVyLCBhY3Rpb25zKSA9PiB2ZXIrMSwgaW5pdC52ZXIpLFxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IoaW5pdC5lcnJvciwgYWN0aW9ucyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNlYXJjaChpbml0LnNlYXJjaCwgYWN0aW9ucyksXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcG9EZXRhaWwoaW5pdC5yZXBvRGV0YWlsLCBhY3Rpb25zKSxcclxuICAgICAgICAgICAgICAgIHRoaXMucmVwb0NhY2hlKGluaXQucmVwb0NhY2hlLCBhY3Rpb25zKSxcclxuXHJcbiAgICAgICAgICAgICAgICAoXywgdmVyLCBlcnJvciwgc2VhcmNoLCByZXBvRGV0YWlsLCByZXBvQ2FjaGUpID0+ICh7dmVyLCBlcnJvciwgc2VhcmNoLCByZXBvRGV0YWlsLCByZXBvQ2FjaGV9KVxyXG4gICAgICAgICAgICApXHJcbiAgICAgICAgICAgIC5kbyhtb2RlbCA9PiBjb25zb2xlLmxvZyh7bW9kZWwsIHZlcjogbW9kZWwudmVyfSkpXHJcbiAgICAgICAgICAgIC5zdWJzY3JpYmUoc3RhdGUgPT4gcmVzLm5leHQoc3RhdGUpKTtcclxuICAgICAgICByZXR1cm4gcmVzO1xyXG4gICAgfVxyXG59XHJcblxyXG4iLCJpbXBvcnQgeyBTdWJqZWN0LCBPYnNlcnZhYmxlLCBPYnNlcnZlciB9IGZyb20gJ3J4anMnO1xyXG5pbXBvcnQgeyBPcGFxdWVUb2tlbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3Rpb24gfSBmcm9tICcuL2FjdGlvbic7XHJcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XHJcblxyXG5leHBvcnQgY29uc3QgaW5pdFN0YXRlID0gbmV3IE9wYXF1ZVRva2VuKFwiaW5pdFN0YXRlXCIpO1xyXG5leHBvcnQgY29uc3QgZGlzcGF0Y2hlciA9IG5ldyBPcGFxdWVUb2tlbihcImRpc3BhdGNoZXJcIik7XHJcbmV4cG9ydCBjb25zdCBzdGF0ZSA9IG5ldyBPcGFxdWVUb2tlbihcInN0YXRlXCIpO1xyXG5cclxuZXhwb3J0IHR5cGUgRGlzcGF0Y2hlciA9IE9ic2VydmVyPEFjdGlvbj47XHJcbmV4cG9ydCB0eXBlIFN0YXRlID0gT2JzZXJ2YWJsZTxNb2RlbD47XHJcbiIsImltcG9ydCB7IFN1YmplY3QsIE9ic2VydmFibGUsIE9ic2VydmVyIH0gZnJvbSAncnhqcyc7XHJcbmltcG9ydCB7IE9wYXF1ZVRva2VuLCBJbmplY3QsIHByb3ZpZGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgaW5pdFN0YXRlLCBkaXNwYXRjaGVyLCBzdGF0ZSB9IGZyb20gJy4vY29yZSc7XHJcbmltcG9ydCB7IEFjdGlvbiB9IGZyb20gJy4vYWN0aW9uJztcclxuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcic7XHJcblxyXG5leHBvcnQgKiBmcm9tICcuL2NvcmUnO1xyXG5leHBvcnQgKiBmcm9tICcuL21vZGVsJztcclxuZXhwb3J0ICogZnJvbSAnLi9hY3Rpb24nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHByb3ZpZGVDb250cm9sbGVyKCkge1xyXG4gICAgY29uc3QgaW5pdDogTW9kZWwgPSB7XHJcbiAgICAgICAgdmVyOiAwLFxyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIHNlYXJjaDoge1xyXG4gICAgICAgICAgICB0ZXJtOicnLCBcclxuICAgICAgICAgICAgcmVzdWx0OiBudWxsLFxyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIHJlcG9EZXRhaWw6IHtcclxuICAgICAgICAgICAgc2VsZWN0ZWRSZXBvOiBudWxsLFxyXG4gICAgICAgIH0sIFxyXG4gICAgICAgIHJlcG9DYWNoZToge30sXHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiBbXHJcbiAgICAgICAgcHJvdmlkZShpbml0U3RhdGUsIHt1c2VWYWx1ZTogaW5pdH0pLFxyXG4gICAgICAgIHByb3ZpZGUoZGlzcGF0Y2hlciwge3VzZVZhbHVlOiBuZXcgU3ViamVjdDxBY3Rpb24+KG51bGwpfSksXHJcbiAgICAgICAgQ29udHJvbGxlcixcclxuICAgICAgICBwcm92aWRlKHN0YXRlLCB7XHJcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChjb250cm9sbGVyOiBDb250cm9sbGVyLCBpbml0U3RhdGU6IE1vZGVsLCBkaXNwYXRjaGVyOiBPYnNlcnZhYmxlPEFjdGlvbj4pID0+IGNvbnRyb2xsZXIucmVkdWNlKGluaXRTdGF0ZSwgZGlzcGF0Y2hlciksIFxyXG4gICAgICAgICAgICBkZXBzOiBbQ29udHJvbGxlciwgbmV3IEluamVjdChpbml0U3RhdGUpLCBuZXcgSW5qZWN0KGRpc3BhdGNoZXIpXVxyXG4gICAgICAgIH0pXHJcbiAgICBdO1xyXG59XHJcbiIsIiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEdpdEh1YlNlcnZpY2UgfSBmcm9tICcuLi9naXRodWInO1xyXG5pbXBvcnQgKiBhcyBfIGZyb20gJy4vbWVyZ2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdkZWJ1ZycsXHJcbiAgdGVtcGxhdGU6IGBcclxuICAgIDxmb3JtIChuZ1N1Ym1pdCk9XCJydW4ocXFxLnZhbHVlKVwiIGNsYXNzPVwibmF2YmFyLWZvcm0gbmF2YmFyLWxlZnRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1ncm91cFwiPlxyXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjcXFxIGNsYXNzPVwiZm9ybS1jb250cm9sXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+RXZhbDwvYnV0dG9uPlxyXG4gICAgPC9mb3JtPlxyXG4gIGAsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZWJ1ZyB7XHJcbiAgY29uc3RydWN0b3IoQEluamVjdChHaXRIdWJTZXJ2aWNlKSBwcml2YXRlIGdpdGh1YnNlcnZpY2U6IEdpdEh1YlNlcnZpY2UpIHt9XHJcblxyXG4gIHJ1bihxOiBzdHJpbmcpIHtcclxuICAgICAgdmFyIGUgPSBcIihmdW5jdGlvbiB1bm5hbWVkKG9jdG8sIF8pe3JldHVybiBcIitxK1wiO30pXCI7XHJcbiAgICAgIGNvbnNvbGUuZGlyKHEpO1xyXG4gICAgICB0cnkgeyBcclxuICAgICAgICB2YXIgciA9IGV2YWwoZSk7XHJcbiAgICAgICAgciA9IHIodGhpcy5naXRodWJzZXJ2aWNlLm9jdG8sIF8pO1xyXG4gICAgICAgIGNvbnNvbGUuZGlyKHIpO1xyXG4gICAgICAgIGlmKHIgJiYgci50aGVuKSByLnRoZW4oKG86YW55KT0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYXN5bmMgZnJvbSBcIiArIHEpO1xyXG4gICAgICAgICAgY29uc29sZS5kaXIobyk7XHJcbiAgICAgICAgfSk7IFxyXG4gICAgICB9IGNhdGNoKGVyKSB7XHJcbiAgICAgICAgY29uc29sZS5kaXIoZXIpO1xyXG4gICAgICB9XHJcbiAgfVxyXG59XHJcbiIsImV4cG9ydCAqIGZyb20gJy4vcmVzdWx0JztcclxuZXhwb3J0IHsgRGVidWcgfSBmcm9tICcuL2RlYnVnLmNvbXBvbmVudCc7XHJcbmV4cG9ydCAqIGZyb20gJy4vbWVyZ2UnO1xyXG4iLCJpbXBvcnQgKiBhcyBfIGZyb20gJ2xvZGFzaCc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZTxUPihvOiBUKTogVCB7XHJcbiAgICByZXR1cm4gXy5tZXJnZShvLCB7X19yZXBsYWNlOiB0cnVlfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoKTogYW55IHtcclxuICAgIHJldHVybiBudWxsO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2U8VD4oXHJcbiAgICBzcmMxOiBULFxyXG4gICAgLi4uc3JjTjogYW55W11cclxuKTogVCBcclxue1xyXG4gICAgcmV0dXJuIChfIGFzIGFueSkubWVyZ2VXaXRoKHt9LCBzcmMxLCAuLi5zcmNOLCAoZGVzdDogYW55LCBzcmM6IGFueSwga2V5OiBhbnkpID0+IHtcclxuICAgICAgICBpZiAoc3JjKSB7XHJcbiAgICAgICAgICAgIGlmIChzcmMuX19yZXBsYWNlKSB7XHJcbiAgICAgICAgICAgICAgICBkZWxldGUgc3JjLl9fcmVwbGFjZTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzcmM7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgIH0pXHJcbn1cclxuIiwiaW50ZXJmYWNlIEZhaWx1cmUge1xyXG4gICAgZXJyb3I6IGFueTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN1Y2Nlc3M8VD4ge1xyXG4gICAgc3VjY2VzczogVDtcclxufVxyXG5cclxuZXhwb3J0IHR5cGUgUmVzdWx0PFQ+ID0gRmFpbHVyZSB8IFN1Y2Nlc3M8VD47XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmFpbDxUPihlcnJvcjogYW55KTogUmVzdWx0PFQ+IHtcclxuICAgIHJldHVybiB7ZXJyb3I6IGVycm9yfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHN1Y2Nlc3M8VD4odmFsdWU6IFQpOiBSZXN1bHQ8VD4ge1xyXG4gICAgcmV0dXJuIHtzdWNjZXNzOiB2YWx1ZX07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzdWNjZWVkZWQ8VD4ocmVzOiBSZXN1bHQ8VD4pOiByZXMgaXMgU3VjY2VzczxUPiB7XHJcbiAgICByZXR1cm4gKHJlcyBhcyBTdWNjZXNzPFQ+KS5zdWNjZXNzICE9PSB1bmRlZmluZWQ7XHJcbn0iXX0=
