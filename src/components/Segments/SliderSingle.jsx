import React from 'react';
import { NavLink } from 'react-router-dom';


class SliderSingle extends React.Component {

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

        const { image } = this.props
        const { heading } = this.props
        const { smallSpan } = this.props
        const { largeSpan } = this.props

        return (
            <>
          
                <img src={image.default} alt="" data-lazyload={image.default} data-bgposition="center center" data-bgfit="cover" data-bgparallax={4} className="rev-slidebg" data-no-retina />
                {/* LAYERS */}
                {/* BACKGROUND VIDEO LAYER */}
                <div id="rrzb_902" className="rev_row_zone rev_row_zone_bottom" style={{ zIndex: 7 }}>
                    {/* Content Block */}
                    {/* LAYER NR. 1 */}
                    <div className="tp-caption  " id="slide-902-layer-1" data-x="['left','left','left','left']" data-hoffset="['100','100','100','100']" data-y="['bottom','bottom','bottom','bottom']" data-voffset="['0','0','0','0']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="row" data-columnbreak={3} data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:10,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
            {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[50,60,40,50]" 
            data-marginleft="[0,0,0,0]" 
            data-textalign="['inherit','inherit','inherit','inherit']" 
            data-paddingtop="[0,0,0,0]" 
            data-paddingright="[150,130,80,50]" 
            data-paddingbottom="[0,0,0,0]" 
            data-paddingleft="[150,130,80,50]" style={{ zIndex: 7, whiteSpace: 'nowrap', fontSize: 20, lineHeight: 1, fontWeight: 400, color: '#ffffff', letterSpacing: 0 }}>
                        {/* LAYER NR. 2 */}
                        <div className="tp-caption  " id="slide-902-layer-2" data-x="['left','left','left','left']" data-hoffset="['0','0','100','100']" data-y="['top','top','top','top']" data-voffset="['0','0','100','100']" data-width="none" data-height="none" data-whitespace="nowrap" data-type="column" data-responsive_offset="on" data-responsive="off" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfrombottom&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                    {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;}]" data-columnwidth="100%" data-verticalalign="top" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['center','center','center','center']" data-paddingtop="[50,50,50,50]" data-paddingright="[0,0,30,30]" data-paddingbottom="[50,50,50,50]" data-paddingleft="[0,0,30,30]" style={{ zIndex: 8, width: '100%', backgroundColor: '#f6f7f8' }}>
                            {/* LAYER NR. 3 */}
                            <div className="tp-caption   tp-resizeme" id="slide-902-layer-3" data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','bottom','bottom','bottom']" data-voffset="['0','260','250','190']" data-width="none" data-height="none" data-whitespace="['normal','nowrap','nowrap','nowrap']" data-type="text" data-basealign="slide" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:&quot;+490&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                        {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['center','inherit','inherit','inherit']" data-paddingtop="[5,5,5,5]" data-paddingright="[5,5,5,5]" data-paddingbottom="[5,5,5,5]" data-paddingleft="[5,5,5,5]" style={{ zIndex: 10, whiteSpace: 'normal', fontSize: 18, lineHeight: 1, fontWeight: 700, color: '#000', letterSpacing: 3, display: 'inline-block' }}>
                                {heading}
                            </div>
                            {/* LAYER NR. 4 */}
                            <div className="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-902-layer-4" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="full" data-height={15} data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                        {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 13, display: 'block', backgroundColor: 'rgba(0, 0, 0, 0)' }}>
                            </div>
                            {/* LAYER NR. 5 */}
                            <div className="tp-caption   tp-resizeme  tp-linkmod text-dark-blue" id="slide-902-layer-5" data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['top','bottom','bottom','bottom']" data-voffset="['0','170','140','120']" data-fontsize="['45','45','45','35']" data-lineheight="['45','45','45','35']" data-width="['660','460','100%','100%']" data-height="none" data-whitespace="normal" data-type="text" data-actions="" data-basealign="slide" data-responsive_offset="off" data-frames="[{&quot;delay&quot;:&quot;+590&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                        {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                        {&quot;frame&quot;:&quot;hover&quot;,&quot;speed&quot;:&quot;0&quot;,&quot;ease&quot;:&quot;Linear.easeNone&quot;,&quot;to&quot;:&quot;o:1;rX:0;rY:0;rZ:0;z:0;&quot;,&quot;style&quot;:&quot;c:rgb(45,48,50);&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['center','center','center','center']" data-paddingtop="[0,0,0,0]" data-paddingright="[5,5,5,5]" data-paddingbottom="[10,10,10,10]" data-paddingleft="[5,5,5,5]" style={{ zIndex: 11, minWidth: 660, maxWidth: 660, whiteSpace: 'normal', fontSize: 32, lineHeight: 2, fontWeight: 300, letterSpacing: 2, display: 'inline-block', cursor: 'pointer', textDecoration: 'none', textTransform: 'capitalize' }}>
                                {largeSpan}</div>
                            {/* LAYER NR. 6 */}
                            <div className="tp-caption tp-shape tp-shapewrapper  tp-resizeme" id="slide-902-layer-6" data-x="['left','left','left','left']" data-hoffset="['0','0','0','0']" data-y="['top','top','top','top']" data-voffset="['0','0','0','0']" data-width="full" data-height={15} data-whitespace="normal" data-type="shape" data-responsive_offset="on" data-frames="[{&quot;delay&quot;:&quot;+0&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},
                        {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 9, display: 'block', backgroundColor: 'rgba(0, 0, 0, 0)' }}> </div>
                            {/* LAYER NR. 7 */}
                            <div className="tp-caption   
                            tp-resizeme" id="slide-902-layer-7" 
                            data-x="['left','center','center','center']" data-hoffset="['0','0','0','0']" 
                            data-y="['top','bottom','bottom','bottom']" data-voffset="['0','100','80','70']" 
                            data-width="['none','460','100%','100%']" 
                            data-height="none" 
                            data-whitespace="normal" 
                            data-fontsize="['18','18','18','18']"
                            data-lineheight="['24','24','24','24']"
                            data-type="text" 
                            data-basealign="slide" 
                            data-responsive_offset="off" 
                            data-frames="[{&quot;delay&quot;:&quot;+690&quot;,&quot;speed&quot;:750,&quot;sfxcolor&quot;:&quot;#fff&quot;,&quot;sfx_effect&quot;:&quot;blockfromleft&quot;,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;z:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power4.easeInOut&quot;},
                        {&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:300,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;}]" data-margintop="[0,0,0,0]" data-marginright="[0,0,0,0]" data-marginbottom="[0,0,0,0]" data-marginleft="[0,0,0,0]" data-textalign="['center','center','center','center']" data-paddingtop="[5,5,5,5]" data-paddingright="[5,5,5,5]" data-paddingbottom="[5,5,5,5]" data-paddingleft="[5,5,5,5]" style={{ zIndex: 12, whiteSpace: 'normal', fontWeight: 400, color: '#000', letterSpacing: 0, display: 'inline-block' }}>{smallSpan}
                            </div>
                        </div>
                    </div>
                </div>
                {/* LAYER NR. 8 */}
                {/* Border Part */}
                <div className="tp-caption tp-shape tp-shapewrapper " id="slide-902-layer-8" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['0','0','0','0']" data-width="full" data-height="full" data-whitespace="nowrap" data-visibility="['on','on','off','off']" data-type="shape" data-basealign="slide" data-responsive_offset="off" data-responsive="off" data-frames="[{&quot;delay&quot;:50,&quot;speed&quot;:100,&quot;frame&quot;:&quot;0&quot;,&quot;from&quot;:&quot;opacity:0;&quot;,&quot;to&quot;:&quot;o:1;&quot;,&quot;ease&quot;:&quot;Power3.easeInOut&quot;},{&quot;delay&quot;:&quot;wait&quot;,&quot;speed&quot;:1000,&quot;frame&quot;:&quot;999&quot;,&quot;to&quot;:&quot;opacity:0;&quot;,&quot;ease&quot;:&quot;Power3.easeIn&quot;}]" data-textalign="['inherit','inherit','inherit','inherit']" data-paddingtop="[0,0,0,0]" data-paddingright="[0,0,0,0]" data-paddingbottom="[0,0,0,0]" data-paddingleft="[0,0,0,0]" style={{ zIndex: 5, backgroundColor: 'rgba(0, 0, 0, 0)', borderColor: 'rgb(255,255,255)', borderStyle: 'solid', borderWidth: '0px 80px 80px 80px' }}> </div>
            
        <div className="tp-bannertimer tp-bottom" style={{ visibility: 'hidden !important' }} />
      
            </>
        );
    }
};

export default SliderSingle;