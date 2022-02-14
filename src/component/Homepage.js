import React, { useContext } from "react";
import { FormattedMessage } from "react-intl";
import './Homepage.css';
import { Context } from './Wrapper';

function Homepage() {
  const context = useContext(Context);
  return (
    <div className="homepage">   
      <div>
        <h1 className={context.locale === 'zh-TW' ? 'chinese' : null}>
          <FormattedMessage id="app.myName" defaultMessage="Chen YouYu" />
        </h1>
        <h3 className={context.locale === 'zh-TW' ? 'chinese' : null}>
          <FormattedMessage id="app.myCity" defaultMessage="Taipei, Taiwan" />
        </h3>
      </div>
      <div className="language">
        <button className="language-select" onClick={context.selectLanguage} id="zh-TW">中</button>
        /
        <button id="en" onClick={context.selectLanguage}>En</button>
      </div>
      <p>
        <FormattedMessage id='app.aboutPara' defaultMessage="My first encounter with JavaScript happened one and half year ago, when I was a project manager intern,
          and the first time I tasted the power of coding.
          Currently I am a full-time self-taught coder followed with The Odin Project." 
          values={{ 
            top: <a href="https://www.theodinproject.com/" target="_blank" rel="noreferrer">The Odin Project</a>,
            br: <br />
          }}/>
      </p>
    </div>
  )
};

export default Homepage;