import React from "react";

export default function Header2() {
  return (
    <div className="containerHeader">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Star_icon_containing_star_icon.svg/810px-Star_icon_containing_star_icon.svg.png"
        alt=""
      />

      <nav>
        <a href="http://localhost:3000/page1">Page 1</a>
        <a href="/page2">Page 2</a>
        <a href="/page3">Page 3</a>
        <a href="/page4">Page 4</a>
        <a href="/page5">Page 5</a>
        <a href="/page6">Page 6</a>
      </nav>
    </div>
  );
}
