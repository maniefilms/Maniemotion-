import { NextResponse } from 'next/server';

export async function POST(request:Request){
  const body=await request.json();
  if(!body.name||!body.email||!body.message)return NextResponse.json({error:'Missing required fields'},{status:400});
  const url=process.env.SUPABASE_URL;
  const key=process.env.SUPABASE_PUBLISHABLE_KEY;
  if(!url||!key)return NextResponse.json({error:'Contact service is not configured.'},{status:503});
  const response=await fetch(`${url}/rest/v1/project_inquiries`,{method:'POST',headers:{apikey:key,Authorization:`Bearer ${key}`,'Content-Type':'application/json',Prefer:'return=minimal'},body:JSON.stringify({name:String(body.name).trim(),email:String(body.email).trim(),company:String(body.company||'').trim()||null,project_type:String(body.projectType||'').trim()||null,budget:String(body.budget||'').trim()||null,message:String(body.message).trim()})});
  if(!response.ok)return NextResponse.json({error:'Unable to send inquiry.'},{status:502});
  return NextResponse.json({ok:true},{status:201});
}
