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

// node_modules/@mui/icons-material/Twitter.js
var require_Twitter = __commonJS({
  "node_modules/@mui/icons-material/Twitter.js"(exports) {
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
      d: "M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"
    }), "Twitter");
    exports.default = _default;
  }
});
export default require_Twitter();
//# sourceMappingURL=@mui_icons-material_Twitter.js.map
