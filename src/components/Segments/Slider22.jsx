import React from 'react';
import { NavLink } from 'react-router-dom';
import SliderSingle from './SliderSingle'

class Slider22 extends React.Component {

    // componentDidMount() is invoked immediately after a component is mounted (inserted into the tree). 
    componentDidMount() {
        function loadScript(src) {

            return new Promise(function (resolve, reject) {
                var script = document.createElement('script');
                script.src = src;
                script.addEventListener('load', function () {
                    resolve();
                });
                script.addEventListener('error', function (e) {
                    reject(e);
                });
                document.body.appendChild(script);
                document.body.removeChild(script);
            })
        };

        loadScript('./assets/js/rev-script-1.js');

    };

    
    render() {
        

        const data = {
            
                slide1: {
                    image: require('./../../images/main-slider/slider1/roman-shades-kitchen.jpeg'),
                    heading: 'General',
                    largeSpan: 'A Custom Drapery Workroom',
                    smallSpan: 'Defining the exquisite art of custom design and couture window dressings.'
                },
                slide2: {
                    image: require('./../../images/main-slider/slider1/bedroom-bright.jpg'),
                    heading: 'General',
                    largeSpan: 'Natural plus modern.',
                    smallSpan: 'seed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                },
                // slide3: {
                //     image: require('./../../images/main-slider/slider1/kitchen-dinning-open-bright.jpg'),
                //     heading: 'General',
                //     largeSpan: 'Natural plus modern.',
                //     smallSpan: 'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                // },
                slide4: {
                    image: require('./../../images/main-slider/slider1/living-room-large.jpg'),
                    heading: 'General',
                    largeSpan: 'Natural plus modeern.',
                    smallSpan: 'sed do eiusemod tempor incididunt ut labore et dolore magna aliqua.'
                },
                // slide5: {
                //     image: require('./../../images/main-slider/slider1/open-woody-room.jpg'),
                //     heading: 'General',
                //     largeSpan: 'Natural pleus modern.',
                //     smallSpan: 'sed do eiusmeod tempor incididunt ut labore et dolore magna aliqua.'
                // },
                // slide6: {
                //     image: require('./../../images/main-slider/slider1/kitchen-dinning-open-bright.jpg'),
                //     heading: 'General',
                //     largeSpan: 'Natural plus modern.',
                //     smallSpan: 'sed do eiusmod tempor incidideunt ut labore et dolore magna aliqua.'
                // },
                // slide7: {
                //     image: require('./../../images/main-slider/slider1/sewing-machine-working.jpg'),
                //     heading: 'General',
                //     largeSpan: 'Natural plus modern.',
                //     smallSpan: 'sed do eiusmod tempor incidideunt ut labore et dolore magna aliqua.'
                // },
                // slide8: {
                //     image: require('./../../images/main-slider/slider1/spools-of-thread.png'),
                //     heading: 'General',
                //     largeSpan: 'Natural plus modern.',
                //     smallSpan: 'sed do eiusmod tempor incidideunt ut labore et dolore magna aliqua.'
                // },
                // slide9: {
                //     image: require('./../../images/main-slider/slider1/living-room-big-entrance.jpeg'),
                //     heading: 'General',
                //     largeSpan: 'Natural plus modern.',
                //     smallSpan: 'sed do eiusmod tempor incidideunt ut labore et dolore magna aliqua.'
                // },

        }
        const frameSpeed = 1600


        return (
            <>
              <div id="welcome_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="goodnews-header" data-source="gallery" style={{ background: '#eeeeee', padding: 0 }}>
                    <div id="welcome" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.3.1">
                        <ul>
                            {/* SLIDE 1 */}
                                
                            <li data-index="rs-902" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={data.slide1.image.default} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={frameSpeed} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                <SliderSingle 
                                    image={ data.slide1.image } 
                                    heading={ data.slide1.heading } 
                                    largeSpan={ data.slide1.largeSpan } 
                                    smallSpan={ data.slide1.smallSpan } 
                                    />
                            </li>
                            <li data-index="rs-903" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={data.slide1.image.default} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={frameSpeed} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                <SliderSingle 
                                    image={ data.slide2.image } 
                                    heading={ data.slide2.heading } 
                                    largeSpan={ data.slide2.largeSpan } 
                                    smallSpan={ data.slide2.smallSpan } 
                                    />
                            </li>
                            {/* <li data-index="rs-904" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={data.slide1.image.default} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={frameSpeed} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                <SliderSingle 
                                    image={ data.slide3.image } 
                                    heading={ data.slide3.heading } 
                                    largeSpan={ data.slide3.largeSpan } 
                                    smallSpan={ data.slide3.smallSpan } 
                                    />
                            </li> */}
                            <li data-index="rs-905" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={data.slide1.image.default} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={frameSpeed} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                <SliderSingle 
                                    image={ data.slide4.image } 
                                    heading={ data.slide4.heading } 
                                    largeSpan={ data.slide4.largeSpan } 
                                    smallSpan={ data.slide4.smallSpan } 
                                    />
                            </li>
                            {/* <li data-index="rs-906" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={data.slide1.image} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={frameSpeed} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                <SliderSingle 
                                    image={ data.slide5.image } 
                                    heading={ data.slide5.heading } 
                                    largeSpan={ data.slide5.largeSpan } 
                                    smallSpan={ data.slide5.smallSpan } 
                                    />
                            </li> */}
                            {/* <li data-index="rs-907" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={data.slide1.image} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={frameSpeed} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                <SliderSingle 
                                    image={ data.slide6.image } 
                                    heading={ data.slide6.heading } 
                                    largeSpan={ data.slide6.largeSpan } 
                                    smallSpan={ data.slide6.smallSpan } 
                                    />
                            </li> */}
                            {/* <li data-index="rs-908" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={data.slide1.image} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={frameSpeed} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                <SliderSingle 
                                    image={ data.slide7.image } 
                                    heading={ data.slide7.heading } 
                                    largeSpan={ data.slide7.largeSpan } 
                                    smallSpan={ data.slide7.smallSpan } 
                                    />
                            </li> */}
                            {/* <li data-index="rs-909" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={data.slide1.image} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={frameSpeed} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                <SliderSingle 
                                    image={ data.slide8.image } 
                                    heading={ data.slide8.heading } 
                                    largeSpan={ data.slide8.largeSpan } 
                                    smallSpan={ data.slide8.smallSpan } 
                                    />
                            </li> */}
                            {/* <li data-index="rs-9099" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={data.slide1.image} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={frameSpeed} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                <SliderSingle 
                                    image={ data.slide9.image } 
                                    heading={ data.slide9.heading } 
                                    largeSpan={ data.slide9.largeSpan } 
                                    smallSpan={ data.slide9.smallSpan } 
                                    />
                            </li> */}

                        </ul>
                        <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }} />
                    </div>
                </div>  
            </>
        );
    }
};

export default Slider22;