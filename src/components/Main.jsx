import "./css/Main.css";
import  Courses  from "./sub_components/Courses.jsx";
import  Books  from "./sub_components/Books.jsx";


function Main() {
  return (
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

          <Courses />
          <Books />

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
  );
}

export default Main;
