using System.Collections.Generic;

namespace 
{
    public class User
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime LastLoginDate { get; set; }
        public string Username { get; set; }
        public Address MailingAddress { get; set; }
        public Address PhysicalAddress { get; set; }
        public List<Role> Roles { get; set; }
    }
} // namespace 

