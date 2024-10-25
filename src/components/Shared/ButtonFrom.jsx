import Link from "next/link";
function ButtonFrom({ link, text, size }) {
  return (
    <Link
      href={link ? link : "#"}
      className="px-4 py-2 rounded-[4px] text-white bg-[#395BEF]"
      style={{ fontSize: size ? size : "16px" }}
    >
      {text}
    </Link>
  );
}

export default ButtonFrom;
