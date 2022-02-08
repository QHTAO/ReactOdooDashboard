# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.
{
    'name': 'dashboard',
    'version': '1.1',
    'sequence': 1,
    'summary': 'dashboard',
    'description': """
dashboard demo
    """,
    'depends': ['base'],
    'data': [
        'views/dashboard_views.xml',
    ],
    "assets": {
        "web.assets_backend": [
            "dashboard/static/src/css/*.css",
            "dashboard/static/src/js/*.js",
            "dashboard/static/src/js/content/*.js",
        ]
    },
    'installable': True,
    'auto_install': False,
    'application': True,
    'license': 'LGPL-3',
}
