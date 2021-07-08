import styled from 'styled-components';

type DivProps = {
  currentItem: number;
  stepsLength: number;
}

export const Container = styled.div<DivProps>`
  width: 100%;
  height: 6px;
  background-color: #E5EFF8;
  position: absolute;
  bottom: 0;

  .bar {
    width: ${props => (100 / props.stepsLength) * (props.currentItem)}%;
    height: 100%;
    background-color: #050922;
    border-radius: 0 32px 32px 0;
  }
`;
