import styled from 'styled-components';

const LegendTable = styled.table`
  border: 1px solid black;
  align-self: center;
  padding: 10px;
  margin-right: 10px;
`;

const LegendRow = styled.tr`
  color: ${props => props.color};
`;
const ChartLegend = ({ ratings }) => {
  return (
    <LegendTable>
      {ratings.map(ratings => (
        <LegendRow color={ratings.color}>{ratings.type}</LegendRow>
      ))}
    </LegendTable>
  );
};

export default ChartLegend;
