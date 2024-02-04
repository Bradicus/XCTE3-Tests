public class ThemeDataStore
{
    
    ///
    /// Create new record for this model
    /// If you are not using ambient transactions, trans must be defined!
    ///
    public void Create(ThemeDataStore o, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"INSERT INTO ThemeDataStore(
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
            throw new Exception("Error inserting ThemeDataStore into database", e);
        };
    }
    
    ///
    /// Update the record for this model
    ///
    public void Update(ThemeDataStore o, SqlConnection conn, SqlTransaction trans)
    {
        string sql = @"UPDATE ThemeDataStore SET 
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
            throw new Exception("Error updating ThemeDataStore with name = " + o.Name, e);
        };
    }
    
    /// <summary>
    /// Reads data set from sql database
    /// </summary>
    public IEnumerable<ThemeDataStore> RetrieveAll(SqlConnection conn, SqlTransaction trans = null)
    {
        List<ThemeDataStore> resultList = new List<ThemeDataStore>();
        string sql = @"SELECT 
            [id],
            [name],
            [description]
        FROM ThemeDataStore";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                
                SqlDataReader results = cmd.ExecuteReader();
                while(results.Read())
                {
                    var o = new ThemeDataStore();
                }
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error retrieving all items from ThemeDataStore", e);
        };
        
        
        return resultList;
    }
    
    /// <summary>
    /// Reads one result using the specified filter parameters
    /// </summary>
    public ThemeDataStore RetrieveOneBy(, SqlConnection conn, SqlTransaction trans = null)
    {
        var o = new ThemeDataStore();
        string sql = @"SELECT TOP 1 
        FROM ThemeDataStore
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
            throw new Exception("Error retrieving one item from ThemeDataStore", e);
        };
        
        
        return o;
    }
}

