import ".././subCss/Refactoring.css";
import { useRef } from "react";
import refactoringFront from "../../../assets/refactoringFront.png";
import refactoringJS from "../../../assets/refactoringJS.png";
import refactoringPHP from "../../../assets/refactoringPHP.png";
import refactoringPY from "../../../assets/refactoringPY.png";
import refactoringTS from "../../../assets/refactoringTS.png";

function Refactoring() {
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
    <div className="carouselWrapperR">
      <button className="carouselBtnR leftR" onClick={scrollLeft}>
        ◀
      </button>
      <div className="carouselViewportR" ref={carouselRef}>
        <div className="refactoringProducts">
          {/* PRIMEIRA LINHA */}
          <div className="cardProductR">
            <h3>algorithms Book</h3>
            <img
              src={refactoringFront}
              alt="algorithms Book"
              className="productPicR"
            />
            <p>A comprehensive book to learn more about algorithms.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductR">
            <h3>Clean Code Book</h3>
            <img
              src={refactoringJS}
              alt="Clean Code Book"
              className="productPicR"
            />
            <p>
              A comprehensive book to learn more about clean code principles.
            </p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductR">
            <h3>JavaScript Logics Book</h3>
            <img
              src={refactoringPHP}
              alt="JavaScript Logics Book"
              className="productPicR"
            />
            <p>A comprehensive book to learn more about JavaScript logics.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductR">
            <h3>Intensive Python Course Book</h3>
            <img
              src={refactoringPY}
              alt="Intensive Python Course Book"
              className="productPicR"
            />
            <p>A comprehensive book to learn more about Python development.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductR">
            <h3>Use Your Head! development Book</h3>
            <img
              src={refactoringTS}
              alt="Use Your Head! development Book"
              className="productPicR"
            />
            <p>
              A comprehensive book to learn more about development principles.
            </p>
            <button>Learn More!</button>
          </div>

          {/* DUPLICAÇÃO PARA LOOP INFINITO */}

          <div className="cardProductR">
            <h3>algorithms Book</h3>
            <img
              src={refactoringFront}
              alt="algorithms Book"
              className="productPicR"
            />
            <p>A comprehensive book to learn more about algorithms.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductR">
            <h3>Python Course</h3>
            <img
              src={refactoringJS}
              alt="Python Course"
              className="productPicR"
            />
            <p>A comprehensive course to learn Python development.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductR">
            <h3>JavaScript Logics Book</h3>
            <img
              src={refactoringPHP}
              alt="JavaScript Logics Book"
              className="productPicR"
            />
            <p>A comprehensive book to learn more about JavaScript logics.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductR">
            <h3>Intensive Python Course Book</h3>
            <img
              src={refactoringPY}
              alt="Intensive Python Course Book"
              className="productPicR"
            />
            <p>A comprehensive book to learn more about Python development.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductR">
            <h3>Use Your Head! development Book</h3>
            <img
              src={refactoringTS}
              alt="Use Your Head! development Book"
              className="productPicR"
            />
            <p>
              A comprehensive book to learn more about development principles.
            </p>
            <button>Learn More!</button>
          </div>
        </div>
      </div>
      <button className="carouselBtnR rightR" onClick={scrollRight}>
        ▶
      </button>
    </div>
  );
}

export default Refactoring;
