# Webpack experiments

This is an experiment for bundling all dependencies of WMDE fundraising banners with webpack.

## Building the assets
To build a minified version of the banner:

    npm run build

If you want to rebuild whenever a file changes, use

    npm run watch

This will build a development version with source maps.

## Starting the preview

    npm start

The web server is at http://localhost:8080/

## Using the compiled JavaScript on CentralNotice

Until there is an upload tool, you need to copy and paste the compiled banner code form the `dist` directory into the CentralNotice text field. Wrap it as follows:

    <div id="WMDE-Banner-Container">
    <script>{{MediaWiki:WMDE_FR2017/Resources/BannerValues.js}}</script>
    <nowiki><script>
    // banner code here
    </script></nowiki>
    </div>

## Planned Features
- [x] Bundle HTML and JavaScript as one includable bundle
- [x] Bundle CSS
- [x] Bundle multiple entry points/HTML files for multiple banners
- [x] Use template engine to render HTML
- [x] Use webpack web server for previews
- [x] Use [HOT module replacement](https://webpack.js.org/guides/hot-module-replacement/) for automatic refresh in browser.
- [x] Add production config for webpack
- [x] Test how webpack handles JavaScript that calls jQuery without requiring it.
- [ ] Create upload plugin that wraps the generated JS (see above) and sends it to CentralNotice
- [ ] Add Dockerfile

## Random ideas
* Move index.html out of `dist` into `public` folder and use different values for `devServer.contentBase` and `devServer.publicPath` ?
* Configure Campaign number, campaign prefix and campaign start date to generate file names and tracking info inside banners.

## Notes on possible Banner code improvements
* Move `addSpace`, `addSpaceInstantly` and `displayBanner` to module `BannerDisplay`. Move all the different ways of showing banners (overlay or scrollable, instant on, rollo and mini nag banner) into the new module. Remove similar functions from `DesktopBanner.js`. Add the 7.5 seconds delay for `displayBanner` as default but make delay configurable (for preview).
* Move form initialization and validation code to module `FormValidation`. Form elements (jQuery objects) should be passed in as constructor params. Also move validation functions from `DesktopBanner.js` into the new module.
* Move date/time-based campaign data counting (donors, donations, campaign day, special day name, normal day name, prefix for day name) from `DesktopBanner.js`, `custom_day_name.js` and `count_campaign_days.js` into module.
