
import AboutImage2 from "./AboutImage2";

const AboutImages2 = ( {images} ) => {

// console.log('images', images)

  // const images = [
  //   { image: require("./../../images/blog/default/thum3.jpg") },
  //   { image: require("./../../images/blog/default/thum6.jpg") },
  //   // { image: require("./../../images/blog/default/thum7.jpg") },
  //   // { image: require("./../../images/blog/default/thum8.jpg") },
  // ];
  return (
    <div className=" ">
      <div className="row">
        <div className=" ">
          {images.images.map((item, index) => (

            <AboutImage2 image={item} key={index}/>

          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutImages2;
