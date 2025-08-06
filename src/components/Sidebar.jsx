import React, { useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';

export function Sidebar() {
  const [open, setOpen] = useState(false);

  const line1Ref = useRef(null);
  const line2Ref = useRef(null);
  const line3Ref = useRef(null);
  const menuRef = useRef(null);
  const sidebarRef = useRef(null);
  const webLogoRef = useRef(null);
  const sidebarListRef = useRef(null);
  

  const toggleMenu = () => {
    const line1 = line1Ref.current;
    const line2 = line2Ref.current;
    const line3 = line3Ref.current;
    const menu = menuRef.current;
    const body = document.body;
    const specialThanks = document.querySelector('.specialThanks');
    const notFoundMessage = document.querySelector('.notFound-message');
    const sidebar = sidebarRef.current;
    const webLogo = webLogoRef.current;
    const sidebarList = sidebarListRef.current;

    if (!open) {
      console.log(sidebarRef)
      line1.style.transform = 'translateX(36px) translateY(-8px) rotate(45deg)';
      line2.style.opacity = '0';
      line3.style.transform = 'translateX(-36px) translateY(34px) rotate(-45deg)';
      menu.style.display = 'block';

      sidebar.classList.remove('closed');
      sidebarList.classList.remove('closed');
      sidebar.classList.add('opened');
      sidebarList.classList.add('opened');

      if(specialThanks !== null){
        specialThanks.style.display = 'none';
      }

      if(notFoundMessage !== null){
        notFoundMessage.style.display = 'none';
      }

      

      //body.style.overflow = 'hidden';
    } else {
      line1.style.transform = 'translateX(0) translateY(0) rotate(0)';
      line2.style.opacity = '1';
      line3.style.transform = 'translateX(0) translateY(0) rotate(0)';
      menu.style.display = 'block';

      sidebar.classList.remove('opened');
      sidebarList.classList.remove('opened');
      sidebar.classList.add('closed');
      sidebarList.classList.add('closed');

      if(specialThanks !== null){
        specialThanks.style.display = 'flex';
      }

      if(notFoundMessage !== null){
        notFoundMessage.style.display = 'flex';
      }
      
      

      body.style.overflow = 'auto';
    }

    setOpen(!open);
  };

  return (
    <nav className="Sidebar closed" ref={sidebarRef}>
      <svg
        id="menu_icon"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 100 100"
        onClick={toggleMenu}
      >
        <line ref={line1Ref} x1="20" y1="30" x2="80" y2="30" strokeWidth="8" strokeLinecap="round" stroke="black" />
        <line ref={line2Ref} x1="20" y1="50" x2="80" y2="50" strokeWidth="8" strokeLinecap="round" stroke="black" />
        <line ref={line3Ref} x1="20" y1="70" x2="80" y2="70" strokeWidth="8" strokeLinecap="round" stroke="black" />
      </svg>

      <img ref={webLogoRef} src="/badges/assets/githubBadgeslogoIco.svg" id="webLogo" alt="logo" />

      <ul ref={sidebarListRef} className="sidebarList closed">
        <li><NavLink id="homeLi" to="/">Home</NavLink></li>
        <li><NavLink id="faqLi" to="/Faq">FAQ</NavLink></li>
        <li><NavLink id="thanksLi" to="/SpecialThanks">Thanks to</NavLink></li>
        <li><a id="repoLi" href="https://github.com/codejovz/badges" target="_blank" rel="noopener noreferrer">Github repo</a></li>
      </ul>

      <div id="menu" ref={menuRef} style={{ display: 'none' }}>
        
      </div>
    </nav>
  );
}
