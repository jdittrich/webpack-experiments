require( './styles_var.css' );



const bannerTemplate = require('./banner_var.hbs');

var banner = document.getElementById( 'banner' );
banner.innerHTML = bannerTemplate();
