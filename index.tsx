import { css } from "npm:@emotion/react";
import type { Data } from "./_data.ts";

export default function ({ songs }: Data) {
  return (
    <>
      <h1 className="text-4xl font-bold">猫魔しろあ歌枠セットリスト</h1>
      <div id="overlay" className="overlay-event">
        <div
          css={css`
            width: 100%;
            height:100%;
            display: flex;
            justify-content: center;
            align-items: center; 
        `}
        >
          <div id="overlay-inner">
            <iframe
              id="embed"
              // FIXME: "" not allowed here
              // allowFullScreen=""
              frameBorder="0"
              css={css`
              height: 70vh;
              width: 70vw;
              `}
              src=""
            >
            </iframe>
            <button id="close-btn" className="overlay-event" type="button">
              Close
            </button>
          </div>
        </div>
      </div>
      <div className="p-10">
        {songs.map((song) => (
          <div
            className="grid grid-cols-2"
            key={`${song.archiveTitle} - ${song.song}}`}
          >
            <p>{song.archiveTitle}</p>
            <a className="overlay-event" data-url={song.startURL}>
              {song.song}
            </a>
          </div>
        ))}
      </div>
    </>
  );
}
