import { Age } from "./Age";

type WelcomeType = {
  name?: string;
  age?: number;
};

export function Welcome({ name = "Dave", age }: WelcomeType) {
  return (
    <div>
      <p>
        Welcome, <strong>{name}</strong>!
      </p>
      <Age age={age} />
    </div>
  );
}
