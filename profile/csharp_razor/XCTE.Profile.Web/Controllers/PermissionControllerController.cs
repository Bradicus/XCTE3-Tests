using System.Data.SqlClient;

namespace XCTE.Profile.Profile
{
    /**
    *
    */
    public class PermissionControllerControllerController : ApiController
    {
        
        ///
        /// Web API get single PermissionController
        ///
        public PermissionController GetPermissionController(long Id)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                IPermissionControllerDataStore eng = new PermissionControllerDataStore();
                var obj = eng.RetrieveOneById(id, conn);
                return obj;
            }
        }
    }
} // namespace XCTE.Profile.Profile


