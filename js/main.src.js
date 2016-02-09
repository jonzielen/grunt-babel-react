/* jshint esversion: 6 */

(function() {
  class HelloWorld extends React.Component {
    render() {
      return React.createElement('h1', null, 'Hello World!');
    }
  }

  var mainElem = document.getElementsByTagName('main');

  ReactDOM.render(React.createElement(HelloWorld), mainElem[0]);
})();
