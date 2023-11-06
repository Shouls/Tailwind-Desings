import { videoInfo } from "../../../mocks/videoInfo";
import CardVideo from "../../ui/CardVideo";
import Tags from "../Tags";

export default function MainContent() {
  return (
    <section>
      <Tags />
      <div className="grid grid-cols-6 gap-4">
        {videoInfo.map((video) => (
          <div key={video.id}>
            <CardVideo {...video} />
          </div>
        ))}

      </div>

    </section>
  )
}
