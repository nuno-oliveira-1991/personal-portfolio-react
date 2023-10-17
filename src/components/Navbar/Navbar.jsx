import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { useModeContext } from "../../contexts/ModeContext";
import { useLocation } from 'react-router-dom';
import style from "./navbar-styles.module.scss";
import logo from "../../assets/icons/favicon-android-chrome-512x512-white.png";

const Navbar = () => {
  const [portfolio, setPortfolio] = useState(undefined);
 
  const {
    portfolioMode,
    setPortfolioMode,
    isMobile,
    setIsMobile
  } = useModeContext();

  const location = useLocation();
  const currentPath = location.pathname;

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 920);
    };
    handleResize();
    window.addEventListener('resize', handleResize);

    if (currentPath !== '/') setPortfolioMode(true);
    let pathName = currentPath.slice(1);
    if (pathName == 'about') setPortfolio('About');
    if (pathName == 'music') setPortfolio('Music');
    if (pathName == 'architecture') setPortfolio('Architecture');
    if (pathName == 'visual-arts') setPortfolio('Visual Arts');
    if (pathName == 'dev-projects') setPortfolio('Dev Projects');
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const goToPortfolio = (input) => {
    setPortfolio(input);
    if (!portfolioMode) setPortfolioMode(true);
  }
  const goToHome = () => {
    if (portfolioMode) setPortfolioMode(false);
  }


  return (
    <div className={style['container']}>
      <div className={ portfolioMode ? style['logo-container--portfolio'] : style['logo-container']}>
        <Link 
          className={style['logo-link']}
          style={{ color: 'white', textDecoration: 'none', height: '100%' }} 
          to={`/`}
          onClick={goToHome}>
          <img src={logo}/>
        </Link>
      </div>
      {portfolioMode && isMobile ? <h2 className={style['portfolio-name']}>{portfolio}</h2> :
        <div className={style['menu-container']}>
          <Link 
            className={style['menu-link']}
            style={{ color: 'white', textDecoration: 'none', height: '100%' }} 
            to={`/about`}
            onClick={() => goToPortfolio('About')}>
            <h2>Nuno O.</h2>
          </Link>
          <Link 
            className={style['menu-link']}
            style={{ color: 'white', textDecoration: 'none', height: '100%' }} 
            to={`/music`}
            onClick={() => goToPortfolio('Music')}>
            <h2>Musician.</h2>
          </Link>
          <Link 
            className={style['menu-link']}
            style={{ color: 'white', textDecoration: 'none', height: '100%' }} 
            to={`/architecture`}
            onClick={() => goToPortfolio('Architecture')}>
            <h2>Architect.</h2>
          </Link>
          <Link 
            className={style['menu-link']}
            style={{ color: 'white', textDecoration: 'none', height: '100%' }} 
            to={`/visual-arts`}
            onClick={() => goToPortfolio('Visual Arts')}>
            <h2>Visual Artist.</h2>
          </Link>
          <Link 
            className={style['menu-link']}
            style={{ color: 'white', textDecoration: 'none', height: '100%' }} 
            to={`/dev-projects`}
            onClick={() => goToPortfolio('Dev Projects')}>
            <h2>Web Developer.</h2>
          </Link>
        </div>}
    </div>
  )
};

export default Navbar;