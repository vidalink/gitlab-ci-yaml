# Template postman
Esse template inclui no pipeline uma etapa de "validation" para execução newman no pipeline

## Variáveis padrões
Algumas variaveis definem um comportamento padrão dessa etapa. São elas:
- COLLECTION_VARS: **'collection_vars.json'**
  - _Variáveis de ambiente exportada do postman_
  
## Variáveis opcionais
As variáveis a seguir são opcionais e permitem alterar a etapa de postman no pipeline:
- COLLECTION: 'collection.json'
  - Liga o step postman no pipeline (nome do arquivo exportado do postman)
- COLLECTION_SCENARIOS: 'collection_scenarios.json'
  - Arquivo json, chave a valor com massa para executar testes variados usando postman

### Configurar no projeto
Para implementar esse template, use:
> stages:
>   - ...
>   - validation
>
> include:
>   - ...
>   - remote: 'https://raw.githubusercontent.com/vidalink/gitlab-ci-yaml/master/templates/postman/.gitlab-ci-template.yml'
