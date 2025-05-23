import '../assets/css/about.css'  
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import { useNavigate } from 'react-router-dom';



const About = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/');
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
    <header className='head-ab'>
        <div className='div-bar-ab'>
            <nav className='nav-bar-ab'>
                <img onClick={handleImageClick} className='danaburger-head-logo-ab' src="Adsız_tasarım__6_-removebg-preview-removebg-preview (1).png" alt="" />
                <div>
                <ul className='list-menu-ab'>
                    <li className='list-item-ab'><Link className='link-item' to='/'>ANA SƏHİFƏ</Link></li>
                    <li className='list-item-ab'><Link className='link-item' to='/Menu'>MENYU</Link></li>
                    <li className='list-item-ab'><Link className='link-item1' to='/About'>HAQQIMIZDA</Link></li>
                    <li className='list-item-ab'><Link className='link-item' to='/Contact'>ƏLAQƏ</Link></li>
                </ul>
                {/* <IoPerson className='head-icon' style={{fontSize:"1.2em",marginLeft:"5em"}}/>
                <FaShoppingCart className='head-icon' style={{fontSize:"1.2em",marginLeft:"1em"}}/>
                <FaSearch className='head-icon' style={{fontSize:"1.2em",marginLeft:"1em"}}/> */}
                <button className='OnlineZakaz-btn-ab'>Online Sifariş</button>
                </div>
            </nav>
        </div>
    </header>
    <section className='about-prev-section-ab'>
        <div className='about-prev-img-div-ab'>
          <img src="about-img.png" alt="" />
        </div>
        <div className='about-prev-title-ab'>
        <h1>Biz Dana Burgeriy</h1>
        <p>Dana burger, fast food dünyasının ən sevilən və geniş yayılmış növlərindən biridir. Onun əsasını 100% saf dana ətindən hazırlanmış köftə təşkil edir. Bu keyfiyyətli mal əti burgerə həm zəngin və dərin bir ləzzət, həm də yüksək doyumluluq qazandırır. Dana burgerin digər burger növlərindən fərqi, onun ləzzətinin daha təbii və aromatik olmasıdır. Ətin təbii dadı, ədviyyatların düzgün balansı ilə birləşərək dad qönçələrində unudulmaz bir təəssürat yaradır.

Adətən yumşaq və yüngül şəkildə qızardılmış iki çörək dilimi arasında təqdim olunan dana burgerin içərisinə kahı, təzə pomidor, turşu, pendir, qızarmış soğan və müxtəlif souslar əlavə olunaraq həm dad, həm də vizual baxımdan zənginləşdirilir. Bu burger həm klassik dad axtaranların, həm də yeni ləzzətlər kəşf etmək istəyənlərin seçimidir.

Günümüzdə dana burger təkcə fast food restoranlarında deyil, həm də gurme məkanlarda və ev şəraitində də hazırlanır. Hər bir versiyası fərqli təqdimatla olsa da, əsas olan keyfiyyətli dana ətinin qorunmasıdır. Dana burger sadəcə bir yemək deyil, eyni zamanda doyurucu, qidalı və ləzzətli bir təcrübədir. O, həm sürətli qidalanmanın, həm də müasir qastronomiyanın vazkeçilməz simvoluna çevrilmişdir</p>
        </div>
      </section>
      <footer className="foot-ab">
            <div className="div-forfoot-ab">
              <h1>Bizimlə Əlaqə</h1>
              <h3 className="elaqe-txts-ab" onClick={goToLocation}><FaLocationDot className="location-icon-ab"/> Məntəqə</h3>
              <h3 className="elaqe-txts-ab"><IoIosCall className="call-icon-ab"/> +994 055 566 01 10</h3>
              <h3 className="elaqe-txts-ab" onClick={goToInsta}><RiInstagramFill className="ig-icon-ab"/> danaburger.az</h3>
            </div>
            <div className="div-forfoot-ab">
              <h1>Dana Burger</h1>
              <h3>Dana burger — dana ətindən hazırlanan, içində köftə, çörək, tərəvəz və sous olan məşhur fast food yeməyidir. Dadlı, doyurucu və yüksək proteinlidir. Dünya üzrə geniş sevilir.</h3>
              <div className="div-for-icons-ab">
                 <div className="insta-foot" onClick={goToInsta}></div>
                 <div className="bolt" onClick={goToBolt}></div>
                 <div className="wolt" onClick={goToWolt}></div>
              </div>
            </div>
            <div className="div-forfoot-ab">
              <h1>Açılış saatları</h1>
              <h3>Hər Gün</h3>
              <h3>11:00 am -- 05:00 pm</h3>
              <h3>Nuş Olsun</h3>
            </div>
          </footer>
    </>
  )
}

export default About