/**
    We're creating a new Contentful client using the contentful package. 

    We're then calling the getEntries() method to fetch all entries of type blogPosts from 
    Contentful. We're then mapping over the returned entries and extracting the necessary 
    data, 
    
 */

const streamToBuffer = async (stream) => {

  return new Promise((resolve, reject) => {

    const chunks = [];
    stream.on("error", reject);
    stream.on("data", (chunk) => {
      if (typeof chunk === "string") {
        chunks.push(Buffer.from(chunk));
      } else {
        chunks.push(chunk);
      }
    });
    stream.on("end", () => resolve(Buffer.concat(chunks)));
  
});
};

export default streamToBuffer;
