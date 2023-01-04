/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Header.css";

export function Header() {
  return (
    <div className="container">
      <nav className="container-nav">
        <li>
          <a href="#">Inicio</a>
        </li>
        <li>
          <a href="#">Biografias</a>
        </li>
        <li>
          <a href="#">Desenhos</a>
        </li>
        <li>
          <a href="#">Contato</a>
        </li>
      </nav>
    </div>
  );
}
