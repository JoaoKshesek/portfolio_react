import { Container } from "./styles";

export function ResumeItem({ title, children }) {
    return (
        <Container>
            <h3>{title}</h3>
            {children}
        </Container>
    );
}