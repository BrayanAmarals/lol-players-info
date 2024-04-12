import styled from "styled-components";

export default function Account(props) {
  return (
    <>
      <AccountRankImg src={props.accountRank} />
      <AccountTexts>
        <AccountName>{props.summonerName}</AccountName>
        <AccountRank>{`${props.tier} ${props.rank} - ${props.leaguePoints} pdl's`}</AccountRank>
      </AccountTexts>
    </>
  );
}

const AccountRankImg = styled.img`
  width: 60px;
  height: 60px;
  margin-right: 20px;
`;

const AccountName = styled.p`
  margin: 0;
  padding: 0;
  font-size: 18px;
`;

const AccountRank = styled.p`
  margin: 0;
  color: rgba(255, 255, 255, 0.5);
  font-size: 13px;
`;

const AccountTexts = styled.div``;
