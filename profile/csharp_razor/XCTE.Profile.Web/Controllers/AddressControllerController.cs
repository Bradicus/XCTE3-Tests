using System.Data.SqlClient;

namespace XCTE.Profile.Profile
{
    /**
    *
    */
    public class AddressControllerControllerController : ApiController
    {
        
        ///
        /// Web API get single AddressController
        ///
        public AddressController GetAddressController(long Id)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                IAddressControllerDataStore eng = new AddressControllerDataStore();
                var obj = eng.RetrieveOneById(id, conn);
                return obj;
            }
        }
    }
} // namespace XCTE.Profile.Profile


