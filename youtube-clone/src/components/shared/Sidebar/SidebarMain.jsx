import Menu from "../Menu";


export default function Sidebar() {
  return (
    <aside className="fixed left-0 top-[7vh] h-[93vh] w-60 p-5 z-40 bg-white dark:bg-dark overflow-y-auto">
      <Menu />
    </aside>
  )
}
