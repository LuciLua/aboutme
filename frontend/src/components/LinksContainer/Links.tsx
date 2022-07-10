import styles from "./linksContainer.module.scss"
import { AiFillCode } from "react-icons/ai"
import Link from "next/link"

function LinksContainer() {
    return (
        <div className={styles.linksContainer}>
            <ul>
                <li>
                    <Link href="https://www.luci-lua.tk/"
                        title="Portfólio">
                        <a title="Portfólio">
                            <AiFillCode />
                            <span>
                                Portfólio
                            </span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.youtube.com/channel/UCIbJuoAAdTP9rClO7mK-aVg"
                        title="YT:Luci4Dev">
                        <a title="YT:Luci4Dev">
                            <AiFillCode />
                            <span>
                                Canal Youtube: Luci4Dev
                            </span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.facebook.com/luci4dev"
                        title="FB:Luci4Dev">
                        <a title="FB:Luci4Dev">
                            <AiFillCode />
                            <span>
                                Página no facebook: Luci4Dev
                            </span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.youtube.com/channel/UCuXXXen-BlroM9jvu9pljiA"
                        title="YT:GamePlays">
                        <a title="YT:GamePlays">
                            <AiFillCode />
                            <span>
                                Canal no Youtube: GamePlays
                            </span>
                        </a>
                    </Link>
                </li>
                <li>
                    <Link href="https://www.facebook.com/gameplaysluci"
                        title="FB:GamePlays">
                        <a title="FB:GamePlays">
                            <AiFillCode />
                            <span>
                                Página no Facebook: GamePlays
                            </span>
                        </a>
                    </Link>
                </li>
            </ul>
        </div>
    )
}
export default LinksContainer