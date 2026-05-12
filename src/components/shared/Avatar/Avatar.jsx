function Avatar({ src, alt, name }) {
  const initials = name
    ? name
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
    : "?";

  return (
    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
      {src ? (
        <img
          src={src}
          alt={alt || name}
          className="w-full h-full object-cover"
        />
      ) : (
        <span className="text-gray-600 font-semibold">{initials}</span>
      )}
    </div>
  );
}

export default Avatar;
