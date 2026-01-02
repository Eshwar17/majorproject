import React from 'react'
import './Features.css';
import supervisor from './img/whygrptch2.svg';
import karma from './img/whygrptch4.svg';
import calculator from './img/whygrptch3.svg';
import teamBuilder from './img/whygrptch1.svg';

const Features = () => {
  return (
    <>
    <div class="page1">
    </div>

    <div class="page2">
      <div>
        <div class="box b1">
          <h2>Grappler Chowdown</h2>
          <p>At GrapplTech, we believe in creating a community of top-performing grapplers who are passionate about learning and growing. Rewarding our top 10 grapplers with team lunches to foster a positive team dynamic and celebrate their hard work and dedication. Join us at GrapplTech and strive for excellence!</p>
          <img class="img" src={supervisor} alt="Supervisor" />
        </div>
      </div>

      <div>
        <div class="box b2">
          <h2>Virtual Mode</h2>
          <p>
          GrapplTech's virtual mode feature allows students and recent graduates to gain valuable experience and skills from the comfort of their own homes, connecting them with top companies and internship opportunities across the world. Join us today to kickstart your career journey, no matter where you are!
          </p>
          <img class="img" src={teamBuilder} alt="team-builder" />
        </div>

        <div class="box b4">
          <h2>Dedicated Mentor</h2>
          <p>GrapplTech's one-to-one mentorship feature connects students and recent graduates with experienced mentors who can provide guidance, support, and valuable industry insights to help them succeed in their chosen career paths. Join us today to unlock the power of mentorship and accelerate your career growth!</p>
          <img class="img" src={karma} alt="Karma" />
        </div>
      </div>

      <div>
        <div class="box b3">
          <h2>Client Projects</h2>
          <p>
          GrapplTech's client project feature provides students and recent graduates with the opportunity to work on real-world projects for top companies, gaining hands-on experience and valuable skills to add to their resumes. Join us today to take your bootcamp experience to the next level!
          </p>
          <img class="img" src={calculator} alt="Calculator" />
        </div>
      </div>
    </div>
    </>
  )
}

export default Features

