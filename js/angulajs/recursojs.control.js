(function (angular) {
    'use strict';

    var app = angular.module('main-app', [])
        .controller('controller', ['$scope', function ($scope) {
            $scope.name = 'Teste';
        }]);

    app.directive('myMask', function () {
        return {
            restrict: 'A',
            link: function () {
                $(".telefonecelularAngular").keyup(function () {
                    var conteudo = this.value;
                    var numero = conteudo.replace("(", "");
                    var numero = numero.replace(")", "");
                    var numero = numero.replace("-", "");
                    var numero = numero.replace(/\s/g, "");
                    var res = 0;

                    if (numero.length > 3) {
                        res = numero.substring(2, 3);
                    }

                    if (res == 9) {
                        $(this).unmask();
                        $(this).mask("(99) 9 9999-9999");
                    } else {
                        $(this).unmask();
                        $(this).mask("(99) 9999-9999");
                    }
                    $(this).val(numero);
                });
            }
        }
    });
})(window.angular);
