uBN2rBN
=======

This is a bookmarklet that converts Bengali text written in the usual
Unicode Eastern nagari script (which we like to call uBN, for Unicode Bengali)
to a romanized version following a "standard" we like to call Romaji-Bangla
(or rBN).

If a system is incapable of displaying Unicode Bengali, or if a person is more comfortable with or just wants to read romanized Bengali, this bookmarklet can help.

Use
---

Drag [this link](javascript:(function(){  var throbber = document.createElement('div');   throbber.id = 'ubn2rbnthrobber';   throbber.innerHTML = 'please wait';   throbber.style.cssText = 'position: absolute; top: 0; bottom: 0; left: 0; right: 0; background: rgba(255, 255, 255, 0.5); text-shadow: 0 0 10px white; font-size: 64px; text-align: center; padding-top: 17%;';   document.body.appendChild(throbber);})(); (function(){  document.body.appendChild(document.createElement('script')).src='https://raw.github.com/5310/ubn2rbn/master/bookmarklet.js';})();) to your bookmarklets folder, and then invoke that bookmark while a page you wish to convert is open.

Caveats
-------

The actual code is separated from the bookmarklet-link, and as such, it only works online.

This was the authors' first bookmarklet, and hence is guaranteed to be...inelegant, at the very least.

Limitations
-----------

Bengali is a rather phonetically complex language, and not particularly consistent. And as such, there are many words that are pronounced differently than their spelling. The only way to alleviate this is to build a dictionary of common inconsistencies. The bookmarklet allows that, but does not yet contain one such dictionary.

Licence
-------

Copyright (C) 2012 [Sayantan Chaudhuri](https://github.com/5310), [Anamitra Saha](https://github.com/oni64)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.