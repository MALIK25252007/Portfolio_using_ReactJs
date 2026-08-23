function My_details() {
  const githubUrl = 'https://github.com/Malik25252007'

  return (
    <div className="profile-card">
      <h2>Tarun Malik</h2>
      <p className="profile-role">
        CS & IT student @ GLBITM Noida | Frontend Developer | C++, Python,
        HTML/CSS/JS | Turning ideas into clean, usable interfaces
      </p>

      <div className="cta-row">
        <a href={githubUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
          GitHub Profile
        </a>
        <a href="#" className="btn btn-secondary">
          Get My CV
        </a>
      </div>
    </div>
  )
}

export default My_details