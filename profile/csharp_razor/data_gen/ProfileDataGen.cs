using Bogus;
using XCTE.Profile.Base.DB.Model;

namespace com.example.demo.data_gen
{
    public class ProfileDataGen
    {
        
        void populateRandom(Faker faker, Profile item)
        {
            item.FirstName = faker.Name.FirstName();
            item.LastName = faker.Name.LastName();
            item.Username = faker.Internet.UserName();
            item.Email = faker.Internet().Email(faker.Name.FirstName, faker.Name.LastName);
            
            item.Active = faker.Random.Bool();
        }
    }
} // namespace com.example.demo.data_gen


