using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Http;

namespace SteamEngine.Controllers
{
    public class RandomGameController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(IFormCollection formCollection)
        {
            string steam64Id = "LIIIIIIIINK";

            ViewData["Steam64Id"] = steam64Id;

            return View();
        }
    }
}