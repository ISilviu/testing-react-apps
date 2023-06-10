import MoviesList from "./MoviesList";
import { fireEvent, render } from "@testing-library/react";

describe("MoviesList", () => {
  test("it renders", () => {
    const component = render(
      <MoviesList movies={[{ id: "1", title: "Foo" }]} />
    );
    expect(component).not.toBeNull();
  });

  test("it renders the movies' titles", () => {
    const movies = [
      { id: "1", title: "Foo" },
      { id: "2", title: "Bar" },
      { id: "3", title: "Baz" },
    ];

    const component = render(<MoviesList movies={movies} />);
    movies.forEach(({ title }) =>
      expect(
        component.queryByText(title, {
          selector: "h2",
        })
      ).toBeInTheDocument()
    );
  });

  test("the list can be hidden/shown", () => {
    const movies = [
      { id: "1", title: "Foo" },
      { id: "2", title: "Bar" },
      { id: "3", title: "Baz" },
    ];

    const testMovieTitles = (shouldBePresent) => {
      movies.forEach(({ title }) => {
        const renderedTitle = component.queryByText(title, {
          selector: "h2",
        });

        if (shouldBePresent) {
          expect(renderedTitle).toBeInTheDocument();
        } else {
          expect(renderedTitle).not.toBeInTheDocument();
        }
      });
    };

    const component = render(<MoviesList movies={movies} />);
    expect(component.queryByText("Hide")).toBeInTheDocument();
    testMovieTitles(true);

    const showHideButton = component.queryByRole("button");

    fireEvent.click(showHideButton);
    expect(component.queryByText("Show")).toBeInTheDocument();
    testMovieTitles(false);

    fireEvent.click(showHideButton);
    expect(component.queryByText("Hide")).toBeInTheDocument();
    testMovieTitles(true);
  });
});
