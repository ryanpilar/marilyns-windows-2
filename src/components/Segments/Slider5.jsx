import React from 'react';
import '../../assets/plugins/revolution/revolution-addons/typewriter/css/typewriter.css';
import '../../assets/plugins/revolution/revolution-addons/reveal/css/revolution.addon.revealer.css';
import '../../assets/plugins/revolution/revolution-addons/reveal/css/revolution.addon.revealer.preloaders.css';

class Slider5 extends React.Component {

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

        
        loadScript('./assets/js/rev-script-3.js');
        
       
    };


    render() {


        return (
            <>
                <div id="welcome_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="goodnews-header" data-source="gallery" style={{ background: '#eeeeee', padding: 0 }}>
                    <div id="slider-video" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.3.1">
                        <ul>
                            {/* SLIDE 4 */}
                            <li data-index="rs-905" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../assets/media/images/video2.jpg').default} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                {/* MAIN IMAGE */}
                                <img src={require('./../../assets/media/images/video2.jpg').default} alt="" data-lazyload="" data-bgposition="center center" data-bgfit="cover" data-bgparallax={4} className="rev-slidebg" data-no-retina="" />
                                {/* LAYERS */}
                                {/* BACKGROUND VIDEO LAYER */}
                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-901-layer-0" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                      {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                      ]" data-textalign="['left','left','left','left']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 1, backgroundColor: 'rgba(0, 0, 0, 0.6)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                    </div>
                                    <div className="rs-background-video-layer" data-forcerewind="on" data-volume="mute" data-videowidth="100%" data-videoheight="100%" data-videomp4={require('./../../assets/media/video/video2.mp4').default}data-videopreload="auto" data-videoloop="loop" data-aspectratio="16:9" data-autoplay="true" data-autoplayonlyfirsttime="false" />
                                    {/* LAYER NR. 4 [ for title ] */}
                                    <div className="tp-caption   tp-resizeme" id="slide-901-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-fontsize="['54','54','54','34']" data-lineheight="['64','64','64','44']" data-width="['700','700','700','90%']" data-height="['none','none','none','none']" 
                                    data-whitespace="['normal','normal','normal','normal']" data-typewriter='{"lines":" Modern is Using HTML5 and CSS3 , Modern is Fully Features Template , Modern is Fully Responsive ","enabled":"on","speed":"200","delays":"1%7C100","looped":"on",
                                    "cursorType":"one","blinking":"on","word_delay":"off","sequenced":"on","hide_cursor":"off",
                                    "start_delay":"500","newline_delay":"1000","deletion_speed":"20","deletion_delay":"1000",
                                    "blinking_speed":"500","linebreak_delay":"60","cursor_type":"one","background":"off"}' data-type="text" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+790&quot;,&quot;speed&quot;:1500,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-textalign="['center','center','center','center']" data-paddingtop="[5,5,5,5]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, whiteSpace: 'normal', fontWeight: 600, color: '#fff', borderWidth: 0, fontFamily: '"Poppins", sans-serif' }}>
                                        <div>Modern is Clean and Professional </div>
                                    </div>

                                    {/* Border Part */}
                                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-904-layer-8" 
                                 data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                 data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
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
                                data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgb(255,255,255)', borderStyle: 'solid', borderWidth: '0px 80px 80px 80px' }}> </div>


                            </li>
                        </ul>
                        <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }} />
                    </div>
                </div>
            </>
        );
    }
};

export default Slider5;