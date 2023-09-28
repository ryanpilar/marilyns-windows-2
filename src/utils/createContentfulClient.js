import { createClient } from "contentful";

const createContentfulClient =  () => {

    const client = createClient({
        // space: process.env.REACT_APP_CONTENTFUL_SPACE,
        // accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
        space: '6puvtv0bf6bf',
        accessToken: 'BpFpx0SozPL0X73BTfhX470Vea4tMvgXy4GAR_h7hXE',
    });

    return client

}

export default createContentfulClient