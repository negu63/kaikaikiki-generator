export default async function sha256(text: string) {
    const textBuffer = new TextEncoder().encode(text);
    const hashBuffer = await crypto.subtle.digest('SHA-256', textBuffer);
    
    return Buffer.from(hashBuffer).toString("hex");
}