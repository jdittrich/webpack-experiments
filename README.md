# Webpack experiments

This is an experiment for bundling all dependencies of WMDE fundraising banners with webpack.

## Building the assets

    npm build

If you want to rebuild whenever a file changes, use

    npm run watch

## Starting the preview

    npm start

The web server is at http://localhost:8080/

## Planned Features
- [x] Bundle HTML and JavaScript as one includable bundle
- [x] Bundle CSS
- [x] Bundle multiple entry points/HTML files for multiple banners
- [x] Use template engine to render HTML
- [x] Use webpack web server for previews
- [ ] Use live reload
- [ ] Generate dynamic bundle names, e.g. B17WMDE_01_170724_var
- [ ] Add production config for webpack
- [ ] Create upload plugin that wraps the generated JS in script tags and sends it to CentralNotice
