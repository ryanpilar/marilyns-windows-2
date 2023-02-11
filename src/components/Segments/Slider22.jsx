import React from "react";
import { useEffect, useState, useLayoutEffect } from "react";
import { createClient } from "contentful";
import SliderSingle from "./SliderSingle";

const Slider22 = () => {
  const [sliderList, setSliderList] = useState(false);
  const [frameSpeed, setFrameSpeed] = useState(1000);
  const client = createClient({
    // contentful connect
    space: process.env.REACT_APP_CONTENTFUL_SPACE,
    accessToken: process.env.REACT_APP_CONTENTFUL_TOKEN,
  });

  useEffect(() => {
    const getAllEntries = async () => {
      // contentful get data
      try {
        await client
          .getEntries({ content_type: "slider" })
          .then((allEntries) => {
            setSliderList(allEntries.items);
          });
      } catch (error) {
        console.log(
          "this error arose from the client.getEntries() call to contentful"
        );
      }
    };

    getAllEntries();
  }, []);

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
      {sliderList && (
        <div
          id="welcome_wrapper"
          className="rev_slider_wrapper fullscreen-container"
          data-alias="goodnews-header"
          data-source="gallery"
          style={{ background: "#eeeeee", padding: 0 }}
        >
          <div
            id="welcome"
            className="rev_slider fullscreenbanner"
            style={{ display: "none" }}
            data-version="5.4.3.1"
          >
            <ul>
              {/* SLIDE 1 */}

              <li
                data-index="rs-902"
                data-transition="fadethroughdark"
                data-slotamount="default"
                data-hideafterloop={0}
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="default"
                data-thumb={sliderList[0].fields.cloudinaryImage[0].secure_url}
                data-rotate={0}
                data-fstransition="fade"
                data-fsmasterspeed={frameSpeed}
                data-fsslotamount={7}
                data-saveperformance="off"
                data-title
                data-param1
                data-param2
                data-param3
                data-param4
                data-param5
                data-param6
                data-param7
                data-param8
                data-param9
                data-param10
                data-description
              >
                <SliderSingle
                  image={sliderList[0].fields.cloudinaryImage}
                  heading={sliderList[0].fields.heading}
                  largeSpan={sliderList[0].fields.largeSpan}
                  smallSpan={sliderList[0].fields.smallSpan}
                />
              </li>
              {/* SLIDER #2 */}
              <li
                data-index="rs-903"
                data-transition="fadethroughdark"
                data-slotamount="default"
                data-hideafterloop={0}
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="default"
                data-thumb={sliderList[1].fields.cloudinaryImage[0].secure_url}
                data-rotate={0}
                data-fstransition="fade"
                data-fsmasterspeed={frameSpeed}
                data-fsslotamount={7}
                data-saveperformance="off"
                data-title
                data-param1
                data-param2
                data-param3
                data-param4
                data-param5
                data-param6
                data-param7
                data-param8
                data-param9
                data-param10
                data-description
              >
                <SliderSingle
                  image={sliderList[1].fields.cloudinaryImage}
                  heading={sliderList[1].fields.heading}
                  largeSpan={sliderList[1].fields.largeSpan}
                  smallSpan={sliderList[1].fields.smallSpan}
                />
              </li>
              {/* SLIDER #3 */}
              <li
                data-index="rs-904"
                data-transition="fadethroughdark"
                data-slotamount="default"
                data-hideafterloop={0}
                data-hideslideonmobile="off"
                data-easein="default"
                data-easeout="default"
                data-masterspeed="default"
                data-thumb={sliderList[2].fields.cloudinaryImage[0].secure_url}
                data-rotate={0}
                data-fstransition="fade"
                data-fsmasterspeed={frameSpeed}
                data-fsslotamount={7}
                data-saveperformance="off"
                data-title
                data-param1
                data-param2
                data-param3
                data-param4
                data-param5
                data-param6
                data-param7
                data-param8
                data-param9
                data-param10
                data-description
              >
                <SliderSingle
                  image={sliderList[2].fields.cloudinaryImage}
                  heading={sliderList[2].fields.heading}
                  largeSpan={sliderList[2].fields.largeSpan}
                  smallSpan={sliderList[2].fields.smallSpan}
                />
              </li>
            </ul>

            <div
              className="tp-bannertimer tp-bottom"
              style={{ visibility: "hidden !important" }}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Slider22;
