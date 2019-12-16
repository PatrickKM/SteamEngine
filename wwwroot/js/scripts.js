// STEAM ID: steamid=76561198025683997 (Jesper) 
// STEAM ID: steamid=76561197960434622 (STEAM) 
// STEAM ID: steamid=76561198001921578 (Patrick)
// STEAM ID: steamid=76561198039364734 (Catie)

// This function fetches the Steam WEB API
// The first thing we do is create variables to be used in the fetch
// The API uses a Proxy to bypass the CORS Policy block, as our MVC does not contain the CORS header tags.
function steamIdFinder() {
    let url = 'https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=84B03B60EEC3A7DF3D578C07814939E5&include_appinfo=1&include_played_free_games=1';
    let steamID = document.getElementById("steamID").value;
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    let container = document.getElementById("gameRoot");
    let fetchUrl = url + '&steamid=' + steamID;

    // We fetch the API with the Proxy URL added before the API, so we bypass the CORS Policy.
    fetch(proxyurl + fetchUrl)
        // We return the API Data as json for our JavaScript to read.
        .then(response => {
            return response.json();
        })
        .then(steamID => {
            // Console logging the API information, to see if the API properly works.
            console.log(steamID);

            // Creating HTML Elements to house all the API data.
            const steamGameSection = document.createElement('section');
            steamGameSection.setAttribute('class', 'column');
            steamGameSection.setAttribute('id', 'gameSection');

            const title = document.createElement('p');
            const playtime = document.createElement('p');
            const banner = document.createElement('img');

            // Creating a variable to randomize which game you'll get.
            let steamName = steamID.response.games.sort(function (a, b) { return 0.5 - Math.random() });

            // As we've made a variable that makes it random, we can now just use the first entry in the array to get a random game, every time.
            title.textContent = steamName[0].name;
            playtime.textContent = 'Amount of playtime on game: ' + steamName[0].playtime_forever + ' minutes';
            banner.setAttribute("src", "https://steamcdn-a.akamaihd.net/steam/apps/" + steamName[0].appid + "/header.jpg");
            banner.setAttribute("class", "bannerimg");

            // Appending all HTML Elements to the DOM.
            steamGameSection.appendChild(title);
            steamGameSection.appendChild(playtime);
            steamGameSection.appendChild(banner);
            container.appendChild(steamGameSection);
        })

        // If any JavaScript error occurs, it will be shown in the console log
        .catch(function (err) {
            console.log('error: ' + err);
        });
}

// This function's purpose is to delete (reset) the games, the other function creates for the user.
// The function will delete all entries.
function resetGames() {
    let removeGames = document.querySelectorAll("[id='gameSection']");
    for (let i = 0; i < removeGames.length; i++)
        removeGames[i].parentNode.removeChild(removeGames[i]);
}