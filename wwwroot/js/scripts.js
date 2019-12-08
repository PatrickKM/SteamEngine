let url = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=37BD3121F77FDE3ED7D589EDAED50A61&include_appinfo=1&include_played_free_games=1';
let steamID = 'steamid=76561198025683997';

// document.getElementById("valueSteamID").value = steamID;

// STEAM ID: steamid=76561198025683997

let container = document.getElementById("moviesRoot");

let fetchUrl = url + '&' + steamID;
fetch(fetchUrl)
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
            playtime.textContent = steamName[0].playtime_forever;
            banner.setAttribute("src", "http://media.steampowered.com/steamcommunity/public/images/apps/" + steamName[0].appid + "/" + steamName[0].img_logo_url + ".jpg");

            movieSection.appendChild(title);
            movieSection.appendChild(playtime);
            movieSection.appendChild(banner);
            container.appendChild(movieSection);
        })

    .catch(function (err) {
        console.log('error: ' + err);
    });