import './Resume.css';
import html from '/src/assets/images/html.png';
import css from '/src/assets/images/css.png';
import javascript from '/src/assets/images/javascript.png';
import react from '/src/assets/images/react.png';
import node from '/src/assets/images/node.png';
import git from '/src/assets/images/git.png';


export const Resume = () => {
  return (
    <section id="resume">
      <div className='work'>
        <div className='col-left'>
          <h2><span>WORK</span></h2>
        </div>
        <div className='col-right'>
          <div className="item">
            <h3>Despachante Valentin Duarte</h3>
            <p>Administrative Assistant</p>
            <p>February, 2021 — April, 2022</p>
            <p>Customer service, focusing on solving customer problems quickly and effectively Elaboration of spreadsheets to control and organize processes Preparation of various documentation, electronic and printed, to be sent to customers, with emphasis on agile work Started to develop a new project for the company's website, using ReactJS as the main technology</p>
          </div>
          <div className="item">
            <h3>Portal Cível & Trabalhista</h3>
            <p>Administrative Assistant</p>
            <p>November, 2017 — April, 2020</p>
            <p>I helped in the elaboration of spreadsheet for calculating refinancing of bank loans, consortium and leasing. I collect and analyze data from bank statements</p>
          </div>
        </div>
      </div>

      <div className='education'>
        <div className='col-left'>
          <h2><span>EDUCATION</span></h2>
        </div>
        <div className='col-right'>
          <div className="item">
            <h3>Faculdade Descomplica</h3>
            <p>Systems Analysis and Development</p>
            <p>January, 2022 — Present</p>
            <p>The Systems Analysis and Development course aims to enable students to design, document, specify, implement, test, deploy, and maintain computer information systems.</p>
          </div>
          <div className="item">
            <h3>Explorer</h3>
            <p>Rocketseat</p>
            <p>August, 2022 — Present</p>
            <p>An immersive course focused on Full Stack training, based on real world challenges and using the 7-2-1 method: 70% coding, 20% networking and 10% branding.</p>
          </div>
          <div className="item">
            <h3>Full Stack JavaScript</h3>
            <p>One Bit Code</p>
            <p>May, 2022 — Present</p>
            <p>A complete course focused on fullstack programming, from basic concepts in HTML and CSS to advanced programming in Reacts and Typescript.</p>
          </div>
          <div className="item">
            <h3>Finances with Python</h3>
            <p>Python Academy</p>
            <p>January, 2022 — April, 2022</p>
            <p>A course focused on the use and application of Python in Finance, developing calculations and simulations of return on investments and also their risks and rates.</p>
          </div>
        </div>
      </div>
      <div className='technologies'>
        <div className='col-left'>
          <h2><span>TECHNOLOGIES</span></h2>
        </div>
        <div className='col-right'>
          <p>Here are the languages and technologies that I use :</p>
        <div className="item">
            <img src={html} alt="" />
            <h4>HTML 5</h4>
            </div>
            <div className="item">
            <img src={css} alt="" />
            <h4>CSS 3</h4>
            </div>
            <div className="item">
            <img src={javascript} alt="" />
            <h4>Javascript</h4>
            </div>
            <div className="item">
            <img src={react} alt="" />
            <h4>ReactJS</h4>
            </div>
            <div className="item">
            <img src={node} alt="" />
            <h4>NodeJS</h4>
            </div>
            <div className="item">
            <img src={git} alt="" />
            <h4>Git</h4>
            </div>
        </div>
      </div>
    </section>
  )
}
