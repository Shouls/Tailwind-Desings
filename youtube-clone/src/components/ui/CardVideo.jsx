import { LuMoreVertical } from "react-icons/lu";
import { Link } from "wouter";

export default function CardVideo({ ...video }) {
  return (
    <Link href={`/watch/:${video.id}`} className="group">
      <section className="relative">
        <img
          src={video.image}
          alt="Img Video"
          className="w-full object-cover rounded-xl"
        />
        <p className="text-white text-sm bg-dark bottom-1 px-1.5 py-0.5 right-2 absolute rounded-md">
          {video.duration}
        </p>
      </section>
      <section className="relative group">
        <div className="flex items-start justify-start gap-2 pt-3">
          <Link href="/profile">
            <img src={video.user.pic} alt="user pic" className="w-10 h-10 rounded-full object-cover" />
          </Link>
          <div>
            <h4 className="text-lg font-medium dark:text-white group-hover:underline">
              {video.title}
            </h4>
            <Link href="/profile" >
              <h3 className="text-sm hover:text-gray-500 text-gray-400 transition-colors duration-300">
                {video.user.userName}
              </h3>
            </Link>
            <p className="text-sm text-gray-400">
              {video.views} de vistas - hace {video.createdAt}
            </p>
          </div>
        </div>
        <button className="absolute top-4 right-0 hover:bg-gray-500 rounded-full">
          <LuMoreVertical size={20} className="" />

        </button>
      </section>
    </Link>
  )
}
