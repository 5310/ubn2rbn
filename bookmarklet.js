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
                    load_ws();
                }
            };
            document.getElementsByTagName("head")[0].appendChild(script_rt);
        } else {
            load_ws();
        }
    };
    
    // load wrapSelection
    var load_ws = function() {
        // check and include wrapSelection plugin
        if ( window.jQuery().wrapSelection === undefined) {
            var done_ws = false;
            var script_ws = document.createElement("script");
            script_ws.src = "https://raw.github.com/tzicatl/jquery.wrapSelection/master/jquery.wrapSelection.js";
            script_ws.onload = script_ws.onreadystatechange = function(){
                if ( !done_ws && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") ) {
                    done_ws = true;
                    bookmarklet();
                }
            };
            document.getElementsByTagName("head")[0].appendChild(script_ws);
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
                'স্ব': 'sw'
            };

            // standard glyphs
            var charmap = {    
                ' ':' ',
                'ব':'b',
                'া':'a',
                'ং':'ng',
                'ল':'l',
                'ভ':'bh',
                'ষ':'sh'
            };
            
            // conversion //
            
            // get raw html, for now
            var text = $('#content *');
            
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