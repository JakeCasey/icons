import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Page from './page';
import { generateImage } from '../utils/utils';
import IconSelector from '../utils/IconSelector';
import { Camera, Download } from 'react-feather';
import { useRef, useState, useEffect } from 'react';

let Home = () => {
  const IconRef = useRef(null);

  const [activeIcon, updateActiveIcon] = useState({
    icon: 'camera',
    stroke: 'white',
    backgroundColor: 'black',
    fill: '',
  });

  let [downloading, updateDownloading] = useState(false);
  let downloadIcon = (thisicon) => {
    updateActiveIcon(thisicon);
    updateDownloading(true);
  };

  useEffect(() => {
    if (downloading) {
      generateImage(IconRef.current);
      updateDownloading(false);
    }
  }, [downloading, activeIcon]);

  return (
    <div className="relative">
      <div className="fixed top-0 left-0 z-0">
        {activeIcon && <RenderBigIcon ref={IconRef} activeIcon={activeIcon} />}
      </div>
      <div className="relative z-10 w-full h-full bg-white">
        <Page>
          <div className="flex items-center justify-center inline-block w-10 h-10 ml-4 font-bold text-white bg-black rounded-apple">
            i
          </div>
          <div className="flex flex-wrap mt-16">
            <Icon iconName="activity" downloadIcon={downloadIcon} />
            <Icon iconName="airplay" downloadIcon={downloadIcon} />
            <Icon iconName="alertcircle" downloadIcon={downloadIcon} />
            <Icon iconName="alertoctagon" downloadIcon={downloadIcon} />
            <Icon iconName="alerttriangle" downloadIcon={downloadIcon} />
            <Icon iconName="aligncenter" downloadIcon={downloadIcon} />
            <Icon iconName="alignjustify" downloadIcon={downloadIcon} />
            <Icon iconName="alignleft" downloadIcon={downloadIcon} />
            <Icon iconName="alignright" downloadIcon={downloadIcon} />
            <Icon iconName="anchor" downloadIcon={downloadIcon} />
            <Icon iconName="aperture" downloadIcon={downloadIcon} />
            <Icon iconName="archive" downloadIcon={downloadIcon} />
            <Icon iconName="arrowdowncircle" downloadIcon={downloadIcon} />
            <Icon iconName="arrowdownleft" downloadIcon={downloadIcon} />
            <Icon iconName="arrowdownright" downloadIcon={downloadIcon} />
            <Icon iconName="arrowdown" downloadIcon={downloadIcon} />
            <Icon iconName="arrowleftcircle" downloadIcon={downloadIcon} />
            <Icon iconName="arrowleft" downloadIcon={downloadIcon} />
            <Icon iconName="arrowrightcircle" downloadIcon={downloadIcon} />
            <Icon iconName="arrowright" downloadIcon={downloadIcon} />
            <Icon iconName="arrowupcircle" downloadIcon={downloadIcon} />
            <Icon iconName="arrowupleft" downloadIcon={downloadIcon} />
            <Icon iconName="arrowupright" downloadIcon={downloadIcon} />
            <Icon iconName="arrowup" downloadIcon={downloadIcon} />
            <Icon iconName="atsign" downloadIcon={downloadIcon} />
            <Icon iconName="award" downloadIcon={downloadIcon} />
            <Icon iconName="barcharttwo" downloadIcon={downloadIcon} />
            <Icon iconName="barchart" downloadIcon={downloadIcon} />
            <Icon iconName="batterycharging" downloadIcon={downloadIcon} />
            <Icon iconName="battery" downloadIcon={downloadIcon} />
            <Icon iconName="belloff" downloadIcon={downloadIcon} />
            <Icon iconName="bell" downloadIcon={downloadIcon} />
            <Icon iconName="bluetooth" downloadIcon={downloadIcon} />
            <Icon iconName="bold" downloadIcon={downloadIcon} />
            <Icon iconName="bookopen" downloadIcon={downloadIcon} />
            <Icon iconName="book" downloadIcon={downloadIcon} />
            <Icon iconName="bookmark" downloadIcon={downloadIcon} />
            <Icon iconName="box" downloadIcon={downloadIcon} />
            <Icon iconName="briefcase" downloadIcon={downloadIcon} />
            <Icon iconName="calendar" downloadIcon={downloadIcon} />
            <Icon iconName="cameraoff" downloadIcon={downloadIcon} />
            <Icon iconName="camera" downloadIcon={downloadIcon} />
            <Icon iconName="cast" downloadIcon={downloadIcon} />
            <Icon iconName="checkcircle" downloadIcon={downloadIcon} />
            <Icon iconName="checksquare" downloadIcon={downloadIcon} />
            <Icon iconName="check" downloadIcon={downloadIcon} />
            <Icon iconName="chevrondown" downloadIcon={downloadIcon} />
            <Icon iconName="chevronleft" downloadIcon={downloadIcon} />
            <Icon iconName="chevronright" downloadIcon={downloadIcon} />
            <Icon iconName="chevronup" downloadIcon={downloadIcon} />
            <Icon iconName="chevronsdown" downloadIcon={downloadIcon} />
            <Icon iconName="chevronsleft" downloadIcon={downloadIcon} />
            <Icon iconName="chevronsright" downloadIcon={downloadIcon} />
            <Icon iconName="chevronsup" downloadIcon={downloadIcon} />
            <Icon iconName="chrome" downloadIcon={downloadIcon} />
            <Icon iconName="circle" downloadIcon={downloadIcon} />
            <Icon iconName="clipboard" downloadIcon={downloadIcon} />
            <Icon iconName="clock" downloadIcon={downloadIcon} />
            <Icon iconName="clouddrizzle" downloadIcon={downloadIcon} />
            <Icon iconName="cloudlightning" downloadIcon={downloadIcon} />
            <Icon iconName="cloudoff" downloadIcon={downloadIcon} />
            <Icon iconName="cloudrain" downloadIcon={downloadIcon} />
            <Icon iconName="cloudsnow" downloadIcon={downloadIcon} />
            <Icon iconName="cloud" downloadIcon={downloadIcon} />
            <Icon iconName="code" downloadIcon={downloadIcon} />
            <Icon iconName="codepen" downloadIcon={downloadIcon} />
            <Icon iconName="codesandbox" downloadIcon={downloadIcon} />
            <Icon iconName="coffee" downloadIcon={downloadIcon} />
            <Icon iconName="columns" downloadIcon={downloadIcon} />
            <Icon iconName="command" downloadIcon={downloadIcon} />
            <Icon iconName="compass" downloadIcon={downloadIcon} />
            <Icon iconName="copy" downloadIcon={downloadIcon} />
            <Icon iconName="cornerdownleft" downloadIcon={downloadIcon} />
            <Icon iconName="cornerdownright" downloadIcon={downloadIcon} />
            <Icon iconName="cornerleftdown" downloadIcon={downloadIcon} />
            <Icon iconName="cornerleftup" downloadIcon={downloadIcon} />
            <Icon iconName="cornerrightdown" downloadIcon={downloadIcon} />
            <Icon iconName="cornerrightup" downloadIcon={downloadIcon} />
            <Icon iconName="cornerupleft" downloadIcon={downloadIcon} />
            <Icon iconName="cornerupright" downloadIcon={downloadIcon} />
            <Icon iconName="cpu" downloadIcon={downloadIcon} />
            <Icon iconName="creditcard" downloadIcon={downloadIcon} />
            <Icon iconName="crop" downloadIcon={downloadIcon} />
            <Icon iconName="crosshair" downloadIcon={downloadIcon} />
            <Icon iconName="database" downloadIcon={downloadIcon} />
            <Icon iconName="delete" downloadIcon={downloadIcon} />
            <Icon iconName="disc" downloadIcon={downloadIcon} />
            <Icon iconName="dividecircle" downloadIcon={downloadIcon} />
            <Icon iconName="dividesquare" downloadIcon={downloadIcon} />
            <Icon iconName="divide" downloadIcon={downloadIcon} />
            <Icon iconName="dollarsign" downloadIcon={downloadIcon} />
            <Icon iconName="downloadcloud" downloadIcon={downloadIcon} />
            <Icon iconName="download" downloadIcon={downloadIcon} />
            <Icon iconName="dribbble" downloadIcon={downloadIcon} />
            <Icon iconName="droplet" downloadIcon={downloadIcon} />
            <Icon iconName="edittwo" downloadIcon={downloadIcon} />
            <Icon iconName="editthree" downloadIcon={downloadIcon} />
            <Icon iconName="edit" downloadIcon={downloadIcon} />
            <Icon iconName="externallink" downloadIcon={downloadIcon} />
            <Icon iconName="eyeoff" downloadIcon={downloadIcon} />
            <Icon iconName="eye" downloadIcon={downloadIcon} />
            <Icon iconName="facebook" downloadIcon={downloadIcon} />
            <Icon iconName="fastforward" downloadIcon={downloadIcon} />
            <Icon iconName="feather" downloadIcon={downloadIcon} />
            <Icon iconName="figma" downloadIcon={downloadIcon} />
            <Icon iconName="fileminus" downloadIcon={downloadIcon} />
            <Icon iconName="fileplus" downloadIcon={downloadIcon} />
            <Icon iconName="filetext" downloadIcon={downloadIcon} />
            <Icon iconName="file" downloadIcon={downloadIcon} />
            <Icon iconName="film" downloadIcon={downloadIcon} />
            <Icon iconName="filter" downloadIcon={downloadIcon} />
            <Icon iconName="flag" downloadIcon={downloadIcon} />
            <Icon iconName="folderminus" downloadIcon={downloadIcon} />
            <Icon iconName="folderplus" downloadIcon={downloadIcon} />
            <Icon iconName="folder" downloadIcon={downloadIcon} />
            <Icon iconName="framer" downloadIcon={downloadIcon} />
            <Icon iconName="frown" downloadIcon={downloadIcon} />
            <Icon iconName="gift" downloadIcon={downloadIcon} />
            <Icon iconName="gitbranch" downloadIcon={downloadIcon} />
            <Icon iconName="gitcommit" downloadIcon={downloadIcon} />
            <Icon iconName="gitmerge" downloadIcon={downloadIcon} />
            <Icon iconName="gitpullrequest" downloadIcon={downloadIcon} />
            <Icon iconName="github" downloadIcon={downloadIcon} />
            <Icon iconName="gitlab" downloadIcon={downloadIcon} />
            <Icon iconName="globe" downloadIcon={downloadIcon} />
            <Icon iconName="grid" downloadIcon={downloadIcon} />
            <Icon iconName="harddrive" downloadIcon={downloadIcon} />
            <Icon iconName="hash" downloadIcon={downloadIcon} />
            <Icon iconName="headphones" downloadIcon={downloadIcon} />
            <Icon iconName="heart" downloadIcon={downloadIcon} />
            <Icon iconName="helpcircle" downloadIcon={downloadIcon} />
            <Icon iconName="hexagon" downloadIcon={downloadIcon} />
            <Icon iconName="home" downloadIcon={downloadIcon} />
            <Icon iconName="image" downloadIcon={downloadIcon} />
            <Icon iconName="inbox" downloadIcon={downloadIcon} />
            <Icon iconName="info" downloadIcon={downloadIcon} />
            <Icon iconName="instagram" downloadIcon={downloadIcon} />
            <Icon iconName="italic" downloadIcon={downloadIcon} />
            <Icon iconName="key" downloadIcon={downloadIcon} />
            <Icon iconName="layers" downloadIcon={downloadIcon} />
            <Icon iconName="layout" downloadIcon={downloadIcon} />
            <Icon iconName="lifebuoy" downloadIcon={downloadIcon} />
            <Icon iconName="linktwo" downloadIcon={downloadIcon} />
            <Icon iconName="link" downloadIcon={downloadIcon} />
            <Icon iconName="linkedin" downloadIcon={downloadIcon} />
            <Icon iconName="list" downloadIcon={downloadIcon} />
            <Icon iconName="loader" downloadIcon={downloadIcon} />
            <Icon iconName="lock" downloadIcon={downloadIcon} />
            <Icon iconName="login" downloadIcon={downloadIcon} />
            <Icon iconName="logout" downloadIcon={downloadIcon} />
            <Icon iconName="mail" downloadIcon={downloadIcon} />
            <Icon iconName="mappin" downloadIcon={downloadIcon} />
            <Icon iconName="map" downloadIcon={downloadIcon} />
            <Icon iconName="maximizetwo" downloadIcon={downloadIcon} />
            <Icon iconName="maximize" downloadIcon={downloadIcon} />
            <Icon iconName="meh" downloadIcon={downloadIcon} />
            <Icon iconName="menu" downloadIcon={downloadIcon} />
            <Icon iconName="messagecircle" downloadIcon={downloadIcon} />
            <Icon iconName="messagesquare" downloadIcon={downloadIcon} />
            <Icon iconName="micoff" downloadIcon={downloadIcon} />
            <Icon iconName="mic" downloadIcon={downloadIcon} />
            <Icon iconName="minimizetw" downloadIcon={downloadIcon} />
            <Icon iconName="minimize" downloadIcon={downloadIcon} />
            <Icon iconName="minuscircle" downloadIcon={downloadIcon} />
            <Icon iconName="minussquare" downloadIcon={downloadIcon} />
            <Icon iconName="minus" downloadIcon={downloadIcon} />
            <Icon iconName="monitor" downloadIcon={downloadIcon} />
            <Icon iconName="moon" downloadIcon={downloadIcon} />
            <Icon iconName="morehorizontal" downloadIcon={downloadIcon} />
            <Icon iconName="morevertical" downloadIcon={downloadIcon} />
            <Icon iconName="mousepointer" downloadIcon={downloadIcon} />
            <Icon iconName="move" downloadIcon={downloadIcon} />
            <Icon iconName="music" downloadIcon={downloadIcon} />
            <Icon iconName="navigationtw" downloadIcon={downloadIcon} />
            <Icon iconName="navigation" downloadIcon={downloadIcon} />
            <Icon iconName="octagon" downloadIcon={downloadIcon} />
            <Icon iconName="package" downloadIcon={downloadIcon} />
            <Icon iconName="paperclip" downloadIcon={downloadIcon} />
            <Icon iconName="pausecircle" downloadIcon={downloadIcon} />
            <Icon iconName="pause" downloadIcon={downloadIcon} />
            <Icon iconName="pentool" downloadIcon={downloadIcon} />
            <Icon iconName="percent" downloadIcon={downloadIcon} />
            <Icon iconName="phonecall" downloadIcon={downloadIcon} />
            <Icon iconName="phoneforwarded" downloadIcon={downloadIcon} />
            <Icon iconName="phoneincoming" downloadIcon={downloadIcon} />
            <Icon iconName="phonemissed" downloadIcon={downloadIcon} />
            <Icon iconName="phoneoff" downloadIcon={downloadIcon} />
            <Icon iconName="phoneoutgoing" downloadIcon={downloadIcon} />
            <Icon iconName="phone" downloadIcon={downloadIcon} />
            <Icon iconName="piechart" downloadIcon={downloadIcon} />
            <Icon iconName="playcircle" downloadIcon={downloadIcon} />
            <Icon iconName="play" downloadIcon={downloadIcon} />
            <Icon iconName="pluscircle" downloadIcon={downloadIcon} />
            <Icon iconName="plussquare" downloadIcon={downloadIcon} />
            <Icon iconName="plus" downloadIcon={downloadIcon} />
            <Icon iconName="pocket" downloadIcon={downloadIcon} />
            <Icon iconName="power" downloadIcon={downloadIcon} />
            <Icon iconName="printer" downloadIcon={downloadIcon} />
            <Icon iconName="radio" downloadIcon={downloadIcon} />
            <Icon iconName="refreshccw" downloadIcon={downloadIcon} />
            <Icon iconName="refreshcw" downloadIcon={downloadIcon} />
            <Icon iconName="repeat" downloadIcon={downloadIcon} />
            <Icon iconName="rewind" downloadIcon={downloadIcon} />
            <Icon iconName="rotateccw" downloadIcon={downloadIcon} />
            <Icon iconName="rotatecw" downloadIcon={downloadIcon} />
            <Icon iconName="rss" downloadIcon={downloadIcon} />
            <Icon iconName="save" downloadIcon={downloadIcon} />
            <Icon iconName="scissors" downloadIcon={downloadIcon} />
            <Icon iconName="search" downloadIcon={downloadIcon} />
            <Icon iconName="send" downloadIcon={downloadIcon} />
            <Icon iconName="server" downloadIcon={downloadIcon} />
            <Icon iconName="settings" downloadIcon={downloadIcon} />
            <Icon iconName="sharetwo" downloadIcon={downloadIcon} />
            <Icon iconName="share" downloadIcon={downloadIcon} />
            <Icon iconName="shieldoff" downloadIcon={downloadIcon} />
            <Icon iconName="shield" downloadIcon={downloadIcon} />
            <Icon iconName="shoppingbag" downloadIcon={downloadIcon} />
            <Icon iconName="shoppingcart" downloadIcon={downloadIcon} />
            <Icon iconName="shuffle" downloadIcon={downloadIcon} />
            <Icon iconName="sidebar" downloadIcon={downloadIcon} />
            <Icon iconName="skipback" downloadIcon={downloadIcon} />
            <Icon iconName="skipforward" downloadIcon={downloadIcon} />
            <Icon iconName="slack" downloadIcon={downloadIcon} />
            <Icon iconName="slash" downloadIcon={downloadIcon} />
            <Icon iconName="sliders" downloadIcon={downloadIcon} />
            <Icon iconName="smartphone" downloadIcon={downloadIcon} />
            <Icon iconName="smile" downloadIcon={downloadIcon} />
            <Icon iconName="speaker" downloadIcon={downloadIcon} />
            <Icon iconName="square" downloadIcon={downloadIcon} />
            <Icon iconName="star" downloadIcon={downloadIcon} />
            <Icon iconName="stopcircle" downloadIcon={downloadIcon} />
            <Icon iconName="sun" downloadIcon={downloadIcon} />
            <Icon iconName="sunrise" downloadIcon={downloadIcon} />
            <Icon iconName="sunset" downloadIcon={downloadIcon} />
            <Icon iconName="tablet" downloadIcon={downloadIcon} />
            <Icon iconName="tag" downloadIcon={downloadIcon} />
            <Icon iconName="target" downloadIcon={downloadIcon} />
            <Icon iconName="terminal" downloadIcon={downloadIcon} />
            <Icon iconName="thermometer" downloadIcon={downloadIcon} />
            <Icon iconName="thumbsdown" downloadIcon={downloadIcon} />
            <Icon iconName="thumbsup" downloadIcon={downloadIcon} />
            <Icon iconName="toggleleft" downloadIcon={downloadIcon} />
            <Icon iconName="toggleright" downloadIcon={downloadIcon} />
            <Icon iconName="tool" downloadIcon={downloadIcon} />
            <Icon iconName="trashtwo" downloadIcon={downloadIcon} />
            <Icon iconName="trash" downloadIcon={downloadIcon} />
            <Icon iconName="trello" downloadIcon={downloadIcon} />
            <Icon iconName="trendingdown" downloadIcon={downloadIcon} />
            <Icon iconName="trendingup" downloadIcon={downloadIcon} />
            <Icon iconName="triangle" downloadIcon={downloadIcon} />
            <Icon iconName="truck" downloadIcon={downloadIcon} />
            <Icon iconName="tv" downloadIcon={downloadIcon} />
            <Icon iconName="twitch" downloadIcon={downloadIcon} />
            <Icon iconName="twitter" downloadIcon={downloadIcon} />
            <Icon iconName="type" downloadIcon={downloadIcon} />
            <Icon iconName="umbrella" downloadIcon={downloadIcon} />
            <Icon iconName="underline" downloadIcon={downloadIcon} />
            <Icon iconName="unlock" downloadIcon={downloadIcon} />
            <Icon iconName="uploadcloud" downloadIcon={downloadIcon} />
            <Icon iconName="upload" downloadIcon={downloadIcon} />
            <Icon iconName="usercheck" downloadIcon={downloadIcon} />
            <Icon iconName="userminus" downloadIcon={downloadIcon} />
            <Icon iconName="userplus" downloadIcon={downloadIcon} />
            <Icon iconName="userx" downloadIcon={downloadIcon} />
            <Icon iconName="user" downloadIcon={downloadIcon} />
            <Icon iconName="users" downloadIcon={downloadIcon} />
            <Icon iconName="videooff" downloadIcon={downloadIcon} />
            <Icon iconName="video" downloadIcon={downloadIcon} />
            <Icon iconName="voicemail" downloadIcon={downloadIcon} />
            <Icon iconName="volumeone" downloadIcon={downloadIcon} />
            <Icon iconName="volumetwo" downloadIcon={downloadIcon} />
            <Icon iconName="volumex" downloadIcon={downloadIcon} />
            <Icon iconName="volume" downloadIcon={downloadIcon} />
            <Icon iconName="watch" downloadIcon={downloadIcon} />
            <Icon iconName="wifioff" downloadIcon={downloadIcon} />
            <Icon iconName="wifi" downloadIcon={downloadIcon} />
            <Icon iconName="wind" downloadIcon={downloadIcon} />
            <Icon iconName="xcircle" downloadIcon={downloadIcon} />
            <Icon iconName="xoctagon" downloadIcon={downloadIcon} />
            <Icon iconName="xsquare" downloadIcon={downloadIcon} />
            <Icon iconName="x" downloadIcon={downloadIcon} />
            <Icon iconName="youtube" downloadIcon={downloadIcon} />
            <Icon iconName="zapoff" downloadIcon={downloadIcon} />
            <Icon iconName="zap" downloadIcon={downloadIcon} />
            <Icon iconName="zoomin" downloadIcon={downloadIcon} />
            <Icon iconName="zoomout" downloadIcon={downloadIcon} />
          </div>
        </Page>
      </div>
    </div>
  );
};

let Icon = ({ downloadIcon, iconName }) => {
  let [stroke, updateStroke] = useState('white');
  let [fill, updateFill] = useState('');
  let [backgroundColor, updateBackgroundColor] = useState('black');
  let [icon, updateIconName] = useState(iconName);

  return (
    <>
      <div className="mt-4 ml-4">
        <div
          style={{ backgroundColor }}
          className="flex items-center justify-center bg-black rounded-apple h-15 w-15 "
        >
          <IconSelector icon={iconName} stroke={stroke} fill={fill} />
        </div>
        <div
          onClick={() => downloadIcon({ stroke, fill, backgroundColor, icon })}
          className="flex items-center justify-center w-10 h-10 mt-3 bg-gray-100 cursor-pointer rounded-apple"
        >
          <Download className="text-gray-800" />
        </div>
      </div>
    </>
  );
};

let RenderBigIcon = React.forwardRef((props, ref) => {
  let { activeIcon } = props;
  console.log(activeIcon);
  return (
    <div
      ref={ref}
      style={{
        backgroundColor: activeIcon.backgroundColor,
        width: 512,
        height: 512,
      }}
      className="flex items-center justify-center "
    >
      <IconSelector
        size={275}
        icon={activeIcon.icon}
        stroke={activeIcon.stroke}
        fill={activeIcon.fill}
      />
    </div>
  );
});

export default Home;
