public class RoleDataStoreDataStore
{
    
    ///
    /// Create new record for this model
    /// If you are not using ambient transactions, trans must be defined!
    ///
    public void Create(RoleDataStoreDataStore o, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"INSERT INTO RoleDataStoreDataStore(
            [id],
            [name],
            [description],
            [permissions]
        ) VALUES (
            @Id,
            @Name,
            @Description,
            @Permissions
        )";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                cmd.Parameters.AddWithValue("@Name", o.Name);
                cmd.Parameters.AddWithValue("@Description", o.Description);
                cmd.Parameters.AddWithValue("@Permissions", o.Permissions);
                
                var newId = cmd.ExecuteScalar();
                o.Id = Convert.ToInt64(newId);
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error inserting RoleDataStoreDataStore into database", e);
        };
    }
    
    ///
    /// Update the record for this model
    ///
    public void Update(RoleDataStoreDataStore o, SqlConnection conn, SqlTransaction trans)
    {
        string sql = @"UPDATE RoleDataStoreDataStore SET 
            [name] = @Name,
            [description] = @Description,
            [permissions] = @Permissions
        WHERE [id] = @Id";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                cmd.Parameters.AddWithValue("@Name", o.Name);
                cmd.Parameters.AddWithValue("@Description", o.Description);
                cmd.Parameters.AddWithValue("@Permissions", o.Permissions);
                
                cmd.ExecuteScalar();
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error updating RoleDataStoreDataStore with name = " + o.Name, e);
        };
    }
    
    /// <summary>
    /// Reads data set from sql database
    /// </summary>
    public IEnumerable<RoleDataStoreDataStore> RetrieveAll(SqlConnection conn, SqlTransaction trans = null)
    {
        List<RoleDataStoreDataStore> resultList = new List<RoleDataStoreDataStore>();
        string sql = @"SELECT 
            [id],
            [name],
            [description],
            [permissions]
        FROM RoleDataStoreDataStore";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                
                SqlDataReader results = cmd.ExecuteReader();
                while(results.Read())
                {
                    var o = new RoleDataStoreDataStore();
                }
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error retrieving all items from RoleDataStoreDataStore", e);
        };
        
        
        return resultList;
    }
    
    /// <summary>
    /// Reads one result using the specified filter parameters
    /// </summary>
    public RoleDataStoreDataStore RetrieveOneBy(, SqlConnection conn, SqlTransaction trans = null)
    {
        var o = new RoleDataStoreDataStore();
        string sql = @"SELECT TOP 1 
        FROM RoleDataStoreDataStore
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
            throw new Exception("Error retrieving one item from RoleDataStoreDataStore", e);
        };
        
        
        return o;
    }
}

