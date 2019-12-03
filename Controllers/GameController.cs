using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SteamEngine.Controllers{
public class GameController : Controller 
    {

    // GET: Student
    public ActionResult Index()
    {
        IEnumerable<GameViewModel> students = null;

        using (var client = new HttpClient())
        {
            client.BaseAddress = new Uri("https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=7D47164FD693877395D535BF6049339D&steamid=76561198025683997&include_appinfo=1&include_played_free_games=1");
            //HTTP GET
            var responseTask = client.GetAsync("game");
            responseTask.Wait();

            var result = responseTask.Result;
            if (result.IsSuccessStatusCode)
            {
                var readTask = result.Content.ReadAsAsync<IList<GameViewModel>>();
                readTask.Wait();

                students = readTask.Result;
            }
            else //web api sent error response 
            {
                //log response status here..

                students = Enumerable.Empty<GameViewModel>();

                ModelState.AddModelError(string.Empty, "Server error. Please contact administrator.");
            }
        }
        return View(students);
    }
 }
}