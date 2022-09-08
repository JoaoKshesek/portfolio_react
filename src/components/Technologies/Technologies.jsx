import './Technologies.css';
import html from '/src/assets/images/html.png';
import css from '/src/assets/images/css.png';
import javascript from '/src/assets/images/javascript.png';
import react from '/src/assets/images/react.png';
import node from '/src/assets/images/node.png';
import git from '/src/assets/images/git.png';

export const Technologies = () => {
  return (
    <section id="technologies">
      <h2><span>TECHNOLOGIES</span></h2>
      <p>Here are the languages and technologies that I use :</p>
      <div className="items">
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
    </section>
  )
}
