/**
    This code exports a function called "streamToBuffer" that takes in a single argument 
    called "stream". The function returns a promise that will resolve to a Buffer object 
    that contains all the data from the stream.   

    The function creates an empty array to store the data from the stream, and sets up 
    event listeners on the stream object to handle incoming data, errors, and the end of 
    the stream. 
    
    If an error occurs while reading the stream, the promise is rejected with the error 
    object. 
    
    As data comes in, the function checks the type of the data and pushes it into 
    the array as a buffer object using the "Buffer.from()" method if it is of type 
    "string", or simply pushes it to the array if it is already a buffer object.
    
    When the stream has finished reading, the function concatenates all the buffer objects 
    in the array into a single buffer object and resolves the promise with it. Finally, 
    the function is exported as a default export to be used in other modules.

    @param stream 
    @returns a promise that will resolve to a Buffer object that contains all the data from the stream
*/

const streamToBuffer = async (stream) => {

  return new Promise((resolve, reject) => {

    const chunks = [];

    // Set up event listeners on the "stream" object.
    stream.on("error", reject);

    // Triggered each time a chunk of data is available from the stream.
    stream.on("data", (chunk) => {

      if (typeof chunk === "string") {
        chunks.push(Buffer.from(chunk));
      } else {
        chunks.push(chunk);
      }
    });

    // When the stream has read all data, "chunks"is concatenated into a single Buffer object 
    stream.on("end", () => resolve(Buffer.concat(chunks)));
  });
};

export default streamToBuffer;
