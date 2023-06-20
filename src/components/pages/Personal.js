import React from 'react';
import PersonalItem from './PersonalItem';
import './Personal.css';
export default function AD() {
  return (
    <div className="main">
      <div className="cards">
        <h1>Давуу тал болон сул тал</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <PersonalItem
                text={
                  <>
                    <h1>Давуу тал</h1>
                    <br />
                    <div>
                      <ul>
                        <li>Цаг баримтлах</li>
                        <li>Тууштай</li>
                        <li>Багаар хамтарч ажиллах</li>
                        <li>Бусдад санаагаа ойлгуулах</li>
                        <li>Бусдын санааг хэрэгжүүлэх</li>
                      </ul>
                    </div>
                  </>
                }
              />
              <PersonalItem
                text={
                  <>
                    <h1>Дутагталтай тал</h1>
                    <br />
                    <div>
                      <ul>
                        <li>Оройн цагаар код бичих</li>
                      </ul>
                    </div>
                  </>
                }
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
