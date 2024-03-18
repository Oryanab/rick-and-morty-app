import {
  GitHubLogoIcon,
  HomeIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import { IconProps } from "@radix-ui/react-icons/dist/types";
import { Box, Button } from "@radix-ui/themes";
import React, { useState } from "react";
import styled from "styled-components";

const SideBarContainer = styled(Box)`
  display: flex;
  width: 100px;
  height: 100%;
  background: #14203c;
  box-shadow: 0 1px 0 0 #dde1e6;
  padding: 15px 5px;
`;

const MenuContainer = styled(Box)`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background: #14203c;
`;

const MenuListItem = styled(Box)`
  height: 40px;
  cursor: pointer;
`;

interface MenuItemProps {
  url: string;
  icon: React.ForwardRefExoticComponent<
    IconProps & React.RefAttributes<SVGSVGElement>
  >;
}

const MenuItem: React.FC<MenuItemProps> = ({ url, icon: Icon }) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <MenuListItem
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() =>
        url !== "/" ? window.open(url, "_blank") : window.location.reload()
      }
    >
      <Icon
        style={{
          color: isHovered ? "#40B6CC" : "#fff",
          height: 30,
          width: 24,
          transition: "box-shadow 0.3s ease",
        }}
      />
    </MenuListItem>
  );
};

const menuItems: MenuItemProps[] = [
  {
    url: "/",
    icon: HomeIcon,
  },
  {
    url: "linkedin.com/in/oryan-abergel",
    icon: LinkedInLogoIcon,
  },
  {
    url: "https://github.com/Oryanab/rick-and-morty-app",
    icon: GitHubLogoIcon,
  },
];

const SideBar = () => {
  return (
    <SideBarContainer>
      <MenuContainer>
        <img src="/images/favicon.ico" alt="logo" height={50} width={50} />
        {menuItems.map(({ url, icon }) => (
          <MenuItem key={url} url={url} icon={icon} />
        ))}
      </MenuContainer>
    </SideBarContainer>
  );
};

export default SideBar;
