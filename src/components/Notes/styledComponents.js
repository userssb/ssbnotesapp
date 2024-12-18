// Style your elements here
import styled from 'styled-components'

export const BgCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`

export const Title = styled.h1`
  color: #334155;
  font-family: 'Bree Serif';
`

export const MainCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  box-shadow: 0 2px 5px 5px #aab8c8;
  border-radius: 10px;
  padding: 20px;
  width: 60%;
`

export const TitleInput = styled.input`
  color: #475569;
  width: 350px;
  margin: 5px;
  border-style: none;
  selection-border: none;
  outline: 0;
`

export const NotesInput = styled.textarea`
  color: #475569;
  width: 75%;
  width: 350px;
  margin: 5px;
  border-style: none;
  outline: 0;
  border-width: 0px;
`
export const BtnAdd = styled.button`
  display: flex;
  background-color: #4c63b6;
  color: #ffffff;
  border-radius: 5px;
  align-self: flex-end;
  border-style: none;
  padding: 5px;
  width: 50px;
  margin-top: 20px;
`

export const OutputCont = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  list-style-type: none;
  align-self: flex-start;
  width: 60%;
`
export const OutputCont1 = styled.div``

export const Imagee = styled.img`
  height: 100px;
  width: 100px;
  margin-top: 40px;
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
`
