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
        count: 7, // number must be odd
        width: 607, // default width
        widthMainItem : 200, // calculate in init
        widthArrow : 35
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
            this.params.width = params.width;
        }
        $target.css({
            'width' : this.params.width
        });
        this.params.widthMainItem = Math.round(this.params.width / 3);


        $('.' + this.config.wrapperClass + '__scroll-left', $target).on('click', function(){
            self.activateSlide(self.getIdLeftSlide())
        });
        $('.' + this.config.wrapperClass + '__scroll-right', $target).on('click', function(){
            self.activateSlide(self.getIdRightSlide())
        });

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
        this.activateSlide(this.getIdLeftSlide());
    },
    scrollRight : function () {
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
        var number = this.current === this.data.length - 1 ? this.data.length - 1 : this.current + 1;
        return this.data[number].id;
    },
    getIdLeftSlide : function () {
        var number = this.current === 0 ? 0 : this.current - 1;
        return this.data[number].id;
    },
    activateSlide : function (id) {
        var i, intStart, intEnd,
            dataLength = this.data.length,
            interval = Math.round((this.params.count - 1) / 2);

        for (i = 0; i < dataLength; i++) {
            if (this.data[i].id === id) {
                intStart = i - interval > 0 ? i - interval : 0;
                intEnd = i + interval < dataLength ? i + interval : dataLength - 1;
                this.showSlides(intStart, intEnd, i);
                this.current = i;
            }
        }
    },
    showSlides : function (start, end, current) {
        var $container = $('.' + this.config.wrapperClass + '__content'),
            self = this,
            i, id, html, title, className, widthSmallItem, widthItem, leftItem, widthImg, srcImg, widthTitle;
        $container.empty();

        for (i = start; i <= end; i++) {

            title = this.data[i].surname + ' ' + this.data[i].name;
            id = self.data[i].id;
            if (i === current) {
                className = 'slider-users__main-item slider-users__item';
            } else {
                className = 'slider-users__item' ;
            }
            widthSmallItem = Math.round((this.params.width - this.params.widthArrow * 2 - 2 * this.params.count - this.params.widthMainItem) / (this.params.count - 1));
            widthItem = i === current ? this.params.widthMainItem :
                widthSmallItem;
            if (i > current) {
                leftItem = widthItem * ((this.params.count - 1) / 2 + i - current - 1) + this.params.widthMainItem + 6; // 4 is border-shadow
            } else if (i < current) {
                leftItem = widthItem * ((this.params.count - 1) / 2 + i - current );
            } else {
                leftItem = widthSmallItem * ((this.params.count - 1) / 2);
            }
            widthItem = widthItem - (7 + 1) * 2; // delete padding and border
            widthImg = i === current ? null : widthItem;
            srcImg = this.data[i].src || '/plugins/sliderUsers/no-pic.jpg';
            html = '<img class="slider-users__item-img" src="' + srcImg + '"' + (widthImg === null ? null : '" width="' + widthImg + '"') + '>' +
                (i === current ? '<h2 class="slider-users__item-title">' + this.data[i].surname + '<br>' + this.data[i].name + '</h2>' : '') +
                '<span class="slider-users__item-info" title="Подробная информация" onclick="gadgets.fullInfo.show(' + id + ')"></span>';

            $('<div />', {
                'html' : html,
                'data-id' : id,
                'class' : className,
                'style' : 'left : ' + leftItem + 'px; ' +  'width: ' + widthItem + 'px',
                'title' : title,
                click : function(e) {
                    var id = $(e.currentTarget).data('id');
                    self.activateSlide(id);
                }
            }).appendTo($container);
        }
    }
};