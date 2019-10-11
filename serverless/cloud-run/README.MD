# [WIP] Template gitlab-ci para projetos google cloud run
Esse template oferece a possibilidade de compilar sua aplicação, validar e disponibilizar diretamente no google cloud run fazendo uso apenas de um Dockerfile.
Lembre-se que para o cloud run, a porta do seu dockerfile deve ser **8080**.

## Variáveis padrões
Algumas variaveis definem um comportamento padrão dessa etapa. São elas:
- PUBLIC: **'true'**
  - _Indica quando é privada ou não_
- TIMEOUT: **'2m'**
   - _Indica quando sua aplicação deverá dar erro de timeout caso não responda nesse tempo_
- PROJECT_PATH: **'.'**
   - _Caminho do projeto. Geralmente fica na raiz (.), mas em alguns casos, como pkgs, fns ou components, temos varios projetos dentro de um projeto no gitlab, então passamos o caminho desse projeto nessa variável._
- MEMORY_RUN: **'512M'**
   - _Indica quanto de memória é alocada para sua aplicação na execução. Se não for indicada o valor padrão é 256M_

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
