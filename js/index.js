var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// some markdown ideas from here: https://guides.github.com/features/mastering-markdown/

var sampleHTML = "# Github style...\n\n---\n I can do *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\nUnordered list:\n\n  * first thing\n  * second thing\n  * one more thing\n\nNumbered list:\n\n  1. you\n  2. get\n  3. the idea\n\n #### You can even [do a link!](https://tracyodell.com)\n\n";

var MarkupConverter = function (_React$Component) {
  _inherits(MarkupConverter, _React$Component);

  function MarkupConverter() {
    _classCallCheck(this, MarkupConverter);

    var _this = _possibleConstructorReturn(this, (MarkupConverter.__proto__ || Object.getPrototypeOf(MarkupConverter)).call(this));

    _this.handleChange = function (event) {
      _this.setState({ typed: event.target.value });
    };

    _this.state = { typed: sampleHTML };
    return _this;
  }

  _createClass(MarkupConverter, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          { id: "title" },
          "Markdown Previewer"
        ),
        React.createElement(
          "div",
          { "class": "inputMarkup" },
          React.createElement("textarea", { placeholder: "Enter markup here...",
            value: this.state.typed, onChange: this.handleChange.bind(this), rows: "15", cols: "40" })
        ),
        React.createElement("div", { "class": "outputHTML", id: "output", onChange: this.handleChange,
          dangerouslySetInnerHTML: { __html: marked(this.state.typed) } })
      );
    }
  }]);

  return MarkupConverter;
}(React.Component);

ReactDOM.render(React.createElement(MarkupConverter, null), document.getElementById('app'));