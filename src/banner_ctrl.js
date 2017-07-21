var bannerTemplate = require('./banner_ctrl.handlebars'),
    styles = require( './styles.css' );

var banner = document.getElementById( 'banner' );
banner.innerHTML = bannerTemplate( { name: 'Bruce Banner' } );
