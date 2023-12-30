using System.Collections.Generic;
using System.Web.Http;
using XCTE.Base.Data.Model;
using XCTE.Base.Data.Io;
using System.Data.SqlClient;

namespace XCTE.API.Controllers
{
    public class ThemeControllerController : ApiController
    {
        
        ///
        /// Web API get single theme
        ///
        public Theme GetTheme(long Id)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                IThemeDataStore eng = new ThemeDataStore();
                var obj = eng.RetrieveOneById(id, conn);
                return obj;
            }
        }
    }
} // namespace XCTE.API.Controllers

