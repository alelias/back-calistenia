const jwt = require('jwt-simple')
const moment = require('moment')

const checkToken = (req, res, next) => {

    if(!req.headers['user-token']){
        return res.json({error: 'Necesitas incluir el user-token en la cabecera'})
    }

    const userToken = req.headers['user-token']

    try{
        payload = jwt.decode(userToken, 'secreto')
    } catch(err){
        return res.json({error: 'El token es incorrecto'})
    }
    
    
    if(payload.expiredAt < moment().unix()){
        return res.json({error: 'Token expirado'})
    }
    
    req.usuarioid = payload.usuarioId;

    next();
} 
module.exports = {
    checkToken
}