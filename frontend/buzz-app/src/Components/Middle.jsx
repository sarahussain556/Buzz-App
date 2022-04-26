import Post from "../Components/Posts";
import Postbar from "./Postbar";
import "../Components/Middle.css"
import { Posts } from "../dumy";

export default function Middle() {
  return (
    <div className="middlecontainer">
      <div className="middle">
        <Postbar/>
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
}   