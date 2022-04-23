import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";
import client1 from "../../img/client1.png";
import client2 from "../../img/client2.jpg";
import client3 from "../../img/client3.jpg";
import client4 from "../../img/client4.jpg";

const Testimonial = () => {
  const clients = [
    {
      img: client1,
      review:
        " At first i wasn't so confident of you, but i decided to try. I'm happy i did. Your commitment and customer support has endeared me to your firm. Keep up the good work!",
    },
    {
      img: client2,
      review:
        " Since You started handling all ICT related jobs in our firm, our traffic has significantly grown! I can only commend your organisation for your gret work!",
        
    },
    {
      img: client3,
      review:
        " My school benefited from your pratical training on web development and ICT in general. Kudos!",
    },
    {
      img: client4,
      review:
        "I did'nt think that in just 4 weeks, i'll be able to create amazing websites. Your organization is the best in training students.",
    },
  ];

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>Clients always get </span>
        <span>Exceptional Work </span>
        <span>from me...</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Testimonial;