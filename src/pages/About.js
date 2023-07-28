import React from 'react'
import logo from '../foto/logoNavbar.jpeg'
export default function About() {
  return (
    <div className="AboutSection">
        <div className="AboutDic">
            <img className="AboutLogo" src={logo} alt="logo"/>

            <h1> About our company</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry”s standard dummy text ever since the 1500s,<br/>
                when an unknown printer took a galley of type and scrambled it to make a type
                specimen book. It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was popularised in <br/>
                the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including
                versions of Lorem Ipsum.
                It is a long established fact that a reader will be distracted by the readable content
                of a page when looking at its layout. The point of using Lorem Ipsum is that it has a
                more-or-less normal distribution of letters, as opposed to using “Content here, content
                here”, making it look like readable English. </p>
        </div>
        <hr/>
        <div className="Aboutpartners">
            <h1>Our Patreon </h1>
            <div className="patreon-footer-ad">
                <a href="https://www.couponlab.com/" target="_blank" rel="noopener">
                    <img src="https://www.couponlab.com/wp-content/uploads/2023/07/couponlab-logo4.png" alt="CouponLab"/>
                </a>
                <a href="https://www.couponlab.com/" target="_blank" rel="noopener">
                    <img src="https://i.postimg.cc/G3jfnT8k/Load-View-logo-color.png" alt="CouponLab"/>
                </a>
                <a href="https://www.couponlab.com/" target="_blank" rel="noopener">
                    <img src="https://i.postimg.cc/PJtkkhM7/veepn-shield-sticker-1-1.png" alt="CouponLab"/>
                </a>
                <a href="https://www.couponlab.com/" target="_blank" rel="noopener">
                    <img src="https://www.couponlab.com/wp-content/uploads/2023/07/couponlab-logo4.png" alt="CouponLab"/>
                </a>
                <a href="https://www.couponlab.com/" target="_blank" rel="noopener">
                    <img src="https://www.couponlab.com/wp-content/uploads/2023/07/couponlab-logo4.png" alt="CouponLab"/>
                </a>
                <a href="https://www.couponlab.com/" target="_blank" rel="noopener">
                    <img src="https://www.couponlab.com/wp-content/uploads/2023/07/couponlab-logo4.png" alt="CouponLab"/>
                </a>
            </div>
        </div>
    </div>
  )
}
