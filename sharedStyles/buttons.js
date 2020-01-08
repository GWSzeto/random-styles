import styled from 'styled-components'
import {
  green,
  darkBlue,
  blue,
  gray,
  darkGray,
} from './colorPalette'

// containers
export const ButtonContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 2rem;
`

export const SpacedButtonContainer = styled(ButtonContainer)`
  flex-flow: row nowrap;
  justify-content: space-around;
  margin-top: 0;
`

// filled buttons
export const Button = styled.button`
  border: none;
  border-radius: 5px;
  font-size: 1.25em;
  padding: 0.25rem 1rem;
  cursor: pointer;
  transition: opacity 0.2s ease;

  &:disabled {
    opacity: 0.25;
    cursor: not-allowed;
  }
`

export const GreenButton = styled(Button)`
  background-color: ${green};
  color: white;
`

export const BlueButton = styled(Button)`
  background-color: ${blue};
  color: white;
`

export const ContinueButton = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  border-radius: 25px;
  margin-top: auto;
  font-size: 0.9em;
  font-weight: 600;
  color: white;
  background-color: ${({color}) => color};

  @media only screen and (max-width: 320px) {
    font-size: 0.70em;
  }
`


// inverted buttons
export const InvertedButton = styled(Button)`
  color: ${({color}) => color};
  background-color: transparent;
  white-space: nowrap;
  border: 2px solid ${({color}) => color};
  border-radius: 5px;
  margin: 1rem 0;

  &:hover {
    color: ${({darkColor}) => darkColor};
    border: 2px solid ${({darkColor}) => darkColor};
  }
`

export const InvertedBlueButton = styled(InvertedButton)`
  color: ${blue};
  border: 2px solid ${blue};
  transition: all 0.2s ease-in;

  &:hover {
    color: ${darkBlue};
    border: 2px solid ${darkBlue};
  }
`

export const InvertedGrayButton = styled(InvertedButton)`
  color: ${gray};
  border: 2px solid ${gray};
  transition: all 0.2s ease-in;

  &:hover {
    color: ${darkGray};
    border: 2px solid ${darkGray};
  }
`
