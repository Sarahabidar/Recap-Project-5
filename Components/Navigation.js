import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <Link href={"./art-pieces"}>Pieces</Link>;
      <Link href={"/"}>Spotsight</Link>;
    </>
  );
}
