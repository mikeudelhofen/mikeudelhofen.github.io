using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace m_u.Controllers
{
    public class HomeController : Controller
    {
        //
        // GET: /Home/

        public ActionResult Index()
        {
            return View();
        }

        public ActionResult Landing()
        {
            return PartialView("Landing");
        }

        public ActionResult navAbout()
        {
            return PartialView("About");
        }

        public ActionResult navVideo()
        {
            return PartialView("Video");
        }

        public ActionResult navContact()
        {
            return PartialView("Contact");
        }
    }
}
