CREATE TABLE [User] (
  [aid] BIGINT, 
  [afirstName] VARCHAR(255), 
  [alastName] VARCHAR(255), 
  [ausername] VARCHAR(255), 
  [aemail] VARCHAR(255)
  , 
  [acreatedDate] DATETIME, 
  [alastLoginDate] DATETIME, 
  [amailingAddress] TEXT, 
  [aphysicalAddress] TEXT, 
  [aroles] VARCHAR(50), 
  [aactive] TEXT, 
  [atheme] VARCHAR(255)
  ,
  PRIMARY KEY ([aid])
) 
