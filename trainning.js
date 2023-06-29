const jwt = require('jsonwebtoken');

const  data = {
    username:'thaokhanh'
}

const token = jwt.sign(data,'123456');

const token2 = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6InRoYW9raGFuaCIsImlhdCI6MTY4Mzc5NjQ4OH0.1MPefvrui2JnfpnPwpn-x8eam-7yADXi7n8UShj8Q_4'

const data2 = jwt.verify(token2,'123456')
console.log(token);
console.log(data2);