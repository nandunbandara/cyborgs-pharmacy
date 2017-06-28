/**
 * Created by root on 6/28/17.
 */
angular.module('cyborgPharmacy.confService',[])

.factory('Conf', [function(){
    const con = {};

    con.auth_service = "http://localhost:9001";
    con.drug_service = "http://localhost:9002";
    //set your service URIs here

    return con;
}])