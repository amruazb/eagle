# elite

## EmailJS Setup (Resume form)

- Install dependency: `@emailjs/browser` (already in package.json)
- Create an EmailJS account and a Service + Template.
- In your template, add fields to match these names used in the form: `user_name`, `user_email`, `position`, and file field `my_file`.
- Place your credentials in a `.env` file at the project root (Vite format):

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Notes
- Email attachments: ensure your EmailJS plan supports file attachments and that your template includes the `my_file` field as an attachment.
- After setting env vars, restart `vite` dev server.

