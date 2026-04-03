type MessageProps = {
  age: number;
};

export function Message({ age }: MessageProps) {
  if (age && age > 18) {
    return <p>Your age is {age}</p>;
  }

  return <p>You are very young!</p>;
}
