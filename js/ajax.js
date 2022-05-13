$(document).ready(function(){
	$('#cuestionario').validate({

		submitHandler: function(){
		$.post("guardar.php",
			{
				nombre: $("#nombre").val(), apaterno: $("#apaterno").val(), amaterno: $("#amaterno").val(), ciudad: $("#ciudad").val()
			},
			function(data, status){
				alert("Datos: "+ data+"Status:"+status);
				$("#cuestionario").trigger("reset");
			});
	},
		rules: {
			nombre: {
				required: true, minlength: 5, maxlength: 25
			},
			apaterno: {
				required: true, minlength: 5, maxlength: 25
                        },
			amaterno: {
				required: true, minlength: 5, maxlength: 25
                        },
			ciudad: {
				required: true, minlength: 5, maxlength: 25
                        }
		},
		messagges: {
			nombre: {
				required: "Campo obligatorio*", minlenght: "minimo 5 letras*", maxlenght: "Maximo de caracteres 25*"
			},
			apaterno: {
                required: "Campo obligatorio*", minlenght: "minimo 5 letras*", maxlenght: "Maximo de caracteres 25*"
            },
			amaterno: {
				required: "Campo obligatorio*", minlenght: "minimo 5 letras*", maxlenght: "Maximo de caracteres 25*"
            },
			ciudad: {
                required: "Campo obligatorio*", minlenght: "minimo 5 letras*", maxlenght: "Maximo de caracteres 25*"
            }
		}
	});

});
