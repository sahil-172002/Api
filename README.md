# Basic API Example

Welcome to the Basic API Example repository! This project is designed to help beginners understand the basics of API development using Node.js and Express.js. It also includes a simple HTML form that interacts with the API, demonstrating how client-server communication works.

## Table of Contents

1. [Introduction](#introduction)
2. [Project Structure](#project-structure)
3. [API Endpoints](#api-endpoints)
4. [HTML Form](#html-form)
5. [Running the API](#running-the-api)
6. [Testing the API](#testing-the-api)
7. [How This Repository Helps](#how-this-repository-helps)
8. [Additional Resources](#additional-resources)
9. [License](#license)

## Introduction

This project provides a straightforward example of a Node.js and Express.js API. It includes a single endpoint that handles POST requests. By submitting data through an HTML form, users can see how data is sent to the server and how the server responds. This example is intended for educational purposes and is great for those who are new to backend development and API design.

## Project Structure

The project consists of the following key files:

- **`server.js`**: The main server file that sets up the Express application and defines API routes.
- **`public/index.html`**: The HTML file with a form to send data to the API.
- **`package.json`**: Contains project dependencies and scripts.
- **`README.md`**: This file.

## API Endpoints

### POST /user

- **Description**: This endpoint receives data sent from the HTML form and responds with a confirmation message.
- **Request Body**: The body of the POST request should be a JSON object containing the `name` field.
  ```json
  {
    "name": "string"
  }
