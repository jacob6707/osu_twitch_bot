const Joi = require('joi');

function validateRequest(request) {
    const schema = Joi.object({
        username: Joi.string().min(4).required(),
        mapId: Joi.number().required()
    });
                                    
    return schema.validate(request);
}

module.exports = validateRequest;