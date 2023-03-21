function gotowhatsapp() {
    var nome = document.getElementById("nome").value;
   var animal = document.getElementById("animal").value;
    var telefone = document.getElementById("telefone").value;
    var service = document.getElementById("service").value;
    var porte = document.getElementById("porte").value;
    var desembolo = document.getElementById("desembolo").value;
    var corte = document.getElementById("corte").value;
    var hidratação = document.getElementById("hidratação").value;
    var tratamento = document.getElementById("tratamento").value;
    var tonalização = document.getElementById("tonalização").value;
    var limpeza = document.getElementById("limpeza").value;
    var taxidog = document.getElementById("taxidog").value;
    var url = "https://wa.me/5511984379284?text=" 
    
      + "Nome: " + nome + "%0a" 
      + "Nome do Animal: " + animal + "%0a"
      + "Telefone: " + telefone + "%0a"
      + "Serviço: " + service + "%0a"
      + "Porte do Animal: " + porte + "%0a"
      + "Adicionais: " + desembolo + corte + hidratação + tratamento + tonalização + limpeza  + "%0a"
      + "Endereço: " + taxidog + "%0a"

    window.open(url, '_blank').focus();

  }