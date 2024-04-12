import styled from "styled-components";
import topImg from "../../../../public/assets/roles/TOP.png";
import jgImg from "../../../../public/assets/roles/JUNGLE.png";
import midImg from "../../../../public/assets/roles/MID.png";
import adcImg from "../../../../public/assets/roles/ADC.png";
import supImg from "../../../../public/assets/roles/SUPPORT.png";
import { useState, useContext, useRef } from "react";

import { FilterContext } from "../../../../src/App";

export default function Filters() {
  const { filter, atualizarEstado } = useContext(FilterContext);

  return (
    <FilterContainer>
      <InputName placeholder="Digite o nome do jogador ou nick da conta" />
      <FButtonsContainer>
        <FButtons>
          <FilterButton
            onClick={() =>
              filter == "TOP" ? atualizarEstado("") : atualizarEstado("TOP")
            }
          >
            <RoleImg src={topImg} alt="" />
          </FilterButton>
          <FilterButton
            onClick={() =>
              filter == "JUNGLE"
                ? atualizarEstado("")
                : atualizarEstado("JUNGLE")
            }
          >
            <RoleImg src={jgImg} alt="" />
          </FilterButton>
          <FilterButton
            onClick={() =>
              filter == "MID" ? atualizarEstado("") : atualizarEstado("MID")
            }
          >
            <RoleImg src={midImg} alt="" />
          </FilterButton>
          <FilterButton
            onClick={() =>
              filter == "ADC" ? atualizarEstado("") : atualizarEstado("ADC")
            }
          >
            <RoleImg src={adcImg} alt="" />
          </FilterButton>
          <FilterButton
            onClick={() =>
              filter == "SUPPORT"
                ? atualizarEstado("")
                : atualizarEstado("SUPPORT")
            }
          >
            <RoleImg src={supImg} alt="" />
          </FilterButton>
        </FButtons>
        <FButtons>
          <FilterButton>BR</FilterButton>
          <FilterButton>LA</FilterButton>
          <FilterButton>NA</FilterButton>
          <FilterButton>KR</FilterButton>
          <FilterButton>CH</FilterButton>
          <FilterButton>JP</FilterButton>
          <FilterButton>EU</FilterButton>
          <FilterButton>TW</FilterButton>
          <FilterButton>TR</FilterButton>
          <FilterButton>VT</FilterButton>
        </FButtons>
      </FButtonsContainer>
    </FilterContainer>
  );

  function FilterButton(props) {
    return (
      <>
        <FButton onClick={props.onClick}>{props.children}</FButton>
      </>
    );
  }
}

const FButton = styled.button`
  padding: 15px 20px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #31313c;
  border: none;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  align-items: center;
  justify-content: space-between;
  margin: 3rem 0 2rem 0;
  gap: 1rem;
`;

const FButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 3rem;
  margin-top: 0.5rem;
`;

const InputName = styled.input`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  background: #31313c;
  border: none;
  color: white;
  width: 100%;
  padding: 15px 20px;
`;

const RoleImg = styled.img`
  width: 30px;
`;

const FButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  justify-content: center;
  width: 100%;
`;
