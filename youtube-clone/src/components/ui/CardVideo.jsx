import { LuMoreVertical } from "react-icons/lu";
import { Link } from "wouter";

export default function CardVideo({ ...video }) {
  return (
    <div>
      <div className="relative">
        <img
          src={video.image}
          alt="Img Video"
          className="w-[440px] object-cover rounded-xl"
        />
        <p className="text-white text-sm bg-dark bottom-1 px-1.5 py-0.5 right-2 absolute rounded-md">
          {video.duration}
        </p>
      </div>
      <div className="relative">
        <div className="flex items-start justify-start gap-2 pt-3">
          <Link href="/profile">
            <img src={video.user.pic} alt="user pic" className="w-10 h-10 rounded-full object-cover" />
          </Link>
          <div>
            <h4 className="text-lg font-medium text-dark dark:text-white">
              {video.title}
            </h4>
            <Link href="/profile" className="text-sm dark:hover:text-white transition-colors duration-300">
              {video.user.userName}
            </Link>
            <p>
              {video.views} de vistas - hace {video.createdAt}
            </p>
          </div>


        </div>
        <LuMoreVertical size={20} className="absolute top-4 right-0" />
      </div>
    </div>
  )
}
