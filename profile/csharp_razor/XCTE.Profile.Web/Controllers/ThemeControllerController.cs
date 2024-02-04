using System.Data.SqlClient;

namespace XCTE.Profile.Profile
{
    /**
    *
    */
    public class ThemeControllerControllerController : ApiController
    {
        
        ///
        /// Web API get single ThemeController
        ///
        public ThemeController GetThemeController(long Id)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                IThemeControllerDataStore eng = new ThemeControllerDataStore();
                var obj = eng.RetrieveOneById(id, conn);
                return obj;
            }
        }
    }
} // namespace XCTE.Profile.Profile


