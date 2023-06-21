import React from 'react';
import './Skills.css';
import SkillItem from './SkillItem';
import image1 from '../../images/lan1.jpg';
import image2 from '../../images/lan3.jpg';
import image3 from '../../images/frame.jpg';
import image4 from '../../images/dataBase.jpg';
import image5 from '../../images/react-native.jpg';
import image6 from '../../images/mern2.jpg';
import image7 from '../../images/drone1.jpg';
import image8 from '../../images/fitness.jpg';
function Skills() {
  return (
    <div className="cards">
      <h1>Мэдлэг, ур чадварууд</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <SkillItem
              src={image1}
              text={
                <>
                  <h2>Англи хэл</h2>
                  <br />
                  <p style={{ color: 'green' }}>Англи хэл C1 түвшин</p>
                </>
              }
              label="Human comminication language"
            />
            <SkillItem
              src={image2}
              text={
                <>
                  <h2>Программын хэл</h2>
                  <br />
                  <p style={{ color: 'green' }}>Java, Javascript, Typescript</p>
                  <p style={{ color: 'yellowgreen' }}>Python,C,C++</p>
                </>
              }
              label="Programming languages"
            />
            <SkillItem
              src={image3}
              text={
                <>
                  <h2>Фреймворк</h2>
                  <br />
                  <p style={{ color: 'green' }}>React.js, node.js, express</p>
                  <p style={{ color: 'yellowgreen' }}>
                    Angular,Next.js,Springboot
                  </p>
                </>
              }
              label="Web dev frameworks"
            />
          </ul>
          <ul className="cards__items">
            <SkillItem
              src={image4}
              text={
                <>
                  <h2>Датабааз</h2>
                  <br />
                  <p style={{ color: 'green' }}>
                    Mysql, MongoDb, Oracle, PostgreSql
                  </p>
                </>
              }
              label="Web dev database"
            />
            <SkillItem
              src={image5}
              text={
                <>
                  <h2>Аппликейшн хөгжүүлэлт</h2>
                  <br />
                  <p style={{ color: 'green' }}>ReactNative,(Firebase)</p>
                </>
              }
              label="Web dev database"
            />
            <SkillItem
              src={image6}
              text={
                <>
                  <h2>Ажиллах дуртай технологи</h2>
                  <br />
                  <p style={{ color: 'green' }}>MERN</p>
                </>
              }
              label="Web dev database"
            />
          </ul>
          <ul className="cards__items">
            <SkillItem
              src={image7}
              text={
                <>
                  <h2>Дрон худалдааны веб хуудас</h2>
                  <br />
                  <p>
                    {' '}
                    Хичээлийн хүрээнд хийж байсан онцлох систем. Уг систем нь
                    MERN дээр хийгдэж байсан.
                  </p>
                </>
              }
              path="http://www.github.com"
              label="Drone onlne shop"
            />
            <SkillItem
              src={image8}
              text={
                <>
                  <h2>OneFit fitness application</h2>
                  <br />
                  <p>
                    {' '}
                    Хичээлийн хүрээнд хийж байсан онцлох систем. Уг систем нь
                    ReactNative болон Firbase технологууд дээр хийгдэж байсан.
                  </p>
                </>
              }
              path="http://www.github.com"
              label="Fitness application"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Skills;
