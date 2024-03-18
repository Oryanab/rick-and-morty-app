import { Box, Button, Dialog } from "@radix-ui/themes";
import React, { useCallback, useEffect, useState } from "react";
import axios from "axios";
import { Cross2Icon } from "@radix-ui/react-icons";
import { Character } from "../types";

interface ActionsModalProps {
  characterId: string;
}

const ActionsDialog: React.FC<ActionsModalProps> = ({ characterId }) => {
  const [open, setOpen] = useState(false);
  const [characterData, setCharacterData] = useState<Character>();

  const getCharacterByIt = useCallback(async () => {
    const { data } = await axios.get(
      `http://localhost:8080/api/character/${characterId}`
    );
    setCharacterData(data["data"]["character"]);
  }, [characterId]);

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

export default ActionsDialog;
