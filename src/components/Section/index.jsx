import { Container } from "./styles";

export function Section({ title, children, description }) {
    return (
        <Container>
            <h2>{title}</h2>
            <p>{description}</p>
            {children}
            <hr />
        </Container>
    );
}