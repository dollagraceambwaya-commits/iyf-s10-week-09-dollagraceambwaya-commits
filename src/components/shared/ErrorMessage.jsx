function ErrorMessage({ message, onRetry }) {
  return (
    <div className="error-message">
      <span className="error-icon">⚠️</span>
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
        <strong className="font-bold">Error: </strong>
        <p>{message}</p>
        {onRetry && <button onClick={onRetry}>Try Again</button>}
      </div>
    </div>
  );
}

export default ErrorMessage;
