using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace XCTE.Profile.Base.DB.Model
{
    
    public class Profile
    {
        public const int ARRAYSZ_FIRST_NAME = 255;
        public const int ARRAYSZ_LAST_NAME = 255;
        public const int ARRAYSZ_USERNAME = 255;
        public const int ARRAYSZ_EMAIL = 255;
        
        public long Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Username { get; set; }
        public string Email { get; set; }
        
        public DateTime CreatedDate { get; set; }
        public DateTime LastLoginDate { get; set; }
        public Address MailingAddress { get; set; }
        public Address PhysicalAddress { get; set; }
        public List<Role> Roles { get; set; }
        public Theme Theme { get; set; }
        public bool Active { get; set; }
    }
} // namespace XCTE.Profile.Base.DB.Model


