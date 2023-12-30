Remove-Item csharp_razor -Recurse -Force
New-Item -Path "csharp_razor" -ItemType Directory
cd csharp_razor

dotnet new classlib -n XCTE.Base -o XCTE.Base
dotnet new webapi -n XCTE.API -o XCTE.API
dotnet new mvc -n XCTE.Web -o XCTE.Web
dotnet new nunit -n XCTE.Test -o XCTE.Test

dotnet new sln -n XCTE.Example
dotnet sln add XCTE.Base/XCTE.Base.csproj
dotnet sln add XCTE.API/XCTE.API.csproj
dotnet sln add XCTE.Web/XCTE.Web.csproj
dotnet sln add XCTE.Test/XCTE.Test.csproj

cd ..

ruby ..\bin\xcte3.rb