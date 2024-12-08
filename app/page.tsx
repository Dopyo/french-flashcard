"use client";

import { FlashcardArray } from "react-quizlet-flashcard";
import { JSX, useEffect, useState } from "react";

interface Flashcard {
  id: number;
  fields: string[];
  model: number;
}

export default function Home() {
  const [cards, setCards] = useState<{ id: number; frontHTML: JSX.Element; backHTML: JSX.Element }[]>([]);
  const [fetchedData, setFetchedData] = useState([]); // Entire fetched data
  const [rangeStart, setRangeStart] = useState(0); // Start index for slice
  const [rangeEnd, setRangeEnd] = useState(20); // End index for slice

  useEffect(() => {
    const fetchDataWithDelay = () => {
      setTimeout(async () => {
        try {
          const response = await fetch("/api/anki/french");
          const data = await response.json();
          setFetchedData(data); // Store entire fetched data
          updateFlashcards(data, rangeStart, rangeEnd); // Initialize flashcards on load
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }, 1000); // Fetch after a 1-second delay
    };

    fetchDataWithDelay(); // Trigger the fetch after the delay
  }, [rangeStart, rangeEnd]); // Dependencies ensure it refetches when the range changes

  // Update flashcards based on the slice range
  const updateFlashcards = (data: Flashcard[], start: number, end: number) => {
    // Validate range
    if (start < 0 || end < 0 || start >= data.length || end > data.length || start > end) {
      console.error("Invalid range");
      return; // Return if the range is invalid
    }

    const flashcards = data.slice(start, end).map((item: Flashcard) => {
      const word = item.fields[0]; // The French word
      const masculineWord = item.fields[1]; // Masculine word
      const feminineWord = item.fields[2]; // Feminine word

      // Determine the gender based on which field is not empty
      let gender = "Unknown";
      if (masculineWord && masculineWord === word) {
        gender = "Masculine";
      } else if (feminineWord && feminineWord === word) {
        gender = "Feminine";
      }

      return {
        id: item.id,
        frontHTML: (
          <div className="flex items-center justify-center h-full">
            {word} {/* Word in French */}
          </div>
        ),
        backHTML: (
          <div className="flex flex-col items-center justify-center h-full">
            <div>
              <strong>Gender:</strong> {gender}
            </div>
            <div>
              <strong>Gender Recognition:</strong> {item.fields[3] || "Not Available"}%
            </div>
            <div>
              <strong>Word Frequency:</strong> {item.fields[4] || "Not Available"}
            </div>
            <div>
              <strong>Gender Recognition Increase:</strong> {item.fields[5] || "Not Available"}%
            </div>
          </div>
        ),
      };
    });
    setCards(flashcards); // Update flashcards state
  };

  // Handle range change
  const handleRangeChange = () => {
    updateFlashcards(fetchedData, rangeStart, rangeEnd); // Update flashcards based on new range
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <div className="mb-4">
        <label>Start Index:</label>
        <input
          type="number"
          value={rangeStart}
          onChange={(e) => setRangeStart(Math.max(0, Number(e.target.value)))}
          className="mx-2 p-2 border"
        />
      </div>
      <div className="mb-4">
        <label>End Index:</label>
        <input
          type="number"
          value={rangeEnd}
          onChange={(e) => setRangeEnd(Math.min(fetchedData.length, Number(e.target.value)))}
          className="mx-2 p-2 border"
        />
      </div>
      <button
        onClick={handleRangeChange}
        className="mb-4 p-2 bg-blue-500 text-white rounded"
      >
        Update Flashcards
      </button>

      {cards.length > 0 ? (
        <FlashcardArray cards={cards} />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
}
