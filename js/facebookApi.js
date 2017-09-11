window.fbAsyncInit = function() {
    FB.init({
        appId            : '120623738669748',
        autoLogAppEvents : true,
        xfbml            : true,
        version          : 'v2.10',
    });
    FB.AppEvents.logPageView();
    FB.getLoginStatus(function(response) {
        if (response.status === 'connected') {
            // the user is logged in and has authenticated your
            // app, and response.authResponse supplies
            // the user's ID, a valid access token, a signed
            // request, and the time the access token
            // and signed request each expire
            console.log('OK');
            var uid = response.authResponse.userID;
            var accessToken = response.authResponse.accessToken;
            // console.log(accessToken);
            // get List of all photos
            FB.api(
                '/1659797960957066/photos',
                'GET',
                {"fields":"images,comments", "limit":"250"},
                function(response) {
                    var photos = response.data;
                    console.log(photos);
                    var html = "";
                    for(var i=0;i<photos.length;i++) {
                        var images = photos[i]["images"];
                        html+= '<div class="single_photo col-md-3" style="padding-top: 30px"><img style="max-height: 255px; max-width: 255px" src="'+images[(images.length-1)]["source"]+'" /></div>';
                    }
                    // console.log(html);
                    document.getElementById("photos").innerHTML = html;
                    // Insert your code here
                }
            );
        } else if (response.status === 'not_authorized') {
            console.log('NOK');
            // the user is logged in to Facebook,
            // but has not authenticated your app
        } else {
            console.log('fail');
            // the user isn't logged in to Facebook.
            FB.login(function(response) {
                if (response.authResponse) {
                    console.log('Welcome!  Fetching your information.... ');
                    FB.api('/me', function(response) {
                        console.log('Good to see you, ' + response.name + '.');
                    });
                } else {
                    console.log('User cancelled login or did not fully authorize.');
                }
            });
        }
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/pl_PL/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));