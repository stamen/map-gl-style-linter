var $gXNCa$mapboxmapboxglstylespec = require("@mapbox/mapbox-gl-style-spec");

var $parcel$global =
typeof globalThis !== 'undefined'
  ? globalThis
  : typeof self !== 'undefined'
  ? self
  : typeof window !== 'undefined'
  ? window
  : typeof global !== 'undefined'
  ? global
  : {};
var $parcel$modules = {};
var $parcel$inits = {};

var parcelRequire = $parcel$global["parcelRequire91f9"];
if (parcelRequire == null) {
  parcelRequire = function(id) {
    if (id in $parcel$modules) {
      return $parcel$modules[id].exports;
    }
    if (id in $parcel$inits) {
      var init = $parcel$inits[id];
      delete $parcel$inits[id];
      var module = {id: id, exports: {}};
      $parcel$modules[id] = module;
      init.call(module.exports, module, module.exports);
      return module.exports;
    }
    var err = new Error("Cannot find module '" + id + "'");
    err.code = 'MODULE_NOT_FOUND';
    throw err;
  };

  parcelRequire.register = function register(id, init) {
    $parcel$inits[id] = init;
  };

  $parcel$global["parcelRequire91f9"] = parcelRequire;
}
parcelRequire.register("d1OBf", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports["default"] = void 0;

var $hC95l = parcelRequire("hC95l");

var $a3us0 = parcelRequire("a3us0");
function $97c29e6aac54c436$var$_toConsumableArray(arr) {
    return $97c29e6aac54c436$var$_arrayWithoutHoles(arr) || $97c29e6aac54c436$var$_iterableToArray(arr) || $97c29e6aac54c436$var$_unsupportedIterableToArray(arr) || $97c29e6aac54c436$var$_nonIterableSpread();
}
function $97c29e6aac54c436$var$_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $97c29e6aac54c436$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $97c29e6aac54c436$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $97c29e6aac54c436$var$_arrayLikeToArray(o, minLen);
}
function $97c29e6aac54c436$var$_iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function $97c29e6aac54c436$var$_arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return $97c29e6aac54c436$var$_arrayLikeToArray(arr);
}
function $97c29e6aac54c436$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
var $97c29e6aac54c436$var$_default = function _default(style) {
    return [].concat($97c29e6aac54c436$var$_toConsumableArray((0, $hC95l.formattedStyleSpecValidate)(style)), $97c29e6aac54c436$var$_toConsumableArray((0, $a3us0.validateLayers)(style)));
};
module.exports["default"] = $97c29e6aac54c436$var$_default;

});
parcelRequire.register("hC95l", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.formattedStyleSpecValidate = void 0;

function $cd2d086a0cac1160$var$_typeof(obj1) {
    "@babel/helpers - typeof";
    return $cd2d086a0cac1160$var$_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(obj) {
        return typeof obj;
    } : function(obj) {
        return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, $cd2d086a0cac1160$var$_typeof(obj1);
}
function $cd2d086a0cac1160$var$ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        enumerableOnly && (symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        })), keys.push.apply(keys, symbols);
    }
    return keys;
}
function $cd2d086a0cac1160$var$_objectSpread(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = null != arguments[i] ? arguments[i] : {};
        i % 2 ? $cd2d086a0cac1160$var$ownKeys(Object(source), !0).forEach(function(key) {
            $cd2d086a0cac1160$var$_defineProperty(target, key, source[key]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : $cd2d086a0cac1160$var$ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function $cd2d086a0cac1160$var$_defineProperty(obj, key, value) {
    key = $cd2d086a0cac1160$var$_toPropertyKey(key);
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function $cd2d086a0cac1160$var$_toPropertyKey(arg) {
    var key = $cd2d086a0cac1160$var$_toPrimitive(arg, "string");
    return $cd2d086a0cac1160$var$_typeof(key) === "symbol" ? key : String(key);
}
function $cd2d086a0cac1160$var$_toPrimitive(input, hint) {
    if ($cd2d086a0cac1160$var$_typeof(input) !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
        var res = prim.call(input, hint || "default");
        if ($cd2d086a0cac1160$var$_typeof(res) !== "object") return res;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
}
var $cd2d086a0cac1160$var$formattedStyleSpecValidate = function formattedStyleSpecValidate(style) {
    var layers = style.layers;
    var validationErrors = (0, $gXNCa$mapboxmapboxglstylespec.validate)(style);
    var formattedErrors = validationErrors.map(function(e) {
        var message = e.message;
        var matches = message.match(/layers\[\d+\]/g);
        if (!matches) return e;
        var nextMessage = message;
        matches.forEach(function(match) {
            var layerIndex = JSON.parse(match.replace("layers", ""));
            var layer = layers[layerIndex];
            nextMessage = nextMessage.split(match).join(layer.id);
        });
        return $cd2d086a0cac1160$var$_objectSpread($cd2d086a0cac1160$var$_objectSpread({}, e), {}, {
            message: nextMessage
        });
    });
    return formattedErrors;
};
module.exports.formattedStyleSpecValidate = $cd2d086a0cac1160$var$formattedStyleSpecValidate;

});

parcelRequire.register("a3us0", function(module, exports) {
"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
module.exports.validateLayers = module.exports.validateLayer = void 0;

function $01e3a45b386143e7$var$_toConsumableArray(arr) {
    return $01e3a45b386143e7$var$_arrayWithoutHoles(arr) || $01e3a45b386143e7$var$_iterableToArray(arr) || $01e3a45b386143e7$var$_unsupportedIterableToArray(arr) || $01e3a45b386143e7$var$_nonIterableSpread();
}
function $01e3a45b386143e7$var$_nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function $01e3a45b386143e7$var$_unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return $01e3a45b386143e7$var$_arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return $01e3a45b386143e7$var$_arrayLikeToArray(o, minLen);
}
function $01e3a45b386143e7$var$_iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function $01e3a45b386143e7$var$_arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return $01e3a45b386143e7$var$_arrayLikeToArray(arr);
}
function $01e3a45b386143e7$var$_arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/**
 * getPropertyIds
 * Get property ids for either `paint` or `layout` properties
 * @param {string} type - `paint` or `layout`
 * @returns {string[]} - property ids for the given type
 */ var $01e3a45b386143e7$var$getPropertyIds = function getPropertyIds(type) {
    var propertyIds = $gXNCa$mapboxmapboxglstylespec.latest[type].map(function(layerType) {
        return Object.keys($gXNCa$mapboxmapboxglstylespec.latest[layerType]);
    }).flat(1);
    return Array.from(new Set(propertyIds));
};
var $01e3a45b386143e7$var$paintProperties = $01e3a45b386143e7$var$getPropertyIds("paint");
var $01e3a45b386143e7$var$layoutProperties = $01e3a45b386143e7$var$getPropertyIds("layout");
/**
 * validateMisplacedProperties
 * Find property ids at the top level of a layer that should not be there
 * @param {Object} layer - a layer object from a style
 * @param {string[]} ids - property ids to look for
 * @param {string} type - `paint` or `layout`
 * @returns {ValidationError[]} - an error for each id found, if any
 */ var $01e3a45b386143e7$var$validateMisplacedProperties = function validateMisplacedProperties(layer, ids, type) {
    return Object.keys(layer).filter(function(key) {
        return ids.includes(key);
    }).map(function(key) {
        return new $gXNCa$mapboxmapboxglstylespec.ValidationError(layer.id, layer[key], "contains '".concat(key, "' at the top level, but it should be in ").concat(type));
    });
};
var $01e3a45b386143e7$var$validateMisplacedPaintProperties = function validateMisplacedPaintProperties(layer) {
    return $01e3a45b386143e7$var$validateMisplacedProperties(layer, $01e3a45b386143e7$var$paintProperties, "paint");
};
var $01e3a45b386143e7$var$validateMisplacedLayoutProperties = function validateMisplacedLayoutProperties(layer) {
    return $01e3a45b386143e7$var$validateMisplacedProperties(layer, $01e3a45b386143e7$var$layoutProperties, "layout");
};
var $01e3a45b386143e7$var$validateLayer = function validateLayer(layer) {
    return [].concat($01e3a45b386143e7$var$_toConsumableArray($01e3a45b386143e7$var$validateMisplacedLayoutProperties(layer)), $01e3a45b386143e7$var$_toConsumableArray($01e3a45b386143e7$var$validateMisplacedPaintProperties(layer)));
};
module.exports.validateLayer = $01e3a45b386143e7$var$validateLayer;
var $01e3a45b386143e7$var$validateLayers = function validateLayers(style) {
    if (!style.layers) return [];
    return style.layers.map($01e3a45b386143e7$var$validateLayer).flat(Infinity);
};
module.exports.validateLayers = $01e3a45b386143e7$var$validateLayers;

});


"use strict";
Object.defineProperty(module.exports, "__esModule", {
    value: true
});
Object.defineProperty(module.exports, "lint", {
    enumerable: true,
    get: function get() {
        return $4fa36e821943b400$var$_lint["default"];
    }
});

var $4fa36e821943b400$var$_lint = $4fa36e821943b400$var$_interopRequireDefault((parcelRequire("d1OBf")));
function $4fa36e821943b400$var$_interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        "default": obj
    };
}


//# sourceMappingURL=main.js.map
