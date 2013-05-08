function selectorGetTime(time,t_d,t_h,t_m,t_s)
{
	if(time<0) time = 0;

	dias	 = Math.floor( time/(24*3600) );
	horas	 = Math.floor( time/(3600) )%24;
	minutos  = Math.floor( time/(60) )%(60);
	segundos = time%60;

	text = "";
	if(dias>0)			text = dias+" "+t_d+" "+horas+" "+t_h;
	else if(horas>5)	text = horas+" "+t_h;
	else if(horas>0)	text = horas+" "+t_h+" "+minutos+" "+t_m;
	else if(minutos>15)	text = minutos+" "+t_m;
	else if(minutos>0)	text = minutos+" "+t_m+" "+segundos+" "+t_s;
	else				text = segundos+" "+t_s;

	return text;
}



function selectorGetCurrency(num)
{
	num = num+'';
	resto = num.length % 3;
	salida = '';
	var ind;
	if(resto>0)	salida = num.substring(0,resto);
	for(ind=0;ind<Math.floor(num.length/3);ind++)
	{
		if(salida!='') salida+=divisa_sep_miles;
		salida+=num.substring(ind*3+resto,ind*3+resto+3);
	}
	return (divisa_prefijo+salida+divisa_sufijo);
}

function selectorFormatearNumero(num)
{
	var negativo = false;
	if(num<0)
	{
		num = Math.abs(num);
		negativo = true;
	}
	num = num+'';
	resto = num.length % 3;
	salida = '';
	if(resto>0)	salida = num.substring(0,resto);
	var ind;

	for(ind=0;ind<Math.floor(num.length/3);ind++)
	{
		if(salida!='') salida+=divisa_sep_miles;
		salida+=num.substring(ind*3+resto,ind*3+resto+3);
	}
	if(negativo)
	{
		salida = '-'+salida;
	}
	return (salida);
}

function buscarIndiceEnLista(valor, lista)
{
	for(i=0;i<lista.length;i++)
	{
		if(lista[i].valor == valor) return i;
	}
	return 0;
}

var selectores = new Array();

function InitSelectores()
{
	$('.selector2').selector();
	$('.selectorpeque').selector();
}

$.widget('ui.selector',
{
	init: function()
	{
		if(this.element.find('.fizq').attr('onclick')!=null) return;

		this.tipo = this.element.attr("tipo");
		this.valor = this.element.attr("valor");
		this.valor_seleccionado = this.element.attr("valor");
		this.min = this.element.attr("min");
		this.max = this.element.attr("max");
		this.inc = this.element.attr("inc");
		this.tim = null;
		this.OnChange = this.element.attr("onchangeevent");

		this.visor = this.element.find("span");

		this.id = this.visor.attr('id');
		this.lista_valores = null;

		this.finalizar = true;
		this.contador = 0;

		if(this.tipo==null) this.tipo="numeric";

		if(this.valor==null) this.valor = 0;
		else this.valor = Math.round(parseFloat(this.valor));

		selectores[this.id] = { 'valor':this.valor };

		if(this.tipo=="numeric" || this.tipo=="currency")
		{
			if(this.inc==null)
			{
				this.inc = 10;
				this.inc_base = 10;
			}else{
				this.inc = Math.round(parseFloat(this.inc));
				this.inc_base = Math.round(parseFloat(this.inc));
			}
		}else if(this.tipo=="list")
		{
			lista_valores = new Array();
			this.element.children("ul").children("li").each(
				function(ind)
				{
					lista_valores[ind] = { valor: $(this).attr("valor"), nombre: $(this).html() };
				}
			);

			this.lista_valores = lista_valores;
			this.valor = buscarIndiceEnLista(this.valor_seleccionado, this.lista_valores);
			this.min = 0;
			this.max = this.lista_valores.length-1;
			this.inc = 1;
			this.inc_base = 1;

		}else{
			this.inc = 1;
			this.inc_base = 1;
		}

		if(this.max==null) this.max = -1;
		else this.max = Math.round(parseFloat(this.max));

		if(this.min==null) this.min = -1;
		else this.min = Math.round(parseFloat(this.min));

		var self = this;


		this.element.find('.fizq').mousedown(
			function()
			{
				self.finalizar = false;
				self.contador = 0;
				self.inc = -self.inc_base;
				
				self.ModificarValor(self.inc);

				self.tim = setTimeout(
					function()
					{
						self.ProcesarPresion();
					}
				,800);

			}
		);

		this.element.find('.fizq').mouseup(
			function()
			{
				self.FinalizarPresion();
			}
		);

		this.element.find('.fizq').mouseout(
			function()
			{
				self.FinalizarPresion();
			}
		);

		this.element.find('.fder').mousedown(
			function()
			{
				self.finalizar = false;
				self.contador = 0;
				self.inc = +self.inc_base;
				
				self.ModificarValor(self.inc);

				self.tim = setTimeout(
					function()
					{
						self.ProcesarPresion();
					}
				,800);
			}
		);

		this.element.find('.fder').mouseup(
			function()
			{
				self.FinalizarPresion();
			}
		);

		this.element.find('.fder').mouseout(
			function()
			{
				self.FinalizarPresion();
			}
		);

		this.inc = 0;
		this.ModificarValor();
		this.finalizar = false;
		//this.FinalizarPresion();
		
		return self;

	},

	ProcesarPresion: function()
	{
		if(this.finalizar) 
		{
			return;
		}
		if(this.contador>5)
		{
			this.inc*=2;
			this.contador=0;
		}
		this.contador++;

		var self = this;
	
		self.ModificarValor(self.inc);
	
		setTimeout(
			function()
			{
				self.ProcesarPresion();
			},100);
	},

	FinalizarPresion: function()
	{
		if(!this.finalizar)
		{
			this.finalizar = true;
			
			if(this.tim!=null) clearTimeout(this.tim);

			if(this.tipo=="list")
			{
				selectores[this.id] = { 'valor': this.valor_seleccionado };
			}else{
				selectores[this.id] = { 'valor':this.valor };
			}
			
			if(this.OnChange!=null)
			{
				eval(this.OnChange);
			}
		}
	},

	ModificarValor: function()
	{
		this.valor += this.inc;

		if(this.min!=-1 && this.valor<this.min) this.valor = this.min;
		if(this.max!=-1 && this.valor>this.max) this.valor = this.max;
		
		if(this.tipo=="numeric")
		{
			this.visor.html(selectorFormatearNumero(this.valor));
		}else if(this.tipo=="currency")
		{
			this.visor.html(selectorGetCurrency(this.valor));
		}else if(this.tipo=="list")
		{
			this.visor.html(this.lista_valores[this.valor].nombre);
			this.valor_seleccionado = this.lista_valores[this.valor].valor;
			selectores[this.id] = { 'valor': this.valor_seleccionado };
		}else{
			this.visor.html(this.valor);
		}
		
		if(this.tipo=="list")
		{
			selectores[this.id] = { 'valor':this.valor_seleccionado };
		}else{
			selectores[this.id] = { 'valor':this.valor };
		}

	},

	setOnChange: function(f)
	{
		this.OnChange=f;
	}



});
