using System.Collections.Generic;
using System.Web.Http;
using XCTE.Base.Data.Model;
using XCTE.Base.Data.Io;
using System.Data.SqlClient;
using System.Data.SqlClient;

namespace XCTE.API.Controllers
{
    public class UserController : ApiController
    {
        
        ///
        /// Web API get single user
        ///
        public User GetUser(string Id)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                IUserDataStore eng = new UserDataStore();
                var obj = eng.RetrieveOneById(id, conn);
                return obj;
            }
        }
    }
} // namespace XCTE.API.Controllers

