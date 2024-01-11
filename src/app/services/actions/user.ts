'use server'

export async function signUp(formData: any) {
  const response = await fetch(`http://127.0.0.1:8000/find_a_pet/api/create_user/`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ formData }),
  });
  const result = await response.json();
  return result;
}
