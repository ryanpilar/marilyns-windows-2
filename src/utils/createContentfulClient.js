import pkg from "contentful";

const { createClient } = pkg;

const createContentfulClient =  () => {

    const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE,
        accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,

    });

    return client

}

export default createContentfulClient
