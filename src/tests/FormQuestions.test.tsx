import FormQuestions from "../pages/FormQuestions";
import { render, screen } from "@testing-library/react";

describe("Componente principal", () => {
  it("Mostrar o título do questionário", () => {
    render(<FormQuestions />);

    expect(screen.getByText("Questionário")).toBeInTheDocument();
  });
});
