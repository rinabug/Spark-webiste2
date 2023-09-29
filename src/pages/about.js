import NavBar from "./Navigation";
import Footer from "./Footer";
import Image from "next/image";
import me from "./images/me.jpeg";

export default function About() {
  return (
    <>
      <NavBar />
      <div className="format">
        <h1>About Spark! Bytes</h1>
        <p>
          Spark! Bytes was conceived with a simple idea in mind - to minimize
          food waste and maximize food sharing within the Boston University
          community. We recognized the potential of connecting those who have
          excess food with those who could benefit from it.
        </p>
        <h2>About the Author</h2>
        <div className="author-info">
          <Image src={me} alt="Picture of the author" className="profile" />
          <p className="info">
            Rina Tsegay is a Computer Science student at Boston University. Set
            to graduate May 2026, she is trying to explore different interests
            along with Computer Science. She is interested in fashion/makeup,
            cs, and much more. She is shy at first but really friendly!!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
