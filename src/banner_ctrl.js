var bannerTemplate = require('./banner_ctrl.handlebars'),
    styles = require( './display_banner.css' );

var banner = document.getElementById( 'WMDE-Banner-Container' );
banner.innerHTML = bannerTemplate( { email: 'gabriel.birke@wikimedia.de' } );
