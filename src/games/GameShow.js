import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import ChartLegend from "./ChartLegend";
import ChartSVG from "./ChartSVG";
import OwnedGameForm from "./OwnedGameForm";

const ShowContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ContentDiv = styled.div`
  display: flex;
  justify-content: space-around;
`;

const StyledButton = styled.button``;

const GameShow = ({ match }) => {
  const dispatch = useDispatch();
  const game = useSelector((state) =>
    state.games.allGames.find((game) => game.slug === match.params.slug)
  );

  const formatRatings = () => {
    const { id, gameId, total, ...ratings } = game.rating;
    const colors = ["orange", "red", "purple", "green", "orange"];
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

  const handleAddGameToList = (e) => {
    // e.target.dataset.type === 'wanted' ? dispatch(wanted) : dispatch(owned)
  };

  return (
    <ShowContainerDiv>
      <h1>{game.title}</h1>
      <ContentDiv>
        <ChartLegend ratings={ratingsArr} />
        <ChartSVG
          width={width}
          half={half}
          ratingsArr={ratingsArr}
          game={game}
        />
        <StyledButton data-type="wanted" onClick={handleAddGameToList}>
          Add to Wanted Games
        </StyledButton>
        <OwnedGameForm
          handleAddGameToList={handleAddGameToList}
          gameId={game.id}
          StyledButton={StyledButton}
        />
      </ContentDiv>
    </ShowContainerDiv>
  );
};

export default GameShow;
