

import Components from "./Components";
import DynamicSitemap from "react-dynamic-sitemap";

export default function Sitemap(props) {
	return (
		<DynamicSitemap routes={Components} prettify={true} {...props}/>
	);
}


