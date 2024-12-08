import React, { useState, useEffect } from "react";
import "./Sellon.css";
import custom_img from "../../Assets/Images/1mdm-product-1.png";
import ad_img from "../../Assets/Images/1mdm-product-image-4.png";
import da_img from "../../Assets/Images/1mdm-product-2.png";
import cs_img from "../../Assets/Images/1mdm-product-3.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules'; 
import { FaQuoteLeft } from "react-icons/fa";
import slide_img_1 from '../../Assets/Images/slider-1.webp'
import slide_img_2 from '../../Assets/Images/slider-2.webp'
import slide_img_3 from '../../Assets/Images/slider-3.webp'
import slide_img_4 from '../../Assets/Images/slider-4.webp'

const Sellon = () => {
  const [buyers, setBuyers] = useState(0);
  const [inquiries, setInquiries] = useState(0);
  const [countries, setCountries] = useState(0);
  const [activeButton, setActiveButton] = useState("customstorefront");
  const [animateContent, setAnimateContent] = useState(true); // To control fade-in effect

  // Number Counter Animation
  useEffect(() => {
    const totalDuration = 3000; // Total animation duration
    const frameRate = 20; // Update every 20ms
    const totalFrames = totalDuration / frameRate;

    const buyersTarget = 26000000;
    const inquiriesTarget = 400000;
    const countriesTarget = 200;

    const buyersIncrement = Math.ceil(buyersTarget / totalFrames);
    const inquiriesIncrement = Math.ceil(inquiriesTarget / totalFrames);
    const countriesIncrement = Math.ceil(countriesTarget / totalFrames);

    const interval = setInterval(() => {
      setBuyers((prev) =>
        prev + buyersIncrement >= buyersTarget ? buyersTarget : prev + buyersIncrement
      );
      setInquiries((prev) =>
        prev + inquiriesIncrement >= inquiriesTarget ? inquiriesTarget : prev + inquiriesIncrement
      );
      setCountries((prev) =>
        prev + countriesIncrement >= countriesTarget ? countriesTarget : prev + countriesIncrement
      );
    }, frameRate);

    return () => clearInterval(interval);
  }, []);
  
  
  
  const handleButtonClick = (section) => {
    setAnimateContent(false); 
    setTimeout(() => {
      setActiveButton(section);
      setAnimateContent(true); 
    }, 300); 
  };

  return (
    <>
      <div className="sell-banner">
        <div className="seller-banner-content">
          <div className="seller-left">
            <h4>Sell on 1mdm.com</h4>
            <h1>Reach millions of B2B buyers globally</h1>
            <div className="button-div">
              <button className="btn-1">Start Selling</button>
              <button className="btn-2">Chat with consultant</button>
            </div>
          </div>
          <div className="stats-section">
            <div>
              <h3>{buyers.toLocaleString()}</h3>
              <p>active buyers globally</p>
            </div>
            <div>
              <h3>{inquiries.toLocaleString()}</h3>
              <p>product inquiries daily</p>
            </div>
            <div>
              <h3>{countries}</h3>
              <p>countries and regions represented</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className='sellerhead'>1mdm.com is a leading ecommerce platform that helps SMEs go global</p>
    </div>
    <div className='video-container'>
        <div className='video-div'>
            <iframe width="546" height="307" 
                src="https://www.youtube.com/embed/TN7iJyc5Uks" 
                title="SIGNA™ Explorer Lift Installation" 
                frameborder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerpolicy="strict-origin-when-cross-origin" 
                allowfullscreen>
            </iframe>
        </div>
        <div className='video-content'>
            <p>Connect with millions of business buyers from around the world.</p>
            <p>Get the tools and know-how to build a successful ecommerce presence for your business.</p>
            <p>Pocket more from each sale, with take rates as low as 0% in some cases.</p>
        </div>
    </div>
    <div className='red-banner'>
        <h1>Largest number of products & categories of medical devices on a single place - 1mdm.com</h1>
        <h5>Connect with buyers worldwide for your product & start selling now.</h5>
    </div>
    <h2 className='b-tools'>Grow your business with a suite of tools built for you</h2>
      
      <div className="ref-div">
        <div className="ref-left">
          <button
            className={activeButton === "customstorefront" ? "active" : ""}
            onClick={() => handleButtonClick("customstorefront")}
          >
            Custom storefront
          </button>
          <button
            className={activeButton === "advertisement" ? "active" : ""}
            onClick={() => handleButtonClick("advertisement")}
          >
            Advertising tools
          </button>
          <button
            className={activeButton === "dataanalytics" ? "active" : ""}
            onClick={() => handleButtonClick("dataanalytics")}
          >
            Data and analytics
          </button>
          <button
            className={activeButton === "customersupport" ? "active" : ""}
            onClick={() => handleButtonClick("customersupport")}
          >
            Customer support
          </button>
        </div>
        <div className={`ref-right ${animateContent ? "fade-in" : "fade-out"}`}>
          {activeButton === "customstorefront" && (
            <div className="div-1">
              <div className="custom-content">
                <h1>Set up a store that showcases your brand</h1>
                <p>
                  Differentiate yourself from the competition with a full store
                  dedicated to your products- no coding or design skills necessary!
                </p>
              </div>
              <div className="custom-img">
                <img src={custom_img} alt="Custom storefront" />
              </div>
            </div>
          )}
          {activeButton === "advertisement" && (
            <div className="div-2">
              <div className="ad-content">
                <h1>Increase exposure by up to 120% with a suite of smart advertising tools.</h1>
                <p>
                  Get your products placed in the right spots to be noticed by
                  the exact audience you are targeting.
                </p>
              </div>
              <div className="ad-img">
                <img src={ad_img} alt="Advertising tools" />
              </div>
            </div>
          )}
          {activeButton === "dataanalytics" && (
            <div className="div-3">
              <div className="da-content">
                <h1>Optimize your every move with in-depth data and customer insights</h1>
                <p>
                Improve performance with dashboards detailing product exposure, click volume, spend, average cost, store visits, and more.!
                </p>
              </div>
              <div className="da-img">
                <img src={da_img} alt="Data analytics" />
              </div>
            </div>
          )}
          {activeButton === "customersupport" && (
            <div className="div-4">
              <div className="cs-content">
                <h1>Know you’re supported throughout your journey</h1>
                <p>
                From onboarding help to online chats to local support during business hours and account optimization tips -- we’re here for you
                </p>
              </div>
              <div className="cs-img">
                <img src={cs_img} alt="Customer support" />
              </div>
            </div>
          )}
        </div>
        
      </div>
      <div className="whole-swiper">
        <div className="swiper-head">
            <h2>Success stories from 1mdm.com sellers</h2>
        </div>
      <Swiper 
      navigation={true} 
      loop={true}
      autoplay={{
        delay: 3000, 
        disableOnInteraction: false
      }}
      modules={[Navigation,Autoplay]} 
      className="mySwiper">
        <SwiperSlide>
            <div className="slide-content">
            <div className="sell-slide-contnet">
                <i><FaQuoteLeft className="quote-icon"/></i>
                <p>Mr David runs a manufacturing company that works in this field of medical devices. With administrative and production across the country. With full respect for environment and several years’ experience using IP systems that are conventional</p>
            </div>
            <div className="img-slide">
                <img src={slide_img_1} alt="slide-1" />
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide-content">
            <div className="sell-slide-contnet-1">
                <i><FaQuoteLeft className="quote-icon"/></i>
                <p>Lab Evolution is an import - export company of reagents and laboratory equipment established over a decade. Our company’s team of experts (in the instrumentations and reagents market) carefully follows customers all over the world. Lab Evolution is able to offer all the most competitive and popular brands and the best quality products for your laboratory.</p>
            </div>
            <div className="img-slide">
                <img src={slide_img_2} alt="slide-1" />
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide-content">
            <div className="sell-slide-contnet-2">
                <i><FaQuoteLeft className="quote-icon"/></i>
                <p>Rupesh Kanna found himself in between jobs in 2016. He started a blog, and wrote about his past experience as a lab technician while sharing his knowledge on imaging techniques. Kanna wanted to see more diversity in the medical devices industry and specilised high-quality pigmented imaging process, so he decided to create his own product line</p>
            </div>
            <div className="img-slide">
                <img src={slide_img_3} alt="slide-1" />
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="slide-content">
            <div className="sell-slide-contnet-3">
                <i><FaQuoteLeft className="quote-icon"/></i>
                <p>LTA International Global Services LLC is a Florida-based export management company that sells top Medical device products from major US brands to importers and distributors around the globe. Founded in 1994 by Loyd, LTA's long-standing expertise in logistics and pricing has made it one of the most successful international trade businesses in the USA.</p>
            </div>
            <div className="img-slide">
                <img src={slide_img_4} alt="slide-1" />
            </div>
            </div>
        </SwiperSlide>
      </Swiper>
      </div>
      <div className="footer-banner">
        <h2>Ready to Grow Your Business?</h2>
        <div className="f-button-div">
              <button className="f-btn-1">Start Selling</button>
              <button className="f-btn-2">Chat with consultant</button>
        </div>
      </div>
    </>
  );
};

export default Sellon;
