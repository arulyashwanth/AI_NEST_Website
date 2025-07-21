export default function Footer() {
  return (
    <footer className=" text-maroon-600 dark:bg-slate-900 dark:text-gray-200 py-4">
      <div className=" dark:border-slate-700 pt-3 text-center text-sm text-maroon-800">
        <p>© {new Date().getFullYear()} AI Nest - Amrita Vishwa Vidyapeetham. All rights reserved.</p>
      </div>
    </footer>
  );
}
