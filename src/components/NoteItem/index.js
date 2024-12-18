// Write your code here
import {ListItem, OutputTitle, OutputDesc} from './styledComponents'

const NoteItem = props => {
  const {details} = props
  const {title, note} = details
  return (
    <ListItem>
      <OutputTitle>{title}</OutputTitle>
      <OutputDesc>{note}</OutputDesc>
    </ListItem>
  )
}
export default NoteItem
