import { Carousel } from "react-responsive-carousel";
import { slides } from "@santech/core/config/carousel.config";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from 'next/image';
import { SlidesModel } from "@santech/core/models/slides.model";
// import styles from "../styles/Responsive.module.css";
export default function ResponsiveCarousel() {

    return (
      <div>
       <Carousel
          showArrows={true}
            showIndicators={true}
            infiniteLoop={true}
           dynamicHeight={true}
          >
            {slides.map((item: SlidesModel) => (
              <div key={item.id}>
                <div>
                  <img src={item.imageUrl} alt="slides" />
                </div>
                <div>
                  <h2>{item.title}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      );
    }