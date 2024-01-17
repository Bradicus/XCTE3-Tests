using Bogus;
using XCTE.Profile.Base.DB.Model.model;

namespace {GenDataNs}
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
} // namespace {GenDataNs}


