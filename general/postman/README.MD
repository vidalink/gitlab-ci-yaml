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

## Variáveis para habilitar postman com massa de cenários (postman)
- $COLLECTION -> arquivo json com collection de teste (arquivo exportado do postman)
- $COLLECTION_VARS -> arquivo json com variáveis de ambiente (arquivo environment exportado do postman) 
- $COLLECTION_SCENARIES -> arquivo com massa utilizado no runner do postman (arquivo usado para execução de cenários diversos no postman). A variável deve conter o nome base dos arquivos, sem a extensão "JSON". A nomenclatura do arquivo indicará qual a pasta da collection será executada para a massa. Por exemplo, um arquivo nomeado ($COLLECTION_SCENARIES).Testes_1.json irá ser utilizado como massa para todos os endpoints contidos dentro da pasta "Testes_1" na collection (definida pela variável $COLLECTION). Será feita uma execução para cada arquivo neste padrão.

## Variáveis para habilitar postman (postman)
- $COLLECTION -> arquivo json com collection de teste (arquivo exportado do postman)
- $COLLECTION_VARS -> arquivo json com variáveis de ambiente (arquivo environment exportado do postman) 


### Configurar no projeto
Para implementar esse template, use:
> stages:
>   - ...
>   - validation
>
> include:
>   - ...
>   - remote: 'https://raw.githubusercontent.com/vidalink/gitlab-ci-yaml/master/templates/postman/.gitlab-ci-template.yml'
