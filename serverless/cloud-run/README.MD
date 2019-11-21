# [WIP] Template gitlab-ci para projetos google cloud run
Esse template oferece a possibilidade de compilar sua aplicação, validar e disponibilizar diretamente no google cloud run fazendo uso apenas de um Dockerfile.
Lembre-se que para o cloud run, a porta do seu dockerfile deve ser **8080**.

## Variáveis padrões
Algumas variaveis definem um comportamento padrão dessa etapa. São elas:
- PUBLIC: **'true'**
  - _Indica quando é privada ou não_
- TIMEOUT: **'2m'**
   - _Indica quando sua aplicação deverá dar erro de timeout caso não responda nesse tempo. Tempo max permite pelo Cloud Run é 15m_
- PROJECT_PATH: **'.'**
   - _Caminho do projeto. Geralmente fica na raiz (.), mas em alguns casos, como pkgs, fns ou components, temos varios projetos dentro de um projeto no gitlab, então passamos o caminho desse projeto nessa variável._
- MEMORY_RUN: **'256M'**
   - _Indica quanto de memória é alocada para sua aplicação na execução. Se não for indicada o valor padrão é 256M. Valor max permitido pelo Cloud Run é 2G_
- MAX_INSTANCES: **'100'**
   - _Indica o número max de instâncias do CLoud Run que serão criados em um processamento. Por padrão serão permitidas 100 instâncias, mas o valor pode variar de 1 até 1000_
- CONCURRENCY: **'80'**
   - _Indica o número max de requisições concorrentes que uma instância do Cloud Run irá aceitar. Por padrão serão permitidas 80 requisições concorrentes, mas o valor pode variar de 1 até 80_


## Variáveis para criação automática de um Cloud Scheduler
- SCHEDULE: **'true'**
   - _Indica se deve ou não gerar um Cloud Scheduler para disparar o Cloud Run. Por padrão o pipeline não gera o Scheduler a menos que esta variável esteja presente com valor 'true'. Neste caso, se for gerar o Scheduler todas as demais variáveis devem ser informadas_
- SCHEDULE_CRON: **'*/15 * * * *'**
   - _Expressão CRON UNIX para indicar periodicidade do Scheduler (Para auxiliar: https://crontab.guru/)_
- SCHEDULE_VERB: **'GET'**
   - _Verbo HTTP que deve ser utilizado ao disparar o Cloud Run_
- SCHEDULE_URL: **'/v1/endpoint'**
   - _Endpoint da aplicação que deve ser utilizado ao disparar o Cloud Run. OBS: não necessita da url base do Run pois o pipeline irá obter automaticamente_
- SCHEDULE_HEADER: **'Content-Type=application/json'**
   - _Conteúdo do header da request deve ser utilizado ao disparar o Cloud Run_
- SCHEDULE_DESCRIPTION: **'Any text'**
   - _Descrição do Scheduler_
- SCHEDULE_BODY: **''**
   - _Conteúdo do body da request deve ser utilizado ao disparar o Cloud Run. Mais comum em chamadas do tipo POST, pode ser mantido vazio_
- SCHEDULE_TIME_ZONE: **'America/Sao_Paulo'**
   - _Timezone do Scheduler_
- SCHEDULE_STATUS: **'run'**
   - _Comando de start do Scheduler. Usar 'run' para já startar o Scheduler após a criação_
- SCHEDULE_SERVICE_ACCOUNT: **'service-account@project-id.iam.gserviceaccount.com'**
   - _Conta de serviço previamente configurada para ser um Cloud Run Invoker_


## Variáveis necessárias
Algumas variaveis definem um comportamento necessários para que esse pipeline ocorra. São elas:
- GCLOUD_SERVICE_ACCOUNT: **'{...}'**
  - _Arquivo json (service account), exportado da google cloud_
- CLOUDSDK_CORE_PROJECT: **'project-id-637263'**
- GCLOUD_PROJECT_REGION: **'us-central1'**
- CI_PROJECT_PATH_SLUG: **'application-name'**
- ENV_VARS: **'ASPNETCORE_ENVIRONMENT=$CI_JOB_STAGE'**
- PROJECT_API_PATH: **'src/Api'**
  - _Caminho do projeto principal de entrada (api) da sua aplicação. Se não informada a variável assumirá por padrão o valor 'src/Api'_
- PROJECT_SLN_PATH: **'src'**
  - _Caminho da solution da sua aplicação. Se não informada a variável assumirá por padrão o valor 'src'_
- PROJECT_TEST_PATH: **'src/Test'**
  - _Caminho do projeto de testes da sua aplicação. Se não informada a variável assumirá por padrão o valor 'src/Test'_


# Etapas da master
- Staging
- Production

# Etapas de review/dev
- Build
- Quality Gate
- Review
- Cleanup
