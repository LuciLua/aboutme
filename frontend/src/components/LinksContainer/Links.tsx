import styles from "./linksContainer.module.scss";
import {
  AiFillCode,
  AiFillYoutube,
  AiFillFacebook
} from "react-icons/ai";
import Li from "./Li";

function LinksContainer() {
  return (
    <div className={styles.linksContainer}>
      <ul>
        <Li
          href='https://luci-lua.tk'
          title='Portfólio'
          icon={<AiFillCode />}
        >
          Portfólio
        </Li>
        <Li
          href='https://www.youtube.com/channel/UCIbJuoAAdTP9rClO7mK-aVg'
          title='YT:Luci4Dev'
          icon={<AiFillYoutube />}
        >
          Canal Youtube: Luci4Dev
        </Li>
        <Li
          href='https://www.facebook.com/luci4dev'
          title='FB:Luci4Dev'
          icon={<AiFillFacebook />}
        >
          Página no Facebook: Luci4Dev
        </Li>
        <Li
          href='https://www.youtube.com/channel/UCuXXXen-BlroM9jvu9pljiA'
          title='YT:GamePlays'
          icon={<AiFillYoutube />}
        >
          Canal no Youtube: GamePlays
        </Li>
        <Li
          href='https://www.facebook.com/gameplaysluci'
          title='FB:GamePlays'
          icon={<AiFillFacebook />}
        >
          Página no Facebook: GamePlays
        </Li>
      </ul>
    </div>
  );
}
export default LinksContainer;
