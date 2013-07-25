/* required jQuery, jQueeryUI */

function FindUsers(id, params) {
    this.init(id, params);
}

FindUsers.prototype = {
    init : function (id, params) {
        $( id ).autocomplete({
            source: params,
            select: function(event, ui) {
                $(id).val('');
                gadgets.sliderUsers.addSlide(ui.item.value);
                return false;
            }
        });

    }
};