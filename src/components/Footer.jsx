export default function Footer() {
  return (
    <footer id="contact" className="bg-orange px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
        <h2 className="text-4xl font-black text-white md:text-5xl">Contact</h2>
        <a
          href="mailto:contact-patoo@gmail.com"
          className="text-lg font-bold text-white transition hover:underline md:text-xl"
        >
          contact-patoo@gmail.com
        </a>
      </div>
    </footer>
  );
}
