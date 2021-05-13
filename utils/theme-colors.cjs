const parseColor = (color = '') => {
  if (typeof color !== 'string') throw new TypeError('Color should be string!');

  const hexMatch = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  if (hexMatch) {
    return hexMatch.splice(1).map((c) => parseInt(c, 16));
  }

  const hexMatchShort = /^#?([a-f\d])([a-f\d])([a-f\d])$/i.exec(color);
  if (hexMatchShort) {
    return hexMatchShort.splice(1).map((c) => parseInt(c + c, 16));
  }

  if (color.includes(',')) {
    return color.split(',').map((p) => parseInt(p));
  }

  throw new Error('Invalid color format! Use #ABC or #AABBCC or r,g,b');
};

const hexValue = (components) =>
  '#' + components.map((c) => `0${c.toString(16).toUpperCase()}`.slice(-2)).join('');

const tint = (components, intensity) =>
  components.map((c) => Math.round(c + (255 - c) * intensity));

const shade = (components, intensity) => components.map((c) => Math.round(c * intensity));

const withTint = (intensity) => (hex) => tint(hex, intensity);

const withShade = (intensity) => (hex) => shade(hex, intensity);

const _variants = {
  100: withTint(0.9),
  200: withTint(0.75),
  300: withTint(0.6),
  400: withTint(0.3),
  500: (c) => c,
  600: withShade(0.9),
  700: withShade(0.6),
  800: withShade(0.45),
  900: withShade(0.3)
};

exports.getColors = function (color, variants = _variants) {
  const colors = {};
  const components = parseColor(color);
  for (const [name, fn] of Object.entries(variants)) {
    colors[name] = hexValue(fn(components));
  }
  return colors;
};
