import "./css/Main.css";

function Main() {
  <>
    <main>
      <section id="about">
        <h1>Welcome to CodingStore</h1>

        <p>
          Here our desire is improve the way people code and build software. We
          try to help other people that dosen't have the resources to learn how
          to code, and we want to make it easier for everyone to access the
          tools they need to create amazing things. otherside, we want to help
          new commerces and e-commerces create their own web stores, and we want
          to make it easier for them to sell their products online. We want to
          be the best place to buy and sell coding resources, and we want to be
          the best place to learn how to code.
        </p>
      </section>

      <section id="productsDescription">
        <h2>About our products</h2>
        <p>
          We offer a wide range of products, including coding courses, coding
          books and pre-make templates with different themes and editable with
          different code editors for programmers or people that dont have much
          experience with coding. We also offer a wide range of coding
          resources, including coding tutorials, coding challenges and coding
          projects. We also offer a wide range of coding services, including
          code review, code refactoring and code optimization. you can find some
          of our products down below, and you can find more products in our
          store.
        </p>
      </section>
      <section id="products">
        <h2>Our paid products</h2>

        <div className="paid">
          <div className="codingCourses spin">
            <div className="cardProduct">
                <h3>Frontend Course</h3>
                <img src="../assets/frontendCourse.png" alt="Frontend Course" />

                <p>A comprehensive course to learn frontend development.</p>
                <button>Learn More!</button>
            </div>
            <div className="cardProduct">
                <h3>Python Course</h3>
                <img src="../assets/pythonCourse.png" alt="Python Course" />

                <p>A comprehensive course to learn Python development.</p>
                <button>Learn More!</button>
            </div>
            <div className="cardProduct">
                <h3>JavaScript Course</h3>
                <img src="../assets/javascriptCourse.png" alt="JavaScript Course" />

                <p>A comprehensive course to learn JavaScript development.</p>
                <button>Learn More!</button>
            </div>
            <div className="cardProduct">
                <h3>TypeScript Course</h3>
                <img src="../assets/typescriptCourse.png" alt="TypeScript Course" />

                <p>A comprehensive course to learn TypeScript development.</p>
                <button>Learn More!</button>
            </div>
            <div className="cardProduct">
                <h3>PHP Course</h3>
                <img src="../assets/phpCourse.png" alt="PHP Course" />

                <p>A comprehensive course to learn PHP development.</p>
                <button>Learn More!</button>
            </div>
          </div>
          <div className="codingBooks spin">
            {/* <div className="cardProduct">
                <h3>Frontend Course</h3>
                <img src="../assets/frontendCourse.png" alt="Frontend Course" />

                <p>A comprehensive course to learn frontend development.</p>
                <button>Learn More!</button>
            </div>
            <div className="cardProduct">
                <h3>Python Course</h3>
                <img src="../assets/pythonCourse.png" alt="Python Course" />

                <p>A comprehensive course to learn Python development.</p>
                <button>Learn More!</button>
            </div>
            <div className="cardProduct">
                <h3>JavaScript Course</h3>
                <img src={javascriptCourse} alt="JavaScript Course" />

                <p>A comprehensive course to learn JavaScript development.</p>
                <button>Learn More!</button>
            </div>
            <div className="cardProduct">
                <h3>TypeScript Course</h3>
                <img src={typescriptCourse} alt="TypeScript Course" />

                <p>A comprehensive course to learn TypeScript development.</p>
                <button>Learn More!</button>
            </div>
            <div className="cardProduct">
                <h3>PHP Course</h3>
                <img src={phpCourse} alt="PHP Course" />

                <p>A comprehensive course to learn PHP development.</p>
                <button>Learn More!</button>
            </div> */}
          </div>
          <div className="codeRefactoring spin"></div>
          <div className="codeOptimization spin"></div>
        </div>

        <h2>Our free products</h2>
        <div className="free">
            <div className="codingTutorials spin"></div>
            <div className="codingChallenges spin"></div>
            <div className="codingProjects spin"></div>
            <div className="codingReview spin"></div>
        </div>
      </section>
    </main>
  </>;
}

export default Main;
