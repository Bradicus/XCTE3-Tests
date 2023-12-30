using System.Collections.Generic;
using System.Web.Http;
using XCTE.Base.Data.Model;
using XCTE.Base.Data.Io;
using System.Data.SqlClient;
using System.Data.SqlClient;

namespace XCTE.API.Controllers
{
    public class AddressController : ApiController
    {
        
        ///
        /// Web API get single address
        ///
        public Address GetAddress(int Id)
        {
            using (SqlConnection conn = new SqlConnection())
            {
                IAddressDataStore eng = new AddressDataStore();
                var obj = eng.RetrieveOneById(id, conn);
                return obj;
            }
        }
    }
} // namespace XCTE.API.Controllers

