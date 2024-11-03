/** @odoo-module **/

import models from 'point_of_sale.models';
import {Order} from 'point_of_sale.models';
import  Registries from "point_of_sale.Registries";
const Suggestion = (Order) => class Suggestion extends Order {
     constructor() {
     super(...arguments);
     this.employee_id = this.employee_id || null;
     }
     set_employee(employee_id){
     this.employee_id = employee_id
     }
     //send order data to send to the server
     export_as_JSON() {
     const json = super.export_as_JSON(...arguments)
     json.employee_id = this.employee_id ;
     return json;
     }
     init_from_JSON(json) {
     super.init_from_JSON(...arguments);
      this.employee_id = json.employee_id;
      }
     };
     Registries.Model.extend(Order, Suggestion);
