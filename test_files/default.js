function showAlerta(mens)
{
	ww = $(window).width();
	wh = $(window).height();

	$('#textoalerta').html(mens);

	if(mens.length>80)
	{
		$('#mensajealerta .caja3').css("width", "400px");
	}

	mw = $('#mensajealerta').width();
	mh = $('#mensajealerta').height();

	l = Math.round((ww-mw)/2);
	t = Math.round((wh-mh)/2);

	$('#mensajealerta').css("padding","0").css("top", t+"px").css("left", l+"px").css("display","block");
}

function hideAlerta()
{
	$('#mensajealerta').css("display","none");
}

function noMenus(cadena)
{
	if(document.referrer.indexOf(".php")==-1)
		showAlerta(cadena);
}

var scrollpane = null;
function scrollf()
{
	scrollpane = $('#page').jScrollPane({showArrows:true, scrollbarWidth:13, animateInterval: 50, animateStep: 1, animateTo: true, maintainPosition: true});
	$('.page').jScrollPane({showArrows:true, scrollbarWidth:13, animateInterval: 50, animateStep: 1, animateTo: true, maintainPosition: true});
}


function leadZero(number)
{
	if(number<10) return '0'+number;
	else return number;
}

function initContainerOro()
{
	$(".container_oro").hover(function() {
		if ($(".hover_oro", this).css("display") == "block") { return false; }
		os = $(this).offset();
		
		w = $("body").width();
		if(w>1000) w = 1000;

		if($(this).parent(".jugadormenuflotante").length>0)
		{
			correc = $(this).parent(".jugadormenuflotante").offset().left+130;
			correct = -40;
		}else{
			correc = 0;
			correct = 0;
		}

		if(os.top<70)
		{
			min = 5;
			max = 25;
		}else{
			min = -53;
			max = -73;
		}
		l = os.left-29-correc;
		if(l+214>w)
		{
			l = w-214;
		}
		if(l<0)
		{
			l = -l;
		}
		$(".hover_oro", this).css({top: os.top+min+correct+"px", left: l+"px"}).animate({top: os.top+max+correct+"px", opacity: "show"}, 750);
	},
	function() {
		os = $(this).offset();
		if(os.top<50)
		{
			min = 5;
			max = 25;
		}else{
			min = -53;
			max = -73;
		}
		$(".hover_oro", this).animate({top: os.top+min+"px", opacity: "hide"}, 500);
	});
}

function initTableSorter()
{
	$('.sortable').tablesorter(
		{ 
			cssAsc: "sortasc",
			cssDesc: "sortdesc",
			widgets: ["zebra"],		
			widgetZebra: {css: ["tipo2","tipo1"]}

		}
	);
}

function disableSelect()
{
	
	//----------------- disable select

	// Internet Explorer:
	if (document.all)
	  document.onselectstart =
		function () { return false; };

	// Netscape 4:
	if (document.layers) {
	  document.captureEvents(Event.MOUSEDOWN);
	  document.onmousedown =
		function (evt) { return false; };
	}

	// Netscape 6:
	document.onmousedown = function () { return false; };

	//-----------------

}

var timeserver = 0;
var timezoneserver = -1;
var relojcallback = null;

function leadZero(number)
{
	if(number<10) return '0'+number;
	else return number;
}
/*
function setHoras(){
	var now = new Date();
	now.setTime(timeserver*1000);

	var fecha = dias_semana[now.getDay()]+", "+now.getDate();
	var hora = leadZero(now.getHours()) + ':' + leadZero(now.getMinutes());

	timeserver++;
	
	if($('#fecha').length>0)
	{
		$('#fecha').html(fecha);
		$('#hora').html(hora);

		setTimeout('setHoras()',1000);
	}
}
*/

function setHoras(){

	var now = new Date();
	var h = now.getTime()/1000;
	var local_off = (now.getTimezoneOffset() * 60000);
	var striker_off = timezoneserver* 1000;
	if (timezoneserver!=-1)
	{
			now.setTime(timeserver*1000 + local_off + striker_off); 
	}
	else
	{
			now.setTime(timeserver*1000); 
	}

	
	//alert(timeserver*1000 +"/"+ local_off +"/"+ striker_off + " : " + h);    
	
	var fecha = dias_semana[now.getDay()]+", "+now.getDate();
	var hora = leadZero(now.getHours()) + ':' + leadZero(now.getMinutes());

	
	timeserver++
	if($('#fecha').length>0)
	{
		$('#fecha').html(fecha);
		$('#hora').html(hora);
		
		if (relojcallback==null)
		{
			relojcallback = setInterval('setHoras()',1000);
		}
	}
}

function initOcultos()
{
	$('.oculto').mouseover(
		function()
		{
			$('.oculto').each(
				function(ind) 
				{
					$(this).html($(this).attr('contenido'));
				}
			);

			$.ajax({ 
			  type: "GET", 
			  url: "inicio2_avisos.php", 
			  data: "accion=partidooculto"
			});

		}
	);

/*	$('.oculto').mouseout(
		function()
		{
			$('.oculto').each(
				function(ind) 
				{
					$(this).html('?');
				}
			);
		}
	);*/
}

function initmenus()
{
	$(".menujugador").hover
	(
		function()
		{
			var obj = $(".jugadormenuflotante", this);
			if(obj.css('display')=='block') return false;
			obj.css("display", "block");
		},
		function()
		{
			var obj = $(".jugadormenuflotante", this);
			obj.css("display", "none");
		}
	);
}
