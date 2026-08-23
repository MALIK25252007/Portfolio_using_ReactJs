function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">Tarun Malik</div>

      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <a
        href="https://github.com/Malik25252007"
        target="_blank"
        rel="noreferrer"
        className="btn btn-primary nav-button"
      >
        GitHub
      </a>
    </nav>
  )
}

export default Navbar