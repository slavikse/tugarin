import colors from '../colors';
import filling from './filling';

export default function getStatics({ size, types }) {
  const statics = [];

  types.forEach(({ name, count }) => {
    statics.push({
      name,
      color: colors[name].color,
      rgb: colors[name].rgb,
      cells: [],
    });

    for (let i = 0; i < count; i++) {
      filling({ statics, size });
    }
  });

  return statics;
}