using System.Data.SqlClient;

namespace XCTE.Profile.Profile
{
    /**
    *
    */
    public class ProfileAdminControllerControllerController : ApiController
    {
        
        ///
        /// Web API get single ProfileAdminController
        ///
        public ProfileAdminController GetProfileAdminController(long Id)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                IProfileAdminControllerDataStore eng = new ProfileAdminControllerDataStore();
                var obj = eng.RetrieveOneById(id, conn);
                return obj;
            }
        }
    }
} // namespace XCTE.Profile.Profile


