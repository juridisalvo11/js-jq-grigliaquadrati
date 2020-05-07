var array_numeri = [];

for (var i = 0; i < 25; i++) {
     var numeri_casuali = genera_random(0, 10)
     array_numeri.push(numeri_casuali)
    }

    $('.quadrato').html(numeri_casuali)

    console.log(array_numeri);

function genera_random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
