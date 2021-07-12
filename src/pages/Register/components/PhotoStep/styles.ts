import styled from 'styled-components';

export const InfoBlock = styled.div`
  padding-right: 40px;
  margin-bottom: 56px;

  h1 {
    font-size: 18px;
    color: #050922;
  }

  p {
    font-size: 14px;
    color: #050922;
  }
`;

export const ActionButtonBlock = styled.div`
  .upload-button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 16px 25px;
    background-color: #050922;
    border-radius: 8px;
    width: 300px;
    outline: none;
    border: 0;
    transition: all 0.2s ease-in-out;
    
    &:not(:last-of-type) {
      margin-bottom: 16px;
    }

    &:hover {
      transform: scale(1.05);
    }
    
    span {
      color: #ffffff;
      font-weight: 600;
      
      &.recommendation {
        font-size: 14px;
        font-weight: 400;
        margin-left: 12px;
      }
    }
  }
`;

export const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  margin-bottom: 68px;
  background: transparent;
  color: #121B4D;
  font-size: 14px;
  font-weight: 600;
  outline: none;
  border: none;
  text-transform: uppercase;
  cursor: pointer;
`;
