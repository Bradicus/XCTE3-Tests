public class ThemeDataStoreDataStore
{
    
    ///
    /// Create new record for this model
    /// If you are not using ambient transactions, trans must be defined!
    ///
    public void Create(ThemeDataStoreDataStore o, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"INSERT INTO ThemeDataStoreDataStore(
            [id],
            [name],
            [description]
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
                cmd.Parameters.AddWithValue("@Name", o.Name);
                cmd.Parameters.AddWithValue("@Description", o.Description);
                
                var newId = cmd.ExecuteScalar();
                o.Id = Convert.ToInt64(newId);
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error inserting ThemeDataStoreDataStore into database", e);
        };
    }
    
    ///
    /// Update the record for this model
    ///
    public void Update(ThemeDataStoreDataStore o, SqlConnection conn, SqlTransaction trans)
    {
        string sql = @"UPDATE ThemeDataStoreDataStore SET 
            [name] = @Name,
            [description] = @Description
        WHERE [id] = @Id";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                cmd.Parameters.AddWithValue("@Name", o.Name);
                cmd.Parameters.AddWithValue("@Description", o.Description);
                
                cmd.ExecuteScalar();
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error updating ThemeDataStoreDataStore with name = " + o.Name, e);
        };
    }
    
    /// <summary>
    /// Reads data set from sql database
    /// </summary>
    public IEnumerable<ThemeDataStoreDataStore> RetrieveAll(SqlConnection conn, SqlTransaction trans = null)
    {
        List<ThemeDataStoreDataStore> resultList = new List<ThemeDataStoreDataStore>();
        string sql = @"SELECT 
            [id],
            [name],
            [description]
        FROM ThemeDataStoreDataStore";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                
                SqlDataReader results = cmd.ExecuteReader();
                while(results.Read())
                {
                    var o = new ThemeDataStoreDataStore();
                }
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error retrieving all items from ThemeDataStoreDataStore", e);
        };
        
        
        return resultList;
    }
    
    /// <summary>
    /// Reads one result using the specified filter parameters
    /// </summary>
    public ThemeDataStoreDataStore RetrieveOneBy(, SqlConnection conn, SqlTransaction trans = null)
    {
        var o = new ThemeDataStoreDataStore();
        string sql = @"SELECT TOP 1 
        FROM ThemeDataStoreDataStore
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
            throw new Exception("Error retrieving one item from ThemeDataStoreDataStore", e);
        };
        
        
        return o;
    }
}

