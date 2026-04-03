type AgeType = {
  age: number;
};

export function Age({ age }: AgeType) {
  return <p>Your age is {age}</p>;
}
