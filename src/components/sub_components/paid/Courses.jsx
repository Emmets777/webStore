import ".././subCss/Courses.css";
import { useRef } from "react";
import frontendCourse from "../../../assets/frontendCourse.png";
import javascriptCourse from "../../../assets/javascriptCourse.png";
import phpCourse from "../../../assets/phpCourse.png";
import pythonCourse from "../../../assets/pythonCourse.png";
import typescriptCourse from "../../../assets/typescriptCourse.png";

function Courses() {
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
    <div className="carouselWrapper">
      <button className="carouselBtn left" onClick={scrollLeft}>
        ◀
      </button>

      <div className="carouselViewport" ref={carouselRef}>
        <div className="codingCourses">
          {/* PRIMEIRA LINHA */}
          <div className="cardProduct">
            <h3>Frontend Course</h3>
            <img
              src={frontendCourse}
              alt="Frontend Course"
              className="productPic"
            />
            <p>A comprehensive course to learn frontend development.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProduct">
            <h3>Python Course</h3>
            <img
              src={pythonCourse}
              alt="Python Course"
              className="productPic"
            />
            <p>A comprehensive course to learn Python development.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProduct">
            <h3>JavaScript Course</h3>
            <img
              src={javascriptCourse}
              alt="JavaScript Course"
              className="productPic"
            />
            <p>A comprehensive course to learn JavaScript development.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProduct">
            <h3>TypeScript Course</h3>
            <img
              src={typescriptCourse}
              alt="TypeScript Course"
              className="productPic"
            />
            <p>A comprehensive course to learn TypeScript development.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProduct">
            <h3>PHP Course</h3>
            <img src={phpCourse} alt="PHP Course" className="productPic" />
            <p>A comprehensive course to learn PHP development.</p>
            <button>Learn More!</button>
          </div>

          {/* DUPLICAÇÃO PARA LOOP INFINITO */}

          <div className="cardProduct">
            <h3>Frontend Course</h3>
            <img
              src={frontendCourse}
              alt="Frontend Course"
              className="productPic"
            />
            <p>A comprehensive course to learn frontend development.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProduct">
            <h3>Python Course</h3>
            <img
              src={pythonCourse}
              alt="Python Course"
              className="productPic"
            />
            <p>A comprehensive course to learn Python development.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProduct">
            <h3>JavaScript Course</h3>
            <img
              src={javascriptCourse}
              alt="JavaScript Course"
              className="productPic"
            />
            <p>A comprehensive course to learn JavaScript development.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProduct">
            <h3>TypeScript Course</h3>
            <img
              src={typescriptCourse}
              alt="TypeScript Course"
              className="productPic"
            />
            <p>A comprehensive course to learn TypeScript development.</p>
            <button>Learn More!</button>
          </div>

          <div className="cardProduct">
            <h3>PHP Course</h3>
            <img src={phpCourse} alt="PHP Course" className="productPic" />
            <p>A comprehensive course to learn PHP development.</p>
            <button>Learn More!</button>
          </div>
        </div>
      </div>

      <button className="carouselBtn right" onClick={scrollRight}>
        ▶
      </button>
    </div>
  );
}

export default Courses;
