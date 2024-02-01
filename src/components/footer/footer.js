import '../../css/footer.css';
import React, { Component } from 'react';
import { FaInstagram, FaFacebook, FaTwitter  } from "react-icons/fa";

export class Footer extends Component {
  // constructor(props){
  //   super(props);
  // }
  render() {
    return (
      <div className='f_div_container'>
        <p className='f_shop_name'>&copy; {this.props.currentDate.getFullYear()} All rights reserved</p>
        <div className='f_socialmedia_icons'>
          <FaInstagram className='h_icon' aria-label="Instagram" />
          <FaFacebook className='h_icon' aria-label="Facebook" />
          <FaTwitter className='h_icon' aria-label="Twitter" />
        </div>
      </div>
    )
  }
}

export default Footer

