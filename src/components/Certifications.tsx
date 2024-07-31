import React, { useRef } from "react";
import me from "../assets/img/me.webp";
import { certificationsData, toastMessages } from "../assets/lib/data";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, useScroll, useTransform } from "framer-motion";
import { toast } from "react-toastify";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useSectionInView } from "../assets/lib/hooks";
import { useLanguage } from "../context/language-context";
import Button from "./Button";
import { FiLink } from "react-icons/fi";

const Certifications: React.FC = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);
  const { ref } = useSectionInView("About me");
  const { language } = useLanguage();
  const animationReference = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);
  const onAutoplayTimeLeft = (_s: any, time: number, progress: number) => {
    if (progressCircle.current && progressContent.current) {
      progressCircle.current.style.setProperty(
        "--progress",
        String(1 - progress)
      );
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };
  const paragraphs =
    language === "ES" ? certificationsData.paragraphs_ES : certificationsData.paragraphs_EN;

    const notifyServerRequest = () => {
      if (language === "ES") {
        toast.info(toastMessages.loadingProject.es);
      } else {
        toast.info(toastMessages.loadingProject.en);
      }
    };  
  return (
    <React.Fragment>
      <section className="relative mt-16 " id="certifications" ref={ref}>
        <div className="title-container flex flex-col gap-6 justify-center items-center p-32 w-1/2 max-lg:w-full max-lg:p-16 max-lg:items-start">
          <motion.div
            ref={animationReference}
            style={{
              scale: scaleProgess,
              opacity: opacityProgess,
              textAlign: "left",
            }}
          >
            <p className="text-[--black] mb-6">
              <span className="text-purple">&lt;</span>
              {language === "ES" ? certificationsData.title : certificationsData.title_EN}
              <span className="text-purple">/&gt;</span>
            </p>

            <h2 className="text-[--black] text-center max-lg:text-left break-words">
              {language === "ES"
                ? certificationsData.description
                : certificationsData.description_EN}
            </h2>
          </motion.div>
        </div>
        <div className="flex flex-row justify-center gap-6 items-center pl-32 pr-32 mb-16  max-lg:flex-col max-lg:p-16 min-[1921px]:px-[45rem] min-[1921px]:mb-48">
          <article className="pl-60 max-lg:p-0">
            <img src={me} alt={me} />
          </article>
          <Swiper
            spaceBetween={100}
            centeredSlides={true}
            autoplay={{
              delay: 10000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, Pagination, Navigation]}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            className="w-1/2 pt-32 relative z-2 pr-20 pb-32 pl-20 max-lg:w-full max-lg:pt-16 max-lg:pb-16 max-lg:pl-0 max-lg:pr-0 min-[1921px]:w-1/2"
          >
            {paragraphs.map((paragraph, index) => (
              <SwiperSlide
                className="bg-[--darkblue] text-[--white] flex flex-col justify-center items-start gap-24 rounded-2xl p-20 border-solid border-[0.4rem] border-[--lightblue] hover:border-purple duration-500 transition-all text-left max-lg:p-10 cursor-grab"
                key={index}
              >
                <div className="flex gap-6 flex-row justify-start items-center max-lg:flex-col max-lg:justify-center max-lg:text-center ">
                  <div>
                    <img
                      src={paragraph.icon}
                      alt={paragraph.icon}
                      className="w-40"
                    />
                  </div>
                  <div>
                    <h2>{paragraph.title}</h2>
                  </div>
                </div>
                <div className="flex flex-row gap-10 max-lg:flex-col">
                  <div className="flex flex-col gap-4 items-center justify-between -mt-10 -mb-10 max-lg:flex-row max-lg:m-0">
                    <p className="text-white">
                      <span className="text-purple">&lt;</span>h3
                      <span className="text-purple">/&gt;</span>
                    </p>
                    <div className="flex justify-between items-center w-1 h-[100%] max-lg:flex-row max-lg:w-[10rem]  max-lg:bg-lightblue">
                      <div></div>
                      <div className="w-[0.5rem] bg-[--lightblue] h-[100%] max-lg:w-10  max-lg:bg-lightblue max-lg:h-[0.25rem]"></div>
                      <div></div>
                    </div>
                    <p className="text-white">
                      <span className="text-purple">&lt;</span>h3
                      <span className="text-purple">/&gt;</span>
                    </p>
                  </div>
                  <div>
                    <p className="text-white text-4xl">
                      {paragraph.description}
                    </p>
                  </div>
                  <br />
                  { paragraph.link != "" ?
                        <Button
                        label={language === "ES" ? "Ver Certificado" : "View Certificate"}
                        link={paragraph.link}
                        iconSVG={FiLink}
                        buttoncolor={paragraph.colors.main}
                        iconcolor={paragraph.colors.icon}
                        onClick={notifyServerRequest}
                        target= "_blank"
                        />
                      : <></>
                      }
                </div>
              </SwiperSlide>
            ))}
            <div
              className="autoplay-progress absolute right-0 bottom-0 z-10 flex items-center justify-center font-bold text-purple text-4xl w-24 h-24 max-lg:w-16 max-lg:h-16 max-lg:text-3xl "
              slot="container-end"
            >
              <svg viewBox="0 0 48 48" ref={progressCircle}>
                <circle cx="24" cy="24" r="20"></circle>
              </svg>
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Certifications;
