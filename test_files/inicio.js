var ultimo_mostrado = 0;
var id_equipo = 0;

function mostrarMenu(id)
{
	if(ultimo_mostrado==0)
	{
		$('#menu'+id).css("opacity", "1").css("display","block");
	}else{
		$('#menu'+id).css("opacity", "0").css("display","block").animate( { opacity: 1 }, 'fast');
	}

	ultimo_mostrado = id;

	$('#botonicono1').removeClass();
	$('#botonicono2').removeClass();
	$('#botonicono3').removeClass();
	$('#botonicono4').removeClass();

	$('#botonicono'+id).addClass('selected');
	
}

function alternarMenu(id)
{
	if(ultimo_mostrado>0)
	{
		$('#menu'+ultimo_mostrado).animate(
				{ opacity: 0}, 'fast', null, function()
			{
				$('#menu'+ultimo_mostrado)[0].style.display='none';
				mostrarMenu(id);
			}
		);
	}
}

function getCookieVal (offset) 
{
	var endstr = document.cookie.indexOf (";", offset);
	if (endstr == -1)
	endstr = document.cookie.length;
	return unescape(document.cookie.substring(offset, endstr));
}

function GetCookie (name) 

{
	var arg = name + "=";
	var alen = arg.length;
	var clen = document.cookie.length;
	var i = 0;
	while (i < clen) 
	{
		var j = i + alen;
		if (document.cookie.substring(i, j) == arg)
			return getCookieVal (j);
		i = document.cookie.indexOf(" ", i) + 1;
		if (i == 0) 
			break; 
	}
	return null;
}

function SetCookie (name, value) 
{
	var argv = SetCookie.arguments;
	var argc = SetCookie.arguments.length;
	var expires = (2 < argc) ? argv[2] : null;
	var path = (3 < argc) ? argv[3] : null;
	var domain = (4 < argc) ? argv[4] : null;
	var secure = (5 < argc) ? argv[5] : false;
	document.cookie = name + "=" + escape (value) +
	((expires == null) ? "" : ("; expires=" + expires.toGMTString())) +
	((path == null) ? "" : ("; path=" + path)) +
	((domain == null) ? "" : ("; domain=" + domain)) +
	((secure == true) ? "; secure" : "");
}

function updateCamisetaTime(c1, c2, tipo)
{
	$('#camiseta1').css("background", "#"+c1);
	$('#camiseta2').css("background", "#"+c2);
	$('#camiseta3').css("background-image", "url(simulacion/generar_jugadores.php?pelo=2&piel=1&color1="+c1+"&color2="+c2+"&foto=1&camiseta="+tipo+"&r="+new Date().getTime()+")");

	setTimeout("updateCamiseta()", 5000);
}

function updateCamiseta()
{
	$('#camiseta0').css("background-image", "url(camiseta_equipo.php?id="+id_equipo+"&tipo=1&time="+new Date().getTime()+")");
}

function setNombreEquipo(nom)
{
	$("a[@href*="+('equipo.php?id='+id_equipo)+"]").html(nom.substring(0,15));
}

function updateFotoUsuario()
{
	$('#fotousuario').css('background-image','url(foto.php?r='+new Date().getTime()+')');
	$('#fotoescudousuario').attr('src', 'foto_peque.php?r='+new Date().getTime());
}

function updateSponsor(id, nombre)
{
	$('#sponsorfoto').css('background-image', 'url(sponsors_foto.php?id='+id+'&peque=1)');
	$('#sponsornombre').html(nombre);
}

var mensajeUltimo=-1;
var anteriornoLeidos=-1;
var cont_vercaja = 0;
var timeoutcaja= null;
var error_vercaja=0;
var error_texto_vercaja='';
var num_recargas=0;
var error_datos="";

function setCaja() {

	$.ajax({
        url: "vercaja2.php?ts="+new Date().getTime(),
        success: function(datos){
			var error=0;
			
			try
			{
			//alert(datos);
				if (datos=="salir")
				{
					document.location="/logout.php?error=cerrada";
					return;
				}
				
				var d= eval(datos);
				
				if (d.timeserver!=null)
				{
					timeserver = d.timeserver-1;
					//timeserver = 100;
				}
				else
				{
					error=1;
				}

				if (d.timezone!=null)
				{
					timezoneserver = d.timezone;
					//timeserver = 100;
				}
				else
				{
					error=11;
				}

				

				if (d.dinero!=null)
				{
					$("#dineros").html(d.dinero);
				}
				else
				{
					error=2;
				}

				if (d.conectados!=null )
				{
					var con = $("#conectados");
					con.html(d.conectados+" "+(d.conectados==1?con.attr("amigo"):con.attr("amigos")));
				}
				else
				{
					error=3;
				}

				if (d.chat!=null && d.chatusu!=null && d.chatalias!=null) {

					var m = $("#messenger");
					if(m.length>0)
					{
						crearMessenger(d.chatusu, d.chatalias, true);
					}else{
						$('#nuevochat').html(d.chat);
						$('#nuevochat').animate(
							{ height: 50, opacity: 1 }, 'slow', null, function()
								{  
									setTimeout(function()
									{
										$('#nuevochat').animate({ height: 0, opacity: 0 }, 'slow');
									},15000);
								}
						);
					}
				}

				if (d.mensajeUltimo!=null) {
					if (mensajeUltimo<d.mensajeUltimo) {
						$('#nuevomens').animate(
							{ height: 40, opacity: 1 }, 'slow', null, function()
								{  
									setTimeout(function()
									{
										$('#nuevomens').animate({ height: 0, opacity: 0 }, 'slow');
									},5000);
								}
						);
					}
					mensajeUltimo=d.mensajeUltimo;
				}

				if (d.noLeidos!=null)
				{
				
					if (anteriornoLeidos!=d.noLeidos)
					{
						anteriornoLeidos=d.noLeidos;
						var cajamens = $("#amensajitos");
						cajamens.html(d.noLeidos+" "+(d.noLeidos==1?cajamens.attr("mensaje"):cajamens.attr("mensajes")));

						if (d.noLeidos>0) {
							$("#amensajitos").addClass("rojo");
						} else {
							$("#amensajitos").removeClass("rojo");
						}

					}
				}
				else
				{
					error=4;
				}
				
				var imarco = $("#iframemarco");
				if(imarco.length>0)
				{
					var page = $("#iframemarco").get(0).contentWindow.document.location.href;
				}else{
					var page = document.location.href;
				}

				var i = page.indexOf("//");
				if(i!=-1)
				{
					page = page.substring(i+2);
				}

				i = page.indexOf("/");
				if(i!=-1)
				{
					page = page.substring(i);
				}

				//pageTracker._trackPageview(page);
				_gaq.push(['_trackPageview', page]);
				
				if(cont_vercaja%2==0)
				{
					refreshBanners();			
				}
				

				cont_vercaja++;
			}
			catch (ex)
			{
				//alert(ex+datos);
				error_texto_vercaja=ex;
				error=5;
			}
			
			if (error!=0)
			{
				error_vercaja=error;
				error_datos=datos.length;
				setTimeout('recargarCaja()', 1);
				return;
			}
			else
			{
				num_recargas = 0;
				timeoutcaja=setTimeout('setCaja()',10000);
			}

			try
			{
				setHoras();	
			}
			catch (ex)
			{
			}
			
			
		}
	});

	
}


function recargarCaja() 
{
	//alert("/logout.php?error="+error_vercaja+"&error_texto_vercaja="+escape(error_texto_vercaja));
	 num_recargas++;
        if (num_recargas>3)
        {
                num_recargas = 0;
                document.location="/logout.php?error="+error_vercaja+"&error_texto_vercaja="+escape(error_texto_vercaja)+"&error_datos_vercaja="+escape(error_datos);;
        }
        else
        {
                timeoutcaja=setTimeout('setCaja()',5000);
        }

}

var timeout_desconectado = new Date().getTime();

function setTimeoutDesconectado()
{
	timeout_desconectado = new Date().getTime();
}

function checklogout()
{
	var tiempo = new Date().getTime();
	if((tiempo-timeout_desconectado)>600000)
	{
		//document.location='logout.php';
	}
}

var conectado_desplegado = false;
var salaschat_desplegado = false;
var menu_seleccionado_help = false;

var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";

function keykon(e)
{
	kkeys.push( e.keyCode );

	if ( kkeys.toString().indexOf( konami ) >= 0 )
	{
		if (window.removeEventListener)
		{
			window.removeEventListener('keydown',keykon,true)
		}
		else
		{
			if (window.detachEvent)	window.detachEvent("onkeydown", keykon);
		}
		
		$.ajax(
			{
				url: "/konami.php",
				success: function(datos)
				{
					if(marco) marco.showAlerta("INSERT COIN");
				}
			}
		);		
		
	}else{
		if(kkeys.length>10)
		{
			kkeys.slice(1);
		}
	}
}


$(document).ready(
	function()
	{
		disableSelection(document.getElementById("tutorial"));

		if($("#messenger").length>0) startChat();
		else botonConectados();

		$(".icono1").click( function() { alternarMenu(1); } );
		$(".icono2").click( function() { alternarMenu(2); } );
		$(".icono3").click( function() { alternarMenu(3); } );
		$(".icono4").click( function() { alternarMenu(4); } );

		$("div.menu a").click(
			function()
			{
				var ayuda = $(this).attr("ayuda");
				if(ayuda!=null)
				{
					$("#link_ayuda").attr("href", "/wiki/index.php?title="+ayuda);
				}else{
					$("#link_ayuda").attr("href", "/wiki/index.php?title=Portada");
				}

			}
		);

		mostrarMenu(1);
		setCaja();

		setInterval('checklogout()', 600000);

		$(document).mouseup(function() { if(conectado_desplegado) esconderConectados(); } );

		if ( window.addEventListener ) {
			window.addEventListener("keydown", keykon, true);
		}
		else
		{
			if (window.attachEvent) window.document.attachEvent("onkeydown", keykon);
			else
				window.onKeyDown = keykon;
		}

		startNoticiasAmigos();

		$("#headmenu .menu a").hover( 
			function() {
				help = $(this).attr("help");
				if(help!="")
				{
					of = $(this).offset();
					$("#tooltip_ayuda2").css("top", (of.top-10)+"px").css("left", "170px");
					$("#tooltip_contents2").html($(this).attr("help"));
					menu_seleccionado_help = true;
					setTimeout("showMenuTooltip()", 300);
				}
			}, 
			function() {
				$("#tooltip_ayuda2").css("display", "none");
				menu_seleccionado_help = false;
			} 
		);
		
		
		initTutorial();
	}
);


function showMenuTooltip()
{
	if(menu_seleccionado_help)
	{
		$("#tooltip_ayuda2").fadeIn();
		menu_seleccionado_help = false;
	}
}

function esconderConectados()
{
	if($("#messenger").length==0)
	{
		t = 648;
	}else{
		t = 7;
	}
	$("#menuconectados").animate( { top: t, height: 0 }, 'normal', null, function(){$(this).css("display","none"); 	conectado_desplegado = false; });
	$("#conectados").css("background","");
}


function botonConectados()
{
	$("#conectados").click(
		function()
		{
			if($("#messenger").length==0)
			{
				t = 623;
				t2 = 648;
				h = 25;
				l = 0;
				mess = false;
			}else{
				h = 24;
				t2 = 9;
				t = -h+t2;
				l = $("#conectados").offset().left-$("#submessenger").offset().left;
				mess = true;
				$(this).css("background","#000");
			}

			if(conectado_desplegado)
			{
				esconderConectados();
			}else{
				conectado_desplegado = true;
				$("#menuconectados").css('left', l+'px').css('top',t+'px').css('height', h+'px').css("display", "block");
				$("#menuconectados2").html('<img class="loading" src="/img/as/loading2.gif">');
				$.ajax(
					{
						url: "amigos.php?accion=conectados",
						success: function(datos)
						{
							var lista = eval(datos);
							var num = (lista.length-1);
							if(num>0)
							{
								var contenido = "<ul>";
								for (i=0; i<num; i++)
								{
									if(mess)
									{
										contenido+='<li><a href="javascript:;" onclick="AbrirChat('+lista[i].id+'); esconderConectados();" style="float: right; display: block; margin: 0px 2px;"><img src="/img/as/ichat.png"></a><a href="mensaje.php?accion=neweq&usu='+lista[i].id+'" target="marco" style="float: right; display: block; margin: 0px 2px;"><img src="/img/as/iemail.png"></a><a href="usuario.php?id='+lista[i].id+'" target="marco">'+lista[i].alias+'</a></li>';
									}else{
										contenido+='<li><a href="usuario.php?id='+lista[i].id+'" target="marco">'+lista[i].alias+'</a></li>';
									}
									
								}
								contenido += "</ul>";
								$("#menuconectados2").html(contenido);
							}else{
								$("#menuconectados2").html('<ul><li style="background: none; padding: 3px;">'+$("#menuconectados2").attr("mensaje")+'</li></ul>');
								num=1;
							}
							newh = 22*num+44;
							$("#menuconectados").animate( { top: t2-newh, height: newh }, 'normal');
						}
					}
				);
			}
		}
	);


	$("#salaschat").click(
		function()
		{
			h = 0;
			t2 = 9;
			t = -h+t2;
			newh = 120;
			r = $("#submessenger").width()-$("#menusalaschat").width()-2;

			mess = true;
			$(this).css("background","#000");

			if(salaschat_desplegado)
			{
				esconderSalasChat();
			}else{
				salaschat_desplegado = true;
				$("#menusalaschat").css('left', r+'px').css('top',t+'px').css('height', h+'px').css("display", "block").animate( { top: t2-newh, height: newh }, 'normal');;
			}
		}
	);

}


function esconderSalasChat()
{
	t = 7;
	$("#menusalaschat").animate( { top: t, height: 0 }, 'normal', null, function(){$(this).css("display","none"); 	salaschat_desplegado = false; });
	$("#salaschat").css("background","");
}

var timeout_amigos = null;

function startNoticiasAmigos()
{
	$("#noticias_amigos").css("display", "block");
	$.ajax({
        url: "noticias_amigos.php",
		success: function(datos)
		{
			if (datos=='2')
			{
				icono = $('#boton_noticias_amigos a');
				icono.css('background-image','url(/img/inewsoff.png)').attr('title', icono.attr('activar'));
				icono.attr("alt", icono.attr('activar'));
				return;
			}

			icono = $('#boton_noticias_amigos a');
			icono.css('background-image','url(/img/inews.png)').attr('title', icono.attr('desactivar'));
			icono.attr("alt", icono.attr('desactivar'));
			lista = eval(datos);
			$("#noticias_amigos marquee").html("");
			
			if(lista!=null)
			{
				for(i=0; i<lista.length; i++)
				{
					caja = "<span>"+lista[i]+"</span>";
					$("#noticias_amigos marquee").append(caja);
				}
			}

			$("#noticias_amigos a").attr("target", "marco");

			$('marquee').marquee().mouseover(function () {
				$(this).trigger('stop');
			}).mouseout(function () {
				$(this).trigger('start');
			});
		}
	});

	timeout_amigos = setTimeout("startNoticiasAmigos()", 60000);
}

function stopNoticiasAmigos()
{
	icono = $('#boton_noticias_amigos a');
	icono.css('background-image','url(/img/inewsoff.png)').attr('title', icono.attr('activar'));
	icono.attr("alt", icono.attr('activar'));
	$("#noticias_amigos").css("display", "none");
	$('marquee').marquee().trigger('stop');
	if(timeout_amigos!=null) clearTimeout(timeout_amigos);
	timeout_amigos = null;
}

function toggleNoticiasAmigos()
{
	$.ajax({
        url: "noticias_amigos.php?acc=toggle",
		success: function(datos)
		{
			if (datos=='2')
			{
				stopNoticiasAmigos();
				return;
			}
			else
			{
				startNoticiasAmigos();
			}
		}
	});
}

function NoticiasAmigosOff()
{
	$('#boton_noticias_amigos').css("display", "none");
	stopNoticiasAmigos();
}

function NoticiasAmigosOn()
{
	$('#boton_noticias_amigos').css("display", "block");
	startNoticiasAmigos();
}

var contador_highlight = 0;
var timeout_highlight = null;

function highlightMenu(menu)
{
	def = $("#corto").offset();

	if(menu==24)
	{
		obj = $('#fotousuario');
		pw = 135;
		ph = 0;
	}else if(menu==25)
	{
		obj = $('#camiseta0');
		pw = 135;
		ph = 0;
	}else if(menu==26 || menu==27)
	{
		obj = $('#camiseta0');
		pw = 0;
		ph = 0;
	}else{
		pag = Math.floor(menu / 6);
		opt = menu % 6;
		
		obj = $('#menu'+(ultimo_mostrado)+' a')[opt];
	
		alternarMenu(pag+1);
		pw = 10;
		ph = 8;
	}

	if(menu==26)
	{
		t = 605;
		l = 815+def.left;
		w = 160;
		h = 50;
	}else if(menu==27)
	{
		t = 665;
		l = 795+def.left;
		w = 185;
		h = 60;
	}else{
		of = $(obj).offset();
		l = of.left;
		t = of.top;
		w = $(obj).width();
		h = $(obj).height();
	}

	$("#highlight").css("display", "block").css("left", (l-def.left)+"px").css("width", w+pw).css("height", h+ph).css("top", t+"px");

	contador_highlight = 0;
	
	if(timeout_highlight!=null) clearTimeout(timeout_highlight);
	contador = 0;
	timeout_highlight = setTimeout("changeHighlight()", 300);
}


function changeHighlight()
{
	if(contador<14)
	{
		if(contador%2)
		{
			$("#highlight").show();
		}else{
			$("#highlight").hide();
		}
		contador++;
		timeout_highlight = setTimeout("changeHighlight()", 300);
	}else{
		$("#highlight").css("top", "-1000px").css("left", "-1000px").hide();
	}
}

var tutorial_x_eng = 0;
var tutorial_y_eng = 0;
var tutorial_eng = false;

function initTutorial()
{

	$("#tutorial").mousedown(
		function(event)
		{
			var of = $(this).offset();

			tutorial_x_eng = event.clientX - of.left;
			tutorial_y_eng = event.clientY - of.top;

			tutorial_eng = true;
		}
	);

	$(document).mouseup(
		function(event)
		{
			if(tutorial_eng)
			{
				tutorial_eng = false;
			}
		}
	);

	$(document).mousemove(
		function(event)
		{
			if(tutorial_eng)
			{
				var def = $("#corto").offset();
				$("#tutorial").css("left", event.clientX-tutorial_x_eng-def.left+"px").css("top", event.clientY-tutorial_y_eng+"px");
			}
		}
	);


}

var url_tutorial = '';

function cerrarTutorial()
{
	$("#overlay").fadeOut('slow');
	$('#tutorial').fadeOut('normal');
}

function showTutorial(objtut)
{
	if(objtut!=null)
	{
		$("#tuttitulo").html($(objtut).attr("titulo"));
		$("#tutinside").html($(objtut).attr("texto")+"<br><br>"+$(objtut).attr("dinero"));
		$('#botontutorial').html($(objtut).attr("boton")).css("display", "block");
		highlightMenu(parseInt($(objtut).attr("accion")));
		url_tutorial = $(objtut).attr("url");
	}

	$("#overlay").fadeIn('normal');
	$('#tutorial').fadeIn('normal');

}

function jumpTutorial()
{
	cerrarTutorial();
	window.marco.document.location = url_tutorial;
}

function disableSelection(element) 
{
	if(element!=null)
	{
		element.onselectstart = function() 
		{
			return false;
		};
		element.unselectable = "on";
		element.style.MozUserSelect = "none";
		element.style.cursor = "default";
	}
}


function refreshBanners()
{
	var f = $("#iframebannertop");
	if(f.length>0)
	{
		f.get(0).contentWindow.location.reload(false);
	}

	var f = $("#iframebannerleft");
	if(f.length>0)
	{	
		f.get(0).contentWindow.location.reload(false);
	}
}