import Image from "next/image";
import headerImg from "@/app/img_avatar1.png"; // Thay bằng ảnh bạn muốn

const Header: React.FC = () => (
  <header className="w-full h-64 relative">
    <Image
      src={headerImg}
      alt="Header Image"
      layout="fill"
      objectFit="cover"
      className="rounded-b-lg"
    />
  </header>
);

export default Header;
