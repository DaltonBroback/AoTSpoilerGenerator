var characters = [
  {"name": "Eren","manga spoiler":false,"gender":"male"},
  {"name": "Mikasa","manga spoiler":false,"gender":"female"},
  {"name": "Armin","manga spoiler":false,"gender":"male"},
  {"name": "Levi","manga spoiler":false,"gender":"male"},
  {"name": "Erwin","manga spoiler":false,"gender":"male"},
  {"name": "Hange","manga spoiler":false,"gender":"Hange"},
  {"name": "Jean","manga spoiler":false,"gender":"male"},
  {"name": "Marco","manga spoiler":false,"gender":"male"},
  {"name": "Connie","manga spoiler":false,"gender":"male"},
  {"name": "Sasha","manga spoiler":false,"gender":"female"},
  {"name": "Christa","manga spoiler":false,"gender":"female"},
  {"name": "Historia","manga spoiler":false,"gender":"female"},
  {"name": "Ymir","manga spoiler":false,"gender":"female"},
  {"name": "Reiner","manga spoiler":false,"gender":"male"},
  {"name": "Annie","manga spoiler":false,"gender":"female"},
  {"name": "Bertholdt","manga spoiler":false,"gender":"male"},
  {"name": "Dot Pixis","manga spoiler":false,"gender":"male"},
  {"name": "Hannes","manga spoiler":false,"gender":"male"},
  {"name": "Zackly","manga spoiler":false,"gender":"male"},
  {"name": "Nile Dok","manga spoiler":false,"gender":"male"},
  {"name": "Petra","manga spoiler":false,"gender":"female"},
  {"name": "Eld","manga spoiler":false,"gender":"male"},
  {"name": "Oruo","manga spoiler":false,"gender":"male"},
  {"name": "Gunther","manga spoiler":false,"gender":"male"},
  {"name": "Miche","manga spoiler":false,"gender":"male"},
  {"name": "Ilse","manga spoiler":false,"gender":"male"},
  {"name": "Moblit","manga spoiler":false,"gender":"male"},
  {"name": "Pastor Nick","manga spoiler":false,"gender":"male"},
  {"name": "Grisha Jaeger","manga spoiler":false,"gender":"male"},
  {"name": "Carla Jaeger","manga spoiler":false,"gender":"female"},
  {"name": "Keith Shadis","manga spoiler":false,"gender":"male"},
  {"name": "Hitch","manga spoiler":false,"gender":"female"},
  {"name": "Marlowe","manga spoiler":false,"gender":"male"},
  {"name": "Marcel","manga spoiler":true,"gender":"male"},
  {"name": "Porco","manga spoiler":true,"gender":"male"},
  {"name": "Pieck","manga spoiler":true,"gender":"female"},
  {"name": "Zeke","manga spoiler":true,"gender":"male"},
  {"name": "Rod Reiss","manga spoiler":true,"gender":"male"},
  {"name": "Kenny Ackerman","manga spoiler":true,"gender":"male"},
  {"name": "Ymir Fritz","manga spoiler":true,"gender":"female"},
  {"name": "Eren Kruger","manga spoiler":true,"gender":"male"},
  {"name": "Dina Fritz","manga spoiler":true,"gender":"female"},
  {"name": "Floch","manga spoiler":true,"gender":"male"},
  {"name": "Falco","manga spoiler":true,"gender":"male"},
  {"name": "Gabi","manga spoiler":true,"gender":"female"},
  {"name": "Colt","manga spoiler":true,"gender":"male"},
  {"name": "Udo","manga spoiler":true,"gender":"male"},
  {"name": "Zofia","manga spoiler":true,"gender":"female"},
  {"name": "Frieda","manga spoiler":true,"gender":"female"},
  {"name": "Uri Reiss","manga spoiler":true,"gender":"male"},
  {"name": "Villy Tybur","manga spoiler":true,"gender":"male"},
  {"name": "Amputee-kun","manga spoiler":true,"gender":"male"}
];

var statements = [
  {"text": "is [TITAN]","manga spoiler":false,"img": null},
  {"text": "turns out to be [CHARACTER]","manga spoiler":false,"img": null},
  {"text": "kills [CHARACTER]","manga spoiler":false,"img": null},
  {"text": "is killed by [CHARACTER]","manga spoiler":false,"img": null},
  {"text": "is killed by [TITAN]","manga spoiler":false,"img": null},
  {"text": "eats [CHARACTER]","manga spoiler":false,"img": null},
  {"text": "finally defeats [SIDE]","manga spoiler":false,"img": null},
  {"text": "defects to [SIDE]","manga spoiler":false,"img": null},
  {"text": "gets intimate with [CHARACTER]","manga spoiler":false,"img": null},
  {"text": "accidentally walks in on [CHARACTER] and [OTHERCHARACTER]","manga spoiler":false,"img": null},
  {"text": "turns into a Titan","manga spoiler":false,"img": "Titans"},
  {"text": "was secretly alive the whole time","manga spoiler":false,"img": null},
  {"text": "is the new main character","manga spoiler":false,"img": null},
  {"text": "is best girl","manga spoiler":false,"img": null},
  {"text": "gets eaten","manga spoiler":false,"img": "TitanEats"},
  {"text": "is revealed to be the one who killed Marcel","manga spoiler":true,"img": "MarcelDies"},
  {"text": "is revealed to be the one who killed Marco","manga spoiler":false,"img": "MarcoDies"},
  {"text": "is revealed to be the one who destroyed Wall Maria","manga spoiler":false,"img": "WallDestroyed"},
  {"text": "destroys Wall Sina","manga spoiler":false,"img": "WallDestroyed"},
  {"text": "destroys Wall Rose","manga spoiler":false,"img": "WallDestroyed"},
  {"text": "was in the Basement","manga spoiler":false,"img": "Basement"},
  {"text": "finds the Basement","manga spoiler":false,"img": "Basement"},
  {"text": "accidentally burns down the Basement","manga spoiler":false,"img": "Basement"},
  {"text": "gets tired of all this shit and quits","manga spoiler":false,"img": null},
  {"text": "gets Annie out of the crystal","manga spoiler":false,"img": "GiantCrystal"},
  {"text": "was secretly an Ackerman all along","manga spoiler":true,"img": "Ackermans"},
  {"text": "explains PATHS","manga spoiler":true,"img": "PATHS"},
  {"text": "becomes one with PATHS","manga spoiler":true,"img": "PATHS"},
  {"text": "time travels","manga spoiler":false,"img": null},
  {"text": "wakes up to discover it was all a dream, there were never any Titans, and school starts in five minutes","manga spoiler":false,"img": "School"},
  {"text": "sings [SONG] in the shower","manga spoiler":false,"img": null},
  {"text": "challenges [OTHERCHARACTER] to a cooking contest","manga spoiler":false,"img": "Cooking"},
  {"text": "travels to the world of Dragonball Super in a poorly concieved crossever special","manga spoiler":false,"img": "DBSuper"}
];

var titans = [
  {"name":"the Founding Titan","img":"Founding","manga spoiler":true},
  {"name":"the Female Titan","img":"Female","manga spoiler":false},
  {"name":"the Beast Titan","img":"Beast","manga spoiler":false},
  {"name":"the Colossal Titan","img":"Colossal","manga spoiler":false},
  {"name":"the Armored Titan","img":"Armored","manga spoiler":false},
  {"name":"the Jaws Titan","img":"Jaws","manga spoiler":false},
  {"name":"the Attack Titan","img":"Attack","manga spoiler":false},
  {"name":"the Cart Titan","img":"Cart","manga spoiler":true},
  {"name":"the WarHammer Titan","img":"WarHammer","manga spoiler":true},
  {"name":"the Smiling Titan","img":"Smiling","manga spoiler":false},
  // {"name":"the Winged Titan","img":"Winged","manga spoiler":true},
  // {"name":"the Sea Titan","img":"Sea","manga spoiler":true}
];

var sides = [
  {"name": "Marley","img":"Marley","manga spoiler":true},
  {"name": "the Survey Corps/Scouts","img":"SurveyCorps","manga spoiler":false},
  {"name": "the Wall Garrison","img":"WallGarrison","manga spoiler":false},
  {"name": "the Military Police","img":"MilitaryPolice","manga spoiler":false},
  {"name": "the Great East Asian Clan","img":"Asia","manga spoiler":true},
  {"name": "the Mid-East Allied Forces","img":"MidEast","manga spoiler":true},
  {"name": "a giant crystal","img":"GiantCrystal","manga spoiler":false},
  {"name": "the Warriors","img":"Warriors","manga spoiler":false},
  {"name": "the Tybur family","img":"Tyburs","manga spoiler":true},
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
  "Boruto",
  "Biccolo"
];

var songs = [
  "Guren no Yumiya",
  "Jiyuu no Tsubasa",
  "Shinzou wo Sasageyo",
  "Call Your Name",
  "YOU SEE BIGGIRL"
  // "The Reluctant Warriors",
  // "Barricades",
];

//Exactly what it says on the tin, removes spaces from a string
function removeSpace(name){
  name = name.replace(" ", "_");
  return name;
}

//Runs the spoiler function but with a pre-selected character
function pickCharacter(character){
  getSpoiler(character);
}

//Various front-end changes
function getCharacters(spoilersOkay){

  //Alphabetize the Character Picker
  // NEEDS TO BE FIXED - SCREWS UP WHEN CHARACTERS ARE REMOVED DUE TO SPOILERS
  // characters.sort(function(a, b){
  //     var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase()
  //     if (nameA < nameB) //sort string ascending
  //         return -1
  //     if (nameA > nameB)
  //         return 1
  //     return 0 //default return value (no sorting)
  // })

  //Automatically sets the site to spoiler-free mode (default to prevent issues)
  var spoilers = false;
  document.getElementById("mangaCheckbox").checked = false;

  //Checks to see if this function is being run with spoilers
  if(spoilersOkay){
    spoilers = true;
    document.getElementById("mangaCheckbox").checked = true;
  }

  //Creates and auto-populates dropdown menu
  var selectText = "<p>What happens to <select name = 'character'>"
  for(var i = 0; i < characters.length; i++){
    if(spoilers == true){
      selectText += "<option value='"+characters[i]["name"]+"'>"+characters[i]["name"]+"</option>"
    }
    else if(characters[i]["manga spoiler"] == false){
      selectText += "<option value='"+characters[i]["name"]+"'>"+characters[i]["name"]+"</option>"
    }
  }
  selectText += "</select>?</p>"
  document.getElementById("spoilerForm").innerHTML = selectText;
}

//The meat and potatoes of this site, generating the page and the spoilers
function getSpoiler(characterIndex){
  var mangaSpoilers = false;
  if (document.getElementById("mangaCheckbox").checked == true){
    mangaSpoilers = true;
  }
  getCharacters(mangaSpoilers);
  var randomCharacter = 0;
  if (characterIndex == undefined){
    randomCharacter = Math.floor(Math.random() * characters.length);
    if(mangaSpoilers == false){
      while (characters[randomCharacter]["manga spoiler"] == true){
        randomCharacter = Math.floor(Math.random() * characters.length);
      }
    }
  }
  else
  {
    randomCharacter = characterIndex;
  }
  // var randomCharacter = characters.length-1;
  var randomStatement = Math.floor(Math.random() * statements.length);
  // var randomStatement = statements.length-1;

  if(mangaSpoilers == false){
    while (statements[randomStatement]["manga spoiler"] == true){
      randomStatement = Math.floor(Math.random() * statements.length);
    }
  }
  var character = characters[randomCharacter]["name"];
  var picName = character;
  var pic2 = "";
  var pic3 = "";
  var statement = statements[randomStatement]["text"];
  if(statements[randomStatement]["img"] != null){
    pic2 = statements[randomStatement]["img"];
    if(pic2 == "Basement" && mangaSpoilers == false){
      pic2 = "BasementNoSpoiler"
    }
  }

  if(character == "[TITAN]"){
    var randomTitan = Math.floor(Math.random() * titans.length)
    newCharacter = character.replace("[TITAN]", titans[randomTitan]["name"]);
    character = newCharacter
  };
  if(statement.indexOf("[TITAN]") > -1){
    var randomTitan = Math.floor(Math.random() * titans.length)
    if(mangaSpoilers == false){
      while (titans[randomTitan]["manga spoiler"] == true){
        randomTitan = Math.floor(Math.random() * titans.length);
      }
    }
    newStatment = statement.replace("[TITAN]", titans[randomTitan]["name"]);
    statement = newStatment;
    pic2 = titans[randomTitan]["img"]
  };
  if(statement.indexOf('[CHARACTER]') > -1){
    randomCharacter = Math.floor(Math.random() * characters.length);
    if(mangaSpoilers == false){
      while (characters[randomCharacter]["manga spoiler"] == true){
        randomCharacter = Math.floor(Math.random() * titans.length);
      }
    }
    newStatment = statement.replace("[CHARACTER]", characters[randomCharacter]["name"]);
    statement = newStatment;
    pic2 = characters[randomCharacter]["name"];
  };
  if(statement.indexOf('[OTHERCHARACTER]') > -1){
    var randomCharacter = Math.floor(Math.random() * characters.length);
    if(mangaSpoilers == false){
      while (characters[randomCharacter]["manga spoiler"] == true){
        randomCharacter = Math.floor(Math.random() * titans.length);
      }
    }
    newStatment = statement.replace("[OTHERCHARACTER]", characters[randomCharacter]["name"]);
    statement = newStatment;
    pic3 = characters[randomCharacter]["name"];
  };
  if(statement.indexOf('[SIDE]') > -1){
    var randomSide = Math.floor(Math.random() * sides.length)
    if(mangaSpoilers == false){
      while (sides[randomSide]["manga spoiler"] == true){
        randomSide = Math.floor(Math.random() * sides.length);
      }
    }
    newStatment = statement.replace("[SIDE]", sides[randomSide]["name"]);
    statement = newStatment;
    pic2 = sides[randomSide]["img"];
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
    statement = " gets tired of the lack of shit and quits to pursue his art full time";
  }

  if(picName == "Reiner" && mangaSpoilers == false){
    picName = "ReinerNoSpoiler"
  }
  if(pic2 == "Reiner" && mangaSpoilers == false){
    pic2 = "ReinerNoSpoiler"
  }
  if(pic3 == "Reiner" && mangaSpoilers == false){
    pic3 = "ReinerNoSpoiler"
  }

  var spoiler = "<p>"+character + " " + statement + ending+"</p>";
  var pic = "<img src = 'img/"+removeSpace(picName)+".png'></img>"
  if (pic2 != ""){
    pic += "<img src = 'img/"+removeSpace(pic2)+".png'></img>"
    if (pic3 != ""){
      pic += "<img src = 'img/"+removeSpace(pic3)+".png'></img>"
    }
  }

  var ChanceVal = Math.floor(Math.random() * 1000);
  if (ChanceVal == 999){
    spoiler = "<p>The secret is Morphogenetic Fields.</p>";
    pic = "<img src = 'img/PATHS.png'></img>";
  }

document.getElementById("spoiler").innerHTML = spoiler;
document.getElementById("pics").innerHTML = pic;
};
