$('.quadrato').each(function() {
    var numero_casuale = genera_random (0, 10);
    $(this).html(numero_casuale)
})

for (var i = 0; i < 25; i++) {
    $('.griglia-2').append('<div class="quadrato"></div>')
}

function genera_random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
