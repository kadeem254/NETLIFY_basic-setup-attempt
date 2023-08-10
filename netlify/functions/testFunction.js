require('dotenv').config()

exports.handler = async function (event, context) {
  const data = {
    function_message: "Sent from function",
    env_variable: `Held in .env file: ${process.env.SECRET_KEY}`
  }

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};