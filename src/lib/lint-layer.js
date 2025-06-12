import {
  latest as mapboxLatest,
  ValidationError as MapboxValidationError
} from '@mapbox/mapbox-gl-style-spec';
import {
  latest as maplibreLatest,
  ValidationError as MaplibreValidationError
} from '@maplibre/maplibre-gl-style-spec';

/**
 * getPropertyIds
 * Get property ids for either `paint` or `layout` properties
 * @param {string} type - `paint` or `layout`
 * @returns {string[]} - property ids for the given type
 */
const getPropertyIds = (type, options) => {
  const { renderer } = options;
  const latest = renderer === 'maplibre-gl' ? maplibreLatest : mapboxLatest;

  let propertyIds = latest[type]
    .map(layerType => Object.keys(latest[layerType]))
    .flat(1);
  return Array.from(new Set(propertyIds));
};

/**
 * validateMisplacedProperties
 * Find property ids at the top level of a layer that should not be there
 * @param {Object} layer - a layer object from a style
 * @param {string[]} ids - property ids to look for
 * @param {string} type - `paint` or `layout`
 * @returns {ValidationError[]} - an error for each id found, if any
 */
const validateMisplacedProperties = (layer, ids, type, options) => {
  const { renderer } = options;

  const ValidationError =
    renderer === 'maplibre-gl'
      ? MaplibreValidationError
      : MapboxValidationError;

  return Object.keys(layer)
    .filter(key => ids.includes(key))
    .map(
      key =>
        new ValidationError(
          layer.id,
          layer[key],
          `contains '${key}' at the top level, but it should be in ${type}`
        )
    );
};

const validateMisplacedPaintProperties = (layer, options) => {
  const paintProperties = getPropertyIds('paint', options);
  return validateMisplacedProperties(layer, paintProperties, 'paint', options);
};

const validateMisplacedLayoutProperties = (layer, options) => {
  const layoutProperties = getPropertyIds('layout', options);
  return validateMisplacedProperties(
    layer,
    layoutProperties,
    'layout',
    options
  );
};

export const validateLayer = (layer, options) => {
  return [
    ...validateMisplacedLayoutProperties(layer, options),
    ...validateMisplacedPaintProperties(layer, options)
  ];
};

export const validateLayers = (style, options) => {
  if (!style.layers) return [];
  return style.layers.map(l => validateLayer(l, options)).flat(Infinity);
};
