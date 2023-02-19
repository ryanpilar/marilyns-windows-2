
import AboutImage2 from "./AboutImage2";

const AboutImages2 = ( {images} ) => {

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
