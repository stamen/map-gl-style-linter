import { validate as validateMapbox } from '@mapbox/mapbox-gl-style-spec';
import { validateStyleMin as validateMaplibre } from '@maplibre/maplibre-gl-style-spec';

const formattedStyleSpecValidate = (style, options) => {
  const { renderer } = options;
  const { layers } = style;

  const validationErrors =
    renderer === 'maplibre-gl'
      ? validateMaplibre(style)
      : validateMapbox(style);

  const formattedErrors = validationErrors.map(e => {
    const { message } = e;
    const matches = message.match(/layers\[\d+\]/g);
    if (!matches) return e;
    let nextMessage = message;
    matches.forEach(match => {
      const layerIndex = JSON.parse(match.replace('layers', ''));
      const layer = layers[layerIndex];
      nextMessage = nextMessage.split(match).join(layer.id);
    });
    return { ...e, message: nextMessage };
  });

  return formattedErrors;
};

export { formattedStyleSpecValidate };
