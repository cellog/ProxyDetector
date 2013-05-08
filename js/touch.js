var checkZoom;
function setCheckZoom(check) {
  checkZoom = check;
}
function simulateTouchEvents(oo,bIgnoreChilds)
{
 if( !$(oo)[0] )
  { return false; }

 if( !window.__touchTypes )
 {
   window.__touchTypes  = {touchstart:'mousedown',touchmove:'mousemove',touchend:'mouseup'};
   window.__touchInputs = {INPUT:1,TEXTAREA:1,SELECT:1,OPTION:1,'input':1,'textarea':1,'select':1,'option':1};
 }

$(oo).bind('touchstart touchmove touchend', function(ev)
{
    var bSame = (ev.target == this);
    if( bIgnoreChilds && !bSame )
     { return; }

    var b = (!bSame && ev.target.__ajqmeclk), // Get if object is already tested or input type
        e = ev.originalEvent;
    if( b === true || !e.touches || e.touches.length > 1 || !window.__touchTypes[e.type]  )
     { return; } //allow multi-touch gestures to work

     checkZoom();
    var oEv = ( !bSame && typeof b != 'boolean')?$(ev.target).data('events'):false,
        b = (!bSame)?(ev.target.__ajqmeclk = oEv?(oEv['click'] || oEv['mousedown'] || oEv['mouseup'] || oEv['mousemove']):false ):false;

    if( b || window.__touchInputs[ev.target.tagName] )
     { return; } //allow default clicks to work (and on inputs)

    // https://developer.mozilla.org/en/DOM/event.initMouseEvent for API
    var touch = e.changedTouches[0], newEvent = document.createEvent("MouseEvent");
    newEvent.initMouseEvent(window.__touchTypes[e.type], true, true, window, 1,
            touch.pageX, touch.pageY,
            touch.pageX, touch.pageY, false,
            false, false, false, 0, null);

    touch.target.dispatchEvent(newEvent);
    e.preventDefault();
    if (ev.stopImmediatePropagation) ev.stopImmediatePropagation();
    ev.stopPropagation();
    ev.preventDefault();
});
 return true;
};