import React from 'react';
import user from '../samples/user';
import { Card, Image } from 'semantic-ui-react';
import formattedDateDOM from '../utils/formattedDateDOM';

const UserPage = () => {
  const userDetails = user();

  console.log(userDetails);

  return (
    <div className="userPage">
      <h1>Profile</h1>
      <Card>
        <Image src={userDetails.picture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{userDetails.name}</Card.Header>
          <Card.Meta>
            has joined {userDetails.coloc_name} on{' '}
            {formattedDateDOM(userDetails.joined_date)}
            <br />
            Profile created on:
            {formattedDateDOM(userDetails.account_creationDate)}
          </Card.Meta>
          <Card.Description>
            email: {userDetails.email}
            <br />
            Number of credit: {userDetails.credit}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
};

export default UserPage;
