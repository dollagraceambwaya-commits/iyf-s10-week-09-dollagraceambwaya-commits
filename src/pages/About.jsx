import UserProfile from "../components/UserProfile";
import { Button } from "../components/shared";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="max-w-3xl mx-auto text-center p-6">
        <h1 className="text-4xl font-bold text-blue-700 mb-4">SkillSync</h1>

        <nav className="flex justify-center space-x-6 text-blue-600 font-medium mb-4">
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/posts" className="hover:underline">
            Posts
          </a>
          <a href="/about" className="hover:underline">
            About
          </a>
        </nav>

        <div className="flex justify-center space-x-3 mb-6">
          <Button variant="primary">Login</Button>
          <Button variant="secondary">Sign Up</Button>
        </div>

        <h2 className="text-2xl font-semibold mt-6 mb-2">About SkillSync</h2>
        <p className="text-gray-600 mb-6">
          A platform for connecting people through skills, learning, and
          opportunities.
        </p>
        <UserProfile userId={1} />

        <h3 className="text-xl font-semibold mt-8 mb-3">Popular Posts</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left">
          <li>Top skills to learn in 2026</li>
          <li>How to Build a Strong Professional Network</li>
          <li>How to stay consistent while learning programming</li>
          <li>How do I land my first tech job?</li>
          <li>My code is not working — need help</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3">Categories</h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 text-left">
          <li>Trending Skills</li>
          <li>Opportunities</li>
          <li>Learning Resources</li>
          <li>Discussions</li>
          <li>Help Posts</li>
        </ul>
      </div>
    </div>
  );
}
export default About;
