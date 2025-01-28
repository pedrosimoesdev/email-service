# Email service 

## Why Another Email Service? 

You might be thinking, "Great, just what we needed, another email service." Well, hold your horses, my friend. We're not here to reinvent the wheel just to make it spin a little smoother. While most email services out there focus on doing the basics (sending and receiving emails), we decided to take it up a notch. We're not just sending emails; we're sending joy, peace of mind, and the occasional email that doesn’t get stuck in spam.

How many times have you found yourself building a website for a company and realized, "Oh wait, I have to build a backend just to send emails"? Seriously, who has time for that? Well, lucky for you, I’m here to save the day. Skip the hassle, just use my backend, and voilà you’re ready to send emails without reinventing the wheel (or your entire backend). Simple, efficient, and with a touch of humor. You’re welcome.

## Key Features of Our Email Service

- **Automatic Email Sending**: Sends emails to users who fill out the frontend inputs.
- **Instant Notifications for Owners**: Automatically sends a notification email to the site owner for every user submission.
- **Clean Code**: Built with clean, maintainable code to make sure you can easily customize and expand.
- **Efficient & Reliable**: Designed to ensure emails are sent reliably without unnecessary overhead.
- **Easy Integration**: Just plug into your existing system, and you're good to go. No complex configurations required.


## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/pedrosimoesdev/email-service.git
   
2. Navigate to the project directory:
    ``` 
   cd email-service
3. Install the necessary dependencies:
     ```
    npm install
4. Set up your environment variables (such as email server credentials) by creating a .env file in the root of the project. Here’s an example of what the file might look like:
   ```
   SMTP_PORT=465
   SMTP_HOST=authsmtp
   SMTP_EMAIL=info@email-domain.com
   SMTP_PASSWORD=this-is-your-password
5. Start the service:  
    ```
     nodemon server.js
### Now the service is up and running, ready to send emails! 

## API Endpoint Example

To send an email, make a POST request to the following endpoint:

### Endpoint
   `POST http://localhost:3000/`

### Request Body
    {
      "name": "Pedro",
      "email": "pedrosimoesdeveloper@gmail.com",
      "subject": "Thanks for your email!! ",
      "message": "I need creating a professional website for my workshop."
    }

## Contributing

We welcome contributions! If you'd like to help improve this project, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature:
   ```
   git checkout -b feature/your-feature-name  
3. git commit
   ```
   git commit -am 'Add new feature or fix'
   
4. Push your changes to your forked repository:
   ```
   git push origin feature/your-feature-name
   
5. Open a Pull Request (PR) to the repository.

# License
This project is licensed under the MIT License.
