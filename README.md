# Projeto Minsait Web

## Projeto de desenvolvimento do Front-End em Angular para consumir uma API, treinamento da minsait ministrada pelo professor <a href="https://www.linkedin.com/in/devrmartins/">Raffael Martins</a>

Aplicação em Angular para desenvolvimento do front <br/>
![Angular](https://img.shields.io/badge/angular-%23DD0031.svg?style=for-the-badge&logo=angular&logoColor=white)

### O que é esperado
- Aplicar o que foi aprendido em aula
- Consumir API
- Tema livre

# Executando o projeto localmente

## Pré-requisitos
- <a href="https://code.visualstudio.com/">Visual Code</a>
- <a href="https://nodejs.org/en/">NodeJS</a>
- <a href="https://angular.io/cli">Angular CLI</a>

## Configuração

1. Dar um git clone no repositório do projeto
```
git clone https://github.com/cairomedeiros/Projeto-Minsait-Web.git
cd Projeto-Minsait-Web
npm install
```

2. Rodar o projeto
```
ng s --open
```

## Documentação

O projeto tem como objetivo ser destinado para o uso administrativo de uma clínica veterinária, manejando o fluxo de Tutores e Pacientes diariamente

- A página inicial exibe a lista de tutores(donos do paciente), com botões que trazem diferentes funcionalidades

<div align="center"><img src="https://user-images.githubusercontent.com/102051011/202799569-f3a9f1c2-78bb-40a1-be26-a7068f461188.png" width="800px"/></div>

- O primeiro botão ao ser clicado exibe um modal com a lista de pets do tutor, onde é possível fazer a atualização de algum pet ou remoção do mesmo

<div align="center"><img src="https://user-images.githubusercontent.com/102051011/202800487-0512c5c8-73d6-4a55-b05c-fac2f799c99f.png" width="800px"/></div>

- O segundo botão podemos atualizar os dados do tutor

<div align="center"><img src="https://user-images.githubusercontent.com/102051011/202801941-78a71477-e794-4cf4-a81d-6124d20c27bc.png" width="800px"/></div>

- O terceiro botão desativa o tutor e deixa ele em uma lista de desativados
- O ultimo botão adiciona um novo paciente relacionado aquele tutor

<div align="center"><img src="https://user-images.githubusercontent.com/102051011/202802421-fdd3b9dd-1413-4681-9016-04b081330ae8.png" width="800px"/></div>

- Ao clicar no menu ele exibe um sidebar com as páginas na qual existem

<div align="center"><img src="https://user-images.githubusercontent.com/102051011/202802588-d12eb7aa-8812-404d-b0f6-ebcc80904846.png" width="800px"/></div>

- Ao clicar em cadastro(no menu) ou no botão adicionar tutor, você será redirecionado a página de cadastro

<div align="center"><img src="https://user-images.githubusercontent.com/102051011/202802955-af24b838-1294-4d1c-8e21-ce6a1a5a8e6f.png" width="800px"/></div>

- E então temos a nossa última página, ao clicar em tutores desativados, será redirecionado a página de desativados, onde é possível reativalos

<div align="center"><img src="https://user-images.githubusercontent.com/102051011/202803908-83b32efe-f349-4e86-a641-eeb0ef891c9b.png" width="800px"/></div>
