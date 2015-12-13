/****************************************
 * FirstPaintSetter.js
 * Copyright (c) 2015 Hiroshi Kawada(@_furoshiki)
 * Released under the MIT license
 */
window.addEventListener
&& window.addEventListener("load",function(){
  var setFirstPaint = function(){
    if( ! window.performance ) {
      window.performance = {};
    }
    if( ! window.performance.timing ) {
      window.performance.timing = {};
    }

    // for Google Chrome
    if (window.chrome && window.chrome.loadTimes) {
      window.performance.timing.firstPaint =
        parseInt(window.chrome.loadTimes().firstPaintTime*1000);
      if( ! window.performance.timing.firstPaint ) {
        setTimeout(setFirstPaint,1000);
      }

    // for Microsoft Internet Explorer
    } else if ( window.performance.timing.msFirstPaint ) {
      window.performance.timing.firstPaint =
        window.performance.timing.msFirstPaint;
      if( ! window.performance.timing.firstPaint ) {
        setTimeout(setFirstPaint,1000);
      }

    // for Mozilla Firefox
    // } else if () { // no way to audit it
    }
  };
  setTimeout(setFirstPaint,0);
});
