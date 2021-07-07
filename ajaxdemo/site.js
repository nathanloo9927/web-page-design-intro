$(function() {
    console.log("nyeh");

    $("#get-songs-from-api").click(function() {
        console.log("it's magic");
        $.ajax( {
            dataType: "Json",
            url: "getsongs.php",
            success: function(songs) {
                console.log("List of songs received:");
                console.log(songs);
                $.each( songs, function(i, song) {
                    var songStr = '<li>Title: ' + song.title + ', Artist: ' + song.artist + '</li>'
                    $(songStr).appendTo("#songs").hide().fadeIn();
                })
            }
        });
    });


    $("#add-song").click(function() {
        var song = {
            title:$("#title").val(),
            artist:$("#artist").val()
        };
        console.log("it's magic");
        $.ajax( {
            type:'GET',
            dataType: "Json",
            data:song,
            url: "putsong.php",
            success: function(newsong) {
                console.log("New song received:");
                console.log(newsong);
                var songStr = '<li>Title: ' + newsong.title + ', Artist: ' + newsong.artist + '</li>'
                $(songStr).appendTo("#songs").hide().fadeIn();
            }
        });
    });
});