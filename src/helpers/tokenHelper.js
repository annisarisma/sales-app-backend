import jwt from 'jsonwebtoken';

const generateAuthToken = (user) => {
  const payload = {
    usr_id: user.usr_id,
    username: user.username,
    email: user.email
  };

  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });
};

export default { generateAuthToken };
