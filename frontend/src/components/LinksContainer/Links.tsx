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
          icon={<AiFillCode color="#15a" />}
        >
          Portfólio
        </Li>
        <Li
          href='https://www.youtube.com/channel/UCIbJuoAAdTP9rClO7mK-aVg'
          title='YT:Luci4Dev'
          icon={<AiFillYoutube color="#f00" />}
        >
          Canal Youtube: Luci4Dev
        </Li>
        <Li
          href='https://www.facebook.com/luci4dev'
          title='FB:Luci4Dev'
          icon={<AiFillFacebook color="#03f"/>}
        >
          Página no Facebook: Luci4Dev
        </Li>
        <Li
          href='https://www.youtube.com/channel/UCuXXXen-BlroM9jvu9pljiA'
          title='YT:GamePlays'
          icon={<AiFillYoutube color="#f00"/>}
        >
          Canal no Youtube: GamePlays
        </Li>
        <Li
          href='https://www.facebook.com/gameplaysluci'
          title='FB:GamePlays'
          icon={<AiFillFacebook color="#03f"/>}
        >
          Página no Facebook: GamePlays
        </Li>
      </ul>
    </div>
  );
}
export default LinksContainer;
