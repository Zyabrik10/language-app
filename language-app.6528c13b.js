// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"6DHTQ":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "62088a896528c13b";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"6kb64":[function(require,module,exports,__globalThis) {
var _config = require("./config");
var _mainJs = require("./main.js");
window.addEventListener("load", function actionRightAfterPageIsLoad() {
    (0, _config.config)();
    (0, _mainJs.main)();
});

},{"./config":"6gJBy","./main.js":"lhpGb"}],"6gJBy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "config", ()=>config);
var _globalVariables = require("../globalVariables");
var _initElements = require("./initElements");
var _initElementsDefault = parcelHelpers.interopDefault(_initElements);
var _initVars = require("./initVars");
var _initVarsDefault = parcelHelpers.interopDefault(_initVars);
var _setEvents = require("./setEvents");
var _setEventsDefault = parcelHelpers.interopDefault(_setEvents);
function config() {
    (0, _initElementsDefault.default)();
    const lang = Array.from((0, _globalVariables.elements).langSwitchers).filter((e)=>e.checked)[0].dataset.lang;
    (0, _initVarsDefault.default)(`favorite${lang[0].toUpperCase() + lang.split("").splice(1).join("")}Words`, lang);
    (0, _setEventsDefault.default)();
}

},{"../globalVariables":"irTVF","./initElements":"dHbGG","./initVars":"lo5T9","./setEvents":"6IRk8","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"irTVF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "vars", ()=>vars);
parcelHelpers.export(exports, "elements", ()=>elements);
const vars = {};
const elements = {};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"dHbGG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>initElements);
var _globalVariables = require("../globalVariables");
function initElements() {
    (0, _globalVariables.elements).dictionaryListElement = document.querySelector(".dictionary-list");
    (0, _globalVariables.elements).wordsCountEl = document.querySelector(".words-count");
    (0, _globalVariables.elements).searchInput = document.querySelector(".dictionary-input");
    (0, _globalVariables.elements).closeModalBtn = document.querySelector(".modal-close-btn");
    (0, _globalVariables.elements).modalAddBtn = document.querySelector(".modal-add-btn");
    (0, _globalVariables.elements).modal = document.querySelector(".modal");
    (0, _globalVariables.elements).modalContent = document.querySelector(".modal-content");
    (0, _globalVariables.elements).trainWordAllWordsElement = document.querySelector(".train-word-allWords");
    (0, _globalVariables.elements).trainWordCurrentIndexElement = document.querySelector(".train-word-currentIndex");
    (0, _globalVariables.elements).trainWordRandomWordElement = document.querySelector(".train-word-random-word");
    (0, _globalVariables.elements).dictionaryFilters = document.querySelector(".dictionary-filters");
    (0, _globalVariables.elements).trainWordsFiltersElement = document.querySelector(".train-words-filters");
    (0, _globalVariables.elements).trainWritingTextForm = document.querySelector(".train-writing-text-form");
    (0, _globalVariables.elements).trainWritingTextAiReview = document.querySelector(".train-writing-text-ai-review");
    (0, _globalVariables.elements).langSwitchers = document.querySelectorAll(".lang-radio-switcher");
    (0, _globalVariables.elements).trainWritingTextTotalWords = document.querySelector(".train-writing-text-total-words");
    (0, _globalVariables.elements).trainWritingTextTextArea = document.querySelector(".train-writing-text-textarea");
    (0, _globalVariables.elements).allLinkButtons = document.querySelectorAll(".link-button");
}

},{"../globalVariables":"irTVF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lo5T9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>initVars);
var _classes = require("../classes");
// Words import
var _enJson = require("../../words/en.json");
var _enJsonDefault = parcelHelpers.interopDefault(_enJson);
var _plJson = require("../../words/pl.json");
var _plJsonDefault = parcelHelpers.interopDefault(_plJson);
var _utils = require("../utils");
var _globalVariables = require("../globalVariables");
// Parsing words
const words = {
    en: (0, _utils.parseWords)((0, _enJsonDefault.default)),
    pl: (0, _utils.parseWords)((0, _plJsonDefault.default))
};
function initVars(localStorageName, lang) {
    (0, _globalVariables.vars).lang = lang;
    (0, _globalVariables.vars).wordsInstance = new (0, _classes.Dictionary)(words[lang]);
    (0, _globalVariables.vars).storage = new (0, _classes.LocalStorage)(localStorageName);
    (0, _globalVariables.vars).langs = {
        en: "English",
        pl: "Polish"
    };
    (0, _globalVariables.vars).filters = {
        dictionary: {},
        trainWords: {}
    };
    // init favorite words
    (0, _globalVariables.vars).wordsInstance.setFavorites(true, ...(0, _globalVariables.vars).storage.getItem() || []);
    // fill vars.dictionaryFilters
    (0, _globalVariables.vars).wordsInstance.types.forEach((type, index)=>{
        for(const key_type in (0, _globalVariables.vars).filters)(0, _globalVariables.vars).filters[key_type][type] = {
            used: false,
            expression: (0, _globalVariables.vars).wordsInstance.types_expression[index]
        };
    });
}

},{"../classes":"kxt4J","../../words/en.json":"aXSgU","../../words/pl.json":"kjSzs","../utils":"9UsVm","../globalVariables":"irTVF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kxt4J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LocalStorage", ()=>(0, _localStorageDefault.default));
parcelHelpers.export(exports, "Dictionary", ()=>(0, _dictionaryDefault.default));
var _localStorage = require("./LocalStorage");
var _localStorageDefault = parcelHelpers.interopDefault(_localStorage);
var _dictionary = require("./Dictionary");
var _dictionaryDefault = parcelHelpers.interopDefault(_dictionary);

},{"./LocalStorage":"lVDZ7","./Dictionary":"ctwsM","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lVDZ7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class LocalStorage {
    constructor(storageName){
        this.storageName = storageName;
    }
    getItem() {
        const item = localStorage.getItem(this.storageName);
        return item === null ? null : JSON.parse(item);
    }
    setItem(value) {
        localStorage.setItem(this.storageName, JSON.stringify(value));
    }
}
exports.default = LocalStorage;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"ctwsM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Dictionary {
    constructor(dictionary, favorite_expression = "favorite"){
        this.types = [
            "favorite"
        ];
        this.types_expression = [
            favorite_expression
        ];
        this.d = dictionary.map((word)=>{
            if (!this.hasType(word.type)) {
                this.types.push(word.type);
                this.types_expression.push(word.type_expression);
            }
            return {
                ...word,
                favorite: false
            };
        });
    }
    setFavoriteById(id, state) {
        const word = this.getById(id);
        if (!word) return;
        word.favorite = state;
    }
    setFavorites(state, ...ides) {
        ides.forEach((id)=>{
            this.setFavoriteById(id, state);
        });
    }
    getFavorites(arr = this.d, fav = true) {
        return arr.filter(({ favorite })=>fav === favorite);
    }
    getById(wantedId, arr = this.d) {
        return arr.find(({ id: wordId })=>wordId === wantedId);
    }
    hasType(type) {
        return Boolean(this.types.find((t)=>t === type));
    }
    getWordsByType(type, arr = this.d) {
        if (!this.hasType(type)) return [];
        return arr.filter(({ type: wordType })=>wordType === type);
    }
    getWordsByTypes(arr = this.d, ...types) {
        const res = [];
        types.forEach((type)=>{
            const words = this.getWordsByType(type, arr);
            if (words.length === 0) return;
            res.push(...words);
        });
        return res;
    }
    getWordsByPart(part, arr = this.d) {
        if (!part) return [
            ...arr
        ];
        const res = [];
        arr.forEach((word)=>{
            if (!word.expression.toLowerCase().includes(part.toLowerCase())) return;
            res.push(word);
        });
        return res;
    }
    getSorted(arr = this.d.map((e)=>e), inc = true) {
        arr.sort((a, b)=>inc ? a.expression.localeCompare(b.expression) : b.expression.localeCompare(a.expression));
        return arr;
    }
    add({ word, translate, type, description }) {
        if (!this.hasType(type)) this.types.push(type);
        this.d.push({
            id: String(this.d.length),
            word,
            translate,
            type,
            description
        });
        return this;
    }
    removeById(removeWordId) {
        this.d = this.d.filter(({ id })=>removeWordId !== id);
        return this;
    }
}
exports.default = Dictionary;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"aXSgU":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('["0 | a ballpark figure | \u043E\u0440\u0456\u0454\u043D\u0442\u043E\u0432\u043D\u0430 \u0446\u0438\u0444\u0440\u0430 | phrase | Phrase | \u041F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u0430 \u043E\u0446\u0456\u043D\u043A\u0430 \u043A\u0456\u043B\u044C\u043A\u043E\u0441\u0442\u0456 \u0430\u0431\u043E \u0441\u0443\u043C\u0438","1 | a bit down | \u0442\u0440\u043E\u0445\u0438 \u0441\u0443\u043C\u043D\u0438\u0439 | phrase | Phrase | \u041F\u043E\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0435 \u0434\u0443\u0436\u0435 \u0434\u043E\u0431\u0440\u0435 \u0430\u0431\u043E \u0442\u0440\u043E\u0445\u0438 \u043F\u0440\u0438\u0433\u043D\u0456\u0447\u0435\u043D\u0438\u043C","2 | a close-knit community | \u0417\u0433\u0443\u0440\u0442\u043E\u0432\u0430\u043D\u0430 \u0433\u0440\u043E\u043C\u0430\u0434\u0430 | noun_phrase | Noun Phrase | \u0413\u0440\u0443\u043F\u0430 \u043B\u044E\u0434\u0435\u0439, \u044F\u043A\u0456 \u0442\u0456\u0441\u043D\u043E \u043F\u043E\u0432\'\u044F\u0437\u0430\u043D\u0456 \u043C\u0456\u0436 \u0441\u043E\u0431\u043E\u044E","3 | a free spirit | \u0412\u0456\u043B\u044C\u043D\u0430 \u0434\u0443\u0448\u0430 | noun_phrase | Noun Phrase | \u041B\u044E\u0434\u0438\u043D\u0430, \u044F\u043A\u0430 \u0436\u0438\u0432\u0435 \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E \u0442\u0430 \u043D\u0435 \u0441\u043B\u0456\u0434\u0443\u0454 \u0437\u0432\u0438\u0447\u043D\u0438\u043C \u043D\u043E\u0440\u043C\u0430\u043C","4 | a free-for-all | \u0411\u0435\u0437\u043B\u0430\u0434 | noun | Noun | \u0421\u0438\u0442\u0443\u0430\u0446\u0456\u044F \u0431\u0435\u0437 \u043F\u0440\u0430\u0432\u0438\u043B \u0430\u0431\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E","5 | a gathering | \u0417\u0443\u0441\u0442\u0440\u0456\u0447 | noun | Noun | \u041A\u043E\u043B\u0438 \u043B\u044E\u0434\u0438 \u0437\u0431\u0438\u0440\u0430\u044E\u0442\u044C\u0441\u044F \u0440\u0430\u0437\u043E\u043C","6 | a helping hand | \u0414\u043E\u043F\u043E\u043C\u0456\u0436\u043D\u0430 \u0440\u0443\u043A\u0430 | noun_phrase | Noun Phrase | \u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u043A\u043E\u043C\u0443\u0441\u044C","7 | a hostile | \u0412\u043E\u0440\u043E\u0436\u0438\u0439 | noun | Noun | \u041B\u044E\u0434\u0438\u043D\u0430 \u0430\u0431\u043E \u0433\u0440\u0443\u043F\u0430, \u0449\u043E \u0432\u0438\u044F\u0432\u043B\u044F\u0454 \u0432\u043E\u0440\u043E\u0436\u0456\u0441\u0442\u044C","8 | a long-standing immigrant community | \u0414\u0430\u0432\u043D\u044F \u0433\u0440\u043E\u043C\u0430\u0434\u0430 \u0456\u043C\u043C\u0456\u0433\u0440\u0430\u043D\u0442\u0456\u0432 | noun_phrase | Noun Phrase | \u0421\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0430 \u0456\u043C\u043C\u0456\u0433\u0440\u0430\u043D\u0442\u0456\u0432, \u044F\u043A\u0430 \u0456\u0441\u043D\u0443\u0454 \u0442\u0440\u0438\u0432\u0430\u043B\u0438\u0439 \u0447\u0430\u0441","9 | a play on words | \u0433\u0440\u0430 \u0441\u043B\u0456\u0432 | phrase | Phrase | \u0416\u0430\u0440\u0442, \u0437\u0430\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430 \u043F\u043E\u0434\u0432\u0456\u0439\u043D\u043E\u043C\u0443 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u0456 \u0441\u043B\u0456\u0432","10 | a reality check | \u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044E | noun_phrase | Noun Phrase | \u041C\u043E\u043C\u0435\u043D\u0442 \u0443\u0441\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0442\u0430\u043D\u0443 \u0440\u0435\u0447\u0435\u0439","11 | a rich heritage | \u0411\u0430\u0433\u0430\u0442\u0430 \u0441\u043F\u0430\u0434\u0449\u0438\u043D\u0430 | noun_phrase | Noun Phrase | \u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u0456 \u0430\u0431\u043E \u0456\u0441\u0442\u043E\u0440\u0438\u0447\u043D\u0456 \u0446\u0456\u043D\u043D\u043E\u0441\u0442\u0456, \u0449\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u044C\u0441\u044F \u0437 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u044F \u0432 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u044F","12 | a sure path | \u0412\u0456\u0440\u043D\u0438\u0439 \u0448\u043B\u044F\u0445 | noun_phrase | Noun Phrase | \u0413\u0430\u0440\u0430\u043D\u0442\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 \u0434\u043E\u0441\u044F\u0433\u043D\u0435\u043D\u043D\u044F \u0447\u043E\u0433\u043E\u0441\u044C","13 | a tomb | \u0413\u0440\u043E\u0431\u043D\u0438\u0446\u044F | noun | Noun | \u041C\u0456\u0441\u0446\u0435 \u043F\u043E\u0445\u043E\u0432\u0430\u043D\u043D\u044F, \u0447\u0430\u0441\u0442\u043E \u043C\u043E\u043D\u0443\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0435","14 | a win-win situation | \u0421\u0438\u0442\u0443\u0430\u0446\u0456\u044F \u0432\u0438\u0433\u0440\u0430\u0448-\u0432\u0438\u0433\u0440\u0430\u0448 | noun_phrase | Noun Phrase | \u0421\u0438\u0442\u0443\u0430\u0446\u0456\u044F, \u0432\u0438\u0433\u0456\u0434\u043D\u0430 \u0434\u043B\u044F \u0432\u0441\u0456\u0445 \u0441\u0442\u043E\u0440\u0456\u043D","15 | beyond doubt | \u0431\u0435\u0437 \u0441\u0443\u043C\u043D\u0456\u0432\u0443 | phrase | Phrase | \u0422\u043E\u0447\u043D\u043E, \u0431\u0435\u0437 \u0436\u043E\u0434\u043D\u0438\u0445 \u0441\u0443\u043C\u043D\u0456\u0432\u0456\u0432","16 | beyond help | \u043F\u043E\u0437\u0430 \u043C\u0435\u0436\u0430\u043C\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0438 | phrase | Phrase | \u0421\u0442\u0430\u043D, \u043A\u043E\u043B\u0438 \u0432\u0436\u0435 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u043C\u043E\u0436\u043D\u0430 \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0434\u043B\u044F \u043F\u043E\u043B\u0456\u043F\u0448\u0435\u043D\u043D\u044F","17 | beyond me | \u043D\u0435 \u0434\u043B\u044F \u043C\u043E\u0433\u043E \u0440\u043E\u0437\u0443\u043C\u0456\u043D\u043D\u044F | phrase | Phrase | \u0429\u043E\u0441\u044C, \u0449\u043E \u044F \u043D\u0435 \u043C\u043E\u0436\u0443 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u0442\u0438","18 | beyond one | \u043F\u043E\u0437\u0430 \u0447\u0438\u0457\u043C\u043E\u0441\u044C \u0440\u043E\u0437\u0443\u043C\u0456\u043D\u043D\u044F\u043C | phrase | Phrase | \u041D\u0430\u0434\u0442\u043E \u0441\u043A\u043B\u0430\u0434\u043D\u043E \u0434\u043B\u044F \u0440\u043E\u0437\u0443\u043C\u0456\u043D\u043D\u044F","19 | beyond recognition | \u0434\u043E \u043D\u0435\u0432\u043F\u0456\u0437\u043D\u0430\u043D\u043D\u044F | phrase | Phrase | \u0414\u0443\u0436\u0435 \u0441\u0438\u043B\u044C\u043D\u043E \u0437\u043C\u0456\u043D\u0438\u0432\u0441\u044F","20 | beyond the call of duty | \u043F\u043E\u0437\u0430 \u043C\u0435\u0436\u0430\u043C\u0438 \u043E\u0431\u043E\u0432\'\u044F\u0437\u043A\u0456\u0432 | phrase | Phrase | \u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F","21 | beyond the joke | \u0432\u0436\u0435 \u043D\u0435 \u0441\u043C\u0456\u0448\u043D\u043E | phrase | Phrase | \u0421\u0438\u0442\u0443\u0430\u0446\u0456\u044F, \u044F\u043A\u0430 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043B\u0430 \u0431\u0443\u0442\u0438 \u0436\u0430\u0440\u0442\u0456\u0432\u043B\u0438\u0432\u043E\u044E","22 | a bleak landscape | \u041F\u043E\u0445\u043C\u0443\u0440\u0438\u0439 \u043F\u0435\u0439\u0437\u0430\u0436 | noun_phrase | Noun Phrase | \u041D\u0435\u043F\u0440\u0438\u0432\u0456\u0442\u043D\u0430, \u0431\u0435\u0437\u0440\u0430\u0434\u0456\u0441\u043D\u0430 \u043C\u0456\u0441\u0446\u0435\u0432\u0456\u0441\u0442\u044C","23 | bone dry | \u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u0441\u0443\u0445\u0438\u0439 | adjective_phrase | Adjective Phrase | \u041F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u043F\u043E\u0437\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0432\u043E\u043B\u043E\u0433\u0438","24 | brand new | \u0446\u0456\u043B\u043A\u043E\u043C \u043D\u043E\u0432\u0438\u0439 | adjective_phrase | Adjective Phrase | \u0410\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u043D\u043E\u0432\u0438\u0439, \u044F\u043A\u0438\u0439 \u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0432\u0441\u044F","25 | a cloudless sky | \u0411\u0435\u0437\u0445\u043C\u0430\u0440\u043D\u0435 \u043D\u0435\u0431\u043E | noun_phrase | Noun Phrase | \u041D\u0435\u0431\u043E \u0431\u0435\u0437 \u0436\u043E\u0434\u043D\u043E\u0457 \u0445\u043C\u0430\u0440\u0438\u043D\u043A\u0438","26 | to come across as | \u0441\u043F\u0440\u0438\u0439\u043C\u0430\u0442\u0438\u0441\u044F \u044F\u043A | phrasal_verb | Phrasal Verb | \u0412\u0438\u0433\u043B\u044F\u0434\u0430\u0442\u0438 \u043F\u0435\u0432\u043D\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u0432 \u043E\u0447\u0430\u0445 \u0456\u043D\u0448\u0438\u0445","27 | content | \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u0438\u0439 | adjective | Adjective | \u0421\u0442\u0430\u043D \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u0441\u043F\u043E\u043A\u043E\u044E \u0442\u0430 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u043D\u044F","28 | cross | \u0441\u0435\u0440\u0434\u0438\u0442\u0438\u0439 | adjective | Adjective | \u041F\u043E\u0447\u0443\u0442\u0442\u044F \u043B\u0435\u0433\u043A\u043E\u0433\u043E \u0440\u043E\u0437\u0434\u0440\u0430\u0442\u0443\u0432\u0430\u043D\u043D\u044F","29 | a crystal clear water | \u041A\u0440\u0438\u0448\u0442\u0430\u043B\u0435\u0432\u043E \u0447\u0438\u0441\u0442\u0430 \u0432\u043E\u0434\u0430 | noun_phrase | Noun Phrase | \u0414\u0443\u0436\u0435 \u043F\u0440\u043E\u0437\u043E\u0440\u0430, \u0447\u0438\u0441\u0442\u0430 \u0432\u043E\u0434\u0430","30 | culturally rich | \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u043E \u0431\u0430\u0433\u0430\u0442\u0438\u0439 | adjective_phrase | Adjective Phrase | \u041C\u0430\u0454 \u0431\u0430\u0433\u0430\u0442\u0443 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u0443 \u0441\u043F\u0430\u0434\u0449\u0438\u043D\u0443","31 | a deep-rooted values | \u0413\u043B\u0438\u0431\u043E\u043A\u043E \u0432\u043A\u043E\u0440\u0456\u043D\u0435\u043D\u0456 \u0446\u0456\u043D\u043D\u043E\u0441\u0442\u0456 | noun_phrase | Noun Phrase | \u0426\u0456\u043D\u043D\u043E\u0441\u0442\u0456, \u0449\u043E \u043C\u0456\u0446\u043D\u043E \u0437\u0430\u043A\u0440\u0456\u043F\u0438\u043B\u0438\u0441\u044F","32 | to deliberate | \u0434\u043E\u0432\u0433\u043E \u0442\u0430 \u0440\u0435\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0431\u043C\u0456\u0440\u043A\u043E\u0432\u0443\u0432\u0430\u0442\u0438 | verb | Verb | \u0414\u043E\u0432\u0433\u043E \u0442\u0430 \u0440\u0435\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0431\u043C\u0456\u0440\u043A\u043E\u0432\u0443\u0432\u0430\u0442\u0438","33 | despondent | \u043F\u0440\u0438\u0433\u043D\u0456\u0447\u0435\u043D\u0438\u0439 | adjective | Adjective | \u0412\u0442\u0440\u0430\u0442\u0438\u0432\u0448\u0438\u0439 \u043D\u0430\u0434\u0456\u044E, \u0443 \u0432\u0456\u0434\u0447\u0430\u0457","34 | to doze | \u0434\u0440\u0456\u043C\u0430\u0442\u0438 | verb | Verb | \u041B\u0435\u0433\u043A\u043E \u0441\u043F\u0430\u0442\u0438 \u0430\u0431\u043E \u0431\u0443\u0442\u0438 \u043D\u0430\u043F\u0456\u0432\u0441\u043E\u043D\u043D\u0438\u043C","35 | ecstatic | \u0443 \u0437\u0430\u0445\u0432\u0430\u0442\u0456 | adjective | Adjective | \u0414\u0443\u0436\u0435 \u0449\u0430\u0441\u043B\u0438\u0432\u0438\u0439 \u0430\u0431\u043E \u0437\u0431\u0443\u0434\u0436\u0435\u043D\u0438\u0439","36 | an emigrants | \u0415\u043C\u0456\u0433\u0440\u0430\u043D\u0442\u0438 | noun | Noun | \u041B\u044E\u0434\u0438, \u044F\u043A\u0456 \u0432\u0438\u0457\u0445\u0430\u043B\u0438 \u0437\u0456 \u0441\u0432\u043E\u0454\u0457 \u043A\u0440\u0430\u0457\u043D\u0438","37 | environmentally friendly | \u0435\u043A\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u043E \u0447\u0438\u0441\u0442\u0438\u0439 | adjective_phrase | Adjective Phrase | \u0411\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u0439 \u0434\u043B\u044F \u043D\u0430\u0432\u043A\u043E\u043B\u0438\u0448\u043D\u044C\u043E\u0433\u043E \u0441\u0435\u0440\u0435\u0434\u043E\u0432\u0438\u0449\u0430","38 | ethnically diverse | \u0435\u0442\u043D\u0456\u0447\u043D\u043E \u0440\u0456\u0437\u043D\u043E\u043C\u0430\u043D\u0456\u0442\u043D\u0438\u0439 | adjective_phrase | Adjective Phrase | \u041C\u0456\u0441\u0442\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043D\u0438\u043A\u0456\u0432 \u0440\u0456\u0437\u043D\u0438\u0445 \u0435\u0442\u043D\u0456\u0447\u043D\u0438\u0445 \u0433\u0440\u0443\u043F","39 | an extended family | \u0412\u0435\u043B\u0438\u043A\u0430 \u0441\u0456\u043C\'\u044F | noun_phrase | Noun Phrase | \u0421\u0456\u043C\'\u044F, \u0449\u043E \u0432\u043A\u043B\u044E\u0447\u0430\u0454 \u043A\u0456\u043B\u044C\u043A\u0430 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u044C \u0430\u0431\u043E \u0440\u043E\u0434\u0438\u0447\u0456\u0432","40 | fast asleep | \u043C\u0456\u0446\u043D\u043E \u0441\u043F\u0438\u0442\u044C | adjective_phrase | Adjective Phrase | \u0414\u0443\u0436\u0435 \u0433\u043B\u0438\u0431\u043E\u043A\u0438\u0439 \u0441\u043E\u043D","41 | feel free | \u043F\u043E\u0447\u0443\u0432\u0430\u0439\u0442\u0435\u0441\u044F \u0432\u0456\u043B\u044C\u043D\u043E | phrase | Phrase | \u0414\u043E\u0437\u0432\u0456\u043B \u0440\u043E\u0431\u0438\u0442\u0438 \u0449\u043E\u0441\u044C \u0431\u0435\u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u044C","42 | a first-generation migrants | \u041C\u0456\u0433\u0440\u0430\u043D\u0442\u0438 \u043F\u0435\u0440\u0448\u043E\u0433\u043E \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u044F | noun_phrase | Noun Phrase | \u041B\u044E\u0434\u0438, \u044F\u043A\u0456 \u043F\u0435\u0440\u0448\u0438\u043C\u0438 \u043F\u0435\u0440\u0435\u0457\u0445\u0430\u043B\u0438 \u0432 \u0456\u043D\u0448\u0443 \u043A\u0440\u0430\u0457\u043D\u0443","43 | a footage | \u041A\u0430\u0434\u0440\u0438 | noun | Noun | \u0417\u0430\u043F\u0438\u0441\u0430\u043D\u0435 \u0432\u0456\u0434\u0435\u043E \u0430\u0431\u043E \u043A\u0456\u043D\u043E\u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B","44 | freezing cold | \u043C\u043E\u0440\u043E\u0437\u043D\u043E \u0445\u043E\u043B\u043E\u0434\u043D\u043E | adjective_phrase | Adjective Phrase | \u0414\u0443\u0436\u0435 \u043D\u0438\u0437\u044C\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430","45 | a free hand | \u041F\u043E\u0432\u043D\u0430 \u0441\u0432\u043E\u0431\u043E\u0434\u0430 \u0434\u0456\u0439 | noun_phrase | Noun Phrase | \u041C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0434\u0456\u044F\u0442\u0438 \u0431\u0435\u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u044C","46 | geographically remote | \u0433\u0435\u043E\u0433\u0440\u0430\u0444\u0456\u0447\u043D\u043E \u0432\u0456\u0434\u0434\u0430\u043B\u0435\u043D\u0438\u0439 | adjective_phrase | Adjective Phrase | \u0417\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0434\u0430\u043B\u0435\u043A\u043E \u0432\u0456\u0434 \u0446\u0438\u0432\u0456\u043B\u0456\u0437\u0430\u0446\u0456\u0457","47 | to get a move on | \u043F\u043E\u0441\u043F\u0456\u0448\u0430\u0442\u0438 | phrasal_verb | Phrasal Verb | \u041F\u043E\u0447\u0430\u0442\u0438 \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044F \u0448\u0432\u0438\u0434\u0448\u0435","48 | to get off scot-free | \u0443\u043D\u0438\u043A\u043D\u0443\u0442\u0438 \u043F\u043E\u043A\u0430\u0440\u0430\u043D\u043D\u044F | phrasal_verb | Phrasal Verb | \u041D\u0435 \u043F\u043E\u043D\u0435\u0441\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0437\u0430 \u043F\u0440\u043E\u0432\u0438\u043D\u0443","49 | hot under the collar | \u0440\u043E\u0437\u043B\u044E\u0447\u0435\u043D\u0438\u0439 | adjective_phrase | Adjective Phrase | \u0414\u0443\u0436\u0435 \u0437\u043B\u0438\u0439 \u0430\u0431\u043E \u0440\u043E\u0437\u0434\u0440\u0430\u0442\u043E\u0432\u0430\u043D\u0438\u0439","50 | an immigrants | \u0406\u043C\u043C\u0456\u0433\u0440\u0430\u043D\u0442\u0438 | noun | Noun | \u041B\u044E\u0434\u0438, \u044F\u043A\u0456 \u043F\u0440\u0438\u0457\u0445\u0430\u043B\u0438 \u0436\u0438\u0442\u0438 \u0432 \u0456\u043D\u0448\u0443 \u043A\u0440\u0430\u0457\u043D\u0443","51 | in a friendly way | \u043F\u043E-\u0434\u0440\u0443\u0436\u043D\u044C\u043E\u043C\u0443 | adverbial_phrase | Adverbial phrase | \u0414\u0440\u0443\u0436\u043D\u044F \u043C\u0430\u043D\u0435\u0440\u0430 \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0438","52 | in the loop | \u0432 \u043A\u0443\u0440\u0441\u0456 \u0441\u043F\u0440\u0430\u0432 | phrase | Phrase | \u0411\u0443\u0442\u0438 \u0456\u043D\u0444\u043E\u0440\u043C\u043E\u0432\u0430\u043D\u0438\u043C \u043F\u0440\u043E \u043F\u043E\u0434\u0456\u0457","53 | industrially advanced | \u043F\u0440\u043E\u043C\u0438\u0441\u043B\u043E\u0432\u043E \u0440\u043E\u0437\u0432\u0438\u043D\u0435\u043D\u0438\u0439 | adjective_phrase | Adjective Phrase | \u041C\u0430\u0454 \u0432\u0438\u0441\u043E\u043A\u043E\u0440\u043E\u0437\u0432\u0438\u043D\u0435\u043D\u0443 \u043F\u0440\u043E\u043C\u0438\u0441\u043B\u043E\u0432\u0456\u0441\u0442\u044C","54 | an initiation | \u0406\u043D\u0456\u0446\u0456\u0430\u0446\u0456\u044F | noun | Noun | \u041F\u0440\u043E\u0446\u0435\u0441 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0432 \u044F\u043A\u0443\u0441\u044C \u0434\u0456\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0447\u0438 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044E","55 | internationally famous | \u0432\u0456\u0434\u043E\u043C\u0438\u0439 \u043D\u0430 \u043C\u0456\u0436\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u043C\u0443 \u0440\u0456\u0432\u043D\u0456 | adjective_phrase | Adjective Phrase | \u0412\u0456\u0434\u043E\u043C\u0438\u0439 \u0443 \u0432\u0441\u044C\u043E\u043C\u0443 \u0441\u0432\u0456\u0442\u0456","56 | to lend a hand | \u043F\u043E\u0434\u0430\u0442\u0438 \u0440\u0443\u043A\u0443 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0438 | phrasal_verb | Phrasal Verb | \u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u043A\u043E\u043C\u0443\u0441\u044C","57 | a lightning reaction | \u0411\u043B\u0438\u0441\u043A\u0430\u0432\u0438\u0447\u043D\u0430 \u0440\u0435\u0430\u043A\u0446\u0456\u044F | noun_phrase | Noun Phrase | \u0414\u0443\u0436\u0435 \u0448\u0432\u0438\u0434\u043A\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C \u043D\u0430 \u0449\u043E\u0441\u044C","58 | a lush vegetation | \u0411\u0443\u0439\u043D\u0430 \u0440\u043E\u0441\u043B\u0438\u043D\u043D\u0456\u0441\u0442\u044C | noun_phrase | Noun Phrase | \u0413\u0443\u0441\u0442\u0430, \u0431\u0430\u0433\u0430\u0442\u0430 \u0440\u043E\u0441\u043B\u0438\u043D\u043D\u0456\u0441\u0442\u044C","59 | a lush valleys | \u0411\u0430\u0433\u0430\u0442\u0456 \u0434\u043E\u043B\u0438\u043D\u0438 | noun_phrase | Noun Phrase | \u0420\u043E\u0434\u044E\u0447\u0456, \u0437\u0435\u043B\u0435\u043D\u0456 \u0434\u043E\u043B\u0438\u043D\u0438","60 | to move around | \u043F\u0435\u0440\u0435\u0441\u0443\u0432\u0430\u0442\u0438\u0441\u044F | phrasal_verb | Phrasal Verb | \u0420\u0443\u0445\u0430\u0442\u0438\u0441\u044F \u0437 \u043C\u0456\u0441\u0446\u044F \u043D\u0430 \u043C\u0456\u0441\u0446\u0435","61 | to move off | \u0432\u0456\u0434\'\u0457\u0436\u0434\u0436\u0430\u0442\u0438 | phrasal_verb | Phrasal Verb | \u041F\u043E\u0447\u0438\u043D\u0430\u0442\u0438 \u0440\u0443\u0445 (\u043F\u0440\u043E \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442)","62 | musically gifted | \u043C\u0443\u0437\u0438\u0447\u043D\u043E \u043E\u0431\u0434\u0430\u0440\u043E\u0432\u0430\u043D\u0438\u0439 | adjective_phrase | Adjective Phrase | \u041C\u0430\u0454 \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u0456\u0439 \u043C\u0443\u0437\u0438\u0447\u043D\u0438\u0439 \u0442\u0430\u043B\u0430\u043D\u0442","63 | no such thing as a free lunch | \u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0445 \u043E\u0431\u0456\u0434\u0456\u0432 \u043D\u0435 \u0431\u0443\u0432\u0430\u0454 | proverb | Proverb | \u0423\u0441\u044C\u043E \u0432 \u0446\u044C\u043E\u043C\u0443 \u0441\u0432\u0456\u0442\u0456 \u043C\u0430\u0454 \u0441\u0432\u043E\u044E \u0446\u0456\u043D\u0443","64 | not rocket science | \u043D\u0435 \u043D\u0430\u0439\u0441\u043A\u043B\u0430\u0434\u043D\u0456\u0448\u0435 | phrase | Phrase | \u0429\u043E\u0441\u044C \u043B\u0435\u0433\u043A\u0435 \u0434\u043B\u044F \u0440\u043E\u0437\u0443\u043C\u0456\u043D\u043D\u044F","65 | on edge | \u043D\u0430\u043F\u0440\u0443\u0436\u0435\u043D\u0438\u0439 | adjective_phrase | Adjective Phrase | \u041F\u043E\u0447\u0443\u0442\u0442\u044F \u0442\u0440\u0438\u0432\u043E\u0433\u0438 \u0430\u0431\u043E \u043D\u0435\u0440\u0432\u043E\u0437\u043D\u043E\u0441\u0442\u0456","66 | on the same page | \u043D\u0430 \u043E\u0434\u043D\u0456\u0439 \u0445\u0432\u0438\u043B\u0456 | phrase | Phrase | \u041C\u0430\u0442\u0438 \u0441\u043F\u0456\u043B\u044C\u043D\u0435 \u0440\u043E\u0437\u0443\u043C\u0456\u043D\u043D\u044F \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u0457","67 | petrified | \u043F\u0435\u0440\u0435\u043B\u044F\u043A\u0430\u043D\u0438\u0439 | adjective | Adjective | \u0414\u0443\u0436\u0435 \u043D\u0430\u043B\u044F\u043A\u0430\u043D\u0438\u0439, \u0437\u0430\u0441\u0442\u0438\u0433\u043B\u0438\u0439 \u0432\u0456\u0434 \u0441\u0442\u0440\u0430\u0445\u0443","68 | pitch black | \u0442\u0435\u043C\u043D\u0438\u0439 \u044F\u043A \u0441\u043C\u043E\u043B\u0430 | adjective_phrase | Adjective Phrase | \u0414\u0443\u0436\u0435 \u0442\u0435\u043C\u043D\u0438\u0439, \u0431\u0435\u0437 \u0441\u0432\u0456\u0442\u043B\u0430","69 | pitch dark | \u0442\u0435\u043C\u043D\u0438\u0439 \u044F\u043A \u0441\u043C\u043E\u043B\u0430 | adjective_phrase | Adjective Phrase | \u041F\u043E\u0432\u043D\u0430 \u0442\u0435\u043C\u0440\u044F\u0432\u0430","70 | politically active | \u043F\u043E\u043B\u0456\u0442\u0438\u0447\u043D\u043E \u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439 | adjective_phrase | Adjective Phrase | \u0411\u0435\u0440\u0435 \u0443\u0447\u0430\u0441\u0442\u044C \u0443 \u043F\u043E\u043B\u0456\u0442\u0438\u0447\u043D\u0456\u0439 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456","71 | rock hard | \u0442\u0432\u0435\u0440\u0434\u0438\u0439 \u044F\u043A \u043A\u0430\u043C\u0456\u043D\u044C | adjective_phrase | Adjective Phrase | \u0414\u0443\u0436\u0435 \u0442\u0432\u0435\u0440\u0434\u0438\u0439","72 | a rugged coastline | \u041F\u0435\u0440\u0435\u0441\u0456\u0447\u043D\u0435 \u0443\u0437\u0431\u0435\u0440\u0435\u0436\u0436\u044F | noun_phrase | Noun Phrase | \u0423\u0437\u0431\u0435\u0440\u0435\u0436\u0436\u044F \u0437 \u043A\u0440\u0443\u0442\u0438\u043C\u0438 \u0441\u043A\u0435\u043B\u044F\u043C\u0438","73 | a rugged terrain | \u041F\u0435\u0440\u0435\u0441\u0456\u0447\u043D\u0430 \u043C\u0456\u0441\u0446\u0435\u0432\u0456\u0441\u0442\u044C | noun_phrase | Noun Phrase | \u0421\u043A\u043B\u0430\u0434\u043D\u0430 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u0456\u0441\u0446\u0435\u0432\u0456\u0441\u0442\u044C","74 | to be scared stiff | \u043F\u0435\u0440\u0435\u043B\u044F\u043A\u0430\u043D\u0438\u0439 \u0434\u043E \u0441\u043C\u0435\u0440\u0442\u0456 | adjective_phrase | Adjective Phrase | \u0414\u0443\u0436\u0435 \u043D\u0430\u043B\u044F\u043A\u0430\u043D\u0438\u0439","75 | a snow-capped mountains | \u0417\u0430\u0441\u043D\u0456\u0436\u0435\u043D\u0456 \u0433\u043E\u0440\u0438 | noun_phrase | Noun Phrase | \u0413\u043E\u0440\u0438, \u043F\u043E\u043A\u0440\u0438\u0442\u0456 \u0441\u043D\u0456\u0433\u043E\u043C","76 | a social gathering | \u0422\u043E\u0432\u0430\u0440\u0438\u0441\u044C\u043A\u0456 \u0437\u0431\u043E\u0440\u0438 | noun_phrase | Noun Phrase | \u041D\u0435\u0444\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0456 \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0456 \u043B\u044E\u0434\u0435\u0439","77 | a sparse vegetation | \u0420\u0456\u0434\u043A\u0456\u0441\u043D\u0430 \u0440\u043E\u0441\u043B\u0438\u043D\u043D\u0456\u0441\u0442\u044C | noun_phrase | Noun Phrase | \u041D\u0435\u0433\u0443\u0441\u0442\u0430 \u0440\u043E\u0441\u043B\u0438\u043D\u043D\u0456\u0441\u0442\u044C","78 | speechless | \u043D\u0456\u043C\u0438\u0439 | adjective | Adjective | \u041D\u0435\u0437\u0434\u0430\u0442\u043D\u0438\u0439 \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u0438 \u0432\u0456\u0434 \u0441\u0438\u043B\u044C\u043D\u0438\u0445 \u0435\u043C\u043E\u0446\u0456\u0439","79 | stone cold | \u0445\u043E\u043B\u043E\u0434\u043D\u0438\u0439 \u044F\u043A \u043A\u0430\u043C\u0456\u043D\u044C | adjective_phrase | Adjective Phrase | \u0414\u0443\u0436\u0435 \u0445\u043E\u043B\u043E\u0434\u043D\u0438\u0439","80 | taken aback | \u0437\u0434\u0438\u0432\u043E\u0432\u0430\u043D\u0438\u0439 | adjective_phrase | Adjective Phrase | \u0420\u0430\u043F\u0442\u043E\u0432\u043E \u0437\u0434\u0438\u0432\u043E\u0432\u0430\u043D\u0438\u0439 \u0447\u0438\u043C\u043E\u0441\u044C","81 | the belief | \u041F\u0435\u0440\u0435\u043A\u043E\u043D\u0430\u043D\u043D\u044F | noun_phrase | Noun Phrase | \u0429\u043E\u0441\u044C, \u0443 \u0449\u043E \u043B\u044E\u0434\u0438\u043D\u0430 \u0432\u0456\u0440\u0438\u0442\u044C","82 | the constitution | \u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0456\u044F | noun | Noun | \u041E\u0441\u043D\u043E\u0432\u043D\u0438\u0439 \u0437\u0430\u043A\u043E\u043D \u043A\u0440\u0430\u0457\u043D\u0438","83 | the funny side | \u0421\u043C\u0456\u0448\u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0430 | noun_phrase | Noun Phrase | \u0416\u0430\u0440\u0442\u0456\u0432\u043B\u0438\u0432\u0438\u0439 \u0430\u0441\u043F\u0435\u043A\u0442 \u0447\u043E\u0433\u043E\u0441\u044C","84 | the heritage | \u0421\u043F\u0430\u0434\u0449\u0438\u043D\u0430 | noun | Noun | \u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u0456 \u0446\u0456\u043D\u043D\u043E\u0441\u0442\u0456, \u0449\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u044C\u0441\u044F","85 | the inclusion/exclusion | \u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F/\u0432\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F | noun_phrase | Noun Phrase | \u041F\u0440\u043E\u0446\u0435\u0441 \u0434\u043E\u0434\u0430\u0432\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u0432\u0438\u043B\u0443\u0447\u0435\u043D\u043D\u044F","86 | the loop | \u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u0446\u0438\u043A\u043B | noun_phrase | Noun Phrase | \u041F\u043E\u0442\u043E\u0447\u043D\u0438\u0439 \u0441\u0442\u0430\u043D \u0441\u043F\u0440\u0430\u0432","87 | the premise | \u041F\u0435\u0440\u0435\u0434\u0443\u043C\u043E\u0432\u0430 | noun | Noun | \u041E\u0441\u043D\u043E\u0432\u0430 \u0434\u043B\u044F \u043C\u0456\u0440\u043A\u0443\u0432\u0430\u043D\u044C","88 | the resistance to disease | \u0421\u0442\u0456\u0439\u043A\u0456\u0441\u0442\u044C \u0434\u043E \u0445\u0432\u043E\u0440\u043E\u0431 | noun_phrase | Noun Phrase | \u0417\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u043C\u0443 \u043F\u0440\u043E\u0442\u0438\u0441\u0442\u043E\u044F\u0442\u0438 \u0445\u0432\u043E\u0440\u043E\u0431\u0430\u043C","89 | the tuber | \u0411\u0443\u043B\u044C\u0431\u0430 | noun | Noun | \u0407\u0441\u0442\u0456\u0432\u043D\u0430 \u0447\u0430\u0441\u0442\u0438\u043D\u0430 \u0441\u0442\u0435\u0431\u043B\u0430 \u0440\u043E\u0441\u043B\u0438\u043D\u0438","90 | wide open | \u0448\u0438\u0440\u043E\u043A\u043E \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u0439 | adjective_phrase | Adjective Phrase | \u041F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u0439","91 | a wooded hillsides | \u041B\u0456\u0441\u0438\u0441\u0442\u0456 \u0441\u0445\u0438\u043B\u0438 | noun_phrase | Noun Phrase | \u0421\u0445\u0438\u043B\u0438, \u043F\u043E\u043A\u0440\u0438\u0442\u0456 \u043B\u0456\u0441\u043E\u043C","92 | worried sick | \u0441\u0442\u0443\u0440\u0431\u043E\u0432\u0430\u043D\u0438\u0439 \u0434\u043E \u0441\u043C\u0435\u0440\u0442\u0456 | adjective_phrase | Adjective Phrase | \u0414\u0443\u0436\u0435 \u0441\u0442\u0443\u0440\u0431\u043E\u0432\u0430\u043D\u0438\u0439","93 | to articulate | \u0447\u0456\u0442\u043A\u043E \u0432\u0438\u0441\u043B\u043E\u0432\u043B\u044E\u0432\u0430\u0442\u0438 | verb | Verb | \u042F\u0441\u043D\u043E \u0444\u043E\u0440\u043C\u0443\u043B\u044E\u0432\u0430\u0442\u0438 \u0434\u0443\u043C\u043A\u0438","94 | to be astonished | \u0431\u0443\u0442\u0438 \u0432\u0440\u0430\u0436\u0435\u043D\u0438\u043C | verb_phrase | Verb Phrase | \u0414\u0443\u0436\u0435 \u0437\u0434\u0438\u0432\u0443\u0432\u0430\u0442\u0438\u0441\u044F","95 | to be beyond somebody | \u0431\u0443\u0442\u0438 \u043F\u043E\u0437\u0430 \u0447\u0438\u0457\u043C\u043E\u0441\u044C \u0440\u043E\u0437\u0443\u043C\u0456\u043D\u043D\u044F\u043C | verb_phrase | Verb Phrase | \u0411\u0443\u0442\u0438 \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u0441\u043A\u043B\u0430\u0434\u043D\u0438\u043C \u0434\u043B\u044F \u0440\u043E\u0437\u0443\u043C\u0456\u043D\u043D\u044F","96 | to be buried | \u0431\u0443\u0442\u0438 \u043F\u043E\u0445\u043E\u0432\u0430\u043D\u0438\u043C | verb_phrase | Verb Phrase | \u041B\u0435\u0436\u0430\u0442\u0438 \u043F\u0456\u0434 \u0437\u0435\u043C\u043B\u0435\u044E \u043F\u0456\u0441\u043B\u044F \u0441\u043C\u0435\u0440\u0442\u0456","97 | to be cross | \u0431\u0443\u0442\u0438 \u0441\u0435\u0440\u0434\u0438\u0442\u0438\u043C | verb_phrase | Verb Phrase | \u041F\u043E\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0440\u043E\u0437\u0434\u0440\u0430\u0442\u043E\u0432\u0430\u043D\u0438\u043C","98 | to be done in | \u0431\u0443\u0442\u0438 \u0432\u0438\u0441\u043D\u0430\u0436\u0435\u043D\u0438\u043C | verb_phrase | Verb Phrase | \u0414\u0443\u0436\u0435 \u0432\u0442\u043E\u043C\u043B\u0435\u043D\u0438\u043C","99 | to be livid | \u0431\u0443\u0442\u0438 \u043B\u044E\u0442\u0438\u043C | verb_phrase | Verb Phrase | \u0414\u0443\u0436\u0435 \u0441\u0438\u043B\u044C\u043D\u043E \u0437\u043B\u0438\u0442\u0438\u0441\u044F","100 | to be miserable | \u0431\u0443\u0442\u0438 \u043D\u0435\u0449\u0430\u0441\u043D\u0438\u043C | verb_phrase | Verb Phrase | \u041F\u043E\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0434\u0443\u0436\u0435 \u043F\u043E\u0433\u0430\u043D\u043E","101 | to be petrified | \u0431\u0443\u0442\u0438 \u043F\u0435\u0440\u0435\u043B\u044F\u043A\u0430\u043D\u0438\u043C | verb_phrase | Verb Phrase | \u0414\u0443\u0436\u0435 \u0441\u0438\u043B\u044C\u043D\u043E \u043D\u0430\u043B\u044F\u043A\u0430\u0442\u0438\u0441\u044F","102 | to be preoccupied | \u0431\u0443\u0442\u0438 \u0437\u0430\u0439\u043D\u044F\u0442\u0438\u043C \u0434\u0443\u043C\u043A\u0430\u043C\u0438 | verb_phrase | Verb Phrase | \u0414\u0443\u043C\u0430\u0442\u0438 \u043F\u0440\u043E \u0449\u043E\u0441\u044C \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E","103 | to be speechless | \u0431\u0443\u0442\u0438 \u043D\u0456\u043C\u0438\u043C | verb_phrase | Verb Phrase | \u041D\u0435 \u043C\u0430\u0442\u0438 \u0441\u043B\u0456\u0432 \u0432\u0456\u0434 \u0441\u0438\u043B\u044C\u043D\u0438\u0445 \u0435\u043C\u043E\u0446\u0456\u0439","104 | to be thrilled | \u0431\u0443\u0442\u0438 \u0432 \u0437\u0430\u0445\u0432\u0430\u0442\u0456 | verb_phrase | Verb Phrase | \u0414\u0443\u0436\u0435 \u0440\u0430\u0434\u0456\u0442\u0438 \u0447\u043E\u043C\u0443\u0441\u044C","105 | to be ubiquitous | \u0431\u0443\u0442\u0438 \u0432\u0441\u044E\u0434\u0438\u0441\u0443\u0449\u0438\u043C | verb_phrase | Verb Phrase | \u0411\u0443\u0442\u0438 \u043F\u0440\u0438\u0441\u0443\u0442\u043D\u0456\u043C \u0441\u043A\u0440\u0456\u0437\u044C","106 | to break down barriers | \u0437\u0440\u0443\u0439\u043D\u0443\u0432\u0430\u0442\u0438 \u0431\u0430\u0440\'\u0454\u0440\u0438 | verb_phrase | Verb Phrase | \u0423\u0441\u0443\u043D\u0443\u0442\u0438 \u043F\u0435\u0440\u0435\u0448\u043A\u043E\u0434\u0438","107 | to break even | \u0432\u0438\u0439\u0442\u0438 \u0432 \u043D\u0443\u043B\u044C | verb_phrase | Verb Phrase | \u041D\u0435 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u0440\u0438\u0431\u0443\u0442\u043A\u0443, \u0430\u043B\u0435 \u0439 \u043D\u0435 \u0437\u0430\u0437\u043D\u0430\u0442\u0438 \u0437\u0431\u0438\u0442\u043A\u0456\u0432","108 | to break the back of | \u0432\u0438\u043A\u043E\u043D\u0430\u0442\u0438 \u043D\u0430\u0439\u0432\u0430\u0436\u0447\u0443 \u0447\u0430\u0441\u0442\u0438\u043D\u0443 | verb_phrase | Verb Phrase | \u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u043D\u0430\u0439\u0441\u043A\u043B\u0430\u0434\u043D\u0456\u0448\u0438\u0439 \u0435\u0442\u0430\u043F \u0440\u043E\u0431\u043E\u0442\u0438","109 | to break the bank | \u0440\u043E\u0437\u043E\u0440\u0438\u0442\u0438\u0441\u044F | verb_phrase | Verb Phrase | \u0412\u0438\u0442\u0440\u0430\u0442\u0438\u0442\u0438 \u0432\u0441\u0456 \u0433\u0440\u043E\u0448\u0456","110 | to break the habit | \u043F\u043E\u0437\u0431\u0443\u0442\u0438\u0441\u044F \u0437\u0432\u0438\u0447\u043A\u0438 | verb_phrase | Verb Phrase | \u041F\u0435\u0440\u0435\u0441\u0442\u0430\u0442\u0438 \u0440\u043E\u0431\u0438\u0442\u0438 \u0449\u043E\u0441\u044C \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E","111 | to break the ice | \u0440\u043E\u0437\u043B\u0430\u043C\u0430\u0442\u0438 \u043B\u0456\u0434 | verb_phrase | Verb Phrase | \u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0431\u0456\u043B\u044C\u0448 \u0440\u043E\u0437\u0441\u043B\u0430\u0431\u043B\u0435\u043D\u0443 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0443","112 | to bump into | \u043D\u0430\u0442\u0440\u0430\u043F\u0438\u0442\u0438 \u043D\u0430 | phrasal_verb | Phrasal Verb | \u0417\u0443\u0441\u0442\u0440\u0456\u0442\u0438 \u043A\u043E\u0433\u043E\u0441\u044C \u0432\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u043E","113 | to cavort | \u0441\u043A\u0430\u043A\u0430\u0442\u0438 | verb | Verb | \u0420\u0430\u0434\u0456\u0441\u043D\u043E \u0441\u0442\u0440\u0438\u0431\u0430\u0442\u0438 \u0430\u0431\u043E \u0442\u0430\u043D\u0446\u044E\u0432\u0430\u0442\u0438","114 | to come at a price | \u043C\u0430\u0442\u0438 \u0441\u0432\u043E\u044E \u0446\u0456\u043D\u0443 | verb_phrase | Verb Phrase | \u0412\u0438\u043C\u0430\u0433\u0430\u0442\u0438 \u043F\u0435\u0432\u043D\u0438\u0445 \u0436\u0435\u0440\u0442\u0432 \u0430\u0431\u043E \u0432\u0438\u0442\u0440\u0430\u0442","115 | to concern | \u0442\u0443\u0440\u0431\u0443\u0432\u0430\u0442\u0438 | verb | Verb | \u0412\u0438\u043A\u043B\u0438\u043A\u0430\u0442\u0438 \u0437\u0430\u043D\u0435\u043F\u043E\u043A\u043E\u0454\u043D\u043D\u044F","116 | to derive | \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 | verb | Verb | \u0412\u0438\u0432\u043E\u0434\u0438\u0442\u0438 \u0449\u043E\u0441\u044C \u0437 \u0447\u043E\u0433\u043E\u0441\u044C","117 | to douse the flame | \u0437\u0430\u0433\u0430\u0441\u0438\u0442\u0438 \u043F\u043E\u043B\u0443\u043C\'\u044F | verb_phrase | Verb Phrase | \u041F\u0440\u0438\u043F\u0438\u043D\u0438\u0442\u0438 \u0433\u043E\u0440\u0456\u043D\u043D\u044F","118 | to do your bit | \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0441\u0432\u043E\u044E \u0447\u0430\u0441\u0442\u0438\u043D\u0443 | verb_phrase | Verb Phrase | \u0412\u043D\u0435\u0441\u0442\u0438 \u0441\u0432\u0456\u0439 \u0432\u043D\u0435\u0441\u043E\u043A","119 | to duplicate | \u0434\u0443\u0431\u043B\u044E\u0432\u0430\u0442\u0438 | verb | Verb | \u0421\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438 \u043A\u043E\u043F\u0456\u044E","120 | to elaborate | \u0440\u043E\u0437\u0432\u0438\u0432\u0430\u0442\u0438 \u0434\u0443\u043C\u043A\u0443 | verb | Verb | \u0414\u0435\u0442\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u044F\u0441\u043D\u044E\u0432\u0430\u0442\u0438","121 | to emanate | \u0432\u0438\u043F\u0440\u043E\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438 | verb | Verb | \u041F\u043E\u0445\u043E\u0434\u0438\u0442\u0438 \u0432\u0456\u0434 \u0447\u043E\u0433\u043E\u0441\u044C","122 | to feel down | \u043F\u043E\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043F\u0440\u0438\u0433\u043D\u0456\u0447\u0435\u043D\u0438\u043C | verb_phrase | Verb Phrase | \u041C\u0430\u0442\u0438 \u043F\u043E\u0433\u0430\u043D\u0438\u0439 \u043D\u0430\u0441\u0442\u0440\u0456\u0439","123 | to feel free | \u043F\u043E\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0432\u0456\u043B\u044C\u043D\u043E | verb_phrase | Verb Phrase | \u041C\u0430\u0442\u0438 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0440\u043E\u0431\u0438\u0442\u0438 \u0449\u043E\u0441\u044C \u0431\u0435\u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u044C","124 | to get away with | \u0443\u043D\u0438\u043A\u043D\u0443\u0442\u0438 \u043F\u043E\u043A\u0430\u0440\u0430\u043D\u043D\u044F | phrasal_verb | Phrasal Verb | \u041D\u0435 \u043F\u043E\u043D\u0435\u0441\u0442\u0438 \u043D\u0430\u0441\u043B\u0456\u0434\u043A\u0456\u0432 \u0437\u0430 \u0449\u043E\u0441\u044C","125 | to get off scot-free | \u0443\u043D\u0438\u043A\u043D\u0443\u0442\u0438 \u043F\u043E\u043A\u0430\u0440\u0430\u043D\u043D\u044F | phrasal_verb | Phrasal Verb | \u041D\u0435 \u0431\u0443\u0442\u0438 \u043F\u043E\u043A\u0430\u0440\u0430\u043D\u0438\u043C \u0437\u0430 \u043F\u0440\u043E\u0432\u0438\u043D\u0443","126 | to give a helping hand | \u043F\u043E\u0434\u0430\u0442\u0438 \u0440\u0443\u043A\u0443 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0438 | verb_phrase | Verb Phrase | \u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u043A\u043E\u043C\u0443\u0441\u044C","127 | to go beyond a joke | \u0432\u0438\u0439\u0442\u0438 \u0437\u0430 \u043C\u0435\u0436\u0456 \u0436\u0430\u0440\u0442\u0456\u0432 | verb_phrase | Verb Phrase | \u0421\u0442\u0430\u0442\u0438 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E","128 | to have a laugh about | \u043F\u043E\u0441\u043C\u0456\u044F\u0442\u0438\u0441\u044F \u0437 | verb_phrase | Verb Phrase | \u0416\u0430\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043F\u0440\u043E \u0449\u043E\u0441\u044C","129 | to have a say | \u043C\u0430\u0442\u0438 \u043F\u0440\u0430\u0432\u043E \u0433\u043E\u043B\u043E\u0441\u0443 | verb_phrase | Verb Phrase | \u041C\u0430\u0442\u0438 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0432\u0438\u0441\u043B\u043E\u0432\u0438\u0442\u0438 \u0434\u0443\u043C\u043A\u0443","130 | to illuminate | \u043E\u0441\u0432\u0456\u0442\u043B\u044E\u0432\u0430\u0442\u0438 | verb | Verb | \u041D\u0430\u0434\u0430\u0432\u0430\u0442\u0438 \u0441\u0432\u0456\u0442\u043B\u043E \u0430\u0431\u043E \u044F\u0441\u043D\u0456\u0441\u0442\u044C","131 | to infuse | \u043D\u0430\u0441\u0442\u043E\u044E\u0432\u0430\u0442\u0438 | verb | Verb | \u0414\u043E\u0434\u0430\u0432\u0430\u0442\u0438 \u044F\u043A\u043E\u0441\u0442\u0456 \u0447\u043E\u043C\u0443\u0441\u044C","132 | to lock someone out of | \u0437\u0430\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u043C\u0443\u0441\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E | phrasal_verb | Phrasal Verb | \u041D\u0435 \u0434\u0430\u0442\u0438 \u043A\u043E\u043C\u0443\u0441\u044C \u0443\u0432\u0456\u0439\u0442\u0438 \u0430\u0431\u043E \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F","133 | to look livid/furious | \u0432\u0438\u0433\u043B\u044F\u0434\u0430\u0442\u0438 \u043B\u044E\u0442\u0438\u043C | verb_phrase | Verb Phrase | \u0414\u0443\u0436\u0435 \u0441\u0435\u0440\u0434\u0438\u0442\u043E \u0432\u0438\u0433\u043B\u044F\u0434\u0430\u0442\u0438","134 | to make a joke | \u0436\u0430\u0440\u0442\u0443\u0432\u0430\u0442\u0438 | verb_phrase | Verb Phrase | \u041A\u0430\u0437\u0430\u0442\u0438 \u0449\u043E\u0441\u044C \u0441\u043C\u0456\u0448\u043D\u0435","135 | to move to tears | \u0437\u043C\u0443\u0441\u0438\u0442\u0438 \u043F\u043B\u0430\u043A\u0430\u0442\u0438 | phrasal_verb | Phrasal Verb | \u0412\u0438\u043A\u043B\u0438\u043A\u0430\u0442\u0438 \u0441\u0438\u043B\u044C\u043D\u0456 \u0435\u043C\u043E\u0446\u0456\u0457","136 | to play a joke on | \u0440\u043E\u0437\u0456\u0433\u0440\u0430\u0442\u0438 \u043A\u043E\u0433\u043E\u0441\u044C | verb_phrase | Verb Phrase | \u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u0436\u0430\u0440\u0442 \u043D\u0430\u0434 \u043A\u0438\u043C\u043E\u0441\u044C","137 | to play on words | \u0433\u0440\u0430\u0442\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438 | verb_phrase | Verb Phrase | \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0433\u0440\u0443 \u0441\u043B\u0456\u0432","138 | to pull someone together | \u0437\u0433\u0443\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u0433\u043E\u0441\u044C | phrasal_verb | Phrasal Verb | \u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u043A\u043E\u043C\u0443\u0441\u044C \u0437\u0456\u0431\u0440\u0430\u0442\u0438\u0441\u044F","139 | to push the boundaries | \u0440\u043E\u0437\u0448\u0438\u0440\u044E\u0432\u0430\u0442\u0438 \u043C\u0435\u0436\u0456 | verb_phrase | Verb Phrase | \u0412\u0438\u0445\u043E\u0434\u0438\u0442\u0438 \u0437\u0430 \u0437\u0432\u0438\u0447\u043D\u0456 \u0440\u0430\u043C\u043A\u0438","140 | to see the funny side of | \u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u0441\u043C\u0456\u0448\u043D\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443 | verb_phrase | Verb Phrase | \u0417\u043D\u0430\u0439\u0442\u0438 \u0449\u043E\u0441\u044C \u0441\u043C\u0456\u0448\u043D\u0435 \u0432 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u0457","141 | to separate | \u0432\u0456\u0434\u0434\u0456\u043B\u044F\u0442\u0438 | verb | Verb | \u0420\u043E\u0437\u0434\u0456\u043B\u044F\u0442\u0438 \u043D\u0430 \u0447\u0430\u0441\u0442\u0438\u043D\u0438","142 | to show concern for | \u0432\u0438\u044F\u0432\u043B\u044F\u0442\u0438 \u0442\u0443\u0440\u0431\u043E\u0442\u0443 \u043F\u0440\u043E | verb_phrase | Verb Phrase | \u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u043F\u0456\u043A\u043B\u0443\u0432\u0430\u043D\u043D\u044F","143 | to take fun out of | \u043F\u043E\u0437\u0431\u0430\u0432\u0438\u0442\u0438 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u043D\u044F | verb_phrase | Verb Phrase | \u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u0449\u043E\u0441\u044C \u043C\u0435\u043D\u0448 \u043F\u0440\u0438\u0454\u043C\u043D\u0438\u043C","144 | to take responsibility | \u0431\u0440\u0430\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C | verb_phrase | Verb Phrase | \u0423\u0441\u0432\u0456\u0434\u043E\u043C\u043B\u044E\u0432\u0430\u0442\u0438 \u0441\u0432\u043E\u0457 \u043E\u0431\u043E\u0432\'\u044F\u0437\u043A\u0438","145 | to think outside the box | \u0434\u0443\u043C\u0430\u0442\u0438 \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E | verb_phrase | Verb Phrase | \u0428\u0443\u043A\u0430\u0442\u0438 \u043D\u0435\u0437\u0432\u0438\u0447\u043D\u0456 \u0440\u0456\u0448\u0435\u043D\u043D\u044F","146 | accordingly | \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E | adverb | Adverb | \u0423 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431","147 | additionally | \u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u043E | adverb | Adverb | \u041A\u0440\u0456\u043C \u0442\u043E\u0433\u043E","148 | after all | \u0432\u0440\u0435\u0448\u0442\u0456-\u0440\u0435\u0448\u0442 | adverb | Adverb | \u0412\u0440\u0430\u0445\u043E\u0432\u0443\u044E\u0447\u0438 \u0432\u0441\u0456 \u043E\u0431\u0441\u0442\u0430\u0432\u0438\u043D\u0438","149 | as a result | \u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456 | adverb | Adverb | \u0412\u0438\u043A\u043B\u0438\u043A\u0430\u043D\u0438\u0439 \u0447\u0438\u043C\u043E\u0441\u044C","150 | at least | \u043F\u0440\u0438\u043D\u0430\u0439\u043C\u043D\u0456 | adverb | Adverb | \u041C\u0456\u043D\u0456\u043C\u0443\u043C","151 | anyway | \u0443 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u043C\u0443 \u0440\u0430\u0437\u0456 | adverb | Adverb | \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u043F\u0456\u0434\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u043D\u044F \u0447\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0443 \u0434\u043E \u0456\u043D\u0448\u043E\u0457 \u0442\u0435\u043C\u0438","152 | besides | \u043A\u0440\u0456\u043C \u0442\u043E\u0433\u043E | adverb | Adverb | \u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u0447\u0438 \u0444\u0430\u043A\u0442","153 | certainly | \u0431\u0435\u0437\u0443\u043C\u043E\u0432\u043D\u043E | adverb | Adverb | \u0411\u0435\u0437 \u0436\u043E\u0434\u043D\u0438\u0445 \u0441\u0443\u043C\u043D\u0456\u0432\u0456\u0432","154 | conversely | \u043D\u0430\u0432\u043F\u0430\u043A\u0438 | adverb | Adverb | \u041F\u0440\u043E\u0442\u0438\u043B\u0435\u0436\u043D\u0430 \u0442\u043E\u0447\u043A\u0430 \u0437\u043E\u0440\u0443","155 | finally | \u043D\u0430\u0440\u0435\u0448\u0442\u0456 | adverb | Adverb | \u0412 \u043A\u0456\u043D\u0446\u0456 \u043F\u0440\u043E\u0446\u0435\u0441\u0443","156 | hence | \u043E\u0442\u0436\u0435 | adverb | Adverb | \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u0438\u0441\u043D\u043E\u0432\u043A\u0443","157 | instead | \u0437\u0430\u043C\u0456\u0441\u0442\u044C | adverb | Adverb | \u042F\u043A \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u0430","158 | in conclusion | \u043D\u0430 \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F | adverb | Adverb | \u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u043F\u0456\u0434\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u043F\u0456\u0434\u0441\u0443\u043C\u043A\u0456\u0432","159 | lately | \u043E\u0441\u0442\u0430\u043D\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C | adverb | Adverb | \u0412 \u043D\u0435\u0434\u0430\u0432\u043D\u0456\u0439 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0456","160 | likewise | \u0442\u0430\u043A \u0441\u0430\u043C\u043E | adverb | Adverb | \u0422\u0430\u043A\u0438\u043C \u0436\u0435 \u0447\u0438\u043D\u043E\u043C","161 | moreover | \u0431\u0456\u043B\u044C\u0448 \u0442\u043E\u0433\u043E | adverb | Adverb | \u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u0432\u0430\u0436\u043B\u0438\u0432\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F","162 | namely | \u0430 \u0441\u0430\u043C\u0435 | adverb | Adverb | \u0414\u043B\u044F \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u043D\u044F","163 | nevertheless | \u0442\u0438\u043C \u043D\u0435 \u043C\u0435\u043D\u0448 | adverb | Adverb | \u041D\u0435\u0437\u0432\u0430\u0436\u0430\u044E\u0447\u0438 \u043D\u0430 \u0449\u043E\u0441\u044C","164 | yet | \u0449\u0435 | adverb | Adverb | \u0414\u043E \u0446\u044C\u043E\u0433\u043E \u0447\u0430\u0441\u0443","165 | often | \u0447\u0430\u0441\u0442\u043E | adverb | Adverb | \u0411\u0430\u0433\u0430\u0442\u043E \u0440\u0430\u0437\u0456\u0432","166 | sometimes | \u0456\u043D\u043E\u0434\u0456 | adverb | Adverb | \u0412 \u043E\u043A\u0440\u0435\u043C\u0438\u0445 \u0432\u0438\u043F\u0430\u0434\u043A\u0430\u0445","167 | rarely | \u0440\u0456\u0434\u043A\u043E | adverb | Adverb | \u041D\u0435 \u0447\u0430\u0441\u0442\u043E","168 | never | \u043D\u0456\u043A\u043E\u043B\u0438 | adverb | Adverb | \u0416\u043E\u0434\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0443","169 | ever | \u043A\u043E\u043B\u0438-\u043D\u0435\u0431\u0443\u0434\u044C | adverb | Adverb | \u0423 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0447\u0430\u0441","170 | hardly ever | \u043C\u0430\u0439\u0436\u0435 \u043D\u0456\u043A\u043E\u043B\u0438 | adverb | Adverb | \u0414\u0443\u0436\u0435 \u0440\u0456\u0434\u043A\u043E","171 | occasionally | \u0447\u0430\u0441 \u0432\u0456\u0434 \u0447\u0430\u0441\u0443 | adverb | Adverb | \u041D\u0435\u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E","172 | seldom | \u0440\u0456\u0434\u043A\u043E | adverb | Adverb | \u041D\u0435 \u0447\u0430\u0441\u0442\u043E","173 | generally | \u0437\u0430\u0433\u0430\u043B\u043E\u043C | adverb | Adverb | \u0412 \u0431\u0456\u043B\u044C\u0448\u043E\u0441\u0442\u0456 \u0432\u0438\u043F\u0430\u0434\u043A\u0456\u0432","174 | frequently | \u0447\u0430\u0441\u0442\u043E | adverb | Adverb | \u0411\u0430\u0433\u0430\u0442\u043E \u0440\u0430\u0437\u0456\u0432","175 | normally | \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439 | adverb | Adverb | \u0423 \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u0445 \u043E\u0431\u0441\u0442\u0430\u0432\u0438\u043D\u0430\u0445","176 | daily | \u0449\u043E\u0434\u043D\u044F | adverb | Adverb | \u041A\u043E\u0436\u043D\u043E\u0433\u043E \u0434\u043D\u044F","177 | previously | \u0440\u0430\u043D\u0456\u0448\u0435 | adverb | Adverb | \u0414\u043E \u0446\u044C\u043E\u0433\u043E \u0447\u0430\u0441\u0443","178 | afterwards | \u043F\u0456\u0441\u043B\u044F \u0446\u044C\u043E\u0433\u043E | adverb | Adverb | \u041F\u0456\u0437\u043D\u0456\u0448\u0435","179 | early | \u0440\u0430\u043D\u043E | adverb | Adverb | \u0414\u043E \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E\u0433\u043E \u0447\u0430\u0441\u0443","180 | late | \u043F\u0456\u0437\u043D\u043E | adverb | Adverb | \u041F\u0456\u0441\u043B\u044F \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E\u0433\u043E \u0447\u0430\u0441\u0443","181 | later | \u043F\u0456\u0437\u043D\u0456\u0448\u0435 | adverb | Adverb | \u0412 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u043C\u0443","182 | still | \u0434\u043E\u0441\u0456 | adverb | Adverb | \u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u0454 \u0431\u0443\u0442\u0438 \u043F\u0440\u0430\u0432\u0434\u043E\u044E","183 | seldom | \u0440\u0456\u0434\u043A\u043E | adverb | Adverb | \u041D\u0435 \u0447\u0430\u0441\u0442\u043E","184 | straight | \u043F\u0440\u044F\u043C\u043E | adverb | Adverb | \u0411\u0435\u0437 \u0432\u0438\u0433\u0438\u043D\u0456\u0432","185 | loudly | \u0433\u0443\u0447\u043D\u043E | adverb | Adverb | \u0417 \u0432\u0435\u043B\u0438\u043A\u0438\u043C \u0437\u0432\u0443\u043A\u043E\u043C","186 | proudly | \u0433\u043E\u0440\u0434\u043E | adverb | Adverb | \u0417 \u043F\u043E\u0447\u0443\u0442\u0442\u044F\u043C \u0433\u043E\u0440\u0434\u043E\u0441\u0442\u0456","187 | suspiciously | \u043F\u0456\u0434\u043E\u0437\u0440\u0456\u043B\u043E | adverb | Adverb | \u0412\u0438\u043A\u043B\u0438\u043A\u0430\u044E\u0447\u0438 \u043F\u0456\u0434\u043E\u0437\u0440\u0438","188 | strangely | \u0434\u0438\u0432\u043D\u043E | adverb | Adverb | \u041D\u0435\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u043C \u0447\u0438\u043D\u043E\u043C","189 | kindly | \u0434\u043E\u0431\u0440\u043E\u0437\u0438\u0447\u043B\u0438\u0432\u043E | adverb | Adverb | \u041F\u043E-\u0434\u043E\u0431\u0440\u043E\u043C\u0443","190 | rudely | \u0433\u0440\u0443\u0431\u043E | adverb | Adverb | \u041D\u0435\u0432\u0432\u0456\u0447\u043B\u0438\u0432\u043E","191 | neatly | \u0430\u043A\u0443\u0440\u0430\u0442\u043D\u043E | adverb | Adverb | \u041E\u0445\u0430\u0439\u043D\u043E","192 | generously | \u0449\u0435\u0434\u0440\u043E | adverb | Adverb | \u0423 \u0432\u0435\u043B\u0438\u043A\u0456\u0439 \u043A\u0456\u043B\u044C\u043A\u043E\u0441\u0442\u0456","193 | eagerly | \u0456\u0437 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u043D\u044F\u043C | adverb | Adverb | \u0417 \u0432\u0435\u043B\u0438\u043A\u0438\u043C \u0431\u0430\u0436\u0430\u043D\u043D\u044F\u043C","194 | accidentally | \u0432\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u043E | adverb | Adverb | \u0411\u0435\u0437 \u043D\u0430\u043C\u0456\u0440\u0443","195 | rapidly | \u0448\u0432\u0438\u0434\u043A\u043E | adverb | Adverb | \u0417 \u0432\u0438\u0441\u043E\u043A\u043E\u044E \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E","196 | hungrily | \u0433\u043E\u043B\u043E\u0434\u043D\u043E | adverb | Adverb | \u042F\u043A \u0433\u043E\u043B\u043E\u0434\u043D\u0430 \u043B\u044E\u0434\u0438\u043D\u0430","197 | foolishly | \u0434\u0443\u0440\u043D\u0443\u0432\u0430\u0442\u043E | adverb | Adverb | \u0434\u0456\u044F\u0442\u0438 \u043D\u0435\u0440\u043E\u0437\u0443\u043C\u043D\u043E \u0430\u0431\u043E \u0431\u0435\u0437\u0434\u0443\u043C\u043D\u043E","198 | cheerfully | \u0432\u0435\u0441\u0435\u043B\u043E | adverb | Adverb | \u0437 \u0432\u0435\u0441\u0435\u043B\u0438\u043C \u0430\u0431\u043E \u0436\u0438\u0442\u0442\u0454\u0440\u0430\u0434\u0456\u0441\u043D\u0438\u043C \u043D\u0430\u0441\u0442\u0440\u043E\u0454\u043C","199 | somewhat | \u0434\u0435\u0449\u043E | adverb | Adverb | \u0443 \u043F\u0435\u0432\u043D\u0456\u0439 \u043C\u0456\u0440\u0456 \u0430\u0431\u043E \u0447\u0430\u0441\u0442\u043A\u043E\u0432\u043E","200 | barely | \u043B\u0435\u0434\u0432\u0435 | adverb | Adverb | \u043C\u0430\u0439\u0436\u0435 \u0437\u043E\u0432\u0441\u0456\u043C \u043D\u0435; \u043B\u0435\u0434\u0432\u0435","201 | nearly | \u043C\u0430\u0439\u0436\u0435 | adverb | Adverb | \u0434\u0443\u0436\u0435 \u0431\u043B\u0438\u0437\u044C\u043A\u043E \u0434\u043E \u0447\u043E\u0433\u043E\u0441\u044C, \u0430\u043B\u0435 \u043D\u0435 \u0437\u043E\u0432\u0441\u0456\u043C","202 | extremely | \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E | adverb | Adverb | \u0443 \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0456\u0439 \u043C\u0456\u0440\u0456","203 | slightly | \u0442\u0440\u043E\u0445\u0438 | adverb | Adverb | \u0443 \u043D\u0435\u0432\u0435\u043B\u0438\u043A\u0456\u0439 \u043C\u0456\u0440\u0456","204 | especially | \u043E\u0441\u043E\u0431\u043B\u0438\u0432\u043E | adverb | Adverb | \u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u0430\u0431\u043E \u043D\u0456\u0436 \u0456\u043D\u0448\u0456","205 | scarcely | \u043B\u0435\u0434\u0432\u0435 | adverb | Adverb | \u043B\u0435\u0434\u0432\u0435 \u0447\u0438 \u043C\u0430\u0439\u0436\u0435 \u043D\u0456","206 | virtually | \u0444\u0430\u043A\u0442\u0438\u0447\u043D\u043E | adverb | Adverb | \u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u043E \u0430\u0431\u043E \u043C\u0430\u0439\u0436\u0435 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E","207 | fully | \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E | adverb | Adverb | \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E, \u0446\u0456\u043B\u043A\u043E\u043C","208 | exceptionally | \u0432\u0438\u043D\u044F\u0442\u043A\u043E\u0432\u043E | adverb | Adverb | \u043D\u0435\u0437\u0432\u0438\u0447\u043D\u043E \u0430\u0431\u043E \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E","209 | above | \u0432\u0438\u0449\u0435 | adverb | Adverb | \u043D\u0430 \u0432\u0438\u0449\u043E\u043C\u0443 \u0440\u0456\u0432\u043D\u0456 \u0430\u0431\u043E \u043C\u0456\u0441\u0446\u0456","210 | nearby | \u043F\u043E\u0440\u0443\u0447 | adverb | Adverb | \u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0435\u043F\u043E\u0434\u0430\u043B\u0456\u043A","211 | backward(s) | \u043D\u0430\u0437\u0430\u0434 | adverb | Adverb | \u0443 \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u043E\u043C\u0443 \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0443","212 | toward(s) | \u0443 \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0443 | adverb | Adverb | \u0443 \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0443 \u0447\u043E\u0433\u043E\u0441\u044C","213 | around | \u043D\u0430\u0432\u043A\u043E\u043B\u043E | adverb | Adverb | \u0443 \u043A\u043E\u043B\u0456 \u0430\u0431\u043E \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u0447\u043E\u0433\u043E\u0441\u044C","214 | over | \u043D\u0430\u0434 | adverb | Adverb | \u0437\u0432\u0435\u0440\u0445\u0443 \u0430\u0431\u043E \u043D\u0430\u0434 \u0447\u0438\u043C\u043E\u0441\u044C","215 | overseas | \u0437\u0430 \u043A\u043E\u0440\u0434\u043E\u043D\u043E\u043C | adverb | Adverb | \u0437\u0430 \u043C\u0435\u0436\u0430\u043C\u0438 \u043C\u043E\u0440\u0456\u0432; \u0437\u0430 \u043A\u043E\u0440\u0434\u043E\u043D\u043E\u043C","216 | away | \u0433\u0435\u0442\u044C | adverb | Adverb | \u043D\u0430 \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u0456 \u0430\u0431\u043E \u0432 \u0456\u043D\u0448\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456","217 | upstairs | \u043D\u0430\u0433\u043E\u0440\u0456 | adverb | Adverb | \u043D\u0430 \u0432\u0435\u0440\u0445\u043D\u044C\u043E\u043C\u0443 \u043F\u043E\u0432\u0435\u0440\u0441\u0456","218 | downstairs | \u0432\u043D\u0438\u0437\u0443 | adverb | Adverb | \u043D\u0430 \u043D\u0438\u0436\u043D\u044C\u043E\u043C\u0443 \u043F\u043E\u0432\u0435\u0440\u0441\u0456","219 | deeply | \u0433\u043B\u0438\u0431\u043E\u043A\u043E | adverb | Adverb | \u0434\u0443\u0436\u0435 \u0441\u0438\u043B\u044C\u043D\u043E \u0430\u0431\u043E \u0456\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E","220 | next-door | \u043F\u043E\u0440\u044F\u0434 | adverb | Adverb | \u0443 \u0441\u0443\u0441\u0456\u0434\u043D\u044C\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456 \u0430\u0431\u043E \u0431\u0443\u0434\u0438\u043D\u043A\u0443","221 | along with | \u0440\u0430\u0437\u043E\u043C \u0456\u0437 | phrase | Phrase | \u0440\u0430\u0437\u043E\u043C \u0437 \u043A\u0438\u043C\u043E\u0441\u044C \u0430\u0431\u043E \u0447\u0438\u043C\u043E\u0441\u044C","222 | to train | \u0442\u0440\u0435\u043D\u0443\u0432\u0430\u0442\u0438\u0441\u044F | verb | Verb | \u041D\u0435\u043C\u0430\u0454 \u043E\u043F\u0438\u0441\u0443","223 | since | \u0442\u043E\u043C\u0443 \u0449\u043E, \u043F\u043E \u043F\u0440\u0438\u0447\u0438\u043D\u043D\u0456, for the reason that, because | conjunction | Conjunction | \u0442\u043E\u043C\u0443 \u0449\u043E; \u0447\u0435\u0440\u0435\u0437 \u0442\u0435 \u0449\u043E"]');

},{}],"kjSzs":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('["0 | biega\u0107 | \u0431\u0456\u0433\u0430\u0442\u0438 | verb | Czasownik | Szybko porusza\u0107 si\u0119 na nogach.","1 | szcz\u0119\u015Bliwy | \u0449\u0430\u0441\u043B\u0438\u0432\u0438\u0439 | adjective | Przymiotnik | Osoba, kt\xf3ra odczuwa rado\u015B\u0107 lub zadowolenie.","2 | szybko | \u0448\u0432\u0438\u0434\u043A\u043E | adverb | Przys\u0142\xf3wek | W kr\xf3tkim czasie; z du\u017C\u0105 pr\u0119dko\u015Bci\u0105.","3 | mie\u0107 ochot\u0119 | \u043C\u0430\u0442\u0438 \u0431\u0430\u0436\u0430\u043D\u043D\u044F | verb_phrase | Wyra\u017Cenie czasownikiem | Chcie\u0107 co\u015B zrobi\u0107 lub co\u015B mie\u0107.","4 | wzi\u0105\u0107 si\u0119 w gar\u015B\u0107 | \u0432\u0437\u044F\u0442\u0438 \u0441\u0435\u0431\u0435 \u0432 \u0440\u0443\u043A\u0438 | phrase | Wyra\u017Cenie | Zacz\u0105\u0107 dzia\u0142a\u0107 bardziej zdecydowanie.","5 | st\xf3\u0142 kuchenny | \u043A\u0443\u0445\u043E\u043D\u043D\u0438\u0439 \u0441\u0442\u0456\u043B | noun_phrase | Wyra\u017Cenie rzeczownikiem | St\xf3\u0142 u\u017Cywany w kuchni.","6 | bardzo smutny | \u0434\u0443\u0436\u0435 \u0441\u0443\u043C\u043D\u0438\u0439 | adjective_phrase | Wyra\u017Cenie przymiotnikiem | Osoba lub rzecz wywo\u0142uj\u0105ca silne uczucie smutku.","7 | Co b\u0119dzie, to b\u0119dzie | \u0429\u043E \u0431\u0443\u0434\u0435, \u0442\u0435 \u0431\u0443\u0434\u0435 | proverb | Przys\u0142owie | Powiedzenie wyra\u017Caj\u0105ce pogodzenie si\u0119 z losem.","8 | dlatego \u017Ce | \u0442\u043E\u043C\u0443 \u0449\u043E | conjunction | Sp\xf3jnik | Sp\xf3jnik wprowadzaj\u0105cy przyczyn\u0119.","9 | \u015Bpiewa\u0107 | \u0441\u043F\u0456\u0432\u0430\u0442\u0438 | verb | Czasownik | Wydobywa\u0107 d\u017Awi\u0119ki melodii g\u0142osem.","10 | ciep\u0142y | \u0442\u0435\u043F\u043B\u0438\u0439 | adjective | Przymiotnik | O umiarkowanej, przyjemnej temperaturze.","11 | g\u0142o\u015Bno | \u0433\u043E\u043B\u043E\u0441\u043D\u043E | adverb | Przys\u0142\xf3wek | Z wysokim nat\u0119\u017Ceniem d\u017Awi\u0119ku.","12 | mie\u0107 czas | \u043C\u0430\u0442\u0438 \u0447\u0430\u0441 | verb_phrase | Wyra\u017Cenie czasownikiem | Nie by\u0107 zaj\u0119tym; dysponowa\u0107 woln\u0105 chwil\u0105.","13 | wpada\u0107 na pomys\u0142 | \u0441\u043F\u0430\u0434\u0430\u0442\u0438 \u043D\u0430 \u0434\u0443\u043C\u043A\u0443 | phrase | Wyra\u017Cenie | Nagle co\u015B wymy\u015Bli\u0107.","14 | lekko zm\u0119czony | \u0442\u0440\u043E\u0445\u0438 \u0432\u0442\u043E\u043C\u043B\u0435\u043D\u0438\u0439 | adjective_phrase | Wyra\u017Cenie przymiotnikiem | Odczuwaj\u0105cy niewielkie zm\u0119czenie.","15 | apetyt ro\u015Bnie w miar\u0119 jedzenia | \u0410\u043F\u0435\u0442\u0438\u0442 \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u044C \u043F\u0456\u0434 \u0447\u0430\u0441 \u0457\u0436\u0456 | proverb | Przys\u0142owie | Im wi\u0119cej co\u015B masz, tym bardziej tego pragniesz.","16 | oraz | \u0430 \u0442\u0430\u043A\u043E\u0436 | conjunction | Sp\xf3jnik | Sp\xf3jnik \u0142\u0105cz\u0105cy elementy zdania (jak \'i\').","17 | w ka\u017Cdej chwili | \u0443 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442 | adverbial_phrase | Wyra\u017Cenie przys\u0142\xf3wkiem | W dowolnym momencie; bez ogranicze\u0144 czasowych.","18 | chmura | \u0445\u043C\u0430\u0440\u0430 | noun | Rzeczownik | Zbi\xf3r kropelek wody lub kryszta\u0142k\xf3w lodu w atmosferze.","19 | rysowa\u0107 | \u043C\u0430\u043B\u044E\u0432\u0430\u0442\u0438 | verb | Czasownik | Tworzy\u0107 obrazki za pomoc\u0105 kredek, farb itp.","20 | zimny | \u0445\u043E\u043B\u043E\u0434\u043D\u0438\u0439 | adjective | Przymiotnik | O niskiej temperaturze.","21 | cicho | \u0442\u0438\u0445\u043E | adverb | Przys\u0142\xf3wek | Bez ha\u0142asu; z ma\u0142ym nat\u0119\u017Ceniem d\u017Awi\u0119ku.","22 | by\u0107 w stanie | \u0431\u0443\u0442\u0438 \u0432 \u0437\u043C\u043E\u0437\u0456 | verb_phrase | Wyra\u017Cenie czasownikiem | M\xf3c co\u015B zrobi\u0107; posiada\u0107 mo\u017Cliwo\u015B\u0107.","23 | nad\u0105\u017Ca\u0107 za | \u0432\u0441\u0442\u0438\u0433\u0430\u0442\u0438 \u0437\u0430 | phrase | Wyra\u017Cenie | Nie pozostawa\u0107 w tyle (np. za zmianami).","24 | wysoka g\xf3ra | \u0432\u0438\u0441\u043E\u043A\u0430 \u0433\u043E\u0440\u0430 | noun_phrase | Wyra\u017Cenie rzeczownikiem | G\xf3ra o znacznej wysoko\u015Bci.","25 | cz\u0119\u015Bciowo prawdziwy | \u0447\u0430\u0441\u0442\u043A\u043E\u0432\u043E \u043F\u0440\u0430\u0432\u0434\u0438\u0432\u0438\u0439 | adjective_phrase | Wyra\u017Cenie przymiotnikiem | Tylko w pewnym stopniu zgodny z prawd\u0105.","26 | Gdzie kucharek sze\u015B\u0107, tam nie ma co je\u015B\u0107 | \u0414\u0435 \u043A\u0443\u0445\u0430\u0440\u0456\u0432 \u0431\u0430\u0433\u0430\u0442\u043E, \u0442\u0430\u043C \u0457\u0436\u0430 \u043D\u0435 \u0441\u043E\u043B\u043E\u043D\u0430 | proverb | Przys\u0142owie | Gdy zbyt wiele os\xf3b co\u015B robi, efekt bywa kiepski.","27 | marzenie | \u043C\u0440\u0456\u044F | noun | Rzeczownik | Co\u015B, o czym si\u0119 bardzo chce, aby sta\u0142o si\u0119 rzeczywisto\u015Bci\u0105.","28 | p\u0142ywa\u0107 | \u043F\u043B\u0430\u0432\u0430\u0442\u0438 | verb | Czasownik | Porusza\u0107 si\u0119 w wodzie za pomoc\u0105 ruch\xf3w cia\u0142a.","29 | tani | \u0434\u0435\u0448\u0435\u0432\u0438\u0439 | adjective | Przymiotnik | Maj\u0105cy nisk\u0105 cen\u0119; niedrogi.","30 | ostro\u017Cnie | \u043E\u0431\u0435\u0440\u0435\u0436\u043D\u043E | adverb | Przys\u0142\xf3wek | Z zachowaniem uwagi, aby unikn\u0105\u0107 niebezpiecze\u0144stwa.","31 | straci\u0107 cierpliwo\u015B\u0107 | \u0432\u0442\u0440\u0430\u0442\u0438\u0442\u0438 \u0442\u0435\u0440\u043F\u0456\u043D\u043D\u044F | verb_phrase | Wyra\u017Cenie czasownikiem | Przesta\u0107 by\u0107 cierpliwym; zdenerwowa\u0107 si\u0119.","32 | wychodzi\u0107 na jaw | \u0432\u0438\u0445\u043E\u0434\u0438\u0442\u0438 \u043D\u0430 \u043F\u043E\u0432\u0435\u0440\u0445\u043D\u044E | phrase | Wyra\u017Cenie | Stawa\u0107 si\u0119 znanym (o tajemnicy lub prawdzie).","33 | gor\u0105ca herbata | \u0433\u0430\u0440\u044F\u0447\u0438\u0439 \u0447\u0430\u0439 | noun_phrase | Wyra\u017Cenie rzeczownikiem | Herbata o wysokiej temperaturze.","34 | cz\u0119sto u\u017Cywany | \u0447\u0430\u0441\u0442\u043E \u0432\u0436\u0438\u0432\u0430\u043D\u0438\u0439 | adjective_phrase | Wyra\u017Cenie przymiotnikiem | Takiego, z czego korzysta si\u0119 regularnie.","35 | Nie wywo\u0142uj wilka z lasu | \u041D\u0435 \u043A\u043B\u0438\u0447 \u043B\u0438\u0445\u0430, \u043F\u043E\u043A\u0438 \u0432\u043E\u043D\u043E \u0442\u0438\u0445\u043E | proverb | Przys\u0142owie | Nie prowokuj problem\xf3w, dop\xf3ki ich nie ma.","36 | lecz | \u0430\u043B\u0435 | conjunction | Sp\xf3jnik | Sp\xf3jnik wprowadzaj\u0105cy przeciwstawienie.","37 | w nag\u0142ych wypadkach | \u0443 \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u0445 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u044F\u0445 | adverbial_phrase | Wyra\u017Cenie przys\u0142\xf3wkiem | Gdy dzieje si\u0119 co\u015B niespodziewanego i pilnego.","38 | gwiazda | \u0437\u0456\u0440\u043A\u0430 | noun | Rzeczownik | Cia\u0142o niebieskie \u015Bwiec\u0105ce w\u0142asnym \u015Bwiat\u0142em.","39 | gotowa\u0107 si\u0119 | \u043A\u0438\u043F\u0456\u0442\u0438 | verb | Czasownik | O wodzie: osi\u0105ga\u0107 temperatur\u0119 wrzenia.","40 | suchy | \u0441\u0443\u0445\u0438\u0439 | adjective | Przymiotnik | Pozbawiony wilgoci.","41 | nagle | \u0440\u0430\u043F\u0442\u043E\u0432\u043E | adverb | Przys\u0142\xf3wek | Bez ostrze\u017Cenia; niespodziewanie.","42 | mie\u0107 nadziej\u0119 | \u043C\u0430\u0442\u0438 \u043D\u0430\u0434\u0456\u044E | verb_phrase | Wyra\u017Cenie czasownikiem | Wierzy\u0107, \u017Ce co\u015B pozytywnego si\u0119 wydarzy.","43 | wraca\u0107 do zdrowia | \u043E\u0434\u0443\u0436\u0443\u0432\u0430\u0442\u0438 | phrase | Wyra\u017Cenie | Stopniowo zdrowie\u0107 po chorobie.","44 | ma\u0142e dziecko | \u043C\u0430\u043B\u0430 \u0434\u0438\u0442\u0438\u043D\u0430 | noun_phrase | Wyra\u017Cenie rzeczownikiem | Dziecko w wieku przedszkolnym lub m\u0142odsze.","45 | cz\u0119\u015Bciowo uszkodzony | \u0447\u0430\u0441\u0442\u043A\u043E\u0432\u043E \u043F\u043E\u0448\u043A\u043E\u0434\u0436\u0435\u043D\u0438\u0439 | adjective_phrase | Wyra\u017Cenie przymiotnikiem | Takiego, co nie jest ca\u0142kiem zniszczone.","46 | Darowanemu koniowi w z\u0119by si\u0119 nie zagl\u0105da | \u0414\u0430\u0440\u043E\u0432\u0430\u043D\u043E\u043C\u0443 \u043A\u043E\u043D\u0435\u0432\u0456 \u0432 \u0437\u0443\u0431\u0438 \u043D\u0435 \u0434\u0438\u0432\u043B\u044F\u0442\u044C\u0441\u044F | proverb | Przys\u0142owie | Nie krytykuje si\u0119 prezent\xf3w, kt\xf3re si\u0119 dostaje.","47 | pralka | \u043F\u0440\u0430\u043B\u044C\u043D\u0430 \u043C\u0430\u0448\u0438\u043D\u0430 | noun | Rzeczownik | Urz\u0105dzenie do prania ubra\u0144.","48 | odkurza\u0107 | \u043F\u0438\u043B\u043E\u0441\u043E\u0441\u0438\u0442\u0438 | verb | Czasownik | Czy\u015Bci\u0107 pod\u0142og\u0119 lub meble z kurzu za pomoc\u0105 odkurzacza.","49 | brudny | \u0431\u0440\u0443\u0434\u043D\u0438\u0439 | adjective | Przymiotnik | Pokryty warstw\u0105 kurzu lub nieczysto\u015Bci.","50 | smaczny | \u0441\u043C\u0430\u0447\u043D\u0438\u0439 | adjective | Przymiotnik | Maj\u0105cy przyjemny smak.","51 | kroi\u0107 | \u0440\u0456\u0437\u0430\u0442\u0438 | verb | Czasownik | Dzieli\u0107 co\u015B (np. jedzenie) na mniejsze cz\u0119\u015Bci no\u017Cem.","52 | \u0142y\u017Cka | \u043B\u043E\u0436\u043A\u0430 | noun | Rzeczownik | Przyb\xf3r kuchenny do jedzenia lub mieszania potraw.","53 | walizka | \u0432\u0430\u043B\u0456\u0437\u0430 | noun | Rzeczownik | Torba podr\xf3\u017Cna na ubrania i inne przedmioty.","54 | wsiada\u0107 | \u0441\u0456\u0434\u0430\u0442\u0438 | verb | Czasownik | Wchodzi\u0107 do \u015Brodka pojazdu (np. do poci\u0105gu). \u0441\u0456\u0434\u0430\u0442\u0438 (\u0443 \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442). Wchodzenie do \u015Brodka transportu.","55 | zagraniczny | \u0437\u0430\u043A\u043E\u0440\u0434\u043E\u043D\u043D\u0438\u0439 | adjective | Przymiotnik | Pochodz\u0105cy z innego kraju.","56 | rado\u015B\u0107 | \u0440\u0430\u0434\u0456\u0441\u0442\u044C | noun | Rzeczownik | Pozytywne uczucie szcz\u0119\u015Bcia lub zadowolenia.","57 | martwi\u0107 si\u0119 | \u0445\u0432\u0438\u043B\u044E\u0432\u0430\u0442\u0438\u0441\u044F | verb_phrase | Wyra\u017Cenie czasownikiem | Odczuwa\u0107 niepok\xf3j o co\u015B lub kogo\u015B.","58 | zaskoczony | \u0437\u0434\u0438\u0432\u043E\u0432\u0430\u043D\u0438\u0439 | adjective | Przymiotnik | Osoba, kt\xf3ra do\u015Bwiadczy\u0142a niespodzianki.","59 | umowa | \u0434\u043E\u0433\u043E\u0432\u0456\u0440 | noun | Rzeczownik | Oficjalna zgoda mi\u0119dzy stronami (np. pracodawc\u0105 a pracownikiem).","60 | awansowa\u0107 | \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 \u043F\u0456\u0434\u0432\u0438\u0449\u0435\u043D\u043D\u044F | verb | Czasownik | Otrzyma\u0107 wy\u017Csz\u0105 pozycj\u0119 w pracy.","61 | terminowy | \u043F\u0443\u043D\u043A\u0442\u0443\u0430\u043B\u044C\u043D\u0438\u0439 | adjective | Przymiotnik | Dotrzymuj\u0105cy ustalonych termin\xf3w.","62 | las | \u043B\u0456\u0441 | noun | Rzeczownik | Obszar poro\u015Bni\u0119ty du\u017C\u0105 ilo\u015Bci\u0105 drzew.","63 | kwitn\u0105\u0107 | \u0446\u0432\u0456\u0441\u0442\u0438 | verb | Czasownik | O ro\u015Blinach: wytwarza\u0107 kwiaty.","64 | bi\u0107 brawo | \u0430\u043F\u043B\u043E\u0434\u0443\u0432\u0430\u0442\u0438 | phrase | Wyra\u017Cenie | Klaska\u0107, aby wyrazi\u0107 uznanie.","65 | mie\u0107 g\u0142ow\u0119 w chmurach | \u043C\u0430\u0442\u0438 \u0433\u043E\u043B\u043E\u0432\u0443 \u0432 \u0445\u043C\u0430\u0440\u0430\u0445 | phrase | Wyra\u017Cenie | By\u0107 roztargnionym; marzycielskim.","66 | klika\u0107 | \u043A\u043B\u0430\u0446\u0430\u0442\u0438 | verb | Czasownik | Naciska\u0107 przyciski myszy komputerowej.","67 | pod\u0142\u0105czony | \u043F\u0456\u0434\u043A\u043B\u044E\u0447\u0435\u043D\u0438\u0439 | adjective | Przymiotnik | Po\u0142\u0105czony z sieci\u0105 lub urz\u0105dzeniem.","68 | tabletka | \u0442\u0430\u0431\u043B\u0435\u0442\u043A\u0430 | noun | Rzeczownik | Lek w postaci sta\u0142ej do po\u0142kni\u0119cia.","69 | kicha\u0107 | \u0447\u0445\u0430\u0442\u0438 | verb | Czasownik | Gwa\u0142townie wydycha\u0107 powietrze przez nos.","70 | zdrowy | \u0437\u0434\u043E\u0440\u043E\u0432\u0438\u0439 | adjective | Przymiotnik | Niechoruj\u0105cy; w dobrym stanie fizycznym.","71 | zeszyt | \u0437\u043E\u0448\u0438\u0442 | noun | Rzeczownik | Zbi\xf3r kartek zapisanych lub przeznaczonych do zapisywania.","72 | uczy\u0107 si\u0119 | \u0432\u0447\u0438\u0442\u0438\u0441\u044F | verb | Czasownik | Zdobywa\u0107 / Zdobywanie wiedz\u0119 / wiedzy lub umiej\u0119tno\u015Bci.","73 | pilny | \u0441\u0442\u0430\u0440\u0430\u043D\u043D\u0438\u0439 | adjective | Przymiotnik | Sumiennie wykonuj\u0105cy obowi\u0105zki.","74 | burza | \u0433\u0440\u043E\u0437\u0430 | noun | Rzeczownik | Gwa\u0142towne zjawisko atmosferyczne z piorunami.","75 | m\u017Cy\u0107 | \u043C\u043E\u0440\u043E\u0441\u0438\u0442\u0438 | verb | Czasownik | Pada\u0107 bardzo drobnym deszczem.","76 | pochmurny | \u0445\u043C\u0430\u0440\u043D\u0438\u0439 | adjective | Przymiotnik | Pokryty chmurami; bez s\u0142o\u0144ca.","77 | przysz\u0142o\u015B\u0107 | \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u0454 | noun | Rzeczownik | Okres, kt\xf3ry dopiero nadejdzie.","78 | odk\u0142ada\u0107 | \u0432\u0456\u0434\u043A\u043B\u0430\u0434\u0430\u0442\u0438 | verb | Czasownik | Przenosi\u0107 na p\xf3\u017Aniej.","79 | cotygodniowy | \u0449\u043E\u0442\u0438\u0436\u043D\u0435\u0432\u0438\u0439 | adjective | Przymiotnik | Powtarzaj\u0105cy si\u0119 co tydzie\u0144.","80 | portfel | \u0433\u0430\u043C\u0430\u043D\u0435\u0446\u044C | noun | Rzeczownik | Ma\u0142a torba na pieni\u0105dze i karty p\u0142atnicze.","81 | oszcz\u0119dza\u0107 | \u0437\u0430\u043E\u0449\u0430\u0434\u0436\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Gromadzi\u0107 pieni\u0105dze na przysz\u0142o\u015B\u0107.","82 | drogi | \u0434\u043E\u0440\u043E\u0433\u0438\u0439 | adjective | Przymiotnik | Maj\u0105cy wysok\u0105 cen\u0119.","83 | wsp\xf3\u0142praca | \u0441\u043F\u0456\u0432\u043F\u0440\u0430\u0446\u044F | noun | Rzeczownik | Dzia\u0142anie wsp\xf3lne dla osi\u0105gni\u0119cia celu.","84 | wymienia\u0107 | \u043E\u0431\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438 | verb | Czasownik | Dawa\u0107 co\u015B w zamian za co\u015B innego.","85 | wzajemny | \u0432\u0437\u0430\u0454\u043C\u043D\u0438\u0439 | adjective | Przymiotnik | Odnosz\u0105cy si\u0119 do obu stron jednocze\u015Bnie.","86 | wszech\u015Bwiat | \u0432\u0441\u0435\u0441\u0432\u0456\u0442 | noun | Rzeczownik | Ca\u0142a przestrze\u0144, materia i energia, kt\xf3ra istnieje.","87 | \u017Cartowa\u0107 | \u0436\u0430\u0440\u0442\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | M\xf3wi\u0107 co\u015B dla roz\u015Bmieszenia innych, nie na powa\u017Cnie.","88 | dlaczego | \u0447\u043E\u043C\u0443 | adverb | Przys\u0142\xf3wek | Pytanie o przyczyn\u0119 czego\u015B.","89 | naraz | \u0440\u0430\u043F\u0442\u043E\u043C, \u043E\u0434\u043D\u043E\u0447\u0430\u0441\u043D\u043E | adverb | Przys\u0142\xf3wek | Wskazuje na nag\u0142e zdarzenie lub r\xf3wnoczesno\u015B\u0107.","90 | pokr\xf3tce | \u043A\u043E\u0440\u043E\u0442\u043A\u043E, \u0441\u0442\u0438\u0441\u043B\u043E | adverb | Przys\u0142\xf3wek | Wyra\u017Canie czego\u015B w zwi\u0119z\u0142y spos\xf3b, bez szczeg\xf3\u0142\xf3w.","91 | wp\xf3\u0142 | \u043D\u0430\u043F\u043E\u043B\u043E\u0432\u0438\u043D\u0443, \u0441\u043F\u0456\u043B\u044C\u043D\u043E | adverb | Przys\u0142\xf3wek | Dzielenie czego\u015B na po\u0142ow\u0119 lub wsp\xf3\u0142dzia\u0142anie.","92 | wr\u0119cz | \u043D\u0430\u0432\u0456\u0442\u044C, \u043F\u0440\u044F\u043C\u043E | adverb | Przys\u0142\xf3wek | Podkre\u015Blenie intensywno\u015Bci lub bezpo\u015Brednio\u015Bci dzia\u0142ania.","93 | zgo\u0142a | \u0446\u0456\u043B\u043A\u043E\u043C, \u0437\u043E\u0432\u0441\u0456\u043C | adverb | Przys\u0142\xf3wek | Wskazuje na ca\u0142kowito\u015B\u0107 lub przeciwie\u0144stwo oczekiwa\u0144.","94 | je\u015B\u0107 | \u0457\u0441\u0442\u0438 | verb | Czasownik | Spo\u017Cywanie pokarm\xf3w.","95 | pi\u0107 | \u043F\u0438\u0442\u0438 | verb | Czasownik | Przyjmowanie p\u0142yn\xf3w.","96 | spa\u0107 | \u0441\u043F\u0430\u0442\u0438 | verb | Czasownik | Odpoczynek w stanie nie\u015Bwiadomo\u015Bci.","97 | wstawa\u0107 | \u0432\u0441\u0442\u0430\u0432\u0430\u0442\u0438 | verb | Czasownik | Przyjmowanie pozycji pionowej po spaniu.","98 | k\u0142a\u015B\u0107 si\u0119 | \u043B\u044F\u0433\u0430\u0442\u0438 | verb | Czasownik | Przyjmowanie pozycji poziomej w celu odpoczynku.","99 | i\u015B\u0107 | \u0439\u0442\u0438 | verb | Czasownik | Poruszanie si\u0119 pieszo w okre\u015Blonym kierunku.","100 | chodzi\u0107 | \u0445\u043E\u0434\u0438\u0442\u0438 | verb | Czasownik | Regularne poruszanie si\u0119 pieszo.","102 | siedzie\u0107 | \u0441\u0438\u0434\u0456\u0442\u0438 | verb | Czasownik | Znajdowanie si\u0119 w pozycji siedz\u0105cej.","103 | le\u017Ce\u0107 | \u043B\u0435\u0436\u0430\u0442\u0438 | verb | Czasownik | Znajdowanie si\u0119 w pozycji poziomej.","104 | gotowa\u0107 | \u0433\u043E\u0442\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Przyrz\u0105dzanie potraw poprzez obr\xf3bk\u0119 termiczn\u0105.","105 | sprz\u0105ta\u0107 | \u043F\u0440\u0438\u0431\u0438\u0440\u0430\u0442\u0438 | verb | Czasownik | Porz\u0105dkowanie przestrzeni.","106 | my\u0107 | \u043C\u0438\u0442\u0438 | verb | Czasownik | Czyszczenie za pomoc\u0105 wody i \u015Brodk\xf3w myj\u0105cych.","107 | k\u0105pa\u0107 si\u0119 | \u043A\u0443\u043F\u0430\u0442\u0438\u0441\u044F | verb | Czasownik | Mycie ca\u0142ego cia\u0142a w wodzie.","108 | ubiera\u0107 si\u0119 | \u043E\u0434\u044F\u0433\u0430\u0442\u0438\u0441\u044F | verb | Czasownik | Nak\u0142adanie na siebie ubra\u0144.","109 | rozbiera\u0107 si\u0119 | \u0440\u043E\u0437\u0434\u044F\u0433\u0430\u0442\u0438\u0441\u044F | verb | Czasownik | Zdejmowanie ubra\u0144.","110 | otwiera\u0107 | \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0442\u0438 | verb | Czasownik | Usuwanie przeszkody dost\u0119pu do czego\u015B.","112 | dzwoni\u0107 | \u0434\u0437\u0432\u043E\u043D\u0438\u0442\u0438 | verb | Czasownik | Wydawanie d\u017Awi\u0119ku dzwonkiem lub telefonowanie.","113 | kupowa\u0107 | \u043A\u0443\u043F\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Nabywanie d\xf3br w zamian za pieni\u0105dze.","114 | p\u0142aci\u0107 | \u043F\u043B\u0430\u0442\u0438\u0442\u0438 | verb | Czasownik | Wymiana pieni\u0119dzy za towary lub us\u0142ugi.","116 | nosi\u0107 | \u043D\u043E\u0441\u0438\u0442\u0438 | verb | Czasownik | Mie\u0107 co\u015B na sobie lub przenosi\u0107.","117 | szuka\u0107 | \u0448\u0443\u043A\u0430\u0442\u0438 | verb | Czasownik | Pr\xf3ba znalezienia czego\u015B.","118 | znajdowa\u0107 | \u0437\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u0438 | verb | Czasownik | Odkrywanie czego\u015B po poszukiwaniach.","120 | nauczy\u0107 si\u0119 | \u0432\u0438\u0432\u0447\u0438\u0442\u0438 | verb | Czasownik | Opanowanie wiedzy lub umiej\u0119tno\u015Bci.","121 | powtarza\u0107 | \u043F\u043E\u0432\u0442\u043E\u0440\u044E\u0432\u0430\u0442\u0438 | verb | Czasownik | Robienie czego\u015B ponownie lub odtwarzanie.","122 | rozumie\u0107 | \u0440\u043E\u0437\u0443\u043C\u0456\u0442\u0438 | verb | Czasownik | Pojmowanie znaczenia czego\u015B.","123 | wiedzie\u0107 | \u0437\u043D\u0430\u0442\u0438 | verb | Czasownik | Posiadanie informacji o czym\u015B.","124 | zna\u0107 | \u0437\u043D\u0430\u0442\u0438 | verb | Czasownik | Mie\u0107 wiedz\u0119 o kim\u015B/czym\u015B.","125 | pyta\u0107 | \u043F\u0438\u0442\u0430\u0442\u0438 | verb | Czasownik | Zadawanie pyta\u0144 w celu uzyskania informacji.","126 | odpowiada\u0107 | \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 | verb | Czasownik | Reagowanie na pytanie lub sytuacj\u0119.","127 | m\xf3wi\u0107 | \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u0438 | verb | Czasownik | Wypowiadanie s\u0142\xf3w.","128 | rozmawia\u0107 | \u0440\u043E\u0437\u043C\u043E\u0432\u043B\u044F\u0442\u0438 | verb | Czasownik | Wymiana zda\u0144 mi\u0119dzy osobami.","129 | t\u0142umaczy\u0107 | \u043F\u0435\u0440\u0435\u043A\u043B\u0430\u0434\u0430\u0442\u0438 / \u043F\u043E\u044F\u0441\u043D\u044E\u0432\u0430\u0442\u0438 | verb | Czasownik | Obja\u015Bnianie znaczenia lub przek\u0142ad mi\u0119dzy j\u0119zykami.","130 | zapomina\u0107 | \u0437\u0430\u0431\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Tracenie czego\u015B z pami\u0119ci.","131 | pami\u0119ta\u0107 | \u043F\u0430\u043C\u02BC\u044F\u0442\u0430\u0442\u0438 | verb | Czasownik | Zachowywanie czego\u015B w pami\u0119ci.","132 | wyja\u015Bnia\u0107 | \u043F\u043E\u044F\u0441\u043D\u044E\u0432\u0430\u0442\u0438 | verb | Czasownik | Czynienie czego\u015B zrozumia\u0142ym.","133 | czyta\u0107 | \u0447\u0438\u0442\u0430\u0442\u0438 | verb | Czasownik | Odczytywanie tekstu.","134 | pisa\u0107 | \u043F\u0438\u0441\u0430\u0442\u0438 | verb | Czasownik | Tworzenie tekstu.","135 | liczy\u0107 | \u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Wykonywanie oblicze\u0144 numerycznych.","136 | opowiada\u0107 | \u0440\u043E\u0437\u043F\u043E\u0432\u0456\u0434\u0430\u0442\u0438 | verb | Czasownik | Relacjonowanie zdarze\u0144.","137 | zgadza\u0107 si\u0119 | \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0432\u0430\u0442\u0438\u0441\u044F | verb | Czasownik | Wyra\u017Canie zgodno\u015Bci z czym\u015B.","138 | nie zgadza\u0107 si\u0119 | \u043D\u0435 \u043F\u043E\u0433\u043E\u0434\u0436\u0443\u0432\u0430\u0442\u0438\u0441\u044F | verb | Czasownik | Wyra\u017Canie braku zgody.","139 | podr\xf3\u017Cowa\u0107 | \u043F\u043E\u0434\u043E\u0440\u043E\u0436\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Przemieszczanie si\u0119 w celach poznawczych.","140 | jecha\u0107 | \u0457\u0445\u0430\u0442\u0438 | verb | Czasownik | Poruszanie si\u0119 \u015Brodkiem transportu.","141 | je\u017Adzi\u0107 | \u0457\u0437\u0434\u0438\u0442\u0438 | verb | Czasownik | Regularne podr\xf3\u017Cowanie.","142 | wraca\u0107 | \u043F\u043E\u0432\u0435\u0440\u0442\u0430\u0442\u0438\u0441\u044F | verb | Czasownik | Powr\xf3t do miejsca wyj\u015Bcia.","143 | wychodzi\u0107 | \u0432\u0438\u0445\u043E\u0434\u0438\u0442\u0438 | verb | Czasownik | Opuszczanie jakiego\u015B miejsca.","144 | wchodzi\u0107 | \u0437\u0430\u0445\u043E\u0434\u0438\u0442\u0438 | verb | Czasownik | Znajdowanie si\u0119 wewn\u0105trz czego\u015B.","146 | wysiada\u0107 | \u0432\u0438\u0445\u043E\u0434\u0438\u0442\u0438 | verb | Czasownik | Opuszczanie \u015Brodka transportu.","147 | sp\xf3\u017Ania\u0107 si\u0119 | \u0437\u0430\u043F\u0456\u0437\u043D\u044E\u0432\u0430\u0442\u0438\u0441\u044F | verb | Czasownik | Przybywanie po wyznaczonym czasie.","148 | przychodzi\u0107 | \u043F\u0440\u0438\u0445\u043E\u0434\u0438\u0442\u0438 | verb | Czasownik | Przybywanie pieszo.","149 | przyje\u017Cd\u017Ca\u0107 | \u043F\u0440\u0438\u0457\u0436\u0434\u0436\u0430\u0442\u0438 | verb | Czasownik | Przybywanie \u015Brodkiem transportu.","150 | zwiedza\u0107 | \u043E\u0433\u043B\u044F\u0434\u0430\u0442\u0438 | verb | Czasownik | Poznawanie nowych miejsc.","151 | pracowa\u0107 | \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438 | verb | Czasownik | Wykonywanie obowi\u0105zk\xf3w zawodowych.","152 | zarabia\u0107 | \u0437\u0430\u0440\u043E\u0431\u043B\u044F\u0442\u0438 | verb | Czasownik | Otrzymywanie wynagrodzenia za prac\u0119.","153 | podpisywa\u0107 | \u043F\u0456\u0434\u043F\u0438\u0441\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Sk\u0142adanie podpisu.","154 | wysy\u0142a\u0107 | \u043D\u0430\u0434\u0441\u0438\u043B\u0430\u0442\u0438 | verb | Czasownik | Przesy\u0142anie czego\u015B do odbiorcy.","155 | odbiera\u0107 | \u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Przyjmowanie czego\u015B od kogo\u015B.","156 | organizowa\u0107 | \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u043E\u0432\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Planowanie i przygotowywanie czego\u015B.","157 | planowa\u0107 | \u043F\u043B\u0430\u043D\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Uk\u0142adanie planu dzia\u0142ania.","158 | uczestniczy\u0107 | \u0431\u0440\u0430\u0442\u0438 \u0443\u0447\u0430\u0441\u0442\u044C | verb | Czasownik | By\u0107 zaanga\u017Cowanym w jakie\u015B dzia\u0142anie.","159 | kierowa\u0107 | \u043A\u0435\u0440\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Sprawowanie kontroli nad czym\u015B.","160 | rezerwowa\u0107 | \u0431\u0440\u043E\u043D\u044E\u0432\u0430\u0442\u0438 | verb | Czasownik | Zapewnianie sobie prawa do czego\u015B z wyprzedzeniem.","161 | prowadzi\u0107 | \u0432\u043E\u0434\u0438\u0442\u0438 / \u0432\u0435\u0441\u0442\u0438 | verb | Czasownik | Kontrolowanie ruchu pojazdu lub kierowanie czym\u015B. Kierowa\u0107 ruchem, rozmow\u0105, pojazdem itd.","162 | kocha\u0107 | \u043A\u043E\u0445\u0430\u0442\u0438 | verb | Czasownik | G\u0142\u0119bokie uczucie mi\u0142o\u015Bci.","163 | lubi\u0107 | \u043B\u044E\u0431\u0438\u0442\u0438 | verb | Czasownik | Odczuwanie sympatii do czego\u015B.","164 | nienawidzi\u0107 | \u043D\u0435\u043D\u0430\u0432\u0438\u0434\u0456\u0442\u0438 | verb | Czasownik | Silne uczucie niech\u0119ci.","165 | ba\u0107 si\u0119 | \u0431\u043E\u044F\u0442\u0438\u0441\u044F | verb | Czasownik | Odczuwanie strachu.","166 | cieszy\u0107 si\u0119 | \u0440\u0430\u0434\u0456\u0442\u0438 | verb | Czasownik | Odczuwanie rado\u015Bci.","167 | martwi\u0107 si\u0119 | \u0445\u0432\u0438\u043B\u044E\u0432\u0430\u0442\u0438\u0441\u044F | verb | Czasownik | Odczuwanie niepokoju.","168 | spotyka\u0107 | \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0430\u0442\u0438 | verb | Czasownik | Widzie\u0107 si\u0119 z kim\u015B.","169 | spotyka\u0107 si\u0119 | \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0430\u0442\u0438\u0441\u044F | verb | Czasownik | Regularne widywanie si\u0119.","170 | ca\u0142owa\u0107 | \u0446\u0456\u043B\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Wyra\u017Canie uczu\u0107 poprzez poca\u0142unek.","171 | przytula\u0107 | \u043E\u0431\u0456\u0439\u043C\u0430\u0442\u0438 | verb | Czasownik | Okazywanie uczu\u0107 poprzez obejmowanie.","172 | t\u0119skni\u0107 | \u0441\u0443\u043C\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u043A\u0438\u043C\u043E\u0441\u044C | verb | Czasownik | Odczuwanie braku obecno\u015Bci kogo\u015B.","173 | ufa\u0107 | \u0434\u043E\u0432\u0456\u0440\u044F\u0442\u0438 | verb | Czasownik | Mie\u0107 wiar\u0119 w czyj\u0105\u015B uczciwo\u015B\u0107. Mie\u0107 pewno\u015B\u0107 co do czyich\u015B intencji lub zdolno\u015Bci.","174 | k\u0142\xf3ci\u0107 si\u0119 | \u0441\u0432\u0430\u0440\u0438\u0442\u0438\u0441\u044F | verb | Czasownik | Prowadzenie sporu.","175 | przeprasza\u0107 | \u0432\u0438\u0431\u0430\u0447\u0430\u0442\u0438\u0441\u044F | verb | Czasownik | Wyra\u017Canie \u017Calu za swoje czyny.","176 | dzi\u0119kowa\u0107 | \u0434\u044F\u043A\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Wyra\u017Canie wdzi\u0119czno\u015Bci.","177 | prosi\u0107 | \u043F\u0440\u043E\u0441\u0438\u0442\u0438 | verb | Czasownik | Zwracanie si\u0119 z pro\u015Bb\u0105.","178 | zaprasza\u0107 | \u0437\u0430\u043F\u0440\u043E\u0448\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Proponowanie komu\u015B udzia\u0142u w czym\u015B.","179 | chorowa\u0107 | \u0445\u0432\u043E\u0440\u0456\u0442\u0438 | verb | Czasownik | By\u0107 chorym.","180 | czu\u0107 si\u0119 | \u043F\u043E\u0447\u0443\u0432\u0430\u0442\u0438 \u0441\u0435\u0431\u0435 | verb | Czasownik | Odczuwanie swojego stanu.","181 | mierzy\u0107 temperatur\u0119 | \u043C\u0456\u0440\u044F\u0442\u0438 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0443 | verb | Czasownik | Sprawdzanie poziomu ciep\u0142oty cia\u0142a.","182 | bole\u0107 | \u0431\u043E\u043B\u0456\u0442\u0438 | verb | Czasownik | Odczuwanie b\xf3lu.","183 | kaszle\u0107 | \u043A\u0430\u0448\u043B\u044F\u0442\u0438 | verb | Czasownik | Mimowolne odruchy dr\xf3g oddechowych.","185 | odpoczywa\u0107 | \u0432\u0456\u0434\u043F\u043E\u0447\u0438\u0432\u0430\u0442\u0438 | verb | Czasownik | Regeneracja si\u0142.","186 | leczy\u0107 | \u043B\u0456\u043A\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Stosowanie terapii medycznej.","187 | bra\u0107 leki | \u043F\u0440\u0438\u0439\u043C\u0430\u0442\u0438 \u043B\u0456\u043A\u0438 | verb | Czasownik | Za\u017Cywanie \u015Brodk\xf3w farmaceutycznych.","188 | zmienia\u0107 | \u0437\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438 | verb | Czasownik | Dokonywanie modyfikacji.","189 | zaczyna\u0107 | \u043F\u043E\u0447\u0438\u043D\u0430\u0442\u0438 | verb | Czasownik | Rozpoczynanie dzia\u0142ania.","190 | ko\u0144czy\u0107 | \u0437\u0430\u043A\u0456\u043D\u0447\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Doprowadzanie czego\u015B do ko\u0144ca.","191 | otwiera\u0107 | \u0432\u0456\u0434\u043A\u0440\u0438\u0432\u0430\u0442\u0438 | verb | Czasownik | Usuwanie przeszkody dost\u0119pu.","192 | zamyka\u0107 | \u0437\u0430\u043A\u0440\u0438\u0432\u0430\u0442\u0438 | verb | Czasownik | Blokowanie dost\u0119pu.","193 | zostawa\u0107 | \u0437\u0430\u043B\u0438\u0448\u0430\u0442\u0438\u0441\u044F | verb | Czasownik | Pozostawanie w miejscu.","194 | znika\u0107 | \u0437\u043D\u0438\u043A\u0430\u0442\u0438 | verb | Czasownik | Przestawa\u0107 by\u0107 widocznym.","195 | rosn\u0105\u0107 | \u0440\u043E\u0441\u0442\u0438 | verb | Czasownik | Powi\u0119kszanie rozmiar\xf3w.","196 | spada\u0107 | \u043F\u0430\u0434\u0430\u0442\u0438 | verb | Czasownik | Poruszanie si\u0119 w d\xf3\u0142 pod wp\u0142ywem grawitacji.","197 | dzia\u0142a\u0107 | \u043F\u0440\u0430\u0446\u044E\u0432\u0430\u0442\u0438 | verb | Czasownik | Funkcjonowanie mechanizmu lub urz\u0105dzenia.","198 | psu\u0107 si\u0119 | \u043B\u0430\u043C\u0430\u0442\u0438\u0441\u044F | verb | Czasownik | Przestawanie dzia\u0142a\u0107 prawid\u0142owo.","199 | u\u017Cywa\u0107 | \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Korzystanie z czego\u015B.","200 | por\xf3wnywa\u0107 | \u043F\u043E\u0440\u0456\u0432\u043D\u044E\u0432\u0430\u0442\u0438 | verb | Czasownik | Wyszukiwanie podobie\u0144stw i r\xf3\u017Cnic.","201 | wole\u0107 | \u043D\u0430\u0434\u0430\u0432\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0432\u0430\u0433\u0443 | verb | Czasownik | Mie\u0107 wi\u0119ksze upodobanie do czego\u015B.","202 | decydowa\u0107 | \u0432\u0438\u0440\u0456\u0448\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Podejmowanie rozstrzygni\u0119\u0107.","203 | wybiera\u0107 | \u043E\u0431\u0438\u0440\u0430\u0442\u0438 | verb | Czasownik | Dokonywanie wyboru.","204 | spo\u0142ecze\u0144stwo | \u0441\u0443\u0441\u043F\u0456\u043B\u044C\u0441\u0442\u0432\u043E | noun | Rzeczownik | Grupa ludzi \u017Cyj\u0105cych razem w zorganizowanej spo\u0142eczno\u015Bci.","205 | dzia\u0142alno\u015B\u0107 | \u0434\u0456\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C | noun | Rzeczownik | Zorganizowane dzia\u0142ania maj\u0105ce okre\u015Blony cel.","206 | do\u015Bwiadczenie | \u0434\u043E\u0441\u0432\u0456\u0434 | noun | Rzeczownik | Wiedza zdobyta przez praktyk\u0119 lub prze\u017Cycia.","207 | zdrowie | \u0437\u0434\u043E\u0440\u043E\u0432\'\u044F | noun | Rzeczownik | Stan fizycznego i psychicznego dobrostanu.","208 | zachowanie | \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0430 | noun | Rzeczownik | Spos\xf3b, w jaki kto\u015B si\u0119 zachowuje.","209 | rozwi\u0105zanie | \u0440\u0456\u0448\u0435\u043D\u043D\u044F (\u0432\u0438\u0440\u0456\u0448\u0435\u043D\u043D\u044F) | noun | Rzeczownik | Odpowied\u017A lub spos\xf3b rozwi\u0105zania problemu.","210 | potrzeba | \u043F\u043E\u0442\u0440\u0435\u0431\u0430 | noun | Rzeczownik | Co\u015B, czego kto\u015B bardzo potrzebuje.","211 | uczestnik | \u0443\u0447\u0430\u0441\u043D\u0438\u043A | noun | Rzeczownik | Osoba bior\u0105ca udzia\u0142 w czym\u015B.","212 | wydarzenie | \u043F\u043E\u0434\u0456\u044F | noun | Rzeczownik | Co\u015B wa\u017Cnego, co si\u0119 wydarzy\u0142o.","213 | warunek | \u0443\u043C\u043E\u0432\u0430 | noun | Rzeczownik | Co\u015B, co musi by\u0107 spe\u0142nione, \u017Ceby co\u015B innego mog\u0142o si\u0119 sta\u0107.","214 | zatrudnienie | \u043F\u0440\u0430\u0446\u0435\u0432\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u043D\u043D\u044F | noun | Rzeczownik | Stan posiadania pracy lub aktu zatrudnienia.","215 | opinia | \u0434\u0443\u043C\u043A\u0430 | noun | Rzeczownik | To, co kto\u015B my\u015Bli na dany temat.","216 | wniosek | \u0437\u0430\u044F\u0432\u0430 / \u0432\u0438\u0441\u043D\u043E\u0432\u043E\u043A | noun | Rzeczownik | Pro\u015Bba lub oficjalny dokument zawieraj\u0105cy \u017C\u0105danie albo rezultat my\u015Blenia.","217 | zwi\u0105zek | \u0437\u0432\'\u044F\u0437\u043E\u043A | noun | Rzeczownik | Po\u0142\u0105czenie dw\xf3ch os\xf3b, rzeczy lub idei.","218 | okoliczno\u015B\u0107 | \u043E\u0431\u0441\u0442\u0430\u0432\u0438\u043D\u0430 | noun | Rzeczownik | Warunki, w jakich co\u015B si\u0119 dzieje.","219 | dziedzina | \u0433\u0430\u043B\u0443\u0437\u044C | noun | Rzeczownik | Obszar wiedzy lub dzia\u0142alno\u015Bci.","220 | przypadek | \u0432\u0438\u043F\u0430\u0434\u043E\u043A | noun | Rzeczownik | Nieoczekiwana sytuacja lub zdarzenie.","221 | rynek | \u0440\u0438\u043D\u043E\u043A | noun | Rzeczownik | Miejsce kupna i sprzeda\u017Cy towar\xf3w lub us\u0142ug.","222 | umiej\u0119tno\u015B\u0107 | \u0443\u043C\u0456\u043D\u043D\u044F | noun | Rzeczownik | Zdolno\u015B\u0107 do robienia czego\u015B dobrze.","223 | przedsi\u0119biorstwo | \u043F\u0456\u0434\u043F\u0440\u0438\u0454\u043C\u0441\u0442\u0432\u043E | noun | Rzeczownik | Firma zajmuj\u0105ca si\u0119 dzia\u0142alno\u015Bci\u0105 gospodarcz\u0105.","224 | plan dzia\u0142a\u0144 | \u043F\u043B\u0430\u043D \u0434\u0456\u0439 | noun_phrase | Wyra\u017Cenie rzeczownikiem | Niema wyt\u0142umaczenia","225 | tajemnica | \u0442\u0430\u0454\u043C\u043D\u0438\u0446\u044F | noun | Rzeczownik | Co\u015B, co jest ukryte lub nieznane innym osobom.","226 | przebrzyd\u0142y | \u043E\u0433\u0438\u0434\u043D\u0438\u0439 | adjective | Przymiotnik | Bardzo nieprzyjemny, budz\u0105cy wstr\u0119t.","227 | zaatakowa\u0107 | \u0430\u0442\u0430\u043A\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Nagle i gwa\u0142townie zaatakowa\u0107 kogo\u015B fizycznie lub s\u0142ownie.","228 | podst\u0119pnie | \u043F\u0456\u0434\u0441\u0442\u0443\u043F\u043D\u043E | adverb | Przys\u0142\xf3wek | W spos\xf3b oszuka\u0144czy, z ukrytymi zamiarami.","229 | siedzenie | \u0441\u0438\u0434\u0456\u043D\u043D\u044F | noun | Rzeczownik | Cz\u0119\u015B\u0107 mebla lub pojazdu, na kt\xf3rej si\u0119 siada.","230 | drzazga | \u0441\u043A\u0430\u043B\u043A\u0430 | noun | Rzeczownik | Ma\u0142y, cienki kawa\u0142ek drewna, kt\xf3ry mo\u017Ce utkwi\u0107 w sk\xf3rze.","231 | zwyk\u0142a | \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0430 | adjective | Przymiotnik | Normalna, codzienna, bez cech wyj\u0105tkowych.","232 | niefro\u017Cna | \u043D\u0435\u043E\u0445\u0430\u0439\u043D\u0430 | adjective | Przymiotnik | Nieuporz\u0105dkowana, niedba\u0142a (forma potoczna, mo\u017Cliwe przek\u0142amanie - mo\u017Ce chodzi\u0142o o \'nieforemna\').","233 | przecie\u017C | \u0430\u0434\u0436\u0435 \u0436 | adverb | Przys\u0142\xf3wek | U\u017Cywane dla podkre\u015Blenia oczywisto\u015Bci lub argumentu.","234 | premedytacja | \u043D\u0430\u0432\u043C\u0438\u0441\u043D\u0456\u0441\u0442\u044C | noun | Rzeczownik | Dzia\u0142anie z pe\u0142n\u0105 \u015Bwiadomo\u015Bci\u0105 i zamiarem.","235 | rozg\u0142osi\u0107 | \u0440\u043E\u0437\u0433\u043E\u043B\u043E\u0441\u0438\u0442\u0438 | verb | Czasownik | Szeroko rozpowszechni\u0107 informacj\u0119.","236 | wie\u015B\u0107 | \u0437\u0432\u0456\u0441\u0442\u043A\u0430 | noun | Rzeczownik | Informacja, cz\u0119sto przekazywana ustnie.","237 | ziarenka | \u0437\u0435\u0440\u043D\u044F\u0442\u043A\u0430 | noun | Rzeczownik | Ma\u0142e nasiona ro\u015Blin, np. pieprzu, ry\u017Cu.","238 | \u015Blina pokarmowa | \u0441\u043B\u0438\u043D\u043D\u0430 \u0437\u0430\u043B\u043E\u0437\u0430 / \u0441\u043B\u0438\u043D\u0430 | noun_phrase | Wyra\u017Cenie rzeczownikiem | Ciecz produkowana w jamie ustnej, wspomaga trawienie.","239 | pieprz | \u043F\u0435\u0440\u0435\u0446\u044C | noun | Rzeczownik | Ostra przyprawa z ziaren ro\u015Bliny pieprzowej.","240 | obawia\u0107 si\u0119 | \u0431\u043E\u044F\u0442\u0438\u0441\u044F | verb_phrase | Wyra\u017Cenie czasownikiem | Czu\u0107 niepok\xf3j lub l\u0119k przed czym\u015B.","241 | szef | \u0431\u043E\u0441 | noun | Rzeczownik | Osoba kieruj\u0105ca zespo\u0142em, firm\u0105 lub dzia\u0142em.","242 | min\u0105\u0107 | \u043C\u0438\u043D\u0443\u0442\u0438 | verb | Czasownik | Przej\u015B\u0107 obok czego\u015B lub kogo\u015B; zako\u0144czy\u0107 si\u0119 (o czasie).","243 | sztanga | \u0448\u0442\u0430\u043D\u0433\u0430 | noun | Rzeczownik | Sprz\u0119t sportowy - metalowy pr\u0119t z ci\u0119\u017Carami na ko\u0144cach.","244 | smr\xf3d | \u0441\u043C\u043E\u0440\u0456\u0434 | noun | Rzeczownik | Bardzo nieprzyjemny zapach.","245 | totalnie | \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E | adverb | Przys\u0142\xf3wek | Ca\u0142kowicie, zupe\u0142nie.","246 | ewentualnie | \u043C\u043E\u0436\u043B\u0438\u0432\u043E | adverb | Przys\u0142\xf3wek | W razie potrzeby lub je\u015Bli b\u0119dzie taka mo\u017Cliwo\u015B\u0107.","247 | mianowicie | \u0430 \u0441\u0430\u043C\u0435 | adverb | Przys\u0142\xf3wek | S\u0142u\u017Cy do doprecyzowania wcze\u015Bniej wspomnianej rzeczy.","248 | natarczywy | \u043D\u0430\u0441\u0442\u0438\u0440\u043B\u0438\u0432\u0438\u0439 | adjective | Przymiotnik | Zbyt uporczywy, m\u0119cz\u0105cy w zachowaniu lub mowie.","249 | ki\u017Cy gulec | \u043F\u043E\u0434\u0430\u0433\u0440\u0430 | noun | Rzeczownik | Choroba powoduj\u0105ca b\xf3le staw\xf3w (mo\u017Ce by\u0107 potoczne okre\u015Blenie).","250 | skr\xf3t | \u0441\u043A\u043E\u0440\u043E\u0447\u0435\u043D\u043D\u044F | noun | Rzeczownik | Kr\xf3tsza forma s\u0142owa lub zestawu s\u0142\xf3w.","251 | wyzwala\u0107 si\u0119 | \u0437\u0432\u0456\u043B\u044C\u043D\u044F\u0442\u0438\u0441\u044F | verb_phrase | Wyra\u017Cenie czasownikiem | Uwalnia\u0107 si\u0119 spod wp\u0142ywu czego\u015B, z sytuacji.","252 | jest gorsza | \u0454 \u0433\u0456\u0440\u0448\u0430 | phrase | Wyra\u017Cenie | Por\xf3wnanie - co\u015B ma gorsze cechy ni\u017C inne.","253 | w\u0105cha\u0107 | \u043D\u044E\u0445\u0430\u0442\u0438 | verb | Czasownik | Wdycha\u0107 zapach czego\u015B przez nos.","254 | chwyci\u0107 | \u0441\u0445\u043E\u043F\u0438\u0442\u0438 | verb | Czasownik | Z\u0142apa\u0107 co\u015B szybko i nagle.","255 | porcelana | \u043F\u043E\u0440\u0446\u0435\u043B\u044F\u043D\u0430 | noun | Rzeczownik | Delikatna, bia\u0142a ceramika.","256 | wzi\u0105\u0107 w \u0142eb | \u043F\u0440\u043E\u0432\u0430\u043B\u0438\u0442\u0438\u0441\u044F | phrase | Wyra\u017Cenie | Nie powie\u015B\u0107 si\u0119, zako\u0144czy\u0107 si\u0119 fiaskiem (idiom).","257 | o\u015Bmiornice, wieloryby, homary | \u0432\u043E\u0441\u044C\u043C\u0438\u043D\u043E\u0433\u0438, \u043A\u0438\u0442\u0438, \u043E\u043C\u0430\u0440\u0438 | noun_phrase | Wyra\u017Cenie rzeczownikiem | Zwierz\u0119ta morskie, niekt\xf3re jadalne.","258 | klapa | \u043F\u0440\u043E\u0432\u0430\u043B | noun | Rzeczownik | Niepowodzenie, co\u015B co si\u0119 nie uda\u0142o.","259 | marnacja | \u043C\u0430\u0440\u043D\u043E\u0442\u0440\u0430\u0442\u0441\u0442\u0432\u043E | noun | Rzeczownik | Bezczynno\u015B\u0107 lub strata czasu/zasob\xf3w.","260 | przyzwoity | \u043F\u0440\u0438\u0441\u0442\u043E\u0439\u043D\u0438\u0439 | adjective | Przymiotnik | Odpowiedni, spe\u0142niaj\u0105cy minimalne standardy.","261 | kibelek | \u0442\u0443\u0430\u043B\u0435\u0442\u0438\u043A | noun | Rzeczownik | Potocznie: toaleta.","262 | najwyra\u017Aniej | \u043E\u0447\u0435\u0432\u0438\u0434\u043D\u043E | adverb | Przys\u0142\xf3wek | Z du\u017Cym prawdopodobie\u0144stwem, widocznie.","263 | naruszy\u0107 | \u043F\u043E\u0440\u0443\u0448\u0438\u0442\u0438 | verb | Czasownik | Z\u0142ama\u0107 zasady, uszkodzi\u0107 co\u015B fizycznie lub prawnie.","264 | rdze\u0144 | \u0441\u0442\u0440\u0438\u0436\u0435\u043D\u044C | noun | Rzeczownik | Centralna, podstawowa cz\u0119\u015B\u0107 czego\u015B.","265 | oddycha\u0107 | \u0434\u0438\u0445\u0430\u0442\u0438 | verb | Czasownik | Wprowadza\u0107 powietrze do p\u0142uc i wypuszcza\u0107.","266 | st\u0105d | \u0437\u0432\u0456\u0434\u0441\u0438 | adverb | Przys\u0142\xf3wek | Z tego miejsca; r\xf3wnie\u017C: z tego powodu.","267 | pozby\u0107 si\u0119 | \u043F\u043E\u0437\u0431\u0443\u0442\u0438\u0441\u044F | verb_phrase | Wyra\u017Cenie czasownikiem | Usun\u0105\u0107 co\u015B, rozsta\u0107 si\u0119 z czym\u015B.","268 | natychmiast | \u043D\u0435\u0433\u0430\u0439\u043D\u043E | adverb | Przys\u0142\xf3wek | Od razu, bez zw\u0142oki.","269 | zauwa\u017Cy\u0107 | \u043F\u043E\u043C\u0456\u0442\u0438\u0442\u0438 | verb | Czasownik | Dostrzec co\u015B wzrokiem lub zrozumieniem.","270 | wstrz\u0105s | \u0448\u043E\u043A | noun | Rzeczownik | Silna reakcja na co\u015B emocjonalnego lub fizycznego.","271 | najdrobniejszy | \u043D\u0430\u0439\u043C\u0435\u043D\u0448\u0438\u0439 | adjective | Przymiotnik | Bardzo ma\u0142y, niewielki.","272 | obejrze\u0107 | \u043F\u0435\u0440\u0435\u0432\u0456\u0440\u0438\u0442\u0438 / \u043E\u0446\u0456\u043D\u0438\u0442\u0438 | verb | Czasownik | Mo\u017Cliwe przekr\u0119cenie","273 | b\u0142yszcz\u0105cy | \u0431\u043B\u0438\u0441\u043A\u0443\u0447\u0438\u0439 | adjective | Przymiotnik | \u015Awiec\u0105cy, odbijaj\u0105cy \u015Bwiat\u0142o.","274 | porywa\u0107 | \u0432\u0438\u043A\u0440\u0430\u0434\u0430\u0442\u0438 | verb | Czasownik | Chwyta\u0107 i zabiera\u0107 kogo\u015B si\u0142\u0105 lub gwa\u0142townie.","275 | galo galo | \u0491\u0430\u0491\u0430\u0491\u0430\u0491\u0430 | interjection | Wykrzyknik | Onomatopeja (mo\u017Ce by\u0107 \u017Cartobliwe okre\u015Blenie ptaka lub krzyku).","276 | wzywa\u0107 | \u0432\u0438\u043A\u043B\u0438\u043A\u0430\u0442\u0438 | verb | Czasownik | Prosi\u0107 lub rozkazywa\u0107 komu\u015B, by si\u0119 pojawi\u0142.","277 | brach | \u0432\u0456\u0434\u0441\u0443\u0442\u043D\u0456\u0441\u0442\u044C | noun | Rzeczownik | Brak czego\u015B (forma b\u0142\u0119dna - poprawnie \'brak\').","278 | przypomina\u0107 | \u043D\u0430\u0433\u0430\u0434\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Przyswaja\u0107 co\u015B ponownie lub od\u015Bwie\u017Ca\u0107 pami\u0119\u0107.","279 | kibel | \u0442\u0443\u0430\u043B\u0435\u0442 | noun | Rzeczownik | Potocznie: toaleta.","280 | zawi\u0105za\u0107 | \u0437\u0430\u0432\'\u044F\u0437\u0430\u0442\u0438 | verb | Czasownik | Po\u0142\u0105czy\u0107 co\u015B sznurkiem, w\u0119z\u0142em.","281 | wtedy prawdopodobnie mo\u017Cliwe | \u0442\u043E\u0434\u0456 \u0439\u043C\u043E\u0432\u0456\u0440\u043D\u043E \u043C\u043E\u0436\u043B\u0438\u0432\u043E | phrase | Wyra\u017Cenie | Okolicznik warunku i prawdopodobie\u0144stwa.","282 | trzyma\u0107 | \u0442\u0440\u0438\u043C\u0430\u0442\u0438 | verb | Czasownik | Mie\u0107 co\u015B w r\u0119kach lub zachowywa\u0107 stan.","283 | pikuj | \u043F\u0456\u0440\u043D\u0430\u0439 | verb | Czasownik | Potoczne, skr\xf3cone: gwa\u0142townie opada\u0107 (z ukr. \u0447\u0438 \u0440\u043E\u0441.).","284 | chyba czego\u015B nie rozumiem | \u0437\u0434\u0430\u0454\u0442\u044C\u0441\u044F, \u044F \u0449\u043E\u0441\u044C \u043D\u0435 \u0440\u043E\u0437\u0443\u043C\u0456\u044E | phrase | Wyra\u017Cenie | Wyra\u017Cenie w\u0105tpliwo\u015Bci lub niezrozumienia.","285 | daj spok\xf3j | \u0437\u0430\u043B\u0438\u0448 \u0446\u0435 | interjection | Wykrzyknik | Pro\u015Bba, by kto\u015B przesta\u0142 co\u015B robi\u0107/m\xf3wi\u0107.","286 | trudno | \u0432\u0430\u0436\u043A\u043E | interjection | Wykrzyknik | U\u017Cywane, gdy trzeba zaakceptowa\u0107 co\u015B trudnego.","287 | lekkie korki przy mostach | \u043D\u0435\u0432\u0435\u043B\u0438\u043A\u0456 \u0437\u0430\u0442\u043E\u0440\u0438 \u0431\u0456\u043B\u044F \u043C\u043E\u0441\u0442\u0456\u0432 | noun_phrase | Wyra\u017Cenie rzeczownikiem | Informacja o utrudnieniach w ruchu.","288 | podje\u017Cd\u017Ca\u0107 | \u043F\u0456\u0434\'\u0457\u0436\u0434\u0436\u0430\u0442\u0438 | verb | Czasownik | Zbli\u017Ca\u0107 si\u0119 pojazdem do miejsca.","289 | wsz\u0119dzie | \u0432\u0441\u044E\u0434\u0438 | adverb | Przys\u0142\xf3wek | W ka\u017Cdym miejscu.","290 | ogoniasty | \u0445\u0432\u043E\u0441\u0442\u0430\u0442\u0438\u0439 | adjective | Przymiotnik | Maj\u0105cy ogon, cz\u0119sto u\u017Cywane w zoologii.","291 | nie zgubi\u0107 go | \u043D\u0435 \u0437\u0430\u0433\u0443\u0431\u0438\u0442\u0438 \u0439\u043E\u0433\u043E | verb_phrase | Wyra\u017Cenie czasownikiem | Zachowa\u0107 co\u015B przy sobie.","292 | przem\xf3wi\u0107 | \u043F\u0440\u043E\u043C\u043E\u0432\u0438\u0442\u0438 | verb | Czasownik | Zacz\u0105\u0107 m\xf3wi\u0107, cz\u0119sto publicznie.","293 | ju\u017C si\u0119 robi | \u0432\u0436\u0435 \u0440\u043E\u0431\u0438\u0442\u044C\u0441\u044F | phrase | Wyra\u017Cenie | Potoczne: natychmiast wykonuj\u0119 polecenie.","294 | zagarn\u0105\u0107 | \u0437\u0430\u0433\u0430\u0440\u0431\u0430\u0442\u0438 | verb | Czasownik | Przyw\u0142aszczy\u0107 co\u015B sobie, cz\u0119sto nieuczciwie.","295 | stolce | \u0444\u0435\u043A\u0430\u043B\u0456\u0457 | noun | Rzeczownik | Inna nazwa: ka\u0142, wydzielina jelitowa.","296 | wydosta\u0107 si\u0119 | \u0432\u0438\u0431\u0440\u0430\u0442\u0438\u0441\u044F | verb_phrase | Wyra\u017Cenie czasownikiem | Uwolni\u0107 si\u0119 z zamkni\u0119tego miejsca.","297 | opanowa\u0107 | \u043E\u043F\u0430\u043D\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Zapanowa\u0107 nad czym\u015B, nauczy\u0107 si\u0119 lub zdoby\u0107 kontrol\u0119.","298 | stopi\u0107 si\u0119 | \u0440\u043E\u0437\u0442\u0430\u043D\u0443\u0442\u0438 | verb | Czasownik | Przej\u015B\u0107 w stan ciek\u0142y, zwykle pod wp\u0142ywem ciep\u0142a.","299 | nieodwracalny | \u043D\u0435\u0437\u0432\u043E\u0440\u043E\u0442\u043D\u0456\u0439 | adjective | Przymiotnik | Taki, kt\xf3rego nie da si\u0119 cofn\u0105\u0107.","300 | zdejmowa\u0107 | \u0437\u043D\u0456\u043C\u0430\u0442\u0438 | verb | Czasownik | Usuwa\u0107 co\u015B z siebie (np. ubranie).","301 | obej\u015B\u0107 | \u043E\u0431\u0456\u0439\u0442\u0438 | verb | Czasownik | P\xf3j\u015B\u0107 dooko\u0142a lub unikn\u0105\u0107 czego\u015B.","302 | \u017Cr\u0105cy | \u0457\u0434\u043A\u0438\u0439 | adjective | Przymiotnik | Powoduj\u0105cy b\xf3l, podra\u017Cnienie; chemicznie agresywny.","303 | uwolni\u0107 | \u0437\u0432\u0456\u043B\u044C\u043D\u0438\u0442\u0438 | verb | Czasownik | Sprawi\u0107, \u017Ce kto\u015B/co\u015B staje si\u0119 wolne.","304 | reszta | \u0440\u0435\u0448\u0442\u0430 | noun | Rzeczownik | To, co pozostaje po odj\u0119ciu.","305 | g\u0142upio | \u0434\u0443\u0440\u043D\u043E | adverb | Przys\u0142\xf3wek | W spos\xf3b niem\u0105dry lub wstydliwy.","306 | \u017Cywot | \u0436\u0438\u0442\u0442\u044F | noun | Rzeczownik | Inne okre\u015Blenie \u017Cycia, cz\u0119sto w stylu podnios\u0142ym.","307 | powstrzyma\u0107 | \u0441\u0442\u0440\u0438\u043C\u0430\u0442\u0438 | verb | Czasownik | Zatrzyma\u0107 lub uniemo\u017Cliwi\u0107 dzia\u0142anie.","309 | poprowadzi\u0107 | \u043F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 | verb | Czasownik | Przej\u0105\u0107 kontrol\u0119 nad czym\u015B i rozpocz\u0105\u0107 kierowanie.","310 | przytwierdzony | \u043F\u0440\u0438\u043A\u0440\u0456\u043F\u043B\u0435\u043D\u0438\u0439 | adjective | Przymiotnik | Trwale przymocowany do czego\u015B.","311 | zad | \u0437\u0430\u0434 | noun | Rzeczownik | Tylna cz\u0119\u015B\u0107 cia\u0142a, potocznie: po\u015Bladki.","312 | na czym polega r\xf3\u017Cnica | \u0432 \u0447\u043E\u043C\u0443 \u043F\u043E\u043B\u044F\u0433\u0430\u0454 \u0440\u0456\u0437\u043D\u0438\u0446\u044F | phrase | Wyra\u017Cenie | Pytanie o istot\u0119 r\xf3\u017Cnicy mi\u0119dzy rzeczami.","313 | s\xf3l jodowana | \u0439\u043E\u0434\u043E\u0432\u0430\u043D\u0430 \u0441\u0456\u043B\u044C | noun_phrase | Wyra\u017Cenie rzeczownikiem | S\xf3l kuchenn\u0430 z dodatkiem jodu.","314 | szczypta | \u0449\u0456\u043F\u043A\u0430 | noun | Rzeczownik | Bardzo ma\u0142a ilo\u015B\u0107 czego\u015B (np. przyprawy).","315 | na wysypisku | \u043D\u0430 \u0441\u043C\u0456\u0442\u043D\u0438\u043A\u0443 | phrase | Wyra\u017Cenie | W miejscu, gdzie gromadzi si\u0119 odpady.","316 | dotrze\u0107 | \u0434\u0456\u0441\u0442\u0430\u0442\u0438\u0441\u044F | verb | Czasownik | Osi\u0105gn\u0105\u0107 cel podr\xf3\u017Cy.","317 | p\u0142aka\u0107 | \u043F\u043B\u0430\u043A\u0430\u0442\u0438 | verb | Czasownik | Wydziela\u0107 \u0142zy z oczu z emocji.","318 | rycze\u0107 | \u0440\u0435\u0432\u0456\u0442\u0438 | verb | Czasownik | G\u0142o\u015Bno p\u0142aka\u0107 lub krzycze\u0107.","319 | udawa\u0107 | \u0432\u0434\u0430\u0432\u0430\u0442\u0438 | verb | Czasownik | Na\u015Bladowa\u0107 co\u015B, robi\u0107 co\u015B na niby. Stwarza\u0107 pozory, \u017Ce co\u015B jest prawd\u0105.","320 | wspomnienia | \u0441\u043F\u043E\u0433\u0430\u0434\u0438 | noun | Rzeczownik | Pami\u0119\u0107 o przesz\u0142ych wydarzeniach.","321 | zadzia\u0142a | \u043F\u043E\u0434\u0456\u0454 | verb | Czasownik | B\u0119dzie dzia\u0142a\u0107, przyniesie efekt.","322 | straci\u0107 | \u0432\u0442\u0440\u0430\u0442\u0438\u0442\u0438 | verb | Czasownik | Przesta\u0107 co\u015B mie\u0107, zgubi\u0107 lub przegra\u0107.","323 | towarzystwo | \u043A\u043E\u043C\u043F\u0430\u043D\u0456\u044F | noun | Rzeczownik | Grupa ludzi sp\u0119dzaj\u0105cych razem czas.","324 | jestem wolny | \u044F \u0432\u0456\u043B\u044C\u043D\u0438\u0439 | phrase | Wyra\u017Cenie | Nie mam zaj\u0119\u0107 lub obowi\u0105zk\xf3w.","325 | a mo\u017Ce jednak | \u0430 \u043C\u043E\u0436\u0435 \u0432\u0441\u0435 \u0436 \u0442\u0430\u043A\u0438 | phrase | Wyra\u017Cenie | Wyra\u017Cenie niepewno\u015Bci lub zmiany decyzji.","326 | wed\u0142ug | \u0437\u0433\u0456\u0434\u043D\u043E \u0437 | preposition | Przyimek | Opieraj\u0105c si\u0119 na czyim\u015B zdaniu lub zasadzie.","327 | podnie\u015B\u0107 | \u043F\u0456\u0434\u043D\u044F\u0442\u0438 | verb | Czasownik | Unie\u015B\u0107 co\u015B do g\xf3ry.","328 | ca\u0142kiem | \u0446\u0456\u043B\u043A\u043E\u043C | adverb | Przys\u0142\xf3wek | W pe\u0142ni, zupe\u0142nie.","329 | panika | \u043F\u0430\u043D\u0456\u043A\u0430 | noun | Rzeczownik | Nag\u0142y, silny strach lub l\u0119k, kt\xf3ry utrudnia racjonalne my\u015Blenie.","330 | przysz\u0142a pora na popcorn | \u043D\u0430\u0441\u0442\u0430\u0432 \u0447\u0430\u0441 \u0434\u043B\u044F \u043F\u043E\u043F\u043A\u043E\u0440\u043D\u0443 | phrase | Wyra\u017Cenie | Wyra\u017Cenie oznaczaj\u0105ce, \u017Ce nadszed\u0142 odpowiedni moment na zjedzenie popcornu, np. podczas ogl\u0105dania filmu.","331 | sporo | \u0447\u0438\u043C\u0430\u043B\u043E | adverb | Przys\u0142\xf3wek | Znaczna ilo\u015B\u0107 czego\u015B, do\u015B\u0107 du\u017Co.","332 | skoro | \u043E\u0441\u043A\u0456\u043B\u044C\u043A\u0438 | conjunction | Sp\xf3jnik | Sp\xf3jnik wprowadzaj\u0105cy przyczyn\u0119 lub uzasadnienie.","333 | jak najch\u0119tniej | \u044F\u043A\u043D\u0430\u0439\u043E\u0445\u043E\u0447\u0435 | adverbial_phrase | Wyra\u017Cenie przys\u0142\xf3wkiem | \u041F\u043E\u0433\u043E\u0434\u0436\u0435\u043D\u043D\u044F \u0437 \u0435\u043D\u0442\u0443\u0437\u0456\u0430\u0437\u043C\u043E\u043C, \u0431\u0430\u0436\u0430\u043D\u043D\u044F\u043C. \u041A\u043E\u043B\u0438 \u0445\u043E\u0447\u0435\u0442\u044C\u0441\u044F \u043F\u0456\u0434\u043A\u0440\u0435\u0441\u043B\u0438\u0442\u0438, \u0449\u043E \u0440\u043E\u0431\u0438\u0442\u0435 \u0449\u043E\u0441\u044C \u0456\u0437 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u043D\u044F\u043C. \u0427\u0430\u0441\u0442\u043E \u0443 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044F\u0445 \u043D\u0430 \u043F\u0440\u043E\u043F\u043E\u0437\u0438\u0446\u0456\u0457. \u2014 Czy zjesz lody? \u2014 Jak najbardziej! (\u0422\u0430\u043A, \u0437\u02BC\u0457\u043C!) \u2014 Czy zjesz lody? \u2014 Jak najch\u0119tniej! (\u0422\u0430\u043A, \u0437 \u0432\u0435\u043B\u0438\u043A\u043E\u044E \u0440\u0430\u0434\u0456\u0441\u0442\u044E!)","334 | praca si\u0119 zwraca | \u043F\u0440\u0430\u0446\u044F \u043E\u043A\u0443\u043F\u0430\u0454\u0442\u044C\u0441\u044F | proverb | Przys\u0142owie | W\u0142o\u017Cony wysi\u0142ek przynosi korzy\u015Bci lub rezultaty.","335 | przetrawione | \u043F\u0435\u0440\u0435\u0442\u0440\u0430\u0432\u043B\u0435\u043D\u0435 | adjective | Przymiotnik | Co\u015B, co zosta\u0142o strawione lub przemy\u015Blane i zrozumiane.","336 | wst\u0119pnie | \u043F\u043E\u043F\u0435\u0440\u0435\u0434\u043D\u044C\u043E | adverb | Przys\u0142\xf3wek | Na pocz\u0105tku, bez szczeg\xf3\u0142owego rozpatrzenia.","337 | przepis | \u0440\u0435\u0446\u0435\u043F\u0442 | noun | Rzeczownik | Instrukcja przygotowania potrawy lub spos\xf3b post\u0119powania.","338 | ha\u0144ba ci | \u0433\u0430\u043D\u044C\u0431\u0430 \u0442\u043E\u0431\u0456 | interjection | Wykrzyknik | Wyra\u017Cenie pot\u0119pienia lub zawstydzenia wobec kogo\u015B.","339 | oczy na mnie | \u043E\u0447\u0456 \u043D\u0430 \u043C\u0435\u043D\u0435 | phrase | Wyra\u017Cenie | Wezwanie do skupienia uwagi na m\xf3wi\u0105cym.","340 | uwierzy\u0107 | \u043F\u043E\u0432\u0456\u0440\u0438\u0442\u0438 | verb | Czasownik | Zaakceptowa\u0107 co\u015B jako prawd\u0119 bez dowod\xf3w.","341 | przestrzega\u0107 | \u0434\u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438\u0441\u044F | verb | Czasownik | Post\u0119powa\u0107 zgodnie z zasadami lub przepisami.","342 | powa\u017Cnie | \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E | adverb | Przys\u0142\xf3wek | Bez \u017Cart\xf3w, z pe\u0142n\u0105 odpowiedzialno\u015Bci\u0105.","343 | zachowywa\u0107 | \u043F\u043E\u0432\u043E\u0434\u0438\u0442\u0438\u0441\u044F | verb | Czasownik | Post\u0119powa\u0107 w okre\u015Blony spos\xf3b, np. kulturalnie.","344 | za\u0142atwi\u0107 | \u0432\u043B\u0430\u0448\u0442\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Zorganizowa\u0107 co\u015B lub rozwi\u0105za\u0107 problem.","345 | za\u0142atwi\u0119 wam ten popcorn | \u0432\u043B\u0430\u0448\u0442\u0443\u044E \u0432\u0430\u043C \u0446\u0435\u0439 \u043F\u043E\u043F\u043A\u043E\u0440\u043D | verb_phrase | Wyra\u017Cenie czasownikiem | Przygotowa\u0107 lub poda\u0107 komu\u015B popcorn.","346 | zaufa\u0107 | \u0434\u043E\u0432\u0456\u0440\u0438\u0442\u0438\u0441\u044F | verb | Czasownik | Uwierzy\u0107 w czyj\u0105\u015B uczciwo\u015B\u0107 lub umiej\u0119tno\u015Bci.","348 | preferowa\u0107 | \u043D\u0430\u0434\u0430\u0432\u0430\u0442\u0438 \u043F\u0435\u0440\u0435\u0432\u0430\u0433\u0443 | verb | Czasownik | Wybiera\u0107 jedn\u0105 rzecz zamiast innej ze wzgl\u0119du na upodobanie.","349 | traci\u0107 nadziei | \u0432\u0442\u0440\u0430\u0447\u0430\u0442\u0438 \u043D\u0430\u0434\u0456\u044E | verb_phrase | Wyra\u017Cenie czasownikiem | Przestawa\u0107 wierzy\u0107 w pozytywne rozwi\u0105zanie.","350 | zwymiotowa\u0107 | \u0437\u0431\u043B\u044E\u0432\u0430\u0442\u0438 | verb | Czasownik | Wydali\u0107 tre\u015B\u0107 \u017Co\u0142\u0105dka przez usta.","351 | gra\u0107 w zespole | \u0433\u0440\u0430\u0442\u0438 \u0432 \u0433\u0440\u0443\u043F\u0456 | verb_phrase | Wyra\u017Cenie czasownikiem | Wyst\u0119powa\u0107 razem z innymi muzykami w zespole.","352 | przejrze\u0107 | \u043F\u0435\u0440\u0435\u0433\u043B\u044F\u043D\u0443\u0442\u0438 | verb | Czasownik | Sprawdzi\u0107 co\u015B szybko lub pobie\u017Cnie.","353 | ukochany | \u043A\u043E\u0445\u0430\u043D\u0438\u0439 | adjective | Przymiotnik | Bardzo kochany, najdro\u017Cszy (np. o osobie).","354 | stopa | \u0441\u0442\u043E\u043F\u0430 | noun | Rzeczownik | Cz\u0119\u015B\u0107 nogi od kostki do palc\xf3w lub jednostka miary.","355 | a gdyby tak | \u0430 \u044F\u043A\u0449\u043E \u0442\u0430\u043A | phrase | Wyra\u017Cenie | Wyra\u017Cenie wprowadzaj\u0105ce hipotetyczn\u0105 sytuacj\u0119.","356 | powiedzie\u0107 na temat | \u0441\u043A\u0430\u0437\u0430\u0442\u0438 \u043D\u0430 \u0442\u0435\u043C\u0443 | verb_phrase | Wyra\u017Cenie czasownikiem | Wypowiedzie\u0107 si\u0119 w konkretnej sprawie.","357 | w innej bajce | \u0432 \u0456\u043D\u0448\u0456\u0439 \u043A\u0430\u0437\u0446\u0456 | phrase | Wyra\u017Cenie | Odniesienie do zupe\u0142nie innej sytuacji lub kontekstu.","358 | znalezione - nie kradzione | \u0437\u043D\u0430\u0439\u0434\u0435\u043D\u0435 \u2013 \u043D\u0435 \u043A\u0440\u0430\u0434\u0435\u043D\u0435 | proverb | Przys\u0142owie | \u017Bartobliwe usprawiedliwienie przyw\u0142aszczenia znalezionej rzeczy.","359 | szlak | \u0448\u043B\u044F\u0445 | noun | Rzeczownik | Droga lub trasa, kt\xf3r\u0105 si\u0119 pod\u0105\u017Ca.","360 | a\u017C nam brzuchy strzela | \u0430\u0436 \u0443 \u043D\u0430\u0441 \u0436\u0438\u0432\u043E\u0442\u0438 \u0442\u0440\u0456\u0449\u0430\u0442\u044C | phrase | Wyra\u017Cenie | \u017Bartobliwe okre\u015Blenie intensywnego \u015Bmiechu.","361 | facet | \u0445\u043B\u043E\u043F\u0435\u0446\u044C | noun | Rzeczownik | Potoczne okre\u015Blenie m\u0119\u017Cczyzny.","362 | blefowa\u0107 | \u0431\u043B\u0435\u0444\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Ok\u0142amywa\u0107 lub wprowadza\u0107 w b\u0142\u0105d, np. w grze.","363 | w\u0142\u0105cznik | \u0432\u0438\u043C\u0438\u043A\u0430\u0447 | noun | Rzeczownik | Przycisk lub urz\u0105dzenie do w\u0142\u0105czania/wy\u0142\u0105czania czego\u015B.","364 | zgromadzi\u0107 si\u0119 | \u0437\u0456\u0431\u0440\u0430\u0442\u0438\u0441\u044F | verb_phrase | Wyra\u017Cenie czasownikiem | Zebra\u0107 si\u0119 w jednym miejscu (o grupie ludzi).","365 | w sprawie | \u0449\u043E\u0434\u043E | preposition | Przyimek | Odnosz\u0105cy si\u0119 do konkretnej kwestii.","366 | w\u0142amanie | \u043A\u0440\u0430\u0434\u0456\u0436\u043A\u0430 \u0437\u0456 \u0437\u043B\u043E\u043C\u043E\u043C | noun | Rzeczownik | Nielegalne wej\u015Bcie do budynku w celu kradzie\u017Cy.","367 | nie mog\u0119 tak tego zostawi\u0107 | \u043D\u0435 \u043C\u043E\u0436\u0443 \u0442\u0430\u043A \u0437\u0430\u043B\u0438\u0448\u0438\u0442\u0438 | phrase | Wyra\u017Cenie | Konieczno\u015B\u0107 reakcji na jak\u0105\u015B sytuacj\u0119.","368 | \u015Bledztwo | \u0440\u043E\u0437\u0441\u043B\u0456\u0434\u0443\u0432\u0430\u043D\u043D\u044F | noun | Rzeczownik | Oficjalne dochodzenie w sprawie przest\u0119pstwa.","369 | podejrze\u0107 | \u043F\u0456\u0434\u043E\u0437\u0440\u044E\u0432\u0430\u0442\u0438 | verb | Czasownik | Mie\u0107 przypuszczenia co do czyjej\u015B winy.","370 | schowa\u0107 | \u0441\u0445\u043E\u0432\u0430\u0442\u0438 | verb | Czasownik | Umie\u015Bci\u0107 co\u015B w ukrytym miejscu.","371 | piec | \u043F\u0456\u0447 | noun | Rzeczownik | Urz\u0105dzenie do pieczenia lub ogrzewania pomieszcze\u0144.","372 | wulkan | \u0432\u0443\u043B\u043A\u0430\u043D | noun | Rzeczownik | G\xf3ra, z kt\xf3rej mo\u017Ce wydobywa\u0107 si\u0119 lawa i popi\xf3\u0142.","373 | wed\u0142ug mojej oceny | \u043D\u0430 \u043C\u0456\u0439 \u043F\u043E\u0433\u043B\u044F\u0434 | phrase | Wyra\u017Cenie | Wyra\u017Cenie opinii opartej na w\u0142asnym zdaniu.","374 | boskie prawo | \u0431\u043E\u0436\u0435 \u043F\u0440\u0430\u0432\u043E | noun_phrase | Wyra\u017Cenie rzeczownikiem | Prawa lub zasady uwa\u017Cane za nadane przez Boga.","375 | b\u0142yskawicznie znikni\u0119cie | \u0431\u043B\u0438\u0441\u043A\u0430\u0432\u0438\u0447\u043D\u0435 \u0437\u043D\u0438\u043A\u043D\u0435\u043D\u043D\u044F | noun_phrase | Wyra\u017Cenie rzeczownikiem | Nag\u0142e i bardzo szybkie znikni\u0119cie.","376 | z\u0142apa\u0107 | \u0437\u043B\u043E\u0432\u0438\u0442\u0438 | verb | Czasownik | Schwyta\u0107 kogo\u015B lub co\u015B.","377 | kwestionowa\u0107 | \u0441\u0442\u0430\u0432\u0438\u0442\u0438 \u043F\u0456\u0434 \u0441\u0443\u043C\u043D\u0456\u0432 | verb | Czasownik | Podwa\u017Ca\u0107 prawdziwo\u015B\u0107 czyjego\u015B stanowiska.","378 | Czy masz do powiedzenia na swoj\u0105 obron\u0119 | \u0449\u043E \u0441\u043A\u0430\u0436\u0435\u0448 \u043D\u0430 \u0441\u0432\u0456\u0439 \u0437\u0430\u0445\u0438\u0441\u0442 | phrase | Wyra\u017Cenie | Pro\u015Bba o przedstawienie argument\xf3w obrony.","379 | utkn\u0105\u0107 | \u0437\u0430\u0441\u0442\u0440\u044F\u0433\u043D\u0443\u0442\u0438 | verb | Czasownik | Znale\u017A\u0107 si\u0119 w sytuacji bez wyj\u015Bcia.","380 | aparat fotograficzny | \u0444\u043E\u0442\u043E\u0430\u043F\u0430\u0440\u0430\u0442 | noun | Rzeczownik | Urz\u0105dzenie do robienia zdj\u0119\u0107.","381 | pos\u0142ugiwa\u0107 | \u043A\u043E\u0440\u0438\u0441\u0442\u0443\u0432\u0430\u0442\u0438\u0441\u044F | verb | Czasownik | U\u017Cywa\u0107 czego\u015B do okre\u015Blonego celu.","382 | bzdura | \u043D\u0456\u0441\u0435\u043D\u0456\u0442\u043D\u0438\u0446\u044F | noun | Rzeczownik | Co\u015B bez sensu, g\u0142upstwo.","383 | przeprowadzi\u0107 | \u043F\u0440\u043E\u0432\u0435\u0441\u0442\u0438 | verb | Czasownik | Zrealizowa\u0107 co\u015B (np. rozmow\u0119, badanie).","384 | chyba si\u0119 zgadza | \u043C\u0430\u0431\u0443\u0442\u044C, \u0441\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F | phrase | Wyra\u017Cenie | Prawdopodobnie jest poprawne lub zgodne z faktami.","385 | zbiornik komunalny | \u043A\u043E\u043C\u0443\u043D\u0430\u043B\u044C\u043D\u0438\u0439 \u0440\u0435\u0437\u0435\u0440\u0432\u0443\u0430\u0440 | noun_phrase | Wyra\u017Cenie rzeczownikiem | Pojemnik na \u015Bmieci lub odpady.","386 | kr\u0119ci\u0107 | \u043A\u0440\u0443\u0442\u0438\u0442\u0438 | verb | Czasownik | Obraca\u0107 co\u015B lub nakr\u0119ca\u0107 (np. film).","387 | czy mi si\u0119 zdaj\u0119 | \u0447\u0438 \u043C\u0435\u043D\u0456 \u0437\u0434\u0430\u0454\u0442\u044C\u0441\u044F | phrase | Wyra\u017Cenie | Pytanie retoryczne o w\u0142asne odczucia.","388 | g\u0142owa | \u0433\u043E\u043B\u043E\u0432\u0430 | noun | Rzeczownik | Cz\u0119\u015B\u0107 cia\u0142a lub lider grupy.","389 | wolic | \u0432\u043E\u043B\u0456\u0442\u0438 | verb | Czasownik | Mie\u0107 wi\u0119ksze upodobanie do jednej opcji ni\u017C do innej.","391 | poucza\u0107 | \u043F\u043E\u0432\u0447\u0430\u0442\u0438 | verb | Czasownik | Uczy\u0107 kogo\u015B, cz\u0119sto w spos\xf3b mentorski.","392 | drink | \u043D\u0430\u043F\u0456\u0439 | noun | Rzeczownik | Nap\xf3j alkoholowy, cz\u0119sto mieszany.","393 | teskn\u0105\u0107 | \u0441\u0443\u043C\u0443\u0432\u0430\u0442\u0438 | verb | Czasownik | Odczuwa\u0107 t\u0119sknot\u0119 za kim\u015B lub czym\u015B.","394 | wzi\u0105\u0107 udzia\u0142 | \u0432\u0437\u044F\u0442\u0438 \u0443\u0447\u0430\u0441\u0442\u044C | verb_phrase | Wyra\u017Cenie czasownikiem | Uczestniczy\u0107 w jakim\u015B wydarzeniu.","396 | przyssawka do soczewek | \u043F\u0440\u0438\u0441\u043E\u0441\u043A\u0430 \u0434\u043B\u044F \u043B\u0456\u043D\u0437 | noun | Rzeczownik | Ma\u0142e urz\u0105dzenie pomagaj\u0105ce w zak\u0142adaniu i zdejmowaniu soczewek kontaktowych.","397 | zak\u0142ada\u0107 soczewki | \u043D\u0430\u0434\u0456\u0432\u0430\u0442\u0438 \u043B\u0456\u043D\u0437\u0438 | verb_phrase | Wyra\u017Cenie czasownikiem | Umieszcza\u0107 soczewki kontaktowe na oczach w celu korekcji wzroku.","398 | zak\u0142ada\u0107 | \u043D\u0430\u0434\u0456\u0432\u0430\u0442\u0438 | verb | Czasownik | Umieszcza\u0107 co\u015B na sobie (np. ubranie, soczewki).","399 | piel\u0119gnowa\u0107 | \u0434\u043E\u0433\u043B\u044F\u0434\u0430\u0442\u0438 | verb | Czasownik | Troszczy\u0107 si\u0119 o co\u015B lub kogo\u015B, zapewnia\u0107 odpowiedni\u0105 opiek\u0119.","400 | dba\u0107 o | \u043F\u0456\u043A\u043B\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043F\u0440\u043E | verb_phrase | Wyra\u017Cenie czasownikiem | Zapewnia\u0107 opiek\u0119 lub dba\u0142o\u015B\u0107 o co\u015B/kogo\u015B.","401 | prawid\u0142owo | \u043F\u0440\u0430\u0432\u0438\u043B\u044C\u043D\u043E | adverb | Przys\u0142\xf3wek | W spos\xf3b zgodny z zasadami lub normami.","402 | zdejmowa\u0107 soczewki | \u0437\u043D\u0456\u043C\u0430\u0442\u0438 \u043B\u0456\u043D\u0437\u0438 | verb_phrase | Wyra\u017Cenie czasownikiem | Usuwa\u0107 soczewki kontaktowe z oczu.","403 | jest wygodne | \u0446\u0435 \u0437\u0440\u0443\u0447\u043D\u043E | adjective_phrase | Wyra\u017Cenie przymiotnikiem | Okre\u015Blenie czego\u015B, co zapewnia komfort u\u017Cytkowania.","404 | nadal | Niema t\u0142umaczenia | noun | Rzeczownik | Niema wyt\u0142umaczenia","405 | jak najbardziej | \u044F\u043A\u043D\u0430\u0439\u0431\u0456\u043B\u044C\u0448\u0435, \u0431\u0435\u0437\u0443\u043C\u043E\u0432\u043D\u043E, \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E | phrase | Wyra\u017Cenie | \u0412\u0438\u0440\u0430\u0437 \u0441\u0438\u043B\u044C\u043D\u043E\u0457 \u0437\u0433\u043E\u0434\u0438 \u0430\u0431\u043E \u043F\u0456\u0434\u0442\u0432\u0435\u0440\u0434\u0436\u0435\u043D\u043D\u044F, \u0435\u043A\u0432\u0456\u0432\u0430\u043B\u0435\u043D\u0442 \u0443\u043A\u0440. \'\u0442\u0430\u043A\', \u0430\u043B\u0435 \u0437 \u043D\u0430\u0442\u0438\u0441\u043A\u043E\u043C","406 | wcale | \u0432\u0437\u0430\u0433\u0430\u043B\u0456 | adverb | Przys\u0142\xf3wek | \'Wcale\' to przys\u0142\xf3wkiem oznaczaj\u0105cym negacj\u0119. Oznacza \'w \u017Caden spos\xf3b\', \'wcale nie\' lub \'zupe\u0142nie\'. Mo\u017Cna go u\u017Cy\u0107 do wyra\u017Cenia pe\u0142nego braku czego\u015B, negacji lub \u017Ceby podkre\u015Bli\u0107, \u017Ce co\u015B nie jest zgodne z oczekiwaniami. Wcale brzmi mocniej w zaprzeczeniach.","407 | w og\xf3le | \u0432\u0437\u0430\u0433\u0430\u043B\u0456 | adverb | Przys\u0142\xf3wek | \'W og\xf3le\' jest bardziej uniwersalne i mo\u017Ce te\u017C wprowadza\u0107 temat (\'W og\xf3le to mam pytanie...\'). Por\xf3wnanie z wcale","408 | zupe\u0142nie | \u0432\u0437\u0430\u0433\u0430\u043B\u0456 | adverb | Przys\u0142\xf3wek | nie wiadomo"]');

},{}],"9UsVm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "openWordModal", ()=>(0, _openWordModalDefault.default));
parcelHelpers.export(exports, "throttle", ()=>(0, _throttleDefault.default));
parcelHelpers.export(exports, "parseWords", ()=>(0, _parseWordsDefault.default));
var _openWordModal = require("./openWordModal");
var _openWordModalDefault = parcelHelpers.interopDefault(_openWordModal);
var _throttle = require("./throttle");
var _throttleDefault = parcelHelpers.interopDefault(_throttle);
var _parseWords = require("./parseWords");
var _parseWordsDefault = parcelHelpers.interopDefault(_parseWords);
var _filteredWords = require("./filteredWords");
parcelHelpers.exportAll(_filteredWords, exports);
var _prompts = require("./prompts");
parcelHelpers.exportAll(_prompts, exports);

},{"./openWordModal":"5SNUE","./throttle":"8Uc4U","./parseWords":"2juJg","./filteredWords":"igAVF","./prompts":"83lAT","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5SNUE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>openWordModal);
var _components = require("../components");
var _globalVariables = require("../globalVariables");
function openWordModal(word) {
    const isFavoriteWord = (0, _globalVariables.vars).wordsInstance.getById(word.id).favorite;
    (0, _globalVariables.elements).modal.classList.add("active");
    (0, _globalVariables.elements).modalAddBtn.dataset.wordId = word.id;
    if (isFavoriteWord) (0, _globalVariables.elements).modalAddBtn.innerHTML = "Remove from Favorite";
    else (0, _globalVariables.elements).modalAddBtn.innerHTML = "Add to Favorite";
    (0, _globalVariables.elements).modalContent.innerHTML = (0, _components.WordInfoComponent)(word);
}

},{"../components":"fGXnV","../globalVariables":"irTVF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fGXnV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WordComponent", ()=>(0, _wordComponentDefault.default));
parcelHelpers.export(exports, "FilterComponent", ()=>(0, _filterComponentDefault.default));
parcelHelpers.export(exports, "WordInfoComponent", ()=>(0, _wordInfoComponentDefault.default));
var _wordComponent = require("./WordComponent");
var _wordComponentDefault = parcelHelpers.interopDefault(_wordComponent);
var _filterComponent = require("./FilterComponent");
var _filterComponentDefault = parcelHelpers.interopDefault(_filterComponent);
var _wordInfoComponent = require("./WordInfoComponent");
var _wordInfoComponentDefault = parcelHelpers.interopDefault(_wordInfoComponent);

},{"./WordComponent":"469m0","./FilterComponent":"fm2wn","./WordInfoComponent":"j5T7C","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"469m0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>WordComponent);
var _globalVariables = require("../globalVariables");
function WordComponent(word, index = 0, callback = ()=>{}) {
    // HOT FIX
    if (!word) {
        const div = document.createElement("div");
        return div;
    }
    const { id, type, expression } = word;
    // <button class="word-button" data-id="1"></button>
    const wordButton = document.createElement("button");
    wordButton.classList.add("word-button");
    wordButton.classList.add("app-button");
    wordButton.dataset.id = id;
    // <span class="index">1</span>
    const indexSpan = document.createElement("span");
    indexSpan.classList.add("index");
    indexSpan.innerText = index;
    // <span class="expression">to feel free</span>
    const wordExpressionText = document.createElement("span");
    wordExpressionText.classList.add("expression");
    wordExpressionText.innerText = expression;
    // <span class="type verb phrase">verb_phrase</span>
    const wordType = document.createElement("span");
    wordType.classList.add("type");
    wordType.classList.add(type);
    wordType.innerText = type;
    wordButton.appendChild(indexSpan);
    wordButton.appendChild(wordExpressionText);
    // <span class="favorite">⭐</span>
    const isFavorite = (0, _globalVariables.vars).wordsInstance.getById(id).favorite;
    if (isFavorite) {
        const favSpan = document.createElement("span");
        favSpan.classList.add("favorite");
        favSpan.innerText = "\u2B50";
        wordButton.appendChild(favSpan);
    }
    wordButton.appendChild(wordType);
    callback(wordButton);
    return wordButton;
}

},{"../globalVariables":"irTVF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fm2wn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>FilterComponent);
let c = 0;
function FilterComponent(filters, callback = ()=>{}) {
    // <div class="sub-container"></div>
    const container = document.createElement("div");
    container.classList.add("sub-container");
    // <button>Open Filers</button>
    const filtersOpenCloseButton = document.createElement("button");
    filtersOpenCloseButton.classList.add("filter-open-close-button");
    filtersOpenCloseButton.innerHTML = `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      fill="var(--color-2)"
      height="15px"
      width="15px"
      version="1.1"
      id="Layer_1"
      viewBox="0 0 330 330"
      xml:space="preserve"
    >
      <path
        id="XMLID_224_"
        d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394  l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393  C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"
      />
    </svg>Filters`;
    // <div class="filter-list-des-box"></div>
    const filterListDesBox = document.createElement("div");
    filterListDesBox.classList.add("filter-list-des-box");
    filterListDesBox.classList.add("hidden");
    // <div></div>
    const decor_div = document.createElement("div");
    decor_div.classList.add("sub-container");
    // <ul class="app-list"></ul>
    const ul = document.createElement("ul");
    ul.classList.add("app-list");
    ul.classList.add("flex-container");
    ul.classList.add("filter-list");
    for(const filterKey in filters){
        // <li></li>
        const li = document.createElement("li");
        const id = filterKey + c;
        // <label for="noun">Noun </label>
        const label = document.createElement("label");
        label.classList.add(filterKey);
        label.setAttribute("for", id);
        label.innerText += filters[filterKey].expression + " ";
        // <input type="checkbox" checked id="noun" name="noun">
        const input = document.createElement("input");
        input.type = "checkbox";
        input.checked = true;
        input.id = id;
        input.name = filterKey;
        // <li><label for="noun">Noun <input type="checkbox" checked id="noun" name="noun"></label></li>
        li.appendChild(input);
        li.appendChild(label);
        // <ul class="app-list"><li>...</li><li>...</li>...</ul>
        ul.appendChild(li);
    }
    // <button class="app-button">Toggle All</button>
    const button = document.createElement("button");
    button.classList.add("app-button");
    button.innerText = "Toggle All";
    const inputs = ul.querySelectorAll("input[type='checkbox']");
    inputs.forEach((filterCheck)=>{
        const type = filterCheck.name;
        filters[type].used = filterCheck.checked;
        filterCheck.addEventListener("change", (event)=>{
            const type = event.target.name;
            filters[type].used = event.target.checked;
            callback();
        });
    });
    let toggle = true;
    button.addEventListener("click", ()=>{
        inputs.forEach((filterCheck)=>{
            const type = filterCheck.name;
            filters[type].used = !toggle;
            filterCheck.checked = !toggle;
        });
        toggle = !toggle;
        callback();
    });
    filtersOpenCloseButton.addEventListener("click", ()=>{
        filterListDesBox.classList.toggle("hidden");
        filtersOpenCloseButton.classList.toggle("active");
    });
    // <div class="sub-container"><button>Open Filers</button></div>
    container.appendChild(filtersOpenCloseButton);
    // <div class="sub-container"><button>Open Filers</button></div>
    container.appendChild(filterListDesBox);
    // <div class="sub-container">...<ul class="app-list">...</ul></div>
    decor_div.appendChild(ul);
    // <div class="sub-container"><ul class="app-list">...</ul><button class="app-button">Toggle All</button></div>
    decor_div.appendChild(button);
    filterListDesBox.appendChild(decor_div);
    c++;
    return container;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"j5T7C":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>WordInfoComponent);
function WordInfoComponent({ id, expression, type, translation, description }) {
    return `
        <h2 class="modal-title">
          <span class="modal-word">${expression}</span>
          <span class="modal-info"><span class="${type} type">${type}</span> <sup>${id}</sup></span>
        </h2>
        <hr />
        <div style="font-size: 1.1rem;">
          <p style="margin-bottom: 10px;">${translation}</p>
          <p>${description}</p=>
        </div>
        <p style="margin-top: 20px;" class="modal-gen-text"></p>
        <button style="margin-top: 20px;" class="app-button modal-button-ai-gen">Give me examples</button>`;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8Uc4U":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>throttle);
function throttle(fn, delay) {
    let lastTime = 0;
    return function(...args) {
        let now = Date.now();
        if (now - lastTime >= delay) {
            fn.apply(this, args);
            lastTime = now;
        }
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"2juJg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>parseWords);
function parseWords(words_array, del = "|") {
    let parsed_words_array = [];
    for (const str of words_array){
        const splitted_str = str.trim().split(del).map((e)=>e.trim());
        const id = splitted_str[0];
        const expression = splitted_str[1];
        const translation = splitted_str[2];
        const type = splitted_str[3];
        const type_expression = splitted_str[4];
        const description = splitted_str[5];
        if (!id) throw Error(`ID = ${id} is not defined on ${str}`);
        if (!expression) throw Error(`Expression = ${expression} is not defined on ${str}`);
        if (!translation) throw Error(`Translation = ${translation} is not defined on ${str}`);
        if (!type) throw Error(`Type = ${type} is not defined on ${str}`);
        if (!type_expression) throw Error(`Type expression = ${type_expression} is not defined on ${str}`);
        if (!description) throw Error(`Description = ${description} is not defined on ${str}`);
        parsed_words_array.push({
            id,
            expression,
            translation,
            type,
            type_expression,
            description
        });
    }
    return parsed_words_array;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"igAVF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "renderFilteredWords", ()=>renderFilteredWords);
var _globalVariablesJs = require("../globalVariables.js");
var _wordComponentJs = require("../components/WordComponent.js");
var _wordComponentJsDefault = parcelHelpers.interopDefault(_wordComponentJs);
function getResembledWords(searchTerm) {
    const partsArray = searchTerm.split(",");
    let filteredWords = [
        ...new Set(partsArray.map((part)=>{
            const wordsByPart = (0, _globalVariablesJs.vars).wordsInstance.getWordsByPart(part.trimLeft());
            const typedWords = (0, _globalVariablesJs.vars).wordsInstance.getWordsByTypes(wordsByPart, ...Object.keys((0, _globalVariablesJs.vars).filters.dictionary).map((key)=>(0, _globalVariablesJs.vars).filters.dictionary[key].used && `${key}`));
            let favFiltered = typedWords.length !== 0 ? typedWords : (0, _globalVariablesJs.vars).wordsInstance.getFavorites();
            if (!(0, _globalVariablesJs.vars).filters.dictionary.favorite) favFiltered = favFiltered.filter(({ favorite })=>!favorite);
            return favFiltered;
        }).flat())
    ];
    return filteredWords;
}
function renderFilteredWords(searchTerm = "") {
    const wordsByPart = getResembledWords(searchTerm);
    const typedWords = (0, _globalVariablesJs.vars).wordsInstance.getWordsByTypes(wordsByPart, ...Object.keys((0, _globalVariablesJs.vars).filters.dictionary).map((key)=>(0, _globalVariablesJs.vars).filters.dictionary[key].used && `${key}`));
    let favFiltered = typedWords.length !== 0 ? typedWords : (0, _globalVariablesJs.vars).wordsInstance.getFavorites();
    if (!(0, _globalVariablesJs.vars).filters.dictionary.favorite) favFiltered = favFiltered.filter(({ favorite })=>!favorite);
    const sortedWords = (0, _globalVariablesJs.vars).wordsInstance.getSorted(favFiltered);
    (0, _globalVariablesJs.elements).dictionaryListElement.innerHTML = "";
    const lis = sortedWords.map((word, index)=>{
        const li = document.createElement("li");
        li.appendChild((0, _wordComponentJsDefault.default)(word, index + 1));
        return li;
    });
    lis.forEach((li)=>(0, _globalVariablesJs.elements).dictionaryListElement.appendChild(li));
    (0, _globalVariablesJs.elements).wordsCountEl.innerHTML = sortedWords.length;
}

},{"../globalVariables.js":"irTVF","../components/WordComponent.js":"469m0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"83lAT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wordsExamplesPrompt", ()=>wordsExamplesPrompt);
parcelHelpers.export(exports, "aiWritingReviewPrompt", ()=>aiWritingReviewPrompt);
const wordsExamplesPrompt = (expression, type, lang)=>`
You are a language teacher of ${lang}. You have to give examples of the word "${expression}" as ${type} in different natural contexts.
Give me 5 sentences using the word "${expression}" in different contexts. Tell them without greeting and formatting. An html list. Just straight like this:
<ul class="app-list">
    <li>1. First example</li>
    <li>2. Second example</li>
    <li>3. Third example</li>
</ul>
`;
const aiWritingReviewPrompt = (text, lang)=>`
You are a language teacher of ${lang}. You have to review the essay and give me feedback in ${lang}.
The essay is: "${text}".Tell them without greeting and formatting. 
Just straight like this but write there everything in ${lang}: 
<p>Rate: from 0 to 10</p>
<p>Level of ${lang}: from A1 to C2</p>
<p>Review: your review about text</p>
<p>Mistakes: write about my mistakes if such exist</p>
<p>What to improve: what should i improve not to make such mistakes next time.</p>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"6IRk8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>setEvents);
var _globalVariablesJs = require("../globalVariables.js");
// Modules import
var _utils = require("../utils");
var _main = require("../main");
var _initVarsJs = require("./initVars.js");
var _initVarsJsDefault = parcelHelpers.interopDefault(_initVarsJs);
function setEvents() {
    // ========== Button which closes modal window ==========
    (0, _globalVariablesJs.elements).closeModalBtn.addEventListener("click", closeWordModal.bind(null, null, (0, _globalVariablesJs.elements).modal, ()=>(0, _utils.renderFilteredWords).bind((0, _globalVariablesJs.elements).searchInput.value)));
    // ========== Button which adds word to favorite list ==========
    (0, _globalVariablesJs.elements).modalAddBtn.addEventListener("click", addWordToFavorite);
    // ========== Input which searches for words ==========
    (0, _globalVariablesJs.elements).searchInput.addEventListener("input", (0, _utils.throttle)(searchWords, 100));
    // ========== Form train writing text ==========
    (0, _globalVariablesJs.elements).trainWritingTextForm.addEventListener("submit", getAITextReview);
    // ========== Global clicking on word component to render modal window of it ==========
    window.addEventListener("click", handleGlobalViewportClicking);
    // ========== Feature changing languages ==========
    (0, _globalVariablesJs.elements).langSwitchers.forEach((radioLanguage)=>radioLanguage.addEventListener("change", changeLanguage));
    // ========== Renders numbers of words typed ==========
    (0, _globalVariablesJs.elements).trainWritingTextTextArea.addEventListener("input", countWordsOnTyping);
}
function closeWordModal(event, modalElement, callback = ()=>{}) {
    modalElement.classList.remove("active");
    callback(event);
}
function addWordToFavorite() {
    const id = (0, _globalVariablesJs.elements).modalAddBtn.dataset.wordId;
    const isFavoriteWord = (0, _globalVariablesJs.vars).wordsInstance.getById(id).favorite;
    if (!isFavoriteWord) {
        (0, _globalVariablesJs.vars).wordsInstance.setFavoriteById(id, true);
        (0, _globalVariablesJs.vars).storage.setItem([
            ...(0, _globalVariablesJs.vars).storage.getItem() || [],
            id
        ]);
        (0, _globalVariablesJs.elements).modalAddBtn.innerHTML = "Remove from Favorite";
    } else {
        (0, _globalVariablesJs.vars).wordsInstance.setFavoriteById(id, false);
        (0, _globalVariablesJs.vars).storage.setItem((0, _globalVariablesJs.vars).storage.getItem().filter(({ fId })=>id === fId));
        (0, _globalVariablesJs.elements).modalAddBtn.innerHTML = "Add to Favorite";
    }
    (0, _utils.renderFilteredWords)();
}
function searchWords(event) {
    const searchTerm = event.target.value;
    (0, _utils.renderFilteredWords)(searchTerm);
}
function getAITextReview(event) {
    event.preventDefault();
    const text = (0, _globalVariablesJs.elements).trainWritingTextForm.train_writing_text_textarea.value;
    const prompt = (0, _utils.aiWritingReviewPrompt)(text, (0, _globalVariablesJs.vars).langs[(0, _globalVariablesJs.vars).lang]);
    (0, _globalVariablesJs.elements).trainWritingTextAiReview.innerHTML = "Loading...";
    (0, _globalVariablesJs.elements).trainWritingTextForm.submit.disabled = true;
    askAI(prompt).then((response)=>{
        (0, _globalVariablesJs.elements).trainWritingTextAiReview.innerHTML = response.message.content;
        (0, _globalVariablesJs.elements).trainWritingTextForm.submit.disabled = false;
    });
}
function countWordsOnTyping() {
    (0, _globalVariablesJs.elements).trainWritingTextTotalWords.innerText = (0, _globalVariablesJs.elements).trainWritingTextTextArea.value.trim().split(" ").length;
}
function changeLanguage() {
    if (this.checked) {
        let lang = this.dataset.lang;
        (0, _initVarsJsDefault.default)(`favorite${lang[0].toUpperCase() + lang.split("").splice(1).join("")}Words`, lang);
        (0, _main.main)();
    }
}
function handleGlobalViewportClicking(event) {
    if (event.target.closest(".word-button")) {
        const id = event.target.closest(".word-button").dataset.id;
        const word = (0, _globalVariablesJs.vars).wordsInstance.getById(id);
        (0, _utils.openWordModal)(word);
        const modalButtonAiGen = document.querySelector(".modal-button-ai-gen");
        const modalGenTextEl = document.querySelector(".modal-gen-text");
        modalButtonAiGen.addEventListener("click", ()=>{
            const { expression, type } = word;
            const prompt = (0, _utils.wordsExamplesPrompt)(expression, type, (0, _globalVariablesJs.vars).langs[(0, _globalVariablesJs.vars).lang]);
            modalGenTextEl.innerHTML = "Loading...";
            modalButtonAiGen.disabled = true;
            askAI(prompt).then((response)=>{
                modalGenTextEl.innerHTML = response.message.content;
                modalButtonAiGen.disabled = false;
            });
        });
    } else if (event.target.closest(".link-button")) {
        const btn = event.target.closest(".link-button");
        (0, _globalVariablesJs.elements).allLinkButtons.forEach((e)=>e.classList.remove("active"));
        btn.classList.add("active");
    }
}
function askAI(prompt) {
    return puter.ai.chat(prompt);
}

},{"../globalVariables.js":"irTVF","../utils":"9UsVm","../main":"lhpGb","./initVars.js":"lo5T9","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lhpGb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "main", ()=>main);
var _globalVariablesJs = require("./globalVariables.js");
var _indexJs = require("./programs/index.js");
var _indexJs1 = require("./components/index.js");
var _filteredWordsJs = require("./utils/filteredWords.js");
function main() {
    // === rendering filters ===
    (0, _globalVariablesJs.elements).dictionaryFilters.innerHTML = "";
    (0, _globalVariablesJs.elements).trainWordsFiltersElement.innerHTML = "";
    (0, _globalVariablesJs.elements).dictionaryFilters.appendChild((0, _indexJs1.FilterComponent)((0, _globalVariablesJs.vars).filters.dictionary, ()=>(0, _filteredWordsJs.renderFilteredWords)((0, _globalVariablesJs.elements).searchInput.value)));
    (0, _globalVariablesJs.elements).trainWordsFiltersElement.appendChild((0, _indexJs1.FilterComponent)((0, _globalVariablesJs.vars).filters.trainWords, ()=>(0, _indexJs.initTrainWords)()));
    // === Render dictionary && Render words amount === important so filter is initiated
    (0, _filteredWordsJs.renderFilteredWords)();
    // === Render practices ===
    (0, _indexJs.TrainWords)();
}

},{"./globalVariables.js":"irTVF","./programs/index.js":"7TBPS","./components/index.js":"fGXnV","./utils/filteredWords.js":"igAVF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7TBPS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _trainWords = require("./TrainWords");
parcelHelpers.exportAll(_trainWords, exports);

},{"./TrainWords":"kClFL","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kClFL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTrainWords", ()=>initTrainWords);
parcelHelpers.export(exports, "getNextWord", ()=>getNextWord);
parcelHelpers.export(exports, "TrainWords", ()=>TrainWords);
var _utils = require("../utils");
var _globalVariables = require("../globalVariables");
var _components = require("../components");
let filteredWords = [];
let currentWordIndex;
let inputValue, currentWord;
function foo(word) {
    (0, _globalVariables.elements).trainWordRandomWordElement.innerHTML = "";
    (0, _globalVariables.elements).trainWordRandomWordElement.appendChild((0, _components.WordComponent)(word));
}
function initTrainWords() {
    const typedWords = (0, _globalVariables.vars).wordsInstance.getWordsByTypes((0, _globalVariables.vars).wordsInstance.d, ...Object.keys((0, _globalVariables.vars).filters.trainWords).map((key)=>(0, _globalVariables.vars).filters.trainWords[key] && `${key}`));
    filteredWords = typedWords.length !== 0 ? typedWords : (0, _globalVariables.vars).wordsInstance.getFavorites();
    if (!(0, _globalVariables.vars).filters.dictionary.favorite) filteredWords = filteredWords.filter(({ favorite })=>!favorite);
    currentWordIndex = 0;
    if (filteredWords.length > 0) {
        filteredWords.sort(()=>0.5 - Math.random());
        currentWord = filteredWords[currentWordIndex].translation.toLowerCase();
        (0, _globalVariables.elements).trainWordAllWordsElement.innerHTML = filteredWords.length;
        (0, _globalVariables.elements).trainWordCurrentIndexElement.innerHTML = currentWordIndex + 1;
        foo(filteredWords[currentWordIndex]);
    } else {
        (0, _globalVariables.elements).trainWordAllWordsElement.innerHTML = 0;
        (0, _globalVariables.elements).trainWordCurrentIndexElement.innerHTML = 0;
        (0, _globalVariables.elements).trainWordRandomWordElement.innerHTML = "No words found";
    }
}
function getNextWord() {
    currentWordIndex = (currentWordIndex + 1) % filteredWords.length;
    (0, _globalVariables.elements).trainWordCurrentIndexElement.innerHTML = currentWordIndex + 1;
    return filteredWords[currentWordIndex];
}
function TrainWords() {
    const trainWordForm = document.querySelector(".train-word-form");
    const trainWordInput = document.querySelector(".train-word-input");
    initTrainWords();
    trainWordInput.addEventListener("input", (0, _utils.throttle)(()=>{
        inputValue = trainWordInput.value.trim().toLowerCase();
        if (currentWord === inputValue) trainWordInput.style.border = "2px solid green";
        else trainWordInput.style.border = "2px solid red";
    }, 50));
    trainWordForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        if (inputValue === currentWord) {
            foo(getNextWord());
            trainWordInput.style.border = "2px solid";
            trainWordInput.value = "";
            currentWord = filteredWords[currentWordIndex].translation.toLowerCase();
        }
    });
}

},{"../utils":"9UsVm","../globalVariables":"irTVF","../components":"fGXnV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["6DHTQ","6kb64"], "6kb64", "parcelRequire94c2", {})

//# sourceMappingURL=language-app.6528c13b.js.map
