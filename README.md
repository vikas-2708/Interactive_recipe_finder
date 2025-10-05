# Interactive Recipe Finder

# Overview

The Interactive Recipe Finder is a beginner-friendly web application that helps users discover recipes based on the ingredients they already have. By simply entering a list of ingredients, users can view recipe suggestions with their cooking steps. This project aims to reduce food waste and save time by providing smart recipe ideas using simple front-end technologies.

# Features

- Enter ingredients (comma-separated) and get instant recipe suggestions
- Displays recipe name, required ingredients, and detailed cooking steps
- Works completely offline (uses local JSON dataset — no backend required)
- Lightweight and beginner-friendly project using only HTML, CSS, and JavaScript
- Simple and clean user interface

# Tech Stack

-HTML5	Structure and layout
-CSS3	Styling and responsiveness
-JavaScript (ES6)	Logic and interactivity
-JSON	Recipe data storage

# Working

-The user enters one or more ingredients (e.g., rice, tomato, egg).
-The app compares user input with a local recipe dataset (recipes.json).
-Recipes that share one or more of the entered ingredients are displayed.
-Each recipe card shows its name, ingredient list, and step-by-step procedure.

# Algorithm / Logic

-Load recipes.json data using fetch()
-Take user input and convert it into a list of ingredients
-Compare the entered ingredients with the recipes’ ingredients
Display recipes that match one or more ingredients

If no match is found → show a friendly “No recipes found” message
