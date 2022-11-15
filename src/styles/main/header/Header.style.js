import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 60px;
  position: fixed;
  top:0px;
  left:0px;
  background-color: white;
  z-index: 100;
  width: 100vw;
`;

export const TitleContainer = styled.div`
  padding-left: 550px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 120px;
`;

export const Title = styled.span`
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #242424;
`;