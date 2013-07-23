/* required jQuery */

function SliderUsers(params) {
    if (!params.target) {
        console.error('Plugin required container!');
        return null;
    }

    this.config = {
        wrapperClass : 'slider-user-wrapper'
    };

    this.init(params);
}

SliderUsers.prototype = {
    data : [],
    init : function (params) {
        this.initGraphic(params);
    },
    initGraphic : function (params) {
        var $target = $(params.target);

        /* wrapper design */
        $target.empty().addClass(this.config.wrapperClass);
        if (params.width) {
            $target.css({
                'width' : params.width
            });
        }

        /* arrows design */
    },
    addSlide : function (slide) {
        if (!slide.id) {
            console.error('need slide id');
            return null;
        }
        if (!this.isDublicateSlide(slide)) {
            console.log('no dublicate');
            this.data.push(slide);
        } else {
            console.warn('dublicate');
            this.activateSlide(slide.id);
        }
    },
    removeSlide : function (id) {

    },
    isDublicateSlide : function (slide) {
        var i;
        for (i = 0; i < this.data.length; i++) {
            if (this.data[i].id === slide.id) {
                console.warn('Already have slide with this id');
                return true;
            }
        }
        return false;
    },
    activateSlide : function (id) {

    }
};