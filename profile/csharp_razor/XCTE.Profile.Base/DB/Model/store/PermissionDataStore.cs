public class PermissionDataStore
{
    
    ///
    /// Create new record for this model
    /// If you are not using ambient transactions, trans must be defined!
    ///
    public void Create(PermissionDataStore o, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"INSERT INTO PermissionDataStore(
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
            throw new Exception("Error inserting PermissionDataStore into database", e);
        };
    }
    
    ///
    /// Update the record for this model
    ///
    public void Update(PermissionDataStore o, SqlConnection conn, SqlTransaction trans)
    {
        string sql = @"UPDATE PermissionDataStore SET 
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
            throw new Exception("Error updating PermissionDataStore with code = " + o.Code, e);
        };
    }
    
    ///
    /// Delete the record for the model with this id
    ///
    public void Delete(long Id, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"DELETE FROM PermissionDataStore WHERE [id] = @Id";
        
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
            throw new Exception("Error deleting PermissionDataStore with id = " + Id, e);
        }
    }
    
    /// <summary>
    /// Reads data set from sql database
    /// </summary>
    public IEnumerable<PermissionDataStore> RetrieveAll(SqlConnection conn, SqlTransaction trans = null)
    {
        List<PermissionDataStore> resultList = new List<PermissionDataStore>();
        string sql = @"SELECT 
            [id],
            [code],
            [description]
        FROM PermissionDataStore";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                
                SqlDataReader results = cmd.ExecuteReader();
                while(results.Read())
                {
                    var o = new PermissionDataStore();
                }
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error retrieving all items from PermissionDataStore", e);
        };
        
        
        return resultList;
    }
    
    /// <summary>
    /// Reads one result using the specified filter parameters
    /// </summary>
    public PermissionDataStore RetrieveOneBy(, SqlConnection conn, SqlTransaction trans = null)
    {
        var o = new PermissionDataStore();
        string sql = @"SELECT TOP 1 
        FROM PermissionDataStore
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
            throw new Exception("Error retrieving one item from PermissionDataStore", e);
        };
        
        
        return o;
    }
}

