/** @odoo-module **/
import Registries from 'point_of_sale.Registries';
import  PaymentScreen from 'point_of_sale.PaymentScreen';

const ExtraChargeButton = (PaymentScreen) =>
   class extends PaymentScreen {
       setup() {
           super.setup(...arguments);
       }
       async select_employee(){
            var result = await this.rpc({
                'model': 'hr.employee',
                'method': 'search_read',
                'args':[[],['id', 'name']]
        })
        var multi_lang_test = []
        result.forEach(function(values){
                multi_lang_test.push({
                'id':values.id, 'label': values.name, 'item':values})

        })
       const { confirmed, payload } = await this.showPopup('SelectionPopup', {
       title: this.env._t('Select Employee'),
        list: multi_lang_test,
       });
       if (confirmed) {
         this.currentOrder.set_employee(payload.id);
       }
       }
   };
Registries.Component.extend(PaymentScreen, ExtraChargeButton);
return ExtraChargeButton;
