from odoo import models, fields,api, _



class PosOrder(models.Model):
    _inherit = 'pos.order'

    employee_id = fields.Many2one('hr.employee', 'Employee')

    def _order_fields(self, ui_order):
        result = super()._order_fields(ui_order)
        result['employee_id'] = ui_order.get('employee_id')
        return result
