import axios from "axios";

export const createUser = async (username, email, birthday, password) => {
    console.log(username);
    try {
        await axios.post('http://localhost:8000/api/userCreation', {
          username: username,
          birthday: birthday,
          email: email,
          password: password,
        });
    }
    catch(e){console.log(e)}
    
}