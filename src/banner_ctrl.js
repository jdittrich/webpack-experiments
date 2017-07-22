require( './display_banner.css' );
var bannerTemplate = require('./banner_ctrl.handlebars');

var $banner = $( '#WMDE-Banner-Container' );
$banner.html( bannerTemplate( { email: 'gabriel.birke@wikimedia.de' } ) );
$banner.find( 'a' ).css( { textDecoration: 'none', color: 'darkgreen' } );
