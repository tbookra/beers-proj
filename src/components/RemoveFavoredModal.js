import React from 'react'
import {  useDispatch } from 'react-redux';
import { Button,  Modal } from 'semantic-ui-react'
import {clearList} from '../redux/actions/productActions'
import '../modal.css'


function RemoveFavoredModal() {
  const [open, setOpen] = React.useState(false)
  const dispatch = useDispatch()

  const handleConfirmClick = () => {
    console.log("clicked");
    setOpen(false)
    dispatch(clearList())
  }

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>Clear All Favored</Button>}
    >
      <Modal.Header>Attention!</Modal.Header>
      <Modal.Content >
        <Modal.Description>
          <p className='paragraf'>Are you sure?</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button onClick={() => setOpen(false)}>Discard</Button>
        <Button onClick={() => handleConfirmClick()} positive>
          Confirm
        </Button>
      </Modal.Actions>
    </Modal>
  )
}

export default RemoveFavoredModal