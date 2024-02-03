using System.Data.SqlClient;

namespace XCTE.Profile.Profile
{
    /**
    *
    */
    public class ProfileAdminControllerController : ApiController
    {
        
        ///
        /// Web API get single profile admin
        ///
        public ProfileAdmin GetProfileAdmin(long Id)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                IProfileAdminDataStore eng = new ProfileAdminDataStore();
                var obj = eng.RetrieveOneById(id, conn);
                return obj;
            }
        }
    }
} // namespace XCTE.Profile.Profile


