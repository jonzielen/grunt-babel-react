"use strict";

/* jshint esversion: 6 */

(function () {
  "use strict";

  var HelloWorld = React.createClass({

    render: function render() {
      return React.createElement(
        "h1",
        null,
        "Hello World!!!"
      );
    }
  });

  var mainElement = document.querySelector("main");

  ReactDOM.render(React.createElement(HelloWorld, null), mainElement);
})();
