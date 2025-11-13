// Mock API for demo lead submission
// In production, replace this with actual backend integration

export interface DemoLeadResponse {
  ok: boolean;
  id?: string;
  fieldErrors?: Record<string, string[]>;
  error?: string;
}

export async function submitDemoLead(data): Promise<DemoLeadResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000));

  try {
    // Simulate server-side validation
    console.log('Demo Lead Submitted:', data);

    // TODO: Replace with actual API call
    // Example:
    // const response = await fetch('/api/demo', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data),
    // });
    // return await response.json();

    // Mock successful response
    const mockId = `demo_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

    // Send email notification (mock)
    sendEmailNotification(data, mockId);

    return {
      ok: true,
      id: mockId,
    };
  } catch (error) {
    console.error('Demo submission error:', error);
    return {
      ok: false,
      error: 'Server error. Please try again.',
    };
  }
}

// Mock email notification
function sendEmailNotification(data: any, id: string) {
  const emailBody = `
New Demo Request Received
========================

ID: ${id}
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Role: ${data.role}
Organisation: ${data.organisation}
Country/State: ${data.country}${data.state ? ` / ${data.state}` : ''}
Interests: ${data.interests?.join(', ') || 'N/A'}
Preferred Time (IST): ${data.preferredAtIST || 'N/A'}
Message:
${data.message || '-'}

Captured at: ${new Date().toISOString()} (UTC)
UTM Source: ${data.utmSource || 'organic'}
UTM Medium: ${data.utmMedium || '-'}
UTM Campaign: ${data.utmCampaign || '-'}
  `.trim();

  console.log('📧 Email would be sent to support@litlabs.in:');
  console.log(emailBody);

  // TODO: Replace with actual email service (Resend, Nodemailer, etc.)
  // Example:
  // await resend.emails.send({
  //   from: 'noreply@litlabs.in',
  //   to: 'support@litlabs.in',
  //   subject: `New Demo Request — ${data.organisation} (${data.country})`,
  //   text: emailBody,
  // });
}
