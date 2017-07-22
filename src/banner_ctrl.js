require( './display_banner.css' );
var bannerTemplate = require('./banner_ctrl.handlebars');

var banner = document.getElementById( 'WMDE-Banner-Container' );
banner.innerHTML = bannerTemplate( { email: 'gabriel.birke@wikimedia.de' } );
