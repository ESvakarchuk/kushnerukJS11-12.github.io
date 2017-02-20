$(function() {

  $().mySlider();

  // Template data.
    var dataObject = {
      images:[
      {src:"google.com", text:"Beautiful beach"},
      {src:"google.com", text:"Fabulous waterfall"},
      {src:"google.com", text:"Green meadow"},
      {src:"google.com", text:"Beautiful beach (copy)"},
      {src:"google.com", text:"Fabulous waterfall (copy)"},
      {src:"google.com", text:"Green meadow (copy)"},
      {src:"google.com", text:"Beautiful beach (copy)"},
      {src:"google.com", text:"Fabulous waterfall (copy)"},
      {src:"google.com", text:"Green meadow (copy)"},
      {src:"google.com", text:"Beautiful beach (copy)"},
      {src:"google.com", text:"Fabulous waterfall (copy)"},
      {src:"google.com", text:"Green meadow (copy)"}
      ]
    };

    var results = document.getElementById("results");
    results.innerHTML = tmpl("item_tmpl", dataObject);

});
