//helpers are used to help us authenticate user or encrypt the password
import crypto from 'crypto';

const SECRET= 'Manisha-REST-Api';

export const random = ()=> crypto.randomBytes(128).toString('base64');
export const authentication = (salt: string, password: string)=>{
    return crypto.createHmac('sha256',[salt,password].join('/')).update(SECRET).digest('hex');
}
