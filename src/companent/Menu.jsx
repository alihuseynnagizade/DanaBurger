import '../assets/css/menu.css'
import { Link } from 'react-router-dom';
import { FaLocationDot } from "react-icons/fa6";
import { IoIosCall } from "react-icons/io";
import { RiInstagramFill } from "react-icons/ri";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';



const menuItems = [
  {
    name: "Quzu qarışıq",
    price: "14₼",
    img: "https://monyo.az/uploads/a_119_202202020235011711396088.jpg" 
  },
  {
    name: "Urfa Dürüm",
    price: "7₼",
    img: "https://monyo.az/uploads/a_119_20220202143109112755416.jpg"
  },
  {
    name: "Paytaxt salatı",
    price: "3.50₼",
    img: "https://monyo.az/uploads/a_119_2022020120515815060034.jpg"
  },
  {
    name: "Tərəvəzli Lokum",
    price: "14₼",
    img: "https://monyo.az/uploads/a_119_2022012814141684274533.jpg"
  },
  {
    name: "Tomahawk",
    price: "50₼",
    img: "https://monyo.az/uploads/a_119_202202021617301138186084.jpg"
  },
  {
    name: "Special spagetti",
    price: "13₼",
    img: "https://monyo.az/uploads/a_119_202203031400181471369965.jpg"
  },
  {
    name: "Pizza toyuqlu",
    price: "8₼",
    img: "https://monyo.az/uploads/a_119_202202020007541128594533.jpg"
  },
  {
    name: "Quşbaşı pide",
    price: "9₼",
    img: "https://monyo.az/uploads/a_119_20220201233951134221932.jpg"
  }
];

const foodData = {
  burgers: [
  {img:"https://monyo.az/uploads/a_119_20220203111851786827943.jpg", name: "BBQ Burger", price: "8₼"},
  {img:"https://monyo.az/uploads/a_119_202202031127411062698883.jpg", name: "Steyk burger", price: "9₼"}, 
  {img:"https://monyo.az/uploads/a_119_20220203115410436343421.jpg", name: "Special Dana Burger", price: "13₼"}
  ],
  pizza: [
  {img: "https://monyo.az/uploads/a_119_202202012359301311493233.jpg", name: "Pizza göbələkli", price: "8₼"},
  {img: "https://monyo.az/uploads/a_119_20220202000952639153148.jpg", name: "Pizza ətli", price: "10₼"},
  {img: "https://monyo.az/uploads/a_119_20220202002818267200322.jpg", name: "Pizza kolbasalı", price: "9₼"}
  ],
  drinks: [
  {img:"https://monyo.az/uploads/a_119_20220203151708148243458.jpg", name: "Çiyələkli Moxito", price: "6₼"}, 
  {img:"https://monyo.az/uploads/a_119_20220203141822167559757.jpg", name: "Limonlu limonad", price: "4.50₼"}, 
  {img:"https://monyo.az/uploads/a_119_202202031416431940999439.jpg", name: "Mövsüm limonadlar  ", price: "2.50₼"}
  ],
  dessert: [
  {img: "https://monyo.az/uploads/a_119_202202020106201508415061.jpg", name: "Künəfə", price: "6₼"}, 
  {img: "https://monyo.az/uploads/a_119_202202020125281152063107.jpg", name: "Havuc dilim", price: "7₼"}, 
  {img: "https://monyo.az/uploads/a_119_202202020128141852621690.jpg", name: "Sütlac", price: "5₼"}
  ]
};




const Menu = () => {
  const [category, setCategory] = useState("burgers");

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

  return (
    <>
    <header className='head-m'>
            <div className='div-bar-m'>
                <nav className='nav-bar-m'>
                    <img onClick={handleImageClick} className='danaburger-head-logo-m' src="Adsız_tasarım__6_-removebg-preview-removebg-preview (1).png" alt="" />
                    <div>
                    <ul className='list-menu-m'>
                        <li className='list-item-m'><Link className='link-item' to='/'>ANA SƏHİFƏ</Link></li>
                        <li className='list-item-m'><Link className='link-item1' to='/Menu'>MENYU</Link></li>
                        <li className='list-item-m'><Link className='link-item' to='/About'>HAQQIMIZDA</Link></li>
                        <li className='list-item-m'><Link className='link-item' to='/Contact'>ƏLAQƏ</Link></li>
                    </ul>
                    {/* <IoPerson className='head-icon' style={{fontSize:"1.2em",marginLeft:"5em"}}/>
                    <FaShoppingCart className='head-icon' style={{fontSize:"1.2em",marginLeft:"1em"}}/>
                    <FaSearch className='head-icon' style={{fontSize:"1.2em",marginLeft:"1em"}}/> */}
                    <button className='OnlineZakaz-btn-m'>Online Sifariş</button>
                    </div>
                </nav>
            </div>
            <section className='menu-preview-section-m'>
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
        </header>
        <section className='menu-section'>
          <div className="menu-container">
      <h2 className="menu-title">Menyu Qiymətlərimiz</h2>
      <p className="menu-description">
        Menyu qiymətlərimiz hər kəsin büdcəsinə uyğundur. Keyfiyyətli və ləzzətli yeməkləri münasib qiymətlərlə təqdim edirik
      </p>
      <div className="menu-grid">
        {menuItems.map((item, index) => (
          <div key={index} className="menu-item">
            <div className="item-info">
              <img src={item.img} alt={item.name} className="item-img" />
              <div>
                <h3 className="item-name">{item.name}</h3>
                <p className="item-desc">Keyfiyyətli danadan hazırlanan, dadı unudulmaz burger!</p>
              </div>
            </div>
            <div className="item-price">{item.price}</div>
          </div>
        ))}
      </div>
    </div>
    </section>
    <section className='button-gallery'>
       <div className="gallery-container">
      {/* Sol şəkil */}
      <div className="left-image">
        <img src="https://monyo.az/uploads/a_back_img_119.jpg" alt="Dekor" />
      </div>

      {/* Sağ hissə */}
      <div className="right-content">
        <div className="buttons">
          <button onClick={() => setCategory("burgers")} className={category === "burgers" ? "active" : ""}>Burgerlər</button>
          <button onClick={() => setCategory("pizza")} className={category === "pizza" ? "active" : ""}>Pizza</button>
          <button onClick={() => setCategory("drinks")} className={category === "drinks" ? "active" : ""}>Soyuq içkilər</button>
          <button onClick={() => setCategory("dessert")} className={category === "dessert" ? "active" : ""}>Desert</button>
        </div>

        <div className="images">
          {foodData[category].map((item, i) => (
            <div key={i} className="food-card">
              <img src={item.img} alt={item.name} />
              <div className="food-info">
                <h1>{item.name}</h1>
                <h3>{item.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
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

export default Menu