/* jshint esversion: 6 */

(function() {
  "use strict";

  let message = 'Hi Jon!';

  var HelloWorld = React.createClass({
    render: function() {
      return (
        <header>
          <h1>{this.props.label}</h1>
        </header>
      );
    }
  });

  var mainElement = document.querySelector("main");

  ReactDOM.render(<HelloWorld label={message}></HelloWorld>, mainElement);
})();
