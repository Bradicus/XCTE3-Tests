public class PermissionDataStore
{
    
    ///
    /// Create new record for this model
    /// If you are not using ambient transactions, trans must be defined!
    ///
    public void Create(Permission o, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"INSERT INTO Permission(
            [id],
            [code],
            [description]
        ) VALUES (
            @Id,
            @Code,
            @Description
        )";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                cmd.Parameters.AddWithValue("@Code", o.Code);
                cmd.Parameters.AddWithValue("@Description", o.Description);
                
                var newId = cmd.ExecuteScalar();
                o.Id = Convert.ToInt64(newId);
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error inserting Permission into database", e);
        };
    }
    
    ///
    /// Update the record for this model
    ///
    public void Update(Permission o, SqlConnection conn, SqlTransaction trans)
    {
        string sql = @"UPDATE Permission SET 
            [code] = @Code,
            [description] = @Description
        WHERE [id] = @Id";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                cmd.Parameters.AddWithValue("@Code", o.Code);
                cmd.Parameters.AddWithValue("@Description", o.Description);
                
                cmd.ExecuteScalar();
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error updating permission with code = " + o.Code, e);
        };
    }
    
    ///
    /// Delete the record for the model with this id
    ///
    public void Delete(long Id, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"DELETE FROM Permission WHERE [id] = @Id";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                
                cmd.Parameters.AddWithValue("@Id", Id);
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error deleting permission with id = " + Id, e);
        }
    }
    
    /// <summary>
    /// Reads data set from sql database
    /// </summary>
    public IEnumerable<Permission> RetrieveAll(SqlConnection conn, SqlTransaction trans = null)
    {
        List<Permission> resultList = new List<Permission>();
        string sql = @"SELECT 
            [id],
            [code],
            [description]
        FROM Permission";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                
                SqlDataReader results = cmd.ExecuteReader();
                while(results.Read())
                {
                    var o = new Permission();
                }
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error retrieving all items from Permission", e);
        };
        
        
        return resultList;
    }
    
    /// <summary>
    /// Reads one result using the specified filter parameters
    /// </summary>
    public Permission RetrieveOneBy(, SqlConnection conn, SqlTransaction trans = null)
    {
        var o = new Permission();
        string sql = @"SELECT TOP 1 
        FROM permission
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
            throw new Exception("Error retrieving one item from permission", e);
        };
        
        
        return o;
    }
}

