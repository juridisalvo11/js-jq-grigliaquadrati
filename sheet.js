//Stampare numeri nella griglia creata direttamente nell html
//con la funzione each genero 25 numeri casuali tra 0 e 10 e li stampo in pagina
$('.quadrato').each(function() {
    var numero_casuale = genera_random (0, 10);
    $(this).html(numero_casuale)
})

//Creare direttamente la griglia usando javascript e stampare i numeri nei quadrati generati

//Genero la seconda griglia usando il ciclo for e il metodo .append che mi permette di aggiungere elementi direttamente in pagina
for (var i = 0; i < 25; i++) {
    $('.griglia-2').append('<div class="quadrato"></div>')
}
//con la funzione each genero 25 numeri casuali tra 0 e 10 e li stampo in pagina
$('.quadrato').each(function() {
    var numero_casuale = genera_random (0, 10);
    $(this).html(numero_casuale)
})

//funzione creata per generare i numeri casuali
function genera_random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
