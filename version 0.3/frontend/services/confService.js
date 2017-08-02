/**
 * Created by root on 6/28/17.
 */
angular.module('cyborgPharmacy.confService',[])

.factory('Conf', [function(){
    const con = {};

    con.auth_service = "http://127.0.0.1:9001";
    con.drug_service = "http://127.0.0.1:9002";
    con.prescription_service = "http://127.0.0.1:9003";
    con.report_service = "http://127.0.0.1:9004";
    //set your service URIs here
    //http://35.164.154.55
    return con;
}])