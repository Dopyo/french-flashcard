# French Gendered Nouns Flashcards with Next.js, React, and Tailwind CSS
## Overview
This project is a web application that fetches French vocabulary data and displays it as interactive flashcards. The application is built using Next.js, React, and styled with Tailwind CSS. It is deployed using Vercel for seamless hosting and deployment. The data is based on the pubicly shared anki deck that contains 900 gendered nouns that are exceptions to the 18 word ending rules used to identify the gender of nouns in the French language.
https://ankiweb.net/shared/info/1118155480 <br>
The deck is sorted such that the first words are the most frequently seen in the French Lexical Corpora.<br>
A given card in the deck includes information about the total percentage gender recognition given that all rules are memorized and that all previous cards in the deck have been learned.<br>
Once you have learned all of the 18 word ending rules, as well as the first 100 cards in the deck, you will have learned the gender of 95% words in the French language.

Below are the 18 rules:<br>
| Words ending in...                    | Gender |
|---------------------------------------|--------|
| -té                                   | f      |
| -é                                    | m      |
| -ole                                  | f      |
| -ale                                  | f      |
| -lle                                  | f      |
| -le                                   | m      |
| -ère                                  | f      |
| -ure                                  | f      |
| -re                                   | m      |
| -rge                                  | f      |
| -ge                                   | m      |
| -ste                                  | m      |
| -me                                   | m      |
| -e                                    | f      |
| -ion                                  | f      |
| -ison                                 | f      |
| - (any word that has a hyphen in it)  | m      |

Visit https://nextjs-project-ten-xi.vercel.app/ for the demo
![table](https://github.com/user-attachments/assets/9f27268b-8a04-422c-8eba-69b888c73cda)
![tableback](https://github.com/user-attachments/assets/b4ae4d4a-8c76-46ea-bf22-d52e2c78ca4a)

## Features
-**Interactive Flashcards:** Displays French words with their gender, total percentage recognition, word frequency, and gender recognition increase.<br>
-**Dynamic Range Selection:** Users can select a range of flashcards to display.<br>
-**Styling with Tailwind CSS:** The application is styled using Tailwind CSS for a clean and modern look.<br>
-**API Integration:** Fetches data from a custom API endpoint using Next.js.<br>

## Technologies Used
-**Next.js:** A React framework for server-side rendering and static site generation.<br>
-**React:** A JavaScript library for building user interfaces.<br>
-**Tailwind CSS:** A utility-first CSS framework for rapidly building custom designs.<br>
-**Vercel:** A cloud platform for deploying and hosting web applications.<br>

## Getting Started
### Prerequisites
-npm
### Installation
1. Clone the repository:<br>
    ```
    git clone https://github.com/Dopyo/french-flashcard.git
    ```
2. Install dependencies:<br>
    ```
    cd [your project path]
    npm install
    ```
3. Run the development server:<br>
    ```
    npm run dev
    ```
4. Open the application:<br>
Open your browser and navigate to the page on localhost:3000

## Usage
### Fetching Data
The application fetches data from a custom API endpoint located at /api/anki/french.
### Displaying Flashcards
1. The app uses the flashcard component from ABSanthosh https://github.com/ABSanthosh/react-quizlet-flashcard/tree/master
2. Range Selection: Users can select a range of flashcards to display by adjussting the start and end indices.
3. Update Flashcards: Click the "Update Flashcards" button to fetch and display the selected range of flashcards.
### Styling
The application is styled using Tailwind CSS. Custom styles can be added in the styles/globals.css file.

## Deployment
The application is deployed using Vercel. To deploy your own version:
1. Create a Vercel account if you don't have one.
2. Link your GitHub repository to Vercel.
3. Deploy the project from the Vercel dashboard.

## License
This project is licensed under the MIT License. See the <ins>LICENSE</ins> file for details.

## Acknowledgments

This project includes software developed by A.B. Santhosh. The software is covered under the MIT License, the text of which is included below or in a separate file named LICENSE-ABSANTHOSH.

MIT License

Copyright (c) 2024 A.B.Santhosh

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
