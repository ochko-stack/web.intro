import React from 'react';
import './Cards.css';
import CardItem from './CartItem';

function Cards() {
  return (
    <div className="cards">
      <h1>Дэлгэрэнгүй</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/skill.jpg"
              text="Технологийн ур чадвар болон бусад..."
              label="Ур чадварууд"
              path="/skills"
            />
            <CardItem
              src="images/ad.jpg"
              text="Давуу тал болон сул тал гэх мэт хувь хүн талаас мэдхийг хүсвэл..."
              label="Давуу тал болон сул тал"
              path="/AD"
            />
            <CardItem
              src="images/uni.jpg"
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
