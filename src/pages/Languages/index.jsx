import { Section } from "../../components/Section";

export function Languages(){
    return(
       <Section 
        title="LANGUAGES"
        description={""}>
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

       </Section>
    )
}