'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.state = {
      options: props.options
    };
    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleDeleteOption = _this.handleDeleteOption.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handlePick = _this.handlePick.bind(_this);
    return _this;
  }

  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('component mounted -> setting state options to ', options);
      var json = localStorage.getItem('options');
      var options = JSON.parse(json) || [];

      this.setState(function () {
        return { options: options };
      });
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (prevState.options.length !== this.state.options.length) {
        var json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json);
      }
    }
  }, {
    key: 'handlePick',
    value: function handlePick() {
      console.log('handePick clicked');
      var randomNumber = Math.floor(Math.random() * this.state.options.length);
      alert(this.state.options[randomNumber]);
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handleDeleteOption',
    value: function handleDeleteOption(optionToRemove) {
      console.log('optionToRemove', optionToRemove);
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (oo) {
            return oo !== optionToRemove;
          })
        };
      });
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {

      if (!option) {
        console.warn('Enter valid value to add');
        return 'Enter valid value to add';
      }

      if (this.state.options.indexOf(option) > -1) {
        console.warn('This option already exists');
        return 'This option already exists';
      }

      this.setState(function (prevState) {
        return { options: [].concat(_toConsumableArray(prevState.options), [option]) };
      });
    }
  }, {
    key: 'render',
    value: function render() {

      var title = 'Indecision';
      var subTitle = 'Put your life in the hands of a computer';
      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subTitle }),
        React.createElement(Action, { handlePick: this.handlePick, hasOptions: this.state.options && this.state.options.length > 0 }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOption: this.handleDeleteOption
        }),
        React.createElement(AddOption, { handleAddOption: this.handleAddOption })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      props.title
    ),
    React.createElement(
      'h2',
      null,
      props.subtitle
    )
  );
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handlePick,
        disabled: !props.hasOptions },
      'What should I do?'
    )
  );
};

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'li',
      null,
      props.optionText,
      React.createElement(
        'button',
        {
          onClick: function onClick(e) {
            props.handleDeleteOption(props.optionText);
          } },
        'remove'
      )
    )
  );
};

var Options = function Options(props) {
  console.log('props inside options', props);
  return React.createElement(
    'div',
    null,
    React.createElement(
      'ul',
      null,
      props.options.length === 0 && React.createElement(
        'p',
        null,
        'No options to select from'
      ),
      props.options.map(function (oo) {
        return React.createElement(Option, {
          key: oo,
          optionText: oo,
          handleDeleteOption: props.handleDeleteOption
        });
      })
    ),
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'Remove all'
    )
  );
};

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      var option = e.target.elements.newoption.value.trim();
      var error = this.props.handleAddOption(option);
      console.log('myerror inside handleAdd:', error);
      if (error) {
        console.error(error);
        this.setState(function () {
          return { error: error };
        });
      }

      if (!error) {
        this.setState(function () {
          return { error: undefined };
        });
        e.target.elements.newoption.value = '';
      }
    }
  }, {
    key: 'render',
    value: function render() {

      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { id: 'newoption', type: 'text', placeholder: 'Enter an option' }),
          React.createElement(
            'button',
            null,
            'Add options'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

IndecisionApp.defaultProps = { options: [] };
ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
