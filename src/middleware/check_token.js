import jwtService from "../services/jwt-service.js";

function check_token(req, res, next) {
    const auth_header = req.headers['authorization']

    const token = auth_header && auth_header.split(' ')[1]

    if(!token) {
        return res.status(401).json('Acesso negado')
    }

    try {
        req.user = jwtService.verifyToken(token)
    } catch (error) {
        res.status(401).json("token invalido")
    }
    next()
}

export default check_token