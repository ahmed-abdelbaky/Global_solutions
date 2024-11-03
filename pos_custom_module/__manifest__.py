{
    'name': "Point Of Sale Custom Module",
    'Author': "Ahmed Abd El Baky",
    'description': "Add Custom Button On point OF Sale View To Select a New Employee And Send This Data To Backend View Order",
    'depends':[
        'point_of_sale',
        'hr',
        'web',
    ],
    'data':[
        'views/pos_order.xml',
    ],
    'installable': True,
    'auto_install': False,
    'license': 'AGPL-3',
    'assets': {
        'point_of_sale.assets': [
            'pos_custom_module/static/src/js/employee_template.js',
            'pos_custom_module/static/src/js/models.js',
            'pos_custom_module/static/src/xml/template.xml',
        ],
    },
}