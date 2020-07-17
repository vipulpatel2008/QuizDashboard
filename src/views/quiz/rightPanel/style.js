import styled from 'styled-components';

export const RightPanel = styled.div`
  background-color: #fff;
  text-align: left;
  overflow: hidden;
  position: relative;
  overflow-y: auto;
  z-index: 1;
  height: calc(100vh - 80px);
`;

export const HeaderGrid = styled.div`
  display:grid;
  grid-template-columns: 75% 25%;
  align-items: right;
  width: 100%;
  flex: 1;
  padding:10px;
`;

export const Grid = styled.div`
  display:grid;
  grid-template-columns: 95% 5%;
  align-items: right;
  grid-gap: 10px;
  width: 100%;
  flex: 1;
  padding:10px;
`;

export const Header = styled.div`
  width: 100%;    
`;

export const Question = styled.div`
  background-color:#ddd;  
  margin: 5px;

  .deleteButton {
    margin-top:5px;
    background-color:#aaa;
    color:#fff;
  }
`;

export const Title = styled.div`
  margin-bottom: 5px; 
  font-weight: 500;
`;