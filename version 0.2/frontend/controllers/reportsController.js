/**
 * Created by owner on 5/4/2017.
 */
angular.module('reportsController',[])



.controller('reportsCtrl',['Reports',function(Reports){
    const app = this;
    app.batchs = [];
    app.prescriptions = [];
    app.allBatchs = [];


    Reports.getAllExpiredBatchs().then(function (res){
        app.batchs = res.data;

    });

    Reports.getAllPrescription().then(function (res) {
        var date = new Date().getFullYear();
        app.prescriptions = res.data;

        //generate graph
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ["Jan", "Feb", "March", "Apr", "May", "June","July","Aug","Sep","Oct","Nov","Des"],
                datasets: [{
                    label: 'Number Of customers Vs '+ date,
                    data: [1, 1, 3, 4, 0, 0, 6, 7, 10, 5, 11, 57],
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

//save graphs as a pdf

    window.onload = function() {
        var saveGraphs = document.getElementById('saveBtn');
        saveGraphs.onclick = function () {
            var canvas = document.getElementById("myChart");
            var imgData = canvas.toDataURL("image/jpeg", 1.0);
            var pdf = new jsPDF();

            pdf.addImage(imgData, 'JPEG', 0, 0);
            var download = document.getElementById('myChart');

            pdf.save("download.pdf");
        }
    }
}]);