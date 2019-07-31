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
- $COLLECTION_SCENARIES -> arquivo com massa utilizado no runner do postman (arquivo usado para execução de cenários diversos no postman). A variável deve conter o nome base dos arquivos, sem a extensão "JSON". A nomenclatura do arquivo indicará qual a pasta da collection será executada para a massa. Por exemplo, um arquivo nomeado ($COLLECTION_SCENARIES).Testes_1.json irá ser utilizado como massa para todos os endpoints contidos dentro da pasta "Testes_1" na collection (definida pela variável $COLLECTION). Será feita uma execução para cada arquivo neste padrão.

# Variáveis para habilitar postman (postman)

- $COLLECTION -> arquivo json com collection de teste (arquivo exportado do postman)
- $COLLECTION_VARS -> arquivo json com variáveis de ambiente (arquivo environment exportado do postman) 
