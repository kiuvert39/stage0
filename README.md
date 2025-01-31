# HNG Task API

## **Description**
This is a simple public API built using **NestJS** for the **HNG12 Internship** task.  
It returns the following information in JSON format:
- My registered email on HNG12 Slack
- The current timestamp in ISO 8601 format
- The GitHub repository link

## Setup Instructions (Run the Project Locally)
### Prerequisites 
Ensure you have the following installed:

- Node.js (v16 or later)
- NPM (comes with Node.js)
- Git
## Steps to Run Locally
1. Clone the repository
    ```bash
    git clone https://github.com/kiuvert39/stage0.git
    ```
2. Navigate into the project directory:
    ```bash
    cd stage0
    ```
3. Install dependencies:
    ```bash
      npm install
    ```
4. Start the development server:
    ```bash
      npm run start
    ```
5. Test the API: Open your browser or use Postman to visit:
```bash
    http://localhost:3000
```
## **API Endpoint**
- **Base URL:** `https://stage0-kjcc.onrender.com`
- **Method:** `GET`

## **Example Response**
```json
{
  "email": "your-email@example.com",
  "current_datetime": "2025-01-30T09:30:00Z",
  "github_url": "https://github.com/yourusername/your-repo"
}
```

## Hiring Link
If you're looking for Node.js developers, check out:

🔗 Hire Node.js Developers: https://hng.tech/hire/nodejs-developers

## Deployment
The API is deployed and accessible at:
🔗 https://stage0-kjcc.onrender.com