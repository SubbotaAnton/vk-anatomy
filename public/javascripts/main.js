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
        slide2 = {
            src : 'http://cs314624.vk.me/v314624170/1d1e/PdhQXx19554.jpg',
            surname : 'Фамилия2',
            name : 'Имя2',
            id : 1231231
        },
        slide3 = {
            src : 'http://cs314624.vk.me/v314624170/1d1e/PdhQXx19554.jpg',
            surname : 'Фамилия3',
            name : 'Имя3',
            id : 123123
        },
        slide4 = {
            src : 'http://cs314624.vk.me/v314624170/1d1e/PdhQXx19554.jpg',
            surname : 'Фамилия4',
            name : 'Имя4',
            id : 12312
        },
        slide5 = {
            src : 'http://cs314624.vk.me/v314624170/1d1e/PdhQXx19554.jpg',
            surname : 'Фамилия5',
            name : 'Имя5',
            id : 1231
        },
        slide6 = {
            src : 'http://cs314624.vk.me/v314624170/1d1e/PdhQXx19554.jpg',
            surname : 'Фамилия6',
            name : 'Имя6',
            id : 123
        },
        goodSlider = new SliderUsers(params);

    goodSlider.addSlide(slide);
    goodSlider.addSlide(slide2);
    goodSlider.addSlide(slide3);
    goodSlider.addSlide(slide4);
    goodSlider.addSlide(slide5);
    goodSlider.addSlide(slide6);
    goodSlider.addSlide(slide);
    goodSlider.addSlide(slide3);

});

