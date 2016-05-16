import { Tools } from './js/tools';
import { Components } from './js/components';

import { radialChart } from './js/radialChart';
import { legendChart } from './js/legendChart';
import { pieChart } from './js/pieChart';
import { scheduleChart } from './js/scheduleChart';
import { matrix } from './js/matrix';
import { tspanWrap } from './js/tspanWrap';

let Reusable = {
  radialChart: radialChart,
  legendChart: legendChart,
  pieChart: pieChart,
  scheduleChart: scheduleChart,
  matrix: matrix,
  tspanWrap: tspanWrap
}

var RedsiftAngle = 33.75;

let D3 = {
  Tools: Tools,
  Reusable: Reusable,
  Components: Components,
  Constants: {
      Angle: RedsiftAngle,
      Patterns: {
        crosshatch1: { ang: 45, w: 4, h: 4, s: 5 },
        crosshatch2: { ang: 45, w: 3, h: 4, s: 5 },
        crosshatch3: { ang: 45, w: 3, h: 3, s: 5 },
        diagonal1: { ang: RedsiftAngle, w: 5, h: 4, s: 5 },
        diagonal2: { ang: RedsiftAngle, w: 5, h: 3, s: 5 },
        diagonal3: { ang: RedsiftAngle, w: 5, h: 2, s: 5 },
        blocks: { ang: 0, w: 3, h: 4, s: 5 },
        redsift: { ang: RedsiftAngle, w: 3, h: 3, s: 5 }
    }
  }
}

export { D3 };
