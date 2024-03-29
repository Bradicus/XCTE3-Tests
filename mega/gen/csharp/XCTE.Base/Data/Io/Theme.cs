public class ThemeDataStore : IThemeDataStore
{
    
    ///
    /// Create new record for this model
    /// If you are not using ambient transactions, trans must be defined!
    ///
    public void Create(Theme o, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"INSERT INTO Theme(
            [aid],
            [aname],
            [adescription]
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
            throw new Exception("Error inserting Theme into database", e);
        };
    }
    
    ///
    /// Update the record for this model
    ///
    public void Update(Theme o, SqlConnection conn, SqlTransaction trans)
    {
        string sql = @"UPDATE Theme SET 
            [aid] = @Id,
            [aname] = @Name,
            [adescription] = @Description
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
            throw new Exception("Error updating theme with id = " + o.Id, e);
        };
    }
    
    /// <summary>
    /// Reads data set from sql database
    /// </summary>
    public IEnumerable<Theme> RetrieveAll(SqlConnection conn, SqlTransaction trans = null)
    {
        List<Theme> resultList = new List<Theme>();
        string sql = @"SELECT 
            [aid],
            [aname],
            [adescription]
        FROM Theme";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                
                SqlDataReader results = cmd.ExecuteReader();
                while(results.Read())
                {
                    var o = new Theme();
                }
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error retrieving all items from Theme", e);
        };
        
        
        return resultList;
    }
    
    /// <summary>
    /// Reads one result using the specified filter parameters
    /// </summary>
    public Theme RetrieveOneBy(, SqlConnection conn, SqlTransaction trans = null)
    {
        var o = new Theme();
        string sql = @"SELECT TOP 1 
        FROM theme
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
            throw new Exception("Error retrieving one item from theme", e);
        };
        
        
        return o;
    }
}

