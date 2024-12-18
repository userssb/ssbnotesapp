// Style your elements here
import styled from 'styled-components'

export const ListCont = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  width: 50%;
`

export const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 10px;
  list-style-type: none;
  margin: 10px;
  border: solid 1px #aab8c8;
  padding: 5px;
  min-width: 120px;
`
export const OutputTitle = styled.h1`
  font-family: 'Bree Serif';
  font-size: 18px;
  font-weight: 500;
  color: #1e293b;
`

export const OutputDesc = styled.p`
  font-family: 'Bree Serif';
  font-size: 12px;
  color: #1e293b;
  // align-self:flex-start;
`
