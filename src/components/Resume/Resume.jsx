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
      <div className='work margin'>
        <div className='col-left'>
          <h2>WORK</h2>
        </div>
        <div className='col-right'>
          <div className="item">
            <a href="http://www.despachanteduarte.com.br/" target="_blank">
              <h3>Despachante Duarte</h3>
            </a>
            <p className='info'><span>Administrative Assistant</span> • February, 2021 — April, 2022</p>
            <p>Customer service, focusing on solving customer problems quickly and effectively Elaboration of spreadsheets to control and organize processes Preparation of various documentation, electronic and printed, to be sent to customers, with emphasis on agile work Started to develop a new project for the company's website, using ReactJS as the main technology</p>
          </div>
          <div className="item">
            <a href="https://portalciveltrabalhista.com.br/" target="_blank">
              <h3>Portal Cível & Trabalhista</h3>
            </a>
            <p className='info'><span>Administrative Assistant</span> • November, 2017 — April, 2020</p>
            <p>I helped in the elaboration of spreadsheet for calculating refinancing of bank loans, consortium and leasing. I collect and analyze data from bank statements</p>
          </div>
        </div>
      </div>
      <hr />
      <div className='education margin'>
        <div className='col-left'>
          <h2><span>EDUCATION</span></h2>
        </div>
        <div className='col-right'>
          <div className="item">
            <a href="https://descomplica.com.br/faculdade/" target="_blank">
              <h3>Descomplica College</h3>
            </a>
            <p className='info'><span>Systems Analysis and Development</span> • January, 2022 — Present</p>
            <p>The Systems Analysis and Development course aims to enable students to design, document, specify, implement, test, deploy, and maintain computer information systems.</p>
          </div>
          <div className="item">
            <a href="https://www.rocketseat.com.br/" target="_blank">
            <h3>Rocketseat</h3>
            </a>
            <p className='info'><span>Explorer</span> • August, 2022 — Present</p>
            <p>An immersive course focused on Full Stack training, based on real world challenges and using the 7-2-1 method: 70% coding, 20% networking and 10% branding.</p>
          </div>
          <div className="item">
            <a href="https://onebitcode.com/" target="_blank">
              <h3>One Bit Code</h3>
            </a>
            <p className='info'><span>Full Stack JavaScript</span> • May, 2022 — Present</p>
            <p>A complete course focused on fullstack programming, from basic concepts in HTML and CSS to advanced programming in Reacts and Typescript.</p>
          </div>
          <div className="item">
            <a href="https://pythonacademy.com.br/" target="_blank">
              <h3>Python Academy</h3>
            </a>
            <p className='info'><span>Finances with Python</span> • January, 2022 — April, 2022</p>
            <p>A course focused on the use and application of Python in Finance, developing calculations and simulations of return on investments and also their risks and rates.</p>
          </div>
        </div>
      </div>
      <hr />
      <div className='languages margin'>
        <div className='col-left'>
          <h2>LANGUAGES</h2>
        </div>
        <div className='col-right'>
          <div className="item">
            <h3>Portuguese</h3>
            <p className='info'><span>Native, fluent</span></p>
          </div>
          <div className="item">
            <h3>English</h3>
            <p className='info'><span>Intermediate</span></p>
          </div>
        </div>
      </div>
      <hr />
      <div className="technologies margin">
        <div className="col-left">
          <h2><span>TECHNOLOGIES</span></h2>
        </div>
      <div className="col-right">
      <p>Here are the languages and technologies that I use :</p>
        <div className="item">
          <img src={html} alt="" />
          <h3>HTML 5</h3>
          <p>It is a standard markup language for web page creation. It allows the creation and structure of sections, paragraphs, and links using HTML elements (the building blocks of a web page) such as tags and attributes. </p>
        </div>
        <div className="item">
          <img src={css} alt="" />
          <h3>CSS 3</h3>
        </div>
        <div className="item">
          <img src={javascript} alt="" />
          <h3>Javascript</h3>
        </div>
        <div className="item">
          <img src={react} alt="" />
          <h3>ReactJS</h3>
        </div>
        <div className="item">
          <img src={node} alt="" />
          <h3>NodeJS</h3>
        </div>
        <div className="item">
          <img src={git} alt="" />
          <h3>Git</h3>
        </div>
      </div>
    </div>
    </section>
  )
}
