using System.Data.SqlClient;

namespace XCTE.Profile.Profile
{
    /**
    *
    */
    public class RoleControllerControllerController : ApiController
    {
        
        ///
        /// Web API get single RoleController
        ///
        public RoleController GetRoleController(long Id)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                IRoleControllerDataStore eng = new RoleControllerDataStore();
                var obj = eng.RetrieveOneById(id, conn);
                return obj;
            }
        }
    }
} // namespace XCTE.Profile.Profile


