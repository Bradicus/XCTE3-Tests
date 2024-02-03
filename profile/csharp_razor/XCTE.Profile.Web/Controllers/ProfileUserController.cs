using System.Data.SqlClient;

namespace XCTE.Profile.Profile
{
    /**
    *
    */
    public class ProfileUserControllerController : ApiController
    {
        
        ///
        /// Web API get single profile user
        ///
        public ProfileUser GetProfileUser(long Id)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                IProfileUserDataStore eng = new ProfileUserDataStore();
                var obj = eng.RetrieveOneById(id, conn);
                return obj;
            }
        }
    }
} // namespace XCTE.Profile.Profile


