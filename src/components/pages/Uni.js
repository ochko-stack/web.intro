import React from 'react';
import '../Section.css';
import video2 from '../../videos/shutis.mp4';
function Uni() {
  return (
    <div className="hero-container">
      <video src={video2} autoPlay loop muted />
      <h1>ШУТИС МХТС </h1>
      <p>
        Шинжлэх ухаан технологийн их сургуулийн салбар мэдээлэл холбоо
        технологийн сургуульд программ хангамжийн чиглэлээр 2023 оны хавар 3
        түвшний дүүргэсэн. 2023 оны намар 4-р курст орно.
      </p>
      <div className="hero-btns"></div>
    </div>
  );
}
export default Uni;
