import { useSelector } from 'react-redux';

const GameShow = ({ match }) => {
  const game = useSelector(state =>
    state.games.allGames.find(game => game.slug === match.params.slug)
  );

  console.log('here');
  console.log(game);
  return (
    <div>
      <h1>{game.title}</h1>
    </div>
  );
};

export default GameShow;
