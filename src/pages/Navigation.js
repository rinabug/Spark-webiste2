import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="nav">
      <a>Spark! Bytes</a>
      <ul>
        <li>
          <Link href="/">Home</Link>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
}
