# Webpack experiments

This is an experiment for bundling all dependencies of WMDE fundraising banners with webpack.

## Planned Features
- [x] Bundle HTML and JavaScript as one includable bundle
- [x] Bundle CSS
- [x] Bundle multiple entry points/HTML files for multiple banners
- [x] Use template engine to render html
- [ ] Use webpack web server for previews
- [ ] Use live reload
- [ ] Generate dynamic bundle names, e.g. B17WMDE_01_170724_var
- [ ] Add production config for webpack
- [ ] Create upload plugin that wraps the JS in script tags and sends it to CentralNotice
