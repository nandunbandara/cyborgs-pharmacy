/**
 * Created by ishan on 5/4/17.
 */

angular.module('mailController',[])

.controller('mailCtrl',['$state','$stateParams',function () {
    const app = this;
    app.sendData = JSON.parse(localStorage.getItem('rowData'));
    app.mailMessage = "Dear Officer,\n\nThe Quantities of the below Drugs are Low. \nName: "+app.sendData.dName+
            "\nCategory: "+app.sendData.dCategory+"\nPrice: "+app.sendData.dPrice+"\nQuantity in hand: "+app.sendData.dQuantity+
            "\nPlease be kind enough to send us new stocks.\n\nBest Regards,\nChief Pharmacist."

    app.mailSubject = "Drug Reorder Request For "+app.sendData.dName;
    app.receiveAddress = "purchaseofficer@pharmacy.com";
    app.sendAddress = "pharmacist@pharmacy.com"


}])