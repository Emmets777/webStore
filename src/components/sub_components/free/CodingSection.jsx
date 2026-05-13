import ".././subCss/CodingSection.css";
import { useRef } from "react";
import CodingTutorials from "../../../assets/codingTutorial.png";
import CodingChallenges from "../../../assets/codingChallenge.png";
import CodingProjects from "../../../assets/codingProjects.png";
import CodingReview from "../../../assets/codingReview.png";


function CodingSection() {

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
    <div className="carouselWrapperS">
          <button className="carouselBtnS leftS" onClick={scrollLeft}>
            ◀
          </button>
          <div className="carouselViewportS" ref={carouselRef}>
            <div className="utilFree">
              {/* PRIMEIRA LINHA */}
              <div className="cardProductS">
                <h3>algorithms Book</h3>
                <img
                  src={CodingTutorials}
                  alt="algorithms Book"
                  className="productPicS"
                />
                <p>A comprehensive book to learn more about algorithms.</p>
                <button>Learn More!</button>
              </div>
    
              <div className="cardProductS">
                <h3>Clean Code Book</h3>
                <img
                  src={CodingChallenges}
                  alt="Clean Code Book"
                  className="productPicS"
                />
                <p>
                  A comprehensive book to learn more about clean code principles.
                </p>
                <button>Learn More!</button>
              </div>
    
              <div className="cardProductS">
                <h3>JavaScript Logics Book</h3>
                <img
                  src={CodingProjects}
                  alt="JavaScript Logics Book"
                  className="productPicS"
                />
                <p>A comprehensive book to learn more about JavaScript logics.</p>
                <button>Learn More!</button>
              </div>
    
              <div className="cardProductS">
                <h3>Intensive Python Course Book</h3>
                <img
                  src={CodingReview}
                  alt="Intensive Python Course Book"
                  className="productPicS"
                />
                <p>A comprehensive book to learn more about Python development.</p>
                <button>Learn More!</button>
              </div>
    
              {/* DUPLICAÇÃO PARA LOOP INFINITO */}
    
              <div className="cardProductS">
                <h3>algorithms Book</h3>
                <img
                  src={CodingTutorials}
                  alt="algorithms Book"
                  className="productPicS"
                />
                <p>A comprehensive book to learn more about algorithms.</p>
                <button>Learn More!</button>
              </div>
    
              <div className="cardProductS">
                <h3>Python Course</h3>
                <img
                  src={CodingChallenges}
                  alt="Python Course"
                  className="productPicS"
                />
                <p>A comprehensive course to learn Python development.</p>
                <button>Learn More!</button>
              </div>
    
              <div className="cardProductS">
                <h3>JavaScript Logics Book</h3>
                <img
                  src={CodingProjects}
                  alt="JavaScript Logics Book"
                  className="productPicS"
                />
                <p>A comprehensive book to learn more about JavaScript logics.</p>
                <button>Learn More!</button>
              </div>
    
              <div className="cardProductS">
                <h3>Intensive Python Course Book</h3>
                <img
                  src={CodingReview}
                  alt="Intensive Python Course Book"
                  className="productPicS"
                />
                <p>A comprehensive book to learn more about Python development.</p>
                <button>Learn More!</button>
              </div>
            </div>
          </div>
          <button className="carouselBtnS rightS" onClick={scrollRight}>
            ▶
          </button>
        </div>
  );
}

export default CodingSection;
