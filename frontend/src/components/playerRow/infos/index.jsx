import styled from "styled-components";

export default function Infos(props) {
  return (
    <>
      <PlayerPosition>{`#${props.index + 1}`}</PlayerPosition>
      <TeamLogo src={props.logo} alt="" />
      <PlayerInfo>
        <PlayerName>{props.name}</PlayerName>
        <PlayerRoleImg src={props.playerRole} alt="" />
      </PlayerInfo>
    </>
  );
}

const PlayerPosition = styled.h1`
  margin-right: 40px;
  color: rgba(255, 255, 255, 0.5);
`;

const TeamLogo = styled.img`
  width: 10%;
`;

const PlayerRoleImg = styled.img`
  width: 50px;
  height: 50px;
`;

const PlayerName = styled.h2`
  font-size: 40px;
  margin: 0;
`;

const PlayerInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
`;
