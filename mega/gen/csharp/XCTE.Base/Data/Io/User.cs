public class UserDataStore : IUserDataStore
{
    
    ///
    /// Create new record for this model
    /// If you are not using ambient transactions, trans must be defined!
    ///
    public void Create(User o, SqlConnection conn, SqlTransaction trans = null)
    {
        string sql = @"INSERT INTO User(
            [aid],
            [afirstName],
            [alastName],
            [ausername],
            [aemail]
            ,
            [acreatedDate],
            [alastLoginDate],
            [amailingAddress],
            [aphysicalAddress],
            [aroles],
            [aactive],
            [atheme]
            
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
            @Active,
            @Theme
            
        )";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                cmd.Parameters.AddWithValue("@Id", o.Id);
                cmd.Parameters.AddWithValue("@FirstName", o.FirstName);
                cmd.Parameters.AddWithValue("@LastName", o.LastName);
                cmd.Parameters.AddWithValue("@Username", o.Username);
                cmd.Parameters.AddWithValue("@Email", o.Email);
                cmd.Parameters.AddWithValue("@CreatedDate", o.CreatedDate);
                cmd.Parameters.AddWithValue("@LastLoginDate", o.LastLoginDate);
                cmd.Parameters.AddWithValue("@MailingAddress", o.MailingAddress);
                cmd.Parameters.AddWithValue("@PhysicalAddress", o.PhysicalAddress);
                cmd.Parameters.AddWithValue("@Roles", o.Roles);
                cmd.Parameters.AddWithValue("@Active", o.Active);
                cmd.Parameters.AddWithValue("@Theme", o.Theme);
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error inserting User into database", e);
        };
    }
    
    ///
    /// Update the record for this model
    ///
    public void Update(User o, SqlConnection conn, SqlTransaction trans)
    {
        string sql = @"UPDATE User SET 
            [aid] = @Id,
            [afirstName] = @FirstName,
            [alastName] = @LastName,
            [ausername] = @Username,
            [aemail] = @Email,
            [acreatedDate] = @CreatedDate,
            [alastLoginDate] = @LastLoginDate,
            [amailingAddress] = @MailingAddress,
            [aphysicalAddress] = @PhysicalAddress,
            [aroles] = @Roles,
            [aactive] = @Active,
            [atheme] = @Theme
        WHERE";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                cmd.Parameters.AddWithValue("@Id", o.Id);
                cmd.Parameters.AddWithValue("@FirstName", o.FirstName);
                cmd.Parameters.AddWithValue("@LastName", o.LastName);
                cmd.Parameters.AddWithValue("@Username", o.Username);
                cmd.Parameters.AddWithValue("@Email", o.Email);
                cmd.Parameters.AddWithValue("@CreatedDate", o.CreatedDate);
                cmd.Parameters.AddWithValue("@LastLoginDate", o.LastLoginDate);
                cmd.Parameters.AddWithValue("@MailingAddress", o.MailingAddress);
                cmd.Parameters.AddWithValue("@PhysicalAddress", o.PhysicalAddress);
                cmd.Parameters.AddWithValue("@Roles", o.Roles);
                cmd.Parameters.AddWithValue("@Active", o.Active);
                cmd.Parameters.AddWithValue("@Theme", o.Theme);
                
                cmd.ExecuteScalar();
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error updating user with id = " + o.Id, e);
        };
    }
    
    /// <summary>
    /// Reads data set from sql database
    /// </summary>
    public IEnumerable<User> RetrieveAll(SqlConnection conn, SqlTransaction trans = null)
    {
        List<User> resultList = new List<User>();
        string sql = @"SELECT 
            [aid],
            [afirstName],
            [alastName],
            [ausername],
            [aemail]
            ,
            [acreatedDate],
            [alastLoginDate],
            [amailingAddress],
            [aphysicalAddress],
            [aroles],
            [aactive],
            [atheme]
            
        FROM User";
        
        try
        {
            using(SqlCommand cmd = new SqlCommand(sql, conn))
            {
                cmd.Transaction = trans;
                
                SqlDataReader results = cmd.ExecuteReader();
                while(results.Read())
                {
                    var o = new User();
                    
                    o.Roles = Convert.ToString(results["aroles"]);
                }
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error retrieving all items from User", e);
        };
        
        
        return resultList;
    }
    
    /// <summary>
    /// Reads one result using the specified filter parameters
    /// </summary>
    public User RetrieveOneBy(, SqlConnection conn, SqlTransaction trans = null)
    {
        var o = new User();
        string sql = @"SELECT TOP 1 
        FROM user
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
                    
                    o.Roles = Convert.ToString(results["aroles"]);
                }
            }
        }
        
        catch(Exception e)
        {
            throw new Exception("Error retrieving one item from user", e);
        };
        
        
        return o;
    }
}

