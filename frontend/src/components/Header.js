export default function Header() {
  return (
    <header className="relative z-[100] w-full flex items-center justify-between px-5 md:px-[28px] lg:px-[48px] py-4 md:py-[20px] lg:py-[28px] box-border">
      <div className="text-[14px] font-bold tracking-[1.5px] text-[var(--neon)] uppercase whitespace-nowrap shrink-0">NO LIMITS</div>

      <nav className="hidden md:flex items-center gap-[32px] list-none m-0 p-0">
        <a href="#" className="text-[14px] text-white/75 no-underline transition-colors duration-300 tracking-[0.3px] cursor-pointer hover:text-white">Social Media</a>
        <a href="#" className="text-[14px] text-white/75 no-underline transition-colors duration-300 tracking-[0.3px] cursor-pointer hover:text-white">Website</a>
        <a href="#" className="text-[14px] text-white/75 no-underline transition-colors duration-300 tracking-[0.3px] cursor-pointer hover:text-white">Blog</a>
        <a href="#" className="text-[14px] text-white/75 no-underline transition-colors duration-300 tracking-[0.3px] cursor-pointer hover:text-white">Contact</a>
      </nav>

      <a href="#" className="relative inline-flex items-center justify-center px-[30px] py-[14px] text-[12px] font-semibold tracking-[1.5px] uppercase text-[var(--neon)] bg-transparent no-underline border-[1.5px] border-[var(--neon)] rounded-[50%/80%] transition-colors duration-300 shrink-0 cursor-pointer hover:bg-[rgba(200,240,0,0.06)]">
        CONTACT US
      </a>
    </header>
  );
}
