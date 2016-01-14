
    function contaction() {
        var directive = {
            restrict: 'E',
            templateUrl: '/js/app/contact/templates/contact.template.html',
            scope: true,
            replace: true,
            controller: [
                '$scope',
                function ($scope) {




                    $scope.eww = "ddsf";





                }
            ]
        };
        return directive;
    }

    contaction.$inject = ['contact.factory'];

    angular.module('contact').directive('contdirective', contaction);
