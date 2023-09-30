import axios from "axios";

export const getByUsername = async (username) => {
    console.log(username);
  try {
        const res = await axios.get('http://localhost:8000/api/user', {
         params: {username: username}
        });
    return res.data[0]
    }
    catch(e){console.log(e)}
    
}