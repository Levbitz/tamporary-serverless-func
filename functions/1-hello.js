//domain/.netlify/functions/1-hello

// const person = {
//     name:'sam'
// }

exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    body: "my first Levson function",
  };
};
