/* DU3D browser chess engine loader.
 * Stockfish.js 19 lite single-threaded WebAssembly build.
 * The engine files are pinned to npm version 19.0.0 and loaded from jsDelivr.
 * This single-thread build avoids cross-origin isolation requirements.
 */
var DU3D_STOCKFISH_BASE = 'https://cdn.jsdelivr.net/npm/stockfish@19.0.0/bin/';
var Module = {
  locateFile: function (path) {
    return DU3D_STOCKFISH_BASE + path;
  }
};
importScripts(DU3D_STOCKFISH_BASE + 'stockfish-19-lite-single.js');
