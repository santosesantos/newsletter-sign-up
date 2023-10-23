import EmailForm from './components/EmailForm';
import ListItem from './components/ListItem';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center
      w-screen h-screen">

      <main className="flex gap-8
      w-7/12 h-fit
      p-4 
      bg-white rounded-3xl">

        <div className="flex flex-col justify-center gap-4
          w-[55%]
          p-4 pl-8">
          <h1 className="text-[2.5rem] font-bold">Stay updated!</h1>

          <h2>Join 60,000+ product managers receiving monthly updates on:</h2>

          <ul className="flex flex-col gap-2">
            <ListItem>Product discovery and building what matters</ListItem>
            <ListItem>Measuring to ensure updates are a success</ListItem>
            <ListItem>And much more!</ListItem>
          </ul>

          <EmailForm />
        </div>

        <img
          src="./assets/illustration-sign-up-desktop.svg"
          alt="Wallpaper"
          className="w-[45%] h-full object-cover rounded-xl" />

      </main>

      <footer>
        <p>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">@santosesantos</a>.
        </p>
      </footer>
    </div>
  );
}
