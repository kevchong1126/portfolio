import React, { useRef, createContext } from 'react'

export const context = createContext();

const Context = (props) => {
  const track = useRef();
  const fullNav = useRef();
  const navbar = useRef();
  const burgers = useRef([]);
  const navLinks = useRef([]);

  const heroRef = useRef();
  const heroContent = useRef();
  const heroCols = useRef([]);
  const heroWord1 = useRef();
  const heroWord2 = useRef();
  const heroWord3 = useRef();

  const p1Ref = useRef();
  const p1Heading = useRef([]);
  const p1Mask = useRef();
  const p1Name = useRef([]);
  const p1Cols = useRef([]);
  const p1Img = useRef();
  const p1ParContent = useRef();
  const p1ParImg = useRef();
  const p1ShowImg = useRef();
  const p1ShowCol = useRef();
  const p1ShowCols = useRef([]);
  const p1ShowColImg1 = useRef();
  const p1ShowColImg2 = useRef();

  const p2FullImg = useRef();
  const p2MainCont = useRef();
  const p2MainWord1 = useRef();
  const p2MainWord2 = useRef();
  const p2MainWord3 = useRef();
  const p2Titles = useRef([]);
  const p2Mask = useRef();
  const p2PinText = useRef();
  const p2PinCont= useRef();
  const p2PinImgCont = useRef();
  
  const p3FullImg = useRef();
  const p3MainCont = useRef();
  const p3MainWord1 = useRef();
  const p3MainWord2 = useRef();
  const p3MainWord3 = useRef();
  const p3Mask = useRef();
  const p3Titles = useRef([]);
  const p3GalWord1 = useRef();
  const p3GalWord2 = useRef();
  const p3GalImg = useRef([]);

  const footerTitles = useRef([]);
  const footerMask = useRef();
  const footerMainCont = useRef();
  const footerMainTitle = useRef();
  const footerMainLinks = useRef();

  const mentionsTitle = useRef();
  const mentionsText = useRef([]);
  const mentionsLine = useRef([]);

  const obj = {
    track, heroRef, heroCols, heroContent, heroWord1, heroWord2, heroWord3,
    p1Ref, p1Heading, p1Mask, p1Name, p1Cols, p1Img, p1ParContent, p1ParImg, p1ShowImg, p1ShowCol, p1ShowCols,
    p1ShowColImg1, p1ShowColImg2,
    p2FullImg, p2MainCont, p2MainWord1, p2MainWord2, p2MainWord3, p2Titles, p2Mask, p2PinText, p2PinCont, p2PinImgCont,
    p3FullImg, p3MainCont, p3MainWord1, p3MainWord2, p3MainWord3, p3Mask, p3Titles, p3GalWord1,  p3GalWord2, p3GalImg,
    fullNav, navbar, burgers, navLinks,
    footerTitles, footerMask, footerMainCont, footerMainTitle, footerMainLinks,
    mentionsTitle, mentionsText, mentionsLine
  };
    
  return (
    <context.Provider value={obj}>
        {props.children}
    </context.Provider>
  )
}

export default Context