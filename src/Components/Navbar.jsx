/** @format */

import React from "react";
import {Link} from "react-router-dom"

export const Navbar = () => {
  return (
    <div>
      <nav className='navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary'>
        <div className='container'>
          {/* <a className='navbar-brand' href='#'>
            Contact book
          </a>  après l'ajout du router j'ai changé le a href par link}*/}
          <Link className='navbar-brand' to='/'>
            Contact book
          </Link>
          <div>
            {/* <a className='btn btn-light ml-auto'>create contact</a> */}
            <Link to='/contacts/add' className='btn btn-light ml-auto'>
              create contact
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};
