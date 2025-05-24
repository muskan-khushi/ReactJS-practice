import profilePic from './assets/imgg.jpg'

function Card(){
  return(
    <div className="card">
          <img className='card-image' src={profilePic} alt="profile picture"></img>
          <h2 className='card-title'>Muskan</h2>
          <p className='card-text'>I am a junior at NITP and am passionate about tech.</p>
    </div>
  );
}

export default Card