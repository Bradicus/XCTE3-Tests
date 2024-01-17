using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace XCTE.Profile.Base.DB.Model.model
{
    
    public class Address
    {
        public const int ARRAYSZ_STREET_1 = 50;
        public const int ARRAYSZ_STREET_2 = 50;
        public const int ARRAYSZ_CITY = 50;
        public const int ARRAYSZ_STATE = 2;
        public const int ARRAYSZ_COUNTRY = 50;
        public const int ARRAYSZ_ZIP_CODE = 20;
        public long Id { get; set; }
        public string Street1 { get; set; }
        public string Street2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string ZipCode { get; set; }
        public bool Active { get; set; }
    }
} // namespace XCTE.Profile.Base.DB.Model.model


