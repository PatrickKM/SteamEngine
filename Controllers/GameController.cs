using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SteamEngine.Models;

namespace SteamEngine.Controllers
{
public class GameController : Controller 
    {

    // GET: Student
    public ActionResult Index()
    {
        IEnumerable<GameViewModel> game = null;

        using (var client = new HttpClient())
        {
            client.BaseAddress = new Uri("https://api.steampowered.com/IPlayerService/GetOwnedGames/v1/?key=37BD3121F77FDE3ED7D589EDAED50A61&steamid=76561198025683997");
            //HTTP GET
            var responseTask = client.GetAsync("game");
            responseTask.Wait();

            var result = responseTask.Result;
            if (result.IsSuccessStatusCode)
            {
                var readTask = result.Content.ReadAsAsync<IList<GameViewModel>>();
                readTask.Wait();

                game = readTask.Result;
            }
            else //web api sent error response 
            {
                //log response status here..

                game = Enumerable.Empty<GameViewModel>();

                ModelState.AddModelError(string.Empty, "Server error. Please contact administrator.");
            }
        }
        return View(game);
    }
 }
}