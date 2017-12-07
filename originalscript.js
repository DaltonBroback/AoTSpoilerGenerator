
var characters = [
  // "[TITAN]",
  "Eren",
  "Mikasa",
  "Armin",
  "Levi",
  "Erwin",
  "Hange",
  "Jean",
  "Marco",
  "Connie",
  "Sasha",
  "Christa",
  "Historia",
  "Ymir",
  "Reiner",
  "Annie",
  "Bertholdt",
  "Marcel",
  "Porco",
  "Pieck",
  "Zeke",
  "Dot Pixis",
  "Hannes",
  "Zackly",
  "Rod Reiss",
  "Kenny Ackerman",
  "Nile Dok",
  "Petra",
  "Eld",
  "Oruo",
  "Gunther",
  "Miche",
  "Ilse",
  "Moblit",
  "Pastor Nick",
  "Ymir Fritz",
  "Eren Kruger",
  "Grisha Jaeger",
  "Dina Fritz",
  "Carla Jaeger",
  "Keith Shadis",
  "Floch",
  "Falco",
  "Hitch",
  "Marlowe",
  "Gabi",
  "Colt",
  "Frieda",
  "Uri Reiss"
];
var statements = [
  "is [TITAN]",
  "becomes [TITAN]",
  "turns out to be [CHARACTER]",
  "kills [CHARACTER]",
  "is killed by [CHARACTER]",
  "is killed by [TITAN]",
  "eats [CHARACTER]",
  "defects to [SIDE]",
  "gets intimate with [CHARACTER]",
  "turns into a Titan",
  "was secretly alive the whole time",
  "is the new main character",
  "is best girl",
  "gets eaten",
  "is revealed to be the one who killed Marcel",
  "is revealed to be the one who killed Marco",
  "is revealed to be the one who destroyed Wall Maria",
  "destroys Wall Sina",
  "destroys Wall Rose",
  "was in the Basement",
  "finds the Basement",
  "accidentally burns down the Basement",
  "gets tired of all this shit and quits",
  "gets Annie out of the crystal",
  "was secretly an Ackerman all along",
  "explains PATHS",
  "is PATHS",
  "becomes one with PATHS",
  "time travels",
  "wakes up to discover it was all a dream, there were never any Titans, and school starts in five minutes",
  "accidentally walks in on [CHARACTER] and [OTHERCHARACTER]",
  "sings [SONG] in the shower",
];

var titans = [
  "the Founding Titan",
  "the Female Titan",
  "the Beast Titan",
  "the Colossal Titan",
  "the Armored Titan",
  "the Jaws Titan",
  "the Attack Titan",
  "the Cart Titan",
  "the WarHammer Titan",
  "the Smiling Titan",
  "the Winged Titan",
  "the Sea Titan",
];

var sides = [
  "Marley",
  "the Survey Corps/Scouts",
  "the Wall Garrison",
  "the Military Police",
  "the Great East Asian Clan",
  "the Mid-East Allied Forces",
  "a giant crystal",
  "the Warriors"
];

var Berts = [
  "Beerus",
  "Beer-Kart",
  "Beetroot",
  "Burrito",
  "Bandcamp",
  "Bertoruto",
  "Bartholomew",
  "Burnt-toast",
  "Birdcage",
  "Barreldot",
  "Baerhgnolgt",
  "Benedict Cumberbolt",
];

var songs = [
  "Guren no Yumiya",
  "Jiyuu no Tsubasa",
  "Shinzou wo Sasageyo",
  // "The Reluctant Warriors",
  // "Barricades",
]


function getSpoiler(){
  var randomCharacter = Math.floor(Math.random() * characters.length);
  // var randomCharacter = 22;
  var randomStatement = Math.floor(Math.random() * statements.length);
  // var randomStatement = statements.length-1;
  var character = characters[randomCharacter];
  var picName = character;
  var statement = statements[randomStatement];

  if(character == "[TITAN]"){
    var randomTitan = Math.floor(Math.random() * titans.length)
    newCharacter = character.replace("[TITAN]", titans[randomTitan]);
    character = newCharacter
  };
  if(statement.indexOf("[TITAN]") > -1){
    var randomTitan = Math.floor(Math.random() * titans.length)
    newStatment = statement.replace("[TITAN]", titans[randomTitan]);
    statement = newStatment;
  };
  if(statement.indexOf('[CHARACTER]') > -1){
    randomCharacter = Math.floor(Math.random() * characters.length);
    newStatment = statement.replace("[CHARACTER]", characters[randomCharacter]);
    statement = newStatment;
  };
  if(statement.indexOf('[OTHERCHARACTER]') > -1){
    randomCharacter = Math.floor(Math.random() * characters.length);
    newStatment = statement.replace("[OTHERCHARACTER]", characters[randomCharacter]);
    statement = newStatment;
  };
  if(statement.indexOf('[SIDE]') > -1){
    var randomSide = Math.floor(Math.random() * sides.length)
    newStatment = statement.replace("[SIDE]", sides[randomSide]);
    statement = newStatment;
  };
  if(statement.indexOf('[SONG]') > -1){
    var randomSong = Math.floor(Math.random() * songs.length)
    newStatment = statement.replace("[SONG]", songs[randomSong]);
    statement = newStatment;
  };
  if(character == "Bertholdt"){
    var BertValue = Math.floor(Math.random() * 5);
    if(BertValue == 0){
      var randomBert = Math.floor(Math.random() * Berts.length);
      character = Berts[randomBert];
    }
  }
  var ending = "."
  if(character == "Pieck"){
    ending = ", as expected."
  }
  if(character == "Erwin"){
    ending = ". SASAGEYO!"
  }
  if(character == "Zeke"){
    ending = ". Now that's what I call Monkey Trouble."
  }
  if(character == "Sasha"){
    ending = ". I guess they were out of potatoes."
  }
  if(character == "Zackly" && statement == "gets tired of all this shit and quits"){
    // var artVal = Math.floor(Math.random() * 2);
    // if(artVal == 0){
      statement = " gets tired of the lack of shit and quits to pursue his art full time"
    // }
  }

  var spoiler = "<p>"+character + " " + statement + ending+"</p>";
  document.getElementById("spoiler").innerHTML = spoiler;
  if(picName.indexOf(' ') > -1){
    newPic = picName.replace(" ", "_");
    picName = newPic;
  };
  var pic = "<img src = 'img/"+picName+".png'></img>"
  document.getElementById("pic").innerHTML = pic;
};
