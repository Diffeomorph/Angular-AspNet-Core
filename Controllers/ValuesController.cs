using System;
using Microsoft.AspNetCore.Mvc;

namespace HelloWorld
{
    [Route("api/[Controller]")]
    public class ValuesController : Controller
    {
        [HttpGet]
        public IActionResult Greetings() {
            return Ok("Hello from ASP.NET Core Web API.");
        }
    }
}
