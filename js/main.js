"use strict";

/* jshint esversion: 6 */

(function () {
  "use strict";

  var message = 'Hi Jon!';

  var HelloWorld = React.createClass({
    render: function render() {
      return React.createElement(
        "header",
        null,
        React.createElement(
          "h1",
          null,
          this.props.label
        )
      );
    }
  });

  var mainElement = document.querySelector("main");

  ReactDOM.render(React.createElement(HelloWorld, { label: message }), mainElement);
})();
