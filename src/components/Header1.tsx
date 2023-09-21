import { FunctionComponent } from "react";
import VideoIcon from "./VideoIcon";
import styles from "./Header1.module.css";

const Header1: FunctionComponent = () => {
  return (
    <div className={styles.rectangleParent}>
      <div className={styles.groupChild} />
      <img className={styles.locofyLogo1} alt="" src="/locofy-logo-1@2x.png" />
      <img className={styles.group9Icon} alt="" src="/group91.svg" />
      <img className={styles.group9Icon1} alt="" src="/group92.svg" />
      <div className={styles.importReactFromReactImpWrapper}>
        <div className={styles.importReactFromContainer}>
          <span className={styles.importReactFromContainer1}>
            <p className={styles.importReactFromReact}>
              <span className={styles.import}>import</span>
              <span>{` React `}</span>
              <span className={styles.import}>from</span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.react}>"react"</span>
              <span className={styles.span}>;</span>
            </p>
            <p className={styles.importReactFromReact}>
              <span className={styles.import}>import</span>
              <span>{` { AppHeader } `}</span>
              <span className={styles.import}>from</span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.react}>"./app-header"</span>
            </p>
            <p className={styles.importReactFromReact}>
              <span className={styles.import}>import</span>
              <span>{` { Footer } `}</span>
              <span className={styles.import}>from</span>
              <span className={styles.span}>{` `}</span>
              <span className={styles.react}>"./footer"</span>
            </p>
            <p className={styles.importHomeUicss}>
              <span className={styles.import}>import</span>
              <span className={styles.span}> '</span>
              <span>./home-ui.css</span>
              <span className={styles.span}>'</span>
            </p>
            <p className={styles.importReactFromReact}>&nbsp;</p>
            <p className={styles.importReactFromReact}>
              <span className={styles.span}>{`type `}</span>
              <span className={styles.homeuiprops}>HomeUIProps</span>
              <span>{` = {`}</span>
            </p>
            <p className={styles.importReactFromReact}>
              <span>{`   header: `}</span>
              <span className={styles.homeuiprops}>HeaderProps</span>
              <span className={styles.span}>;</span>
            </p>
            <p className={styles.importReactFromReact}>{`};`}</p>
            <p className={styles.importReactFromReact}>&nbsp;</p>
            <p className={styles.exportConstHomeuiReactfun}>
              <span className={styles.import}>export</span>
              <span className={styles.span}>{` const `}</span>
              <span className={styles.homeuiprops}>HomeUI</span>
              <span className={styles.span}>{`: `}</span>
              <span>React.FunctionComponent</span>
              <span className={styles.span}>{`<`}</span>
              <span className={styles.homeuiprops}>HomeUIProps</span>
              <span className={styles.span}>{`> = React.memo(`}</span>
            </p>
            <p className={styles.header}>{`   ({ header }) => {`}</p>
            <p className={styles.header}> return (</p>
            <p className={styles.header}>
              <span>{`        <div class=`}</span>
              <span className={styles.react}>{`"home-ui-root">`}</span>
            </p>
          </span>
        </div>
      </div>
      <img className={styles.pluginMockupIcon} alt="" src="/pluginmockup.svg" />
      <div className={styles.groupWrapper}>
        <div className={styles.groupParent}>
          <div className={styles.getLocofyPluginParent}>
            <a
              className={styles.getLocofyPlugin}
              href="https://www.figma.com/community/plugin/1056467900248561542/Locofy---Figma-to-React-code-(BETA)"
              target="_blank"
            >
              Get Locofy plugin
            </a>
            <img className={styles.iconPlugin} alt="" src="/icon--plugin.svg" />
          </div>
          <div className={styles.watchDemoParent}>
            <a
              className={styles.getLocofyPlugin}
              href="https://www.youtube.com/watch?v=XF-3ncTbacw"
              target="_blank"
            >
              Watch demo
            </a>
            <VideoIcon
              videoIconVideo="/video.svg"
              videoIconWidth="100px"
              videoIconHeight="100px"
              videoIconPosition="absolute"
              videoIconTop="0px"
              videoIconLeft="0px"
            />
          </div>
          <div className={styles.guidesParent}>
            <a
              className={styles.guides}
              href="https://guide.locofy.ai/"
              target="_blank"
            >
              Guides
            </a>
            <img className={styles.books1Icon} alt="" src="/books-1.svg" />
          </div>
        </div>
      </div>
      <div className={styles.shipProducts2xContainer}>
        <span>{`Ship products 2X faster - Convert `}</span>
        <b>Figma designs</b>
        <span>{` to `}</span>
        <b>React code</b>
        <span>!</span>
      </div>
      <b className={styles.turnYourDesigns}>
        Turn your designs into production-ready frontend code
      </b>
    </div>
  );
};

export default Header1;
