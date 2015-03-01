# FirstPaintAddJS

This library enables you getting the first paint time via JavaScript API. Actually we already have a JavaScript API(window.performance.timing object) for performance auditing, but it doesn't have an interface to get first paint. This library tries to get that time and set it to the property 'firstPaint' of window.performance.timing object.

See this picture. In Web Standards, timing object doesn't have firstPaint property. This library does it.

![Timingオブジェクト](http://furoshiki.github.io/readme_img/001.jpg)

# How to use ?

Download this library and load it on your website like this.

    <script src="js/FirstPaintAdd.js></script>

Only IE9+ and Chrome can work. Safari, Firefox and Opera might not be implemented until the developer's adaption is changed.
