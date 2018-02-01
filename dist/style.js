Object.defineProperty(exports,"__esModule",{value:true});var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();var _vars=require('./replacers/vars');var _vars2=_interopRequireDefault(_vars);var _mediaQueries=require('./replacers/media-queries');var _mediaQueries2=_interopRequireDefault(_mediaQueries);var _value=require('./value');var _value2=_interopRequireDefault(_value);var _utils=require('./utils');var _utils2=_interopRequireDefault(_utils);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}var _class=function(){function _class(source){var varsArr=arguments.length>1&&arguments[1]!==undefined?arguments[1]:[];_classCallCheck(this,_class);this.source=source;this.varsArr=varsArr;this.processedSource=null;this.extractedVars=null;this.extractedProps=null;this.calculatedVars=null;this.calculatedProps=null;}_createClass(_class,[{key:'calc',value:function calc(){this.processSource();this.calcVars();this.calcProps();this.tryOutline();return{calculatedVars:this.calculatedVars,calculatedProps:this.calculatedProps};}},{key:'processSource',value:function processSource(){this.processedSource=_mediaQueries2.default.process(this.source);}},{key:'calcVars',value:function calcVars(){this.extractedVars=_vars2.default.extract(this.processedSource);if(this.extractedVars){var varsArrForVars=[this.extractedVars].concat(this.varsArr);this.calculatedVars=calcPlainObject(this.extractedVars,varsArrForVars);this.varsArr=[this.calculatedVars].concat(this.varsArr);}}},{key:'calcProps',value:function calcProps(){this.extractedProps=_utils2.default.excludeKeys(this.processedSource,this.extractedVars);this.calculatedProps=calcPlainObject(this.extractedProps,this.varsArr);}},{key:'tryOutline',value:function tryOutline(){var outline=_vars2.default.get('$outline',this.varsArr);if(outline){this.calculatedProps.borderWidth=typeof outline==='number'?outline:1;this.calculatedProps.borderColor=getRandomColor();}}}]);return _class;}();exports.default=_class;function calcPlainObject(obj,varsArr){return Object.keys(obj).reduce(function(res,prop){res[prop]=new _value2.default(obj[prop],prop,varsArr).calc();return res;},{});}function getRandomColor(){var colors=['black','red','green','blue'];var index=Math.round(Math.random()*(colors.length-1));return colors[index];}