import { categories } from "../../mocks/categories";
import Badge from "../ui/Badge";

export default function Tags() {
  return (
    <div className="mb-10">
      <ul className="flex items-center gap-4 overflow-x-auto flex-nowrap scroll">
        {categories.map((category) => (
          <li key={category.id}>
            <Badge title={category.name} id={category.id}></Badge>
          </li>
        ))}
      </ul>
    </div>
  )
}


