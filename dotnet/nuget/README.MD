# Template gitlab-ci para projetos dotnet packages
Esse template oferece etapas de analise de qualidade de código e execução de teste com a etapa _quality gate_ e push de package para repositório nuget.

## Variáveis padrões
Algumas variáveis definem um comportamento padrão dessa etapa. São elas:
- DOTNET_SDK_DOCKER_IMAGE: **'microsoft/dotnet:2.2-sdk-alpine'**
  - _Imagem dotnet utilizada em todo CI/CD_
  
## Variáveis necessárias
As variáveis abaixo configuram o pipeline para envio de pacote no nuget:
- NUGET_KEY: **'4f44f3f-f453f4f5-f5345cc22-c2c3c34'**
  - _Guid cm autorização para repositório nuget_
- NUGET_SOURCE_URL: **'https://www.nuget-xpto-repo.org/abc/auth/4f44f3f-f453f4f5-f5345cc22-c2c3c34/api/v3/index.json'**
  - _Url pre-autenticada do repositório nuget privado_

# Etapas da master
- Package
- Quality gate

# Sobre a etapa quality gate
ref: https://github.com/vidalink/gitlab-ci-yaml/tree/master/templates/dotnet/sonar
