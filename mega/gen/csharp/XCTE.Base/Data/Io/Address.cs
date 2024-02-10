public class AddressDataStore : IAddressDataStore
{
    
    ///
    /// Create new record for this model
    /// If you are not using ambient transactions, trans must be defined!
    ///
    public void Create(Address o, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"INSERT INTO Address(
            [aid],
            [astreet1],
            [astreet2],
            [acity],
            [astate],
            [acountry],
            [azipCode]
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
            [aid] = @Id,
            [astreet1] = @Street1,
            [astreet2] = @Street2,
            [acity] = @City,
            [astate] = @State,
            [acountry] = @Country,
            [azipCode] = @ZipCode
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
            [aid],
            [astreet1],
            [astreet2],
            [acity],
            [astate],
            [acountry],
            [azipCode]
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
    public Address RetrieveOneBy(, SqlConnection conn, SqlTransaction trans = null)
    {
        var o = new Address();
        string sql = @"SELECT TOP 1 
        FROM address
        WHERE 
            ";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                
                SqlDataReader results = cmd.ExecuteReader();
                while(results.Read())
                {
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
    public List<Address> RetrieveSetBy(SqlConnection conn, )
    {
        List<Address> resultList = new List<Address>();
        string sql = @"SELECT 
            [aid],
            [astreet1],
            [astreet2],
            [acity],
            [astate],
            [acountry],
            [azipCode]
        FROM Address
        WHERE 
            ";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                SqlDataReader results = cmd.ExecuteReader();
                while(results.Read())
                {
                    var o = new Address();
                    
                    
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

