 define(['jquery.plugins'], function ($) {

   return $.widget('admin.baseView', {
    /**
     * Create function for baseView
     * @returns {undefined}
     */
    _create: function () {
      this._super();
    },

    /**
     * destroys the widget and removes any data, calls the widget factory destroy
     * @returns {undefined}
     */
    _destroy: function () {
      if (this.element) {
        this.element.off();
        this.element.removeData();
      }

      this._super();
    },
  });
 });
