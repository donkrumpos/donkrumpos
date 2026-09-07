(function() {
  "use strict";

  function ProductCustomizer(props) {
    return React.createElement(
      "div",
      { className: "customizer" },
      "Product Customizer will go herezz"
    );
  }

  ReactDOM.render(
    React.createElement(ProductCustomizer),
    document.getElementById("react-root")
  );
})();
