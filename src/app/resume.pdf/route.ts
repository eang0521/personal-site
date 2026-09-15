import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    "https://raw.githubusercontent.com/eang0521/resume/main/Resume.pdf",
    { next: { revalidate: 3600 } }
  );

  const pdf = await res.arrayBuffer();

  return new NextResponse(pdf, {
    headers: {
      "Content-Type": "application/pdf",
      "Content-Disposition": 'inline; filename="Elijah_Ang_Resume.pdf"',
    },
  });
}
