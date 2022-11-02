import React, { useRef, useState } from "react";
import "./AutoSuggestion.css";

export default function AutoSuggestion() {
    const suggestions = [
        "Lion",
        "Tiger",
        "Goat",
        "Horse",
        "Donkey",
        "Cat",
        "Pig",
        "Rabbit",
        "Pigeon",
        "Dolphin",
        "Eagle",
        "Eel",
        "Beaver",
    ];

    const [isFocus, setIsFocus] = useState(false);
    const [inputValue, setInputValue] = useState("");
    const [isHovered, setIsHovered] = useState(false);
    const inputRef = useRef();

    return (
        <div className="main">
            <input
                type={"text"}
                onFocus={() => setIsFocus(true)}
                onBlur={() => {
                    if (!isHovered) {
                        setIsFocus(false);
                    }
                }}
                onChange={(e) => setInputValue(e.target.value)}
                value={inputValue}
                ref={inputRef}
            />
            {isFocus && (
                <div
                    onMouseEnter={() => {
                        setIsHovered(true);
                    }}
                    onMouseLeave={() => {
                        setIsHovered(false);
                    }}
                >
                    {" "}
                    {suggestions.map((item, i) => {
                        const isMatch =
                            item.toLowerCase().indexOf(inputValue.toLowerCase()) > -1;

                        return (
                            <div key={i}>
                                {isMatch && (
                                    <div
                                        className="item"
                                        onClick={() => {
                                            setInputValue(item);
                                            inputRef.current.focus();
                                        }}
                                    >
                                        {item}
                                    </div>
                                )}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
