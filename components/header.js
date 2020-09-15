import Link from "next/link";

const Header = () => (
  <div>
    <h2>
      <Link href="/">
        <a>Gundla gårdscafé</a>
      </Link>
    </h2>
    <nav>
      <ul>
        <li>
          <Link href="/about" as="/about">
            <a>Om oss</a>
          </Link>
        </li>
        <li>
          <Link href="/booking" as="/boka">
            <a>Bokningsförfrågan</a>
          </Link>
        </li>
        <li>
          <Link href="/catering" as="/catering">
            <a>Catering</a>
          </Link>
        </li>
        <li>
          <Link href="/events" as="/events">
            <a>Events</a>
          </Link>
        </li>
        <li>
          <Link href="/menu" as="/meny">
            <a>Meny</a>
          </Link>
        </li>
        <li>
          <Link href="/renting" as="/fest">
            <a>Fest och bröllop</a>
          </Link>
        </li>
      </ul>
    </nav>
  </div>
);

export default Header;
