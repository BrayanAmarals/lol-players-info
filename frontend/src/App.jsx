import { useEffect, useState } from "react";

import Infos from "./components/playerRow/infos";
import Account from "./components/playerRow/account";
import Winrate from "./components/playerRow/winrate";
import Filters from "./components/playerRow/filters";

import { useData } from "./hooks/useData";

import styled from "styled-components";
import unranked from "/assets/ranks/UNRANKED.png";

import { createContext } from "react";

export const FilterContext = createContext();

export function App() {
  const [filter, setFilter] = useState("");

  const atualizarEstado = (novoValor) => {
    setFilter(novoValor);
  };

  let filteredPlayers;

  if (filter == "") {
    filteredPlayers = useData();
  } else {
    filteredPlayers = useData().filter((player) => player.role === filter);
  }

  return (
    <FilterContext.Provider value={{ filter, atualizarEstado }}>
      <Container>
        <Filters />
        {filteredPlayers.map((player, index) => {
          const logoSrc = `/assets/teams/${player.team}.png`;
          const teamLogo = new Image();

          teamLogo.src = logoSrc;

          const roleSrc = `/assets/roles/${player.role}.png`;
          const playerRole = new Image();

          playerRole.src = roleSrc;

          let wins = 0;
          let loses = 0;

          return (
            <PlayerCard key={player.id}>
              <Infos
                index={index}
                logo={teamLogo.src}
                name={player.name}
                playerRole={playerRole.src}
              />
              <AccountList>
                {player.accounts.map((account, accIndex) => {
                  const rankSrc = `/assets/ranks/${account.tier}.png`;
                  const accountRank = new Image();
                  accountRank.src = rankSrc;

                  return (
                    <Accounts key={accIndex}>
                      {account.tier !== "" ? (
                        <Account
                          accountRank={accountRank.src}
                          summonerName={account.summonerName}
                          tier={account.tier}
                          rank={account.rank}
                          leaguePoints={account.leaguePoints}
                        />
                      ) : (
                        <Account
                          accountRank={unranked}
                          summonerName={account.summonerName}
                          tier={`Unranked`}
                          rank={``}
                          leaguePoints={`0`}
                        />
                      )}
                    </Accounts>
                  );
                })}
              </AccountList>

              {player.accounts.forEach((account) => {
                wins += Number(account.wins) || 0;
                loses += Number(account.losses) || 0;
              })}

              <Winrate losses={loses} wins={wins} />
            </PlayerCard>
          );
        })}
      </Container>
    </FilterContext.Provider>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  align-items: center;
  gap: 30px;
`;

const AccountList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  width: 28%;
`;

const Accounts = styled.div`
  display: flex;
  align-items: center;
`;

const PlayerCard = styled.div`
  border-top: 7px solid #316ef7;
  background: #31313c;
  width: 60%;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2rem 4rem;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`;

export default App;
