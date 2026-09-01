export default async function handler(req, res) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const { name, email, brand, service, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const BREVO_API_KEY = process.env.BREVO_API_KEY;
    if (!BREVO_API_KEY) {
      return res.status(500).json({ error: 'Server misconfiguration: Missing API Key' });
    }

    // TODO: Update these with the actual email addresses
    const ownerEmail = 'omerirfan502830@gmail.com'; // Your email to receive leads
    const senderEmail = 'omerirfan502830@gmail.com'; // Must be an email verified in your Brevo account (e.g. the one you signed up with)

    const sendBrevoEmail = async (payload) => {
      const response = await fetch('https://api.brevo.com/v3/smtp/email', {
        method: 'POST',
        headers: {
          'accept': 'application/json',
          'api-key': BREVO_API_KEY,
          'content-type': 'application/json'
        },
        body: JSON.stringify(payload)
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(`Brevo API Error: ${errorData.message}`);
      }
      return response.json();
    };

    // 1. Send notification email to the agency owner
    await sendBrevoEmail({
      sender: { name: 'Prismbee Website', email: senderEmail },
      to: [{ email: ownerEmail, name: 'Prismbee Owner' }],
      subject: `New Lead: ${brand || name} - ${service}`,
      htmlContent: `
        <h2>New Lead from Prismbee Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Brand:</strong> ${brand || 'N/A'}</p>
        <p><strong>Service Interest:</strong> ${service || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    // 2. Send auto-reply to the user who filled the form
    await sendBrevoEmail({
      sender: { name: 'Prismbee', email: senderEmail },
      to: [{ email: email, name: name }],
      subject: 'We received your message!',
      htmlContent: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #334155;">
          <div style="background-color: #064E3B; padding: 40px 30px; text-align: center; border-radius: 8px 8px 0 0;">
            <img src="https://raw.githubusercontent.com/OmerIrfan111/Prismbee/main/public/logo.png" alt="Prismbee Logo" style="width: 80px; height: 80px; object-fit: contain; margin-bottom: 10px;" />
            <h1 style="color: #FFFFFF; margin: 0; font-size: 24px; font-weight: bold; letter-spacing: -0.5px;">Prismbee</h1>
          </div>
          <div style="padding: 30px; background-color: #F0FDF4; border: 1px solid #A7F3D0; border-top: none; border-radius: 0 0 8px 8px;">
            <h2 style="color: #064E3B; margin-top: 0;">Hi ${name},</h2>
            <p style="font-size: 16px; line-height: 1.5;">
              Thank you for reaching out to Prismbee! We have received your inquiry regarding <strong>${service || 'our services'}</strong>.
            </p>
            <p style="font-size: 16px; line-height: 1.5;">
              One of our growth agents will review your message and contact you shortly to schedule your free strategy call.
            </p>
            <p style="font-size: 16px; line-height: 1.5; margin-top: 30px;">
              Best regards,<br/>
              <strong style="color: #10B981;">The Prismbee Team</strong>
            </p>
          </div>
        </div>
      `
    });

    // Success response
    return res.status(200).json({ success: true, message: 'Emails sent successfully via Brevo' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}
