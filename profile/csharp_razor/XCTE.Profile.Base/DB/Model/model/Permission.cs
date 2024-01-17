using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace XCTE.Profile.Base.DB.Model.model
{
    
    public class Permission
    {
        public const int ARRAYSZ_ID = 10;
        public const int ARRAYSZ_CODE = 50;
        public long Id { get; set; }
        public string Code { get; set; }
        public string Description { get; set; }
    }
} // namespace XCTE.Profile.Base.DB.Model.model


