import React from 'react';
import './Home.css';
import skincareImg from '../../assets/skincare.avif';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate()
  return (
    <div className="homepage"
    id='Home'
    >
      <div className="homepage-left">
        <h6>New to Skin Care+</h6>
        <h3>Vitamin-rich refinement</h3>
        <p>
          Receive a themed sleeve with your tokens of devotion when you select 
          ‘This is a gift for someone special' at the checkout. Excludes Gift Kits.
        </p>
        <button className="explore-btn"
        onClick={()=>navigate('./shop')}

        >Explore More</button>
      </div>

      <div className="homepage-right">
        <img src={skincareImg} alt="Skincare" />
      </div>
    </div>
  );
};

export default Home;
