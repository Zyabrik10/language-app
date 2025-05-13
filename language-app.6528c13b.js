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
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "actionRightAfterPageIsLoad", ()=>actionRightAfterPageIsLoad);
var _aiJs = require("./ai.js");
var _aiJsDefault = parcelHelpers.interopDefault(_aiJs);
var _prompts = require("../prompts");
var _utils = require("./utils");
var _programs = require("./programs");
var _varsJs = require("./vars.js");
var _components = require("./components");
const { wordsInstance, storage, filters, trainWordsFilters } = (0, _varsJs.vars);
const { wordsCountEl, searchInput, closeModalBtn, modalAddBtn, dictionaryFilters, trainWordsFiltersElement, translatorForm, translatorResponse } = (0, _varsJs.elements);
window.addEventListener("load", actionRightAfterPageIsLoad);
function actionRightAfterPageIsLoad() {
    // === init && rendering filters ===
    dictionaryFilters.appendChild((0, _components.FilterComponent)(filters, ()=>(0, _utils.renderFilteredWords)(searchInput.value)));
    trainWordsFiltersElement.appendChild((0, _components.FilterComponent)(trainWordsFilters, ()=>(0, _programs.initTrainWords)()));
    // === Log examples ===
    (0, _utils.logInfo)();
    // === Render words amount ===
    wordsCountEl.innerHTML = wordsInstance.getWordCount();
    // === Setup button which closes modal window ===
    closeModalBtn.addEventListener("click", ()=>{
        const modal = document.querySelector(".modal");
        modal.classList.remove("active");
        (0, _utils.renderFilteredWords)(searchInput.value);
    });
    // === Setup button which adds word to favorite list ===
    modalAddBtn.addEventListener("click", ()=>{
        const id = modalAddBtn.dataset.wordId;
        const favoriteWords = storage.getItem() || [];
        const isFavoriteWord = favoriteWords.some((wordId)=>wordId === id);
        if (!isFavoriteWord) {
            storage.setItem([
                ...favoriteWords,
                id
            ]);
            modalAddBtn.innerHTML = "Remove";
        } else {
            const filteredWords = favoriteWords.filter((wordId)=>wordId !== id);
            storage.setItem(filteredWords);
            modalAddBtn.innerHTML = "Add";
        }
    });
    // === Render dictionary === important so filter is initiated
    (0, _utils.renderFilteredWords)(searchInput.value);
    // ========== Setup input which searches for words ==========
    searchInput.addEventListener("input", (0, _utils.throttle)((event)=>{
        const searchTerm = event.target.value;
        (0, _utils.renderFilteredWords)(searchTerm);
    }, 100));
    // === Render practices ===
    (0, _programs.TrainWords)();
    (0, _programs.TrainGrammar)();
    // === Render AI Topic Description ===
    const generateTopicButton = document.querySelector(".generate-topic-button");
    const aiTopicDescription = document.querySelector(".ai-topic-description");
    generateTopicButton.addEventListener("click", ()=>{
        aiTopicDescription.innerHTML = "Loading...";
        generateTopicButton.disabled = true;
        const prompt = (0, _prompts.aiTopicDescriptionPrompt)();
        (0, _aiJsDefault.default)(prompt).then((message)=>{
            aiTopicDescription.innerHTML = message;
            generateTopicButton.disabled = false;
        });
    });
    // === Setup form train writing text ===
    const trainWritingTextForm = document.querySelector(".train-writing-text-form");
    const trainWritingTextAiReview = document.querySelector(".train-writing-text-ai-review");
    trainWritingTextForm.addEventListener("submit", (event)=>{
        event.preventDefault();
        const text = trainWritingTextForm.train_writing_text_textarea.value;
        const prompt = (0, _prompts.aiWritingReviewPrompt)(text);
        trainWritingTextAiReview.innerHTML = "Loading...";
        trainWritingTextForm.submit.disabled = true;
        (0, _aiJsDefault.default)(prompt).then((message)=>{
            trainWritingTextAiReview.innerHTML = message;
            trainWritingTextForm.submit.disabled = false;
        });
    });
    window.addEventListener("click", (event)=>{
        if (!event.target.classList.contains("word-expression")) return;
        const id = event.target.dataset.id;
        const word = wordsInstance.getWordById(id);
        (0, _utils.openWordModal)(word);
        const modalButtonAiGen = document.querySelector(".modal-button-ai-gen");
        const modalGenTextEl = document.querySelector(".modal-gen-text");
        modalButtonAiGen.addEventListener("click", ()=>{
            const { expression } = word;
            const prompt = (0, _prompts.wordsExamplesPrompt)(expression);
            modalGenTextEl.innerHTML = "Loading...";
            modalButtonAiGen.disabled = true;
            (0, _aiJsDefault.default)(prompt).then((message)=>{
                modalGenTextEl.innerHTML = message;
                modalButtonAiGen.disabled = false;
            });
        });
    });
    translatorForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        translatorForm.button.disabled = true;
        const words = translatorForm.input.value.trim();
        const prompt = (0, _prompts.aiTranslatorPrompt)(words, wordsInstance.getWordCount());
        (0, _aiJsDefault.default)(prompt).then((message)=>{
            translatorForm.button.disabled = false;
            translatorResponse.innerHTML = message;
        });
    });
}

},{"./ai.js":"jXISu","../prompts":"lW7A1","./utils":"9UsVm","./programs":"7TBPS","./vars.js":"cMx9g","./components":"fGXnV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"jXISu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>askAI);
function askAI(prompt) {
    return puter.ai.chat(prompt).then((response)=>response.message.content);
}

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

},{}],"lW7A1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "wordsExamplesPrompt", ()=>wordsExamplesPrompt);
parcelHelpers.export(exports, "aiTranslatorPrompt", ()=>aiTranslatorPrompt);
parcelHelpers.export(exports, "aiTopicDescriptionPrompt", ()=>aiTopicDescriptionPrompt);
parcelHelpers.export(exports, "aiWritingReviewPrompt", ()=>aiWritingReviewPrompt);
parcelHelpers.export(exports, "aiTrainingGrammarPrompt", ()=>aiTrainingGrammarPrompt);
const wordsExamplesPrompt = (expression, type)=>`
You are a language teacher. You have to give examples of the word "${expression}" as ${type} in different contexts.
Give me 5 sentences using the word "${expression}" in different contexts. Tell them without greeting and formatting. Just straight like this:
<ul>
    <li>1. First example</li>
    <li>2. Second example</li>
    <li>3. Third example</li>
</ul>
`;
const aiTranslatorPrompt = (words, id)=>`
You are a language teacher.
Translate me those words: ${words}.
Tell them without greeting and formatting. Just straight like this:
<ul>
  <li>
    <p>Word: Word1 with 'to' for verb, a or an for noun and anything else important for any other types</p>
    <p>Type: its type (like verb, noun, phrasal verb, conjunction, phrase, noun-phrase, verb-phrase, adverb and so on, that is not a whole list of types, you need to identify it)</p>
    <p>Translation: its translation to ukrainian</p>
    <p>Description: its description in ukrainian</p>
    <p>Where and when to use: its "Where and when to use"</p>
    <pre style="overflow: auto;">{
  "id": Start identification from ${id + 1},
  "expression": word1,
  "type": its type,
  "translation": its translation to ukrainian,
  "description": its description
}</pre>
  </li>
</ul>
`;
const aiTopicDescriptionPrompt = ()=>`
You are a language teacher. You have to give me a random topic to write about. For example: "A case in the Hotel".
A topic about for example: "technology, education, event".
Tell them without greeting and formatting. Just straight like this:
<p>Topic: Name of the topic</p>
<p>Description: Your topic description</p>
<p>Hints: Hints about how to start, what to write about, what words/phrases to use, how to end and so on</p>
`;
const aiWritingReviewPrompt = (text)=>`
You are a teacher. You have to review the essay and give me feedback.
The essay is: "${text}". 
Give me a review of the text. 
Tell them without greeting and formatting. 
Just straight like this: 
<p>Rate: from 0 to 10</p>
<p>Level of English: from A1 to C2</p>
<p>Review: your review about text</p>
<p>Mistakes: write about my mistakes if such exist</p>
<p>What to improve: what should i improve not to make such mistakes next time.</p>
`;
const aiTrainingGrammarPrompt = (text)=>`
You are a teacher. You have to give me a hard test with multiples answers up to 30 questions and in each up to 5 options to answer.
Generate me a hard test on this topic: "${text}".
Give me a detailed explanation of this topic. 
Give me tips how to properly use the grammar rule.
Tell them without greeting and formatting.
Just straight like this: 
<p>Here you put your detailed explanation of this topic</p>
<p>Here you put your tips how to properly use the grammar rule</p>
<ul class="sub-container test-list">
  <li class="sub-container">
    <p>Question 1</p>
    <ul class="sub-container">
      <li>Answer 1</li>
      <li>Answer 2</li>
      <li>Answer 3</li>
    </ul>
  </li>
  <li class="sub-container">
    <p>Question 2</p>
    <ul class="sub-container">
      <li>Answer 1</li>
      <li>Answer 2</li>
      <li>Answer 3</li>
    </ul>
  </li>
</ul>
`;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"9UsVm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "logInfo", ()=>(0, _logInfoDefault.default));
parcelHelpers.export(exports, "openWordModal", ()=>(0, _openWordModalDefault.default));
parcelHelpers.export(exports, "throttle", ()=>(0, _throttleDefault.default));
var _logInfo = require("./logInfo");
var _logInfoDefault = parcelHelpers.interopDefault(_logInfo);
var _openWordModal = require("./openWordModal");
var _openWordModalDefault = parcelHelpers.interopDefault(_openWordModal);
var _throttle = require("./throttle");
var _throttleDefault = parcelHelpers.interopDefault(_throttle);
var _filteredWords = require("./filteredWords");
parcelHelpers.exportAll(_filteredWords, exports);

},{"./logInfo":"kV0wT","./openWordModal":"5SNUE","./throttle":"8Uc4U","./filteredWords":"igAVF","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kV0wT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>logInfo);
var _vars = require("../vars");
function logInfo() {
    const { wordsInstance } = (0, _vars.vars);
    const randomWord = wordsInstance.getRandomWord();
    console.log(`Random Word: ${randomWord.expression}`);
    console.log(`Total Words: ${wordsInstance.getWordCount()}`);
    wordsInstance.sortWords();
    console.log(`Sorted Words: ${wordsInstance.getWordsByType().map((word)=>word.expression).join(", ")}`);
    console.log(`Verbs: ${wordsInstance.getWordsByType("verb").map((word)=>word.expression).join(", ")}`);
    console.log(`Nouns: ${wordsInstance.getWordsByType("noun").map((word)=>word.expression).join(", ")}`);
}

},{"../vars":"cMx9g","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"cMx9g":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "vars", ()=>vars);
parcelHelpers.export(exports, "elements", ()=>elements);
var _words = require("./classes/Words");
var _wordsDefault = parcelHelpers.interopDefault(_words);
var _wordsJson = require("../words.json");
var _wordsJsonDefault = parcelHelpers.interopDefault(_wordsJson);
var _localStorage = require("./classes/LocalStorage");
var _localStorageDefault = parcelHelpers.interopDefault(_localStorage);
const vars = {
    wordsInstance: new (0, _wordsDefault.default)((0, _wordsJsonDefault.default)),
    storage: new (0, _localStorageDefault.default)("favoriteWords"),
    filters: {},
    trainWordsFilters: {}
};
const elements = {
    dictionaryListElement: document.querySelector(".dictionary-list"),
    wordsCountEl: document.querySelector(".words-count"),
    searchInput: document.querySelector(".dictionary-input"),
    closeModalBtn: document.querySelector(".modal-close-btn"),
    modalAddBtn: document.querySelector(".modal-add-btn"),
    modal: document.querySelector(".modal"),
    modalContent: document.querySelector(".modal-content"),
    trainWordAllWordsElement: document.querySelector(".train-word-allWords"),
    trainWordCurrentIndexElement: document.querySelector(".train-word-currentIndex"),
    trainWordRandomWordElement: document.querySelector(".train-word-random-word"),
    dictionaryFilters: document.querySelector(".dictionary-filters"),
    trainWordsFiltersElement: document.querySelector(".train-words-filters"),
    translatorResponse: document.querySelector(".translator-response"),
    translatorForm: document.querySelector(".translator-form")
};

},{"./classes/Words":"IzVaJ","../words.json":"dFhDI","./classes/LocalStorage":"lVDZ7","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"IzVaJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
class Words {
    constructor(words = []){
        this.words = words;
    }
    getRandomWord() {
        const randomIndex = Math.floor(Math.random() * this.words.length);
        return this.words[randomIndex];
    }
    getWordById(id) {
        return this.words.find((word)=>word.id === id);
    }
    getWordsByType(type) {
        if (!type) return this.words;
        return this.words.filter((word)=>word.type === type);
    }
    getWordCount() {
        return this.words.length;
    }
    sortWords(words = this.words) {
        words.sort((a, b)=>a.expression.localeCompare(b.expression));
    }
    getWordsByContains(substring, types) {
        let wordsWithSpecificTypes = [];
        if (Object.keys(types).length > 0) {
            for(const type in types)if (types[type]) wordsWithSpecificTypes = [
                ...wordsWithSpecificTypes,
                ...this.getWordsByType(type)
            ];
        } else wordsWithSpecificTypes = this.words;
        const result = wordsWithSpecificTypes.filter((word)=>word.expression.toLowerCase().includes(substring.toLowerCase()));
        this.sortWords(result);
        return result;
    }
    getWordsByTypes(types) {
        const words = [];
        for(let type in types)if (types[type]) words.push(...this.getWordsByType(type));
        return words;
    }
}
exports.default = Words;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"dFhDI":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse('[{"id":"0","expression":"a ballpark figure","type":"phrase","translation":"\u043E\u0440\u0456\u0454\u043D\u0442\u043E\u0432\u043D\u0430 \u0446\u0438\u0444\u0440\u0430","description":"\u041F\u0440\u0438\u0431\u043B\u0438\u0437\u043D\u0430 \u043E\u0446\u0456\u043D\u043A\u0430 \u043A\u0456\u043B\u044C\u043A\u043E\u0441\u0442\u0456 \u0430\u0431\u043E \u0441\u0443\u043C\u0438"},{"id":"1","expression":"a bit down","type":"phrase","translation":"\u0442\u0440\u043E\u0445\u0438 \u0441\u0443\u043C\u043D\u0438\u0439","description":"\u041F\u043E\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043D\u0435 \u0434\u0443\u0436\u0435 \u0434\u043E\u0431\u0440\u0435 \u0430\u0431\u043E \u0442\u0440\u043E\u0445\u0438 \u043F\u0440\u0438\u0433\u043D\u0456\u0447\u0435\u043D\u0438\u043C"},{"id":"2","expression":"a close-knit community","type":"noun_phrase","translation":"\u0417\u0433\u0443\u0440\u0442\u043E\u0432\u0430\u043D\u0430 \u0433\u0440\u043E\u043C\u0430\u0434\u0430","description":"\u0413\u0440\u0443\u043F\u0430 \u043B\u044E\u0434\u0435\u0439, \u044F\u043A\u0456 \u0442\u0456\u0441\u043D\u043E \u043F\u043E\u0432\'\u044F\u0437\u0430\u043D\u0456 \u043C\u0456\u0436 \u0441\u043E\u0431\u043E\u044E"},{"id":"3","expression":"a free spirit","type":"noun_phrase","translation":"\u0412\u0456\u043B\u044C\u043D\u0430 \u0434\u0443\u0448\u0430","description":"\u041B\u044E\u0434\u0438\u043D\u0430, \u044F\u043A\u0430 \u0436\u0438\u0432\u0435 \u043D\u0435\u0437\u0430\u043B\u0435\u0436\u043D\u043E \u0442\u0430 \u043D\u0435 \u0441\u043B\u0456\u0434\u0443\u0454 \u0437\u0432\u0438\u0447\u043D\u0438\u043C \u043D\u043E\u0440\u043C\u0430\u043C"},{"id":"4","expression":"a free-for-all","type":"noun","translation":"\u0411\u0435\u0437\u043B\u0430\u0434","description":"\u0421\u0438\u0442\u0443\u0430\u0446\u0456\u044F \u0431\u0435\u0437 \u043F\u0440\u0430\u0432\u0438\u043B \u0430\u0431\u043E \u043A\u043E\u043D\u0442\u0440\u043E\u043B\u044E"},{"id":"5","expression":"a gathering","type":"noun","translation":"\u0417\u0443\u0441\u0442\u0440\u0456\u0447","description":"\u041A\u043E\u043B\u0438 \u043B\u044E\u0434\u0438 \u0437\u0431\u0438\u0440\u0430\u044E\u0442\u044C\u0441\u044F \u0440\u0430\u0437\u043E\u043C"},{"id":"6","expression":"a helping hand","type":"noun_phrase","translation":"\u0414\u043E\u043F\u043E\u043C\u0456\u0436\u043D\u0430 \u0440\u0443\u043A\u0430","description":"\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0430 \u043A\u043E\u043C\u0443\u0441\u044C"},{"id":"7","expression":"a hostile","type":"noun","translation":"\u0412\u043E\u0440\u043E\u0436\u0438\u0439","description":"\u041B\u044E\u0434\u0438\u043D\u0430 \u0430\u0431\u043E \u0433\u0440\u0443\u043F\u0430, \u0449\u043E \u0432\u0438\u044F\u0432\u043B\u044F\u0454 \u0432\u043E\u0440\u043E\u0436\u0456\u0441\u0442\u044C"},{"id":"8","expression":"a long-standing immigrant community","type":"noun_phrase","translation":"\u0414\u0430\u0432\u043D\u044F \u0433\u0440\u043E\u043C\u0430\u0434\u0430 \u0456\u043C\u043C\u0456\u0433\u0440\u0430\u043D\u0442\u0456\u0432","description":"\u0421\u043F\u0456\u043B\u044C\u043D\u043E\u0442\u0430 \u0456\u043C\u043C\u0456\u0433\u0440\u0430\u043D\u0442\u0456\u0432, \u044F\u043A\u0430 \u0456\u0441\u043D\u0443\u0454 \u0442\u0440\u0438\u0432\u0430\u043B\u0438\u0439 \u0447\u0430\u0441"},{"id":"9","expression":"a play on words","type":"phrase","translation":"\u0433\u0440\u0430 \u0441\u043B\u0456\u0432","description":"\u0416\u0430\u0440\u0442, \u0437\u0430\u0441\u043D\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0430 \u043F\u043E\u0434\u0432\u0456\u0439\u043D\u043E\u043C\u0443 \u0437\u043D\u0430\u0447\u0435\u043D\u043D\u0456 \u0441\u043B\u0456\u0432"},{"id":"10","expression":"a reality check","type":"noun_phrase","translation":"\u041F\u0435\u0440\u0435\u0432\u0456\u0440\u043A\u0430 \u0440\u0435\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044E","description":"\u041C\u043E\u043C\u0435\u043D\u0442 \u0443\u0441\u0432\u0456\u0434\u043E\u043C\u043B\u0435\u043D\u043D\u044F \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0441\u0442\u0430\u043D\u0443 \u0440\u0435\u0447\u0435\u0439"},{"id":"11","expression":"a rich heritage","type":"noun_phrase","translation":"\u0411\u0430\u0433\u0430\u0442\u0430 \u0441\u043F\u0430\u0434\u0449\u0438\u043D\u0430","description":"\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u0456 \u0430\u0431\u043E \u0456\u0441\u0442\u043E\u0440\u0438\u0447\u043D\u0456 \u0446\u0456\u043D\u043D\u043E\u0441\u0442\u0456, \u0449\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u044C\u0441\u044F \u0437 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u044F \u0432 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u044F"},{"id":"12","expression":"a sure path","type":"noun_phrase","translation":"\u0412\u0456\u0440\u043D\u0438\u0439 \u0448\u043B\u044F\u0445","description":"\u0413\u0430\u0440\u0430\u043D\u0442\u043E\u0432\u0430\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431 \u0434\u043E\u0441\u044F\u0433\u043D\u0435\u043D\u043D\u044F \u0447\u043E\u0433\u043E\u0441\u044C"},{"id":"13","expression":"a tomb","type":"noun","translation":"\u0413\u0440\u043E\u0431\u043D\u0438\u0446\u044F","description":"\u041C\u0456\u0441\u0446\u0435 \u043F\u043E\u0445\u043E\u0432\u0430\u043D\u043D\u044F, \u0447\u0430\u0441\u0442\u043E \u043C\u043E\u043D\u0443\u043C\u0435\u043D\u0442\u0430\u043B\u044C\u043D\u0435"},{"id":"14","expression":"a win-win situation","type":"noun_phrase","translation":"\u0421\u0438\u0442\u0443\u0430\u0446\u0456\u044F \u0432\u0438\u0433\u0440\u0430\u0448-\u0432\u0438\u0433\u0440\u0430\u0448","description":"\u0421\u0438\u0442\u0443\u0430\u0446\u0456\u044F, \u0432\u0438\u0433\u0456\u0434\u043D\u0430 \u0434\u043B\u044F \u0432\u0441\u0456\u0445 \u0441\u0442\u043E\u0440\u0456\u043D"},{"id":"15","expression":"beyond doubt","type":"phrase","translation":"\u0431\u0435\u0437 \u0441\u0443\u043C\u043D\u0456\u0432\u0443","description":"\u0422\u043E\u0447\u043D\u043E, \u0431\u0435\u0437 \u0436\u043E\u0434\u043D\u0438\u0445 \u0441\u0443\u043C\u043D\u0456\u0432\u0456\u0432"},{"id":"16","expression":"beyond help","type":"phrase","translation":"\u043F\u043E\u0437\u0430 \u043C\u0435\u0436\u0430\u043C\u0438 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0438","description":"\u0421\u0442\u0430\u043D, \u043A\u043E\u043B\u0438 \u0432\u0436\u0435 \u043D\u0456\u0447\u043E\u0433\u043E \u043D\u0435 \u043C\u043E\u0436\u043D\u0430 \u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0434\u043B\u044F \u043F\u043E\u043B\u0456\u043F\u0448\u0435\u043D\u043D\u044F"},{"id":"17","expression":"beyond me","type":"phrase","translation":"\u043D\u0435 \u0434\u043B\u044F \u043C\u043E\u0433\u043E \u0440\u043E\u0437\u0443\u043C\u0456\u043D\u043D\u044F","description":"\u0429\u043E\u0441\u044C, \u0449\u043E \u044F \u043D\u0435 \u043C\u043E\u0436\u0443 \u0437\u0440\u043E\u0437\u0443\u043C\u0456\u0442\u0438"},{"id":"18","expression":"beyond one","type":"phrase","translation":"\u043F\u043E\u0437\u0430 \u0447\u0438\u0457\u043C\u043E\u0441\u044C \u0440\u043E\u0437\u0443\u043C\u0456\u043D\u043D\u044F\u043C","description":"\u041D\u0430\u0434\u0442\u043E \u0441\u043A\u043B\u0430\u0434\u043D\u043E \u0434\u043B\u044F \u0440\u043E\u0437\u0443\u043C\u0456\u043D\u043D\u044F"},{"id":"19","expression":"beyond recognition","type":"phrase","translation":"\u0434\u043E \u043D\u0435\u0432\u043F\u0456\u0437\u043D\u0430\u043D\u043D\u044F","description":"\u0414\u0443\u0436\u0435 \u0441\u0438\u043B\u044C\u043D\u043E \u0437\u043C\u0456\u043D\u0438\u0432\u0441\u044F"},{"id":"20","expression":"beyond the call of duty","type":"phrase","translation":"\u043F\u043E\u0437\u0430 \u043C\u0435\u0436\u0430\u043C\u0438 \u043E\u0431\u043E\u0432\'\u044F\u0437\u043A\u0456\u0432","description":"\u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u043E\u0447\u0456\u043A\u0443\u0454\u0442\u044C\u0441\u044F"},{"id":"21","expression":"beyond the joke","type":"phrase","translation":"\u0432\u0436\u0435 \u043D\u0435 \u0441\u043C\u0456\u0448\u043D\u043E","description":"\u0421\u0438\u0442\u0443\u0430\u0446\u0456\u044F, \u044F\u043A\u0430 \u043F\u0435\u0440\u0435\u0441\u0442\u0430\u043B\u0430 \u0431\u0443\u0442\u0438 \u0436\u0430\u0440\u0442\u0456\u0432\u043B\u0438\u0432\u043E\u044E"},{"id":"22","expression":"a bleak landscape","type":"noun_phrase","translation":"\u041F\u043E\u0445\u043C\u0443\u0440\u0438\u0439 \u043F\u0435\u0439\u0437\u0430\u0436","description":"\u041D\u0435\u043F\u0440\u0438\u0432\u0456\u0442\u043D\u0430, \u0431\u0435\u0437\u0440\u0430\u0434\u0456\u0441\u043D\u0430 \u043C\u0456\u0441\u0446\u0435\u0432\u0456\u0441\u0442\u044C"},{"id":"23","expression":"bone dry","type":"adjective_phrase","translation":"\u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u0441\u0443\u0445\u0438\u0439","description":"\u041F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u043F\u043E\u0437\u0431\u0430\u0432\u043B\u0435\u043D\u0438\u0439 \u0432\u043E\u043B\u043E\u0433\u0438"},{"id":"24","expression":"brand new","type":"adjective_phrase","translation":"\u0446\u0456\u043B\u043A\u043E\u043C \u043D\u043E\u0432\u0438\u0439","description":"\u0410\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E \u043D\u043E\u0432\u0438\u0439, \u044F\u043A\u0438\u0439 \u043D\u0435 \u0432\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0432\u0441\u044F"},{"id":"25","expression":"a cloudless sky","type":"noun_phrase","translation":"\u0411\u0435\u0437\u0445\u043C\u0430\u0440\u043D\u0435 \u043D\u0435\u0431\u043E","description":"\u041D\u0435\u0431\u043E \u0431\u0435\u0437 \u0436\u043E\u0434\u043D\u043E\u0457 \u0445\u043C\u0430\u0440\u0438\u043D\u043A\u0438"},{"id":"26","expression":"to come across as","type":"phrasal_verb","translation":"\u0441\u043F\u0440\u0438\u0439\u043C\u0430\u0442\u0438\u0441\u044F \u044F\u043A","description":"\u0412\u0438\u0433\u043B\u044F\u0434\u0430\u0442\u0438 \u043F\u0435\u0432\u043D\u0438\u043C \u0447\u0438\u043D\u043E\u043C \u0432 \u043E\u0447\u0430\u0445 \u0456\u043D\u0448\u0438\u0445"},{"id":"27","expression":"content","type":"adjective","translation":"\u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u0438\u0439","description":"\u0421\u0442\u0430\u043D \u0432\u043D\u0443\u0442\u0440\u0456\u0448\u043D\u044C\u043E\u0433\u043E \u0441\u043F\u043E\u043A\u043E\u044E \u0442\u0430 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u043D\u044F"},{"id":"28","expression":"cross","type":"adjective","translation":"\u0441\u0435\u0440\u0434\u0438\u0442\u0438\u0439","description":"\u041F\u043E\u0447\u0443\u0442\u0442\u044F \u043B\u0435\u0433\u043A\u043E\u0433\u043E \u0440\u043E\u0437\u0434\u0440\u0430\u0442\u0443\u0432\u0430\u043D\u043D\u044F"},{"id":"29","expression":"a crystal clear water","type":"noun_phrase","translation":"\u041A\u0440\u0438\u0448\u0442\u0430\u043B\u0435\u0432\u043E \u0447\u0438\u0441\u0442\u0430 \u0432\u043E\u0434\u0430","description":"\u0414\u0443\u0436\u0435 \u043F\u0440\u043E\u0437\u043E\u0440\u0430, \u0447\u0438\u0441\u0442\u0430 \u0432\u043E\u0434\u0430"},{"id":"30","expression":"culturally rich","type":"adjective_phrase","translation":"\u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u043E \u0431\u0430\u0433\u0430\u0442\u0438\u0439","description":"\u041C\u0430\u0454 \u0431\u0430\u0433\u0430\u0442\u0443 \u043A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u0443 \u0441\u043F\u0430\u0434\u0449\u0438\u043D\u0443"},{"id":"31","expression":"a deep-rooted values","type":"noun_phrase","translation":"\u0413\u043B\u0438\u0431\u043E\u043A\u043E \u0432\u043A\u043E\u0440\u0456\u043D\u0435\u043D\u0456 \u0446\u0456\u043D\u043D\u043E\u0441\u0442\u0456","description":"\u0426\u0456\u043D\u043D\u043E\u0441\u0442\u0456, \u0449\u043E \u043C\u0456\u0446\u043D\u043E \u0437\u0430\u043A\u0440\u0456\u043F\u0438\u043B\u0438\u0441\u044F"},{"id":"32","expression":"to deliberate","type":"verb","translation":"\u0434\u043E\u0432\u0433\u043E \u0442\u0430 \u0440\u0435\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0431\u043C\u0456\u0440\u043A\u043E\u0432\u0443\u0432\u0430\u0442\u0438","description":"\u0414\u043E\u0432\u0433\u043E \u0442\u0430 \u0440\u0435\u0442\u0435\u043B\u044C\u043D\u043E \u043E\u0431\u043C\u0456\u0440\u043A\u043E\u0432\u0443\u0432\u0430\u0442\u0438"},{"id":"33","expression":"despondent","type":"adjective","translation":"\u043F\u0440\u0438\u0433\u043D\u0456\u0447\u0435\u043D\u0438\u0439","description":"\u0412\u0442\u0440\u0430\u0442\u0438\u0432\u0448\u0438\u0439 \u043D\u0430\u0434\u0456\u044E, \u0443 \u0432\u0456\u0434\u0447\u0430\u0457"},{"id":"34","expression":"to doze","type":"verb","translation":"\u0434\u0440\u0456\u043C\u0430\u0442\u0438","description":"\u041B\u0435\u0433\u043A\u043E \u0441\u043F\u0430\u0442\u0438 \u0430\u0431\u043E \u0431\u0443\u0442\u0438 \u043D\u0430\u043F\u0456\u0432\u0441\u043E\u043D\u043D\u0438\u043C"},{"id":"35","expression":"ecstatic","type":"adjective","translation":"\u0443 \u0437\u0430\u0445\u0432\u0430\u0442\u0456","description":"\u0414\u0443\u0436\u0435 \u0449\u0430\u0441\u043B\u0438\u0432\u0438\u0439 \u0430\u0431\u043E \u0437\u0431\u0443\u0434\u0436\u0435\u043D\u0438\u0439"},{"id":"36","expression":"an emigrants","type":"noun","translation":"\u0415\u043C\u0456\u0433\u0440\u0430\u043D\u0442\u0438","description":"\u041B\u044E\u0434\u0438, \u044F\u043A\u0456 \u0432\u0438\u0457\u0445\u0430\u043B\u0438 \u0437\u0456 \u0441\u0432\u043E\u0454\u0457 \u043A\u0440\u0430\u0457\u043D\u0438"},{"id":"37","expression":"environmentally friendly","type":"adjective_phrase","translation":"\u0435\u043A\u043E\u043B\u043E\u0433\u0456\u0447\u043D\u043E \u0447\u0438\u0441\u0442\u0438\u0439","description":"\u0411\u0435\u0437\u043F\u0435\u0447\u043D\u0438\u0439 \u0434\u043B\u044F \u043D\u0430\u0432\u043A\u043E\u043B\u0438\u0448\u043D\u044C\u043E\u0433\u043E \u0441\u0435\u0440\u0435\u0434\u043E\u0432\u0438\u0449\u0430"},{"id":"38","expression":"ethnically diverse","type":"adjective_phrase","translation":"\u0435\u0442\u043D\u0456\u0447\u043D\u043E \u0440\u0456\u0437\u043D\u043E\u043C\u0430\u043D\u0456\u0442\u043D\u0438\u0439","description":"\u041C\u0456\u0441\u0442\u0438\u0442\u044C \u043F\u0440\u0435\u0434\u0441\u0442\u0430\u0432\u043D\u0438\u043A\u0456\u0432 \u0440\u0456\u0437\u043D\u0438\u0445 \u0435\u0442\u043D\u0456\u0447\u043D\u0438\u0445 \u0433\u0440\u0443\u043F"},{"id":"39","expression":"an extended family","type":"noun_phrase","translation":"\u0412\u0435\u043B\u0438\u043A\u0430 \u0441\u0456\u043C\'\u044F","description":"\u0421\u0456\u043C\'\u044F, \u0449\u043E \u0432\u043A\u043B\u044E\u0447\u0430\u0454 \u043A\u0456\u043B\u044C\u043A\u0430 \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u044C \u0430\u0431\u043E \u0440\u043E\u0434\u0438\u0447\u0456\u0432"},{"id":"40","expression":"fast asleep","type":"adjective_phrase","translation":"\u043C\u0456\u0446\u043D\u043E \u0441\u043F\u0438\u0442\u044C","description":"\u0414\u0443\u0436\u0435 \u0433\u043B\u0438\u0431\u043E\u043A\u0438\u0439 \u0441\u043E\u043D"},{"id":"41","expression":"feel free","type":"phrase","translation":"\u043F\u043E\u0447\u0443\u0432\u0430\u0439\u0442\u0435\u0441\u044F \u0432\u0456\u043B\u044C\u043D\u043E","description":"\u0414\u043E\u0437\u0432\u0456\u043B \u0440\u043E\u0431\u0438\u0442\u0438 \u0449\u043E\u0441\u044C \u0431\u0435\u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u044C"},{"id":"42","expression":"a first-generation migrants","type":"noun_phrase","translation":"\u041C\u0456\u0433\u0440\u0430\u043D\u0442\u0438 \u043F\u0435\u0440\u0448\u043E\u0433\u043E \u043F\u043E\u043A\u043E\u043B\u0456\u043D\u043D\u044F","description":"\u041B\u044E\u0434\u0438, \u044F\u043A\u0456 \u043F\u0435\u0440\u0448\u0438\u043C\u0438 \u043F\u0435\u0440\u0435\u0457\u0445\u0430\u043B\u0438 \u0432 \u0456\u043D\u0448\u0443 \u043A\u0440\u0430\u0457\u043D\u0443"},{"id":"43","expression":"a footage","type":"noun","translation":"\u041A\u0430\u0434\u0440\u0438","description":"\u0417\u0430\u043F\u0438\u0441\u0430\u043D\u0435 \u0432\u0456\u0434\u0435\u043E \u0430\u0431\u043E \u043A\u0456\u043D\u043E\u043C\u0430\u0442\u0435\u0440\u0456\u0430\u043B"},{"id":"44","expression":"freezing cold","type":"adjective_phrase","translation":"\u043C\u043E\u0440\u043E\u0437\u043D\u043E \u0445\u043E\u043B\u043E\u0434\u043D\u043E","description":"\u0414\u0443\u0436\u0435 \u043D\u0438\u0437\u044C\u043A\u0430 \u0442\u0435\u043C\u043F\u0435\u0440\u0430\u0442\u0443\u0440\u0430"},{"id":"45","expression":"a free hand","type":"noun_phrase","translation":"\u041F\u043E\u0432\u043D\u0430 \u0441\u0432\u043E\u0431\u043E\u0434\u0430 \u0434\u0456\u0439","description":"\u041C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0434\u0456\u044F\u0442\u0438 \u0431\u0435\u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u044C"},{"id":"46","expression":"geographically remote","type":"adjective_phrase","translation":"\u0433\u0435\u043E\u0433\u0440\u0430\u0444\u0456\u0447\u043D\u043E \u0432\u0456\u0434\u0434\u0430\u043B\u0435\u043D\u0438\u0439","description":"\u0417\u043D\u0430\u0445\u043E\u0434\u0438\u0442\u044C\u0441\u044F \u0434\u0430\u043B\u0435\u043A\u043E \u0432\u0456\u0434 \u0446\u0438\u0432\u0456\u043B\u0456\u0437\u0430\u0446\u0456\u0457"},{"id":"47","expression":"to get a move on","type":"phrasal_verb","translation":"\u043F\u043E\u0441\u043F\u0456\u0448\u0430\u0442\u0438","description":"\u041F\u043E\u0447\u0430\u0442\u0438 \u0440\u0443\u0445\u0430\u0442\u0438\u0441\u044F \u0448\u0432\u0438\u0434\u0448\u0435"},{"id":"48","expression":"to get off scot-free","type":"phrasal_verb","translation":"\u0443\u043D\u0438\u043A\u043D\u0443\u0442\u0438 \u043F\u043E\u043A\u0430\u0440\u0430\u043D\u043D\u044F","description":"\u041D\u0435 \u043F\u043E\u043D\u0435\u0441\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u043E\u0441\u0442\u0456 \u0437\u0430 \u043F\u0440\u043E\u0432\u0438\u043D\u0443"},{"id":"49","expression":"hot under the collar","type":"adjective_phrase","translation":"\u0440\u043E\u0437\u043B\u044E\u0447\u0435\u043D\u0438\u0439","description":"\u0414\u0443\u0436\u0435 \u0437\u043B\u0438\u0439 \u0430\u0431\u043E \u0440\u043E\u0437\u0434\u0440\u0430\u0442\u043E\u0432\u0430\u043D\u0438\u0439"},{"id":"50","expression":"an immigrants","type":"noun","translation":"\u0406\u043C\u043C\u0456\u0433\u0440\u0430\u043D\u0442\u0438","description":"\u041B\u044E\u0434\u0438, \u044F\u043A\u0456 \u043F\u0440\u0438\u0457\u0445\u0430\u043B\u0438 \u0436\u0438\u0442\u0438 \u0432 \u0456\u043D\u0448\u0443 \u043A\u0440\u0430\u0457\u043D\u0443"},{"id":"51","expression":"in a friendly way","type":"adverbial_phrase","translation":"\u043F\u043E-\u0434\u0440\u0443\u0436\u043D\u044C\u043E\u043C\u0443","description":"\u0414\u0440\u0443\u0436\u043D\u044F \u043C\u0430\u043D\u0435\u0440\u0430 \u043F\u043E\u0432\u0435\u0434\u0456\u043D\u043A\u0438"},{"id":"52","expression":"in the loop","type":"phrase","translation":"\u0432 \u043A\u0443\u0440\u0441\u0456 \u0441\u043F\u0440\u0430\u0432","description":"\u0411\u0443\u0442\u0438 \u0456\u043D\u0444\u043E\u0440\u043C\u043E\u0432\u0430\u043D\u0438\u043C \u043F\u0440\u043E \u043F\u043E\u0434\u0456\u0457"},{"id":"53","expression":"industrially advanced","type":"adjective_phrase","translation":"\u043F\u0440\u043E\u043C\u0438\u0441\u043B\u043E\u0432\u043E \u0440\u043E\u0437\u0432\u0438\u043D\u0435\u043D\u0438\u0439","description":"\u041C\u0430\u0454 \u0432\u0438\u0441\u043E\u043A\u043E\u0440\u043E\u0437\u0432\u0438\u043D\u0435\u043D\u0443 \u043F\u0440\u043E\u043C\u0438\u0441\u043B\u043E\u0432\u0456\u0441\u0442\u044C"},{"id":"54","expression":"an initiation","type":"noun","translation":"\u0406\u043D\u0456\u0446\u0456\u0430\u0446\u0456\u044F","description":"\u041F\u0440\u043E\u0446\u0435\u0441 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u0432 \u044F\u043A\u0443\u0441\u044C \u0434\u0456\u044F\u043B\u044C\u043D\u0456\u0441\u0442\u044C \u0447\u0438 \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u0430\u0446\u0456\u044E"},{"id":"55","expression":"internationally famous","type":"adjective_phrase","translation":"\u0432\u0456\u0434\u043E\u043C\u0438\u0439 \u043D\u0430 \u043C\u0456\u0436\u043D\u0430\u0440\u043E\u0434\u043D\u043E\u043C\u0443 \u0440\u0456\u0432\u043D\u0456","description":"\u0412\u0456\u0434\u043E\u043C\u0438\u0439 \u0443 \u0432\u0441\u044C\u043E\u043C\u0443 \u0441\u0432\u0456\u0442\u0456"},{"id":"56","expression":"to lend a hand","type":"phrasal_verb","translation":"\u043F\u043E\u0434\u0430\u0442\u0438 \u0440\u0443\u043A\u0443 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0438","description":"\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u043A\u043E\u043C\u0443\u0441\u044C"},{"id":"57","expression":"a lightning reaction","type":"noun_phrase","translation":"\u0411\u043B\u0438\u0441\u043A\u0430\u0432\u0438\u0447\u043D\u0430 \u0440\u0435\u0430\u043A\u0446\u0456\u044F","description":"\u0414\u0443\u0436\u0435 \u0448\u0432\u0438\u0434\u043A\u0430 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u044C \u043D\u0430 \u0449\u043E\u0441\u044C"},{"id":"58","expression":"a lush vegetation","type":"noun_phrase","translation":"\u0411\u0443\u0439\u043D\u0430 \u0440\u043E\u0441\u043B\u0438\u043D\u043D\u0456\u0441\u0442\u044C","description":"\u0413\u0443\u0441\u0442\u0430, \u0431\u0430\u0433\u0430\u0442\u0430 \u0440\u043E\u0441\u043B\u0438\u043D\u043D\u0456\u0441\u0442\u044C"},{"id":"59","expression":"a lush valleys","type":"noun_phrase","translation":"\u0411\u0430\u0433\u0430\u0442\u0456 \u0434\u043E\u043B\u0438\u043D\u0438","description":"\u0420\u043E\u0434\u044E\u0447\u0456, \u0437\u0435\u043B\u0435\u043D\u0456 \u0434\u043E\u043B\u0438\u043D\u0438"},{"id":"60","expression":"to move around","type":"phrasal_verb","translation":"\u043F\u0435\u0440\u0435\u0441\u0443\u0432\u0430\u0442\u0438\u0441\u044F","description":"\u0420\u0443\u0445\u0430\u0442\u0438\u0441\u044F \u0437 \u043C\u0456\u0441\u0446\u044F \u043D\u0430 \u043C\u0456\u0441\u0446\u0435"},{"id":"61","expression":"to move off","type":"phrasal_verb","translation":"\u0432\u0456\u0434\'\u0457\u0436\u0434\u0436\u0430\u0442\u0438","description":"\u041F\u043E\u0447\u0438\u043D\u0430\u0442\u0438 \u0440\u0443\u0445 (\u043F\u0440\u043E \u0442\u0440\u0430\u043D\u0441\u043F\u043E\u0440\u0442)"},{"id":"62","expression":"musically gifted","type":"adjective_phrase","translation":"\u043C\u0443\u0437\u0438\u0447\u043D\u043E \u043E\u0431\u0434\u0430\u0440\u043E\u0432\u0430\u043D\u0438\u0439","description":"\u041C\u0430\u0454 \u043F\u0440\u0438\u0440\u043E\u0434\u043D\u0456\u0439 \u043C\u0443\u0437\u0438\u0447\u043D\u0438\u0439 \u0442\u0430\u043B\u0430\u043D\u0442"},{"id":"63","expression":"no such thing as a free lunch","type":"proverb","translation":"\u0431\u0435\u0437\u043A\u043E\u0448\u0442\u043E\u0432\u043D\u0438\u0445 \u043E\u0431\u0456\u0434\u0456\u0432 \u043D\u0435 \u0431\u0443\u0432\u0430\u0454","description":"\u0423\u0441\u044C\u043E \u0432 \u0446\u044C\u043E\u043C\u0443 \u0441\u0432\u0456\u0442\u0456 \u043C\u0430\u0454 \u0441\u0432\u043E\u044E \u0446\u0456\u043D\u0443"},{"id":"64","expression":"not rocket science","type":"phrase","translation":"\u043D\u0435 \u043D\u0430\u0439\u0441\u043A\u043B\u0430\u0434\u043D\u0456\u0448\u0435","description":"\u0429\u043E\u0441\u044C \u043B\u0435\u0433\u043A\u0435 \u0434\u043B\u044F \u0440\u043E\u0437\u0443\u043C\u0456\u043D\u043D\u044F"},{"id":"65","expression":"on edge","type":"adjective_phrase","translation":"\u043D\u0430\u043F\u0440\u0443\u0436\u0435\u043D\u0438\u0439","description":"\u041F\u043E\u0447\u0443\u0442\u0442\u044F \u0442\u0440\u0438\u0432\u043E\u0433\u0438 \u0430\u0431\u043E \u043D\u0435\u0440\u0432\u043E\u0437\u043D\u043E\u0441\u0442\u0456"},{"id":"66","expression":"on the same page","type":"phrase","translation":"\u043D\u0430 \u043E\u0434\u043D\u0456\u0439 \u0445\u0432\u0438\u043B\u0456","description":"\u041C\u0430\u0442\u0438 \u0441\u043F\u0456\u043B\u044C\u043D\u0435 \u0440\u043E\u0437\u0443\u043C\u0456\u043D\u043D\u044F \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u0457"},{"id":"67","expression":"petrified","type":"adjective","translation":"\u043F\u0435\u0440\u0435\u043B\u044F\u043A\u0430\u043D\u0438\u0439","description":"\u0414\u0443\u0436\u0435 \u043D\u0430\u043B\u044F\u043A\u0430\u043D\u0438\u0439, \u0437\u0430\u0441\u0442\u0438\u0433\u043B\u0438\u0439 \u0432\u0456\u0434 \u0441\u0442\u0440\u0430\u0445\u0443"},{"id":"68","expression":"pitch black","type":"adjective_phrase","translation":"\u0442\u0435\u043C\u043D\u0438\u0439 \u044F\u043A \u0441\u043C\u043E\u043B\u0430","description":"\u0414\u0443\u0436\u0435 \u0442\u0435\u043C\u043D\u0438\u0439, \u0431\u0435\u0437 \u0441\u0432\u0456\u0442\u043B\u0430"},{"id":"69","expression":"pitch dark","type":"adjective_phrase","translation":"\u0442\u0435\u043C\u043D\u0438\u0439 \u044F\u043A \u0441\u043C\u043E\u043B\u0430","description":"\u041F\u043E\u0432\u043D\u0430 \u0442\u0435\u043C\u0440\u044F\u0432\u0430"},{"id":"70","expression":"politically active","type":"adjective_phrase","translation":"\u043F\u043E\u043B\u0456\u0442\u0438\u0447\u043D\u043E \u0430\u043A\u0442\u0438\u0432\u043D\u0438\u0439","description":"\u0411\u0435\u0440\u0435 \u0443\u0447\u0430\u0441\u0442\u044C \u0443 \u043F\u043E\u043B\u0456\u0442\u0438\u0447\u043D\u0456\u0439 \u0434\u0456\u044F\u043B\u044C\u043D\u043E\u0441\u0442\u0456"},{"id":"71","expression":"rock hard","type":"adjective_phrase","translation":"\u0442\u0432\u0435\u0440\u0434\u0438\u0439 \u044F\u043A \u043A\u0430\u043C\u0456\u043D\u044C","description":"\u0414\u0443\u0436\u0435 \u0442\u0432\u0435\u0440\u0434\u0438\u0439"},{"id":"72","expression":"a rugged coastline","type":"noun_phrase","translation":"\u041F\u0435\u0440\u0435\u0441\u0456\u0447\u043D\u0435 \u0443\u0437\u0431\u0435\u0440\u0435\u0436\u0436\u044F","description":"\u0423\u0437\u0431\u0435\u0440\u0435\u0436\u0436\u044F \u0437 \u043A\u0440\u0443\u0442\u0438\u043C\u0438 \u0441\u043A\u0435\u043B\u044F\u043C\u0438"},{"id":"73","expression":"a rugged terrain","type":"noun_phrase","translation":"\u041F\u0435\u0440\u0435\u0441\u0456\u0447\u043D\u0430 \u043C\u0456\u0441\u0446\u0435\u0432\u0456\u0441\u0442\u044C","description":"\u0421\u043A\u043B\u0430\u0434\u043D\u0430 \u0434\u043B\u044F \u043F\u0435\u0440\u0435\u0441\u0443\u0432\u0430\u043D\u043D\u044F \u043C\u0456\u0441\u0446\u0435\u0432\u0456\u0441\u0442\u044C"},{"id":"74","expression":"to be scared stiff","type":"adjective_phrase","translation":"\u043F\u0435\u0440\u0435\u043B\u044F\u043A\u0430\u043D\u0438\u0439 \u0434\u043E \u0441\u043C\u0435\u0440\u0442\u0456","description":"\u0414\u0443\u0436\u0435 \u043D\u0430\u043B\u044F\u043A\u0430\u043D\u0438\u0439"},{"id":"75","expression":"a snow-capped mountains","type":"noun_phrase","translation":"\u0417\u0430\u0441\u043D\u0456\u0436\u0435\u043D\u0456 \u0433\u043E\u0440\u0438","description":"\u0413\u043E\u0440\u0438, \u043F\u043E\u043A\u0440\u0438\u0442\u0456 \u0441\u043D\u0456\u0433\u043E\u043C"},{"id":"76","expression":"a social gathering","type":"noun_phrase","translation":"\u0422\u043E\u0432\u0430\u0440\u0438\u0441\u044C\u043A\u0456 \u0437\u0431\u043E\u0440\u0438","description":"\u041D\u0435\u0444\u043E\u0440\u043C\u0430\u043B\u044C\u043D\u0456 \u0437\u0443\u0441\u0442\u0440\u0456\u0447\u0456 \u043B\u044E\u0434\u0435\u0439"},{"id":"77","expression":"a sparse vegetation","type":"noun_phrase","translation":"\u0420\u0456\u0434\u043A\u0456\u0441\u043D\u0430 \u0440\u043E\u0441\u043B\u0438\u043D\u043D\u0456\u0441\u0442\u044C","description":"\u041D\u0435\u0433\u0443\u0441\u0442\u0430 \u0440\u043E\u0441\u043B\u0438\u043D\u043D\u0456\u0441\u0442\u044C"},{"id":"78","expression":"speechless","type":"adjective","translation":"\u043D\u0456\u043C\u0438\u0439","description":"\u041D\u0435\u0437\u0434\u0430\u0442\u043D\u0438\u0439 \u0433\u043E\u0432\u043E\u0440\u0438\u0442\u0438 \u0432\u0456\u0434 \u0441\u0438\u043B\u044C\u043D\u0438\u0445 \u0435\u043C\u043E\u0446\u0456\u0439"},{"id":"79","expression":"stone cold","type":"adjective_phrase","translation":"\u0445\u043E\u043B\u043E\u0434\u043D\u0438\u0439 \u044F\u043A \u043A\u0430\u043C\u0456\u043D\u044C","description":"\u0414\u0443\u0436\u0435 \u0445\u043E\u043B\u043E\u0434\u043D\u0438\u0439"},{"id":"80","expression":"taken aback","type":"adjective_phrase","translation":"\u0437\u0434\u0438\u0432\u043E\u0432\u0430\u043D\u0438\u0439","description":"\u0420\u0430\u043F\u0442\u043E\u0432\u043E \u0437\u0434\u0438\u0432\u043E\u0432\u0430\u043D\u0438\u0439 \u0447\u0438\u043C\u043E\u0441\u044C"},{"id":"81","expression":"the belief","type":"noun_phrase","translation":"\u041F\u0435\u0440\u0435\u043A\u043E\u043D\u0430\u043D\u043D\u044F","description":"\u0429\u043E\u0441\u044C, \u0443 \u0449\u043E \u043B\u044E\u0434\u0438\u043D\u0430 \u0432\u0456\u0440\u0438\u0442\u044C"},{"id":"82","expression":"the constitution","type":"noun","translation":"\u041A\u043E\u043D\u0441\u0442\u0438\u0442\u0443\u0446\u0456\u044F","description":"\u041E\u0441\u043D\u043E\u0432\u043D\u0438\u0439 \u0437\u0430\u043A\u043E\u043D \u043A\u0440\u0430\u0457\u043D\u0438"},{"id":"83","expression":"the funny side","type":"noun_phrase","translation":"\u0421\u043C\u0456\u0448\u043D\u0430 \u0441\u0442\u043E\u0440\u043E\u043D\u0430","description":"\u0416\u0430\u0440\u0442\u0456\u0432\u043B\u0438\u0432\u0438\u0439 \u0430\u0441\u043F\u0435\u043A\u0442 \u0447\u043E\u0433\u043E\u0441\u044C"},{"id":"84","expression":"the heritage","type":"noun","translation":"\u0421\u043F\u0430\u0434\u0449\u0438\u043D\u0430","description":"\u041A\u0443\u043B\u044C\u0442\u0443\u0440\u043D\u0456 \u0446\u0456\u043D\u043D\u043E\u0441\u0442\u0456, \u0449\u043E \u043F\u0435\u0440\u0435\u0434\u0430\u044E\u0442\u044C\u0441\u044F"},{"id":"85","expression":"the inclusion/exclusion","type":"noun_phrase","translation":"\u0412\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F/\u0432\u0438\u043A\u043B\u044E\u0447\u0435\u043D\u043D\u044F","description":"\u041F\u0440\u043E\u0446\u0435\u0441 \u0434\u043E\u0434\u0430\u0432\u0430\u043D\u043D\u044F \u0430\u0431\u043E \u0432\u0438\u043B\u0443\u0447\u0435\u043D\u043D\u044F"},{"id":"86","expression":"the loop","type":"noun_phrase","translation":"\u0406\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u0439\u043D\u0438\u0439 \u0446\u0438\u043A\u043B","description":"\u041F\u043E\u0442\u043E\u0447\u043D\u0438\u0439 \u0441\u0442\u0430\u043D \u0441\u043F\u0440\u0430\u0432"},{"id":"87","expression":"the premise","type":"noun","translation":"\u041F\u0435\u0440\u0435\u0434\u0443\u043C\u043E\u0432\u0430","description":"\u041E\u0441\u043D\u043E\u0432\u0430 \u0434\u043B\u044F \u043C\u0456\u0440\u043A\u0443\u0432\u0430\u043D\u044C"},{"id":"88","expression":"the resistance to disease","type":"noun_phrase","translation":"\u0421\u0442\u0456\u0439\u043A\u0456\u0441\u0442\u044C \u0434\u043E \u0445\u0432\u043E\u0440\u043E\u0431","description":"\u0417\u0434\u0430\u0442\u043D\u0456\u0441\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0456\u0437\u043C\u0443 \u043F\u0440\u043E\u0442\u0438\u0441\u0442\u043E\u044F\u0442\u0438 \u0445\u0432\u043E\u0440\u043E\u0431\u0430\u043C"},{"id":"89","expression":"the tuber","type":"noun","translation":"\u0411\u0443\u043B\u044C\u0431\u0430","description":"\u0407\u0441\u0442\u0456\u0432\u043D\u0430 \u0447\u0430\u0441\u0442\u0438\u043D\u0430 \u0441\u0442\u0435\u0431\u043B\u0430 \u0440\u043E\u0441\u043B\u0438\u043D\u0438"},{"id":"90","expression":"wide open","type":"adjective_phrase","translation":"\u0448\u0438\u0440\u043E\u043A\u043E \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u0439","description":"\u041F\u043E\u0432\u043D\u0456\u0441\u0442\u044E \u0432\u0456\u0434\u043A\u0440\u0438\u0442\u0438\u0439"},{"id":"91","expression":"a wooded hillsides","type":"noun_phrase","translation":"\u041B\u0456\u0441\u0438\u0441\u0442\u0456 \u0441\u0445\u0438\u043B\u0438","description":"\u0421\u0445\u0438\u043B\u0438, \u043F\u043E\u043A\u0440\u0438\u0442\u0456 \u043B\u0456\u0441\u043E\u043C"},{"id":"92","expression":"worried sick","type":"adjective_phrase","translation":"\u0441\u0442\u0443\u0440\u0431\u043E\u0432\u0430\u043D\u0438\u0439 \u0434\u043E \u0441\u043C\u0435\u0440\u0442\u0456","description":"\u0414\u0443\u0436\u0435 \u0441\u0442\u0443\u0440\u0431\u043E\u0432\u0430\u043D\u0438\u0439"},{"id":"93","expression":"to articulate","type":"verb","translation":"\u0447\u0456\u0442\u043A\u043E \u0432\u0438\u0441\u043B\u043E\u0432\u043B\u044E\u0432\u0430\u0442\u0438","description":"\u042F\u0441\u043D\u043E \u0444\u043E\u0440\u043C\u0443\u043B\u044E\u0432\u0430\u0442\u0438 \u0434\u0443\u043C\u043A\u0438"},{"id":"94","expression":"to be astonished","type":"verb_phrase","translation":"\u0431\u0443\u0442\u0438 \u0432\u0440\u0430\u0436\u0435\u043D\u0438\u043C","description":"\u0414\u0443\u0436\u0435 \u0437\u0434\u0438\u0432\u0443\u0432\u0430\u0442\u0438\u0441\u044F"},{"id":"95","expression":"to be beyond somebody","type":"verb_phrase","translation":"\u0431\u0443\u0442\u0438 \u043F\u043E\u0437\u0430 \u0447\u0438\u0457\u043C\u043E\u0441\u044C \u0440\u043E\u0437\u0443\u043C\u0456\u043D\u043D\u044F\u043C","description":"\u0411\u0443\u0442\u0438 \u0437\u0430\u043D\u0430\u0434\u0442\u043E \u0441\u043A\u043B\u0430\u0434\u043D\u0438\u043C \u0434\u043B\u044F \u0440\u043E\u0437\u0443\u043C\u0456\u043D\u043D\u044F"},{"id":"96","expression":"to be buried","type":"verb_phrase","translation":"\u0431\u0443\u0442\u0438 \u043F\u043E\u0445\u043E\u0432\u0430\u043D\u0438\u043C","description":"\u041B\u0435\u0436\u0430\u0442\u0438 \u043F\u0456\u0434 \u0437\u0435\u043C\u043B\u0435\u044E \u043F\u0456\u0441\u043B\u044F \u0441\u043C\u0435\u0440\u0442\u0456"},{"id":"97","expression":"to be cross","type":"verb_phrase","translation":"\u0431\u0443\u0442\u0438 \u0441\u0435\u0440\u0434\u0438\u0442\u0438\u043C","description":"\u041F\u043E\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0440\u043E\u0437\u0434\u0440\u0430\u0442\u043E\u0432\u0430\u043D\u0438\u043C"},{"id":"98","expression":"to be done in","type":"verb_phrase","translation":"\u0431\u0443\u0442\u0438 \u0432\u0438\u0441\u043D\u0430\u0436\u0435\u043D\u0438\u043C","description":"\u0414\u0443\u0436\u0435 \u0432\u0442\u043E\u043C\u043B\u0435\u043D\u0438\u043C"},{"id":"99","expression":"to be livid","type":"verb_phrase","translation":"\u0431\u0443\u0442\u0438 \u043B\u044E\u0442\u0438\u043C","description":"\u0414\u0443\u0436\u0435 \u0441\u0438\u043B\u044C\u043D\u043E \u0437\u043B\u0438\u0442\u0438\u0441\u044F"},{"id":"100","expression":"to be miserable","type":"verb_phrase","translation":"\u0431\u0443\u0442\u0438 \u043D\u0435\u0449\u0430\u0441\u043D\u0438\u043C","description":"\u041F\u043E\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0434\u0443\u0436\u0435 \u043F\u043E\u0433\u0430\u043D\u043E"},{"id":"101","expression":"to be petrified","type":"verb_phrase","translation":"\u0431\u0443\u0442\u0438 \u043F\u0435\u0440\u0435\u043B\u044F\u043A\u0430\u043D\u0438\u043C","description":"\u0414\u0443\u0436\u0435 \u0441\u0438\u043B\u044C\u043D\u043E \u043D\u0430\u043B\u044F\u043A\u0430\u0442\u0438\u0441\u044F"},{"id":"102","expression":"to be preoccupied","type":"verb_phrase","translation":"\u0431\u0443\u0442\u0438 \u0437\u0430\u0439\u043D\u044F\u0442\u0438\u043C \u0434\u0443\u043C\u043A\u0430\u043C\u0438","description":"\u0414\u0443\u043C\u0430\u0442\u0438 \u043F\u0440\u043E \u0449\u043E\u0441\u044C \u043F\u043E\u0441\u0442\u0456\u0439\u043D\u043E"},{"id":"103","expression":"to be speechless","type":"verb_phrase","translation":"\u0431\u0443\u0442\u0438 \u043D\u0456\u043C\u0438\u043C","description":"\u041D\u0435 \u043C\u0430\u0442\u0438 \u0441\u043B\u0456\u0432 \u0432\u0456\u0434 \u0441\u0438\u043B\u044C\u043D\u0438\u0445 \u0435\u043C\u043E\u0446\u0456\u0439"},{"id":"104","expression":"to be thrilled","type":"verb_phrase","translation":"\u0431\u0443\u0442\u0438 \u0432 \u0437\u0430\u0445\u0432\u0430\u0442\u0456","description":"\u0414\u0443\u0436\u0435 \u0440\u0430\u0434\u0456\u0442\u0438 \u0447\u043E\u043C\u0443\u0441\u044C"},{"id":"105","expression":"to be ubiquitous","type":"verb_phrase","translation":"\u0431\u0443\u0442\u0438 \u0432\u0441\u044E\u0434\u0438\u0441\u0443\u0449\u0438\u043C","description":"\u0411\u0443\u0442\u0438 \u043F\u0440\u0438\u0441\u0443\u0442\u043D\u0456\u043C \u0441\u043A\u0440\u0456\u0437\u044C"},{"id":"106","expression":"to break down barriers","type":"verb_phrase","translation":"\u0437\u0440\u0443\u0439\u043D\u0443\u0432\u0430\u0442\u0438 \u0431\u0430\u0440\'\u0454\u0440\u0438","description":"\u0423\u0441\u0443\u043D\u0443\u0442\u0438 \u043F\u0435\u0440\u0435\u0448\u043A\u043E\u0434\u0438"},{"id":"107","expression":"to break even","type":"verb_phrase","translation":"\u0432\u0438\u0439\u0442\u0438 \u0432 \u043D\u0443\u043B\u044C","description":"\u041D\u0435 \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u043F\u0440\u0438\u0431\u0443\u0442\u043A\u0443, \u0430\u043B\u0435 \u0439 \u043D\u0435 \u0437\u0430\u0437\u043D\u0430\u0442\u0438 \u0437\u0431\u0438\u0442\u043A\u0456\u0432"},{"id":"108","expression":"to break the back of","type":"verb_phrase","translation":"\u0432\u0438\u043A\u043E\u043D\u0430\u0442\u0438 \u043D\u0430\u0439\u0432\u0430\u0436\u0447\u0443 \u0447\u0430\u0441\u0442\u0438\u043D\u0443","description":"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u0438 \u043D\u0430\u0439\u0441\u043A\u043B\u0430\u0434\u043D\u0456\u0448\u0438\u0439 \u0435\u0442\u0430\u043F \u0440\u043E\u0431\u043E\u0442\u0438"},{"id":"109","expression":"to break the bank","type":"verb_phrase","translation":"\u0440\u043E\u0437\u043E\u0440\u0438\u0442\u0438\u0441\u044F","description":"\u0412\u0438\u0442\u0440\u0430\u0442\u0438\u0442\u0438 \u0432\u0441\u0456 \u0433\u0440\u043E\u0448\u0456"},{"id":"110","expression":"to break the habit","type":"verb_phrase","translation":"\u043F\u043E\u0437\u0431\u0443\u0442\u0438\u0441\u044F \u0437\u0432\u0438\u0447\u043A\u0438","description":"\u041F\u0435\u0440\u0435\u0441\u0442\u0430\u0442\u0438 \u0440\u043E\u0431\u0438\u0442\u0438 \u0449\u043E\u0441\u044C \u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E"},{"id":"111","expression":"to break the ice","type":"verb_phrase","translation":"\u0440\u043E\u0437\u043B\u0430\u043C\u0430\u0442\u0438 \u043B\u0456\u0434","description":"\u0421\u0442\u0432\u043E\u0440\u0438\u0442\u0438 \u0431\u0456\u043B\u044C\u0448 \u0440\u043E\u0437\u0441\u043B\u0430\u0431\u043B\u0435\u043D\u0443 \u0430\u0442\u043C\u043E\u0441\u0444\u0435\u0440\u0443"},{"id":"112","expression":"to bump into","type":"phrasal_verb","translation":"\u043D\u0430\u0442\u0440\u0430\u043F\u0438\u0442\u0438 \u043D\u0430","description":"\u0417\u0443\u0441\u0442\u0440\u0456\u0442\u0438 \u043A\u043E\u0433\u043E\u0441\u044C \u0432\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u043E"},{"id":"113","expression":"to cavort","type":"verb","translation":"\u0441\u043A\u0430\u043A\u0430\u0442\u0438","description":"\u0420\u0430\u0434\u0456\u0441\u043D\u043E \u0441\u0442\u0440\u0438\u0431\u0430\u0442\u0438 \u0430\u0431\u043E \u0442\u0430\u043D\u0446\u044E\u0432\u0430\u0442\u0438"},{"id":"114","expression":"to come at a price","type":"verb_phrase","translation":"\u043C\u0430\u0442\u0438 \u0441\u0432\u043E\u044E \u0446\u0456\u043D\u0443","description":"\u0412\u0438\u043C\u0430\u0433\u0430\u0442\u0438 \u043F\u0435\u0432\u043D\u0438\u0445 \u0436\u0435\u0440\u0442\u0432 \u0430\u0431\u043E \u0432\u0438\u0442\u0440\u0430\u0442"},{"id":"115","expression":"to concern","type":"verb","translation":"\u0442\u0443\u0440\u0431\u0443\u0432\u0430\u0442\u0438","description":"\u0412\u0438\u043A\u043B\u0438\u043A\u0430\u0442\u0438 \u0437\u0430\u043D\u0435\u043F\u043E\u043A\u043E\u0454\u043D\u043D\u044F"},{"id":"116","expression":"to derive","type":"verb","translation":"\u043E\u0442\u0440\u0438\u043C\u0443\u0432\u0430\u0442\u0438","description":"\u0412\u0438\u0432\u043E\u0434\u0438\u0442\u0438 \u0449\u043E\u0441\u044C \u0437 \u0447\u043E\u0433\u043E\u0441\u044C"},{"id":"117","expression":"to douse the flame","type":"verb_phrase","translation":"\u0437\u0430\u0433\u0430\u0441\u0438\u0442\u0438 \u043F\u043E\u043B\u0443\u043C\'\u044F","description":"\u041F\u0440\u0438\u043F\u0438\u043D\u0438\u0442\u0438 \u0433\u043E\u0440\u0456\u043D\u043D\u044F"},{"id":"118","expression":"to do your bit","type":"verb_phrase","translation":"\u0437\u0440\u043E\u0431\u0438\u0442\u0438 \u0441\u0432\u043E\u044E \u0447\u0430\u0441\u0442\u0438\u043D\u0443","description":"\u0412\u043D\u0435\u0441\u0442\u0438 \u0441\u0432\u0456\u0439 \u0432\u043D\u0435\u0441\u043E\u043A"},{"id":"119","expression":"to duplicate","type":"verb","translation":"\u0434\u0443\u0431\u043B\u044E\u0432\u0430\u0442\u0438","description":"\u0421\u0442\u0432\u043E\u0440\u044E\u0432\u0430\u0442\u0438 \u043A\u043E\u043F\u0456\u044E"},{"id":"120","expression":"to elaborate","type":"verb","translation":"\u0440\u043E\u0437\u0432\u0438\u0432\u0430\u0442\u0438 \u0434\u0443\u043C\u043A\u0443","description":"\u0414\u0435\u0442\u0430\u043B\u044C\u043D\u043E \u043F\u043E\u044F\u0441\u043D\u044E\u0432\u0430\u0442\u0438"},{"id":"121","expression":"to emanate","type":"verb","translation":"\u0432\u0438\u043F\u0440\u043E\u043C\u0456\u043D\u044E\u0432\u0430\u0442\u0438","description":"\u041F\u043E\u0445\u043E\u0434\u0438\u0442\u0438 \u0432\u0456\u0434 \u0447\u043E\u0433\u043E\u0441\u044C"},{"id":"122","expression":"to feel down","type":"verb_phrase","translation":"\u043F\u043E\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u043F\u0440\u0438\u0433\u043D\u0456\u0447\u0435\u043D\u0438\u043C","description":"\u041C\u0430\u0442\u0438 \u043F\u043E\u0433\u0430\u043D\u0438\u0439 \u043D\u0430\u0441\u0442\u0440\u0456\u0439"},{"id":"123","expression":"to feel free","type":"verb_phrase","translation":"\u043F\u043E\u0447\u0443\u0432\u0430\u0442\u0438\u0441\u044F \u0432\u0456\u043B\u044C\u043D\u043E","description":"\u041C\u0430\u0442\u0438 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0440\u043E\u0431\u0438\u0442\u0438 \u0449\u043E\u0441\u044C \u0431\u0435\u0437 \u043E\u0431\u043C\u0435\u0436\u0435\u043D\u044C"},{"id":"124","expression":"to get away with","type":"phrasal_verb","translation":"\u0443\u043D\u0438\u043A\u043D\u0443\u0442\u0438 \u043F\u043E\u043A\u0430\u0440\u0430\u043D\u043D\u044F","description":"\u041D\u0435 \u043F\u043E\u043D\u0435\u0441\u0442\u0438 \u043D\u0430\u0441\u043B\u0456\u0434\u043A\u0456\u0432 \u0437\u0430 \u0449\u043E\u0441\u044C"},{"id":"125","expression":"to get off scot-free","type":"phrasal_verb","translation":"\u0443\u043D\u0438\u043A\u043D\u0443\u0442\u0438 \u043F\u043E\u043A\u0430\u0440\u0430\u043D\u043D\u044F","description":"\u041D\u0435 \u0431\u0443\u0442\u0438 \u043F\u043E\u043A\u0430\u0440\u0430\u043D\u0438\u043C \u0437\u0430 \u043F\u0440\u043E\u0432\u0438\u043D\u0443"},{"id":"126","expression":"to give a helping hand","type":"verb_phrase","translation":"\u043F\u043E\u0434\u0430\u0442\u0438 \u0440\u0443\u043A\u0443 \u0434\u043E\u043F\u043E\u043C\u043E\u0433\u0438","description":"\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u043A\u043E\u043C\u0443\u0441\u044C"},{"id":"127","expression":"to go beyond a joke","type":"verb_phrase","translation":"\u0432\u0438\u0439\u0442\u0438 \u0437\u0430 \u043C\u0435\u0436\u0456 \u0436\u0430\u0440\u0442\u0456\u0432","description":"\u0421\u0442\u0430\u0442\u0438 \u0441\u0435\u0440\u0439\u043E\u0437\u043D\u043E\u044E \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u043E\u044E"},{"id":"128","expression":"to have a laugh about","type":"verb_phrase","translation":"\u043F\u043E\u0441\u043C\u0456\u044F\u0442\u0438\u0441\u044F \u0437","description":"\u0416\u0430\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043F\u0440\u043E \u0449\u043E\u0441\u044C"},{"id":"129","expression":"to have a say","type":"verb_phrase","translation":"\u043C\u0430\u0442\u0438 \u043F\u0440\u0430\u0432\u043E \u0433\u043E\u043B\u043E\u0441\u0443","description":"\u041C\u0430\u0442\u0438 \u043C\u043E\u0436\u043B\u0438\u0432\u0456\u0441\u0442\u044C \u0432\u0438\u0441\u043B\u043E\u0432\u0438\u0442\u0438 \u0434\u0443\u043C\u043A\u0443"},{"id":"130","expression":"to illuminate","type":"verb","translation":"\u043E\u0441\u0432\u0456\u0442\u043B\u044E\u0432\u0430\u0442\u0438","description":"\u041D\u0430\u0434\u0430\u0432\u0430\u0442\u0438 \u0441\u0432\u0456\u0442\u043B\u043E \u0430\u0431\u043E \u044F\u0441\u043D\u0456\u0441\u0442\u044C"},{"id":"131","expression":"to infuse","type":"verb","translation":"\u043D\u0430\u0441\u0442\u043E\u044E\u0432\u0430\u0442\u0438","description":"\u0414\u043E\u0434\u0430\u0432\u0430\u0442\u0438 \u044F\u043A\u043E\u0441\u0442\u0456 \u0447\u043E\u043C\u0443\u0441\u044C"},{"id":"132","expression":"to lock someone out of","type":"phrasal_verb","translation":"\u0437\u0430\u0431\u043B\u043E\u043A\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u043C\u0443\u0441\u044C \u0434\u043E\u0441\u0442\u0443\u043F \u0434\u043E","description":"\u041D\u0435 \u0434\u0430\u0442\u0438 \u043A\u043E\u043C\u0443\u0441\u044C \u0443\u0432\u0456\u0439\u0442\u0438 \u0430\u0431\u043E \u043E\u0442\u0440\u0438\u043C\u0430\u0442\u0438 \u0434\u043E\u0441\u0442\u0443\u043F"},{"id":"133","expression":"to look livid/furious","type":"verb_phrase","translation":"\u0432\u0438\u0433\u043B\u044F\u0434\u0430\u0442\u0438 \u043B\u044E\u0442\u0438\u043C","description":"\u0414\u0443\u0436\u0435 \u0441\u0435\u0440\u0434\u0438\u0442\u043E \u0432\u0438\u0433\u043B\u044F\u0434\u0430\u0442\u0438"},{"id":"134","expression":"to make a joke","type":"verb_phrase","translation":"\u0436\u0430\u0440\u0442\u0443\u0432\u0430\u0442\u0438","description":"\u041A\u0430\u0437\u0430\u0442\u0438 \u0449\u043E\u0441\u044C \u0441\u043C\u0456\u0448\u043D\u0435"},{"id":"135","expression":"to move to tears","type":"phrasal_verb","translation":"\u0437\u043C\u0443\u0441\u0438\u0442\u0438 \u043F\u043B\u0430\u043A\u0430\u0442\u0438","description":"\u0412\u0438\u043A\u043B\u0438\u043A\u0430\u0442\u0438 \u0441\u0438\u043B\u044C\u043D\u0456 \u0435\u043C\u043E\u0446\u0456\u0457"},{"id":"136","expression":"to play a joke on","type":"verb_phrase","translation":"\u0440\u043E\u0437\u0456\u0433\u0440\u0430\u0442\u0438 \u043A\u043E\u0433\u043E\u0441\u044C","description":"\u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u0436\u0430\u0440\u0442 \u043D\u0430\u0434 \u043A\u0438\u043C\u043E\u0441\u044C"},{"id":"137","expression":"to play on words","type":"verb_phrase","translation":"\u0433\u0440\u0430\u0442\u0438 \u0441\u043B\u043E\u0432\u0430\u043C\u0438","description":"\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0432\u0430\u0442\u0438 \u0433\u0440\u0443 \u0441\u043B\u0456\u0432"},{"id":"138","expression":"to pull someone together","type":"phrasal_verb","translation":"\u0437\u0433\u0443\u0440\u0442\u0443\u0432\u0430\u0442\u0438 \u043A\u043E\u0433\u043E\u0441\u044C","description":"\u0414\u043E\u043F\u043E\u043C\u043E\u0433\u0442\u0438 \u043A\u043E\u043C\u0443\u0441\u044C \u0437\u0456\u0431\u0440\u0430\u0442\u0438\u0441\u044F"},{"id":"139","expression":"to push the boundaries","type":"verb_phrase","translation":"\u0440\u043E\u0437\u0448\u0438\u0440\u044E\u0432\u0430\u0442\u0438 \u043C\u0435\u0436\u0456","description":"\u0412\u0438\u0445\u043E\u0434\u0438\u0442\u0438 \u0437\u0430 \u0437\u0432\u0438\u0447\u043D\u0456 \u0440\u0430\u043C\u043A\u0438"},{"id":"140","expression":"to see the funny side of","type":"verb_phrase","translation":"\u043F\u043E\u0431\u0430\u0447\u0438\u0442\u0438 \u0441\u043C\u0456\u0448\u043D\u0443 \u0441\u0442\u043E\u0440\u043E\u043D\u0443","description":"\u0417\u043D\u0430\u0439\u0442\u0438 \u0449\u043E\u0441\u044C \u0441\u043C\u0456\u0448\u043D\u0435 \u0432 \u0441\u0438\u0442\u0443\u0430\u0446\u0456\u0457"},{"id":"141","expression":"to separate","type":"verb","translation":"\u0432\u0456\u0434\u0434\u0456\u043B\u044F\u0442\u0438","description":"\u0420\u043E\u0437\u0434\u0456\u043B\u044F\u0442\u0438 \u043D\u0430 \u0447\u0430\u0441\u0442\u0438\u043D\u0438"},{"id":"142","expression":"to show concern for","type":"verb_phrase","translation":"\u0432\u0438\u044F\u0432\u043B\u044F\u0442\u0438 \u0442\u0443\u0440\u0431\u043E\u0442\u0443 \u043F\u0440\u043E","description":"\u0414\u0435\u043C\u043E\u043D\u0441\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u043F\u0456\u043A\u043B\u0443\u0432\u0430\u043D\u043D\u044F"},{"id":"143","expression":"to take fun out of","type":"verb_phrase","translation":"\u043F\u043E\u0437\u0431\u0430\u0432\u0438\u0442\u0438 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u043D\u044F","description":"\u0417\u0440\u043E\u0431\u0438\u0442\u0438 \u0449\u043E\u0441\u044C \u043C\u0435\u043D\u0448 \u043F\u0440\u0438\u0454\u043C\u043D\u0438\u043C"},{"id":"144","expression":"to take responsibility","type":"verb_phrase","translation":"\u0431\u0440\u0430\u0442\u0438 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u0430\u043B\u044C\u043D\u0456\u0441\u0442\u044C","description":"\u0423\u0441\u0432\u0456\u0434\u043E\u043C\u043B\u044E\u0432\u0430\u0442\u0438 \u0441\u0432\u043E\u0457 \u043E\u0431\u043E\u0432\'\u044F\u0437\u043A\u0438"},{"id":"145","expression":"to think outside the box","type":"verb_phrase","translation":"\u0434\u0443\u043C\u0430\u0442\u0438 \u043D\u0435\u0441\u0442\u0430\u043D\u0434\u0430\u0440\u0442\u043D\u043E","description":"\u0428\u0443\u043A\u0430\u0442\u0438 \u043D\u0435\u0437\u0432\u0438\u0447\u043D\u0456 \u0440\u0456\u0448\u0435\u043D\u043D\u044F"},{"id":"146","expression":"accordingly","type":"adverb","translation":"\u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u043E","description":"\u0423 \u0432\u0456\u0434\u043F\u043E\u0432\u0456\u0434\u043D\u0438\u0439 \u0441\u043F\u043E\u0441\u0456\u0431"},{"id":"147","expression":"additionally","type":"adverb","translation":"\u0434\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u043E","description":"\u041A\u0440\u0456\u043C \u0442\u043E\u0433\u043E"},{"id":"148","expression":"after all","type":"adverb","translation":"\u0432\u0440\u0435\u0448\u0442\u0456-\u0440\u0435\u0448\u0442","description":"\u0412\u0440\u0430\u0445\u043E\u0432\u0443\u044E\u0447\u0438 \u0432\u0441\u0456 \u043E\u0431\u0441\u0442\u0430\u0432\u0438\u043D\u0438"},{"id":"149","expression":"as a result","type":"adverb","translation":"\u0432 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0456","description":"\u0412\u0438\u043A\u043B\u0438\u043A\u0430\u043D\u0438\u0439 \u0447\u0438\u043C\u043E\u0441\u044C"},{"id":"150","expression":"at least","type":"adverb","translation":"\u043F\u0440\u0438\u043D\u0430\u0439\u043C\u043D\u0456","description":"\u041C\u0456\u043D\u0456\u043C\u0443\u043C"},{"id":"151","expression":"anyway","type":"adverb","translation":"\u0443 \u0431\u0443\u0434\u044C-\u044F\u043A\u043E\u043C\u0443 \u0440\u0430\u0437\u0456","description":"\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u043F\u0456\u0434\u043A\u0440\u0435\u0441\u043B\u0435\u043D\u043D\u044F \u0447\u0438 \u043F\u0435\u0440\u0435\u0445\u043E\u0434\u0443 \u0434\u043E \u0456\u043D\u0448\u043E\u0457 \u0442\u0435\u043C\u0438"},{"id":"152","expression":"besides","type":"adverb","translation":"\u043A\u0440\u0456\u043C \u0442\u043E\u0433\u043E","description":"\u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F \u0447\u0438 \u0444\u0430\u043A\u0442"},{"id":"153","expression":"certainly","type":"adverb","translation":"\u0431\u0435\u0437\u0443\u043C\u043E\u0432\u043D\u043E","description":"\u0411\u0435\u0437 \u0436\u043E\u0434\u043D\u0438\u0445 \u0441\u0443\u043C\u043D\u0456\u0432\u0456\u0432"},{"id":"154","expression":"conversely","type":"adverb","translation":"\u043D\u0430\u0432\u043F\u0430\u043A\u0438","description":"\u041F\u0440\u043E\u0442\u0438\u043B\u0435\u0436\u043D\u0430 \u0442\u043E\u0447\u043A\u0430 \u0437\u043E\u0440\u0443"},{"id":"155","expression":"finally","type":"adverb","translation":"\u043D\u0430\u0440\u0435\u0448\u0442\u0456","description":"\u0412 \u043A\u0456\u043D\u0446\u0456 \u043F\u0440\u043E\u0446\u0435\u0441\u0443"},{"id":"156","expression":"hence","type":"adverb","translation":"\u043E\u0442\u0436\u0435","description":"\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u043F\u043E\u0437\u043D\u0430\u0447\u0435\u043D\u043D\u044F \u0432\u0438\u0441\u043D\u043E\u0432\u043A\u0443"},{"id":"157","expression":"instead","type":"adverb","translation":"\u0437\u0430\u043C\u0456\u0441\u0442\u044C","description":"\u042F\u043A \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u0430"},{"id":"158","expression":"in conclusion","type":"adverb","translation":"\u043D\u0430 \u0437\u0430\u043A\u0456\u043D\u0447\u0435\u043D\u043D\u044F","description":"\u0412\u0438\u043A\u043E\u0440\u0438\u0441\u0442\u043E\u0432\u0443\u0454\u0442\u044C\u0441\u044F \u0434\u043B\u044F \u043F\u0456\u0434\u0432\u0435\u0434\u0435\u043D\u043D\u044F \u043F\u0456\u0434\u0441\u0443\u043C\u043A\u0456\u0432"},{"id":"159","expression":"lately","type":"adverb","translation":"\u043E\u0441\u0442\u0430\u043D\u043D\u0456\u043C \u0447\u0430\u0441\u043E\u043C","description":"\u0412 \u043D\u0435\u0434\u0430\u0432\u043D\u0456\u0439 \u043F\u0435\u0440\u0441\u043F\u0435\u043A\u0442\u0438\u0432\u0456"},{"id":"160","expression":"likewise","type":"adverb","translation":"\u0442\u0430\u043A \u0441\u0430\u043C\u043E","description":"\u0422\u0430\u043A\u0438\u043C \u0436\u0435 \u0447\u0438\u043D\u043E\u043C"},{"id":"161","expression":"moreover","type":"adverb","translation":"\u0431\u0456\u043B\u044C\u0448 \u0442\u043E\u0433\u043E","description":"\u0414\u043E\u0434\u0430\u0442\u043A\u043E\u0432\u0430 \u0432\u0430\u0436\u043B\u0438\u0432\u0430 \u0456\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0456\u044F"},{"id":"162","expression":"namely","type":"adverb","translation":"\u0430 \u0441\u0430\u043C\u0435","description":"\u0414\u043B\u044F \u0443\u0442\u043E\u0447\u043D\u0435\u043D\u043D\u044F"},{"id":"163","expression":"nevertheless","type":"adverb","translation":"\u0442\u0438\u043C \u043D\u0435 \u043C\u0435\u043D\u0448","description":"\u041D\u0435\u0437\u0432\u0430\u0436\u0430\u044E\u0447\u0438 \u043D\u0430 \u0449\u043E\u0441\u044C"},{"id":"164","expression":"yet","type":"adverb","translation":"\u0449\u0435","description":"\u0414\u043E \u0446\u044C\u043E\u0433\u043E \u0447\u0430\u0441\u0443"},{"id":"165","expression":"often","type":"adverb","translation":"\u0447\u0430\u0441\u0442\u043E","description":"\u0411\u0430\u0433\u0430\u0442\u043E \u0440\u0430\u0437\u0456\u0432"},{"id":"166","expression":"sometimes","type":"adverb","translation":"\u0456\u043D\u043E\u0434\u0456","description":"\u0412 \u043E\u043A\u0440\u0435\u043C\u0438\u0445 \u0432\u0438\u043F\u0430\u0434\u043A\u0430\u0445"},{"id":"167","expression":"rarely","type":"adverb","translation":"\u0440\u0456\u0434\u043A\u043E","description":"\u041D\u0435 \u0447\u0430\u0441\u0442\u043E"},{"id":"168","expression":"never","type":"adverb","translation":"\u043D\u0456\u043A\u043E\u043B\u0438","description":"\u0416\u043E\u0434\u043D\u043E\u0433\u043E \u0440\u0430\u0437\u0443"},{"id":"169","expression":"ever","type":"adverb","translation":"\u043A\u043E\u043B\u0438-\u043D\u0435\u0431\u0443\u0434\u044C","description":"\u0423 \u0431\u0443\u0434\u044C-\u044F\u043A\u0438\u0439 \u0447\u0430\u0441"},{"id":"170","expression":"hardly ever","type":"adverb","translation":"\u043C\u0430\u0439\u0436\u0435 \u043D\u0456\u043A\u043E\u043B\u0438","description":"\u0414\u0443\u0436\u0435 \u0440\u0456\u0434\u043A\u043E"},{"id":"171","expression":"occasionally","type":"adverb","translation":"\u0447\u0430\u0441 \u0432\u0456\u0434 \u0447\u0430\u0441\u0443","description":"\u041D\u0435\u0440\u0435\u0433\u0443\u043B\u044F\u0440\u043D\u043E"},{"id":"172","expression":"seldom","type":"adverb","translation":"\u0440\u0456\u0434\u043A\u043E","description":"\u041D\u0435 \u0447\u0430\u0441\u0442\u043E"},{"id":"173","expression":"generally","type":"adverb","translation":"\u0437\u0430\u0433\u0430\u043B\u043E\u043C","description":"\u0412 \u0431\u0456\u043B\u044C\u0448\u043E\u0441\u0442\u0456 \u0432\u0438\u043F\u0430\u0434\u043A\u0456\u0432"},{"id":"174","expression":"frequently","type":"adverb","translation":"\u0447\u0430\u0441\u0442\u043E","description":"\u0411\u0430\u0433\u0430\u0442\u043E \u0440\u0430\u0437\u0456\u0432"},{"id":"175","expression":"normally","type":"adverb","translation":"\u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439","description":"\u0423 \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u0445 \u043E\u0431\u0441\u0442\u0430\u0432\u0438\u043D\u0430\u0445"},{"id":"176","expression":"daily","type":"adverb","translation":"\u0449\u043E\u0434\u043D\u044F","description":"\u041A\u043E\u0436\u043D\u043E\u0433\u043E \u0434\u043D\u044F"},{"id":"177","expression":"previously","type":"adverb","translation":"\u0440\u0430\u043D\u0456\u0448\u0435","description":"\u0414\u043E \u0446\u044C\u043E\u0433\u043E \u0447\u0430\u0441\u0443"},{"id":"178","expression":"afterwards","type":"adverb","translation":"\u043F\u0456\u0441\u043B\u044F \u0446\u044C\u043E\u0433\u043E","description":"\u041F\u0456\u0437\u043D\u0456\u0448\u0435"},{"id":"179","expression":"early","type":"adverb","translation":"\u0440\u0430\u043D\u043E","description":"\u0414\u043E \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E\u0433\u043E \u0447\u0430\u0441\u0443"},{"id":"180","expression":"late","type":"adverb","translation":"\u043F\u0456\u0437\u043D\u043E","description":"\u041F\u0456\u0441\u043B\u044F \u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E\u0433\u043E \u0447\u0430\u0441\u0443"},{"id":"181","expression":"later","type":"adverb","translation":"\u043F\u0456\u0437\u043D\u0456\u0448\u0435","description":"\u0412 \u043C\u0430\u0439\u0431\u0443\u0442\u043D\u044C\u043E\u043C\u0443"},{"id":"182","expression":"still","type":"adverb","translation":"\u0434\u043E\u0441\u0456","description":"\u041F\u0440\u043E\u0434\u043E\u0432\u0436\u0443\u0454 \u0431\u0443\u0442\u0438 \u043F\u0440\u0430\u0432\u0434\u043E\u044E"},{"id":"183","expression":"seldom","type":"adverb","translation":"\u0440\u0456\u0434\u043A\u043E","description":"\u041D\u0435 \u0447\u0430\u0441\u0442\u043E"},{"id":"184","expression":"straight","type":"adverb","translation":"\u043F\u0440\u044F\u043C\u043E","description":"\u0411\u0435\u0437 \u0432\u0438\u0433\u0438\u043D\u0456\u0432"},{"id":"185","expression":"loudly","type":"adverb","translation":"\u0433\u0443\u0447\u043D\u043E","description":"\u0417 \u0432\u0435\u043B\u0438\u043A\u0438\u043C \u0437\u0432\u0443\u043A\u043E\u043C"},{"id":"186","expression":"proudly","type":"adverb","translation":"\u0433\u043E\u0440\u0434\u043E","description":"\u0417 \u043F\u043E\u0447\u0443\u0442\u0442\u044F\u043C \u0433\u043E\u0440\u0434\u043E\u0441\u0442\u0456"},{"id":"187","expression":"suspiciously","type":"adverb","translation":"\u043F\u0456\u0434\u043E\u0437\u0440\u0456\u043B\u043E","description":"\u0412\u0438\u043A\u043B\u0438\u043A\u0430\u044E\u0447\u0438 \u043F\u0456\u0434\u043E\u0437\u0440\u0438"},{"id":"188","expression":"strangely","type":"adverb","translation":"\u0434\u0438\u0432\u043D\u043E","description":"\u041D\u0435\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0438\u043C \u0447\u0438\u043D\u043E\u043C"},{"id":"189","expression":"kindly","type":"adverb","translation":"\u0434\u043E\u0431\u0440\u043E\u0437\u0438\u0447\u043B\u0438\u0432\u043E","description":"\u041F\u043E-\u0434\u043E\u0431\u0440\u043E\u043C\u0443"},{"id":"190","expression":"rudely","type":"adverb","translation":"\u0433\u0440\u0443\u0431\u043E","description":"\u041D\u0435\u0432\u0432\u0456\u0447\u043B\u0438\u0432\u043E"},{"id":"191","expression":"neatly","type":"adverb","translation":"\u0430\u043A\u0443\u0440\u0430\u0442\u043D\u043E","description":"\u041E\u0445\u0430\u0439\u043D\u043E"},{"id":"192","expression":"generously","type":"adverb","translation":"\u0449\u0435\u0434\u0440\u043E","description":"\u0423 \u0432\u0435\u043B\u0438\u043A\u0456\u0439 \u043A\u0456\u043B\u044C\u043A\u043E\u0441\u0442\u0456"},{"id":"193","expression":"eagerly","type":"adverb","translation":"\u0456\u0437 \u0437\u0430\u0434\u043E\u0432\u043E\u043B\u0435\u043D\u043D\u044F\u043C","description":"\u0417 \u0432\u0435\u043B\u0438\u043A\u0438\u043C \u0431\u0430\u0436\u0430\u043D\u043D\u044F\u043C"},{"id":"194","expression":"accidentally","type":"adverb","translation":"\u0432\u0438\u043F\u0430\u0434\u043A\u043E\u0432\u043E","description":"\u0411\u0435\u0437 \u043D\u0430\u043C\u0456\u0440\u0443"},{"id":"195","expression":"rapidly","type":"adverb","translation":"\u0448\u0432\u0438\u0434\u043A\u043E","description":"\u0417 \u0432\u0438\u0441\u043E\u043A\u043E\u044E \u0448\u0432\u0438\u0434\u043A\u0456\u0441\u0442\u044E"},{"id":"196","expression":"hungrily","type":"adverb","translation":"\u0433\u043E\u043B\u043E\u0434\u043D\u043E","description":"\u042F\u043A \u0433\u043E\u043B\u043E\u0434\u043D\u0430 \u043B\u044E\u0434\u0438\u043D\u0430"},{"id":"197","expression":"foolishly","type":"adverb","translation":"\u0434\u0443\u0440\u043D\u0443\u0432\u0430\u0442\u043E","description":"\u0434\u0456\u044F\u0442\u0438 \u043D\u0435\u0440\u043E\u0437\u0443\u043C\u043D\u043E \u0430\u0431\u043E \u0431\u0435\u0437\u0434\u0443\u043C\u043D\u043E"},{"id":"198","expression":"cheerfully","type":"adverb","translation":"\u0432\u0435\u0441\u0435\u043B\u043E","description":"\u0437 \u0432\u0435\u0441\u0435\u043B\u0438\u043C \u0430\u0431\u043E \u0436\u0438\u0442\u0442\u0454\u0440\u0430\u0434\u0456\u0441\u043D\u0438\u043C \u043D\u0430\u0441\u0442\u0440\u043E\u0454\u043C"},{"id":"199","expression":"somewhat","type":"adverb","translation":"\u0434\u0435\u0449\u043E","description":"\u0443 \u043F\u0435\u0432\u043D\u0456\u0439 \u043C\u0456\u0440\u0456 \u0430\u0431\u043E \u0447\u0430\u0441\u0442\u043A\u043E\u0432\u043E"},{"id":"200","expression":"barely","type":"adverb","translation":"\u043B\u0435\u0434\u0432\u0435","description":"\u043C\u0430\u0439\u0436\u0435 \u0437\u043E\u0432\u0441\u0456\u043C \u043D\u0435; \u043B\u0435\u0434\u0432\u0435"},{"id":"201","expression":"nearly","type":"adverb","translation":"\u043C\u0430\u0439\u0436\u0435","description":"\u0434\u0443\u0436\u0435 \u0431\u043B\u0438\u0437\u044C\u043A\u043E \u0434\u043E \u0447\u043E\u0433\u043E\u0441\u044C, \u0430\u043B\u0435 \u043D\u0435 \u0437\u043E\u0432\u0441\u0456\u043C"},{"id":"202","expression":"extremely","type":"adverb","translation":"\u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E","description":"\u0443 \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u0456\u0439 \u043C\u0456\u0440\u0456"},{"id":"203","expression":"slightly","type":"adverb","translation":"\u0442\u0440\u043E\u0445\u0438","description":"\u0443 \u043D\u0435\u0432\u0435\u043B\u0438\u043A\u0456\u0439 \u043C\u0456\u0440\u0456"},{"id":"204","expression":"especially","type":"adverb","translation":"\u043E\u0441\u043E\u0431\u043B\u0438\u0432\u043E","description":"\u0431\u0456\u043B\u044C\u0448\u0435, \u043D\u0456\u0436 \u0437\u0430\u0437\u0432\u0438\u0447\u0430\u0439 \u0430\u0431\u043E \u043D\u0456\u0436 \u0456\u043D\u0448\u0456"},{"id":"205","expression":"scarcely","type":"adverb","translation":"\u043B\u0435\u0434\u0432\u0435","description":"\u043B\u0435\u0434\u0432\u0435 \u0447\u0438 \u043C\u0430\u0439\u0436\u0435 \u043D\u0456"},{"id":"206","expression":"virtually","type":"adverb","translation":"\u0444\u0430\u043A\u0442\u0438\u0447\u043D\u043E","description":"\u043F\u0440\u0430\u043A\u0442\u0438\u0447\u043D\u043E \u0430\u0431\u043E \u043C\u0430\u0439\u0436\u0435 \u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E"},{"id":"207","expression":"fully","type":"adverb","translation":"\u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E","description":"\u043F\u043E\u0432\u043D\u0456\u0441\u0442\u044E, \u0446\u0456\u043B\u043A\u043E\u043C"},{"id":"208","expression":"exceptionally","type":"adverb","translation":"\u0432\u0438\u043D\u044F\u0442\u043A\u043E\u0432\u043E","description":"\u043D\u0435\u0437\u0432\u0438\u0447\u043D\u043E \u0430\u0431\u043E \u043D\u0430\u0434\u0437\u0432\u0438\u0447\u0430\u0439\u043D\u043E"},{"id":"209","expression":"above","type":"adverb","translation":"\u0432\u0438\u0449\u0435","description":"\u043D\u0430 \u0432\u0438\u0449\u043E\u043C\u0443 \u0440\u0456\u0432\u043D\u0456 \u0430\u0431\u043E \u043C\u0456\u0441\u0446\u0456"},{"id":"210","expression":"nearby","type":"adverb","translation":"\u043F\u043E\u0440\u0443\u0447","description":"\u0440\u043E\u0437\u0442\u0430\u0448\u043E\u0432\u0430\u043D\u0438\u0439 \u043D\u0435\u043F\u043E\u0434\u0430\u043B\u0456\u043A"},{"id":"211","expression":"backward(s)","type":"adverb","translation":"\u043D\u0430\u0437\u0430\u0434","description":"\u0443 \u0437\u0432\u043E\u0440\u043E\u0442\u043D\u043E\u043C\u0443 \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0443"},{"id":"212","expression":"toward(s)","type":"adverb","translation":"\u0443 \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0443","description":"\u0443 \u043D\u0430\u043F\u0440\u044F\u043C\u043A\u0443 \u0447\u043E\u0433\u043E\u0441\u044C"},{"id":"213","expression":"around","type":"adverb","translation":"\u043D\u0430\u0432\u043A\u043E\u043B\u043E","description":"\u0443 \u043A\u043E\u043B\u0456 \u0430\u0431\u043E \u043D\u0430\u0432\u043A\u043E\u043B\u043E \u0447\u043E\u0433\u043E\u0441\u044C"},{"id":"214","expression":"over","type":"adverb","translation":"\u043D\u0430\u0434","description":"\u0437\u0432\u0435\u0440\u0445\u0443 \u0430\u0431\u043E \u043D\u0430\u0434 \u0447\u0438\u043C\u043E\u0441\u044C"},{"id":"215","expression":"overseas","type":"adverb","translation":"\u0437\u0430 \u043A\u043E\u0440\u0434\u043E\u043D\u043E\u043C","description":"\u0437\u0430 \u043C\u0435\u0436\u0430\u043C\u0438 \u043C\u043E\u0440\u0456\u0432; \u0437\u0430 \u043A\u043E\u0440\u0434\u043E\u043D\u043E\u043C"},{"id":"216","expression":"away","type":"adverb","translation":"\u0433\u0435\u0442\u044C","description":"\u043D\u0430 \u0432\u0456\u0434\u0441\u0442\u0430\u043D\u0456 \u0430\u0431\u043E \u0432 \u0456\u043D\u0448\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456"},{"id":"217","expression":"upstairs","type":"adverb","translation":"\u043D\u0430\u0433\u043E\u0440\u0456","description":"\u043D\u0430 \u0432\u0435\u0440\u0445\u043D\u044C\u043E\u043C\u0443 \u043F\u043E\u0432\u0435\u0440\u0441\u0456"},{"id":"218","expression":"downstairs","type":"adverb","translation":"\u0432\u043D\u0438\u0437\u0443","description":"\u043D\u0430 \u043D\u0438\u0436\u043D\u044C\u043E\u043C\u0443 \u043F\u043E\u0432\u0435\u0440\u0441\u0456"},{"id":"219","expression":"deeply","type":"adverb","translation":"\u0433\u043B\u0438\u0431\u043E\u043A\u043E","description":"\u0434\u0443\u0436\u0435 \u0441\u0438\u043B\u044C\u043D\u043E \u0430\u0431\u043E \u0456\u043D\u0442\u0435\u043D\u0441\u0438\u0432\u043D\u043E"},{"id":"220","expression":"next-door","type":"adverb","translation":"\u043F\u043E\u0440\u044F\u0434","description":"\u0443 \u0441\u0443\u0441\u0456\u0434\u043D\u044C\u043E\u043C\u0443 \u043C\u0456\u0441\u0446\u0456 \u0430\u0431\u043E \u0431\u0443\u0434\u0438\u043D\u043A\u0443"},{"id":"221","expression":"along with","type":"phrase","translation":"\u0440\u0430\u0437\u043E\u043C \u0456\u0437","description":"\u0440\u0430\u0437\u043E\u043C \u0437 \u043A\u0438\u043C\u043E\u0441\u044C \u0430\u0431\u043E \u0447\u0438\u043C\u043E\u0441\u044C"},{"id":"222","expression":"to train","type":"verb","translation":"","description":"\u041D\u0435\u043C\u0430\u0454 \u043E\u043F\u0438\u0441\u0443"},{"id":"223","expression":"since","type":"conjunction","translation":"\u0442\u043E\u043C\u0443 \u0449\u043E, \u043F\u043E \u043F\u0440\u0438\u0447\u0438\u043D\u043D\u0456, for the reason that, because","description":"\u0442\u043E\u043C\u0443 \u0449\u043E; \u0447\u0435\u0440\u0435\u0437 \u0442\u0435 \u0449\u043E"}]');

},{}],"lVDZ7":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5SNUE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>openWordModal);
var _vars = require("../vars");
const { modal, modalContent, modalAddBtn } = (0, _vars.elements);
const { storage } = (0, _vars.vars);
function openWordModal(word) {
    const { expression, type, description, translation, id } = word;
    const favoriteWords = storage.getItem() || [];
    const isFavoriteWord = favoriteWords.some((wordId)=>wordId === id);
    modal.classList.add("active");
    modalAddBtn.dataset.wordId = id;
    if (isFavoriteWord) modalAddBtn.innerHTML = "Remove";
    else modalAddBtn.innerHTML = "Add";
    modalContent.innerHTML = `
        <h2>${expression}</h2>
        <p><span style="user-select: none;">[<span class="${type.includes("_") ? type.split("_").join(" ") : type}">${type}</span>] ${id}</span></p>
        <p style="margin-top: 10px;">${translation}</p>
        <hr />
        <p>${description}</p>
        <button style="margin-top: 20px;" class="app-button modal-button-ai-gen">Give me examples</button>
        <p style="margin-top: 20px;" class="modal-gen-text"></p>
          `;
}

},{"../vars":"cMx9g","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"8Uc4U":[function(require,module,exports,__globalThis) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"igAVF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getFavoriteWordsFrom", ()=>getFavoriteWordsFrom);
parcelHelpers.export(exports, "getResembledWords", ()=>getResembledWords);
parcelHelpers.export(exports, "renderFilteredWords", ()=>renderFilteredWords);
var _varsJs = require("../vars.js");
var _wordComponentJs = require("../components/WordComponent.js");
var _wordComponentJsDefault = parcelHelpers.interopDefault(_wordComponentJs);
const { wordsInstance, storage, filters } = (0, _varsJs.vars);
const { dictionaryListElement, wordsCountEl } = (0, _varsJs.elements);
function getFavoriteWordsFrom(words, filters) {
    const favoriteWordsId = storage.getItem() || [];
    const favWords = favoriteWordsId.map((id)=>wordsInstance.getWordById(id));
    if (filters.favorite) words = [
        ...new Set([
            ...words,
            ...favWords
        ])
    ];
    else words = words.filter(({ id: filteredWordId })=>!favWords.some(({ id: favoriteWordId })=>filteredWordId === favoriteWordId));
    return words;
}
function getResembledWords(searchTerm) {
    const wordsArray = searchTerm.split(",");
    let filteredWords = [
        ...new Set(wordsArray.map((word)=>wordsInstance.getWordsByContains(word.trimLeft(), filters)).flat())
    ];
    return filteredWords;
}
function renderFilteredWords(searchTerm) {
    let filteredWords = getFavoriteWordsFrom(getResembledWords(searchTerm), filters);
    dictionaryListElement.innerHTML = '';
    const lis = filteredWords.map((word)=>{
        const li = document.createElement("li");
        li.appendChild((0, _wordComponentJsDefault.default)(word));
        return li;
    });
    lis.forEach((li)=>dictionaryListElement.appendChild(li));
    wordsCountEl.innerHTML = filteredWords.length;
}

},{"../vars.js":"cMx9g","../components/WordComponent.js":"469m0","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"469m0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>WordComponent);
var _vars = require("../vars");
const { storage } = (0, _vars.vars);
function WordComponent(word, callback = ()=>{}) {
    const { id, type, expression } = word;
    // <span class="word-component-wrapper"></span>
    const wordComponentWrapper = document.createElement("span");
    // <span data-id="123" class="word-expression">to feel free</span>
    const wordExpression = document.createElement("span");
    wordExpression.dataset.id = id;
    wordExpression.classList.add("word-expression");
    wordExpression.innerText = expression;
    // <span style="user-select: none;"></span>
    const extra = document.createElement("span");
    extra.style.userSelect = "none";
    extra.innerText += " ";
    // <span class="verb phrase">verb_phrase</span>
    const wordType = document.createElement("span");
    const classes = type.includes("_") ? type.split("_").join(" ") : type;
    if (classes.includes(" ")) classes.split(" ").forEach((cls)=>{
        wordType.classList.add(cls);
    });
    else wordType.classList.add(classes);
    wordType.innerHTML = type;
    // <span style="user-select: none;"> [<span class="verb phrase">verb_phrase</span>] 123</span>
    extra.innerHTML += "[";
    extra.appendChild(wordType);
    extra.innerHTML += "] ";
    extra.innerHTML += id;
    // <span style="user-select: none;"> [<span class="verb phrase">verb_phrase</span>] 123 ⭐</span>
    const favoriteWordsIds = storage.getItem() || [];
    const isFavorite = favoriteWordsIds.some((favId)=>favId === id);
    extra.innerHTML += isFavorite ? `\u{2B50}` : "";
    wordComponentWrapper.appendChild(wordExpression);
    wordComponentWrapper.appendChild(extra);
    callback(wordComponentWrapper);
    return wordComponentWrapper;
}

},{"../vars":"cMx9g","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7TBPS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _trainWords = require("./TrainWords");
parcelHelpers.exportAll(_trainWords, exports);
var _trainGrammar = require("./TrainGrammar");
parcelHelpers.exportAll(_trainGrammar, exports);

},{"./TrainWords":"kClFL","./TrainGrammar":"5L6I4","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"kClFL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "initTrainWords", ()=>initTrainWords);
parcelHelpers.export(exports, "getNextWord", ()=>getNextWord);
parcelHelpers.export(exports, "TrainWords", ()=>TrainWords);
var _utils = require("../utils");
var _vars = require("../vars");
var _components = require("../components");
const { wordsInstance, trainWordsFilters } = (0, _vars.vars);
const { trainWordAllWordsElement, trainWordCurrentIndexElement, trainWordRandomWordElement } = (0, _vars.elements);
let filteredWords = [];
let currentWordIndex;
let inputValue, currentWord;
function foo(word) {
    trainWordRandomWordElement.innerHTML = "";
    trainWordRandomWordElement.appendChild((0, _components.WordComponent)(word));
}
function initTrainWords() {
    filteredWords = (0, _utils.getFavoriteWordsFrom)(wordsInstance.getWordsByTypes(trainWordsFilters), trainWordsFilters);
    currentWordIndex = 0;
    if (filteredWords.length > 0) {
        filteredWords.sort(()=>0.5 - Math.random());
        currentWord = filteredWords[currentWordIndex].translation.toLowerCase();
        trainWordAllWordsElement.innerHTML = filteredWords.length;
        trainWordCurrentIndexElement.innerHTML = currentWordIndex + 1;
        foo(filteredWords[currentWordIndex]);
    } else {
        trainWordAllWordsElement.innerHTML = 0;
        trainWordCurrentIndexElement.innerHTML = 0;
        trainWordRandomWordElement.innerHTML = "No words found";
    }
}
function getNextWord() {
    currentWordIndex = (currentWordIndex + 1) % filteredWords.length;
    trainWordCurrentIndexElement.innerHTML = currentWordIndex + 1;
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

},{"../utils":"9UsVm","../vars":"cMx9g","../components":"fGXnV","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fGXnV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "WordComponent", ()=>(0, _wordComponentDefault.default));
parcelHelpers.export(exports, "FilterComponent", ()=>(0, _filterComponentDefault.default));
var _wordComponent = require("./WordComponent");
var _wordComponentDefault = parcelHelpers.interopDefault(_wordComponent);
var _filterComponent = require("./FilterComponent");
var _filterComponentDefault = parcelHelpers.interopDefault(_filterComponent);

},{"./WordComponent":"469m0","./FilterComponent":"fm2wn","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fm2wn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>FilterComponent);
const filters = {
    noun: "Noun",
    verb: "Verb",
    adjective: "Adjective",
    adverb: "Adverb",
    verb_phrase: "Verb Phrase",
    phrasal_verb: "Phrasal Verb",
    noun_phrase: "Noun Phrase",
    adjective_phrase: "Adjective Phrase",
    phrase: "Phrase",
    proverb: "Proverb",
    conjunction: "Conjunction",
    adverbial_phrase: "Adverbial phrase",
    favorite: "Favorite"
};
let c = 0;
function FilterComponent(filtersObject, callback = ()=>{}) {
    // <div class="sub-container"></div>
    const div = document.createElement("div");
    div.classList.add("sub-container");
    // <ul class="app-list"></ul>
    const ul = document.createElement("ul");
    ul.classList.add("app-list");
    for(const filter in filters){
        // <li></li>
        const li = document.createElement("li");
        const id = filter + c;
        // <label for="noun">Noun </label>
        const label = document.createElement("label");
        label.setAttribute("for", id);
        label.innerText += filters[filter] + " ";
        // <input type="checkbox" checked id="noun" name="noun">
        const input = document.createElement("input");
        input.type = "checkbox";
        input.checked = true;
        input.id = id;
        input.name = filter;
        // <label for="noun">Noun <input type="checkbox" checked id="noun" name="noun"></label>
        label.appendChild(input);
        // <li><label for="noun">Noun <input type="checkbox" checked id="noun" name="noun"></label></li>
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
        filtersObject[filterCheck.name] = filterCheck.checked;
        filterCheck.addEventListener("change", (event)=>{
            const type = event.target.name;
            filtersObject[type] = event.target.checked;
            callback();
        });
    });
    let toggle = true;
    button.addEventListener("click", ()=>{
        inputs.forEach((filterCheck)=>{
            filtersObject[filterCheck.name] = !toggle;
            filterCheck.checked = !toggle;
        });
        toggle = !toggle;
        callback();
    });
    // <div class="sub-container"><ul class="app-list">...</ul></div>
    div.appendChild(ul);
    // <div class="sub-container"><ul class="app-list">...</ul><button class="app-button">Toggle All</button></div>
    div.appendChild(button);
    c++;
    return div;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"5L6I4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TrainGrammar", ()=>TrainGrammar);
var _ai = require("../ai");
var _aiDefault = parcelHelpers.interopDefault(_ai);
var _prompts = require("../../prompts");
const topics = [
    "Present simple and continuous",
    "Past simple and continuous",
    "Future simple and continuous",
    "Present perfect simple and continuous",
    "Past perfect simple and continuous",
    "Future perfect simple and continuous",
    "Irregular verbs",
    "Will, going to and present tenses for future",
    "Modal verbs can, may, must, have to",
    "Be able to",
    "Be allowed to",
    "Gerund and infinitive",
    "Imperative",
    "Passive voice",
    "Conditional tense",
    "Conditional sentences (if-clauses)",
    "Time clauses",
    "Relative clauses",
    "Direct and indirect object",
    "Indirect questions",
    "Question tags",
    "Reported speech",
    "Nouns"
];
function TrainGrammar() {
    const trainGrammarTestSelect = document.querySelector(".train-grammar-test-select");
    topics.forEach((topic)=>{
        // <option value="topic">topic</option>
        const option = document.createElement("option");
        option.value = topic;
        option.innerText = topic;
        trainGrammarTestSelect.appendChild(option);
    });
    const generativeButtons = document.querySelector(".train-grammar-test-generate-button");
    const trainGrammarTestBoxes = document.querySelector(".train-grammar-test-box");
    generativeButtons.addEventListener("click", ()=>{
        const topic = trainGrammarTestSelect.value;
        const prompt = (0, _prompts.aiTrainingGrammarPrompt)(topic);
        generativeButtons.disabled = true;
        trainGrammarTestBoxes.innerHTML = "Loading...";
        (0, _aiDefault.default)(prompt).then((message)=>{
            generativeButtons.disabled = false;
            trainGrammarTestBoxes.innerHTML = message;
        });
    });
}

},{"../ai":"jXISu","../../prompts":"lW7A1","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["6DHTQ","6kb64"], "6kb64", "parcelRequire94c2", {})

//# sourceMappingURL=language-app.6528c13b.js.map
