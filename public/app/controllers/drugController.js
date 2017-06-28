/**
 * Created by ishan on 5/3/17.
 */
angular.module('drugController',[])

.controller('drugCtrl',['Auth','$location','Drug',function(Auth,$location,Drug){
    const app = this;

    app.drugs = [];
    app.curPage = 0;
    app.selectedPage = 25;

    Drug.getAllDrugs().then(function (res) {
        app.drugs = res.data;
        app.addColorProperty();
    })

    app.addColorProperty = function () {
        for(var item in app.drugs){

            if(app.drugs[item].dQuantity < app.drugs[item].dangerLevel){
                app.drugs[item].dangerColor = true;
            }else if (app.drugs[item].dQuantity < app.drugs[item].reorderLevel) {
                app.drugs[item].reorderColor = true;
            }
            else{
                app.drugs[item].reorderColor = false;
                app.drugs[item].dangerColor = false;
            }

        }
    }
    
    app.setPagination = function (data) {
        app.selectedPage = data;
    }

}])

.filter('pagination', function() {

    return function(input, start) {
        start = +start;
        return input.slice(start);
    };
})

.filter('roundup', function () {
    return function (value) {
        return Math.ceil(value);
    };
})

