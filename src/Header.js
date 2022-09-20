import React from 'react'

const Header = () => {
  return (
    <nav>
      <ul>
        <li><strong>WhatchaWant</strong></li>
      </ul>
      <ul>
        <li><a href="/filter">Filter</a></li>
        <li><a href="/">Random</a></li>
      </ul>
    </nav>
  )
}

export default Header