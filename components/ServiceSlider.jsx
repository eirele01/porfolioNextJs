import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxCode,
  RxArchive,
  RxAvatar,
  RxArrowTopRight,
} from "react-icons/rx";
import { FreeMode, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

const serviceData = [
  {
    Icon: RxPencil2,
    title: "Website Design and Development",
    description: "I specialize in designing and developing responsive websites that captivate audiences and drive engagement. Whether you need a sleek portfolio site, an e-commerce platform, or a corporate website, I can bring your vision to life.",
  },
  {
    Icon: RxDesktop,
    title: "Custom Web Applications",
    description: " I create custom web applications tailored to your unique requirements. From content management systems (CMS) to customer relationship management (CRM) solutions, I leverage cutting-edge technologies to build powerful and scalable applications that streamline your business processes.",
  },
  {
    Icon: RxCode,
    title: "Front-end Development",
    description: "With expertise in HTML, CSS, and JavaScript frameworks like React.js and Vue.js, I ensure your website or application offers a seamless user experience across devices and browsers. I focus on optimizing performance and accessibility while maintaining high-quality design standards.",
  },
  {
    Icon: RxCode,
    title: "Back-end Development",
    description: "I excel in back-end development using Node.js, Express.js, and other frameworks to build robust server-side solutions. From database design and integration to API development, I architect scalable and secure back-end systems that support your business objectives.",
  },
  {
    Icon: RxArchive,
    title: "E-commerce Solutions",
    description: "I specialize in developing custom e-commerce solutions that empower businesses to sell products and services online effectively. Whether you're launching a new online store or enhancing an existing one, I provide comprehensive e-commerce development services tailored to your needs.",
  },
  {
    Icon: RxAvatar,
    title: "Website Maintenance and Support",
    description: "Beyond initial development, I offer ongoing website maintenance and support services to ensure your digital assets remain secure, up-to-date, and optimized for performance. From bug fixes to content updates, I provide reliable support to keep your website running smoothly.",
  },
  {
    Icon: RxAvatar,
    title: "Consultation and Collaboration",
    description: "I believe in fostering collaborative partnerships with my clients, providing expert consultation and guidance throughout the development process. I take the time to understand your goals and objectives, offering tailored solutions that drive results and exceed expectations.",
  },
];

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      freeMode
      className="h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, i) => (
        <SwiperSlide key={i}>
          <div className="bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgba(89,65,169,0.15)] transition-all duration-300">
            {/* icon */}
            <div className="text-4xl text-accent mb-4">
              <item.Icon aria-hidden />
            </div>

            {/* title & description */}
            <div className="mb-8">
              <div className="mb-2 text-lg">{item.title}</div>
              <p className="max-w-[350px] leading-normal">{item.description}</p>
            </div>

            {/* arrow */}
            <div className="text-3xl">
              <RxArrowTopRight
                className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300"
                aria-hidden
              />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
