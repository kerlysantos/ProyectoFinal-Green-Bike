import {
<<<<<<< HEAD
  require_createSvgIcon,
  require_interopRequireDefault
} from "./chunk-QZQTICZW.js";
import {
  require_jsx_runtime
} from "./chunk-AC2ILUOV.js";
import "./chunk-JVFU7BZX.js";
import {
  __commonJS,
  require_react
} from "./chunk-HS7GO4I2.js";
=======
  require_createSvgIcon
} from "./chunk-4UUJ5VOD.js";
import {
  require_interopRequireDefault
} from "./chunk-2SXOFDGV.js";
import "./chunk-VRRQWZS7.js";
import "./chunk-V4FDP4DY.js";
import "./chunk-MSLHOKI6.js";
import "./chunk-FAAHFTKG.js";
import "./chunk-VAAB2TJY.js";
import "./chunk-BIOVVDLF.js";
import "./chunk-L45BF5KI.js";
import {
  require_jsx_runtime
} from "./chunk-WX4UOBMS.js";
import "./chunk-FJ2DDJHN.js";
import "./chunk-INE522DN.js";
import "./chunk-4XWBUGSW.js";
import "./chunk-PRK46SJB.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __commonJS
} from "./chunk-AC2VUBZ6.js";
>>>>>>> mainFront

// node_modules/@mui/icons-material/LinkedIn.js
var require_LinkedIn = __commonJS({
  "node_modules/@mui/icons-material/LinkedIn.js"(exports) {
    var _interopRequireDefault = require_interopRequireDefault();
    Object.defineProperty(exports, "__esModule", {
      value: true
    });
    exports.default = void 0;
    var React = _interopRequireWildcard(require_react());
    var _createSvgIcon = _interopRequireDefault(require_createSvgIcon());
    var _jsxRuntime = require_jsx_runtime();
    function _getRequireWildcardCache(nodeInterop) {
      if (typeof WeakMap !== "function")
        return null;
      var cacheBabelInterop = /* @__PURE__ */ new WeakMap();
      var cacheNodeInterop = /* @__PURE__ */ new WeakMap();
      return (_getRequireWildcardCache = function(nodeInterop2) {
        return nodeInterop2 ? cacheNodeInterop : cacheBabelInterop;
      })(nodeInterop);
    }
    function _interopRequireWildcard(obj, nodeInterop) {
      if (!nodeInterop && obj && obj.__esModule) {
        return obj;
      }
      if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return { default: obj };
      }
      var cache = _getRequireWildcardCache(nodeInterop);
      if (cache && cache.has(obj)) {
        return cache.get(obj);
      }
      var newObj = {};
      var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
      for (var key in obj) {
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
          if (desc && (desc.get || desc.set)) {
            Object.defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
      newObj.default = obj;
      if (cache) {
        cache.set(obj, newObj);
      }
      return newObj;
    }
    var _default = (0, _createSvgIcon.default)((0, _jsxRuntime.jsx)("path", {
      d: "M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"
    }), "LinkedIn");
    exports.default = _default;
  }
});
export default require_LinkedIn();
//# sourceMappingURL=@mui_icons-material_LinkedIn.js.map
