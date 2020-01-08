import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const Title = styled.div`
  font-size: 1.5em;
  font-weight: 700;
`

export const BoldTitle = styled(Title)` 
  font-weight: 700;
`

export const SubText = styled.div`
  color: #878A8C;
`

export const SmallSubText = styled(SubText)`
  font-size: 0.75em;
  margin-bottom: 2rem;
`

export const Clickable = styled(Link)`
  color: #80A5D6;

  &:hover {
    text-decoration: none;
    color: #80A5D6;
  }
`

export const SmallClickable = styled(Clickable)`
  font-size: 0.85em;
`
