(function(){
 if (!location.href.search('sec=sesiones') == -1) {
  return;
 }
 var container = document.getElementsByTagName('tbody')[0].firstElementChild.firstElementChild;
 var us = container.firstChild.nodeValue.trim();
 var ip1 = document.getElementsByClassName("tipo1");
 var ip2 = document.getElementsByClassName("tipo2");
 var getip = function(tr) {
  return tr.firstElementChild.nextElementSibling.nextElementSibling.nextElementSibling.firstChild.nodeValue;
 };
 var getuser = function(tr) {
  if (!tr.firstElementChild.firstElementChild.firstChild.nodeValue) {
   debugger;
  }
  return tr.firstElementChild.firstElementChild.firstChild.nodeValue;
 };
 var problems = {};
 var problem = document.createElement('span');
 problem.style.color="#ff0000";
 container.appendChild(problem);
 var setProblem = function(text) {
  if (problems[text]) return;
  problem.innerText = problem.innerText + "," + text;
  problems[text] = 1;
 }
 var x = [ip1, ip2], tests = [];
 for (var v = 0; v <= 1; v++) {
  for (var i in x[v]) {
   var p = x[v][i];
   try {
    var ip = getip(p);
   } catch (e) {
    continue;
   }
   var user = getuser(p);
   if (user != us) {
    continue;
   }
   // check ip here
   if (isOperaMini(ip)) {
    setProblem("Opera Mini");
    continue;
   }
   if (isHideMyAssIPs(ip)) {
    setProblem("HideMyAss!");
    continue;
   }
   if (ip == '193.200.150.125') {
    setProblem('Anonymouse');
    continue;
   }
   tests.push(ip);
  }
 }
 // check the remote list
 if (!tests.length) return;
 remote("checkMultiple", tests, function(result) {
  if (result.error) {
   alert(result.error.message);
   return;
  }
  for (var i = 0;i < result.params.length; i++) {
   setProblem(result.params[i].type);
  }
 });
})();