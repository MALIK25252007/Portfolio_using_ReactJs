function Left_Box() {
  const name = 'Tarun Malik'
  const role = 'Frontend Developer in the making | Student @ GLBITM, Noida'

  return (
    <div>
    <header style={{ 
      padding: '4rem 2rem',
      height:'260px',
      width:'260px', 
      textAlign: 'start', 
      background: 'url("src/assets/My_photo.png")',
      borderRadius:"200px",
      backgroundSize:'cover', 
      color: '#fff' }}> 
    </header>
    <header style={{
      width:'650px',
      height:'900px',
      marginLeft:'400px',
      marginTop:'-400px', 
      padding: '4rem 2rem', 
      textAlign: 'center', 
      background: '#000000',
      border:'2px solid white',
      borderRadius:'20px', 
      color: '#fff' }}>
      <h1>Hi, I'm <span style={{ color: '#38bdf8' }}>{name}</span></h1><hr></hr>

      <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>{role}</p><br></br>
      <p><img src="src/assets/skill.png" style={{height:'520px',width:'720px',marginLeft:'-34px'}}></img></p><br></br>
      
    </header>
    </div>
  );
}

export default Left_Box;