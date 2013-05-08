var win = frames[0];
var doc = win.document;
function simulateTouchEvents(oo,bIgnoreChilds)
{
 if( !$(oo)[0] )
  { return false; }

 if( !win.__touchTypes )
 {
   win.__touchTypes  = {touchstart:'mousedown',touchmove:'mousemove',touchend:'mouseup'};
   win.__touchInputs = {INPUT:1,TEXTAREA:1,SELECT:1,OPTION:1,'input':1,'textarea':1,'select':1,'option':1};
 }

$(oo).bind('touchstart touchmove touchend', function(ev)
{
    var bSame = (ev.target == this);
    if( bIgnoreChilds && !bSame )
     { return; }

    var b = (!bSame && ev.target.__ajqmeclk),
        e = ev.originalEvent;
    if( b === true || !e.touches || e.touches.length > 1 || !win.__touchTypes[e.type]  )
     { return; }

    var oEv = ( !bSame && typeof b != 'boolean')?$(ev.target).data('events'):false,
        b = (!bSame)?(ev.target.__ajqmeclk = oEv?(oEv['click'] || oEv['mousedown'] || oEv['mouseup'] || oEv['mousemove']):false ):false;

    if( b || win.__touchInputs[ev.target.tagName] )
     { return; }

    var touch = e.changedTouches[0], newEvent = doc.createEvent('MouseEvent');
    newEvent.initMouseEvent(win.__touchTypes[e.type], true, true, win, 1,
            touch.screenX, touch.screenY,
            touch.clientX, touch.clientY, false,
            false, false, false, 0, null);

    touch.target.dispatchEvent(newEvent);
    e.preventDefault();
    if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
    ev.stopPropagation();
    ev.preventDefault();
});
 return true;
};

var f = doc.getElementsByClassName('jugador');
for (var i = 0; i < f.length; i++) {
	simulateTouchEvents(f[i]);
}
simulateTouchEvents(doc.getElementsByClassName('balon')[0]);
