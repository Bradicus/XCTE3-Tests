using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using XCTE.Base.Data.Model;

namespace XCTE.Base.Data.Config
{
    public class UserConfiguration : IEntityTypeConfiguration<User>
    {
        
        //
        // Configuration 
        //
        public void Configure(EntityTypeBuilder<User> builder)
        {
            builder.ToTable("User", "dbo");
            builder.Property(e => e.Id)
                .HasColumnName("id");
            
            builder.Property(e => e.FirstName)
                .HasColumnName("firstName");
            
            builder.Property(e => e.LastName)
                .HasColumnName("lastName");
            
            builder.Property(e => e.Username)
                .HasColumnName("username");
            
            builder.Property(e => e.Email)
                .HasColumnName("email");
            
            builder.Property(e => e.CreatedDate)
                .HasColumnName("createdDate");
            
            builder.Property(e => e.LastLoginDate)
                .HasColumnName("lastLoginDate");
            
            builder.Property(e => e.MailingAddress)
                .HasColumnName("mailingAddress");
            
            builder.Property(e => e.PhysicalAddress)
                .HasColumnName("physicalAddress");
            
            builder.Property(e => e.Roles)
                .HasColumnName("roles");
            
        }
    }
} // namespace XCTE.Base.Data.Config

