function rndadj() {
  rnd = math.random
  if rnd > 0.9
    return "Bravery"
  if 0.8 > rnd > 0.9
    return "The Skillful"
  if 0.7 > rnd > 0.8
    return "Sleepless Battles"
  if 0.6 > rnd > 0.7
    return "The Wise"
  if 0.5 > rnd > 0.6
    return "Wisdom"
  if 0.4 > rnd > 0.5
    return "Speed"
  if 0.3 > rnd > 0.4
    return "Knowledge"
  if 0.2 > rnd > 0.3
    return "Power"
  if 0.1 > rnd > 0.2
    return "Epicness"
  if rn < 0.1
    return "The Dying Enemy"
  else
    console.log("Error getting rndadj()")
    return "Buggy Programming"
}
var usr = query("What is your name?")
var usr.charname = query("Hi, " + usr + ", give your character a name.")
add("In this world, " + usr.charname + ", there are 5 tribes. These tribes have various different skill sets which will help you on your quest.")
add("The warrior uses brute force to attack their enemies, and as of such is very strong, but not precise")
add("The mage uses magic and intelligence to solve problems. They are not very strong, but are quite cunning.")
add("The archer uses their bow and arrow to make their enemies buckle with fear.")
add("The monk has trained their entire life to master the art of Goju-Ryu, and can split a door with a single punch.")
var usr.class = query("So, " + usr.charname + ", Which will it be? Warrior, Mage, Archer or Monk?")
if usr.class = "Warrior" or 'warrior'
  var usr.spells = false
  usr.health = 25
  usr.maxhealth = 50
  usr.successrate = 0.3
  usr.strengthmod = 1.2
  usr.intelmod = 0.8
  usr.cunmod = 1
  usr.inv = ['Sword of Gallahad',
  'Potion of Resistance',
  'Chestplate of ' + rndadj(),
  'Boots of ' + rndadj(),
  'Shield of ' + rndadj(),
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ']
  usr.gold = 200
if usr.class = "Mage" or 'mage'
  var usr.spells = true
  usr.health = 15
  usr.maxhealth = 30
  usr.successrate = 0.2
  usr.strengthmod = 0.8
  usr.intelmod = 1.3
  usr.cunmod = 1.5
  usr.inv = ['Staff of Power',
  'Potion of Intelligence',
  'Chestplate of ' + rndadj(),
  'Boots of ' + rndadj(),
  'Shield of ' + rndadj(),
  'Wand of ' + rndadj(),
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ',
  ' ']
  usr.gold = 350
