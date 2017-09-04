function getAlbumPhotos(albumid){
    FB.api("/"+albumid+"/photos",function(response){
        var photos = response["data"];
        var html = "count "+photos.length;
        for(var i=0;i<photos.length;i++) {
            var images = photos[i]["images"];
            html+= "Photo "+(v+1);
            html+= '<img src="'+images[(images.length-1)]["source"]+'" />';
            var tmp = "";
            for(var j = 0 ;j<images.length;j++) {
                tmp+= '<a href="'+images[j]["source"]+'"> size : '+images[j]["width"]+"X"+images[j]["height"]+'</a><br />';
            }
            html+=temp+"<hr />";
        }
        document.getElementById("photos").innerHTML = html;
    });
}