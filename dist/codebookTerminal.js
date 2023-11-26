"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
require("../css/Terminal.css");
function _getRequireWildcardCache(e) { if ("function" != typeof WeakMap) return null; var r = new WeakMap(), t = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(e) { return e ? t : r; })(e); }
function _interopRequireWildcard(e, r) { if (!r && e && e.__esModule) return e; if (null === e || "object" != _typeof(e) && "function" != typeof e) return { "default": e }; var t = _getRequireWildcardCache(r); if (t && t.has(e)) return t.get(e); var n = { __proto__: null }, a = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var u in e) if ("default" !== u && Object.prototype.hasOwnProperty.call(e, u)) { var i = a ? Object.getOwnPropertyDescriptor(e, u) : null; i && (i.get || i.set) ? Object.defineProperty(n, u, i) : n[u] = e[u]; } return n["default"] = e, t && t.set(e, n), n; }
function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableRest(); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var codebookTerminal = function codebookTerminal(_ref) {
  var setUserInput = _ref.setUserInput,
    userOutput = _ref.userOutput,
    mode = _ref.mode,
    _ref$userCommand = _ref.userCommand,
    userCommand = _ref$userCommand === void 0 ? {
      about: {
        description: "To know about us ...",
        fn: function fn() {
          return "<<<<<<<<<<<<<<<<<<this is online code editor for developer and creator>>>>>>>>>>>>>>>>>>>>>>\n<<<<<<<<<<<<<<<<.............................................................>>>>>>>>>>>>>>>>";
        }
      }
    } : _ref$userCommand,
    _ref$background = _ref.background,
    background = _ref$background === void 0 ? "#292929" : _ref$background,
    _ref$welcomeMessage = _ref.welcomeMessage,
    welcomeMessage = _ref$welcomeMessage === void 0 ? "Welcome to the Terminal! 🚀\nFeel free to explore and type 'help' for a list of available commands." : _ref$welcomeMessage,
    _ref$textColor = _ref.textColor,
    textColor = _ref$textColor === void 0 ? "#dbd8d5" : _ref$textColor,
    _ref$promtColor = _ref.promtColor,
    promtColor = _ref$promtColor === void 0 ? "#d6994a" : _ref$promtColor,
    _ref$promtText = _ref.promtText,
    promtText = _ref$promtText === void 0 ? "$" : _ref$promtText,
    _ref$progressBarColor = _ref.progressBarColor,
    progressBarColor = _ref$progressBarColor === void 0 ? "#50f50f" : _ref$progressBarColor,
    _ref$progres = _ref.progres,
    progres = _ref$progres === void 0 ? 0 : _ref$progres;
  // State variables
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    input = _useState2[0],
    setInput = _useState2[1];
  var _useState3 = (0, _react.useState)([welcomeMessage]),
    _useState4 = _slicedToArray(_useState3, 2),
    output = _useState4[0],
    setOutput = _useState4[1];
  var _useState5 = (0, _react.useState)([]),
    _useState6 = _slicedToArray(_useState5, 2),
    inputlist = _useState6[0],
    setInputlist = _useState6[1];
  var _useState7 = (0, _react.useState)(-1),
    _useState8 = _slicedToArray(_useState7, 2),
    index = _useState8[0],
    setIndex = _useState8[1];
  var inputRef = (0, _react.useRef)(null);
  var _useState9 = (0, _react.useState)(0),
    _useState10 = _slicedToArray(_useState9, 2),
    progressbar = _useState10[0],
    setProgress = _useState10[1];

  // Commands for the terminal
  var _useState11 = (0, _react.useState)({
      echo: {
        description: "Echo a passed string.",
        usage: "echo <string>",
        fn: function fn() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }
          return args.join(" ");
        }
      },
      help: {
        description: "about list of commands available to call ",
        usage: "list command ",
        fn: function fn() {
          return /*#__PURE__*/_react["default"].createElement("div", null, Object.keys(commands).map(function (command) {
            return /*#__PURE__*/_react["default"].createElement("div", {
              key: command
            }, /*#__PURE__*/_react["default"].createElement("p", null, "Command: ", command), /*#__PURE__*/_react["default"].createElement("p", null, "Description: ", commands[command].description), /*#__PURE__*/_react["default"].createElement("p", null, "Usage: ", commands[command].usage), /*#__PURE__*/_react["default"].createElement("br", null));
          }));
        }
      },
      clear: {
        description: "Clear the terminal screen",
        usage: "clear",
        fn: function fn() {
          return setOutput([]);
        }
      }
    }),
    _useState12 = _slicedToArray(_useState11, 2),
    commands = _useState12[0],
    setCommands = _useState12[1];

  // Effect to update the progress bar
  (0, _react.useEffect)(function () {
    if (mode === "progressBar" && progres <= 100) {
      var progressBar = ">".repeat(progres / 4); // Adjust the size of the progress bar
      setInput("".concat(promtText, " ").concat(progres, "% [").concat(progressBar.padEnd(25), "] "));
      setProgress(progres);
      if (progres === 100) {
        setOutput(function (prev) {
          return [].concat(_toConsumableArray(prev), [" ".concat(promtText, " ").concat(progres, "% [").concat(progressBar.padEnd(25), "] done!")]);
        });
        setInput("");
        mode = "user";
      }
    }
  }, [progres, mode, promtText]);

  // Effect to update output when in command mode
  (0, _react.useEffect)(function () {
    if (mode === "command") {
      setOutput(function (prev) {
        return [].concat(_toConsumableArray(prev), [userOutput]);
      });
    }
  }, [userOutput, mode]);

  // Effect to update custom commands
  (0, _react.useEffect)(function () {
    Object.keys(userCommand).forEach(function (commandName) {
      setCommands(function (prevCommands) {
        return _objectSpread(_objectSpread({}, prevCommands), {}, _defineProperty({}, commandName, userCommand[commandName]));
      });
    });
  }, [userCommand]);

  // Scroll function to scroll to the bottom of the terminal
  var scroll = function scroll() {
    inputRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  // Function to execute commands
  var execute = function execute() {
    try {
      var _input$split = input.split(" "),
        _input$split2 = _toArray(_input$split),
        command = _input$split2[0],
        args = _input$split2.slice(1);
      if (command in commands) {
        var _commands$command;
        var _output = (_commands$command = commands[command]).fn.apply(_commands$command, _toConsumableArray(args));
        setOutput(function (prev) {
          return [].concat(_toConsumableArray(prev), [_output]);
        });
      } else {
        setOutput(function (prev) {
          return [].concat(_toConsumableArray(prev), ["".concat(command, " not found in type help for a list of commands")]);
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Handle key press events
  var handleKeyPress = function handleKeyPress(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      handleEnter();
    } else if (event.key === "ArrowUp") {
      handleArrowUp(event);
    } else if (event.key === "ArrowDown") {
      handleArrowDown(event);
    }
  };

  // Handle Arrow Up key press
  var handleArrowUp = function handleArrowUp(event) {
    event.preventDefault();
    arrowUp();
  };

  // Handle Arrow Down key press
  var handleArrowDown = function handleArrowDown(event) {
    event.preventDefault();
    arrowDown();
  };

  // Handle Enter key press
  var handleEnter = function handleEnter() {
    setInputlist(function (prev) {
      return [].concat(_toConsumableArray(prev), [input]);
    });
    if (mode !== "command") {
      execute();
    }
    scroll();
    setIndex(inputlist.length);
    setInput("");
  };

  // Function to handle Arrow Up
  var arrowUp = function arrowUp() {
    setIndex(function (prev) {
      return prev - 1 < 0 ? index : prev - 1;
    });
    var temp = inputlist[index];
    setInput(temp);
  };

  // Function to handle Arrow Down
  var arrowDown = function arrowDown() {
    setIndex(index + 1 > inputlist.length - 1 ? inputlist.length - 1 : index + 1);
    var temp = inputlist[index];
    setInput(temp);
  };

  // Handle input change
  var handleInput = function handleInput(event) {
    if (mode === "command") {
      setUserInput(event.target.value);
      setInput(event.target.value);
    } else if (mode !== "progressBar") {
      setInput(event.target.value);
    }
  };

  // JSX structure for the terminal component
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "body",
    style: {
      backgroundColor: background
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "output",
    style: {
      color: textColor
    }
  }, output.map(function (item, index) {
    return /*#__PURE__*/_react["default"].createElement("p", {
      key: index
    }, "$", item);
  })), /*#__PURE__*/_react["default"].createElement("div", {
    className: "input-area"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "prompt",
    style: {
      backgroundColor: background,
      color: promtColor
    }
  }, promtText, "\xA0"), /*#__PURE__*/_react["default"].createElement("input", {
    style: {
      backgroundColor: background,
      color: mode === "progressBar" ? progressBarColor : promtText
    },
    type: "text",
    ref: inputRef,
    value: input,
    onChange: handleInput,
    onKeyDown: handleKeyPress,
    className: "input"
  })));
};

// Export the Terminal component
var _default = exports["default"] = codebookTerminal;