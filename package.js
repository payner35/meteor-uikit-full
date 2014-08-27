Package.describe({
  summary: "uikit-full",
  version: "1.0.0",
  git: " \* Fill me in! *\ "
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.0');
  api.addFiles('gavinpayne:uikit-full.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('gavinpayne:uikit-full');
  api.addFiles('gavinpayne:uikit-full-tests.js');
});
