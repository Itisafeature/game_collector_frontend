import { useState } from 'react';
import styled from 'styled-components';

const CurrencySpan = styled.span`
  display: inline-block;
  position: relative;
  & input {
    padding-left: 15px;
  }
  &:before {
    position: absolute;
    content: '$';
    left: 5px;
    top: 2px;
  }
`;

const OwnedGameForm = ({ gameId, StyledButton }) => {
  const [purchasePrice, setPurchasePrice] = useState(null);

  const handleSubmit = () => {};

  return (
    <form onSubmit={handleSubmit}>
      <label for="purchasePrice">Purchase Price</label>
      <CurrencySpan>
        <input
          id="purchasePrice"
          name="purchasePrice"
          type="number"
          min="0"
          step=".01"
          value={purchasePrice}
          onChange={e => setPurchasePrice(e.target.value)}
        />
      </CurrencySpan>
      <StyledButton>Add to Owned Games</StyledButton>
    </form>
  );
};

export default OwnedGameForm;
