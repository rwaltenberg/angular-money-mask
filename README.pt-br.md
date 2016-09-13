# Máscara de Dinheiro para Angular
Uma diretiva em AngularJS (1.x) para criar máscaras de valores monetários em campos de formulários

** __For `English`, [click here](README.md)__ **

## Como usar

#### Baixe pelo npm ou bower
```sh
$ npm install angular-money-directive --save
```
ou
```sh
$ bower install angular-money-directive --save
```

#### Referencie o aquivo do script

```html
<script src="rw-money-mask.min.js"></script>
```

#### Adicione `rw.moneymask` nas dependências do seu app

```javascript
angular.module('seuApp', ['rw.moneymask'])
```

#### Use a diretiva `money-mask`

```html
<input type="text" name="preco" ng-model="model.preco" money-mask />
```
*Obs: É obrigatório o uso da diretiva __ngModel__!*

## Como funciona

#### Model

 - Precisa ser um `Number` válido do Javascript. Ex.: `100` (R$ 100,00), `4.20` (R$ 4,20), `4340.65` (R$ 4.340,65)
 - Ele mantém o valor do model como um número. Somente a exibição do campo é formatada.

#### View

 - Exibe o valor do model formatado conforme o usuário digita
 - Ele só permitirá a digitação de números. Toda vez que um número é inserido, o valor atualiza.
 - Usa `$filter('number')`, que usa a configuração `$locale.NUMBER_FORMATS` (separadores, tamanho de fração, etc) então é compatível com i18n.

#### Opções

Use `money-mask-prepend` e `money-mask-append` para adicionar texto antes ou depois do valor formatado.
```html
<input type="text" name="preco" ng-model="model.preco" money-mask money-mask-prepend="R$" />
```
ou
```html
<input type="text" name="preco" ng-model="model.preco" money-mask money-mask-append="reais" />
```

## Desenvolvimento - Contribua!

- Contribuições no código são benvindas. Faça um fork e mande um pull request!
- Revisões deste documento ou do README em inglês são mas do que benvindas :)