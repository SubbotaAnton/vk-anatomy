/* required jQuery, jQueeryUI */

function FindUsers(params) {
    this.init(params);
}

FindUsers.prototype = {
    init : function (params) {
        $( "#searchUsers" ).autocomplete({
            source: params,
            select: function(ui) {
                console.log(ui.item.value);
            }
        });

    }
};