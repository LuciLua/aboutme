import Link from "next/link";

function Li(props) {
  const { href, title, icon } = props;

  return (
    <li>
      <Link href={href} target="_blank" title={title}>
        <a title={title}>
          {icon}
          <span>{props.children}</span>
        </a>
      </Link>
    </li>
  );
}
export default Li;
