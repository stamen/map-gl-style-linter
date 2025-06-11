import { formattedStyleSpecValidate } from './formatted-style-spec-validate';
import { validateLayers } from './lint-layer.js';

export default (style, options) => {
  return [
    ...formattedStyleSpecValidate(style, options),
    ...validateLayers(style, options)
  ];
};
