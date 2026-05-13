import ".././subCss/Books.css";
import { useRef } from "react";
import algorithmsBook from "../../../assets/algorithmsBook.png";
import cleanCodeBook from "../../../assets/cleanCodeBook.png";
import logicsJSBook from "../../../assets/logicsJSBook.png";
import PYBook from "../../../assets/PYBook.png";
import useUHeadBook from "../../../assets/useUHeadBook.png";

function Books() {
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
    <div className="carouselWrapperB">
      <button className="carouselBtnB leftB" onClick={scrollLeft}>
        ◀
      </button>
      <div className="carouselViewportB" ref={carouselRef}>
        <div className="utilBooks">
          {/* PRIMEIRA LINHA */}
          <div className="cardProductB">
            <h3>algorithms Book</h3>
            <img
              src={algorithmsBook}
              alt="algorithms Book"
              className="productPicB"
            />
            <p>A comprehensive book to learn more about algorithms.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductB">
            <h3>Clean Code Book</h3>
            <img
              src={cleanCodeBook}
              alt="Clean Code Book"
              className="productPicB"
            />
            <p>
              A comprehensive book to learn more about clean code principles.
            </p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductB">
            <h3>JavaScript Logics Book</h3>
            <img
              src={logicsJSBook}
              alt="JavaScript Logics Book"
              className="productPicB"
            />
            <p>A comprehensive book to learn more about JavaScript logics.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductB">
            <h3>Intensive Python Course Book</h3>
            <img
              src={PYBook}
              alt="Intensive Python Course Book"
              className="productPicB"
            />
            <p>A comprehensive book to learn more about Python development.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductB">
            <h3>Use Your Head! development Book</h3>
            <img
              src={useUHeadBook}
              alt="Use Your Head! development Book"
              className="productPicB"
            />
            <p>
              A comprehensive book to learn more about development principles.
            </p>
            <button>Learn More!</button>
          </div>

          {/* DUPLICAÇÃO PARA LOOP INFINITO */}

          <div className="cardProductB">
            <h3>algorithms Book</h3>
            <img
              src={algorithmsBook}
              alt="algorithms Book"
              className="productPicB"
            />
            <p>A comprehensive book to learn more about algorithms.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductB">
            <h3>Python Course</h3>
            <img
              src={cleanCodeBook}
              alt="Python Course"
              className="productPicB"
            />
            <p>A comprehensive course to learn Python development.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductB">
            <h3>JavaScript Logics Book</h3>
            <img
              src={logicsJSBook}
              alt="JavaScript Logics Book"
              className="productPicB"
            />
            <p>A comprehensive book to learn more about JavaScript logics.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductB">
            <h3>Intensive Python Course Book</h3>
            <img
              src={PYBook}
              alt="Intensive Python Course Book"
              className="productPicB"
            />
            <p>A comprehensive book to learn more about Python development.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProductB">
            <h3>Use Your Head! development Book</h3>
            <img
              src={useUHeadBook}
              alt="Use Your Head! development Book"
              className="productPicB"
            />
            <p>
              A comprehensive book to learn more about development principles.
            </p>
            <button>Learn More!</button>
          </div>
        </div>
      </div>
      <button className="carouselBtnB rightB" onClick={scrollRight}>
        ▶
      </button>
    </div>
  );
}

export default Books;
