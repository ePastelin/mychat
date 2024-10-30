export default function ProfilePhoto({ name }: { name: String }) {

    const randomColor = getRandomColor(name)

  return (
    <div
      className="rounded-full h-10 w-10 flex items-center justify-center text-white"
      style={{ backgroundColor: randomColor }}
    >
      {getInitials(name)}
    </div>
  );
}

const getRandomColor = (name: String) => {
  const colors = ["#FF6B6B", "#6BFFB2", "#6B9EFF", "#FFEB6B", "#FFB46B", "#FF6B6B", "#6BFFB2", "#6B9EFF", "#FFEB6B", "#FFB46B", "#FF6B6B", "#6BFFB2", "#6B9EFF", "#FFEB6B", "#FFB46B"];
  return colors[name.length - 2];
};

const getInitials = (name: String) => {
  const initials = name
    .split(" ")
    .map((word) => word[0])
    .join("");
  return initials.toUpperCase();
};
