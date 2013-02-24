var session = 1,extreme_sm_debug = 0, sm_debug=1;
function remote(message, params, callback, blocking)
{
  blocking = !blocking ? true : false;
  var status = session;
  var json = {
    id: session++,
    message: message,
    params: params,
    apiversion: 1
  }
  json = JSON.stringify(json);
  var xhr = new XMLHttpRequest();
  if (blocking) xhr.onreadystatechange = function()
  {
    if (xhr.readyState == 4 && xhr.status == 200) {
     if (!xhr.responseText) {
      if (sm_debug) {
       alert("internal error: empty response");
      } else {
       console.log("internal error: empty response");
      }
      return;
     }
     try {
      if (sm_debug) console.log("received: " + xhr.responseText);
      var ret = JSON.parse(xhr.responseText);
      if (status == ret.id) {
        if (callback) callback(ret);
      }
     } catch (e) {
      if (sm_debug) {
        alert("internal JSON parsing error, text returned was: " + xhr.responseText);
      } else {
        console.log("internal JSON parsing error, text returned was: " + xhr.responseText);
      }
      throw e;
     }
    } else if (xhr.readyState == 4) {
     if (sm_debug) {
      alert("Error: returned status code " + xhr.status + " " + xhr.statusText);
     } else if (xhr.status) {
      console.log("Error: returned status code " + xhr.status + " " + xhr.statusText);
     }
    }
  }
  if (extreme_sm_debug) {
   if (sm_debug) console.log("extreme: message " + message + ", params " + JSON.stringify(params));
   xhr.open("POST", "http://localhost/fiscal/jsonrpc.php?XDEBUG_SESSION_START=XDEBUG_ECLIPSE", blocking);
  } else {
   if (sm_debug) console.log("normal: message " + message + ", params " + JSON.stringify(params));
   xhr.open("POST", "http://chiaraquartet.net/fiscal/jsonrpc.php", blocking);
  }
  xhr.setRequestHeader("Content-Type", "application/json");
  xhr.send(json);
  if (blocking) return;
  if (xhr.status == 200) {
   if (!xhr.responseText) {
    if (sm_debug) {
     alert("internal error: empty response");
    } else {
     console.log("internal error: empty response");
    }
    return;
   }
   try {
    if (sm_debug) console.log("received: " + xhr.responseText);
    var ret = JSON.parse(xhr.responseText);
    if (status == ret.id) {
      if (callback) callback(ret);
    }
   } catch (e) {
    if (sm_debug) {
      alert("internal JSON parsing error, text returned was: " + xhr.responseText);
    } else {
      console.log("internal JSON parsing error, text returned was: " + xhr.responseText);
    }
    throw e;
   }
  } else {
   if (sm_debug) {
    alert("Error: returned status code " + xhr.status + " " + xhr.statusText);
   } else if (xhr.status) {
    console.log("Error: returned status code " + xhr.status + " " + xhr.statusText);
   }
  }
}