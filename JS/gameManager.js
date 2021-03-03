let GameManager = {
    setGameStart: function (classType) {
        this.resetPlayer(classType);
        this.setPreFight();
    },
    resetPlayer: function (classType) {
        switch (classType) {
            case "SSGGoku":
                player = new Player(classType, 200, 200, 300, 90, 100);
                break;
            case "VegetaSSGSS":
                player = new Player(classType, 300, 300, 300, 125, 100);
                break;
            case "TrunksSS":
                player = new Player(classType, 150, 200, 100, 50, 90);
                break;
            case "Picolo":
                player = new Player(classType, 200, 250, 200, 50, 90);
                break;
        }
        let getInterface = document.querySelector(".interface");
        getInterface.innerHTML = '<img src="img/avatar-player/'+ classType +'.png" class="img-avatar"><div><h3>' + classType + '</h3><p>Health:' + player.health + '</p><p>ki:' + player.ki + '</p><p>strength:' + player.strength + '</p><p>agility:' + player.agility + '</p><p>speed:' + player.speed + '</p></div>';

    },
    setPreFight: function () {

    }
}