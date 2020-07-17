import styled from 'styled-components';

export const Container = styled.div`
  max-width:881px;
  width: 500px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  background-color: rgb(246, 246, 246);
  padding: 80px 30px;
  border-radius: 10px;
`;

export const FormWrapper = styled.div`
  background-color: '#F6F6F6';
  padding: '80px 30px';
  width:100%;

  .topMargin10 {
    margin-top:10px;
  }
`;

export const Grid = styled.div`
  display:grid;
  grid-template-columns: 80% 20%;
  align-items: right;
  grid-gap: 10px;
  width: 100%;
  flex: 1;

  .bottomMargin0 {
    margin-bottom:0px;
  }
`;