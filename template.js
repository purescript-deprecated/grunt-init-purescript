"use strict";

exports.description = "Create a PureScript project with source modules and QuickCheck tests.";

exports.after = "You can now build the project as follows: \n" +
                "\n" +
                "  npm install\n" + 
                "  bower update\n" +
                "  grunt";

exports.warnOn = "*";

exports.template = function(grunt, init, done) {

  init.process({}, 
    [ init.prompt("name", "starter-kit")
    , init.prompt("description", "An empty PureScript project.")
    , init.prompt("version")
    , init.prompt("licenses")
    , init.prompt("author_name")
    ], 
    function(err, props) {
      var files = init.filesToCopy(props);

      init.addLicenseFiles(files, props.licenses);

      init.copyAndProcess(files, props);

      done();
    }
  );
};
