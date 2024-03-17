import {
  Box,
  Card,
  Flex,
  Text,
  Avatar,
  DropdownMenu,
  Button,
} from "@radix-ui/themes";
import { TriangleDownIcon, ArrowLeftIcon } from "@radix-ui/react-icons";
import React from "react";

const UserMenu = () => {
  return (
    <Flex gap="3" align="center">
      <DropdownMenu.Root>
        <img
          style={{ userSelect: "none" }}
          src="/images/Rick_and_Morty_logo.png"
          width={120}
          height={40}
        />
        <DropdownMenu.Trigger>
          <TriangleDownIcon />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            <ArrowLeftIcon />
            Logout
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Flex>
  );
};

export default UserMenu;
