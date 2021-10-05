import styled from 'styled-components';

const LegendTable = styled.table`
  border: 1px solid black;
`;

const LegendRow = styled.tr`
  color: ${props => props.color};
`;
const ChartLegend = ({ ratings }) => {
  console.log(ratings);
  return (
    <LegendTable>
      {ratings.map(ratings => (
        <LegendRow color={ratings.color}>{ratings.type}</LegendRow>
      ))}
    </LegendTable>
  );
};

export default ChartLegend;
