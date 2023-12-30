CREATE TABLE [Address] (
    [aId] int IDENTITY(1, 1), 
    [aStreet1] VARCHAR(50), 
    [aStreet2] VARCHAR(50), 
    [aCity] VARCHAR(50), 
    [aState] VARCHAR(2), 
    [aCountry] VARCHAR(2), 
    [aZipCode] VARCHAR(20),
    PRIMARY KEY ([aId], [aStreet1])
) 
