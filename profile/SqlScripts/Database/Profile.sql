CREATE TABLE [Profile] (
  [id] BIGINT IDENTITY(1,1), 
  [firstName] VARCHAR(255), 
  [lastName] VARCHAR(255), 
  [pusername] VARCHAR(255), 
  [email] VARCHAR(255)
  , 
  [createdDate] DATETIME, 
  [lastLoginDate] DATETIME, 
  [mailingAddressId] BIGINT, 
  [physicalAddressId] BIGINT, 
  [themeId] BIGINT, 
  [active] BIT
  ,
  PRIMARY KEY ([id])
) 
