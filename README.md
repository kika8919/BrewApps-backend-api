# BrewApps-backend-api

Backend API for BrewApps

# Setup and Run the Code

To clone the code and run, run below commands in exact same order

```bash
    $ git clone https://github.com/kika8919/BrewApps-backend-api.git
    $ npm install
    $ npm run dev
```

---

# Documentation

This document provides information about a set of APIs for managing a book application, including creating, retrieving, updating, and deleting book.

## 1. Retrieve All Books

### Endpoint: GET /api/book

Retrieve all the books.

**Response:**

Status: 200 OK

```json
[
  {
    "id": "65412c15a10e9593b17b0498",
    "title": "1984",
    "author": "George Orwell",
    "summary": "A dystopian novel set in a totalitarian society where the government exercises total control over its citizens, surveillance is omnipresent, and independent thinking is a crime."
  },
  {
    "id": "65412c15a10e9593b17b0499",
    "title": "To Kill a Mockingbird",
    "author": "Harper Lee",
    "summary": "This novel explores themes of racial injustice, moral growth, and the loss of innocence through the story of a young girl growing up in the racially divided American South."
  }
]
```

## 2. Retrieve a Specific Book

### Endpoint: GET /api/book/:id

Retrieve a specific book by its ID.

**Request:**

GET /api/book/:id

**Response:**

Status: 200 OK

```json
{
  "id": "65412c15a10e9593b17b0498",
  "title": "1984",
  "author": "George Orwell",
  "summary": "A dystopian novel set in a totalitarian society where the government exercises total control over its citizens, surveillance is omnipresent, and independent thinking is a crime."
}
```

## 3. Create a New Book

### Endpoint: POST /api/book

Creates a new book. The request body should contain title, author, and summary.

**Request:**

POST /api/book

Content-Type: application/json

| Field     | Description         | Required |
| --------- | ------------------- | -------- |
| `title`   | Title of the Book   | Yes      |
| `author`  | Content of the Book | Yes      |
| `summary` | Summary of the Book | Yes      |

```json
{
  "title": "Harry Potter and the Sorcerer's Stone",
  "author": "J.K. Rowling",
  "summary": "The first book in the Harry Potter series introduces the young wizard Harry as he discovers his magical abilities and embarks on his adventures at Hogwarts School of Witchcraft and Wizardry."
}
```

**Response:**

Status: 201 Created

```json
{
  "id": "65412d784eb796d7f5611b7c",
  "title": "Harry Potter and the Sorcerer's Stone 2",
  "author": "J.K. Rowling",
  "summary": "The second book in the Harry Potter series introduces the young wizard Harry as he discovers his magical abilities and embarks on his adventures at Hogwarts School of Witchcraft and Wizardry."
}
```

## 4. Update an Existing Book

### Endpoint: PUT /api/book/:id

Updates an existing book post by its ID. The request body should contain title , author and summary.

**Request:**

PUT /api/book/:id

Content-Type: application/json

| Field     | Description                 | Required |
| --------- | --------------------------- | -------- |
| `title`   | Updated title of the Book   | Yes      |
| `author`  | Update content of the Book  | Yes      |
| `summary` | Updated summary of the Book | Yes      |

```json
{
  "title": "Never Let Me Go",
  "author": "Kazuo Ishiguro",
  "summary": "A dystopian novel exploring themes of identity and mortality, set in a world where human clones are raised to provide organ donations"
}
```

**Response:**

Status: 200 OK

```json
{
  "id": "653a0181460f107ce5d3deac",
  "title": "Never Let Me Go",
  "author": "Kazuo Ishiguro",
  "summary": "A dystopian novel exploring themes of identity and mortality, set in a world where human clones are raised to provide organ donations"
}
```

## 5. Delete a Book

### Endpoint: DELETE /api/book/:id

Deletes a book post by its ID.

**Request:**

DELETE /api/book/:id

**Response:**

Status: 200 OK

```json
{
  "message": "Book deleted"
}
```

---

Edge cases such as attempting to view, update, or delete a non-existent book with incorrect Book Id, will lead to a message saying "Book not found"

**Response:**

Status: 200 OK

```json
{
  "message": "Book not found"
}
```

---

# Deploying the code

Make sure vercel is installed in your system

`npm i vercel@latest -g`

To deploy the code, just run the command:

`vercel --prod`
