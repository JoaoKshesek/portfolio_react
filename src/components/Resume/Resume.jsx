import './Resume.css';



export const Resume = () => {
  return (
    <section id="resume">
      <div className='work'>
        <div className='col-left'>
          <h2>WORK</h2>
        </div>
        <div className='col-right'>
          <div className="item">
            <h3>Despachante Duarte</h3>
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
            <h3>Descomplica College</h3>
            <p>Systems Analysis and Development • January, 2022 — Present</p>
            <p>The Systems Analysis and Development course aims to enable students to design, document, specify, implement, test, deploy, and maintain computer information systems.</p>
          </div>
          <div className="item">
            <h3>Rocketseat</h3>
            <p>Explorer • August, 2022 — Present</p>
            <p>An immersive course focused on Full Stack training, based on real world challenges and using the 7-2-1 method: 70% coding, 20% networking and 10% branding.</p>
          </div>
          <div className="item">
            <h3>One Bit Code</h3>
            <p>Full Stack JavaScript • May, 2022 — Present</p>
            <p>A complete course focused on fullstack programming, from basic concepts in HTML and CSS to advanced programming in Reacts and Typescript.</p>
          </div>
          <div className="item">
            <h3>Python Academy</h3>
            <p>Finances with Python • January, 2022 — April, 2022</p>
            <p>A course focused on the use and application of Python in Finance, developing calculations and simulations of return on investments and also their risks and rates.</p>
          </div>
        </div>
      </div>

      <div className='languages'>
        <div className='col-left'>
          <h2>LANGUAGES</h2>
        </div>
        <div className='col-right'>
          <div className="item">
            <h3>Portuguese</h3>
            <p>Native, fluent</p>
          </div>
          <div className="item">
            <h3>English</h3>
            <p>Intermediate</p>
          </div>
        </div>
      </div>
    </section>
  )
}
