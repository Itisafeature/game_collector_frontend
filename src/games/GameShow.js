import { useState } from 'react';
import { useSelector } from 'react-redux';
import Pie, { ProvidedProps, PieArcDatum } from '@visx/shape/lib/shapes/Pie';
import { Group } from '@visx/group';
import { scaleOrdinal } from '@visx/scale';
import { Text } from '@visx/text';

const GameShow = ({ match }) => {
  const [active, setActive] = useState(null);
  const game = useSelector(state =>
    state.games.allGames.find(game => game.slug === match.params.slug)
  );

  const formatRatings = () => {
    const { id, gameId, total, ...ratings } = game.rating;
    const colors = ['blue', 'red', 'purple', 'yellow', 'orange'];
    let ratingsArr = [];

    let colorIndex = 0;
    for (const key in ratings) {
      ratingsArr.push({
        type: key,
        value: ratings[key],
        color: colors[colorIndex],
      });
      colorIndex++;
    }
    return ratingsArr;
  };

  const width = 400;
  const half = width / 2;
  const ratingsArr = formatRatings();

  // const getRatingsFrequency = scaleOrdinal({
  //   domain: ratingsArr.map(r => r.value),
  //   range: ['red', 'green', 'rgba(93,30,91,0.6)', 'rgba(93,30,91,0.4)'],
  // });

  return (
    <div>
      <h1>{game.title}</h1>
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={ratingsArr}
            pieValue={data => data.value}
            outerRadius={half}
          >
            {pie => {
              console.log(pie);
              return pie.arcs.map(arc => {
                const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;
                const [centroidX, centroidY] = pie.path.centroid(arc);
                const arcFill = arc.data.color;
                return (
                  <g
                    key={arc.data.type}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <path d={pie.path(arc)} fill={arcFill} />
                    {hasSpaceForLabel && (
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
                    )}
                  </g>
                );
              });
            }}
          </Pie>
          {/* {active ? (
            <>
              <Text textAnchor="middle" fill="white" fontSize={30} dy={-20}>
                {active.value}
              </Text>
              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={20}
                dy={20}
              >
                {active.type}
              </Text>
            </> */}
          {/* ) : (
          <>
            <Text textAnchor="middle" fill="white" fontSize={30} dy={-20}>
              {game.rating.total}
            </Text>
            <Text textAnchor="middle" fill="#aaa" fontSize={20} dy={20}>
              4 options
            </Text>
          </>
          )} */}
        </Group>
      </svg>
    </div>
  );
};

export default GameShow;
