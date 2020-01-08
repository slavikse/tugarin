import { size } from '..';
import { ctx } from '../..';
import colors from '../colors';
import { range } from '../../utils';

export default function createStatics(types) {
  return types.reduce((actors, { name, count }) => {
    actors.push({
      name,
      rgb: colors[name].rgb,
      cells: Array(count).fill(0).map(() => {
        const cellRef = { position: getPosition() };

        while (hasNotFreePlace(cellRef));

        return cellRef;
      }),
    });

    return actors;
  }, []);
}

function getPosition() {
  const { clientWidth, clientHeight } = document.documentElement;

  return [
    size * range(0, getRangeMax(clientWidth)),
    size * range(0, getRangeMax(clientHeight)),
  ];
}

function getRangeMax(length) {
  return Math.round((length - size * 1.5) / size);
}

function hasNotFreePlace(cellRef) {
  cellRef.position = getPosition();

  const [r, g, b] = ctx.getImageData(...cellRef.position, 1, 1).data;
  const rgbString = `rgb(${r},${g},${b})`;

  return rgbString !== colors.erase.rgb;
}