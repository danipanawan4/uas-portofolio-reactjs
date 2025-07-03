import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react"; // Pakai lucide-react untuk ikon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-4 py-4 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 dark:bg-gray-900/80 shadow-md backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <h1 className="text-2xl font-bold text-black dark:text-white">
          My-Portofolio
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 dark:text-white font-medium">
          <li><a href="#beranda" className="hover:text-indigo-600">Beranda</a></li>
          <li><a href="#tentang" className="hover:text-indigo-600">Tentang</a></li>
          <li><a href="#proyek" className="hover:text-indigo-600">Project</a></li>
          <li><a href="#kontak" className="hover:text-indigo-600">Contact</a></li>
          <li><a href="#database" className="hover:text-indigo-600">Riwayat</a></li>
        </ul>

        {/* Tombol Auth Desktop */}
        <div className="hidden md:flex gap-3">
          <a
            href="/login"
            className="bg-white text-black px-4 py-2 rounded-lg font-semibold hover:bg-gray-200"
          >
            Sign In
          </a>
          <a
            href="/register"
            className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700"
          >
            Sign Up
          </a>
        </div>

        {/* Burger Icon */}
        <button
          className="md:hidden text-black dark:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 bg-white dark:bg-gray-900 p-4 rounded-xl shadow">
          <ul className="flex flex-col gap-4 text-gray-800 dark:text-white font-medium">
            <li><a href="#beranda" onClick={() => setIsOpen(false)}>Beranda</a></li>
            <li><a href="#tentang" onClick={() => setIsOpen(false)}>Tentang</a></li>
            <li><a href="#proyek" onClick={() => setIsOpen(false)}>Project</a></li>
            <li><a href="#kontak" onClick={() => setIsOpen(false)}>Contact</a></li>
            <li><a href="#database" onClick={() => setIsOpen(false)}>Riwayat</a></li>
          </ul>
          <div className="flex flex-col gap-3 mt-4">
            <a
              href="/login"
              className="bg-white text-black px-4 py-2 rounded-lg font-semibold text-center hover:bg-gray-200"
            >
              Sign In
            </a>
            <a
              href="/register"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-center hover:bg-blue-700"
            >
              Sign Up
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
