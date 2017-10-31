const BASE_URL = "http://dev-moshe:3000/api";

// Azure JSON doc
// Id example: 3a3d74d928
// https://docs.microsoft.com/en-us/azure/cognitive-services/video-indexer/video-indexer-output-json
$(function() {

    const loadAllVideoIds = function(callback) {
        $.ajax({
            type: "GET",
            dataType: 'text',
            url: BASE_URL + "/videoIds"
        }).done(callback)
            .fail(function() {
                alert("error");
            });
    };

    const loadVideoData = function(id, callback) {
        $.ajax({
            type: "GET",
            dataType: 'text',
            url: BASE_URL + "/videoData/" + id,
            success: callback,
            fail: function(){
                alert('Failed to pass request');
            }
        });
    };

    loadAllVideoIds(function(data){
        alert(data);
    });

    loadVideoData("aa09d1fc27", function(data){
        alert(data);
    })
});