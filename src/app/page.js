

export default function Home() {
  
 const styles ={
  color: 'purple',
  fontSize: '20px',
  margin: "0 auto",
  width: '80%',
  border: '2px solid purple',
  textAlign: 'center'
}
const styles2 = {
  textAlign: 'center',
  color: 'violet',
}
  return (
    <div style={styles}>
      <h1 style={styles2} >
        Welcome to the Next.js Starter with Docker Compose
      </h1>
      hello world, docker is running
    </div>
  );
}
