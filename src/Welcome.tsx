import { Age } from "./Age";

type WelcomeType = {
  name: string;
  age: number;
};

export function Welcome({ name, age }: WelcomeType) {
  return (
    <div>
      <p>Welcome, {name}!</p>
      {age && age > 18 && <Age age={age} />}
      {age && <Age age={age} />}
      {age && age > 18 && age < 65 && <Age age={age} />}
      {age && age > 18 && name === "John" && <Age age={age} />}
      {age && <Age age={age} />}
      {<Message age={age} />}
    </div>
  );
}
