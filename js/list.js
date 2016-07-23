$.getJSON("designs.json", function(data) {
  $("#switch-listMode").click(function() {
    $("#fullscreen-view-container").toggleClass("hidden");
    $("#list-view-container").toggleClass("hidden");
    $("#postNav").toggleClass("hidden");

    //Generate all of the cards
    var maxVisible = 6;
    var cardCount = data.length;
    var cardImg = "";
    var cardName = "";
    var cardLink = "";
    var cardSplit ="";
    for (var i = 0; i < cardCount; i++) {
      var pageNumb = Math.ceil((i + 1) / 6);
      cardName = data[i].name;
      cardImg = data[i].photo;
      cardSplit = data[i].split;
      var card = '<div class="col-sm-4"><div class="card card-list-view" page-numb="' + pageNumb + '"><div class="col-xs-12 card-list-view-img"><a class="btn btn-danger btn-fab card-link-btn"><i class="material-icons">zoom_out_map</i></a><img src="' + cardImg + '"></div><div class="col-xs-12"><h4>' + cardName + ' - ' + '<span>' + cardSplit + '%' + '</span>' + '</h4></div></div></div>';
      if (i < maxVisible) {
        $("#list-view-container").append(card);
      } else {
        card = '<div class="col-sm-4"><div class="card card-list-view hidden" page-numb="' + pageNumb + '"><div class="col-xs-12 card-list-view-img"><a class="btn btn-danger btn-fab card-link-btn"><i class="material-icons">zoom_out_map</i></a><img src="' + cardImg + '"></div><div class="col-xs-12"><h4>' + cardName + ' - ' + '<span>' + cardSplit + '%' + '</span>' + '</h4></div></div></div>';
        $("#list-view-container").append(card);
      }
    }

    //init navigation variables
    var current = 1;
    var max = data.length;
    var id = data[0].id;
    var created = data[0].created;
    var name = data[0].name;
    var photo = data[0].photo;
    var split = data[0].split;
    //Init card nav bootpag
    $('#cardNav').bootpag({
      total: Math.ceil(max / 6),
      page: current,
      maxVisible: 5,
      href: "#pro-page-{{number}}",
      leaps: false,
      next: '<i class="material-icons fa fa-chevron-right"></i>',
      prev: '<i class="material-icons fa fa-chevron-left"></i>'
    }).on('page', function(event, num) {
      $( ".card-list-view[page-numb='" + num + "']" ).removeClass('hidden');
      $( ".card-list-view[page-numb!='" + num + "']" ).addClass('hidden');
    });
  });
});
