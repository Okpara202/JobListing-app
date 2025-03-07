# Job Listing Application

## Description

This is a simple Job Listing Application built using **React with TypeScript**. The app displays a list of available jobs and allows users to search for specific jobs. If no jobs are available, an appropriate message is shown.

## Features

- **Job List Display:** Renders a list of jobs from a json file.
- **Job Card Component:** Each job is displayed as a card with job details.
- **Conditional Rendering:**
  - If jobs are available, they are listed.
  - If no jobs are available, a message is displayed.
- **Toggle Job Details:** Users can click a button to reveal or hide additional job information.

## Technologies Used

- React
- TypeScript
- Vite (optional, for project setup)
- CSS (for styling)

## Installation and Setup

Ensure you have node installed.

### 1. Clone the repository

```sh
git clone https://github.com/Okpara202/JobListing-app.git
```

### 2. Install dependencies

```sh
npm install
```

### 3. Start the application

```sh
npm run dev
```

## Usage

- Open the application in the browser.
- Subscribe to recieve job alert
- View the list of available jobs.
- Click the **"Details"** button to toggle additional job information.
- Search for job by job title.
- If there are no jobs in the dataset, a message will be displayed.

## Example Job Data (data.json)

```json
{
  "jobs": [
    {
      "id": 1,
      "title": "Software Engineer",
      "company": "TechCorp Inc.",
      "location": "New York, NY",
      "salary": "120",
      "description": "Develop and maintain web applications using modern frameworks.",
      "requirements": [
        "3+ years experience in software development",
        "Proficiency in JavaScript, React, and Node.js",
        "Strong problem-solving skills"
      ],
      "notes": ["Full time", "Senior level", "Flexible schedule", "Full Day"]
    }
  ]
}
```

## Contributing

Feel free to fork this repository, make improvements, and submit pull requests!
