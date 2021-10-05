import { useState } from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import Pie, { ProvidedProps, PieArcDatum } from '@visx/shape/lib/shapes/Pie';
import { Group } from '@visx/group';
import { scaleOrdinal } from '@visx/scale';
import { Text } from '@visx/text';
import ChartLegend from './ChartLegend';

const ShowContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ChartDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const GameShow = ({ match }) => {
  const game = useSelector(state =>
    state.games.allGames.find(game => game.slug === match.params.slug)
  );

  const formatRatings = () => {
    const { id, gameId, total, ...ratings } = game.rating;
    const colors = ['orange', 'red', 'purple', 'green', 'orange'];
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

  return (
    <ShowContainerDiv>
      <h1>{game.title}</h1>
      <ChartDiv>
        <ChartLegend ratings={ratingsArr} />
        <svg width={width} height={width}>
          <Group top={half} left={half}>
            <Pie
              data={ratingsArr}
              pieValue={data => data.value}
              outerRadius={half}
            >
              {pie => {
                return pie.arcs.map(arc => {
                  const hasSpaceForLabel = arc.endAngle - arc.startAngle >= 0.1;
                  const [centroidX, centroidY] = pie.path.centroid(arc);
                  const arcFill = arc.data.color;
                  const percent =
                    ((arc.data.value / game.rating.total) * 100).toFixed() +
                    '%';
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
      </ChartDiv>
    </ShowContainerDiv>
  );
};

export default GameShow;
