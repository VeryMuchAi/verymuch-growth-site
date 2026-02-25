export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-5 text-center">
        <p className="text-xs text-gray-400">
          &copy; {new Date().getFullYear()} VeryMuch.ai — All rights reserved.
        </p>
      </div>
    </footer>
  );
}
