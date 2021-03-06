import Link from 'next/link'

export default function Index() {
  return (
    <div className="container">
      <div>Anton Arbus</div>
      <Link href="/posts">
        <a className="button">Posts</a>
      </Link>
      
      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          flex-direction: column;
          align-items: center;
          height: 100vh;
          color: grey;
          font-size: 2rem;
        }
        .button {
          cursor: pointer;
          color: rgba(0, 0, 0, 0.65);
          border: 1px solid rgba(0, 0, 0, 0.1);
          border-radius: 0.25rem;
          box-shadow: rgba(0, 0, 0, 0.1) 0 1px 1px 0;
          font-family: system-ui;
          font-size: 16px;
          font-weight: 600;
          padding: 8px 30px;
          margin: 10px;
          text-decoration: none;
          transition: all 200ms;
          user-select: none;
        }
        .button:hover,
        .button:focus {
          box-shadow: rgba(0, 0, 0, 0.1) 0 4px 12px;
        }
        .button:active {
          background: rgba(0, 0, 0, 0.1);
        }
      `}</style>
    </div>
  )
}
