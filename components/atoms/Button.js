export default function Button({ size, color, onClick, children }) {
  let classes = ["text-redrose", "font-bold", "focus:outline-none", "focus:ring-2", "focus:ring-offset-2"];
  if (size === "large") {
    classes.push("py-3", "px-12", "rounded-xl", "text-lg");
  } else {
    classes.push("py-2", "px-6", "rounded-lg", "text-medium");
  }
  if (color === "dark") {
    classes.push("text-white", "bg-slate-900", "hover:bg-slate-700", "focus:ring-slate-900");
  }
  if (color === "primary") {
    classes.push("text-white", "bg-indigo-500", "hover:bg-indigo-600", "focus:ring-indigo-500");
  }
  return (
    <button className={classes.join(" ")} onClick={onClick}>
      {children}
    </button>
  );
}
