import {
  ImageListContext_default
} from "./chunk-IVBDRZGH.js";
import {
  init_isMuiElement,
  isMuiElement_default
} from "./chunk-FAAHFTKG.js";
import {
  init_base
} from "./chunk-BIOVVDLF.js";
import {
  init_generateUtilityClass,
  init_styled,
  init_useThemeProps,
  styled_default,
  useThemeProps
} from "./chunk-L45BF5KI.js";
import {
  _objectWithoutPropertiesLoose,
  composeClasses,
  generateUtilityClass,
  generateUtilityClasses,
  init_esm,
  init_objectWithoutPropertiesLoose,
  integerPropType_default,
  require_jsx_runtime,
  require_react_is
} from "./chunk-WX4UOBMS.js";
import {
  require_prop_types
} from "./chunk-FJ2DDJHN.js";
import {
  _extends,
  init_extends
} from "./chunk-INE522DN.js";
import {
  clsx_m_default,
  init_clsx_m
} from "./chunk-4XWBUGSW.js";
import {
  require_react
} from "./chunk-FLAVOKRJ.js";
import {
  __toESM
} from "./chunk-AC2VUBZ6.js";

// node_modules/@mui/material/ImageListItem/ImageListItem.js
init_objectWithoutPropertiesLoose();
init_extends();
init_base();
init_esm();
init_clsx_m();
var import_prop_types = __toESM(require_prop_types());
var React = __toESM(require_react());
var import_react_is = __toESM(require_react_is());
init_styled();
init_useThemeProps();
init_isMuiElement();

// node_modules/@mui/material/ImageListItem/imageListItemClasses.js
init_esm();
init_generateUtilityClass();
function getImageListItemUtilityClass(slot) {
  return generateUtilityClass("MuiImageListItem", slot);
}
var imageListItemClasses = generateUtilityClasses("MuiImageListItem", ["root", "img", "standard", "woven", "masonry", "quilted"]);
var imageListItemClasses_default = imageListItemClasses;

// node_modules/@mui/material/ImageListItem/ImageListItem.js
var import_jsx_runtime = __toESM(require_jsx_runtime());
var _excluded = ["children", "className", "cols", "component", "rows", "style"];
var useUtilityClasses = (ownerState) => {
  const {
    classes,
    variant
  } = ownerState;
  const slots = {
    root: ["root", variant],
    img: ["img"]
  };
  return composeClasses(slots, getImageListItemUtilityClass, classes);
};
var ImageListItemRoot = styled_default("li", {
  name: "MuiImageListItem",
  slot: "Root",
  overridesResolver: (props, styles) => {
    const {
      ownerState
    } = props;
    return [{
      [`& .${imageListItemClasses_default.img}`]: styles.img
    }, styles.root, styles[ownerState.variant]];
  }
})(({
  ownerState
}) => _extends({
  display: "block",
  position: "relative"
}, ownerState.variant === "standard" && {
  // For titlebar under list item
  display: "flex",
  flexDirection: "column"
}, ownerState.variant === "woven" && {
  height: "100%",
  alignSelf: "center",
  "&:nth-of-type(even)": {
    height: "70%"
  }
}, {
  [`& .${imageListItemClasses_default.img}`]: _extends({
    objectFit: "cover",
    width: "100%",
    height: "100%",
    display: "block"
  }, ownerState.variant === "standard" && {
    height: "auto",
    flexGrow: 1
  })
}));
var ImageListItem = React.forwardRef(function ImageListItem2(inProps, ref) {
  const props = useThemeProps({
    props: inProps,
    name: "MuiImageListItem"
  });
  const {
    children,
    className,
    cols = 1,
    component = "li",
    rows = 1,
    style
  } = props, other = _objectWithoutPropertiesLoose(props, _excluded);
  const {
    rowHeight = "auto",
    gap,
    variant
  } = React.useContext(ImageListContext_default);
  let height = "auto";
  if (variant === "woven") {
    height = void 0;
  } else if (rowHeight !== "auto") {
    height = rowHeight * rows + gap * (rows - 1);
  }
  const ownerState = _extends({}, props, {
    cols,
    component,
    gap,
    rowHeight,
    rows,
    variant
  });
  const classes = useUtilityClasses(ownerState);
  return (0, import_jsx_runtime.jsx)(ImageListItemRoot, _extends({
    as: component,
    className: clsx_m_default(classes.root, classes[variant], className),
    ref,
    style: _extends({
      height,
      gridColumnEnd: variant !== "masonry" ? `span ${cols}` : void 0,
      gridRowEnd: variant !== "masonry" ? `span ${rows}` : void 0,
      marginBottom: variant === "masonry" ? gap : void 0
    }, style),
    ownerState
  }, other, {
    children: React.Children.map(children, (child) => {
      if (!React.isValidElement(child)) {
        return null;
      }
      if (true) {
        if ((0, import_react_is.isFragment)(child)) {
          console.error(["MUI: The ImageListItem component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join("\n"));
        }
      }
      if (child.type === "img" || isMuiElement_default(child, ["Image"])) {
        return React.cloneElement(child, {
          className: clsx_m_default(classes.img, child.props.className)
        });
      }
      return child;
    })
  }));
});
true ? ImageListItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component, normally an `<img>`.
   */
  children: import_prop_types.default.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: import_prop_types.default.object,
  /**
   * @ignore
   */
  className: import_prop_types.default.string,
  /**
   * Width of the item in number of grid columns.
   * @default 1
   */
  cols: integerPropType_default,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: import_prop_types.default.elementType,
  /**
   * Height of the item in number of grid rows.
   * @default 1
   */
  rows: integerPropType_default,
  /**
   * @ignore
   */
  style: import_prop_types.default.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: import_prop_types.default.oneOfType([import_prop_types.default.arrayOf(import_prop_types.default.oneOfType([import_prop_types.default.func, import_prop_types.default.object, import_prop_types.default.bool])), import_prop_types.default.func, import_prop_types.default.object])
} : void 0;
var ImageListItem_default = ImageListItem;

export {
  getImageListItemUtilityClass,
  imageListItemClasses_default,
  ImageListItem_default
};
//# sourceMappingURL=chunk-X46QV5EG.js.map
