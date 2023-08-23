import { HStack, Input, Button, useToast } from "@chakra-ui/react";
import React, { useState } from "react";
import { nanoid } from "nanoid";

function AddTodo({ addTodo }) {
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!content) {
      toast({
        title: "Adding a Todo is required.",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    const todo = {
      id: nanoid(),
      body: content,
    };
    addTodo(todo);
    setContent("");
  }

  const [content, setContent] = useState("");
  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="learning chakra ui"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button colorScheme="pink" px="8" type="submit">
          Add Todo
        </Button>
      </HStack>
    </form>
  );
}

export default AddTodo;
