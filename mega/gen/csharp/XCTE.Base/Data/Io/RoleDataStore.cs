using XCTE.Base.Data.Io;
using XCTE.Base.Data.Model;
using System;
using System.Data.SqlClient;
using System.Collections.Generic;

namespace XCTE.Base.Data.Io
{
    public class RoleDataStore : IRoleDataStore
    {
        
        ///
        /// Create new record for this model
        /// If you are not using ambient transactions, trans must be defined!
        ///
        public void Create(Role o, SqlConnection conn, SqlTransaction trans = null)
        {
            string sql = @"INSERT INTO Role(
                [aId],
                [aName],
                [aDescription]
            ) VALUES (
                @Id,
                @Name,
                @Description
            )";
            
            try
            {
                using(SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    cmd.Transaction = trans;
                    cmd.Parameters.AddWithValue("@Id", o.Id);
                    cmd.Parameters.AddWithValue("@Name", o.Name);
                    cmd.Parameters.AddWithValue("@Description", o.Description);
                    
                }
            }
            catch(Exception e)
            {
                throw new Exception("Error inserting Role into database", e);
            };
        }
        
        ///
        /// Update the record for this model
        ///
        public void Update(Role o, SqlConnection conn, SqlTransaction trans)
        {
            string sql = @"UPDATE Role SET 
                [aId] = @Id,
                [aName] = @Name,
                [aDescription] = @Description
            WHERE";
            
            try
            {
                using(SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    cmd.Transaction = trans;
                    cmd.Parameters.AddWithValue("@Id", o.Id);
                    cmd.Parameters.AddWithValue("@Name", o.Name);
                    cmd.Parameters.AddWithValue("@Description", o.Description);
                    
                    cmd.ExecuteScalar();
                }
            }
            catch(Exception e)
            {
                throw new Exception("Error updating role with id = " + o.Id, e);
            };
        }
        
        /// <summary>
        /// Reads data set from sql database
        /// </summary>
        public IEnumerable<Role> RetrieveAll(SqlConnection conn, SqlTransaction trans = null)
        {
            List<Role> resultList = new List<Role>();
            string sql = @"SELECT 
                [aId],
                [aName],
                [aDescription]
            FROM Role";
            
            try
            {
                using(SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    cmd.Transaction = trans;
                    
                    SqlDataReader results = cmd.ExecuteReader();
                    while(results.Read())
                    {
                        var o = new Role();
                        o.Id = Convert.ToInt64(results["aId"]);
                        o.Name = Convert.ToString(results["aName"]);
                        o.Description = Convert.ToString(results["aDescription"]);
                    }
                }
            }
            catch(Exception e)
            {
                throw new Exception("Error retrieving all items from Role", e);
            };
            
            return resultList;
        }
        
        /// <summary>
        /// Reads one result using the specified filter parameters
        /// </summary>
        public Role RetrieveOneById(long id, SqlConnection conn, SqlTransaction trans = null)
        {
            var o = new Role();
            string sql = @"SELECT TOP 1 
            FROM role
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
                        o.Id = Convert.ToInt64(results["aId"]);
                        o.Name = Convert.ToString(results["aName"]);
                        o.Description = Convert.ToString(results["aDescription"]);
                    }
                }
            }
            catch(Exception e)
            {
                throw new Exception("Error retrieving one item from role", e);
            };
            
            return o;
        }
    }
} // namespace XCTE.Base.Data.Io

