CREATE TABLE [User] (
  [aId] BIGINT, 
  [aFirstName] VARCHAR(255), 
  [aLastName] VARCHAR(255), 
  [aUsername] VARCHAR(255), 
  [aEmail] VARCHAR(255)
  , 
  [aCreatedDate] DATETIME, 
  [aLastLoginDate] DATETIME, 
  [aMailingAddress] TEXT, 
  [aPhysicalAddress] TEXT, 
  [aRoles] VARCHAR(50), 
  [aRoleOptions] TEXT, 
  [aDisabled] TEXT, 
  [aTheme] VARCHAR(255), 
  [aThemeOptions] TEXT
  ,
  PRIMARY KEY ([aId])
) 
