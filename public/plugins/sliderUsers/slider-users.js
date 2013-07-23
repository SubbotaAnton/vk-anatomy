/* required jQuery */

function SliderUsers(params) {
    if (!params.target) {
        console.error('Plugin required container!');
        return null;
    }

    this.config = {
        wrapperClass : 'slider-users-wrapper'
    };

    this.init(params);
}

SliderUsers.prototype = {
    data : [],
    current : null,
    params : {
        count: 3 // number must be odd
    },
    init : function (params) {
        this.initGraphic(params);
    },
    initGraphic : function (params) {
        var $target = $(params.target),
            self = this;

        /* wrapper design */
        $target.addClass(this.config.wrapperClass);
        if (params.width) {
            $target.css({
                'width' : params.width
            });
        }

        $('.' + this.config.wrapperClass + '__scroll-left', $target).on('click', function(e){self.activateSlide(self.getIdLeftSlide())});
        $('.' + this.config.wrapperClass + '__scroll-right', $target).on('click', this.scrollRight);

    },
    addSlide : function (slide) {
        if (!slide.id) {
            console.error('need slide id');
            return null;
        }
        if (!this.isDublicateSlide(slide)) {
            this.data.push(slide);
        }
        this.activateSlide(slide.id);
    },
    removeSlide : function (id) {

    },
    scrollLeft : function () {
        console.log(this.getIdLeftSlide());
        this.activateSlide(this.getIdLeftSlide());
    },
    scrollRight : function () {
        console.log(this);
        this.activateSlide(this.getIdRightSlide());
    },
    isDublicateSlide : function (slide) {
        var i;
        for (i = 0; i < this.data.length; i++) {
            if (this.data[i].id === slide.id) {
                return true;
            }
        }
        return false;
    },
    getIdRightSlide : function () {
        var number = this.current = this.data.length ? this.data.length : this.current + 1;
        return this.data[number];
    },
    getIdLeftSlide : function () {
        var number = this.current = 0 ? 0 : this.current - 1;
        return this.data[number];
    },
    activateSlide : function (id) {
        var i, intStart, intEnd,
            dataLength = this.data.length,
            interval = Math.round((this.params.count - 1) / 2);

        for (i = 0; i < dataLength; i++) {
            if (this.data[i].id === id) {
                intStart = i - interval > 0 ? i - interval : 0;
                intEnd = i + interval < dataLength ? i + interval : dataLength - 1;
                this.showSlides(intStart, intEnd);
                this.current = i;
            }
        }
    },
    showSlides : function (start, end) {
        var $container = $('.' + this.config.wrapperClass + '__content'),
            self = this,
            i, id, html;
        $container.empty();

        for (i = start; i <= end; i++) {
            html = '<h2>' + this.data[i].surname + ' ' + this.data[i].name + '</h2>';
            id = self.data[i].id;
            $('<div />', {
                'html' : html,
                'data-id' : id,
                click : function(e) {
                    var id = $(e.currentTarget).data('id');
                    self.activateSlide(id);
                }
            }).appendTo($container);
        }
    }
};