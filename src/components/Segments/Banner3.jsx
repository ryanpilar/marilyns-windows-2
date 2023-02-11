import React from 'react'

const Banner3 = ({ bgimage, title, posLeft, posRight }) => {
    // console.log('bgimg', bgimage)
  return (
    <>
    
      <div
        className="wt-bnr-inr3 overlay-wraper bg-parallax bg-top-center "
        // data-stellar-background-ratio="0.5"
        // style={{ backgroundImage: "url(" + bgimage + ")" }}
      >
        <div className="overlay-main bg-black opacity-01 " />
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
  )
}

export default Banner3