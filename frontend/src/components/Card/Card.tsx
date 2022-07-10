import styles from "./Card.module.scss";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <div className={styles.card}>
      <header>
        <Image src="/autoretrato.png" layout="fill" alt="LuciLuaPortrait" />
      </header>
      <aside>
        <h1>Hi, I'm Luci</h1>
        <p>
          Estudante de Cinema pela UFJF, sou apaixonada por tecnologia e Flâneur
          de busão. Bacharel em artes, mas meus desenhos não são grande coisa,
          prefiro fotografia e animação em 3D. Sou também programadora, de
          desenvolvedora frontend até automatizações com script em lote. Já fui
          escritora, hoje sou só romanticamente triste, equilíbrio é tudo.
          Fortemente ativa no GitHub e vacilante no instagram.
        </p>
      </aside>
      <footer>
        <ul>
          <li>
            <Link href="https://www.github.com/LuciLua/" title="GitHub">
              <a title="GitHub">
                <AiFillGithub />
              </a>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.instagram.com/luci_lua81/"
              title="instagram"
            >
              <a title="instagram">
                <AiFillInstagram />
              </a>
            </Link>
          </li>
          <li>
            <Link
              href="https://www.linkedin.com/in/l%C3%BAcia-guelber-837a50185/"
              title="LinkedIn"
            >
              <a title="LinkedIn">
                <AiFillLinkedin />
              </a>
            </Link>
          </li>
          <li>
            <Link href="https://br.pinterest.com/lucilua81/" title="Pinterest">
              <a title="Pinterest">
                <BsPinterest />
              </a>
            </Link>
          </li>
        </ul>
      </footer>
    </div>
  );
}
export default Card;
