public class RoleDataStore
{
    
    ///
    /// Create new record for this model
    /// If you are not using ambient transactions, trans must be defined!
    ///
    public void Create(RoleDataStore o, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"INSERT INTO RoleDataStore(
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
            throw new Exception("Error inserting RoleDataStore into database", e);
        };
    }
    
    ///
    /// Update the record for this model
    ///
    public void Update(RoleDataStore o, SqlConnection conn, SqlTransaction trans)
    {
        string sql = @"UPDATE RoleDataStore SET 
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
            throw new Exception("Error updating RoleDataStore with name = " + o.Name, e);
        };
    }
    
    /// <summary>
    /// Reads data set from sql database
    /// </summary>
    public IEnumerable<RoleDataStore> RetrieveAll(SqlConnection conn, SqlTransaction trans = null)
    {
        List<RoleDataStore> resultList = new List<RoleDataStore>();
        string sql = @"SELECT 
            [id],
            [name],
            [description],
            [permissions]
        FROM RoleDataStore";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                
                SqlDataReader results = cmd.ExecuteReader();
                while(results.Read())
                {
                    var o = new RoleDataStore();
                }
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error retrieving all items from RoleDataStore", e);
        };
        
        
        return resultList;
    }
    
    /// <summary>
    /// Reads one result using the specified filter parameters
    /// </summary>
    public RoleDataStore RetrieveOneBy(, SqlConnection conn, SqlTransaction trans = null)
    {
        var o = new RoleDataStore();
        string sql = @"SELECT TOP 1 
        FROM RoleDataStore
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
            throw new Exception("Error retrieving one item from RoleDataStore", e);
        };
        
        
        return o;
    }
}

