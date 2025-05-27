import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";
import { GiMeal } from "react-icons/gi";
import { PiHamburgerFill } from "react-icons/pi";
import { TbSaladFilled } from "react-icons/tb";
import { GiBarbecue } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { FaInstagram } from "react-icons/fa";
import React, { useState } from 'react';
import Select from 'react-select';  
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { RiInstagramLine } from "react-icons/ri";
import '../assets/css/home.css'






const Home = () => {
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

  const goToCizBurger = () =>{
    window.open('https://wolt.com/az/aze/baku/restaurant/dana-burger-i-narimanov/cizburger-itemid-62690a9dcc3159d8bc8e86a7?search=çiz')
  }

  const goToGangsBurger = () =>{
    window.open('https://wolt.com/az/aze/baku/restaurant/dana-burger-i-narimanov/qanqster-burger-itemid-62690b9c3189e267bbd60c11?search=gangs')
  }
  
  const goToFantastik = () =>{
    window.open('https://wolt.com/az/aze/baku/restaurant/dana-burger-i-narimanov/fantastik-burger-itemid-6269107936c9792bdc371792?search=fantastik')
  }

  const goToCitir = () =>{
    window.open('https://wolt.com/az/aze/baku/restaurant/dana-burger-i/citir-burger-itemid-61de8289c0e276718b8ed151?search=çıtır')
  }

  const goToChicken = () =>{
    window.open('https://wolt.com/az/aze/baku/restaurant/dana-burger-i-narimanov/cikenburger-itemid-626909d12bb96591292e108d?search=chick')
  }
  
  const goToDana = () =>{
    window.open('https://wolt.com/az/aze/baku/restaurant/dana-burger-i-narimanov/dana-burger-itemid-62690e4075390cbed781a7ad?search=dana')
  }


  const handleClick = () => {
    navigate('/');
  };

  return (
    <>
    <header className='head'>
        <div className='div-bar'>
            <nav className='nav-bar'>
                <img onClick={handleClick} className='danaburger-head-logo' src="Adsız_tasarım__6_-removebg-preview-removebg-preview (1).png" alt="" />
                <div>
                <ul className='list-menu'>
                    <li className='list-item'><Link className='link-item1' to='/'>ANA SƏHİFƏ</Link></li>
                    <li className='list-item'><Link className='link-item' to='/Menu'>MENYU</Link></li>
                    <li className='list-item'><Link className='link-item' to='/About'>HAQQIMIZDA</Link></li>
                    <li className='list-item'><Link className='link-item' to='/Contact'>ƏLAQƏ</Link></li>
                </ul>
                {/* <IoPerson className='head-icon' style={{fontSize:"1.2em",marginLeft:"5em"}}/>
                <FaShoppingCart className='head-icon' style={{fontSize:"1.2em",marginLeft:"1em"}}/>
                <FaSearch className='head-icon' style={{fontSize:"1.2em",marginLeft:"1em"}}/> */}
                <button onClick={goToWolt} className='OnlineZakaz-btn'>Online Sifariş</button>
                </div>
            </nav>
        </div>
        <div className='container'>
          <div className='container-1'>
            <h1>Fast Food Restoranı</h1>
            <p>Dana Burger – dadın zirvəsi! Təzə və yüksək keyfiyyətli dana ətindən hazırlanmış burgerlərimiz, xüsusi souslarımız və doyumlu menyularımızla hər loxmada fərqi hiss etdiririk. Sürətli xidmətimiz, rahat mühitimiz və sevgi ilə hazırlanmış yeməklərimizlə Dana Burger, həm ləzzət axtaranların, həm də keyfiyyətə önəm verənlərin bir nömrəli seçimidir.</p>
            <button onClick={goToWolt}>İndi Sifariş Et</button>
          </div>
        </div>
    </header>
    <main>
      <section className='menu-haqda'>
        <div className='menu-haqda-div'>
          <div className='seher-yemeyi-div'>
            <div><GiMeal className='menu-iconlari' /></div>
            <h3>Səhər Yeməyi</h3>
            <p>Dana burger restoranında səhər yeməyi təzə yumurta, isti çay, çörək, pendir və mürəbbə kimi ləzzətli seçimlərdən ibarətdir.</p>
          </div>
          <div className='burger-div'>
            <div><PiHamburgerFill className='menu-iconlari' /></div>
            <h3>Burgerlər</h3>
            <p>Dana burger restoranında burgerlər, təzə ət, xüsusi souslar və ləzzətli təravətlərlə hazırlanır, hər bir damağa uyğun fərqli dadlar təqdim edir.</p>
          </div>
          <div className='salatlar-div'>
            <div><TbSaladFilled className='menu-iconlari' /></div>
            <h3>Salatlar</h3>
            <p>Dana burger restoranının salatları, təzə tərəvəzlər və xüsusi soslarla hazırlanaraq, sağlam və ləzzətli seçimlər təklif edir.</p>
          </div>
          <div className='izqara-div'>
            <div><GiBarbecue className='menu-iconlari' /></div>
            <h3>Izqaralar</h3>
            <p>Dana burger restoranının izqaraları, ızgarada mükəmməl bişirilmiş ət və tərəvəzlərlə hazırlanan, dadlı və doyurucu yeməklər təqdim edir.</p>
          </div>
        </div>
      </section>
      <section className='menu-preview-section'>
        <div className='menu-prev-title-div'>
          <h1>Bizim Menyu</h1>
          <p>Əsl ət sevərlərə: 100% dana əti ilə hazırlanan, hər loxmasında ləzzət dolu burger menyumuzla tanış olun!</p>
        </div>
        <div className='menu-prev-div'>
          <div className='helper-div'>
          <img src="a_119_202202030000012164695 (1).jpg" alt="" />
          <div>
            <h1>Çizburger</h1>
            <p>Çəkilmiş ət 0.100qr, pomidor, turşu xiyar, souz, aysberq, pendir</p>
            <nav>
            <p>5₼</p>
            <button onClick={goToCizBurger}>Sifariş</button>
            </nav>
          </div>
          <img src="a_119_2022020300203419772888.jpg" alt="" />
          <div>
            <h1>Gangster Burger</h1>
            <p>Çəkilmiş ət 0.100qr, sosiska 0,080qr, sous, ketcup, pomidor, turşu xivar</p>
            <nav>
            <p>6₼</p>
            <button onClick={goToGangsBurger}>Sifariş</button>
            </nav>
          </div>
          <img src="730ef429-1697-49c7-bb35-b33fd9c443ff.jpg" alt="" />
          <div>
            <h1>Fantastik Burger</h1>
            <p>Çəkilmiş ət 0.200 qr, souz, pendir, qarışıq tərəvəz</p>
            <nav className='nav-helper'>
            <p>9.50₼</p>
            <button onClick={goToFantastik}>Sifariş</button>
            </nav>
          </div>
        </div>
        <div className='helper-div2'>
          <div>
            <h1>Çıtır Burger</h1>
            <p>Naggets 0.150 qr, pomidor, fri, souz, ketçup</p>
            <nav className='nav-helper'>
            <p>6₼</p>
            <button onClick={goToCitir}>Sifariş</button>
            </nav>
          </div>
          <img src="b6b1e35b-ce8e-4d77-981c-a8f622d2337b.jpg" alt="" />
          <div>
            <h1>Çikenburger</h1>
            <p>Çəkilmiş toyuq 0.100qr, pomidor, turşu xiyar, souz, aysberq, pendir</p>
            <nav>
            <p>4₼</p>
            <button onClick={goToChicken}>Sifariş</button>
            </nav>
          </div>
          <img src="dc997e7a-897a-462c-85bf-4ee4a8185f6a.jpg" alt="" />
          <div>
            <h1>Dana Burger</h1>
            <p>Tikə ət 0.100qr, çəkilmiş ət 100qr, pomidor, turşu xiyar, souz, aysberg, pendir</p>
            <nav>
            <p>8₼</p>
            <button onClick={goToDana}>Sifariş</button>
            </nav>
          </div>
          <img src="b2a60232-6b25-4b9f-92a5-96d21617dc56.jpg" alt="" />
          </div>
          </div>
      </section>
      <section className='about-prev-section'>
        <div className='about-prev-img-div'>
          <img src="about-img.png" alt="" />
        </div>
        <div className='about-prev-title'>
        <h1>Biz Dana Burgeriy</h1>
        <p>Dana Burger, əsas tərkibi dana ətindən hazırlanmış köftədən ibarət olan və iki hissəli çörək arasında təqdim olunan məşhur bir fast food yeməyidir. Bu burger növü həm klassik, həm də müasir mətbəxlərin ayrılmaz hissəsinə çevrilmişdir. Dana burgerin ən əsas xüsusiyyəti onun içərisində istifadə olunan ət köftəsinin 100% mal ətindən hazırlanmasıdır. Bu, ona zəngin bir ləzzət, yüksək doyumluluq və qida dəyəri qazandırır.</p>
        {/* <button><Link className='more-ab-btn' to='/About'>Əlavə Məlumat</Link></button> */}
        <Link className='more-ab-btn' to='/About'><button>Əlavə Məlumat</button></Link>
        </div>
      </section>
      <section className='blog-section'>
        <h1 className='blog-title'>Bizim Blog</h1>
        <p className='blog-p'>Daha ətraflı məlumat üçün instagram səhifəmizi takib edin</p>
        <div className='blog-div'>
          <div className='blog-divs' onClick={goToInsta}>
            <div className='overlay'><FaInstagram className='insta-icon-for-overlay' /></div>
            <img src="c6929a7a-6ee7-4f40-baef-aef529ec8abe.jpg" alt="" />
          </div>
          <div className='blog-divs' onClick={goToInsta}>
            <div className='overlay'><FaInstagram className='insta-icon-for-overlay'/></div>
            <img src="7dc462a7-eea8-4ba0-9c80-f6f0a7ff74ee.jpg" alt="" />
          </div>
          <div className='blog-divs' onClick={goToInsta}>
            <div className='overlay'><FaInstagram className='insta-icon-for-overlay'/></div>
            <img src="877682dd-1e2e-4c20-be83-d3da8f9e7a4b.jpg" alt="" />
          </div>
          <div className='blog-divs' onClick={goToInsta}>
            <div className='overlay'><FaInstagram className='insta-icon-for-overlay'/></div>
            <img src="ae40c53e-1ee6-42e1-af82-27fa8d81fcb6.jpg" alt="" />
          </div>
          <button onClick={goToInsta}>Əlavə Məlumat</button>
        </div>
      </section>
       <section className="booking-section">
      <div className="booking-container">
        <form
          action="https://formspree.io/f/xpwdebbo"
          method="POST"
          onSubmit={handleSubmit}
          className="booking-form"
        >
          <h1 className="form-title-1">Rezerv Et</h1>

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
    </main>
    <footer className="foot">
      <div className="div-forfoot">
        <h1>Bizimlə Əlaqə</h1>
        <h3 className="elaqe-txts" onClick={goToLocation}><FaLocationDot className="location-icon"/> Məntəqə</h3>
        <h3 className="elaqe-txts"><IoIosCall className="call-icon"/> +994 055 566 01 10</h3>
        <h3 onClick={goToInsta} className="elaqe-txts"><RiInstagramFill className=" "/> danaburger.az</h3>
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


export default Home