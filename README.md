# Interview To-do List
This project uses Vite with React.js, TypeScript and TailwindCSS with a Laravel backend. It uses [Inertia.js](https://inertiajs.com/) which you don't need prior experience with, but will encounter when working on our projects.

## Your task
Build a simple to-do application.

## Description
 The application should have the following functionalities:
- The ability to display a list of to-do items
- The ability to add items
- The ability to update the "completed" status of items
- The ability to delete items

Do a search for `BRIEF:` to find points throughout the codebase that your input is expected.

### Requirements
- Use React.js with Typescript
- Use TailwindCSS
- Use the existing Laravel scaffolding

## Prerequisites
- A [GitHub](https://github.com/) account
- PHP 8.1+
- [Composer](https://getcomposer.org/download/)
- Node.js 16.8+
- An empty MySQL or SQLite database named "my_todos", adjust `.env` accordingly

## Getting started
To begin, create a new repository from [this template](https://github.com/star-insure/interview-todo-list) by clicking the "Use this template" button. You can then follow the instructions below to set up the project.

## Installation
Create an environment file, and populate it according to your local setup:
```
cp .env.example .env
```

Install PHP dependencies:
```
composer install
```

Migrate the database and create seed data:
```
php artisan migrate:fresh --seed
```

Install JavaScript dependencies:
```
npm install
```

---

## Development

### Timing
You will also be evaluated based on the time taken to complete this task. **BEFORE WRITING ANY CODE**, make a commit with the message "Start". When your code is finished, make another commit with the message "Finish". You're encouraged to make commits along the way to separate the deliverable features.

You will need to run both of the below commands during development.

Start the PHP server with the serve command, which will start a PHP server on [http://localhost:8000](http://localhost:8000):
```
php artisan serve
```

To start a dev server with Hot-Module-Reloading (HMR) for your TypeScript files:
```
npm run dev
```

No need to create a production build.

## Evaluation
To submit, please email a link of your repository to [dev@intuitcreative.com](mailto:dev@intuitcreative.com).
