$(document).ready(function(){
    var params = {
            width : 607,
            target : '.containerForSlider'
        },
        slide = {
            src : 'http://cs314624.vk.me/v314624170/1d1e/PdhQXx19554.jpg',
            surname : 'Фамилия',
            name : 'Имя',
            id : 12312312
        },
        goodSlider = new SliderUsers(params);

    goodSlider.addSlide(slide);
    goodSlider.addSlide(slide);
});

