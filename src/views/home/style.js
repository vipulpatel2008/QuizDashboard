import styled from 'styled-components';

export const Page = styled.div`
  background: rgb(79,109,136);
  background: linear-gradient(153deg, rgba(79,109,136,1) 0%, rgba(39,59,80,1) 100%);
  display: flex;
  align-items: center;
  height: 100vh;

  &:before {
    background-color: rgba(39, 59, 80, 0.9);
    content: "";
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`;

export const Container = styled.div`
  max-width:881px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: 1;
  display: flex;
  box-shadow: 0 0 50px rgba(0,0,0,0.2);
  background-color: rgb(246, 246, 246);
  padding: 80px 30px;
  border-radius: 10px;
`;

export const FormWrapper = styled.div`
  background-color: '#F6F6F6';
  padding: '80px 30px';
`;

export const Heading = styled.h1`
  color:rgb(79,109,136);
`;