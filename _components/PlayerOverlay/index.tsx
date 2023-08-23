import { css } from "npm:@emotion/react";

type Props = {
  src: string;
  show: boolean;
};

const PlayerOverlay = (
  { src, show }: Props,
) => (show
  ? (
    <div id="overlay" className="overlay-event">
      <div className="flex">
        <div id="overlay-inner">
          <iframe
            id="embed"
            // FIXME: "" not allowed here
            // allowFullScreen=""
            frameBorder="0"
            css={css`
            width: 70vw;
            height: 70vh;
            `}
            height=""
            width=""
            src={src ? `${src}&autoplay=1` : ""}
          >
          </iframe>
          <button id="close-btn" className="overlay-event" type="button">
            Close
          </button>
        </div>
      </div>
    </div>
  )
  : null);

export { PlayerOverlay };
