const querystring = require("querystring")
const { Worker, isMainThread, parentPort, workerData } = require('worker_threads'); //modulo usado para hacer multi-threaded
const os = require('os');

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




//chequea si el numero pasado como parametro es un primo
const checkPrime = num => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i++) if (num % i === 0) return false;
  return num > 1;
};


module.exports.genPrimos = async (event) => {
  const startTime = Date.now();

  const N = event.pathParameters.N;
  console.log(N)


  const maxNumber = N; // Where the loop should stop

  let primeNumbers = [];


  for (let index = 0; index < maxNumber; index++) {
    if (checkPrime(index)) {
      primeNumbers.push(index);
    }
  }
  const endTime = Date.now();




  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        primeList: primeNumbers,
        time: (endTime - startTime) / 1000
      },
      null,
      2
    ),
  };
};






