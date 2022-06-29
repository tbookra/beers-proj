import React from 'react'
import {  Image, Modal } from 'semantic-ui-react'
import '../modal.css'

function BeerModal({children, itemData}) {
  const [open, setOpen] = React.useState(false)
  const { name, image_url, description,tagline, brewers_tips} = itemData
  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Image>{children}</Image>}
    >
      <Modal.Header>{name}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={image_url} wrapped />
        
        <Modal.Description>
            <h5 className='title'>{tagline}</h5>
          <p className='paragraf'>{description}</p>
          <h5 className='title'>TIPS:</h5>
          <p className='paragraf'>{brewers_tips}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
     
      </Modal.Actions>
    </Modal>
  )
}

export default BeerModal