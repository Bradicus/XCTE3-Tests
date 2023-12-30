using XCTE.Base.Data.Io;
using XCTE.Base.Data.Model;
using System;
using System.Data.SqlClient;
using System.Collections.Generic;

namespace XCTE.Base.Data.Io
{
    public class AddressDataStore : IAddressDataStore
    {
        
        ///
        /// Create new record for this model
        /// If you are not using ambient transactions, trans must be defined!
        ///
        public void Create(Address o, SqlConnection conn, SqlTransaction trans = null)
        {
            string sql = @"INSERT INTO Address(
                [aId],
                [aStreet1],
                [aStreet2],
                [aCity],
                [aState],
                [aCountry],
                [aZipCode]
                
            ) VALUES (
                @Id,
                @Street1,
                @Street2,
                @City,
                @State,
                @Country,
                @ZipCode
                
            )";
            
            try
            {
                using(SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    cmd.Transaction = trans;
                    cmd.Parameters.AddWithValue("@Id", o.Id);
                    cmd.Parameters.AddWithValue("@Street1", o.Street1);
                    cmd.Parameters.AddWithValue("@Street2", o.Street2);
                    cmd.Parameters.AddWithValue("@City", o.City);
                    cmd.Parameters.AddWithValue("@State", o.State);
                    cmd.Parameters.AddWithValue("@Country", o.Country);
                    cmd.Parameters.AddWithValue("@ZipCode", o.ZipCode);
                    
                }
            }
            catch(Exception e)
            {
                throw new Exception("Error inserting Address into database", e);
            };
        }
        
        ///
        /// Update the record for this model
        ///
        public void Update(Address o, SqlConnection conn, SqlTransaction trans)
        {
            string sql = @"UPDATE Address SET 
                [aId] = @Id,
                [aStreet1] = @Street1,
                [aStreet2] = @Street2,
                [aCity] = @City,
                [aState] = @State,
                [aCountry] = @Country,
                [aZipCode] = @ZipCode
            WHERE";
            
            try
            {
                using(SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    cmd.Transaction = trans;
                    cmd.Parameters.AddWithValue("@Id", o.Id);
                    cmd.Parameters.AddWithValue("@Street1", o.Street1);
                    cmd.Parameters.AddWithValue("@Street2", o.Street2);
                    cmd.Parameters.AddWithValue("@City", o.City);
                    cmd.Parameters.AddWithValue("@State", o.State);
                    cmd.Parameters.AddWithValue("@Country", o.Country);
                    cmd.Parameters.AddWithValue("@ZipCode", o.ZipCode);
                    
                    cmd.ExecuteScalar();
                }
            }
            catch(Exception e)
            {
                throw new Exception("Error updating address with id = " + o.Id, e);
            };
        }
        
        /// <summary>
        /// Reads data set from sql database
        /// </summary>
        public IEnumerable<Address> RetrieveAll(SqlConnection conn, SqlTransaction trans = null)
        {
            List<Address> resultList = new List<Address>();
            string sql = @"SELECT 
                [aId],
                [aStreet1],
                [aStreet2],
                [aCity],
                [aState],
                [aCountry],
                [aZipCode]
                
            FROM Address";
            
            try
            {
                using(SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    cmd.Transaction = trans;
                    
                    SqlDataReader results = cmd.ExecuteReader();
                    while(results.Read())
                    {
                        var o = new Address();
                        o.Id = Convert.ToInt32(results["aId"]);
                        o.Street1 = Convert.ToString(results["aStreet1"]);
                        o.Street2 = Convert.ToString(results["aStreet2"]);
                        o.City = Convert.ToString(results["aCity"]);
                        o.State = Convert.ToString(results["aState"]);
                        o.Country = Convert.ToString(results["aCountry"]);
                        o.ZipCode = Convert.ToString(results["aZipCode"]);
                    }
                }
            }
            catch(Exception e)
            {
                throw new Exception("Error retrieving all items from Address", e);
            };
            
            return resultList;
        }
        
        /// <summary>
        /// Reads one result using the specified filter parameters
        /// </summary>
        public Address RetrieveOneById(int id, SqlConnection conn, SqlTransaction trans = null)
        {
            var o = new Address();
            string sql = @"SELECT TOP 1 
            FROM address
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
                        o.Id = Convert.ToInt32(results["aId"]);
                        o.Street1 = Convert.ToString(results["aStreet1"]);
                        o.Street2 = Convert.ToString(results["aStreet2"]);
                        o.City = Convert.ToString(results["aCity"]);
                        o.State = Convert.ToString(results["aState"]);
                        o.Country = Convert.ToString(results["aCountry"]);
                        o.ZipCode = Convert.ToString(results["aZipCode"]);
                    }
                }
            }
            catch(Exception e)
            {
                throw new Exception("Error retrieving one item from address", e);
            };
            
            return o;
        }
        
        /// <summary>
        /// Reads set of results using the specified filter parameters
        /// </summary>
        public List<Address> RetrieveSetByCityZipCode(SqlConnection conn, string city, string zipCode)
        {
            List<Address> resultList = new List<Address>();
            string sql = @"SELECT 
                [aId],
                [aStreet1],
                [aStreet2],
                [aCity],
                [aState],
                [aCountry],
                [aZipCode]
                
            FROM Address
            WHERE 
                [aCity] = @city AND [aZipCode] = @zipCode";
            
            try
            {
                using(SqlCommand cmd = new SqlCommand(sql, conn))
                {
                    cmd.Parameters.AddWithValue("@city", city);
                    cmd.Parameters.AddWithValue("@zipCode", zipCode);
                    SqlDataReader results = cmd.ExecuteReader();
                    while(results.Read())
                    {
                        var o = new Address();
                        
                        o.Id = Convert.ToInt32(results["aId"]);
                        o.Street1 = Convert.ToString(results["aStreet1"]);
                        o.Street2 = Convert.ToString(results["aStreet2"]);
                        o.City = Convert.ToString(results["aCity"]);
                        o.State = Convert.ToString(results["aState"]);
                        o.Country = Convert.ToString(results["aCountry"]);
                        o.ZipCode = Convert.ToString(results["aZipCode"]);
                        
                        resultList.Add(o);
                    }
                }
            }
            catch(Exception e)
            {
                throw new Exception("Error retrieving all items from address", e);
            };
            
            return resultList;
        }
    }
} // namespace XCTE.Base.Data.Io

