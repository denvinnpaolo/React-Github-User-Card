import _ from 'lodash'
import React from 'react'
import { Button, Header, Icon, Image, Modal } from 'semantic-ui-react'

const RepoModal = (props) => (
  <Modal trigger={<Button>Repository</Button>}>
    <Modal.Header>Profile Picture</Modal.Header>
    <Modal.Content image scrolling>
      <Image size='medium' src='/images/wireframe/image.png' wrapped />

      <Modal.Description>
        <Header>Modal Header</Header>
        {/* {props.user.repos_url.map(repo=>{
            return<p>{repo}</p>
        })} */}
      </Modal.Description>
    </Modal.Content>
    <Modal.Actions>
      <Button primary>
        Proceed <Icon name='chevron right' />
      </Button>
    </Modal.Actions>
  </Modal>
)

export default RepoModal