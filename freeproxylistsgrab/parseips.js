(function(){
 remote("grepFreeproxylists", document.getElementsByClassName('DataGrid')[0].innerHTML, function(result) {
  if (result.error) {
   alert(result.error.message);
   return;
  }
  alert("done");
 });
})();