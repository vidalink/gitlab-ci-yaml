# Template gitlab-ci para projetos dotnet api
Esse template oferece etapas de analise de qualidade de código e execução de teste com a etapa _quality gate_, execução de endpoits de api com postman (usando newman), build e deploy para ambientes diversos.  

## Variáveis padrões
Algumas variaveis definem um comportamento padrão dessa etapa. São elas:
- DOTNET_SDK_DOCKER_IMAGE: **'microsoft/dotnet:2.2-sdk-alpine'**
  - _Imagem dotnet utilizada em todo CI/CD_

# Etapas da master
- Build
- Staging
- Production
  - Rollout ...%

# Etapas de review/dev
- Build
- Quality Gate (sonar)
- Review
- Validation (postman)
- Cleanup

# Sobre a etapa quality gate
ref: https://github.com/vidalink/gitlab-ci-yaml/tree/master/templates/dotnet/sonar

# Sobre a etapa validation
ref: https://github.com/vidalink/gitlab-ci-yaml/tree/master/templates/postman
