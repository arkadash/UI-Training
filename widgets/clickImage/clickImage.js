/**
 * Created by markadash on 2017-10-30.
 */

$.widget("ui.clickImage", {

    // Options
    options: {
        src: "https://cdn.vox-cdn.com/uploads/chorus_asset/file/8546193/mel_minion.jpg",
        title: "",
        onClick: function(){
            alert("This Default");
        }
    },

    // Constructor
    _create: function(){
        const that = this;
        const element = that.element.addClass('click-image');
        element.append(
            $('<img class="click-image-img" src=' + that.options.src + '>')
        );
        element.attr('title', that.options.title);
        element.click(that.options.onClick);
    },

    clickMethod: function (data) {
        const that = this;
        that.element.click();
        alert(data);
    }


});