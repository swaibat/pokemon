import Link from "next/link";
import { Container } from "../components/Container";
import { NavBar } from "../components/NavBar";
import SearchField from "./SearchField";
import Image from "next/image";
import Logo from "../logo.svg";

const Layout = ({ children }: any) => {
  return (
    <div>
      <NavBar>
        <Link href="/" passHref>
          <a>
            <Image height={50} src={Logo} alt="logo" />
          </a>
        </Link>
        <SearchField />
      </NavBar>
      <Container>{children}</Container>
    </div>
  );
};

export default Layout;
