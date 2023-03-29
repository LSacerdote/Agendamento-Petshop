function gotowhatsapp() {
    var nome = document.getElementById("nome").value;
   var animal = document.getElementById("animal").value;
    var telefone = document.getElementById("telefone").value;
    var service = document.getElementById("service").value;
    var porte = document.getElementById("porte").value;
    var endereço = document.getElementById("endereço").value;
      var opcoes = document.getElementsByName('opcao');
      var valores_selecionados = '';
      for (var i = 0; i < opcoes.length; i++) {
        if (opcoes[i].checked) {
          valores_selecionados += opcoes[i].value + ', ';
        }
      }
    var url = "https://wa.me/5511984379284?text=" 
    
      + "Nome: " + nome + "%0a" 
      + "Nome do Animal: " + animal + "%0a"
      + "Telefone: " + telefone + "%0a"
      + "Endereço: " + endereço + "%0a"
      + "Serviço: " + service + "%0a"
      + "Porte do Animal: " + porte + "%0a"
      + "Adicionais: " + valores_selecionados;
    

    window.open(url, '_blank').focus();

  }