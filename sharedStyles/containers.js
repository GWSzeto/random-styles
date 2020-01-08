import styled from 'styled-components'
import { offWhite } from './colorPalette'

const responsiveFontSize = (
  minFont, 
  maxFont, 
  minScreen = 320, 
  maxScreen = 1200, 
  units = 'px') => `
    calc(${minFont}${units} + ${maxFont - minFont} * 
    (100vw - ${minScreen}${units})/${maxScreen - minScreen})`

export const PageLayout = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-size: ${responsiveFontSize(18, 20)};
  font-family: 'Nunito Sans', 'sans-serif';
  overflow-y: scroll;
  background-color: ${offWhite};
`

export const OffWhitePageLayout = styled(PageLayout)`
  justify-content: flex-start;
  font-family: 'Montserrat', sans-serif;
  padding: 1rem;
  align-items: stretch;
  width: 100%;
`

export const Header = styled.div`
  display: flex;
`

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
`

export const Box = styled.div`
  display: flex;
  flex-flow: column nowrap;
  padding: 2rem;
  border-radius: 15px;
  /* background-color: white; */
  margin: 1rem;

  & > div {
    flex: 1 0 auto;
  }
`
