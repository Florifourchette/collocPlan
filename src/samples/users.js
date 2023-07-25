import React from 'react';

const users = () => {
  return [
    {
      user_id: 3,
      picture:
        'https://fastly.picsum.photos/id/841/100/100.jpg?hmac=wtFNY_KOGjfP2ZKLODUvsvEb8cxIKmOahXi_DypkLyI',
      username: 'Flo',
      user_birthday: new Date(1993, 3, 19, 0, 0),
      credit: 0,
      joined_date: new Date(2023, 4, 13, 0, 0),
    },
    {
      user_id: 4,
      picture:
        'https://fastly.picsum.photos/id/311/100/100.jpg?hmac=JDd_pgM7-jgyaNAIQjmAJTc-ZvN8jeEFoNWOWmxO46o',
      username: 'user_2',
      user_birthday: new Date(1996, 7, 13, 0, 0),
      joined_date: new Date(2022, 1, 12, 0, 0),
      credit: 0,
    },
    {
      user_id: 5,
      picture:
        'https://fastly.picsum.photos/id/513/100/100.jpg?hmac=tke5mbNUN6LsYfMYi6t3-h-vXMge6NJC1soADTeKImg',
      username: 'user_3',
      user_birthday: new Date(2000, 12, 9, 0, 0),
      joined_date: new Date(2021, 2, 28, 0, 0),
      credit: 0,
    },
  ];
};

export default users;
