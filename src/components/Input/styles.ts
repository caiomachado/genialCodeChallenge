import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  0% {
    margin-right: 0;
    opacity: 0;
  }

  5% {

    margin-right: 2px;
    opacity: 0;
  }


  10% {
    margin-right: 4px;
    opacity: 0;
  }

  15% {
    margin-right: 5px;
    opacity: 0;
  }

  20% {
    margin-right: 5px;
    opacity: 0;
  }

  25% {
    margin-right: 5px;
    opacity: 0;
  }

  50% {
    transform: rotate(-20deg);
    opacity: 0.6;
    margin-right: 5px;
  }

  100% {
    transform: rotate(0deg);
    opacity: 1;
    margin-right: 5px;
  }
`

export const Container = styled.div`
  width: 100%;

  .step-information {
    margin-bottom: 70px;
    padding-right: 40px;

    h1 {
      margin-bottom: 24px;
      color: #050922;
      font-size: 26px;
      line-height: 31px;
    }

    p {
      color: #050922;
      font-size: 14px;
    }
  }

  .input-block {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    padding-top: 10px;
    border-bottom-style: solid;
    border-bottom-width: 2px;
    border-color: #E5EFF8;
    transition: all 0.5s ease-in;
    overflow-x: hidden;
    
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      width: 100%;
      background-color: #050922;
      height: 2px;
      transform: translateX(100%);
      transition: all 0.5s ease-in;
    }

    label {
      position: absolute;
      pointer-events: none;
      font-size: 18px;
      color: #050922;
      transition: all 0.2s ease-out;

      &.input-filled {
        transform: translateY(-20px);
        font-size: 12px;
      }
    }

    .dropdown-wrapper {
      display: flex;
      align-items: center;

      .flag-dropdown {
        display: flex;
        align-items: center;
        margin-right: 8px;
      }

      span {
        margin-right: 5px;
        font-size: 18px;
      }
    }

    img {
      transform: rotate(-15deg);
      transition: all 2s ease-in-out;
      animation: ${rotate} 0.8s ease-out forwards;
    }
    
    input {
      height: 40px;
      width: 100%;
      border: 0;
      outline: none;
      font-size: 18px;
      color: #050922;
      transition: all 0.5s ease-in;

      &::placeholder {
        transition: all 0.2s ease-out;
        opacity: 0;
        color: #d6dfe9;
        font-size: 18px;
      }
    }
    
    &:hover {
      &::after {
        transform: translateX(0);
      }

      label {
        transform: translateY(-20px);
        font-size: 12px;
      }

      input {
        &::placeholder {
          opacity: 1;
        }
      }
    }
  }

  .list-of-tips {
    margin-top: 40px;

    li {
      font-size: 14px;
      color: #575756;
    }
  }
`;