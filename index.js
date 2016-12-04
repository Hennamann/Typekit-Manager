'use strict';
var menubar = require('menubar');
var electron = require('electron');

var mb = menubar({index:"https://adobeid-na1.services.adobe.com/renga-idprovider/pages/login?callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fadobeid%2FTypeKit2%2FAdobeID%2Ftoken%3Fredirect_uri%3Dhttps%253A%252F%252Ftypekit.com%252Flogin%252Fsso%253Fback_to%253Dhttps%25253A%25252F%25252Ftypekit.com%25252Ffonts%2523from_ims%253Dtrue%2526old_hash%253D%2526api%253Dauthorize&client_id=TypeKit2&scope=creative_cloud%2Csao.typekit%2Copenid%2Csao.cce_private%2CAdobeID%2Cgnav%2Cadditional_info.roles&denied_callback=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fdenied%2FTypeKit2%3Fredirect_uri%3Dhttps%253A%252F%252Ftypekit.com%252Flogin%252Fsso%253Fback_to%253Dhttps%25253A%25252F%25252Ftypekit.com%25252Ffonts%2523from_ims%253Dtrue%2526old_hash%253D%2526api%253Dauthorize%26response_type%3Dtoken&display=web_v2&relay=e3b4a2e2-ac24-436a-a453-694a63a7d9a0&locale=en_US&flow_type=token&client_redirect=https%3A%2F%2Fims-na1.adobelogin.com%2Fims%2Fredirect%2FTypeKit2%3Fclient_redirect%3Dhttps%253A%252F%252Ftypekit.com%252Flogin%252Fsso%253Fback_to%253Dhttps%25253A%25252F%25252Ftypekit.com%25252Ffonts%2523from_ims%253Dtrue%2526old_hash%253D%2526api%253Dauthorize&idp_flow_type=login", preloadWindow:true, tooltip:"Typekit Manager", icon:__dirname + "/res/Icon.png", width:500, height:640}); // Link is long, to ensure the user is logged in to Adobe and afterwards redirected to typekit fonts page.

mb.on('ready', function ready () {
  console.log('Typekit Manager is ready to manage your fonts!');
    
});
