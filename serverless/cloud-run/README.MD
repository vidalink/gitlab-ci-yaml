# [WIP] Template gitlab-ci para projetos google cloud run
Esse template oferece a possibilidade de compilar sua aplicação, validar e disponibilizar diretamente no google cloud run fazendo uso apenas de um Dockerfile.
Lembre-se que para o cloud run, a porta do seu dockerfile deve ser **8080**.

## Variáveis padrões
Algumas variaveis definem um comportamento padrão dessa etapa. São elas:
- PUBLIC: **'true'**
  - _Indica quando é privada ou não_
- TIMEOUT: **'2m'**
   - _Indica quando sua aplicação deverá dar erro de timeout caso não responda nesse tempo_

## Variáveis necessárias
Algumas variaveis definem um comportamento necessários para que esse pipeline ocorra. São elas:
- GCLOUD_SERVICE_ACCOUNT: **'{...}'**
  - _Arquivo json (service account), exportado da google cloud_
- CLOUDSDK_CORE_PROJECT: **'project-id-637263'**
- GCLOUD_PROJECT_REGION: **'us-central1'**
- BUILD_DOCKER_IMAGE: **'node:carbon'**

# Etapas da master
- Build
- Production

# Etapas de review/dev
- Build
- Review
