using Bogus;

namespace XCTE.Profile.Base.DB.Model
{
    public class AddressDataGen
    {
        
        void populateRandom(Faker faker, Address item)
        {
            item.Street1 = faker.Address.StreetAddress();
            item.Street2 = faker.Address.SecondaryAddress();
            item.City = faker.Address.City();
            item.State = faker.Address.StateAbbr();
            item.Country = faker.Address.Country();
            item.ZipCode = faker.Address.ZipCode();
            item.Active = faker.Random.Bool();
        }
    }
} // namespace XCTE.Profile.Base.DB.Model


