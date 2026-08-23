import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Photo from './components/Photo'
import My_details from './components/My_details'
import Footer from './components/footer'

function App() {
  return (
    <div className="app-shell">
      <Navbar />

      <main className="container">
        <Header />

        <section className="hero-section">
          <Photo />
          <My_details />
        </section>

        <section id="about" className="section-block">
          <div className="section-heading">
            <span className="eyebrow">About Me</span>
            <h2>Turning ideas into clean digital experiences</h2>
          </div>

          <div className="card-grid three-col">
            <article className="info-card">
              <h3>Who I am</h3>
              <p>
                I’m Tarun Malik, a Computer Science and IT student at GLBITM Noida,
                passionate about frontend development, user experience, and modern web design.
              </p>
            </article>

            <article className="info-card">
              <h3>What I do</h3>
              <p>
                I build responsive, accessible, and visually engaging web interfaces using
                React, JavaScript, HTML, CSS, C++, and Python.
              </p>
            </article>

            <article className="info-card">
              <h3>My focus</h3>
              <p>
                I enjoy crafting clean layouts, improving usability, and delivering work that
                feels polished and useful for real people.
              </p>
            </article>
          </div>
        </section>

        <section id="skills" className="section-block">
          <div className="section-heading">
            <span className="eyebrow">Skills</span>
            <h2>Tools and technologies I work with</h2>
          </div>

          <div className="skills-row">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Python</span>
            <span>C++</span>
            <span>GitHub</span>
            <span>UI Design</span>
          </div>
        </section>

        <section id="projects" className="section-block">
          <div className="section-heading">
            <span className="eyebrow">Projects</span>
            <h2>Some highlights from my work</h2>
          </div>

          <div className="card-grid three-col">
            <article className="project-card">
              <span className="tag">Portfolio</span>
              <h3>Personal Portfolio</h3>
              <p>
                A modern portfolio site that showcases my skills, experience, and design style.
              </p>
            </article>

            <article className="project-card">
              <span className="tag">Frontend</span>
              <h3>Landing Page Design</h3>
              <p>
                Responsive, polished interface design focused on clarity, navigation, and layout.
              </p>
            </article>

            <article className="project-card">
              <span className="tag">Practice</span>
              <h3>JavaScript Projects</h3>
              <p>
                Interactive frontend experiments to improve logic, UI behavior, and problem-solving.
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="section-block contact-block">
          <div className="section-heading">
            <span className="eyebrow">Contact</span>
            <h2>Let’s build something impactful together</h2>
          </div>

          <div className="contact-box">
            <p>Open to internships, freelance projects, and opportunities to grow as a developer.</p>
            <div className="cta-row">
              <a href="https://github.com/Malik25252007" target="_blank" rel="noreferrer" className="btn btn-primary">
                GitHub Profile
              </a>
              <a href="mailto:tarunmalik@example.com" className="btn btn-secondary">
                Email Me
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}

export default App
