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
