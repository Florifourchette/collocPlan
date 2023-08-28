import React, { useState } from 'react';
import collocs from '../samples/collocs';
import { Card, Image } from 'semantic-ui-react';
import { List } from 'semantic-ui-react';

const colocation = collocs();

const Home = () => {
  console.log(colocation);
  console.log(colocation.coloc_CreationDate);
  const [showDetails, setShowDetails] = useState(false);

  const handleClick = () => {
    setShowDetails((prev) => !prev);
  };

  const formattedDate = (date) => {
    return `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  };

  return (
    <div className="home">
      <h1>Your colocation</h1>
      <Card>
        <Image src={colocation.picture} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{colocation.name}</Card.Header>
          <Card.Meta>
            Created on:
            {formattedDate(colocation.coloc_CreationDate)}
          </Card.Meta>
          <button onClick={handleClick}>
            {showDetails ? 'Show less' : 'Show more'}
          </button>
        </Card.Content>
        <Card.Description>
          <List selection verticalAlign="middle">
            {showDetails ? (
              colocation.flatmates.map((user) => (
                <List.Item>
                  <Image avatar src={user.picture} />
                  <List.Content>
                    <List.Header>{user.username}</List.Header>
                    <List.Description>
                      <p>
                        joined the flat on{' '}
                        {formattedDate(user.joined_date)}
                      </p>
                      <p>
                        {' '}
                        birthday:{formattedDate(user.user_birthday)}
                      </p>
                      <p> credit:{user.credit}</p>
                    </List.Description>
                  </List.Content>
                </List.Item>
              ))
            ) : (
              <></>
            )}
          </List>
        </Card.Description>
      </Card>
    </div>
  );
};

export default Home;
