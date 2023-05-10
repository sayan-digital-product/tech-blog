import { Carousel } from "react-responsive-carousel";
import { slides } from "@santech/core/config/carousel.config";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import { SlidesModel } from "@santech/core/models/slides.model";
// import styles from "../styles/Responsive.module.css";
import style from './carousel.module.css';
import { IKImage, IKContext } from 'imagekitio-react'
import { imageBaseurl } from '@santech/core/config/app.config';


export default function ResponsiveCarousel() {

    return (
      <div> 
       <Carousel
            showArrows={true}
            showIndicators={true}
            infiniteLoop={true}
            dynamicHeight={false}
            transitionTime={500}
            interval={2000}
            autoPlay={true}
            showStatus={false}
            stopOnHover={true}
            showThumbs={false}
          >
            {slides.map((item: SlidesModel) => (
              <div className={`grid grid-cols-12 ${style.carouselContainer}`} key={item.id}>
                <div className="col-span-6">
                  {item?.imageUrl && 
                    <IKContext urlEndpoint={imageBaseurl.imageBase}>
                        <IKImage src={item.imageUrl} alt="slides" />
                    </IKContext>}
                </div>
                <div className="grid col-span-6 content-center">
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      );
    }