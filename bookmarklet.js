(function(){
    
    var initialize = function() {
        load_jq();
    };

    //load jQuery
    var load_jq = function() {
        // the minimum version of jQuery we want
        var v = "1.7.1";
        // check prior inclusion and version
        if ( window.jQuery === undefined || window.jQuery.fn.jquery < v ) {
            var done_jq = false;
            var script_jq = document.createElement("script");
            script_jq.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
            script_jq.onload = script_jq.onreadystatechange = function(){
                if ( !done_jq && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") ) {
                    done_jq = true;
                    load_rt();
                }
            };
            document.getElementsByTagName("head")[0].appendChild(script_jq);
        } else {
            load_rt();
        }
    };
    
    // load replaceText
    var load_rt = function() {
        // check and include replaceText plugin
        if ( window.jQuery().replaceText === undefined) {
            var done_rt = false;
            var script_rt = document.createElement("script");
            script_rt.src = "https://raw.github.com/cowboy/jquery-replacetext/master/jquery.ba-replacetext.min.js";
            script_rt.onload = script_rt.onreadystatechange = function(){
                if ( !done_rt && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") ) {
                    done_rt = true;
                    bookmarklet();
                }
            };
            document.getElementsByTagName("head")[0].appendChild(script_rt);
        } else {
            bookmarklet();
        }
    };
   
    // initialize bookmarklet
	function bookmarklet() {
        (window.bookmarklet = function(jQuery) {
            
            var $ = jQuery;
            
            ///////////////////////////////////
            // beginning of bookmarklet code //
            ///////////////////////////////////
            
            // dictionary declaration //
            
            // atypical romanization
            var phrasemap = {
                'ভাষা':'bhaasha'
            };
            
            // composite glyphs
            var compmap = {
                'স্ব: 'sw',
                'য়':'y',
                '৷৷':'.',
            };

            // standard glyphs
            var charmap = {    
                ' ':' ',
                'অ':'o',
                'আ':'a',
                'ই':'i',
                'ঈ':'ee',
                'উ':'u',
                'ঊ':'u',
                'ঋ':'ri',
                'এ':'e',
                'ঐ':'oi',
                'ও':'o',
                'ঔ':'ou',
                'া':'a',
                'ি':'i',
                'ী':'ee',
                'ু':'u',
                'ূ':'u',
                'ৃ':'ri',
                'ে':'e',
                'ৈ':'oi',
                'ো':'o',
                'ৌ':'ou',
                'ক':'k',
                'খ':'kh',
                'গ':'g',
                'ঘ':'gh',
                'ঙ':'ng',
                'চ':'ch',
                'ছ':'chh',
                'জ':'j',
                'ঝ':'jh',
                'ঞ':'y',
                'ট':'t',
                'ঠ':'th',
                'ড':'d',
                'ঢ':'dh',
                'ণ':'n',
                'ত':'t',
                'থ':'th',
                'দ':'d',
                'ধ':'dh',
                'ন':'n',
                'প':'p',
                'ফ':'f',
                'ব':'b',
                'ভ':'bh',
                'ম':'m',
                'য':'j',
                'র':'r',
                'ল':'l',
                'শ':'sh',
                'ষ':'sh',
                'স':'s',
                'হ':'h',
                'ড়':'r',
                'ঢ়':'rh',
                'য়':'y',
                'ৎ':'t',
                'ং':'ng',
                'ঃ':'h',
                '্য':'y',
                '্র':'r',
                '্':'',
                '়':'',
                '০':'0',
                '১':'1',
                '২':'2',
                '৩':'3',
                '৪':'4',
                '৫':'5',
                '৬':'6',
                '৭':'7',
                '৮':'8',
                '৯':'9',
                '৷':'.',
            };
            
            // conversion //
            
            // get raw html, for now
            var text = $('body *');
            
            // do the astral plane!
            var u;
            for ( u in phrasemap )
                text.replaceText(RegExp(u, 'g'), phrasemap[u]);
            for ( u in compmap )
                text.replaceText(RegExp(u, 'g'), compmap[u]);
            for ( u in charmap )
                text.replaceText(RegExp(u, 'g'), charmap[u]);
            
            /////////////////////////////
            // end of bookmarklet code //
            /////////////////////////////
            
        })(jQuery);
    }
    
    initialize();

})();