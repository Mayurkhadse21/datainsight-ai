export default function Navbar() {
  return (
    <nav className="w-full flex justify-between items-center px-10 py-6">

      <h2 className="text-2xl font-bold text-white">
        DataInsight AI
      </h2>

      <div className="flex gap-8 text-gray-300">

        <a href="#">Features</a>

        <a href="#">Pricing</a>

        <a href="#">About</a>

        <button className="bg-blue-600 px-5 py-2 rounded-lg">
          Login
        </button>

      </div>

    </nav>
  );
}