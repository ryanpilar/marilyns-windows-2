import React from "react";
// import { NavLink } from "react-router-dom";


const Banner = ({ bgimage, title, posLeft, posRight }) => {
  return (
    <>
      <div
        className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center "
        // className="wt-bnr-inr overlay-wraper bg-parallax bg-top-center "
        data-stellar-background-ratio="0.5"
        style={{ backgroundImage: "url(" + bgimage + ")" }}
      >
        <div className="overlay-main bg-black opacity-04 " />
        {/* <div className='overlay-secondary' /> */}
        {/* <div> */}
        {/* <div className="m-a10 p-a15 bdr-1 bdr-primary"> */}

        <div className={`container ${posLeft ? `flex-bottom-left` : ''} ${posRight ? `flex-bottom-right` : ''}` }>
          {title && (
            <>
              <div className={`${posLeft ? 'text-left' : ''} ${posRight ? 'text-right' : ''}`}>
                <h1 className="text-white hatton text-uppercase one-word-per-line m-b5 p-b5">
                  {title}
                </h1>
                {/* <div className="wt-separator-outer text-right">
                    <div className="wt-separator2 bg-white" />
                  </div> */}
              </div>
            </>
          )}
          {/* </div> */}
        </div>

        {/* </div> */}
        {/* </div> */}
      </div>
    </>
  );
};

export default Banner;

// class Banner extends React.Component {
//   render() {
//     return (
//       <>

//       </>
//     );
//   }
// }

// export default Banner;
