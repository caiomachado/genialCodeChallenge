import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: flex-end;
  position: relative;

  .logo {
    padding-right: 30px;
    padding-top: 40px;
    position: absolute;
    top: 0;
    z-index: 10;
  }

  .input-list {
    width: 100%;
    padding-left: 40px;
    padding-top: 40px;
    position: absolute;

    .step-information,
    .list-of-tips {
      display: none;
    }

    .input-block {
      pointer-events: none;
      border: none;
      margin-bottom: 48px;

      &:nth-child(odd) {
        opacity: 0.6;
      }

      &:nth-child(even) {
        opacity: 0.3;
      } 
    }
  }

  .input-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    height: 60%;
    padding-left: 40px;

    .code-step-information {
      padding-right: 40px;

      h1 {
        font-size: 18px;
        margin-bottom: 16px;
      }

      p {
        font-size: 18px;
        opacity: 0.8;
      }
    }

    .code-input-block {
      margin-top: 60px;

      .code-input {
        text-align: center;
        width: 38px;
        padding-bottom: 12px;
        border: 0;
        border-bottom: 2px solid #050922;
        font-size: 32px;
        color: #050922;
        outline: none;

        &:not(:last-of-type) {
          margin-right: 16px;
        }
      }
    }

    .resend-button {
      background: transparent;
      border: none;
      outline: none;
      display: flex;
      align-items: center;
      text-transform: uppercase;
      font-weight: 600;
      font-size: 14px;
      color: #121B4D;
      margin-top: 32px;
      cursor: pointer;
      transition: all 0.2s ease-in-out;

      img {
        margin-right: 4px;
      }

      &:hover {
        color: #050922;
      }
    }

    .photo-step-information {
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
    }

    .action-buttons {
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
    }

    .register-later {
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translateX(-50%);
      text-align: center;
      margin-bottom: 68px;
      background: transparent;
      color: #050922;
      font-size: 14px;
      font-weight: 600;
      outline: none;
      border: none;
      text-transform: uppercase;
      cursor: pointer;
    }

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
  }

  .next-block {
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
  }
`;
