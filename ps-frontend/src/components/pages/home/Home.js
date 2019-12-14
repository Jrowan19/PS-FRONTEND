import React from 'react';

const Home = props => {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://mlyczeslosff.i.optimole.com/w:412/h:215/q:90/https://realsport101.com/wp-content/uploads/2019/08/vvd.png"
              alt="..."
              style={{ height: 400, width: 400 }}
            />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://cdn.mos.cms.futurecdn.net/AATybNaQj3AUSNitR6wQhZ.jpg"
                alt="..."
                style={{ height: 400, width: 400 }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
