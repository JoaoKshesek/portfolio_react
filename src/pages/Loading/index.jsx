import { Container, Content, Wrap } from "./styles";

export function Loading(){

    return(
      <Container>
        <Content>
          <Wrap>
            <div className="wall wall-right"></div>
            <div className="wall wall-left"></div>   
            <div className="wall wall-top"></div>
            <div className="wall wall-bottom"></div> 
            <div className="wall wall-back"></div>    
          </Wrap>
        </Content>
      </Container>
    )
}