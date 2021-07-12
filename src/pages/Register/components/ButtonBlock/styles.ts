import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding-right: 40px;
  margin-bottom: 24px;
  position: absolute;
  bottom: 0;

  span {
    font-size: 14px;
    color: #050922;
    font-weight: 600;
    margin-right: 13px;

    &.disabled {
      opacity: 0.6;
      cursor: not-allowed; 
    }
  }

  .button-next {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #050922;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    outline: none;
    border: 0;
    transition: all 0.2s ease-in-out;

    &[disabled] {
      opacity: 0.6;
      cursor: not-allowed;
    }

    &:hover {
      transform: scale(1.15);
    }
  }
`;
