let url = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=84B03B60EEC3A7DF3D578C07814939E5&include_appinfo=1&include_played_free_games=1';
let steamID = 'steamid=76561198039364734';
const proxyurl = "https://cors-anywhere.herokuapp.com/";

// document.getElementById("valueSteamID").value = steamID;

// STEAM ID: steamid=76561198025683997 (Jesper) Dead / Private
// STEAM ID: steamid=76561197960434622 (STEAM) Dead / Private
// STEAM ID: steamid=76561198001921578 (Patrick)
// STEAM ID: steamid=76561198039364734 (Catie)

let container = document.getElementById("gameRoot");

let fetchUrl = url + '&' + steamID;
fetch(proxyurl + fetchUrl)
    .then(response => {
        return response.json();
    })
    .then(steamID => {
        console.log(steamID);

            const movieSection = document.createElement('section');
            movieSection.setAttribute('class', 'column');

            const idInput = document.createElement('input');
            idInput.setAttribute("id", "valueSteamID");
            idInput.setAttribute("type", "text");

            const title = document.createElement('p');
            const playtime = document.createElement('p');
            const banner = document.createElement('img');

            let steamName = steamID.response.games.sort(function (a, b) { return 0.5 - Math.random() });

            title.textContent = steamName[0].name;
            playtime.textContent = 'Amount of playtime on game: ' + steamName[0].playtime_forever + ' minutes';
        banner.setAttribute("src", "https://steamcdn-a.akamaihd.net/steam/apps/" + steamName[0].appid + "/header.jpg");
            banner.setAttribute("class", "bannerimg");

            movieSection.appendChild(title);
            movieSection.appendChild(playtime);
            movieSection.appendChild(banner);
            container.appendChild(movieSection);
    })

    .catch(function (err) {
        console.log('error: ' + err);
    });