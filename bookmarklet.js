(function(){
    
    var initialize = function() {
        load_jq();
    };
    
    /* This is being done by the bookmarklet script in the link directly
    //show throbber
    var show_throbber = function() {
    var throbber = document.createElement('div');
	throbber.id = 'ubn2rbnthrobber';
	throbber.innerHTML = "please wait";
	throbber.style.cssText = "position: absolute; top: 0; bottom: 0; left: 0; right: 0; background: rgba(255, 255, 255, 0.5); text-shadow: 0 0 10px white; font-size: 64px; text-align: center; padding-top: 17%;";
	document.body.appendChild(throbber);
	load_jq();
    };*/

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
            
            
            // onigorithmic special cases
            var specialcase = [
                [ /([^\s.,:;!?\+\*\/-\\_\'\"্])([^ত])([\s.,:;!?\+\*\/-\\_\'\"])/g, "$1$2"+"্"+"$3"],
                [ /([ািীুূে])(ত)([^\s.,:;!?\+\*\/-\\_\'\"])/g , "$1$2"+"্"+"$3"]
            ];
            
            
            // dictionary declaration //
            
            // atypical romanization
            var phrasemap = {
                'ভাষা':'bhaasha'
            };
            
            // composite glyphs
            var compmap = {
                'য়':'yô',
                'ড়':'rô',
                'ঢ়':'rhô',
                '্য':'`yô',	// Haxxored!	
                //'o্র':'ro',	// Test to see if this really isn't needed.
                'স্ব':'swô',
                'ঞা':'ya',
                'ঙ্গ':'ngô',
                '৷৷':'.',
                '।।':'.'
            };

            // standard glyphs
            var charmap = {
                'অ':'ô',
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
                'ক':'kô',
                'খ':'khô',
                'গ':'gô',
                'ঘ':'ghô',
                'ঙ':'ng',
                'চ':'chô',
                'ছ':'chhô',
                'জ':'jô',
                'ঝ':'jhô',
                'ঞ':'n',
                'ট':'tô',
                'ঠ':'thô',
                'ড':'dô',
                'ঢ':'dhô',
                'ণ':'nô',
                'ত':'tô',
                'থ':'thô',
                'দ':'dô',
                'ধ':'dhô',
                'ন':'nô',
                'প':'pô',
                'ফ':'phô',
                'ব':'bô',
                'ভ':'bhô',
                'ম':'mô',
                'য':'jô',
                'র':'rô',
                'ল':'lô',
                'শ':'shô',
                'ষ':'shô',
                'স':'sô',
                'হ':'hô',
                'ড়':'rô',
                'ঢ়':'rhô',
                'য়':'yô',
                'ৎ':'t',
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
                '।':'.'
            };
            
            var hackmap = {
            	'ôyyô':'yô', // Second half of the hack from `compmap`
            	'`':''
            };
            
            var accentmap = {
                'ôা':'a',
                'ôি':'i',
                'ôী':'ee',
                'ôু':'u',
                'ôূ':'u',
                'ôৃ':'ri',
                'ôে':'e',
                'ôৈ':'oi',
                'ôো':'o',
                'ôৌ':'ou',
                'ং':'ng',
                'ঃ':'h',
                'ঁ':'n',
                'ô্':'',
                '়':'',
                '্':'',
            };
            
            
            // conversion //

            // get selector to replaceText() on
            var text = $('body * :not(script)');
            
            for(var i=0; i<specialcase.length; i++)
                text.replaceText(specialcase[i][0], specialcase[i][1]);  
            
            // do the astral plane!
            var u;
            for ( u in phrasemap )
                text.replaceText(RegExp(u, 'g'), phrasemap[u]);
            for ( u in compmap )
                text.replaceText(RegExp(u, 'g'), compmap[u]);
            for ( u in charmap )
                text.replaceText(RegExp(u, 'g'), charmap[u]);
            for ( u in hackmap )
                text.replaceText(RegExp(u, 'g'), hackmap[u]);
            for ( u in accentmap )
                text.replaceText(RegExp(u, 'g'), accentmap[u]);

            
            /////////////////////////////
            // end of bookmarklet code //
            /////////////////////////////
            
            hide_throbber(jQuery);
            
        })(jQuery);
    }
    
    //hide throbber
    var hide_throbber = function(jQuery) {
        var $ = jQuery;
        $('#ubn2rbnthrobber').remove();
    };
    
    initialize();

})();