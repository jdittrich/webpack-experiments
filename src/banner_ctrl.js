require( './DesktopBanner.css' );
require( './icons.css' );
require( './wlightbox.css' );
require( './DesktopBannerOverride.css' ); // this was formally in-banner CSS. TODO: Merge with Desktopbanner, only keep override CSS

// BEGIN Banner-Specific configuration
const bannerCloseTrackRatio = 0.01;
const CampaignName = 'C17_02_170724';
const BannerName = 'B17_02_170724_ctrl-test';
const LANGUAGE = 'de';

const fundraisingBanner = {};

const DevGlobalBannerSettings = require( './GlobalBannerSettings' );
const GlobalBannerSettings = window.GlobalBannerSettings || DevGlobalBannerSettings;
const Translations = {}; // will only be needed for English banner, German defaults are in DesktopBanner
const BannerFunctions = require( './DesktopBanner' )( GlobalBannerSettings, Translations, bannerCloseTrackRatio );
const SizeIssues = require( './track_size_issues' );
const getCampaignDaySentence = require( './count_campaign_days' )( GlobalBannerSettings[ 'campaign-start-date' ], GlobalBannerSettings[ 'campaign-end-date' ] );
const getCustomDayName = require( './custom_day_name' );
// TODO wlightbox.js

// TODO progress bar partial, css and JS

const bannerTemplate = require('./banner_ctrl.hbs');

const $ = require( 'jquery' );

const customDayName = getCustomDayName( BannerFunctions.getCurrentGermanDay, LANGUAGE );
const currentDayName = BannerFunctions.getCurrentGermanDay();
const weekdayPrepPhrase = customDayName === currentDayName ? 'an diesem' : 'am heutigen';

const $banner = $( '#WMDE-Banner-Container' );
$banner.html( bannerTemplate( {
    // TODO approx. donors
    customDayName: customDayName,
    currentDayName: currentDayName,
    weekdayPrepPhrase: weekdayPrepPhrase,
    campaignDaySentence: getCampaignDaySentence( LANGUAGE ),
    daysRemaining: BannerFunctions.getDaysRemaining( LANGUAGE ),
    CampaignName: CampaignName,
    BannerName: BannerName
} ) );

// BEGIN form init code

function setupValidationEventHandling() {
  var banner = $( '#WMDE_Banner' );
  banner.on( 'validation:amount:ok', function () {
      $( '#WMDE_Banner-amounts-error-text' ).hide();
      $( '#WMDE_Banner-amounts' ).removeClass( 'fieldset-error' );
      addSpaceInstantly();
  } );
  banner.on( 'validation:amount:error', function ( evt, text ) {
      $( '#WMDE_Banner-amounts-error-text' ).text( text ).show();
      $( '#WMDE_Banner-amounts' ).addClass( 'fieldset-error' );
      addSpaceInstantly();
  } );
  banner.on( 'validation:period:ok', function () {
      $( '#WMDE_Banner-frequency-error-text' ).hide();
      $( '#WMDE_Banner-frequency' ).removeClass( 'fieldset-error' );
      addSpaceInstantly();
  } );
  banner.on( 'validation:period:error', function ( evt, text ) {
      $( '#WMDE_Banner-frequency-error-text' ).text( text ).show();
      $( '#WMDE_Banner-frequency' ).addClass( 'fieldset-error' );
      addSpaceInstantly();
  } );
}

function setupAmountEventHandling() {
      var banner = $( '#WMDE_Banner' );
      // using delegated events with empty selector to be markup-independent and still have corrent value for event.target
      banner.on( 'amount:selected', null, function( evt ) {
          $( '#WMDE_Banner-amounts' ).find( 'label' ).removeClass( 'checked' );
          $( '#amount-other-input' ).parent().removeClass( 'checked' );
          $( evt.target ).addClass( 'checked' );
      } );

      banner.on( 'amount:custom', null, function( evt ) {
          $( '#WMDE_Banner-amounts' ).find( 'label' ).removeClass( 'checked' );
          $( evt.target ).parent().addClass( 'checked' );
      } );
}

$( '#interval_onetime' ).off( 'click' ).on( 'click', function () {
     $( '#interval_multiple' ).prop( 'checked', false );
     $( '.donation-interval' ).removeClass( 'checked' );
     $( '#WMDE_Banner' ). trigger( 'validation:period:ok' );
} );

$( '#WMDE_Banner-frequency' ).find( 'label' ).click( function () {
  $( '#WMDE_Banner-frequency' ).find( 'label' ).removeClass( 'checked' );
  $( this ).addClass( 'checked' );
  $( '#WMDE_Banner' ). trigger( 'validation:period:ok' );
} );

$( '.donation-interval' ).click( function () {
  $( '.donation-interval' ).removeClass( 'checked' );
  $( this ).addClass( 'checked' );
  $( '.donation-frequency' ).removeClass( 'checked' );
  $( '#interval_onetime' ).prop( 'checked', false );
  $( '#interval_multiple' ).prop( 'checked', 'checked' );
});

$( '#WMDE_Banner-payment button' ).click( function( e ) {
  return BannerFunctions.validateForm();
} );

/* Convert browser events to custom events */
$( '#WMDE_Banner-amounts' ).find( 'label' ).click( function () {
  $( this ).trigger( 'amount:selected' );
} );

$( '#amount-other-input' ).change( function () {
  $( this ).trigger( 'amount:custom' );
} );

// END form init code

function addSpace() {
  if ( !$( '#WMDE_Banner' ).is( ':visible' ) ) {
    return;
  }
  var bannerHeight = $( 'div#WMDE_Banner' ).height(),
      skin = BannerFunctions.getSkin();

  switch ( skin ) {
    case 'vector':
      SizeIssues.trackSizeIssues( $( 'div#WMDE_Banner' ) );
      $( '#mw-panel' ).animate( {'top':bannerHeight + 160},1000 );
      $( '#mw-head' ).animate( {'top':bannerHeight},1000 );
      $( '#mw-page-base' ).animate( {'padding-top':bannerHeight},1000);
    case 'minerva':
      $( '#mw-mf-viewport' ).animate( {'top':bannerHeight},1000 );
      break;
  }
}

function addSpaceInstantly() {
  if ( !$( '#WMDE_Banner' ).is( ':visible' ) ) {
    return;
  }
  var bannerHeight = $( 'div#WMDE_Banner' ).height(),
      skin = BannerFunctions.getSkin();

  switch ( skin ) {
    case 'vector':
      $( '#mw-panel' ).css( { top: bannerHeight + 160 } );
      $( '#mw-head' ).css( { top: bannerHeight } );
      $( '#mw-page-base' ).css( { paddingTop: bannerHeight } );
    case 'minerva':
      $( '#mw-mf-viewport' ).css( { top: bannerHeight } );
      break;
  }
}

function displayBanner() {
  var bannerElement = $( '#WMDE_Banner' ),
      bannerHeight = bannerElement.height();
  setupAmountEventHandling();
  $( 'body' ).prepend( $( '#centralNotice' ) );
  bannerElement.css( 'top', -bannerHeight );
  bannerElement.css( 'display', 'block' );
  addSpace();
  bannerElement.animate( { top: 0 }, 1000 );

  $( window ).resize( function () {
    addSpaceInstantly();
    calculateLightboxPosition();
  } );
}

function calculateLightboxPosition() {
    $( '#wlightbox' ).css( { right: ( $('body').width() - 750 ) / 2 + 'px', top: '20px', top: ( $( '#WMDE_Banner' ).height() + 20 ) + 'px' } );
}


var impCount = BannerFunctions.increaseImpCount();
$( '#impCount' ).val( impCount );
var bannerImpCount = BannerFunctions.increaseBannerImpCount( BannerName );
$( '#bImpCount' ).val( bannerImpCount );


$( function () {
  if ( BannerFunctions.onMediaWiki() && window.mw.config.get( 'wgAction' ) !== "view" ) {
    return;
  }
  setupValidationEventHandling();
  setTimeout( displayBanner, $( '#WMDE-BannerPreview' ).data( 'delay' ) || 7500 );

} );

// TODO lightbox initialization code from banner
