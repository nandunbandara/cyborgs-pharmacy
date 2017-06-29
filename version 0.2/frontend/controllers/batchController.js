/**
 * Created by ishan on 6/30/17.
 */

angular.module('batchController',[])

.controller('batchCtrl',['Drug',function () {
    const app = this;

    app.cartons = false;
    app.bottles = false;
    app.tablets = false;
    app.liquid = false;
    app.bbottles = false;
    app.bcards = false;

    app.setType = function (val) {
        if(val=="cartons"){
            app.cartons = true;
            app.bottles = false;
        } else if(val == "bottles"){
            app.bottles = true;
            app.cartons = false;
        }
    }

    app.setContent = function (val) {
        if(val == "tablets"){
            app.tablets = true;
            app.liquid = false;
        }else if(val == "liquid"){
            app.tablets = false;
            app.liquid = true;
        }
    }
    
    app.setContentType = function (val) {
        if(val == "bbottles"){
            app.bbottles = true;
            app.bcards = false;
        }else if (val == "bcards"){
            app.bbottles = false;
            app.bcards = true;
        }
    }
}])