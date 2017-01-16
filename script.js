var shuffle = function(vetor) {
     var i = vetor.length, j, tempi, tempj;

     if ( i != 0 ) {
           while ( --i ) {
              j       = Math.floor( Math.random() * ( i + 1 ) );
              tempi   = vetor[i];
              tempj   = vetor[j];
              vetor[i] = tempj;
              vetor[j] = tempi;

           }
      }
}


var atribui = function (vetorDeLetras){

      for(i=0; i<16; i++){
        //  console.log(vetorEmbaralhado[i]);

        $("#"+String(i+1)).html(vetorDeLetras[i]);
        //document.getElementById(String(i+1)).innerHTML = vetorDeLetras[i];


      }
}



var vetorDeLetras = ["!", "$", "#", "@", "*", "%", "~", "{}", "!", "$", "#", "@", "*", "%", "~", "{}"];
var jogada = 0;
var jog = 0;
var jogadasRealizadas = 0;


$("document").ready(function(){
  shuffle(vetorDeLetras);
  atribui(vetorDeLetras);
  var jogadas = [];

  $(".btn").click(function(){
    if(jogada < 2) {
    $(this).removeClass("btn-primary");
    $(this).addClass("clicked");
    jogada++;
    console.log("Jogada:" +jogada);
    jogadas.push(this.id);
    console.log(jogadas);
  }
   if(jogada === 2){

     if (jogadas[0] === jogadas [1]) {

        bootbox.alert("Jogada inválida Espertinho haheueah ^_^, encontre o par!");
        $("#"+jogadas[0]).removeClass("clicked");
        $("#"+jogadas[0]).addClass("btn-primary");
        $(this).removeClass("clicked");
        $(this).addClass("btn-primary");
        jogadas.pop();
        jogadas.pop();

     } else{

         if (vetorDeLetras[jogadas[0]-1] === vetorDeLetras[jogadas[1]-1]){
            jogadas.pop();
            jogadas.pop();
            jog++;
            jogadasRealizadas++;
            $("#cont").html(jogadasRealizadas);

            if(jog === 8){
              bootbox.alert("Parabééééénns!!!! você venceu! ^_^");
            }


          } else {
            bootbox.alert("Não fez par ;( Tente novamente!");
            $("#"+jogadas[0]).removeClass("clicked");
            $("#"+jogadas[0]).addClass("btn-primary");
            $(this).removeClass("clicked");
            $(this).addClass("btn-primary");
            jogadas.pop();
            jogadas.pop();
            jogadasRealizadas++;
            $("#cont").html(jogadasRealizadas);

          }
      }
      jogada = 0;
   }
  });

})
