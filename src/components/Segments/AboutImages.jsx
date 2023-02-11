
import AboutImage from "./AboutImage";

const AboutImages = ({ images }) => {



  // const images = [
  //   { image: require("./../../images/blog/default/thum3.jpg") },
  //   { image: require("./../../images/blog/default/thum6.jpg") },
  //   { image: require("./../../images/blog/default/thum7.jpg") },
  //   { image: require("./../../images/blog/default/thum8.jpg") },
  // ];
  return (
    <div className="wt-post-media clearfix m-b30">
      <div className="row">
        <div className=" ">
          {images.map((item, index) => (

            <AboutImage image={item} key={index}/>

          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutImages;
