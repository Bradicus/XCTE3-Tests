using Bogus;
using XCTE.Profile.Base.DB.Model.model;

namespace {GenDataNs}
{
    public class AddressDataGenDataGen
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
} // namespace {GenDataNs}


