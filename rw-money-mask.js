(function () {
  'use strict';

  angular
    .module('rw.moneymask', [])
    .directive('moneyMask', moneyMask);

  moneyMask.$inject = ['$filter'];
  function moneyMask($filter) {
    var directive = {
      require: 'ngModel',
      link: link,
      restrict: 'A',
      scope: {
        model: '=ngModel'
      }
    };
    return directive;

    function link(scope, element, attrs, ngModelCtrl) {
      var display, cents;

      ngModelCtrl.$render = function () {
        display = $filter('number')(cents / 100, 2);

        if (attrs.moneyMaskPrepend) {
          display = attrs.moneyMaskPrepend + ' ' + display;
        }

        if (attrs.moneyMaskAppend) {
          display = display + ' ' + attrs.moneyMaskAppend;
        }

        element.val(display);
      }

      scope.$watch('model', function onModelChange(newValue) {
        newValue = parseFloat(newValue) || 0;

        if(newValue !== cents) {
          cents = Math.round(newValue * 100);
        }

        ngModelCtrl.$viewValue = newValue;
        ngModelCtrl.$render();
      });

      element.on('keypress', function (e) {
        var char = String.fromCharCode(e.keyCode);
        e.preventDefault();
        
        if (char.search(/[0-9\-]/) === 0) {
          cents = parseInt(cents + char);
        }
        else if (e.keyCode === 8) {
          cents = parseInt(cents.toString().slice(0, -1)) || 0;
        }
        else {
          return false;
        }

        ngModelCtrl.$setViewValue(cents / 100);
        ngModelCtrl.$render();
        scope.$apply();
      })
    }
  }
})();