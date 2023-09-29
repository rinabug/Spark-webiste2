import NavBar from "./Navigation";
import Footer from "./Footer";
import apple from "./images/apple.svg";
import android from "./images/android.svg";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="format">
        <h1>Spark! Bytes -Leftover Food Notifications for BU's Campus</h1>
        <p>
          Spark! Bytes is a revolutionary platform for Boston University's
          community. After events, any leftover food can be posted here, and
          those interested can sign up to grab some delicious free food.
        </p>
        <p>
          Our unique feature allows users to filter out food based on allergens,
          types and more. Stay up-to-date through SMS and text notifications
          whenever free food is available nearby!
        </p>

        <h2>Sign Up</h2>
        <p>Signup for Notifications</p>
        <form>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="end-page">
        <h2>Want to try it out?</h2>
        <button className="button" onClick={notify}>
          <Image src={apple} alt="logo" className="logo" />
          Join for iOS
        </button>
        <button className="button" onClick={notify}>
          <Image src={android} alt="logo" className="logo" />
          Join for Android
        </button>
      </div>
      <Footer />
    </>
  );
}

function notify() {
  alert("We will notify you!");
}
