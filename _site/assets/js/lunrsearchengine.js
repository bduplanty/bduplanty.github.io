
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/404.html",
    "title": "404",
    "body": "404 Page does not exist!Please use the search bar at the top or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/about",
    "title": "About Me...",
    "body": "I am a lifelong educator, saxophonist, former director of bands, a licensed amateur radio operator since 1988, former BBS operator, dabbler in coding… "
    }, {
    "id": 2,
    "url": "http://localhost:4000/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/",
    "title": "Home",
    "body": "      Featured:                                                                                                                                                                                                           Test                              :               Test:                                                                                                                                                                       Bruce                                20 Nov 2021                                                                                                                                                          All Stories:                                                                                                     Test              :       Test:                                                                               Bruce                20 Nov 2021                                                                                                                                     To Excel              :       To excel is to continally perform.  Not for a moment or moments.  But to perform day after day, month after month, and to make that uncommon performance look commonplace. :                                                                               Bruce                01 Aug 2019                                                                                                                                     Deming and Data              :       Without data you’re just another person with an opinion. :                                                                               Bruce                22 Feb 2017                                                                                                                                     Everyone Can Draw              :       :                                                                               Bruce                21 Jun 2016                                                                                                                                     Arizona State Seal              :       Arizona State Seal on a building in the capitol complex. :                                                                               Bruce                11 Mar 2016                                                                                                                                     Aglie Development              :       Agile Wiki Agile reference Agile 101 - Agile Alliance HBR Article - Embracing Agile:                                                                               Bruce                12 Jun 2015                                                         &laquo; Prev       1        2      Next &raquo;     "
    }, {
    "id": 4,
    "url": "http://localhost:4000/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 5,
    "url": "http://localhost:4000/page2/",
    "title": "Home",
    "body": "{% if page. url == “/” %}       Featured:       {% for post in site. posts %}    {% if post. featured == true %}      {% include featuredbox. html %}    {% endif %}  {% endfor %}  {% endif %}       All Stories:         {% for post in paginator. posts %}    {% include postbox. html %}    {% endfor %}              {% include pagination. html %}    "
    }, {
    "id": 6,
    "url": "http://localhost:4000/Test/",
    "title": "Test",
    "body": "2021/11/20 - TestThis is a test file. "
    }, {
    "id": 7,
    "url": "http://localhost:4000/to-excel/",
    "title": "To Excel",
    "body": "2019/08/01 - To excel is to continally perform.  Not for a moment or moments.  But to perform day after day, month after month, and to make that uncommon performance look commonplace. "
    }, {
    "id": 8,
    "url": "http://localhost:4000/deming-and-data/",
    "title": "Deming and Data",
    "body": "2017/02/22 - Without data you’re just another person with an opinion. -W. Edwards Demming, Data Scientist "
    }, {
    "id": 9,
    "url": "http://localhost:4000/everyonecandraw/",
    "title": "Everyone Can Draw",
    "body": "2016/06/21 - "
    }, {
    "id": 10,
    "url": "http://localhost:4000/arizonastateseal/",
    "title": "Arizona State Seal",
    "body": "2016/03/11 - Arizona State Seal on a building in the capitol complex. "
    }, {
    "id": 11,
    "url": "http://localhost:4000/agile-development/",
    "title": "Aglie Development",
    "body": "2015/06/12 - Agile Wiki Agile reference Agile 101 - Agile Alliance HBR Article - Embracing AgileTools:  kanboard - Self Hosted Taiga. io SCRUM tool Monday. comimage: Infographic vector created by freepik - www. freepik. com "
    }, {
    "id": 12,
    "url": "http://localhost:4000/retro-bbs-site/",
    "title": "Retro BBS",
    "body": "2015/06/03 - Rembmering the BBSes of the 80’s.  You can still get the source code and some folks have ported them to telnet access. Retro BBSes Retro up BBS: rdnetbbs. comRetroDigital Current BBS list and info:  telnet BBS Guide Wikipedia entrySource code of retro-style BBS system…: BBS Documentary image: https://arstechnica. com/gadgets/2014/01/modems-warez-and-ansi-art-remembering-bbs-life-at-2400bps/ "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow-lg" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-danger btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><br /><small><span class='body'>"+ body +"</span><br /><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});