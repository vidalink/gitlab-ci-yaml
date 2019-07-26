# gitlab-ci-yaml

Yaml para pipeline do gitlab com newman (postman) e sonarqube.

# Etapas da master

- Build
- Staging
- Production
  - Rollout ...%

# Etapas de review

- Build
- Quality Gate (sonar)
- Review
- Validation (postman)
- Cleanup

# Variáveis para habilitar sonar

- $SONAR_K -> Nome do projeto no sonar.
- $DOTNET_DOCKER_IMAGE -> imagem docker de imagem dotnet core usada no projeto de teste

# Variáveis para habilitar postman com massa de cenários (postman)

- $COLLECTION -> arquivo json com collection de teste (arquivo exportado do postman)
- $COLLECTION_VARS -> arquivo json com variáveis de ambiente (arquivo environment exportado do postman) 
- $COLLECTION_SCENARIES -> arquivo com massa utilizado no runner do postman (arquivo usado para execução de cenários diversos no postman)

# Variáveis para habilitar postman (postman)

- $COLLECTION -> arquivo json com collection de teste (arquivo exportado do postman)
- $COLLECTION_VARS -> arquivo json com variáveis de ambiente (arquivo environment exportado do postman) 
