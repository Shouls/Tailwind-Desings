import TagButton from "./TagButton";

export default function Tags() {
  return (
    <div className="mb-10">
      <ul className="flex items-center gap-4 overflow-x-auto flex-wrap">
        <li>
          <TagButton title='Todos' active />
        </li>
        <li>
          <TagButton title='Videojuegos' />
        </li>
        <li>
          <TagButton title='Programación' />
        </li>
        <li>
          <TagButton title='Música' />
        </li>
        <li>
          <TagButton title='Ratchet & Clank' />
        </li>
        <li>
          <TagButton title='Furrys' />
        </li>
        <li>
          <TagButton title='Taylor Swift' />
        </li>
        <li>
          <TagButton title='League of Legends' />
        </li>
        <li>
          <TagButton title='Goodra' />
        </li>
        <li>
          <TagButton title='Sonic The Hedgehog' />
        </li>
        <li>
          <TagButton title='Nier Automata' />
        </li>
        <li>
          <TagButton title='NITW' />
        </li>
        <li>
          <TagButton title='Klonoa' />
        </li>
        <li>
          <TagButton title='One Shot' />
        </li>
        <li>
          <TagButton title='Bayonetta' />
        </li>
        <li>
          <TagButton title='Devil May Cry' />
        </li>
      </ul>
    </div>
  )
}


