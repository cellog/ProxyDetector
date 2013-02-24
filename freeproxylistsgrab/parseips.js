(function(){
 remote("grepFreeproxylists", document.getElementsByClassName('DataGrid')[0].innerHTML, function(result) {
  alert("done");
 });
})();