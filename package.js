Package.describe({
  summary: "uikit-full",
  version: "1.0.0",
  git: "https://github.com/payner35/meteor-uikit-full.git"
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.0');

    var path = Npm.require('path');

    var asset_path = path.join('uikit-full');

    //js
    api.add_files(path.join(asset_path, 'js', 'uikit.js'), 'client');
    api.add_files(path.join(asset_path, 'js', 'autocomplete.js'), 'client');
    api.add_files(path.join(asset_path, 'js', 'search.js'), 'client');
    api.add_files(path.join(asset_path, 'js', 'datepicker.js'), 'client');
    api.add_files(path.join(asset_path, 'js', 'sticky.js'), 'client');
    api.add_files(path.join(asset_path, 'js', 'sortable.js'), 'client');

    //css
    api.add_files(path.join(asset_path, 'css', 'uikit.addons.css'), 'client');
    api.add_files(path.join(asset_path, 'css', 'uikit.css'), 'client');

    //fonts
    api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.eot'), 'client');
    api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.ttf'), 'client');
    api.add_files(path.join(asset_path, 'fonts', 'fontawesome-webfont.woff'), 'client');
    api.add_files(path.join(asset_path, 'fonts', 'FontAwesome.otf'), 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gavinpayne:uikit-full');
  api.addFiles('gavinpayne:uikit-full-tests.js');
});
