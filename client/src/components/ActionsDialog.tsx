import { gql, useQuery } from "@apollo/client";
import { Box, Button, Dialog } from "@radix-ui/themes";
import React, { useCallback, useEffect, useState } from "react";
import { queries } from "./CharactersTable";
import axios from "axios";
import { Character } from "../contexts/CharactersProvider";
import { Cross2Icon } from "@radix-ui/react-icons";

interface ActionsModalProps {
  id: string;
}

const ActionsModal: React.FC<ActionsModalProps> = ({ id }) => {
  const [open, setOpen] = useState(false);
  const [characterData, setCharacterData] = useState<Character>();

  const getCharacterByIt = useCallback(async () => {
    const { data } = await axios.get(
      `http://localhost:8080/api/character/${id}`
    );
    setCharacterData(data["data"]["character"]);
  }, [id]);

  useEffect(() => {
    if (open) {
      getCharacterByIt();
    }
  }, [open]);

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger>
        <Button>View</Button>
      </Dialog.Trigger>
      <Dialog.Content style={{ maxWidth: 450 }}>
        <Box
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "20px",
          }}
        >
          <Dialog.Title style={{ margin: 0 }}>
            General Data About {characterData?.name}
          </Dialog.Title>
          <Dialog.Close style={{ cursor: "pointer" }}>
            <Cross2Icon style={{ height: "20px", width: "20px" }} />
          </Dialog.Close>
        </Box>
        <Dialog.Description size="2" mb="4">
          <Box
            style={{
              background: "#14203c",
              color: "#fff",
              height: "200px",
              width: "100%",
              overflow: "scroll",
              padding: "10px 20px",
              borderRadius: "4px",
              fontFamily: '"Open Sans", sans-serif',
              fontWeight: 500,
              fontSize: "14px",
            }}
          >
            {JSON.stringify(characterData)}
          </Box>
        </Dialog.Description>
      </Dialog.Content>
    </Dialog.Root>
  );
};

export default ActionsModal;
