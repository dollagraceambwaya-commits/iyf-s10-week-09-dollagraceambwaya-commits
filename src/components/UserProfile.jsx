import { useState, useEffect } from "react";

// Pattern 1: Fetch data on mount
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(true);
      setUser({ id: userId, name: "Mock User" + userId });
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, [userId]); // Re-fetch when userId changes

  if (loading) return <p>Loading...</p>;
  return <div>{user.name}</div>;
}

export default UserProfile;
