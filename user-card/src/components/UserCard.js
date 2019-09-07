import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

function UserCard(props){
    return(
      <Card>
      <Image src={props.user.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{props.user.name}</Card.Header>
        <Card.Meta>{`Joined in ${props.user.created_at}`}</Card.Meta>
        <Card.Description>
         <p>{props.user.bio}</p>
         <p>{props.user.location}</p>
         <p>{`${props.user.followers} Followers`}</p>
         <p>{`${props.user.following} Following`}</p>
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          <a href={props.user.html_url}>Github Profile</a>
        </a>
      </Card.Content>
    </Card>
    )
}

export default UserCard;