odoo.define("dashboard.sale.action", function (require) {
  "use strict";
  var core = require("web.core");
  var AbstractAction = require("web.AbstractAction");
  var sales = require("dashboard.sales");
  var AbstractActionPage = AbstractAction.extend({
    start: function () {
      sales(this.$el.find(".o_content")[0], {});
    },
  });

  core.action_registry.add(
    "dashboard.dashboard_sale_action",
    AbstractActionPage
  );
});
