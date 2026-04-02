type AgeType = {
  age?: number;
};

export function Age({ age = 18 }: AgeType) {
  return <p>Your age is {age}</p>;
}
