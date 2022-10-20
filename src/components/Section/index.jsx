import { Container, Teste, Content } from "./styles";

export function Section({ title, children }) {
    return (
        <Container>
            <Teste>
            <h2>{title}</h2>
            </Teste>
            <Content>
                {children}
            </Content>
        </Container>
    );
}