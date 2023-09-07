const querystring = require("querystring")

module.exports.handler = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "Esto es un mensaje",
        input: event,
      },
      null,
      2
    ),
  };
};


module.exports.holaMundo = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Hola mundo  ${event.pathParameters.nombre}`,
        input: event,
      },
      null,
      2
    ),
  };
};


module.exports.crearUsuario = async (event) => {
  const body = querystring.parse(event["body"]);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: `Creando usuario  ${body.nombre}`,
      },
      null,
      2
    ),
  };
};


