using System.Data.SqlClient;

namespace XCTE.Profile.Profile
{
    /**
    *
    */
    public class PermissionControllerController : ApiController
    {
        
        ///
        /// Web API get single permission
        ///
        public Permission GetPermission(long Id)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                IPermissionDataStore eng = new PermissionDataStore();
                var obj = eng.RetrieveOneById(id, conn);
                return obj;
            }
        }
    }
} // namespace XCTE.Profile.Profile


