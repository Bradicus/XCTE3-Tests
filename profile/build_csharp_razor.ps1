Remove-Item csharp_razor -Recurse -Force
New-Item -Path "csharp_razor" -ItemType Directory
cd csharp_razor

dotnet new classlib -n XCTE.Profile.Base -o XCTE.Profile.Base
dotnet new webapi -n XCTE.Profile.API -o XCTE.Profile.API
dotnet new mvc -n XCTE.Profile.Web -o XCTE.Profile.Web
dotnet new nunit -n XCTE.Profile.Test -o XCTE.Profile.Test

dotnet new sln -n XCTE.Profile.Example
dotnet sln add XCTE.Profile.Base/XCTE.Profile.Base.csproj
dotnet sln add XCTE.Profile.API/XCTE.Profile.API.csproj
dotnet sln add XCTE.Profile.Web/XCTE.Profile.Web.csproj
dotnet sln add XCTE.Profile.Test/XCTE.Profile.Test.csproj

nuget Install-Package Bogus
