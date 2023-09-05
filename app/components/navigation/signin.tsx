import Button from "../button";
import Link from 'next/link'

export default function SignIn() {
  return (
    <Link href='/account'><Button>Sign In</Button></Link>
  );
}