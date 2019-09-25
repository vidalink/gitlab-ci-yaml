# Template sonar para projetos dotnet core
Esse template inclui no pipeline uma etapa de "quality gate" para execução do sonar e teste da sua aplicação dotnet core

## Variáveis padrões
Algumas variaveis definem um comportamento padrão dessa etapa. São elas:
- PROJECT_TEST_PATH: **'./src/Test'**
  - _Caminho do projeto de teste_
- PROJECT_API_PATH: **'./src/Api'**
  - _Caminho do projeto de api_
- PROJECT_SLN_PATH: **'./src'**
  - _Caminho da solution (é necessário um arquivo .sln agrupando os projetos)_
  
## Variáveis necessárias
As variáveis a seguir são necessárias para que essa etapa funcione no seu pipeline. Vou listar com exemplos para ilustrar:
- SONAR_HOST_URL:'http://192.168.99.99'
- SONAR_LOGIN:'soso'

### Configurar no projeto
Para implementar esse template, use:
> stages:
>   - ...
>   - quality gate
>
> include:
>   - ...
>   - remote: 'https://raw.githubusercontent.com/vidalink/gitlab-ci-yaml/master/templates/dotnet/sonar/.gitlab-ci-dotnet{version-number}-template.yml'