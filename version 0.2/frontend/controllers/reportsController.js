/**
 * Created by owner on 5/4/2017.
 */
angular.module('reportsController',[])



.controller('reportsCtrl',['Reports',function(Reports){
    const app = this;
    app.batchs = [];
    app.prescriptions = [];
    app.allBatchs = [];
    app.dataOfGraph = [];
    app.reqDate ={};


    app.getToBeExpiredBatches1 = function (date) {

        Reports.getToBeExpiredBatches(date).then(function (res) {
            app.batchs = res.data;
            console.log(res.data);
        })
    };

    Reports.getAllPrescription().then(function (res) {
        var date = new Date().getFullYear();
       app.prescriptions = res.data;
//get count from database and store
        for(var item in app.prescriptions){

            if(app.prescriptions[item]._id.year == date){
                if(app.prescriptions[item]._id.month == 1)
                    app.dataOfGraph[0]=app.prescriptions[item].count;
                if(app.prescriptions[item]._id.month == 2)
                    app.dataOfGraph[1]=app.prescriptions[item].count;
                if(app.prescriptions[item]._id.month == 3)
                    app.dataOfGraph[2]=app.prescriptions[item].count;
                if(app.prescriptions[item]._id.month == 4)
                    app.dataOfGraph[3]=app.prescriptions[item].count;
                if(app.prescriptions[item]._id.month == 5)
                    app.dataOfGraph[4]=app.prescriptions[item].count;
                if(app.prescriptions[item]._id.month == 6)
                    app.dataOfGraph[5]=app.prescriptions[item].count;
                if(app.prescriptions[item]._id.month == 7)
                    app.dataOfGraph[6]=app.prescriptions[item].count;
                if(app.prescriptions[item]._id.month == 8)
                    app.dataOfGraph[7]=app.prescriptions[item].count;
                if(app.prescriptions[item]._id.month == 9)
                    app.dataOfGraph[8]=app.prescriptions[item].count;
                if(app.prescriptions[item]._id.month == 10)
                    app.dataOfGraph[9]=app.prescriptions[item].count;
                if(app.prescriptions[item]._id.month == 11)
                    app.dataOfGraph[10]=app.prescriptions[item].count;
                if(app.prescriptions[item]._id.month == 12)
                    app.dataOfGraph[11]=app.prescriptions[item].count;
            }
        }




        //generate graph
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Jan", "Feb", "March", "Apr", "May", "June","July","Aug","Sep","Oct","Nov","Des"],
                datasets: [{
                    label: 'Number Of customers Vs '+ date,
                    data: app.dataOfGraph,
                    backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 206, 86, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(153, 102, 255, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                    ],
                    borderColor: [
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                        'rgba(255,99,132,1)',
                        'rgba(54, 162, 235, 1)',
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }]
                }
            }
        });
    });

    Reports.getAllBatchs().then(function (res) {
        app.allBatchs = res.data;
    });


function saveasPdf(){
    console.log('function is working');
}
}]);