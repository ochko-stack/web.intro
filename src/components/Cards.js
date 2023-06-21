import React from 'react';
import './Cards.css';
import CardItem from './CartItem';
import img1 from '../images/skill.jpg';
import img2 from '../images/ad.jpg';
import img3 from '../images/uni.jpg';

function Cards() {
  return (
    <div className="cards">
      <h1>Дэлгэрэнгүй</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              text="Технологийн ур чадвар болон бусад..."
              label="Ур чадварууд"
              path="/skills"
            />
            <CardItem
              src={img2}
              text="Давуу тал болон сул тал гэх мэт хувь хүн талаас мэдхийг хүсвэл..."
              label="Давуу тал болон сул тал"
              path="/AD"
            />
            <CardItem
              src={img3}
              text="Их сургууль болон мэргэжил, курс ..."
              label="Их сургууль"
              path="/Uni"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
