/*! HSC v1.0.0 | (c) 2017 Heverton da Silva Cruz */
$(document).ready(function() {
    $(".telefonecelular").keyup(function(){

        var conteudo =  this.value;
        var numero = conteudo.replace("(","");
		var numero = numero.replace(")","");
		var numero = numero.replace("-","");
		var numero = numero.replace(/\s/g, "");

		if(numero.length > 3){
		var res = numero.substring(2, 3);
		}

        if(res==9){
        	$(this).unmask(); 
        	$(this).mask("(99) 9 9999-9999");
        } else {
        	$(this).unmask(); 
        	$(this).mask("(99) 9999-9999");
        }

        // $(this).val(numero);
        		        
    });
});
