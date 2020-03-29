import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

import Search from './../Search'
import CartIcon from './../CartIcon'

const Header = props => {

  useEffect(() => {
    const body = document.body;
    const scrollUp = "scroll-up";
    const scrollDown = "scroll-down";
    let lastScroll = 0;

    window.addEventListener("scroll", () => {
      const currentScroll = window.pageYOffset;
      if (currentScroll === 0) {
        body.classList.remove(scrollUp);
        return;
      }
      
      if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
      } else if (currentScroll < lastScroll && body.classList.contains(scrollDown)) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
      }
      lastScroll = currentScroll;
    });
  })
  
  return (
    <header className='c-Header'>
      <div className="container">
        <div className="row">
          <div className="col-1 c-Header--margin-right"><Link to="/view/plp" className="c-Header__logo-main"><FontAwesomeIcon className="c-Header__iconClass" icon={faStar} /></Link></div>
          <div className={`${props.inCart ? "col-10" : "col-9 c-Header--margin-right"}`}><Search inCart={props.inCart} /></div>
          <div className="col-1 c-Header__cartIconContainer--aligner">{!props.inCart && <CartIcon />}</div>
        </div>
      </div>
    </header>
  );
};

Header.defaultProps = {

};

Header.propTypes = {

};

export default Header;