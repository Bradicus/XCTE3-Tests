public class PermissionDataStoreDataStore
{
    
    ///
    /// Create new record for this model
    /// If you are not using ambient transactions, trans must be defined!
    ///
    public void Create(PermissionDataStoreDataStore o, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"INSERT INTO PermissionDataStoreDataStore(
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
            throw new Exception("Error inserting PermissionDataStoreDataStore into database", e);
        };
    }
    
    ///
    /// Update the record for this model
    ///
    public void Update(PermissionDataStoreDataStore o, SqlConnection conn, SqlTransaction trans)
    {
        string sql = @"UPDATE PermissionDataStoreDataStore SET 
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
            throw new Exception("Error updating PermissionDataStoreDataStore with code = " + o.Code, e);
        };
    }
    
    ///
    /// Delete the record for the model with this id
    ///
    public void Delete(long Id, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"DELETE FROM PermissionDataStoreDataStore WHERE [id] = @Id";
        
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
            throw new Exception("Error deleting PermissionDataStoreDataStore with id = " + Id, e);
        }
    }
    
    /// <summary>
    /// Reads data set from sql database
    /// </summary>
    public IEnumerable<PermissionDataStoreDataStore> RetrieveAll(SqlConnection conn, SqlTransaction trans = null)
    {
        List<PermissionDataStoreDataStore> resultList = new List<PermissionDataStoreDataStore>();
        string sql = @"SELECT 
            [id],
            [code],
            [description]
        FROM PermissionDataStoreDataStore";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                
                SqlDataReader results = cmd.ExecuteReader();
                while(results.Read())
                {
                    var o = new PermissionDataStoreDataStore();
                }
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error retrieving all items from PermissionDataStoreDataStore", e);
        };
        
        
        return resultList;
    }
    
    /// <summary>
    /// Reads one result using the specified filter parameters
    /// </summary>
    public PermissionDataStoreDataStore RetrieveOneBy(, SqlConnection conn, SqlTransaction trans = null)
    {
        var o = new PermissionDataStoreDataStore();
        string sql = @"SELECT TOP 1 
        FROM PermissionDataStoreDataStore
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
            throw new Exception("Error retrieving one item from PermissionDataStoreDataStore", e);
        };
        
        
        return o;
    }
}

