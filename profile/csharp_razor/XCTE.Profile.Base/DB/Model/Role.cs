using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace XCTE.Profile.Base.DB.Model
{
    
    public class Role
    {
        public const int ARRAYSZ_ID = 10;
        public const int ARRAYSZ_NAME = 50;
        public long Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public List<Permission> Permissions { get; set; }
    }
} // namespace XCTE.Profile.Base.DB.Model


