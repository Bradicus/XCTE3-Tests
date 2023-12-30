using XCTE.Base.Data.Io;
using XCTE.Base.Data.Model;
using System;
using System.Data.SqlClient;
using System.Collections.Generic;

namespace XCTE.Base.Data.Io
{
    public class UserDataStore : IUserDataStore
    {
        
        ///
        /// Create new record for this model
        /// If you are not using ambient transactions, trans must be defined!
        ///
        public void Create(User o, SqlConnection conn, SqlTransaction trans = null)
        {
            string sql = @"INSERT INTO User(
                [aId],
                [aFirstName],
                [aLastName],
                [aUsername],
                [aEmail],
                [aCreatedDate],
                [aLastLoginDate],
                [aMailingAddress],
                [aPhysicalAddress],
                [aRoles]
                
            ) VALUES (
                @Id,
                @FirstName,
                @LastName,
                @Username,
                @Email,
                @CreatedDate,
                @LastLoginDate,
                @MailingAddress,
                @PhysicalAddress,
                @Roles
                
            )";
            
            try
            {
                using(SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    cmd.Transaction = trans;
                    cmd.Parameters.AddWithValue("@Id", o.Id);
                    cmd.Parameters.AddWithValue("@FirstName", o.FirstName);
                    cmd.Parameters.AddWithValue("@LastName", o.LastName);
                    cmd.Parameters.AddWithValue("@Username", o.Username);
                    cmd.Parameters.AddWithValue("@Email", o.Email);
                    cmd.Parameters.AddWithValue("@CreatedDate", o.CreatedDate);
                    cmd.Parameters.AddWithValue("@LastLoginDate", o.LastLoginDate);
                    cmd.Parameters.AddWithValue("@MailingAddress", o.MailingAddress);
                    cmd.Parameters.AddWithValue("@PhysicalAddress", o.PhysicalAddress);
                    cmd.Parameters.AddWithValue("@Roles", o.Roles);
                    
                }
            }
            catch(Exception e)
            {
                throw new Exception("Error inserting User into database", e);
            };
        }
        
        ///
        /// Update the record for this model
        ///
        public void Update(User o, SqlConnection conn, SqlTransaction trans)
        {
            string sql = @"UPDATE User SET 
                [aId] = @Id,
                [aFirstName] = @FirstName,
                [aLastName] = @LastName,
                [aUsername] = @Username,
                [aEmail] = @Email,
                [aCreatedDate] = @CreatedDate,
                [aLastLoginDate] = @LastLoginDate,
                [aMailingAddress] = @MailingAddress,
                [aPhysicalAddress] = @PhysicalAddress,
                [aRoles] = @Roles
            WHERE";
            
            try
            {
                using(SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    cmd.Transaction = trans;
                    cmd.Parameters.AddWithValue("@Id", o.Id);
                    cmd.Parameters.AddWithValue("@FirstName", o.FirstName);
                    cmd.Parameters.AddWithValue("@LastName", o.LastName);
                    cmd.Parameters.AddWithValue("@Username", o.Username);
                    cmd.Parameters.AddWithValue("@Email", o.Email);
                    cmd.Parameters.AddWithValue("@CreatedDate", o.CreatedDate);
                    cmd.Parameters.AddWithValue("@LastLoginDate", o.LastLoginDate);
                    cmd.Parameters.AddWithValue("@MailingAddress", o.MailingAddress);
                    cmd.Parameters.AddWithValue("@PhysicalAddress", o.PhysicalAddress);
                    cmd.Parameters.AddWithValue("@Roles", o.Roles);
                    
                    cmd.ExecuteScalar();
                }
            }
            catch(Exception e)
            {
                throw new Exception("Error updating user with id = " + o.Id, e);
            };
        }
        
        /// <summary>
        /// Reads data set from sql database
        /// </summary>
        public IEnumerable<User> RetrieveAll(SqlConnection conn, SqlTransaction trans = null)
        {
            List<User> resultList = new List<User>();
            string sql = @"SELECT 
                [aId],
                [aFirstName],
                [aLastName],
                [aUsername],
                [aEmail],
                [aCreatedDate],
                [aLastLoginDate],
                [aMailingAddress],
                [aPhysicalAddress],
                [aRoles]
                
            FROM User";
            
            try
            {
                using(SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    cmd.Transaction = trans;
                    
                    SqlDataReader results = cmd.ExecuteReader();
                    while(results.Read())
                    {
                        var o = new User();
                        o.Id = Convert.ToString(results["aId"]);
                        o.FirstName = Convert.ToString(results["aFirstName"]);
                        o.LastName = Convert.ToString(results["aLastName"]);
                        o.Username = Convert.ToString(results["aUsername"]);
                        o.Email = Convert.ToString(results["aEmail"]);
                    }
                }
            }
            catch(Exception e)
            {
                throw new Exception("Error retrieving all items from User", e);
            };
            
            return resultList;
        }
        
        /// <summary>
        /// Reads one result using the specified filter parameters
        /// </summary>
        public User RetrieveOneById(string id, SqlConnection conn, SqlTransaction trans = null)
        {
            var o = new User();
            string sql = @"SELECT TOP 1 
            FROM user
            WHERE 
                [aId] = @id";
            
            try
            {
                using(SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    cmd.Transaction = trans;
                    
                    cmd.Parameters.AddWithValue("@id", id);
                    SqlDataReader results = cmd.ExecuteReader();
                    while(results.Read())
                    {
                        o.Id = Convert.ToString(results["aId"]);
                        o.FirstName = Convert.ToString(results["aFirstName"]);
                        o.LastName = Convert.ToString(results["aLastName"]);
                        o.Username = Convert.ToString(results["aUsername"]);
                        o.Email = Convert.ToString(results["aEmail"]);
                    }
                }
            }
            catch(Exception e)
            {
                throw new Exception("Error retrieving one item from user", e);
            };
            
            return o;
        }
    }
} // namespace XCTE.Base.Data.Io

