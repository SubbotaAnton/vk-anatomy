

$(document).ready(function(){

    var sliderParams = {
        width : 607,
        target : '.containerForSlider'
    };

    window.gadgets = {
        sliderUsers: null,
        findUsers: null,
        fullInfo : null
    };

    gadgets.sliderUsers = new SliderUsers(sliderParams);

    $.getJSON('/javascripts/data.txt', function(result){
        if (result && result.response) {
            var data = result.response,
                dataLength = data.length,
                listOfUsers = [],
                i, user;

            for (i = 0; i < dataLength; i++) {
                user = {
                    src : data[i].photo_50,
                    surname : data[i].last_name,
                    name : data[i].first_name,
                    id : data[i].uid
                };

                listOfUsers.push({
                    label : data[i].first_name + ' ' + data[i].last_name,
                    value : user
                });
            }

            gadgets.findUsers = new FindUsers('#searchUsers', listOfUsers);

            gadgets.fullInfo = {
                show : function (id) {
                    console.log('show info for ' + id);
                }
            };

        }
    });

});

