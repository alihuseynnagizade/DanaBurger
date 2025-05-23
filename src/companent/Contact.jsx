import '../assets/css/contact.css' 
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Contact = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/');
  };
  
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');

  const handleSubmit = (e) => {
    if (!email.includes('@')) {
      e.preventDefault();
      setEmailError('@ işarəsi olmalıdır');
    }
  };

  const goToLocation =()=>{
    window.open('https://maps.app.goo.gl/kwPQqNMeFZe4YTPL7')
  }


  const goToInsta =()=>{
    window.open('https://www.instagram.com/danaburger.az/')
  }

  const goToBolt =()=>{
    window.open('https://food.bolt.eu/az-AZ/335-baku/p/86204-dana-burger-günəşli')
  }

  const goToWolt = () => {
  window.open('https://wolt.com/az/aze/baku/restaurant/dana-burger-chi-guneshli?srsltid=AfmBOop_iIqhev6bi3-YlT-e2jNFly1dLeoF3lBJgVi4dOnRq_rusqYN');
  };

  return (
    <>
    <header className='head-c'>
        <div className='div-bar-c'>
            <nav className='nav-bar-c'>
                <img onClick={handleImageClick} className='danaburger-head-logo-c' src="Adsız_tasarım__6_-removebg-preview-removebg-preview (1).png" alt="" />
                <div>
                <ul className='list-menu-c'>
                    <li className='list-item-c'><Link className='link-item' to='/'>ANA SƏHİFƏ</Link></li>
                    <li className='list-item-c'><Link className='link-item' to='/Menu'>MENYU</Link></li>
                    <li className='list-item-c'><Link className='link-item' to='/About'>HAQQIMIZDA</Link></li>
                    <li className='list-item-c'><Link className='link-item1' to='/Contact'>ƏLAQƏ</Link></li>
                </ul>
                {/* <IoPerson className='head-icon' style={{fontSize:"1.2em",marginLeft:"5em"}}/>
                <FaShoppingCart className='head-icon' style={{fontSize:"1.2em",marginLeft:"1em"}}/>
                <FaSearch className='head-icon' style={{fontSize:"1.2em",marginLeft:"1em"}}/> */}
                <button className='OnlineZakaz-btn-c'>Online Sifariş</button>
                </div>
            </nav>
        </div>
    </header>
    <section className="booking-section">
      <div className="booking-container">
        <form
          action="https://formspree.io/f/xoqgdyjq"
          method="POST"
          onSubmit={handleSubmit}
          className="booking-form"
        >
          <h1 className="form-title-c">Rezerv Et</h1>

          <input type="text" name="name" placeholder="Adınız" required />
          <input type="tel" name="phone" placeholder="Telefon Nömrəsi" required />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setEmailError('');
            }}
            required
          />
          {emailError && <p className="error">{emailError}</p>}

          <select name="people" required>
            <option value="">Neçə nəfər?</option>
            {Array.from({ length: 5 }, (_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>

          <input type="date" name="date" required />

          <button type="submit">Rezerv Et</button>
        </form>
        </div>

        <div className="map-container">
          <iframe
            title="Google Map"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3039.536221403235!2d49.97483891131165!3d40.37480677132726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x403065000dff6d11%3A0xc581a48371f3ea32!2sDana%20Burger%20restoran%C4%B1!5e0!3m2!1saz!2saz!4v1747828276187!5m2!1saz!2saz"
          ></iframe>
        </div>
    </section>
    <footer className="foot">
          <div className="div-forfoot">
            <h1>Bizimlə Əlaqə</h1>
            <h3 className="elaqe-txts" onClick={goToLocation}><FaLocationDot className="location-icon"/> Məntəqə</h3>
            <h3 className="elaqe-txts"><IoIosCall className="call-icon"/> +994 055 566 01 10</h3>
            <h3 className="elaqe-txts" onClick={goToInsta}><RiInstagramFill className=" "/> danaburger.az</h3>
          </div>
          <div className="div-forfoot">
            <h1>Dana Burger</h1>
            <h3>Dana burger — dana ətindən hazırlanan, içində köftə, çörək, tərəvəz və sous olan məşhur fast food yeməyidir. Dadlı, doyurucu və yüksək proteinlidir. Dünya üzrə geniş sevilir.</h3>
            <div className="div-for-icons">
              <div className="insta-foot" onClick={goToInsta}></div>
              <div className="bolt" onClick={goToBolt}></div>
              <div className="wolt" onClick={goToWolt}></div>
            </div>
          </div>
          <div className="div-forfoot">
            <h1>Açılış saatları</h1>
            <h3>Hər Gün</h3>
            <h3>11:00 am -- 05:00 pm</h3>
            <h3>Nuş Olsun</h3>
          </div>
        </footer>
    </>
  )
}

export default Contact