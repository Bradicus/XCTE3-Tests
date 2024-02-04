public class ProfileDataStoreDataStore
{
    
    ///
    /// Create new record for this model
    /// If you are not using ambient transactions, trans must be defined!
    ///
    public void Create(ProfileDataStoreDataStore o, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"INSERT INTO ProfileDataStoreDataStore(
            [id],
            [firstName],
            [lastName],
            [username],
            [email]
            ,
            [createdDate],
            [lastLoginDate],
            [mailingAddress],
            [physicalAddress],
            [roles],
            [theme],
            [active]
            
        ) VALUES (
            @Id,
            @FirstName,
            @LastName,
            @Username,
            @Email
            ,
            @CreatedDate,
            @LastLoginDate,
            @MailingAddress,
            @PhysicalAddress,
            @Roles,
            @Theme,
            @Active
            
        )";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                cmd.Parameters.AddWithValue("@FirstName", o.FirstName);
                cmd.Parameters.AddWithValue("@LastName", o.LastName);
                cmd.Parameters.AddWithValue("@Username", o.Username);
                cmd.Parameters.AddWithValue("@Email", o.Email);
                cmd.Parameters.AddWithValue("@CreatedDate", o.CreatedDate);
                cmd.Parameters.AddWithValue("@LastLoginDate", o.LastLoginDate);
                cmd.Parameters.AddWithValue("@MailingAddress", o.MailingAddress);
                cmd.Parameters.AddWithValue("@PhysicalAddress", o.PhysicalAddress);
                cmd.Parameters.AddWithValue("@Roles", o.Roles);
                cmd.Parameters.AddWithValue("@Theme", o.Theme);
                cmd.Parameters.AddWithValue("@Active", o.Active);
                
                var newId = cmd.ExecuteScalar();
                o.Id = Convert.ToInt64(newId);
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error inserting ProfileDataStoreDataStore into database", e);
        };
    }
    
    ///
    /// Update the record for this model
    ///
    public void Update(ProfileDataStoreDataStore o, SqlConnection conn, SqlTransaction trans)
    {
        string sql = @"UPDATE ProfileDataStoreDataStore SET 
            [firstName] = @FirstName,
            [lastName] = @LastName,
            [username] = @Username,
            [email] = @Email,
            [createdDate] = @CreatedDate,
            [lastLoginDate] = @LastLoginDate,
            [mailingAddress] = @MailingAddress,
            [physicalAddress] = @PhysicalAddress,
            [roles] = @Roles,
            [theme] = @Theme,
            [active] = @Active
        WHERE [id] = @Id";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                cmd.Parameters.AddWithValue("@FirstName", o.FirstName);
                cmd.Parameters.AddWithValue("@LastName", o.LastName);
                cmd.Parameters.AddWithValue("@Username", o.Username);
                cmd.Parameters.AddWithValue("@Email", o.Email);
                cmd.Parameters.AddWithValue("@CreatedDate", o.CreatedDate);
                cmd.Parameters.AddWithValue("@LastLoginDate", o.LastLoginDate);
                cmd.Parameters.AddWithValue("@MailingAddress", o.MailingAddress);
                cmd.Parameters.AddWithValue("@PhysicalAddress", o.PhysicalAddress);
                cmd.Parameters.AddWithValue("@Roles", o.Roles);
                cmd.Parameters.AddWithValue("@Theme", o.Theme);
                cmd.Parameters.AddWithValue("@Active", o.Active);
                
                cmd.ExecuteScalar();
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error updating ProfileDataStoreDataStore with first name = " + o.FirstName, e);
        };
    }
    
    /// <summary>
    /// Reads data set from sql database
    /// </summary>
    public IEnumerable<ProfileDataStoreDataStore> RetrieveAll(SqlConnection conn, SqlTransaction trans = null)
    {
        List<ProfileDataStoreDataStore> resultList = new List<ProfileDataStoreDataStore>();
        string sql = @"SELECT 
            [id],
            [firstName],
            [lastName],
            [username],
            [email]
            ,
            [createdDate],
            [lastLoginDate],
            [mailingAddress],
            [physicalAddress],
            [roles],
            [theme],
            [active]
            
        FROM ProfileDataStoreDataStore";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                
                SqlDataReader results = cmd.ExecuteReader();
                while(results.Read())
                {
                    var o = new ProfileDataStoreDataStore();
                }
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error retrieving all items from ProfileDataStoreDataStore", e);
        };
        
        
        return resultList;
    }
    
    /// <summary>
    /// Reads one result using the specified filter parameters
    /// </summary>
    public ProfileDataStoreDataStore RetrieveOneBy(, SqlConnection conn, SqlTransaction trans = null)
    {
        var o = new ProfileDataStoreDataStore();
        string sql = @"SELECT TOP 1 
        FROM ProfileDataStoreDataStore
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
            throw new Exception("Error retrieving one item from ProfileDataStoreDataStore", e);
        };
        
        
        return o;
    }
}

