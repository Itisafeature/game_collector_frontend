import { useSelector } from 'react-redux';
import Pie, { ProvidedProps, PieArcDatum } from '@visx/shape/lib/shapes/Pie';
import { Group } from '@visx/group';

const GameShow = ({ match }) => {
  const game = useSelector(state =>
    state.games.allGames.find(game => game.slug === match.params.slug)
  );

  const formatRatings = () => {
    const { id, gameId, total, ...ratings } = game.rating;
    let ratingsArr = [];

    for (const key in ratings) {
      ratingsArr.push({ type: key, value: ratings[key] });
    }
    return ratingsArr;
  };

  const width = 0.2;
  const half = width * 0.5;
  const ratingsArr = formatRatings();

  return (
    <div>
      <h1>{game.title}</h1>
      <svg width={width} height="20%">
        <Group top={half} half={half}>
          <Pie date={ratingsArr} pieValue={data => data.value}></Pie>
        </Group>
      </svg>
    </div>
  );
};

export default GameShow;
