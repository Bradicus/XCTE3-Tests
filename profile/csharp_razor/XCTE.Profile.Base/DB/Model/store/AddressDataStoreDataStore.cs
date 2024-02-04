public class AddressDataStoreDataStore
{
    
    ///
    /// Create new record for this model
    /// If you are not using ambient transactions, trans must be defined!
    ///
    public void Create(AddressDataStoreDataStore o, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"INSERT INTO AddressDataStoreDataStore(
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
            throw new Exception("Error inserting AddressDataStoreDataStore into database", e);
        };
    }
    
    ///
    /// Update the record for this model
    ///
    public void Update(AddressDataStoreDataStore o, SqlConnection conn, SqlTransaction trans)
    {
        string sql = @"UPDATE AddressDataStoreDataStore SET 
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
            throw new Exception("Error updating AddressDataStoreDataStore with street 1 = " + o.Street1, e);
        };
    }
    
    /// <summary>
    /// Reads data set from sql database
    /// </summary>
    public IEnumerable<AddressDataStoreDataStore> RetrieveAll(SqlConnection conn, SqlTransaction trans = null)
    {
        List<AddressDataStoreDataStore> resultList = new List<AddressDataStoreDataStore>();
        string sql = @"SELECT 
            [id],
            [street1],
            [street2],
            [city],
            [state],
            [country],
            [zipCode],
            [active]
        FROM AddressDataStoreDataStore";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                
                SqlDataReader results = cmd.ExecuteReader();
                while(results.Read())
                {
                    var o = new AddressDataStoreDataStore();
                }
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error retrieving all items from AddressDataStoreDataStore", e);
        };
        
        
        return resultList;
    }
    
    /// <summary>
    /// Reads one result using the specified filter parameters
    /// </summary>
    public AddressDataStoreDataStore RetrieveOneBy(, SqlConnection conn, SqlTransaction trans = null)
    {
        var o = new AddressDataStoreDataStore();
        string sql = @"SELECT TOP 1 
        FROM AddressDataStoreDataStore
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
            throw new Exception("Error retrieving one item from AddressDataStoreDataStore", e);
        };
        
        
        return o;
    }
}

