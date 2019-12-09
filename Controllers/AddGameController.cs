using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Exercise01.Controllers
{
    public class AddGameController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public IActionResult Index(IFormCollection formCollection)
        {
            string appId = "https://steamcdn-a.akamaihd.net/steam/apps/" + formCollection["AppId"] + "/header.jpg";
            string name = formCollection["Name"];
            string description = formCollection["Description"];

            ViewData["AppId"] = appId;
            ViewData["Name"] = name;
            ViewData["Description"] = description;

            return View();
        }
    }
}