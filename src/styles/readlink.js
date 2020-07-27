import styled from 'styled-components'
import { Link } from 'gatsby'

const ReadLink = styled(Link)`
  display: inline-block;
  font-size: 1.4rem;
  text-decoration: none;
  &::after {
    content: ' ›';
    font-size: 1.6rem;
  }
`

export default ReadLink;