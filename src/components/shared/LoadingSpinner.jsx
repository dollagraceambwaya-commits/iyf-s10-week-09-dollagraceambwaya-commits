function LoadingSpinner({ size = "medium", text = "Loading..." }) {
  const sizes = {
    small: "h-4 w-4",
    medium: "h-6 w-6",
    large: "h-8 w-8",
  };

  return (
    <div className="flex items-center justify-center space-x-2 text-blue-600">
      <div
        className={`animate-spin rounded-full border-t-2 border-b-2 border-blue-600 ${sizes[size]}`}
      ></div>
      <p>{text}</p>
    </div>
  );
}

export default LoadingSpinner;
