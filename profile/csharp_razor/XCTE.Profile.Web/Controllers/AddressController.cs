using System.Data.SqlClient;

namespace XCTE.Profile.Profile
{
    /**
    *
    */
    public class AddressControllerController : ApiController
    {
        
        ///
        /// Web API get single address
        ///
        public Address GetAddress(long Id)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                IAddressDataStore eng = new AddressDataStore();
                var obj = eng.RetrieveOneById(id, conn);
                return obj;
            }
        }
    }
} // namespace XCTE.Profile.Profile


