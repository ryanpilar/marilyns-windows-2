import React from "react";
import { useLayoutEffect } from "react";
// import { NavLink } from 'react-router-dom';

const SliderSingle = ({ image, heading, largeSpan, smallSpan }) => {
  useLayoutEffect(() => {
    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        var script = document.createElement("script");
        script.src = src;
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
        document.body.removeChild(script);
      });
    }

    loadScript("./assets/js/rev-script-1.js");
  }, []);

  return (
    <>
      <img
        src={image[0].secure_url}
        // alt={image[0].context.custom.alt}
        // data-pin-description={image[0].context.custom.dataPin}
        // caption={image[0].context.custom.caption}
        // data-lazyload={image[0].secure_url}
        data-bgposition="center center"
        data-bgfit="cover"
        data-bgparallax={4}
        className="rev-slidebg"
        data-no-retina
        width="1920"
        height="900"
      />

      {/* LAYERS */}

      {/* LAYER NR. 8 */}
      {/* Border Part */}
      <div
        className="tp-caption tp-shape tp-shapewrapper "
        id="slide-902-layer-8"
        data-x="['center','center','center','center']"
        data-hoffset="['0','0','0','0']"
        data-y="['middle','middle','middle','middle']"
        data-voffset="['0','0','0','0']"
        data-width="full"
        data-height="full"
        data-whitespace="nowrap"
        data-visibility="['on','on','off','off']"
        data-type="shape"
        data-basealign="slide"
        data-responsive_offset="off"
        data-responsive="off"
        data-frames='[{"delay":50,"speed":100,"frame":"0","from":"opacity:0;","to":"o:1;","ease":"Power3.easeInOut"},{"delay":"wait","speed":1000,"frame":"999","to":"opacity:0;","ease":"Power3.easeIn"}]'
        data-textalign="['inherit','inherit','inherit','inherit']"
        data-paddingtop="[0,0,0,0]"
        data-paddingright="[0,0,0,0]"
        data-paddingbottom="[0,0,0,0]"
        data-paddingleft="[0,0,0,0]"
        style={{
          zIndex: 5,
          backgroundColor: "rgba(170, 203, 226, .15)",
          borderColor: "rgb(255,255,255)",
          borderStyle: "solid",
          borderWidth: "0px 80px 80px 80px",
        }}
      >
        {" "}
      </div>

      <div
        className="tp-bannertimer tp-bottom"
        style={{ visibility: "hidden !important" }}
      />
    </>
  );
};
// };

export default SliderSingle;
