$(document).ready(function() {
    var topMsg = document.getElementById('topMsg');
    var secMsg = document.getElementById('secMsg');


    var yoda = { name: "yoda", hp: 20, attack: 30, counter: 25, image: "./assets/images/yoda.jpg" };
    var jarjar = { name: "jarjar", hp: 30, attack: 30, counter: 25, image: "./assets/images/jarjar.jpg" };
    var ewok = { name: "ewok", hp: 20, attack: 30, counter: 25, image: "./assets/images/ewok.jpg" };
    var rey = { name: "rey", hp: 20, attack: 30, counter: 25, image: "./assets/images/rey.jpg" };

    var characters = [];
    characters.push(yoda);
    characters.push(jarjar);
    characters.push(ewok);
    characters.push(rey);

    var exp = .15;
    var chars;
    var player;
    var heroHp;
    var heroAttack;
    var heroCounter;
    var heroName;
    var heroPlace;
    var heroImage;
    var imageCharacter;
    var playerCharacter;
    var heroPicked = false;
    var defenderPicked = false;
    var defenderHp;
    var defenderAttack;
    var defenderCounter;
    var defenderName;
    var defenderPlace;
    var defenderImage;
    var player=$("#player");


    function drawChars() {
      $('#characters').empty();
      chars = $("#characters");
      for (i = 0; i < characters.length; i++) {
        imageCharacter = $("<img>");
        imageCharacter.addClass("char-image");
        imageCharacter.attr("src", characters[i].image);
        imageCharacter.attr("hp", characters[i].hp);
        imageCharacter.attr("attack", characters[i].attack);
        imageCharacter.attr("counter", characters[i].counter);
        imageCharacter.attr("name", characters[i].name);
        imageCharacter.attr("place", i);
        let status = "HP: " + characters[i].hp;
        chars.append(imageCharacter);
        let newDivC = $("<div>");
        newDivC.addClass("bottom-left");
        newDivC.text(status);
        $("#characters").append(newDivC);


      };

    };
    drawChars();

    chars.on("click", ".char-image", function () {

      if (heroPicked != true) {

        heroHp = ($(this).attr("hp"));
        heroAttack = ($(this).attr("attack"));
        heroCounter = ($(this).attr("counter"));
        heroName = ($(this).attr("name"));
        heroPlace = ($(this).attr("place"));
        heroImage = ($(this).attr("src"));

        console.log(heroHp + heroAttack + heroCounter + heroName);

        characters.splice(heroPlace, 1);
        console.log(characters);
        

        heroPicked = true;


        secMsg.innerHTML = `<p> <br>
        <h2> Now Pick Who You Would Like to Fight</h2></p>`

        playerCharacter = $("<img>");
        playerCharacter.addClass("play-image");
        playerCharacter.attr("src", heroImage);
        player.append(playerCharacter);
        let newDiv = $("<div>");
        newDiv.addClass("bottom-left");
        let status = "HP: " + heroHp;
        newDiv.text(status);
        $("#player").append(newDiv);

      }
      else if (defenderPicked != true) {

        defenderHp = ($(this).attr("hp"));
        defenderAttack = ($(this).attr("attack"));
        defenderCounter = ($(this).attr("counter"));
        defenderName = ($(this).attr("name"));
        defenderPlace = ($(this).attr("place"));
        defenderImage = ($(this).attr("src"));

        console.log(defenderHp + defenderAttack + defenderCounter + defenderName);

        characters.splice(defenderPlace, 1);
        console.log(characters);
        defenderPicked = true;

                secMsg.innerHTML = `<p> <br>
        <h2> Now Fight !!!!!</h2></p>`
        
        playerCharacter = $("<img>");
        playerCharacter.addClass("def-image");
        playerCharacter.attr("src", defenderImage);
        player.append(playerCharacter);
        let newDivD = $("<div>");
        newDivD.addClass("bottom-left");
        let status = "HP: " + defenderHp;
        newDivD.text(status);
        $("#player").append(newDivD);


            // char.innerHTML = `<button id="button" class="abutton">Attack!</button>`;

        // $("p").hide();

      };
      drawChars();

    //   I would do a function call to game logic here.


    }).on("click", "#button", function() {

      console.log("button attack!");







    });






    topMsg.innerHTML = `
        <h1> Lightsaber Battle</h1>`
    secMsg.innerHTML = `
        <h2> Please Click the Character You Would Like Use As Your Fighter</h2>
        <br>`







 });