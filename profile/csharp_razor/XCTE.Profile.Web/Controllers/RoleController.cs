using System.Data.SqlClient;

namespace XCTE.Profile.Profile
{
    /**
    *
    */
    public class RoleControllerController : ApiController
    {
        
        ///
        /// Web API get single role
        ///
        public Role GetRole(long Id)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                IRoleDataStore eng = new RoleDataStore();
                var obj = eng.RetrieveOneById(id, conn);
                return obj;
            }
        }
    }
} // namespace XCTE.Profile.Profile


