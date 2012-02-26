(function(){

	// the minimum version of jQuery we want
    var v = "1.7.1";

	// check prior inclusion and version
	if ( window.jQuery === undefined || window.jQuery.fn.jquery < v ) {
		var done = false;
		var script = document.createElement("script");
		script.src = "http://ajax.googleapis.com/ajax/libs/jquery/" + v + "/jquery.min.js";
		script.onload = script.onreadystatechange = function(){
			if ( !done && (!this.readyState || this.readyState == "loaded" || this.readyState == "complete") ) {
				done = true;
				bookmarklet();
			}
		};
		document.getElementsByTagName("head")[0].appendChild(script);
	} else {
		bookmarklet();
	}

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
            var text = $('#content').html();
            
            // do the astral plane!
            var u;
            for ( u in phrasemap )
                text = text.replace(RegExp(u, 'g'), phrasemap[u]);
            for ( u in compmap )
                text = text.replace(RegExp(u, 'g'), compmap[u]);
            for ( u in charmap )
                text = text.replace(RegExp(u, 'g'), charmap[u]);
            
            // replace raw html
            $('#content').html(text);
            
            /////////////////////////////
            // end of bookmarklet code //
            /////////////////////////////
            
        })(jQuery);
    }

})();