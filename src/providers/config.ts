import {Platform}               from    'ionic-angular';
import {Injectable}             from    '@angular/core';

@Injectable()
export class Config {

    ob3Server                   :   string;

    apiBasePoint                :   string;
    apipoint                    :  string;

    organization                :   string;

    oneSignalAppID              :   string;

    googleProjectNumber         :   string;

    constructor(
        private platform        :   Platform) {
        this.organization       =   'MedicineShoppee';
       // this.ob3Server          =  'https://fortuneerp.easycloud.in/fortune/'
        //this.ob3Server          =  'http://159.69.177.214:8080/erp/'
        this.ob3Server      = 'https://medicineshoppee.easycloud.in/erp/'
        // this.ob3Server          =   'https://sakshamerp.easycloud.in/openbravo/';
        //this.ob3Server           =   'https://erp.rockwell.co.in/RIL/';
        this.apiBasePoint       =   this.ob3Server + 'org.openbravo.service.json.jsonrest/';
        this.apipoint           =  this.ob3Server;

        this.oneSignalAppID     =   "28bc6aac-404b-4586-8789-474871f7d77d";
       this.googleProjectNumber=   "732163760964";
    };

}