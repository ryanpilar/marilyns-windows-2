import React from 'react';
import { NavLink } from 'react-router-dom';

class Slider extends React.Component {

    componentDidMount(){
        function loadScript(src) {
           
          return new Promise(function(resolve, reject){
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
        
       
        return (
            <>
                <div id="welcome_wrapper" className="rev_slider_wrapper fullscreen-container" data-alias="goodnews-header" data-source="gallery" style={{ background: '#eeeeee', padding: 0 }}>
                        <div id="welcome" className="rev_slider fullscreenbanner" style={{ display: 'none' }} data-version="5.4.3.1">
                            <ul>
                                {/* SLIDE 1 */}
                                <li data-index="rs-902" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../images/main-slider/slider1/slide1.jpg').default} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src={require('./../../images/main-slider/slider1/slide1.jpg').default} alt="" data-lazyload={require('./../../images/main-slider/slider1/slide1.jpg').default} data-bgposition="center center" data-bgfit="cover" data-bgparallax={4} className="rev-slidebg" data-no-retina />
                                    {/* LAYERS */}
                                    {/* BACKGROUND VIDEO LAYER */}
                                    {/* LAYER NR. 1 */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="rrzb_902-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                          {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                          ]" data-textalign="['left','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 4, backgroundColor: 'rgba(0, 0, 0, 0.2)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                    </div>
                                    <div id="rrzb_902" className="rev_row_zone rev_row_zone_middle" style={{ zIndex: 7 }}>
                                        {/* Content Block */}
                                        {/* LAYER NR. 1 */}
                                        <div className="tp-caption  " 
                                        id="slide-902-layer-1" 
                                        data-x="['left','center','center','center']" 
                                        data-hoffset="['0','0','0','0']" 
                                        data-y="['bottom','bottom','bottom','bottom']" 
                                        data-voffset="['0','0','0','0']" 
                                        data-width="none" 
                                        data-height="none" 
                                        data-whitespace="nowrap" 
                                        data-type="row" 
                                        data-columnbreak={3} data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" 
                              data-marginbottom="[50,60,40,50]" 
                              data-marginleft="[0,0,0,0]" 
                              data-textalign="['center','center','center','center']" 
                              data-paddingtop="[0,0,0,0]" 
                              data-paddingright="[0,0,0,0]" 
                              data-paddingbottom="[0,0,0,0]" 
                              data-paddingleft="[0,0,0,0]" 
                              style={{ zIndex: 7, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 0, fontWeight: 400, color: '#ffffff', letterSpacing: 0 }}>
                                            {/* LAYER NR. 2 */}
                                            <div className="tp-caption  " 
                                            id="slide-902-layer-2" 
                                            data-x="['center','center','center','center']" 
                                            data-hoffset="['0','0','0','0']" 
                                            data-y="['top','top','top','top']" 
                                            data-voffset="['0','0','0','0']" 
                                            data-width="none" 
                                            data-height="none" data-whitespace="nowrap" data-type="column" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;}]" data-columnwidth="100%" data-verticalalign="top" 
                                      data-margintop="[0,0,0,0]" 
                                      data-marginright="[0,0,0,0]" 
                                      data-marginbottom="[0,0,0,0]" 
                                      data-marginleft="[0,0,0,0]" 
                                      data-textalign="['center','center','center','center']" 
                                      data-paddingtop="[0,0,0,0]" 
                                      data-paddingright="[0,0,0,0]" 
                                      data-paddingbottom="[0,0,0,0]" 
                                      data-paddingleft="[0,0,0,0]" style={{ zIndex: 8, width: '100%' }}>
                                                {/* LAYER NR. 3 */}
                                                <div className="tp-caption   tp-resizeme" id="slide-902-layer-3" data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','bottom','bottom','bottom']" data-voffset="['0','260','250','190']" data-width="none" data-height="none" data-whitespace="['normal','nowrap','nowrap','nowrap']" data-type="text" data-basealign="slide" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:&quot;+490&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['center','inherit','inherit','inherit']" data-paddingtop="[5,5,5,5]" data-paddingright="[5,5,5,5]" data-paddingbottom="[5,5,5,5]" data-paddingleft="[5,5,5,5]" style={{ zIndex: 10, whiteSpace: 'normal', fontSize: 18, lineHeight: 0, fontWeight: 700, color: '#fff', letterSpacing: 3, display: 'inline-block' }}>
                                                    GENERAL
                                                </div>
                                                {/* LAYER NR. 4 */}
                                                <div className="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-902-layer-4" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="full" data-height={15} data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, display: 'block', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                </div>
                                                {/* LAYER NR. 5 */}
                                                <div className="tp-caption   tp-resizeme  tp-linkmod" id="slide-902-layer-5" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','bottom','bottom','bottom']" data-voffset="['0','170','140','120']" data-fontsize="['60','60','60','40']" data-lineheight="['60','60','60','40']" data-width="['900','700','700','400']" data-height="none" data-whitespace="normal" data-type="text" data-actions="" data-basealign="slide" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:&quot;+590&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                          {&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgb(255,255,255);&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[5,5,5,5]" data-paddingbottom="[10,10,10,10]" data-paddingleft="[5,5,5,5]" style={{ zIndex: 11, whiteSpace: 'normal', fontWeight: 600, color: '#fff', letterSpacing: 2, display: 'inline-block', textDecoration: 'none', textTransform: 'capitalize' }}>Virtually Build Your House</div>
                                                {/* LAYER NR. 6 */}
                                                <div className="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-902-layer-6" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="full" data-height={15} data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 9, display: 'block', backgroundColor: 'rgba(0, 0, 0, 0)' }}> </div>
                                                {/* LAYER NR. 7 */}
                                                <div className="tp-caption   tp-resizeme" id="slide-902-layer-7" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','bottom','bottom','bottom']" data-voffset="['0','100','80','70']" data-width="['none','460','460','400']" data-height="none" data-whitespace="normal" data-type="text" data-basealign="slide" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:&quot;+690&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" 
                                          data-marginbottom="[0,0,0,0]" 
                                          data-marginleft="[0,0,0,0]"
                                          data-fontsize="['18','18','18','18']"
                                          data-lineheight="['24','24','24','24']" 
                                          data-textalign="['center','center','center','center']" 
                                          data-paddingtop="[5,5,5,5]" 
                                          data-paddingright="[5,5,5,5]" 
                                          data-paddingbottom="[5,5,5,5]" 
                                          data-paddingleft="[5,5,5,5]" 
                                          style={{ zIndex: 12, whiteSpace: 'normal', fontWeight: 400, color: '#fff', letterSpacing: 0, display: 'inline-block' }}>
                                                    Excepteur sint occaecat cupidatat non proident laborum.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* LAYER NR. 8 */}
                                    {/* Border Part */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-902-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgb(255,255,255)', borderStyle: 'solid', borderWidth: '0px 80px 80px 80px' }}> </div>
                                </li>
                                {/* SLIDE 2 */}
                                <li data-index="rs-903" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../images/main-slider/slider1/slide2.jpg').default} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src={require('./../../images/main-slider/slider1/slide2.jpg').default} alt="" data-lazyload={require('./../../images/main-slider/slider1/slide2.jpg').default} data-bgposition="center center" data-bgfit="cover" data-bgparallax={4} className="rev-slidebg" data-no-retina />
                                    {/* LAYERS */}
                                    {/* BACKGROUND VIDEO LAYER */}
                                    {/* LAYER NR. 1 */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="rrzb_903-1" 
                                    data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                    data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" 
                                    data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                          {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                          ]" 
                          data-textalign="['center','center','center','center']" 
                          data-paddingtop="[0,0,0,0]" 
                          data-paddingright="[0,0,0,0]"
                          data-paddingbottom="[0,0,0,0]" 
                          data-paddingleft="[0,0,0,0]" 
                          style={{ zIndex: 4, backgroundColor: 'rgba(0, 0, 0, 0.2)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                    </div>
                                    <div id="rrzb_903" className="rev_row_zone rev_row_zone_middle" style={{ zIndex: 7 }}>
                                        {/* Content Block */}
                                        {/* LAYER NR. 1 */}
                                        <div className="tp-caption  " id="slide-903-layer-1" 
                                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                        data-y="['bottom','bottom','bottom','bottom']" 
                                        data-voffset="['0','0','0','0']" 
                                        data-width="none" 
                                        data-height="none" 
                                        data-whitespace="nowrap" 
                                        data-type="row" 
                                        data-columnbreak={3} data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" 
                              data-margintop="[0,0,0,0]" 
                              data-marginright="[0,0,0,0]" 
                              data-marginbottom="[50,60,40,50]" 
                              data-marginleft="[0,0,0,0]" 
                              data-textalign="['center','center','center','center']" 
                              data-paddingtop="[0,0,0,0]" 
                              data-paddingright="[0,0,0,0]" 
                              data-paddingbottom="[0,0,0,0]" 
                              data-paddingleft="[0,0,0,0]" 
                              style={{ zIndex: 7, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 0, fontWeight: 400, color: '#ffffff', letterSpacing: 0 }}>
                                            {/* LAYER NR. 2 */}
                                            <div className="tp-caption  " 
                                            id="slide-903-layer-2" 
                                            data-x="['center','center','center','center']" 
                                            data-hoffset="['0','0','0','0']" 
                                            data-y="['top','top','top','top']" 
                                            data-voffset="['0','0','0','0']" 
                                            data-width="none" 
                                            data-height="none" 
                                            data-whitespace="nowrap" 
                                            data-type="column" 
                                            data-responsive_offset="on" 
                                            data-responsive="off" 
                                            data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;}]" 
                                      data-columnwidth="100%" 
                                      data-verticalalign="top" 
                                      data-margintop="[0,0,0,0]" 
                                      data-marginright="[0,0,0,0]" 
                                      data-marginbottom="[0,0,0,0]" 
                                      data-marginleft="[0,0,0,0]" 
                                      data-textalign="['center','center','center','center']" 
                                      data-paddingtop="[0,0,0,0]" 
                                      data-paddingright="[0,0,0,0]" 
                                      data-paddingbottom="[0,0,0,0]" 
                                      data-paddingleft="[0,0,0,0]" 
                                      style={{ zIndex: 8, width: '100%' }}>
                                                {/* LAYER NR. 3 */}
                                                <div className="tp-caption   tp-resizeme" 
                                                id="slide-903-layer-3" 
                                                data-x="['center','center','center','center']" 
                                                data-hoffset="['0','0','0','0']" 
                                                data-y="['top','bottom','bottom','bottom']" 
                                                data-voffset="['0','260','250','190']" 
                                                data-width="none" 
                                                data-height="none" 
                                                data-whitespace="['normal','nowrap','nowrap','nowrap']" 
                                                data-type="text" data-basealign="slide" 
                                                data-responsive_offset="off" 
                                                data-frames="[{&quot;delay&quot;:&quot;+490&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" 
                                          data-margintop="[0,0,0,0]" 
                                          data-marginright="[0,0,0,0]" 
                                          data-marginbottom="[0,0,0,0]" 
                                          data-marginleft="[0,0,0,0]" 
                                          data-textalign="['center','center','center','center']" 
                                          data-paddingtop="[5,5,5,5]" 
                                          data-paddingright="[5,5,5,5]" 
                                          data-paddingbottom="[5,5,5,5]" 
                                          data-paddingleft="[5,5,5,5]" 
                                          style={{ zIndex: 10, whiteSpace: 'normal', fontSize: 18, lineHeight: 0, fontWeight: 700, color: '#fff', letterSpacing: 3, display: 'inline-block' }}>
                                                    GENERAL
                                                </div>
                                                {/* LAYER NR. 4 */}
                                                <div className="tp-caption tp-shape tp-shapewrapper  tp-resizeme" 
                                                id="slide-903-layer-4" 
                                                data-x="['center','center','center','center']" 
                                                data-hoffset="['0','0','0','0']" 
                                                data-y="['top','top','top','top']" 
                                                data-voffset="['0','0','0','0']" 
                                                data-width="full" 
                                                data-height={15} data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" 
                                          data-marginbottom="[0,0,0,0]" 
                                          data-marginleft="[0,0,0,0]" 
                                          data-textalign="['center','center','center','center']" 
                                          data-paddingtop="[0,0,0,0]" 
                                          data-paddingright="[0,0,0,0]" 
                                          data-paddingbottom="[0,0,0,0]" 
                                          data-paddingleft="[0,0,0,0]" 
                                          style={{ zIndex: 13, display: 'block', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                </div>
                                                {/* LAYER NR. 5 */}
                                                <div className="tp-caption   tp-resizeme  tp-linkmod" id="slide-903-layer-5" 
                                                data-x="['center','center','center','center']" 
                                                data-hoffset="['0','0','0','0']" 
                                                data-y="['top','bottom','bottom','bottom']" 
                                                data-voffset="['0','170','140','120']" 
                                                data-fontsize="['60','60','60','40']" 
                                                data-lineheight="['60','60','60','40']" 
                                                data-width="['900','700','700',460']" 
                                                data-height="none" data-whitespace="normal" 
                                                data-type="text" data-actions="" data-basealign="slide" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:&quot;+590&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                          {&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgb(255,255,255);&quot;}]" 
                                          data-margintop="[0,0,0,0]" 
                                          data-marginright="[0,0,0,0]" 
                                          data-marginbottom="[0,0,0,0]" 
                                          data-marginleft="[0,0,0,0]" 
                                          data-textalign="['center','center','center','center']" 
                                          data-paddingtop="[0,0,0,0]" 
                                          data-paddingright="[5,5,5,5]" 
                                          data-paddingbottom="[10,10,10,10]" 
                                          data-paddingleft="[5,5,5,5]" 
                                          style={{ zIndex: 11, whiteSpace: 'normal', fontWeight: 600, color: '#fff', letterSpacing: 2, display: 'inline-block', textDecoration: 'none', textTransform: 'capitalize' }}>Natural plus modern.</div>
                                                {/* LAYER NR. 6 */}
                                                <div className="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-903-layer-6" data-x="['center','center','center','center']" 
                                                data-hoffset="['0','0','0','0']" 
                                                data-y="['top','top','top','top']" 
                                                data-voffset="['0','0','0','0']" 
                                                data-width="full" 
                                                data-height={15} 
                                                data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" 
                                          data-marginbottom="[0,0,0,0]" 
                                          data-marginleft="[0,0,0,0]" 
                                          data-textalign="['center','center','center','center']" 
                                          data-paddingtop="[0,0,0,0]" 
                                          data-paddingright="[0,0,0,0]" 
                                          data-paddingbottom="[0,0,0,0]" 
                                          data-paddingleft="[0,0,0,0]" style={{ zIndex: 9, display: 'block', backgroundColor: 'rgba(0, 0, 0, 0)' }}> </div>
                                                {/* LAYER NR. 7 */}
                                                <div className="tp-caption   tp-resizeme" id="slide-903-layer-7" 
                                                data-x="['center','center','center','center']"
                                                data-hoffset="['0','0','0','0']" 
                                                data-y="['top','bottom','bottom','bottom']" 
                                                data-voffset="['0','100','80','70']" 
                                                data-width="['none','460','460','400']" 
                                                data-height="none" 
                                                data-whitespace="normal" 
                                                data-type="text" 
                                                data-basealign="slide" 
                                                data-responsive_offset="off" 
                                                data-frames="[{&quot;delay&quot;:&quot;+690&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" 
                                          data-marginbottom="[0,0,0,0]" 
                                          data-marginleft="[0,0,0,0]" 
                                          data-fontsize="['18','18','18','18']"
                                          data-lineheight="['24','24','24','24']"
                                          data-textalign="['center','center','center','center']" 
                                          data-paddingtop="[5,5,5,5]" 
                                          data-paddingright="[5,5,5,5]" 
                                          data-paddingbottom="[5,5,5,5]" 
                                          data-paddingleft="[5,5,5,5]" style={{ zIndex: 12, whiteSpace: 'normal',  fontWeight: 400, color: '#fff', letterSpacing: 0, display: 'inline-block' }}>
                                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* LAYER NR. 8 */}
                                    {/* Border Part */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-903-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgb(255,255,255)', borderStyle: 'solid', borderWidth: '0px 80px 80px 80px' }}> </div>
                                </li>
                                {/* SLIDE 3 */}
                                <li data-index="rs-904" data-transition="fadethroughdark" data-slotamount="default" data-hideafterloop={0} data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb={require('./../../images/main-slider/slider1/slide3.jpg').default} data-rotate={0} data-fstransition="fade" data-fsmasterspeed={300} data-fsslotamount={7} data-saveperformance="off" data-title data-param1 data-param2 data-param3 data-param4 data-param5 data-param6 data-param7 data-param8 data-param9 data-param10 data-description>
                                    {/* MAIN IMAGE */}
                                    <img src={require('./../../images/main-slider/slider1/slide3.jpg').default} alt="" data-lazyload={require('./../../images/main-slider/slider1/slide3.jpg').default} data-bgposition="center center" data-bgfit="cover" data-bgparallax={4} className="rev-slidebg" data-no-retina />
                                    {/* LAYERS */}
                                    {/* BACKGROUND VIDEO LAYER */}
                                    {/* LAYER NR. 1 */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " 
                                    id="rrzb_904-1" 
                                    data-x="['center','center','center','center']" 
                                    data-hoffset="['0','0','0','0']" 
                                    data-y="['middle','middle','middle','middle']" 
                                    data-voffset="['0','0','0','0']"
                                    data-width="full" data-height="full" data-whitespace="nowrap" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[
                          {&quot;from&quot;:&quot;opacity:0;&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;o:1;&quot;,&quot;delay&quot;:0,&quot;ease&quot;:&quot;Power4.easeOut&quot;},
                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeOut&quot;}
                          ]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 4, backgroundColor: 'rgba(0, 0, 0, 0.2)', borderColor: 'rgba(0, 0, 0, 0)', borderWidth: 0 }}>
                                    </div>
                                    <div id="rrzb_904" className="rev_row_zone rev_row_zone_middle" style={{ zIndex: 7 }}>
                                        {/* Content Block */}
                                        {/* LAYER NR. 1 */}
                                        <div className="tp-caption  " id="slide-904-layer-1" 
                                        data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']"
                                        data-y="['bottom','bottom','bottom','bottom']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="row" data-columnbreak={3} data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                              {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" 
                              data-margintop="[0,0,0,0]" 
                              data-marginright="[0,0,0,0]" 
                              data-marginbottom="[50,60,40,50]" 
                              data-marginleft="[0,0,0,0]" 
                              data-textalign="['center','center','center','center']" 
                              data-paddingtop="[0,0,0,0]" 
                              data-paddingright="[0,0,0,0]" 
                              data-paddingbottom="[0,0,0,0]" 
                              data-paddingleft="[0,0,0,0]" style={{ zIndex: 7, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 0, fontWeight: 400, color: '#ffffff', letterSpacing: 0 }}>
                                            {/* LAYER NR. 2 */}
                                            <div className="tp-caption  " id="slide-904-layer-2" 
                                            data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                            data-y="['top','top','top','top']" data-voffset="['0','0','100','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="column" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                                      {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;}]" data-columnwidth="100%" data-verticalalign="top" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" 
                                      data-textalign="['center','center','center','center']" 
                                      data-paddingtop="[0,0,0,0]" 
                                      data-paddingright="[0,0,0,0]" 
                                      data-paddingbottom="[0,0,0,0]" 
                                      data-paddingleft="[0,0,0,0]" 
                                      style={{ zIndex: 8, width: '100%' }}>
                                                {/* LAYER NR. 3 */}
                                                <div className="tp-caption   tp-resizeme" id="slide-904-layer-3" 
                                                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                                data-y="['top','bottom','bottom','bottom']" data-voffset="['0','260','250','190']" data-width="none" data-height="none" data-whitespace="['normal','nowrap','nowrap','nowrap']" data-type="text" data-basealign="slide" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:&quot;+490&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['center','center','center','center']" 
                                          data-paddingtop="[5,5,5,5]" 
                                          data-paddingright="[5,5,5,5]" 
                                          data-paddingbottom="[5,5,5,5]" 
                                          data-paddingleft="[5,5,5,5]" 
                                          style={{ zIndex: 10, whiteSpace: 'normal', fontSize: 18, lineHeight: 0, fontWeight: 700, color: '#fff', letterSpacing: 3, display: 'inline-block' }}>
                                                    GENERAL
                                                </div>
                                                {/* LAYER NR. 4 */}
                                                <div className="tp-caption tp-shape tp-shapewrapper  tp-resizeme" 
                                                id="slide-904-layer-4" 
                                                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                                data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="full" data-height={15} data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, display: 'block', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                                                </div>
                                                {/* LAYER NR. 5 */}
                                                <div className="tp-caption   tp-resizeme  tp-linkmod" id="slide-904-layer-5" 
                                                data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" 
                                                data-y="['top','bottom','bottom','bottom']" data-voffset="['0','170','140','120']" 
                                                data-fontsize="['60','60','60','40']" data-lineheight="['60','60','60','40']" data-width="['900','700','700','460']" data-height="none" data-whitespace="normal" data-type="text" data-actions="" data-basealign="slide" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:&quot;+590&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                          {&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgb(255,255,255);&quot;}]" 
                                          data-margintop="[0,0,0,0]" 
                                          data-marginright="[0,0,0,0]" 
                                          data-marginbottom="[0,0,0,0]" 
                                          data-marginleft="[0,0,0,0]" 
                                          data-textalign="['center','center','center','center']" 
                                          data-paddingtop="[0,0,0,0]" 
                                          data-paddingright="[5,5,5,5]" 
                                          data-paddingbottom="[10,10,10,10]" 
                                          data-paddingleft="[5,5,5,5]" 
                                          style={{ zIndex: 11, whiteSpace: 'normal', fontWeight: 600, color: '#fff', letterSpacing: 2, display: 'inline-block', textDecoration: 'none', textTransform: 'capitalize' }}>Creative &amp; Professional</div>
                                                {/* LAYER NR. 6 */}
                                                <div className="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-904-layer-6" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="full" data-height={15} data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" 
                                          data-margintop="[0,0,0,0]" 
                                          data-marginright="[0,0,0,0]" 
                                          data-marginbottom="[0,0,0,0]" 
                                          data-marginleft="[0,0,0,0]" 
                                          data-textalign="['center','center','center','center']" 
                                          data-paddingtop="[0,0,0,0]" 
                                          data-paddingright="[0,0,0,0]" 
                                          data-paddingbottom="[0,0,0,0]" 
                                          data-paddingleft="[0,0,0,0]" 
                                          style={{ zIndex: 9, display: 'block', backgroundColor: 'rgba(0, 0, 0, 0)' }}> </div>
                                                {/* LAYER NR. 7 */}
                                                <div className="tp-caption   tp-resizeme" id="slide-904-layer-7" 
                                                data-x="['center','center','center','center']" 
                                                data-hoffset="['0','0','0','0']" 
                                                data-y="['top','bottom','bottom','bottom']" 
                                                data-voffset="['0','100','80','70']" 
                                                data-width="['none','460','460','400']" 
                                                data-height="none" data-whitespace="normal" 
                                                data-type="text" 
                                                data-basealign="slide" 
                                                data-responsive_offset="off" 
                                                data-frames="[{&quot;delay&quot;:&quot;+690&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                                          {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" 
                                          data-marginbottom="[0,0,0,0]" 
                                          data-marginleft="[0,0,0,0]" 
                                          data-fontsize="['18','18','18','18']"
                                          data-lineheight="['24','24','24','24']"
                                          data-textalign="['center','center','center','center']" 
                                          data-paddingtop="[5,5,5,5]" 
                                          data-paddingright="[5,5,5,5]" 
                                          data-paddingbottom="[5,5,5,5]" 
                                          data-paddingleft="[5,5,5,5]" style={{ zIndex: 12, whiteSpace: 'normal', fontWeight: 400, color: '#fff', letterSpacing: 0, display: 'inline-block' }}>
                                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* LAYER NR. 8 */}
                                    {/* Border Part */}
                                    <div className="tp-caption tp-shape tp-shapewrapper " id="slide-904-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgb(255,255,255)', borderStyle: 'solid', borderWidth: '0px 80px 80px 80px' }}> </div>
                                </li>
                            </ul>
                            <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }} />
                        </div>
                    </div>
            </>
        );
    }
};

export default Slider;