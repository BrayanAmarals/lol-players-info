import styled from "styled-components";

export default function Winrate(props) {
  const winrate = (props.wins / (props.wins + props.losses)) * 100;

  return (
    <WinrateContainer>
      <WinrateTitle>Winrate:</WinrateTitle>
      <WinrateRate value={winrate} max="100" />
      <h1>{winrate}</h1>
    </WinrateContainer>
  );
}

const WinrateContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const WinrateTitle = styled.h6`
  color: rgba(255, 255, 255, 0.5);

  font-size: 13px;
  margin: 0;
`;

const WinrateRate = styled.progress`
  width: 200px;
  height: 22px;
  position: relative;
`;
