import Pie from '@visx/shape/lib/shapes/Pie';
import { Group } from '@visx/group';
import { Text } from '@visx/text';

const ChartSVG = ({ width, half, ratingsArr, game }) => {
  return (
    <svg width={width} height={width}>
      <Group top={half} left={half}>
        <Pie data={ratingsArr} pieValue={data => data.value} outerRadius={half}>
          {pie => {
            return pie.arcs.map(arc => {
              const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;
              const [centroidX, centroidY] = pie.path.centroid(arc);
              const arcFill = arc.data.color;
              const percent =
                ((arc.data.value / game.rating.total) * 100).toFixed() + '%';
              return (
                <g key={arc.data.type}>
                  <path d={pie.path(arc)} fill={arcFill} />
                  {hasSpaceForLabel && (
                    <>
                      <Text
                        x={centroidX}
                        y={centroidY}
                        dy=".33em"
                        fill="#ffffff"
                        fontSize={22}
                        textAnchor="middle"
                        pointerEvents="none"
                      >
                        {arc.data.value}
                      </Text>
                      <Text
                        x={centroidX + 5}
                        y={centroidY + 30}
                        dy=".33em"
                        fill="#ffffff"
                        fontSize={22}
                        textAnchor="middle"
                        pointerEvents="none"
                      >
                        {percent}
                      </Text>
                    </>
                  )}
                </g>
              );
            });
          }}
        </Pie>
      </Group>
    </svg>
  );
};

export default ChartSVG;
