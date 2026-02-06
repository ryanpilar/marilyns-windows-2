import { createClient } from "contentful";

const createContentfulClient =  () => {

    const client = createClient({
        space: process.env.REACT_APP_CONTENTFUL_SPACE,
        accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,

    });

    return client

}

export default createContentfulClient
