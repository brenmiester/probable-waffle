 var cs1 = ' '
 cs2 = ' '
 cs3 = ' '
 cs4 = ' '
 cs5 = ' '
 cs6 = ' '
 cs7 = ' '
 cs8 = ' '
 cs9 = ' '
 cs10 = ' '
 damage = 0
 health = 20
 maxhealth = 40
 sucessrate = 0.2
 function addtext() {
  add = document.getElementById("addtext").value
  cs1 = cs2;
  cs2 = cs3;
  cs3 = cs4;
  cs4 = cs5;
  cs5 = cs6;
  cs6 = cs7;
  cs7 = cs8;
  cs8 = cs9;
  cs9 = cs10;
  cs10 = add;
  document.getElementById('cs1').innerHTML = cs1;
  document.getElementById('cs2').innerHTML = cs2;
  document.getElementById('cs3').innerHTML = cs3;
  document.getElementById('cs4').innerHTML = cs4;
  document.getElementById('cs5').innerHTML = cs5;
  document.getElementById('cs6').innerHTML = cs6;
  document.getElementById('cs7').innerHTML = cs7;
  document.getElementById('cs8').innerHTML = cs8;
  document.getElementById('cs9').innerHTML = cs9;
  document.getElementById('cs10').innerHTML = cs10;
  console.log(add + ' was printed');
 }
 function attack(damage, entityhealth) {
 
 }
 function spcast(spell){
  if spell = "Fireball"
   var rndtest = math.random()
   if rndtest > successrate
    health = health - 15
   else
    attack(15)
    
 }
