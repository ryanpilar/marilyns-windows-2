import { useEffect, useLayoutEffect, useRef, useState } from "react";
import createContentfulClient from "../../utils/createContentfulClient";
import SliderSingle from "./SliderSingle";

const buildSizedUrl = (url, width) => {
  if (!url) {
    return url;
  }

  const separator = url.includes("?") ? "&" : "?";
  return `${url}${separator}w=${width}&fm=jpg&q=80`;
};

const buildSrcSet = (url) => [
  `${buildSizedUrl(url, 768)} 768w`,
  `${buildSizedUrl(url, 1280)} 1280w`,
  `${buildSizedUrl(url, 1920)} 1920w`,
].join(", ");

const getOrigin = (url) => {
  try {
    return new URL(url).origin;
  } catch (error) {
    return null;
  }
};

const Slider22 = () => {
  const [sliderList, setSliderList] = useState(false);
  const [frameSpeed, setFrameSpeed] = useState(1000);
  const hasLoadedScript = useRef(false);

  useEffect(() => {

    // contentful connect
    const client = createContentfulClient()

    // contentful get data
    const getAllEntries = async () => {
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
    if (!sliderList || hasLoadedScript.current) {
      return;
    }

    const heroImageUrl =
      sliderList[0]?.fields?.cloudinaryImage?.[0]?.secure_url;

    if (heroImageUrl) {
      const heroOrigin = getOrigin(heroImageUrl);
      if (heroOrigin) {
        if (!document.querySelector(`link[data-preconnect="${heroOrigin}"]`)) {
          const link = document.createElement("link");
          link.rel = "preconnect";
          link.href = heroOrigin;
          link.crossOrigin = "";
          link.setAttribute("data-preconnect", heroOrigin);
          document.head.appendChild(link);
        }
      }

      const preloadHref = buildSizedUrl(heroImageUrl, 1920);
      if (!document.querySelector(`link[data-hero-preload="${preloadHref}"]`)) {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "image";
        link.href = preloadHref;
        link.setAttribute("imagesrcset", buildSrcSet(heroImageUrl));
        link.setAttribute("imagesizes", "100vw");
        link.setAttribute("fetchpriority", "high");
        link.setAttribute("data-hero-preload", preloadHref);
        document.head.appendChild(link);
      }
    }

    const revStyles = [
      "/assets/css/rev-slider-4.css",
      "/assets/plugins/revolution/revolution/css/settings.css",
      "/assets/plugins/revolution/revolution/css/navigation.css",
    ];

    const revScripts = [
      "/assets/plugins/revolution/revolution/js/jquery.themepunch.tools.min.js",
      "/assets/plugins/revolution/revolution/js/jquery.themepunch.revolution.min.js",
      "/assets/plugins/revolution/revolution/js/extensions/revolution-plugin.js",
      "/assets/js/rev-script-1.js",
    ];

    function loadStyle(href) {
      if (document.querySelector(`link[data-rev-asset="${href}"]`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.type = "text/css";
      link.href = href;
      link.setAttribute("data-rev-asset", href);
      document.head.appendChild(link);
    }

    function loadScript(src) {
      return new Promise(function (resolve, reject) {
        if (document.querySelector(`script[data-rev-asset="${src}"]`)) {
          resolve();
          return;
        }
        const script = document.createElement("script");
        script.src = src;
        script.async = false;
        script.defer = false;
        script.setAttribute("data-rev-asset", src);
        script.addEventListener("load", function () {
          resolve();
        });
        script.addEventListener("error", function (e) {
          reject(e);
        });
        document.body.appendChild(script);
      });
    }

    if (!window.__revAssetsPromise) {
      revStyles.forEach(loadStyle);
      window.__revAssetsPromise = revScripts.reduce(
        (promise, src) => promise.then(() => loadScript(src)),
        Promise.resolve()
      );
    }

    window.__revAssetsPromise
      .then(() => {
        if (typeof window.initWelcomeSlider === "function") {
          window.initWelcomeSlider();
        }
      })
      .finally(() => {
        hasLoadedScript.current = true;
      });
  }, [sliderList]);

  return (
    <div
      id="welcome_wrapper"
      className="rev_slider_wrapper fullscreen-container hero-slider"
      data-alias="goodnews-header"
      data-source="gallery"
      style={{ background: "#eeeeee", padding: 0 }}
    >
      {sliderList ? (
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
                isPriority={true}
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
                isPriority={false}
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
                isPriority={false}
              />
            </li>
          </ul>

          <div
            className="tp-bannertimer tp-bottom"
            style={{ visibility: "hidden !important" }}
          />
        </div>
      ) : (
        <div
          className="hero-placeholder skeleton"
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default Slider22;
