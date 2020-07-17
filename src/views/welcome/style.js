import styled from 'styled-components';

export const AppWrapper = styled.div`
  display: grid;
  overflow-y: auto;
  background-color:rgb(246, 246, 246);
  height: 100vh;
`;

export const Body = styled.div`
  background-color: ##F6F6F6;
  display: grid;
  grid-template-rows: auto auto 1fr;
  z-index: 1;
`;
export const Nav = styled.nav`
  background-color: #fff;
  padding: 7px 20px;
  margin-bottom: 1px;
  box-shadow: 0 1px 1px 0 rgba(0,0,0,0.06);
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  color: #273B50;
  font-size: 16px;
  font-weight: normal;
  flex: 1;
  margin: 0;
`;
