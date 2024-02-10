using System.Data.SqlClient;

namespace XCTE.API.Controllers
{
    /**
    *
    */
    public class UserControllerController : ApiController
    {
        
        ///
        /// Web API get single user
        ///
        public User GetUser(long Id)
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


