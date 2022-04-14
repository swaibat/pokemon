import Link from "next/link";
import { Container } from "../components/Container";
import { NavBar } from "../components/NavBar";
import SearchField from "./SearchField";
import Image from "next/image";
import Logo from "./logo.svg";
import { useRouter } from "next/router";

const Layout = ({ children }: any) => {
  const router = useRouter();
  return (
    <div>
      <NavBar>
        <Link href="/" passHref>
          <a>
            <Image height={50} src={Logo} alt="logo" />
          </a>
        </Link>
        {router.pathname === "/" && <SearchField />}
      </NavBar>
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
