$(document).ready(function(){

    $.getJSON('/javascripts/data.txt', function(result){
        if (result && result.response) {
            var data = result.response,
                dataLength = data.length,
                i, user;

            var params = {
                    width : 607,
                    target : '.containerForSlider'
                };

            window.goodSlider = new SliderUsers(params);

            var availableTags = [];

            for (i = 0; i < dataLength; i++) {
                user = {
                    src : data[i].photo_50,
                    surname : data[i].last_name,
                    name : data[i].first_name,
                    id : data[i].uid
                };
                goodSlider.addSlide(user);
                availableTags.push({
                    label : data[i].first_name + ' ' + data[i].last_name,
                    value : user
                });
            }

            window.findUsers = new FindUsers(availableTags);

        }
    });

});

