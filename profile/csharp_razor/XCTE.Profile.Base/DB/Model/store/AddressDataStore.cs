public class AddressDataStore
{
    
    ///
    /// Create new record for this model
    /// If you are not using ambient transactions, trans must be defined!
    ///
    public void Create(AddressDataStore o, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"INSERT INTO AddressDataStore(
            [id],
            [street1],
            [street2],
            [city],
            [state],
            [country],
            [zipCode],
            [active]
        ) VALUES (
            @Id,
            @Street1,
            @Street2,
            @City,
            @State,
            @Country,
            @ZipCode,
            @Active
        )";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                cmd.Parameters.AddWithValue("@Street1", o.Street1);
                cmd.Parameters.AddWithValue("@Street2", o.Street2);
                cmd.Parameters.AddWithValue("@City", o.City);
                cmd.Parameters.AddWithValue("@State", o.State);
                cmd.Parameters.AddWithValue("@Country", o.Country);
                cmd.Parameters.AddWithValue("@ZipCode", o.ZipCode);
                cmd.Parameters.AddWithValue("@Active", o.Active);
                
                var newId = cmd.ExecuteScalar();
                o.Id = Convert.ToInt64(newId);
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error inserting AddressDataStore into database", e);
        };
    }
    
    ///
    /// Update the record for this model
    ///
    public void Update(AddressDataStore o, SqlConnection conn, SqlTransaction trans)
    {
        string sql = @"UPDATE AddressDataStore SET 
            [street1] = @Street1,
            [street2] = @Street2,
            [city] = @City,
            [state] = @State,
            [country] = @Country,
            [zipCode] = @ZipCode,
            [active] = @Active
        WHERE [id] = @Id";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                cmd.Parameters.AddWithValue("@Street1", o.Street1);
                cmd.Parameters.AddWithValue("@Street2", o.Street2);
                cmd.Parameters.AddWithValue("@City", o.City);
                cmd.Parameters.AddWithValue("@State", o.State);
                cmd.Parameters.AddWithValue("@Country", o.Country);
                cmd.Parameters.AddWithValue("@ZipCode", o.ZipCode);
                cmd.Parameters.AddWithValue("@Active", o.Active);
                
                cmd.ExecuteScalar();
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error updating AddressDataStore with street 1 = " + o.Street1, e);
        };
    }
    
    /// <summary>
    /// Reads data set from sql database
    /// </summary>
    public IEnumerable<AddressDataStore> RetrieveAll(SqlConnection conn, SqlTransaction trans = null)
    {
        List<AddressDataStore> resultList = new List<AddressDataStore>();
        string sql = @"SELECT 
            [id],
            [street1],
            [street2],
            [city],
            [state],
            [country],
            [zipCode],
            [active]
        FROM AddressDataStore";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                
                SqlDataReader results = cmd.ExecuteReader();
                while(results.Read())
                {
                    var o = new AddressDataStore();
                }
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error retrieving all items from AddressDataStore", e);
        };
        
        
        return resultList;
    }
    
    /// <summary>
    /// Reads one result using the specified filter parameters
    /// </summary>
    public AddressDataStore RetrieveOneBy(, SqlConnection conn, SqlTransaction trans = null)
    {
        var o = new AddressDataStore();
        string sql = @"SELECT TOP 1 
        FROM AddressDataStore
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
            throw new Exception("Error retrieving one item from AddressDataStore", e);
        };
        
        
        return o;
    }
}

