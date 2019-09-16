# [WIP] Template gitlab-ci para integração com repositório NPM
Template usado para armazenar componentes react em um repositório NPM.

## Variáveis necessárias
Algumas variaveis definem um comportamento padrão dessa etapa. São elas:
- SOLUTION_PATH: **'my-react-component'**
  - _pasta raiz do componente (entendemos que na raiz do projeto, existem varios componentes)_
- PROJECT_PATH_TEST: **'my-react-component/tests'**
- NPM_SOURCE_URL: **'https://www.npm-xpto-repo.org/abc/auth/sf98dfu9s-ds9i9-f0s0-fds7f-dffsdfs/npm/'**

## Etapas da master
- Package
- Test

## Etapas da review/dev
- Test
