let gamesOwned = "https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=7D47164FD693877395D535BF6049339D&steamid=76561198025683997&include_appinfo=1&include_played_free_games=1";



let container = document.getElementById("game-container");


fetch(gamesOwned)
    .then(response => {
        return response.json();
    })
    .then(data => {
        const box = document.createElement("div");
        const section = document.createElement("section");

        box.setAttribute("class", "grid-item");

        const h2 = document.createElement("h2");
        h2.setAttribute("class", "game-title");

        h2.innerText = data.appid;

        box.appendChild(section);
        section.appendChild(h2);
        container.appendChild(box);


    })
    .catch(function (err) {
        console.log('error: ' + err);

    })