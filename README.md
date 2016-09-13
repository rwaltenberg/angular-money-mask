# Angular Money Mask
An AngularJS (1.x) directive to mask inputs with currency values

** __Para ler este documento em `Português`, [clique aqui](README.pt-br.md)__ **

## Usage

#### Download from npm or bower
```sh
$ npm install angular-money-directive --save
```
or
```sh
$ bower install angular-money-directive --save
```

#### Reference script file

```html
<script src="rw-money-mask.min.js"></script>
```

#### Inject `rw.moneymask` module

```javascript
angular.module('yourApp', ['rw.moneymask'])
```

#### Bind directive `money-mask`

```html
<input type="text" name="price" ng-model="model.price" money-mask />
```
*Obs: __ngModel__ is required!*

## How it works

#### Model

 - Expects it to be a valid Javascript `Number`. e.g.: `100` ($ 100.00), `4.20` ($ 4.20), `4340.65` ($ 4,340.65)
 - It maintains the model value as a number. Only the input view gets formatted.

#### View

 - Displays formatted model value as the user types
 - It will allow only numbers to the input. Each time a number is put, the value updates.
 - Uses `$filter('number')`, which uses `$locale.NUMBER_FORMATS` configuration (separators, fraction size, etc) so it's i18n compatible.

#### Options

Use `money-mask-append` and `money-mask-prepend` to add some text to the formatted currency.
```html
<input type="text" name="price" ng-model="model.price" money-mask money-mask-prepend="$" />
```
or
```html
<input type="text" name="price" ng-model="model.price" money-mask money-mask-append="dollars" />
```

## Development - Contribute!

- Improvements are always welcome. Fork it and send a pull request!
- English revisions to this document are more than welcome :)