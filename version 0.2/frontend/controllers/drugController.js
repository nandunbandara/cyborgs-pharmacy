/**
 * Created by ishan on 5/3/17.
 */
angular.module('drugController',[])

.controller('drugCtrl',['Auth','$location','Drug','$scope',function(Auth,$location,Drug,$scope){
    const app = this;

    app.drugs = [];//all drug details
    app.categories = [];//all categories
    app.drugNames = []; // all drug names
    app.curPage = 0;
    app.selectedPage = 25;
    app.errorMessage = null;
    app.successMessage = null;
    app.drugData = {};
    Drug.getAllDrugs().then(function (res) {
        app.drugs = res.data;
        app.addColorProperty();
    })

    Drug.getAllCategories().then(function (res) {
        app.categories = res.data;
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

    app.addDrug = function (details) {
        if(app.validateDrug(details)){

            Drug.addNewDrug(details).then(function (res) {
                app.successMessage = "Drug added successfully !";
                app.errorMessage = null;

                $scope.data = null;
                $scope.addDrugFrom.$setPristine();
                $scope.addDrugFrom.$setUntouched();
            })



        }else {
            app.successMessage = null;
            app.errorMessage = "Drug cannot be added !"
        }
    }

    app.validateDrug = function (details) {
        if(isNaN(details.dPrice))
            return false;
        else if(isNaN(details.dangerLevel))
            return false;
        else if(isNaN(details.reorderLevel))
            return false;
        else
            return true;
    }

    app.categoryChange = function () {

        Drug.getDrugNameByCategory(app.drugData.dCategory).then(function (res) {
            app.drugNames = res.data;
        })
    }

    app.drugNameChange = function () {

        Drug.getDrugDetailsByName(app.drugData.dName).then(function (res) {
            app.drugData = res.data[0];
        })
    }
    
    
    app.updateTheDrug = function (details) {
        if(app.validateDrug(details)){
            Drug.updateDrug(details).then(function (res) {
                if(res.data.message=="error"){
                    app.successMessage = null;
                    app.errorMessage = "Drug cannot be updated !"
                }else{
                    app.successMessage = "Drug updated successfully !";
                    app.errorMessage = null;
                    app.drugData = null;
                    $scope.updateDrugFrom.$setPristine();
                    $scope.updateDrugFrom.$setUntouched();
                }
            })
        } else{
            app.successMessage = null;
            app.errorMessage = "Drug cannot be updated !"
        }
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

