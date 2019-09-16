# Template sonar para projetos dotnet core
Esse template inclui no pipeline uma etapa de "quality gate" para execução do sonar e teste da sua aplicação dotnet core

# Variáveis padrões
Algumas variaveis definem um comportamento padrão dessa etapa. São elas:
- DOTNET_SDK_DOCKER_IMAGE: **'microsoft/dotnet:2.2-sdk-alpine'**
  - _Por padrão, executa projetos baseados em dotnet core 2.2, mas pode ser redefinido para outras versões como: microsoft/dotnet:2.1-sdk-alpine_
- PROJECT_TEST_PATH: **'./src/Test'**
  - _Caminho do projeto de teste_
- PROJECT_API_PATH: **'./src/Api'**
  - _Caminho do projeto de api_
- PROJECT_SLN_PATH: **'./src'**
  - _Caminho da solution (é necessário um arquivo .sln agrupando os projetos)_
  
# Variáveis necessárias
As variáveis a seguir são necessárias para que essa etapa funcione no seu pipeline. Vou listar com exemplos para ilustrar:
- SONAR_HOST_URL:'http://192.168.99.99'
- SONAR_LOGIN:'soso'
