require( './DesktopBanner.css' );
require( './icons.css' );
require( './wlightbox.css' );
require( './DesktopBannerOverride.css' ); // this was formally in-banner CSS. TODO: Merge with Desktopbanner, only keep override CSS

// global module name space. Remove when all JS has been converted to common.js modules that can be required/imported
var fundraisingBanner = {};

// TODO require Global banner values (compatible with on-wiki override)
// TODO remove parameter placeholder from Desktop banner
require( './DesktopBanner' );
// TODO TrackSizeIssues.js
// TODO CountCampaignDays.js
// TODO CustomDayName.js
// TODO wlightbox.js

// TODO progress bar partial, css and JS

var bannerTemplate = require('./banner_ctrl.hbs');

var $banner = $( '#WMDE-Banner-Container' );
$banner.html( bannerTemplate( {
    // TODO custom day name,
    // TODO day of the week
    // TODO approx. donors
    CampaignName: 'C17_02_170724',
    BannerName: 'B17_02_170724_ctrl'
} ) );
$( '#WMDE_Banner' ).show();

// TODO initialization code from banner
