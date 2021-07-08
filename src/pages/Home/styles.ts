import styled from 'styled-components';
import homeImg from '../../assets/images/home.png'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${homeImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  
  .overlay {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #181846;
    opacity: 0.6;
  }

  .action-wrapper {
    z-index: 10;
    position: absolute;
    width: 100%;
    bottom: 0;
    border-radius: 43px 43px 0 0;
    background-color: #050922;
    color: white;
    padding: 60px 40px 40px;

    h1 {
      margin-bottom: 8px;
    }

    p {
      margin-bottom: 53px;
      line-height: 27px;
      font-size: 18px;
    }

    .buttons-wrapper {
      display: flex;
      flex-direction: column;
      gap: 24px;

      .filled {
        &:hover {
          background-color: #050922;
          color: white;
          border: 1px solid white;
        }
      }

      .empty {
        &:hover {
          background-color: white;
          color: #050922;
          border: none;
        }
      }
    }
  }
`;
