using System.Data.SqlClient;

namespace XCTE.Profile.Profile
{
    /**
    *
    */
    public class ProfileUserControllerControllerController : ApiController
    {
        
        ///
        /// Web API get single ProfileUserController
        ///
        public ProfileUserController GetProfileUserController(long Id)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                IProfileUserControllerDataStore eng = new ProfileUserControllerDataStore();
                var obj = eng.RetrieveOneById(id, conn);
                return obj;
            }
        }
    }
} // namespace XCTE.Profile.Profile


