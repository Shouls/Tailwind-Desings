import SectionLogo from "./Sections/LogoSection";
import SearchSection from "./Sections/SearchSection";
import UserSection from "./Sections/UserSection";

export default function Header() {
  return (
    <header className='fixed w-full h-[7vh] left-0 top-0 flex items-center justify-between px-8 dark:bg-dark bg-white z-40'>
      <SectionLogo />
      <SearchSection />
      <UserSection />
    </header>
  )
}
