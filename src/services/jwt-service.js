import jwt from 'jsonwebtoken';

const gerarToken = (user) =>
    jwt.sign(user, process.env.JWT_SECRET, {expireIn : '1d'});

const verifyToken = (token) =>
    jwt.verify(token, process.env.JWT_SECRET);

export default {
    gerarToken,
    verifyToken
};