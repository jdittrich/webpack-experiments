require( './DesktopBanner.css' );
require( './icons.css' );
require( './wlightbox.css' );
require( './DesktopBannerOverride.css' ); // this was formally in-banner CSS. TODO: Merge with Desktopbanner, only keep override CSS

const bannerCloseTrackRatio = 0.01;


// global module name space. Remove when all JS has been converted to common.js modules that can be required/imported
const fundraisingBanner = {};

const DevGlobalBannerSettings = require( './GlobalBannerSettings' );
const GlobalBannerSettings = window.GlobalBannerSettings || DevGlobalBannerSettings;
const Translations = {}; // will only be needed for English banner, German defaults are in DesktopBanner
const BannerFunctions = require( './DesktopBanner' )( GlobalBannerSettings, Translations, bannerCloseTrackRatio );
// TODO TrackSizeIssues.js
// TODO CountCampaignDays.js
// TODO CustomDayName.js
// TODO wlightbox.js

// TODO progress bar partial, css and JS

const bannerTemplate = require('./banner_ctrl.hbs');

const $banner = $( '#WMDE-Banner-Container' );
$banner.html( bannerTemplate( {
    // TODO custom day name,
    // TODO day of the week
    // TODO approx. donors
    CampaignName: 'C17_02_170724',
    BannerName: 'B17_02_170724_ctrl'
} ) );
$( '#WMDE_Banner' ).show();

// TODO initialization code from banner
