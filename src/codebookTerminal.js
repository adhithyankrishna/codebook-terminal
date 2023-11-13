import React, { useEffect, useRef, useState } from "react";
import "../CSS/Terminal.css";

const codebookTerminal = ({
  setUserInput,
  userOutput,
  mode,
  userCommand,
  background = "#292929",
  welcomeMessage = "Welcome to the Terminal! 🚀\nFeel free to explore and type 'help' for a list of available commands.",
  textColor = "#dbd8d5",
  promtColor = "#d6994a",
  promtText = "$",
  progressBarColor = "#50f50f",
  progres = 0,
}) => {

  // State variables
  const [input, setInput] = useState("");
  const [output, setOutput] = useState([welcomeMessage]);
  const [inputlist, setInputlist] = useState([]);
  const [index, setIndex] = useState(-1);
  const inputRef = useRef(null);
  const [progressbar, setProgress] = useState(0);

  // Commands for the terminal
  const [commands, setCommands] = useState({
    echo: {
      description: "Echo a passed string.",
      usage: "echo <string>",
      fn: (...args) => args.join(" "),
    },
    help: {
      description: "about list of commands available to call ",
      usage: "list command ",
      fn: () => (
        <div>
          {Object.keys(commands).map((command) => (
            <div key={command}>
              <p>Command: {command}</p>
              <p>Description: {commands[command].description}</p>
              <p>Usage: {commands[command].usage}</p>
              <br />
            </div>
          ))}
        </div>
      ),
    },
    clear: {
      description: "Clear the terminal screen",
      usage: "clear",
      fn: () => setOutput([]),
    },
  });

  // Effect to update the progress bar
  useEffect(() => {
    if (mode === "progressBar" && progres <= 100) {
      const progressBar = ">".repeat(progres / 4); // Adjust the size of the progress bar
      setInput(`${promtText} ${progres}% [${progressBar.padEnd(25)}] `);
      setProgress(progres);
      if (progres === 100) {
        setOutput((prev) => [
          ...prev,
          ` ${promtText} ${progres}% [${progressBar.padEnd(25)}] done!`,
        ]);
        setInput("");
        mode = "user";
      }
    }
  }, [progres, mode, promtText]);

  // Effect to update output when in command mode
  useEffect(() => {
    if (mode === "command") {
      setOutput((prev) => [...prev, userOutput]);
    }
  }, [userOutput, mode]);

  // Effect to update custom commands
  useEffect(() => {
    Object.keys(userCommand).forEach((commandName) => {
      setCommands((prevCommands) => ({
        ...prevCommands,
        [commandName]: userCommand[commandName],
      }));
    });
  }, [userCommand]);

  // Scroll function to scroll to the bottom of the terminal
  const scroll = () => {
    inputRef.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  // Function to execute commands
  const execute = () => {
    try {
      const [command, ...args] = input.split(" ");
      if (command in commands) {
        const output = commands[command].fn(...args);
        setOutput((prev) => [...prev, output]);
      } else {
        setOutput((prev) => [            
          ...prev,
          `${command} not found in type help for a list of commands`,
        ]);
      }
    } catch (error) {
      console.error(error);
    }
  };

  // Handle key press events
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      handleEnter();
    } else if (event.key === "ArrowUp") {
      handleArrowUp(event);
    } else if (event.key === "ArrowDown") {
      handleArrowDown(event);
    }
  };

  // Handle Arrow Up key press
  const handleArrowUp = (event) => {
    event.preventDefault();
    arrowUp();
  };

  // Handle Arrow Down key press
  const handleArrowDown = (event) => {
    event.preventDefault();
    arrowDown();
  };

  // Handle Enter key press
  const handleEnter = () => {
    setInputlist((prev) => [...prev, input]);
    if (mode !== "command") {
      execute();
    }
    scroll();
    setIndex(inputlist.length);
    setInput("");
  };

  // Function to handle Arrow Up
  const arrowUp = () => {
    setIndex((prev) => (prev - 1 < 0 ? index : prev - 1));
    const temp = inputlist[index];
    setInput(temp);
  };

  // Function to handle Arrow Down
  const arrowDown = () => {
    setIndex(
      index + 1 > inputlist.length - 1 ? inputlist.length - 1 : index + 1
    );
    const temp = inputlist[index];
    setInput(temp);
  };

  // Handle input change
  const handleInput = (event) => {
    if (mode === "command") {
      setUserInput(event.target.value);
      setInput(event.target.value);
    } else if (mode !== "progressBar") {
      setInput(event.target.value);
    }
  };

  // JSX structure for the terminal component
  return (
    <div className="body" style={{ backgroundColor: background }}>
      <div className="output" style={{ color: textColor }}>
        {output.map((item, index) => (
          <p key={index}>${item}</p>
        ))}
      </div>
      <div className="input-area">
        <div
          className="prompt"
          style={{
            backgroundColor: background,
            color: promtColor,
          }}
        >
          {promtText}&nbsp;
        </div>
        <input
          style={{
            backgroundColor: background,
            color: mode === "progressBar" ? progressBarColor : promtText,
          }}
          type="text"
          ref={inputRef}
          value={input}
          onChange={handleInput}
          onKeyDown={handleKeyPress}
          className="input"
        />
      </div>
    </div>
  );
};

// Export the Terminal component
export default codebookTerminal;
