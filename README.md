# Webpack experiments

This is an experiment for bundling all dependencies of WMDE fundraising banners with webpack.

## Building the assets

    npm build

If you want to rebuild whenever a file changes, use

    npm run watch

## Starting the preview

    npm start

The web server is at http://localhost:8080/

## Using the compiled JavaScript on CentralNotice

Until there is an upload tool, you need to copy and paste the compiled banner code form the `dist` directory into the CentralNotice text field. Wrap it as follows:

    <div id="WMDE-Banner-Container">
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
- [ ] Add production config for webpack
- [ ] Create upload plugin that wraps the generated JS in script tags and sends it to CentralNotice

## Random ideas
* Move index.html out of `dist` into `public` folder and use different values for `devServer.contentBase` and `devServer.publicPath` ?
* Configure Campaign number, campaign prefix and campaign start date to generate file names and tracking info inside banners.
