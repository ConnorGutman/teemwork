$.getJSON("designs.json", function(data) {
  console.log(data[0].id);

  //init global variables
  var current = 1;
  var max = data.length;
  var id = data[0].id;
  var created = data[0].created;
  var name = data[0].name;
  var description = data[0].description;
  var split = data[0].split;
  var photo = data[0].photo;
  var facebook = data[0].facebook;
  var twitter = data[0].twitter;
  var gplus = data[0].gplus;
  var instagram = data[0].instagram;

  //Assign initial variable values to html
  $('#design-name-val').html(name);
  $('#design-description-val').html(description);
  $('#design-split-val').html(split);
  $('#fullscreen-photo').attr("src", photo);
  $('#referralLink').val('http://teemwork.io/' + id + "&ref=" + "connor");

  // init fullscreen nav bootpag
  $('#postNav').bootpag({
    total: max,
    page: current,
    maxVisible: 6,
    href: "#pro-page-{{number}}",
    leaps: false,
    next: '<i class="material-icons fa fa-chevron-right"></i>',
    prev: '<i class="material-icons fa fa-chevron-left"></i>'
  }).on('page', function(event, num) {
    //Assign JSON values to variables
    num = num-1;
    id = data[num].id;
    created = data[num].created;
    name = data[num].name;
    description = data[num].description;
    split = data[num].split;
    photo = data[num].photo;
    facebook = data[num].facebook;
    twitter = data[num].twitter;
    gplus = data[num].gplus;
    instagram = data[num].instagram;
    //Update HTML to match values
    var checkDots = $( ".pagination > li:nth-child(8) > *" ).text().slice(-1);
    if(checkDots !== ".") {
    $( ".pagination > li:nth-child(8) > *" ).append("...");
    }
    $('#fullscreen-photo').attr("src", photo);
    $('#design-name-val').html(name);
    $('#design-description-val').html(description);
    $('#design-split-val').html(split);
    $('#referralLink').val('http://teemwork.io/' + id + "&ref=" + "connor");
  });

  //Assign variables

  //Pagination ...
  $( ".pagination > li:nth-child(7) > *" ).append("...");

  //Custom prev/next controls
  $("#previousDesign").click(function() {
      if($('#postNav').hasClass("hidden")) {
        $("#cardNav > ul > .prev").click();
        $("#postNav > ul > .prev").click();
        $("#postNav > ul > li:nth-of-type(2)").click();
      } else {
      $("#postNav > ul > .prev").click();
      }
  });

  $("#nextDesign").click(function() {
    if($('#postNav').hasClass("hidden")) {
      if(!$('#cardNav > ul > .next').hasClass("disabled")) {
      $("#cardNav > ul > .next").click();
      $("#postNav > ul > li:nth-last-child(2)").click();
      $("#postNav > ul > .next").click();
      }
    } else {
    $("#postNav > ul > .next").click();
    }
  });
});
