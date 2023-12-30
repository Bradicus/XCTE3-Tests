using System.Collections.Generic;
using System.Web.Http;
using XCTE.Base.Data.Model;
using XCTE.Base.Data.Io;
using System.Data.SqlClient;
using System.Data.SqlClient;

namespace XCTE.API.Controllers
{
    public class RoleController : ApiController
    {
        
        ///
        /// Web API get single role
        ///
        public Role GetRole(string Id)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                IRoleDataStore eng = new RoleDataStore();
                var obj = eng.RetrieveOneById(id, conn);
                return obj;
            }
        }
    }
} // namespace XCTE.API.Controllers

