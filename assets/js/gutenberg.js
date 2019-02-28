/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg) && arg.length) {
				var inner = classNames.apply(null, arg);
				if (inner) {
					classes.push(inner);
				}
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * WordPress dependencies
 */
var withColors = wp.editor.withColors;

/**
 * Generate block colors.
 */

var applyWithColors = withColors('backgroundColor', { textColor: 'color' }, { buttonColor: 'background-color' });

exports.default = applyWithColors;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * WordPress dependencies
 */
var withColors = wp.editor.withColors;

/**
 * Generate block colors.
 */

var applyWithColors = withColors('backgroundColor', { textColor: 'color' });

exports.default = applyWithColors;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
/**
 * Custom icons
 */
var icons = {};

icons.at = React.createElement(
	"svg",
	{ "aria-hidden": true, role: "img", focusable: "false", className: "dashicon", width: "20px", height: "20px", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg" },
	React.createElement(
		"g",
		{ stroke: "none", "stroke-width": "1", fill: "none", "fill-rule": "evenodd" },
		React.createElement(
			"g",
			{ fill: "currentColor", "fill-rule": "nonzero" },
			React.createElement(
				"g",
				{ transform: "translate(2.000000, 2.000000)" },
				React.createElement("path", { d: "M8.02520581,0 L7.98776317,0 C5.86277332,-2.33459646e-05 3.82535953,0.846680002 2.32628237,2.35278409 C0.827205206,3.85888818 -0.00996089005,5.90023931 8.13151629e-20,8.02520581 C0.0199694079,12.4084909 3.69683664,15.9755263 8.19494578,15.9755263 L8.48699837,15.9755263 C9.03843834,15.9755263 9.48546877,15.5284959 9.48546877,14.9770559 C9.48546877,14.425616 9.03843834,13.9785856 8.48699837,13.9785856 L8.19494578,13.9785856 C4.7926579,13.9785856 2.01191785,11.3026849 1.99694079,8.01522111 C1.98963664,6.42160411 2.61758479,4.89075151 3.74187457,3.76130874 C4.86616435,2.63186597 6.39412944,1.99692405 7.98776317,1.99694079 L8.01522111,1.99694079 C11.3026849,2.01191785 13.9785856,4.7926579 13.9785856,8.19494578 L13.9785856,10.4839392 C13.9785856,11.0353791 13.5315551,11.4824096 12.9801152,11.4824096 C12.4286752,11.4824096 11.9816448,11.0353791 11.9816448,10.4839392 L11.9816448,7.98776317 C11.9878239,6.15815454 10.7537205,4.55679866 8.98291101,4.09664686 C7.21210152,3.63649505 5.35452376,4.43446543 4.46920407,6.03562594 C3.58388438,7.63678645 3.89577006,9.63430471 5.22705151,10.8893727 C6.55833296,12.1444407 8.57075026,12.3381632 10.1170013,11.3600969 C10.5524576,12.776278 11.9578409,13.6613354 13.4231625,13.4421927 C14.8884842,13.22305 15.9734432,11.9655554 15.9755263,10.4839392 L15.9755263,8.19494578 C15.9755263,3.69683664 12.4084909,0.0199694079 8.02520581,0 Z M7.98776317,9.98470397 C6.88488323,9.98470397 5.99082238,9.09064312 5.99082238,7.98776317 C5.99082238,6.88488323 6.88488323,5.99082238 7.98776317,5.99082238 C9.09064312,5.99082238 9.98470397,6.88488323 9.98470397,7.98776317 C9.98470397,9.09064312 9.09064312,9.98470397 7.98776317,9.98470397 Z" })
			)
		)
	)
);

icons.twitter = React.createElement(
	"svg",
	{ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 612 612", width: "20px", height: "20px" },
	React.createElement(
		"g",
		null,
		React.createElement(
			"g",
			null,
			React.createElement("path", { fill: "currentColor", d: "M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411 c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513 c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101 c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104 c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194 c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485 c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z" })
		)
	)
);

icons.pluginCard = React.createElement(
	"svg",
	{ version: "1.1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px",
		width: "21", height: "21", viewBox: "0 0 25 25" },
	React.createElement(
		"g",
		null,
		React.createElement(
			"g",
			null,
			React.createElement("path", { d: "M21,0H4C1.8,0,0,1.8,0,4v17c0,2.2,1.8,4,4,4h17c2.2,0,4-1.8,4-4V4C25,1.8,23.2,0,21,0z M12.5,20C8.357,20,5,16.643,5,12.5 C5,8.358,8.357,5,12.5,5c4.143,0,7.5,3.358,7.5,7.5C20,16.643,16.643,20,12.5,20z" }),
			React.createElement("circle", { cx: "9", cy: "12.5", r: "1.5" }),
			React.createElement("circle", { cx: "16", cy: "12.5", r: "1.5" })
		)
	),
	React.createElement("g", null),
	React.createElement("g", null),
	React.createElement("g", null),
	React.createElement("g", null),
	React.createElement("g", null),
	React.createElement("g", null),
	React.createElement("g", null),
	React.createElement("g", null),
	React.createElement("g", null),
	React.createElement("g", null),
	React.createElement("g", null),
	React.createElement("g", null),
	React.createElement("g", null),
	React.createElement("g", null),
	React.createElement("g", null)
);

icons.highlight = React.createElement(
	"svg",
	{ width: "23px", height: "23px", viewBox: "0 -3 511.99942 511", xmlns: "http://www.w3.org/2000/svg" },
	React.createElement("path", { d: "m496.246094 73.867188-57.613282-57.613282c-10.160156-10.160156-23.664062-15.753906-38.035156-15.753906-14.367187 0-27.871094 5.59375-38.03125 15.75l-258.382812 258.386719c-15.382813 15.378906-23.851563 35.832031-23.851563 57.585937 0 9.191406-3.726562 18.191406-10.226562 24.691406l-22.222657 22.21875c-5.78125 5.785157-9.097656 13.789063-9.097656 21.96875 0 5.34375 1.425782 10.613282 4.023438 15.242188l-38.414063 38.414062c-3.179687 3.179688-4.765625 7.613282-4.3203122 12.085938.4414062 4.472656 2.8671872 8.511719 6.6054692 11.003906l38.558593 25.707032c2.539063 1.691406 5.4375 2.519531 8.316407 2.519531 3.871093 0 7.710937-1.496094 10.609374-4.394531l31.992188-31.992188c4.628906 2.601562 9.898438 4.027344 15.246094 4.027344 8.175781 0 16.183594-3.316406 21.964844-9.101563l22.21875-22.21875c6.5-6.5 15.5-10.230469 24.691406-10.230469 21.753906 0 42.207031-8.46875 57.585937-23.847656l258.382813-258.382812c10.160156-10.160156 15.753906-23.667969 15.753906-38.035156 0-14.367188-5.59375-27.871094-15.753906-38.03125zm-444.597656 397.90625-13.105469-8.738282 24.65625-24.65625 10.921875 10.921875zm82.722656-50.59375-22.21875 22.21875c0 .003906 0 .003906-.003906.003906-.394532.398437-1.101563.394531-1.503907 0l-36.839843-36.84375s-.003907 0-.003907-.003906l-4.703125-4.703126c-.46875-.46875-.367187-1.140624 0-1.503906l22.222656-22.21875c12.261719-12.261718 19.011719-28.5625 19.011719-45.90625 0-6.832031 1.324219-13.460937 3.847657-19.59375l85.691406 85.6875c-6.132813 2.523438-12.761719 3.851563-19.59375 3.851563-17.339844 0-33.644532 6.75-45.90625 19.011719zm89.496094-41.292969-91.253907-91.253907 219.785157-219.785156 91.253906 91.253906zm251.167968-251.167969-10.167968 10.167969-91.253907-91.253907 10.167969-10.167968c9.289062-9.289063 24.335938-9.300782 33.636719 0l57.617187 57.617187c9.289063 9.289063 9.300782 24.335938 0 33.636719zm0 0" })
);

exports.default = icons;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.settings = exports.icon = exports.title = exports.name = undefined;

var _classnames3 = __webpack_require__(0);

var _classnames4 = _interopRequireDefault(_classnames3);

var _edit = __webpack_require__(8);

var _edit2 = _interopRequireDefault(_edit);

var _icons = __webpack_require__(3);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } /**
                                                                                                                                                                                                                              * External dependencies
                                                                                                                                                                                                                              */


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var createBlock = wp.blocks.createBlock;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    getColorClassName = _wp$editor.getColorClassName,
    getFontSizeClass = _wp$editor.getFontSizeClass;
var _wp$richText = wp.richText,
    split = _wp$richText.split,
    create = _wp$richText.create,
    toHTMLString = _wp$richText.toHTMLString;

/**
 * Block constants
 */

var name = 'click-to-tweet';

var title = __('Click to Tweet');

var icon = _icons2.default.twitter;

var keywords = [__('share'), __('twitter'), __('click to tweet')];

var blockAttributes = {
	content: {
		type: 'string',
		source: 'html',
		selector: 'p',
		default: []
	},
	url: {
		type: 'attribute'
	},
	textAlign: {
		type: 'string'
	},
	via: {
		type: 'string'
	},
	buttonText: {
		type: 'string',
		default: __('Tweet')
	},
	buttonColor: {
		type: 'string'
	},
	textColor: {
		type: 'string'
	},
	customButtonColor: {
		type: 'string'
	},
	customTextColor: {
		type: 'string'
	},
	fontSize: {
		type: 'string'
	},
	customFontSize: {
		type: 'number'
	}
};

var settings = {

	title: title,

	description: __('Add a quote for readers to tweet via Twitter.'),

	keywords: keywords,

	attributes: blockAttributes,

	transforms: {
		from: [{
			type: 'block',
			blocks: ['core/paragraph'],
			transform: function transform(_ref) {
				var content = _ref.content;
				return createBlock('machoblocks/' + name, {
					content: content
				});
			}
		}, {
			type: 'block',
			blocks: ['core/pullquote'],
			transform: function transform(_ref2) {
				var value = _ref2.value,
				    attrs = _objectWithoutProperties(_ref2, ['value']);

				var pieces = split(create({ html: value, multilineTag: 'p' }), '\u2028');

				return [createBlock('machoblocks/' + name, {
					content: toHTMLString({ value: pieces[0] })
				})];
			}
		}, {
			type: 'block',
			blocks: ['core/quote'],
			transform: function transform(_ref3) {
				var value = _ref3.value,
				    attrs = _objectWithoutProperties(_ref3, ['value']);

				var pieces = split(create({ html: value, multilineTag: 'p' }), '\u2028');

				return [createBlock('machoblocks/' + name, {
					content: toHTMLString({ value: pieces[0] })
				})];
			}
		}],
		to: [{
			type: 'block',
			blocks: ['core/paragraph'],
			transform: function transform(_ref4) {
				var content = _ref4.content;
				return createBlock('core/paragraph', {
					content: content
				});
			}
		}, {
			type: 'block',
			blocks: ['core/pullquote'],
			transform: function transform(_ref5) {
				var content = _ref5.content;
				return createBlock('core/pullquote', {
					value: '<p>' + content + '</p>'
				});
			}
		}, {
			type: 'block',
			blocks: ['core/quote'],
			transform: function transform(_ref6) {
				var content = _ref6.content;
				return createBlock('core/quote', {
					value: '<p>' + content + '</p>'
				});
			}
		}]
	},

	edit: _edit2.default,

	save: function save(_ref7) {
		var _classnames;

		var attributes = _ref7.attributes;
		var buttonColor = attributes.buttonColor,
		    buttonText = attributes.buttonText,
		    customButtonColor = attributes.customButtonColor,
		    customTextColor = attributes.customTextColor,
		    content = attributes.content,
		    customFontSize = attributes.customFontSize,
		    fontSize = attributes.fontSize,
		    textColor = attributes.textColor,
		    textAlign = attributes.textAlign,
		    url = attributes.url,
		    via = attributes.via;


		var viaUrl = via ? '&via=' + via : '';

		var tweetUrl = 'http://twitter.com/share?&text=' + encodeURIComponent(content) + '&url=' + url + viaUrl;

		var textColorClass = getColorClassName('color', textColor);

		var fontSizeClass = getFontSizeClass(fontSize);

		var textClasses = (0, _classnames4.default)('wp-block-machoblocks-click-to-tweet__text', (_classnames = {
			'has-text-color': textColor || customTextColor
		}, _defineProperty(_classnames, fontSizeClass, fontSizeClass), _defineProperty(_classnames, textColorClass, textColorClass), _classnames));

		var textStyles = {
			fontSize: fontSizeClass ? undefined : customFontSize,
			color: textColorClass ? undefined : customTextColor
		};

		var buttonColorClass = getColorClassName('background-color', buttonColor);

		var buttonClasses = (0, _classnames4.default)('wp-block-machoblocks-click-to-tweet__twitter-btn', _defineProperty({
			'has-button-color': buttonColor || customButtonColor
		}, buttonColorClass, buttonColorClass));

		var buttonStyles = {
			backgroundColor: buttonColorClass ? undefined : customButtonColor
		};

		return !RichText.isEmpty(content) && React.createElement(
			'blockquote',
			{ style: { textAlign: textAlign } },
			React.createElement(RichText.Content, {
				tagName: 'p',
				className: textClasses,
				style: textStyles,
				value: content
			}),
			React.createElement(RichText.Content, {
				tagName: 'a',
				className: buttonClasses,
				style: buttonStyles,
				value: buttonText,
				href: tweetUrl,
				target: '_blank',
				rel: 'noopener noreferrer'
			})
		);
	}
};

exports.name = name;
exports.title = title;
exports.icon = icon;
exports.settings = settings;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.settings = exports.icon = exports.title = exports.name = undefined;

var _classnames2 = __webpack_require__(0);

var _classnames3 = _interopRequireDefault(_classnames2);

var _edit = __webpack_require__(11);

var _edit2 = _interopRequireDefault(_edit);

var _icons = __webpack_require__(3);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } /**
                                                                                                                                                                                                                   * External dependencies
                                                                                                                                                                                                                   */


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var createBlock = wp.blocks.createBlock;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    getColorClassName = _wp$editor.getColorClassName,
    getFontSizeClass = _wp$editor.getFontSizeClass;

/**
 * Block constants
 */

var name = 'highlight';

var title = __('Highlight');

var icon = _icons2.default.highlight;

var keywords = [__('text'), __('paragraph'), __('highlight')];

var blockAttributes = {
	content: {
		type: 'string',
		source: 'html',
		selector: 'mark'
	},
	align: {
		type: 'string'
	},
	backgroundColor: {
		type: 'string'
	},
	textColor: {
		type: 'string'
	},
	customBackgroundColor: {
		type: 'string'
	},
	customTextColor: {
		type: 'string'
	},
	fontSize: {
		type: 'string'
	},
	customFontSize: {
		type: 'number'
	}
};

var settings = {

	title: title,

	description: __('Highlight text.'),

	keywords: keywords,

	attributes: blockAttributes,

	transforms: {
		from: [{
			type: 'block',
			blocks: ['core/paragraph'],
			transform: function transform(_ref) {
				var content = _ref.content;

				return createBlock('machoblocks/' + name, {
					content: content
				});
			}
		}, {
			type: 'raw',
			selector: 'div.wp-block-machoblocks-highlight',
			schema: {
				div: {
					classes: ['wp-block-machoblocks-highlight']
				}
			}
		}, {
			type: 'prefix',
			prefix: ':highlight',
			transform: function transform(content) {
				return createBlock('machoblocks/' + name, {
					content: content
				});
			}
		}],
		to: [{
			type: 'block',
			blocks: ['core/paragraph'],
			transform: function transform(_ref2) {
				var content = _ref2.content;

				// transforming an empty block
				if (!content || !content.length) {
					return createBlock('core/paragraph');
				}
				// transforming a block with content
				return createBlock('core/paragraph', {
					content: content
				});
			}
		}]
	},

	edit: _edit2.default,

	save: function save(_ref3) {
		var _classnames;

		var attributes = _ref3.attributes;
		var backgroundColor = attributes.backgroundColor,
		    content = attributes.content,
		    customBackgroundColor = attributes.customBackgroundColor,
		    customFontSize = attributes.customFontSize,
		    customTextColor = attributes.customTextColor,
		    fontSize = attributes.fontSize,
		    textAlign = attributes.textAlign,
		    textColor = attributes.textColor;


		var textClass = getColorClassName('color', textColor);

		var backgroundClass = getColorClassName('background-color', backgroundColor);

		var fontSizeClass = getFontSizeClass(fontSize);

		var classes = (0, _classnames3.default)('wp-block-machoblocks-highlight__content', (_classnames = {
			'has-text-color': textColor || customTextColor
		}, _defineProperty(_classnames, textClass, textClass), _defineProperty(_classnames, 'has-background', backgroundColor || customBackgroundColor), _defineProperty(_classnames, backgroundClass, backgroundClass), _defineProperty(_classnames, fontSizeClass, fontSizeClass), _classnames));

		var styles = {
			backgroundColor: backgroundClass ? undefined : customBackgroundColor,
			color: textClass ? undefined : customTextColor,
			fontSize: fontSizeClass ? undefined : customFontSize
		};

		return React.createElement(
			'p',
			{ style: { textAlign: textAlign } },
			!RichText.isEmpty(content) && React.createElement(RichText.Content, {
				tagName: 'mark',
				className: classes,
				style: styles,
				value: content
			})
		);
	}
};

exports.name = name;
exports.title = title;
exports.icon = icon;
exports.settings = settings;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.settings = exports.icon = exports.title = exports.name = undefined;

var _classnames = __webpack_require__(0);

var _classnames2 = _interopRequireDefault(_classnames);

var _edit = __webpack_require__(14);

var _edit2 = _interopRequireDefault(_edit);

var _icons = __webpack_require__(3);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */
var __ = wp.i18n.__;

/**
 * Block constants
 */
/**
 * External dependencies
 */

var name = 'plugin-card';

var title = __('Plugin Card');

var icon = _icons2.default.pluginCard;

var keywords = [__('plugin'), __('w.org'), __('card')];

var blockAttributes = {
	pluginSlug: {
		type: 'string',
		default: ''
	}
};

var settings = {

	title: title,

	description: __('Display a WordPress plugin card from w.org.'),

	keywords: keywords,

	attributes: blockAttributes,

	edit: _edit2.default,

	save: function save() {
		return null;
	}
};

exports.name = name;
exports.title = title;
exports.icon = icon;
exports.settings = settings;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _icons = __webpack_require__(3);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Internal dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var Toolbar = wp.components.Toolbar;
var _wp$editor = wp.editor,
    AlignmentToolbar = _wp$editor.AlignmentToolbar,
    BlockControls = _wp$editor.BlockControls;

var Controls = function (_Component) {
	_inherits(Controls, _Component);

	function Controls(props) {
		_classCallCheck(this, Controls);

		return _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).apply(this, arguments));
	}

	_createClass(Controls, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    attributes = _props.attributes,
			    isSelected = _props.isSelected,
			    setAttributes = _props.setAttributes;
			var textAlign = attributes.textAlign,
			    via = attributes.via;


			return React.createElement(
				Fragment,
				null,
				React.createElement(
					BlockControls,
					null,
					React.createElement(AlignmentToolbar, {
						value: textAlign,
						onChange: function onChange(nextTextAlign) {
							return setAttributes({ textAlign: nextTextAlign });
						}
					}),
					React.createElement(
						Toolbar,
						null,
						React.createElement(
							'div',
							{ className: className + '__via-wrapper' },
							React.createElement(
								'label',
								{
									'aria-label': __('Twitter Username'),
									className: className + '__via-label',
									htmlFor: className + '__via'
								},
								_icons2.default.at
							),
							React.createElement('input', {
								'aria-label': __('Twitter Username'),
								className: className + '__via',
								id: className + '__via',
								onChange: function onChange(event) {
									return setAttributes({ via: event.target.value });
								},
								placeholder: __('Username'),
								type: 'text',
								value: via
							})
						)
					)
				)
			);
		}
	}]);

	return Controls;
}(Component);

;

exports.default = Controls;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames3 = __webpack_require__(0);

var _classnames4 = _interopRequireDefault(_classnames3);

var _colors = __webpack_require__(1);

var _colors2 = _interopRequireDefault(_colors);

var _inspector = __webpack_require__(9);

var _inspector2 = _interopRequireDefault(_inspector);

var _controls = __webpack_require__(7);

var _controls2 = _interopRequireDefault(_controls);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * External dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var compose = wp.compose.compose;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    withFontSizes = _wp$editor.withFontSizes;
var withSelect = wp.data.withSelect;

/**
 * Block constants
 */

var applyWithSelect = withSelect(function (select) {
	var _select = select('core/editor'),
	    getPermalink = _select.getPermalink;

	return {
		postLink: getPermalink()
	};
});

/**
 * Block edit function
 */

var Edit = function (_Component) {
	_inherits(Edit, _Component);

	function Edit() {
		_classCallCheck(this, Edit);

		return _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).apply(this, arguments));
	}

	_createClass(Edit, [{
		key: 'componentWillReceiveProps',
		value: function componentWillReceiveProps(_ref) {
			var postLink = _ref.postLink;

			if (postLink) {
				this.props.setAttributes({
					url: postLink
				});
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _classnames;

			var _props = this.props,
			    attributes = _props.attributes,
			    buttonColor = _props.buttonColor,
			    className = _props.className,
			    isSelected = _props.isSelected,
			    setAttributes = _props.setAttributes,
			    setButtonColor = _props.setButtonColor,
			    setTextColor = _props.setTextColor,
			    textColor = _props.textColor,
			    fallbackButtonColor = _props.fallbackButtonColor,
			    fallbackTextColor = _props.fallbackTextColor,
			    fallbackFontSize = _props.fallbackFontSize,
			    fontSize = _props.fontSize,
			    onReplace = _props.onReplace;
			var buttonText = attributes.buttonText,
			    content = attributes.content,
			    url = attributes.url,
			    via = attributes.via,
			    textAlign = attributes.textAlign;


			return [React.createElement(
				Fragment,
				null,
				isSelected && React.createElement(_controls2.default, this.props),
				isSelected && React.createElement(_inspector2.default, this.props),
				React.createElement(
					'blockquote',
					{ className: className, style: { textAlign: textAlign } },
					React.createElement(RichText, {
						tagName: 'p',
						multiline: 'false'
						/* translators: the text of the click to tweet element */
						, placeholder: __('Add a quote to tweet...'),
						value: content,
						formattingControls: [] // disable controls
						, className: (0, _classnames4.default)(className + '__text', (_classnames = {
							'has-text-color': textColor.color
						}, _defineProperty(_classnames, textColor.class, textColor.class), _defineProperty(_classnames, fontSize.class, fontSize.class), _classnames)),
						style: {
							color: textColor.color,
							fontSize: fontSize.size ? fontSize.size + 'px' : undefined
						},
						onChange: function onChange(nextContent) {
							return setAttributes({ content: nextContent });
						},
						keepPlaceholderOnFocus: true,
						onRemove: function onRemove(forward) {
							var hasEmptyTweet = content.length === 0 || content.length === 1;

							if (!forward && hasEmptyTweet) {
								onReplace([]);
							}
						}
					}),
					React.createElement(RichText, {
						tagName: 'span',
						multiline: 'false',
						placeholder: __('Add button...'),
						value: buttonText,
						formattingControls: [] // disable controls
						, className: (0, _classnames4.default)(className + '__twitter-btn', _defineProperty({
							'has-button-color': buttonColor.color
						}, buttonColor.class, buttonColor.class)),
						style: {
							backgroundColor: buttonColor.color
						},
						onChange: function onChange(nextButtonText) {
							return setAttributes({ buttonText: nextButtonText });
						},
						keepPlaceholderOnFocus: true
					})
				)
			)];
		}
	}]);

	return Edit;
}(Component);

;

exports.default = compose([applyWithSelect, _colors2.default, withFontSizes('fontSize')])(Edit);

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _colors = __webpack_require__(1);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Internal dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var compose = wp.compose.compose;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    ContrastChecker = _wp$editor.ContrastChecker,
    PanelColorSettings = _wp$editor.PanelColorSettings,
    FontSizePicker = _wp$editor.FontSizePicker,
    withFontSizes = _wp$editor.withFontSizes;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    withFallbackStyles = _wp$components.withFallbackStyles;

/**
 * Contrast checker
 */

var _window = window,
    getComputedStyle = _window.getComputedStyle;


var applyFallbackStyles = withFallbackStyles(function (node, ownProps) {
	var _ownProps$attributes = ownProps.attributes,
	    textColor = _ownProps$attributes.textColor,
	    buttonColor = _ownProps$attributes.buttonColor,
	    fontSize = _ownProps$attributes.fontSize,
	    customFontSize = _ownProps$attributes.customFontSize;

	var editableNode = node.querySelector('[contenteditable="true"]');
	//verify if editableNode is available, before using getComputedStyle.
	var computedStyles = editableNode ? getComputedStyle(editableNode) : null;
	return {
		fallbackButtonColor: buttonColor || !computedStyles ? undefined : computedStyles.buttonColor,
		fallbackTextColor: textColor || !computedStyles ? undefined : computedStyles.color,
		fallbackFontSize: fontSize || customFontSize || !computedStyles ? undefined : parseInt(computedStyles.fontSize) || undefined
	};
});

/**
 * Inspector controls
 */

var Inspector = function (_Component) {
	_inherits(Inspector, _Component);

	function Inspector(props) {
		_classCallCheck(this, Inspector);

		return _possibleConstructorReturn(this, (Inspector.__proto__ || Object.getPrototypeOf(Inspector)).apply(this, arguments));
	}

	_createClass(Inspector, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    attributes = _props.attributes,
			    buttonColor = _props.buttonColor,
			    fallbackButtonColor = _props.fallbackButtonColor,
			    fallbackFontSize = _props.fallbackFontSize,
			    fallbackTextColor = _props.fallbackTextColor,
			    fontSize = _props.fontSize,
			    isSelected = _props.isSelected,
			    setAttributes = _props.setAttributes,
			    setButtonColor = _props.setButtonColor,
			    setFontSize = _props.setFontSize,
			    setTextColor = _props.setTextColor,
			    textColor = _props.textColor;


			return React.createElement(
				Fragment,
				null,
				React.createElement(
					InspectorControls,
					null,
					React.createElement(
						PanelBody,
						{ title: __('Text Settings'), className: 'blocks-font-size' },
						React.createElement(FontSizePicker, {
							fallbackFontSize: fallbackFontSize,
							value: fontSize.size,
							onChange: setFontSize
						})
					),
					React.createElement(
						PanelColorSettings,
						{
							title: __('Color Settings'),
							initialOpen: false,
							colorSettings: [{
								value: textColor.color,
								onChange: setTextColor,
								label: __('Text Color')
							}, {
								value: buttonColor.color,
								onChange: setButtonColor,
								label: __('Button Color')
							}]
						},
						React.createElement(ContrastChecker, {
							textColor: '#ffffff',
							backgroundColor: buttonColor.color,
							fallbackButtonColor: fallbackButtonColor,
							fallbackTextColor: fallbackTextColor
						})
					)
				)
			);
		}
	}]);

	return Inspector;
}(Component);

exports.default = compose([_colors2.default, applyFallbackStyles, withFontSizes('fontSize')])(Inspector);

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var _wp$editor = wp.editor,
    BlockControls = _wp$editor.BlockControls,
    AlignmentToolbar = _wp$editor.AlignmentToolbar;

var Controls = function (_Component) {
	_inherits(Controls, _Component);

	function Controls(props) {
		_classCallCheck(this, Controls);

		return _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).apply(this, arguments));
	}

	_createClass(Controls, [{
		key: "render",
		value: function render() {
			var _props = this.props,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes;
			var align = attributes.align;


			return React.createElement(
				Fragment,
				null,
				React.createElement(
					BlockControls,
					null,
					React.createElement(AlignmentToolbar, {
						value: align,
						onChange: function onChange(nextAlign) {
							return setAttributes({ align: nextAlign });
						}
					})
				)
			);
		}
	}]);

	return Controls;
}(Component);

;

exports.default = Controls;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _classnames2 = __webpack_require__(0);

var _classnames3 = _interopRequireDefault(_classnames2);

var _colors = __webpack_require__(2);

var _colors2 = _interopRequireDefault(_colors);

var _controls = __webpack_require__(10);

var _controls2 = _interopRequireDefault(_controls);

var _inspector = __webpack_require__(12);

var _inspector2 = _interopRequireDefault(_inspector);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * External dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * Internal dependencies
 */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var compose = wp.compose.compose;
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    withFontSizes = _wp$editor.withFontSizes;
var createBlock = wp.blocks.createBlock;

/**
 * Block edit function
 */

var Edit = function (_Component) {
	_inherits(Edit, _Component);

	function Edit(props) {
		_classCallCheck(this, Edit);

		var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).apply(this, arguments));

		_this.splitBlock = _this.splitBlock.bind(_this);
		return _this;
	}

	/**
  * Split handler for RichText value, namely when content is pasted or the
  * user presses the Enter key.
  *
  * @param {?Array}     before Optional before value, to be used as content
  *                            in place of what exists currently for the
  *                            block. If undefined, the block is deleted.
  * @param {?Array}     after  Optional after value, to be appended in a new
  *                            paragraph block to the set of blocks passed
  *                            as spread.
  * @param {...WPBlock} blocks Optional blocks inserted between the before
  *                            and after value blocks.
  */


	_createClass(Edit, [{
		key: 'splitBlock',
		value: function splitBlock(before, after) {
			var _props = this.props,
			    attributes = _props.attributes,
			    insertBlocksAfter = _props.insertBlocksAfter,
			    setAttributes = _props.setAttributes,
			    onReplace = _props.onReplace;

			for (var _len = arguments.length, blocks = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
				blocks[_key - 2] = arguments[_key];
			}

			if (after) {
				// Append "After" content as a new paragraph block to the end of
				// any other blocks being inserted after the current paragraph.
				blocks.push(createBlock('core/paragraph', { content: after }));
			}

			if (blocks.length && insertBlocksAfter) {
				insertBlocksAfter(blocks);
			}

			var content = attributes.content;


			if (!before) {
				// If before content is omitted, treat as intent to delete block.
				onReplace([]);
			} else if (content !== before) {
				// Only update content if it has in-fact changed. In case that user
				// has created a new paragraph at end of an existing one, the value
				// of before will be strictly equal to the current content.
				setAttributes({ content: before });
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _classnames;

			var _props2 = this.props,
			    attributes = _props2.attributes,
			    backgroundColor = _props2.backgroundColor,
			    className = _props2.className,
			    insertBlocksAfter = _props2.insertBlocksAfter,
			    isSelected = _props2.isSelected,
			    mergeBlocks = _props2.mergeBlocks,
			    onReplace = _props2.onReplace,
			    setAttributes = _props2.setAttributes,
			    setBackgroundColor = _props2.setBackgroundColor,
			    setTextColor = _props2.setTextColor,
			    textColor = _props2.textColor,
			    fallbackFontSize = _props2.fallbackFontSize,
			    fontSize = _props2.fontSize;
			var content = attributes.content,
			    textAlign = attributes.textAlign;


			return [React.createElement(
				Fragment,
				null,
				isSelected && React.createElement(_controls2.default, this.props),
				isSelected && React.createElement(_inspector2.default, this.props),
				React.createElement(
					'p',
					{ className: className, style: { textAlign: textAlign } },
					React.createElement(RichText, {
						tagName: 'mark',
						placeholder: __('Add highlighted text...'),
						value: content,
						onChange: function onChange(value) {
							return setAttributes({ content: value });
						},
						onMerge: mergeBlocks,
						onSplit: this.splitBlock,
						onRemove: function onRemove() {
							return onReplace([]);
						},
						className: (0, _classnames3.default)(className + '__content', (_classnames = {
							'has-background': backgroundColor.color
						}, _defineProperty(_classnames, backgroundColor.class, backgroundColor.class), _defineProperty(_classnames, 'has-text-color', textColor.color), _defineProperty(_classnames, textColor.class, textColor.class), _defineProperty(_classnames, fontSize.class, fontSize.class), _classnames)),
						style: {
							backgroundColor: backgroundColor.color,
							color: textColor.color,
							fontSize: fontSize.size ? fontSize.size + 'px' : undefined
						},
						keepPlaceholderOnFocus: true
					})
				)
			)];
		}
	}]);

	return Edit;
}(Component);

;

exports.default = compose([_colors2.default, withFontSizes('fontSize')])(Edit);

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _colors = __webpack_require__(2);

var _colors2 = _interopRequireDefault(_colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Internal dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;
var compose = wp.compose.compose;
var _wp$editor = wp.editor,
    InspectorControls = _wp$editor.InspectorControls,
    ContrastChecker = _wp$editor.ContrastChecker,
    PanelColorSettings = _wp$editor.PanelColorSettings,
    FontSizePicker = _wp$editor.FontSizePicker,
    withFontSizes = _wp$editor.withFontSizes;
var _wp$components = wp.components,
    PanelBody = _wp$components.PanelBody,
    withFallbackStyles = _wp$components.withFallbackStyles;

/**
 * Contrast checker
 */

var _window = window,
    getComputedStyle = _window.getComputedStyle;


var ContrastCheckerWithFallbackStyles = withFallbackStyles(function (node, ownProps) {
	var textColor = ownProps.textColor,
	    backgroundColor = ownProps.backgroundColor,
	    fontSize = ownProps.fontSize,
	    customFontSize = ownProps.customFontSize;
	//avoid the use of querySelector if textColor color is known and verify if node is available.

	var textNode = !textColor && node ? node.querySelector('[contenteditable="true"]') : null;
	return {
		fallbackBackgroundColor: backgroundColor || !node ? undefined : getComputedStyle(node).backgroundColor,
		fallbackTextColor: textColor || !textNode ? undefined : getComputedStyle(textNode).color,
		fallbackFontSize: fontSize || customFontSize || !computedStyles ? undefined : parseInt(computedStyles.fontSize) || undefined
	};
})(ContrastChecker);

/**
 * Inspector controls
 */

var Inspector = function (_Component) {
	_inherits(Inspector, _Component);

	function Inspector(props) {
		_classCallCheck(this, Inspector);

		return _possibleConstructorReturn(this, (Inspector.__proto__ || Object.getPrototypeOf(Inspector)).apply(this, arguments));
	}

	_createClass(Inspector, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    attributes = _props.attributes,
			    backgroundColor = _props.backgroundColor,
			    textColor = _props.textColor,
			    setBackgroundColor = _props.setBackgroundColor,
			    setTextColor = _props.setTextColor,
			    setAttributes = _props.setAttributes,
			    fallbackBackgroundColor = _props.fallbackBackgroundColor,
			    fallbackTextColor = _props.fallbackTextColor,
			    setFontSize = _props.setFontSize,
			    fallbackFontSize = _props.fallbackFontSize,
			    fontSize = _props.fontSize;


			return React.createElement(
				Fragment,
				null,
				React.createElement(
					InspectorControls,
					null,
					React.createElement(
						PanelBody,
						{ title: __('Text Settings'), className: 'blocks-font-size' },
						React.createElement(FontSizePicker, {
							fallbackFontSize: fallbackFontSize,
							value: fontSize.size,
							onChange: setFontSize
						})
					),
					React.createElement(
						PanelColorSettings,
						{
							title: __('Color Settings'),
							initialOpen: false,
							colorSettings: [{
								value: backgroundColor.color,
								onChange: setBackgroundColor,
								label: __('Background Color')
							}, {
								value: textColor.color,
								onChange: setTextColor,
								label: __('Text Color')
							}]
						},
						React.createElement(ContrastChecker, {
							textColor: textColor.color,
							backgroundColor: backgroundColor.color,
							fallbackBackgroundColor: fallbackBackgroundColor,
							fallbackTextColor: fallbackTextColor
						})
					)
				)
			);
		}
	}]);

	return Inspector;
}(Component);

;

exports.default = compose([_colors2.default])(Inspector);

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var BlockControls = wp.editor.BlockControls;
var Component = wp.element.Component;
var _wp$components = wp.components,
    IconButton = _wp$components.IconButton,
    Toolbar = _wp$components.Toolbar;

var Controls = function (_Component) {
	_inherits(Controls, _Component);

	function Controls(props) {
		_classCallCheck(this, Controls);

		return _possibleConstructorReturn(this, (Controls.__proto__ || Object.getPrototypeOf(Controls)).apply(this, arguments));
	}

	_createClass(Controls, [{
		key: 'onChangePluginClick',
		value: function onChangePluginClick() {
			this.props.setAttributes({
				pluginSlug: ''
			});
		}
	}, {
		key: 'render',
		value: function render() {
			var _this2 = this;

			return React.createElement(
				BlockControls,
				null,
				React.createElement(
					Toolbar,
					null,
					React.createElement(IconButton, {
						label: __('Change Plugin'),
						icon: 'edit',
						onClick: function onClick() {
							return _this2.onChangePluginClick();
						}
					})
				)
			);
		}
	}]);

	return Controls;
}(Component);

exports.default = Controls;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _controls = __webpack_require__(13);

var _controls2 = _interopRequireDefault(_controls);

var _icons = __webpack_require__(3);

var _icons2 = _interopRequireDefault(_icons);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Internal dependencies
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


/**
 * WordPress dependencies
 */
var __ = wp.i18n.__;
var _wp$components = wp.components,
    Placeholder = _wp$components.Placeholder,
    Dashicon = _wp$components.Dashicon,
    TextControl = _wp$components.TextControl,
    Spinner = _wp$components.Spinner;
var _wp$element = wp.element,
    Component = _wp$element.Component,
    Fragment = _wp$element.Fragment;

/**
 * Block edit function
 */

var Edit = function (_Component) {
	_inherits(Edit, _Component);

	function Edit(props) {
		_classCallCheck(this, Edit);

		var _this = _possibleConstructorReturn(this, (Edit.__proto__ || Object.getPrototypeOf(Edit)).apply(this, arguments));

		_this.state = {
			status: 'loading-plugin',
			searchInput: '',
			pluginList: []
		};
		return _this;
	}

	_createClass(Edit, [{
		key: 'searchPlugins',
		value: function searchPlugins(value) {
			var _this2 = this;

			this.setState({ status: 'loading-results' });

			wp.apiFetch({ path: 'machoblocks/v1/get_plugins?search=\'' + encodeURIComponent(value) }).then(function (response) {
				_this2.setState({
					pluginList: response.data.plugins,
					status: 'ready'
				});
			});
		}
	}, {
		key: 'getPlugin',
		value: function getPlugin(slug) {
			var _this3 = this;

			this.setState({ status: 'loading-plugin' });

			wp.apiFetch({ path: 'machoblocks/v1/get_plugins?slug=\'' + encodeURIComponent(slug) }).then(function (response) {
				_this3.setPlugin(response.data);
				_this3.setState({ status: 'ready' });
			});
		}
	}, {
		key: 'setPlugin',
		value: function setPlugin(plugin) {
			this.props.setAttributes({
				pluginSlug: plugin.slug,
				pluginName: plugin.name,
				pluginIcon: this.getPluginIcon(plugin),
				pluginVersion: plugin.version,
				pluginAuthor: plugin.author,
				pluginRating: plugin.rating,
				pluginDescription: plugin.short_description,
				pluginActiveInstalls: plugin.active_installs,
				pluginDownloadLink: plugin.download_link
			});
		}
	}, {
		key: 'componentWillMount',
		value: function componentWillMount() {
			if (this.props.attributes.pluginSlug !== '') {
				this.getPlugin(this.props.attributes.pluginSlug);
			} else {
				this.setState({ status: 'ready' });
			}
		}
	}, {
		key: 'onPluginSelectClick',
		value: function onPluginSelectClick(plugin) {
			this.setPlugin(plugin);
			this.setState({ pluginList: [] });
		}
	}, {
		key: 'onSearchChange',
		value: function onSearchChange(value) {
			var _this4 = this;

			this.setState({ searchInput: value });

			clearTimeout(this.timeout);

			if (value.length < 3) {
				this.setState({ pluginList: [] });
			}

			if (value.length >= 3 && this.state.status === 'ready') {
				this.timeout = setTimeout(function () {
					return _this4.searchPlugins(value);
				}, 500);
			}
		}
	}, {
		key: 'getPluginIcon',
		value: function getPluginIcon(plugin) {
			var icon = '';
			if (plugin.icons['2x']) {
				icon = plugin.icons['2x'];
			} else if (plugin.icons['1x']) {
				icon = plugin.icons['x'];
			} else if (plugin.icons.default) {
				icon = plugin.icons.default;
			}

			return icon;
		}
	}, {
		key: 'getNiceNumber',
		value: function getNiceNumber(n) {
			if (n > 1000000000) {
				return Math.round(n / 1000000000) + '+' + ' billion';
			} else if (n > 1000000) {
				return Math.round(n / 1000000) + '+' + ' million';
			}

			return n + '+';
		}
	}, {
		key: 'getStars',
		value: function getStars(r) {
			var rating = Math.round(r / 10) / 2;
			var fullStars = Math.floor(rating);
			var halfStars = Math.ceil(rating - fullStars);
			var emptyStars = 5 - fullStars - halfStars;

			var output = [];

			_.times(fullStars, function () {
				output.push(React.createElement('div', { 'class': 'wp-block-machoblocks-plugin__star-full', 'aria-hidden': 'true' }));
			});

			_.times(halfStars, function () {
				output.push(React.createElement('div', { 'class': 'wp-block-machoblocks-plugin__star-half', 'aria-hidden': 'true' }));
			});

			_.times(emptyStars, function () {
				output.push(React.createElement('div', { 'class': 'wp-block-machoblocks-plugin__star-empty', 'aria-hidden': 'true' }));
			});

			return output;
		}
	}, {
		key: 'render',
		value: function render() {
			var _this5 = this;

			var _state = this.state,
			    status = _state.status,
			    pluginList = _state.pluginList,
			    searchInput = _state.searchInput;
			var _props = this.props,
			    attributes = _props.attributes,
			    setAttributes = _props.setAttributes,
			    className = _props.className;
			var pluginSlug = attributes.pluginSlug,
			    pluginName = attributes.pluginName,
			    pluginIcon = attributes.pluginIcon,
			    pluginVersion = attributes.pluginVersion,
			    pluginAuthor = attributes.pluginAuthor,
			    pluginRating = attributes.pluginRating,
			    pluginDescription = attributes.pluginDescription,
			    pluginActiveInstalls = attributes.pluginActiveInstalls,
			    pluginDownloadLink = attributes.pluginDownloadLink;


			if (status === 'loading-plugin') {
				return [React.createElement(
					Placeholder,
					{
						icon: 'admin-plugins',
						label: __('Plugin Card')
					},
					React.createElement(Spinner, null)
				)];
			}

			if (pluginSlug === '') {
				return [React.createElement(
					Placeholder,
					{
						label: __('Plugin Card')
					},
					React.createElement(
						'div',
						{ 'class': className + '__placeholder' },
						React.createElement(Dashicon, { icon: 'search' }),
						'loading-results' === status && React.createElement(Spinner, null),
						React.createElement(TextControl, {
							type: 'text',
							placeholder: __('Search for a plugin'),
							value: searchInput,
							onChange: function onChange(value) {
								return _this5.onSearchChange(value);
							}
						}),
						pluginList.length > 0 && React.createElement(
							'div',
							{ 'class': className + '__search-results' },
							pluginList.map(function (plugin, index) {
								return [React.createElement(
									'div',
									{
										key: index,
										onClick: function onClick() {
											return _this5.onPluginSelectClick(plugin);
										}
									},
									React.createElement('img', { src: _this5.getPluginIcon(plugin) }),
									React.createElement(
										'span',
										null,
										plugin.name
									)
								)];
							})
						)
					)
				)];
			}

			return [React.createElement(
				Fragment,
				null,
				React.createElement(_controls2.default, this.props),
				React.createElement(
					'div',
					{ 'class': className },
					React.createElement(
						'div',
						{ 'class': className + '__details' },
						React.createElement(
							'div',
							null,
							React.createElement('img', { 'class': className + '__icon', src: pluginIcon, alt: pluginName }),
							React.createElement(
								'a',
								{ 'class': className + '__download', href: pluginDownloadLink },
								'Download'
							)
						),
						React.createElement(
							'div',
							null,
							React.createElement(
								'h5',
								{ 'class': className + '__name' },
								pluginName
							),
							React.createElement(
								'div',
								{ 'class': className + '__description' },
								React.createElement(
									'p',
									null,
									pluginDescription
								)
							),
							React.createElement(
								'div',
								{ 'class': className + '__sub' },
								React.createElement(
									'div',
									{ 'class': className + '__author' },
									'by ',
									React.createElement('span', { dangerouslySetInnerHTML: { __html: pluginAuthor } })
								)
							)
						)
					),
					React.createElement(
						'div',
						{ 'class': className + '__stats' },
						React.createElement(
							'div',
							{ 'class': className + '__installs' },
							React.createElement(
								'strong',
								null,
								__('Active Installations')
							),
							React.createElement(
								'div',
								null,
								this.getNiceNumber(pluginActiveInstalls)
							)
						),
						React.createElement(
							'div',
							null,
							React.createElement(
								'strong',
								null,
								__('Rating')
							),
							React.createElement(
								'div',
								{ 'class': className + '__rating' },
								this.getStars(pluginRating)
							)
						),
						React.createElement(
							'div',
							{ 'class': className + '__version' },
							React.createElement(
								'strong',
								null,
								__('Plugin Version')
							),
							React.createElement(
								'div',
								null,
								pluginVersion
							)
						)
					)
				)
			)];
		}
	}]);

	return Edit;
}(Component);

exports.default = Edit;
;

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.registerBlocks = registerBlocks;

var _highlight = __webpack_require__(5);

var highlight = _interopRequireWildcard(_highlight);

var _clickToTweet = __webpack_require__(4);

var clickToTweet = _interopRequireWildcard(_clickToTweet);

var _pluginCard = __webpack_require__(6);

var pluginCard = _interopRequireWildcard(_pluginCard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

/**
 * WordPress dependencies
 */
var registerBlockType = wp.blocks.registerBlockType;

// Category slug and title

var category = {
	slug: 'machoblocks'
};

function registerBlocks() {
	[highlight, clickToTweet, pluginCard].forEach(function (block) {

		if (!block) {
			return;
		}

		var name = block.name,
		    icon = block.icon,
		    settings = block.settings;


		registerBlockType('machoblocks/' + name, _extends({ category: category.slug, icon: { src: icon, foreground: '#6939f4' } }, settings));
	});
};
registerBlocks();

/***/ })
/******/ ]);