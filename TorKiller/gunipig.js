(function()
 {
var remote = {
 encode: function(arr)
 {
  var ret = '';
  for (var i in arr) {
   if (ret) ret += '&';
   ret += i + "=" + encodeURIComponent(arr[i]);
  }
  return ret;
 },
 prepare: function(url, body, callback)
 {
  if (!body.substring) body = this.encode(body);
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function(response) {
   if (xhr.readyState == 4 && xhr.status == 200) {
    if (callback) {
     callback(xhr.responseText);
    }
   }
  };
  return [xhr, body];
 },
 get: function(url, params, callback)
 {
  var res = this.prepare(url, params, callback);
  var xhr = res[0];
  body = res[1];
  xhr.open("get", url + "?" + body, true);
  xhr.send();
 },
 getHTMLDocument: function(url, callback)
 {
  var res = this.prepare(url, "", this.makeDocument(callback));
  var xhr = res[0];
  xhr.open("get", url, true);
  xhr.send();
 },
 makeDocument: function(callback)
 {
  return function(response) {
   var doc = document.implementation.createHTMLDocument("stuff");
   doc.documentElement.innerHTML = response;
   if (callback) {
    callback(doc);
   }
  }
 }
};
  var complaints = remote.get("http://en.strikermanager.com/denuncias.php?correctas=0", "", function(result) {
   var eq = result.match(/sospechosos\.php\?id=11145889(&eq=(\d+))?/);
   if (!eq) {
    return;
   }
   var params = {
                           id: "11145889",
                           sec: "denuncias"
                          };
   if (eq[1]) {
    params.eq = eq[2];
   }
   var stuff = remote.get("/sospechosos.php",
                          params, function(res) {
                           var all = res.match(/href="denuncias\.php\?id=(\d+)&correcta=0">No<\/a><\/td>\s+<\/tr>\s+<tr class="tipo.">\s+<td colspan="2">&nbsp;<\/td>\s+<td colspan="1">Ha superado las 5000 peticiones en 1 día, posiblemente utiliza scripts.<\/td>/g);
                           for (var i=0;i<all.length;i++) {
                            var matchy = all[i].match(/href="denuncias\.php\?id=(\d+)&correcta=0">No<\/a><\/td>\s+<\/tr>\s+<tr class="tipo.">\s+<td colspan="2">&nbsp;<\/td>\s+<td colspan="1">Ha superado las 5000 peticiones en 1 día, posiblemente utiliza scripts.<\/td>/);
                            remote.get("/denuncias.php",
                                       {
                                        id: matchy[1],
                                        correcto: "0"
                                       });
                           }
                          });
  });
 })();