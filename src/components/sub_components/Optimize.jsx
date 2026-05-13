import "./subCss/Optimize.css";
import { useRef } from "react";
import optimizeFront from "../../assets/optimizeFront.png";
import optimizeJS from "../../assets/optimizeJS.png";
import optimizePHP from "../../assets/optimizePHP.png";
import optimizePY from "../../assets/optimizePY.png";
import optimizeTS from "../../assets/optimizeTS.png";

function Optimize() {

    const carouselRef = useRef(null);
    
      const scrollLeft = () => {
        carouselRef.current.scrollBy({
          left: -340,
          behavior: "smooth",
        });
      };
    
      const scrollRight = () => {
        carouselRef.current.scrollBy({
          left: 340,
          behavior: "smooth",
        });
      };

    return (
        <div className="carouselWrapperO">
              <button className="carouselBtnO leftO " onClick={scrollLeft}>
                ◀
              </button>
              <div className="carouselViewportO" ref={carouselRef}>
                <div className="optimizingProducts">
                  {/* PRIMEIRA LINHA */}
                  <div className="cardProductO">
                    <h3>algorithms Book</h3>
                    <img
                      src={optimizeFront}
                      alt="algorithms Book"
                      className="productPicO"
                    />
                    <p>A comprehensive book to learn more about algorithms.</p>
                    <button>Learn More!</button>
                  </div>
        
                  <div className="cardProductO">
                    <h3>Clean Code Book</h3>
                    <img
                      src={optimizeJS}
                      alt="Clean Code Book"
                      className="productPicO"
                    />
                    <p>
                      A comprehensive book to learn more about clean code principles.
                    </p>
                    <button>Learn More!</button>
                  </div>
        
                  <div className="cardProductO">
                    <h3>JavaScript Logics Book</h3>
                    <img
                      src={optimizePHP}
                      alt="JavaScript Logics Book"
                      className="productPicO"
                    />
                    <p>A comprehensive book to learn more about JavaScript logics.</p>
                    <button>Learn More!</button>
                  </div>
        
                  <div className="cardProductO">
                    <h3>Intensive Python Course Book</h3>
                    <img
                      src={optimizePY}
                      alt="Intensive Python Course Book"
                      className="productPicO"
                    />
                    <p>A comprehensive book to learn more about Python development.</p>
                    <button>Learn More!</button>
                  </div>
        
                  <div className="cardProductO">
                    <h3>Use Your Head! development Book</h3>
                    <img
                      src={optimizeTS}
                      alt="Use Your Head! development Book"
                      className="productPicO"
                    />
                    <p>
                      A comprehensive book to learn more about development principles.
                    </p>
                    <button>Learn More!</button>
                  </div>
        
                  {/* DUPLICAÇÃO PARA LOOP INFINITO */}
        
                  <div className="cardProductO">
                    <h3>algorithms Book</h3>
                    <img
                      src={optimizeFront}
                      alt="algorithms Book"
                      className="productPicO"
                    />
                    <p>A comprehensive book to learn more about algorithms.</p>
                    <button>Learn More!</button>
                  </div>
        
                  <div className="cardProductO">
                    <h3>Python Course</h3>
                    <img
                      src={optimizeJS}
                      alt="Python Course"
                      className="productPicO"
                    />
                    <p>A comprehensive course to learn Python development.</p>
                    <button>Learn More!</button>
                  </div>
        
                  <div className="cardProductO">
                    <h3>JavaScript Logics Book</h3>
                    <img
                      src={optimizePHP}
                      alt="JavaScript Logics Book"
                      className="productPicO"
                    />
                    <p>A comprehensive book to learn more about JavaScript logics.</p>
                    <button>Learn More!</button>
                  </div>
        
                  <div className="cardProductO">
                    <h3>Intensive Python Course Book</h3>
                    <img
                      src={optimizePY}
                      alt="Intensive Python Course Book"
                      className="productPicO"
                    />
                    <p>A comprehensive book to learn more about Python development.</p>
                    <button>Learn More!</button>
                  </div>
        
                  <div className="cardProductO">
                    <h3>Use Your Head! development Book</h3>
                    <img
                      src={optimizeTS}
                      alt="Use Your Head! development Book"
                      className="productPicO"
                    />
                    <p>
                      A comprehensive book to learn more about development principles.
                    </p>
                    <button>Learn More!</button>
                  </div>
                </div>
              </div>
              <button className="carouselBtnO rightO" onClick={scrollRight}>
                ▶
              </button>
            </div>
    )
}

export default Optimize;