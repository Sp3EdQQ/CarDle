export const Footer = () => {
  return (
    <footer className="w-full py-4 backdrop-blur-md">
      <div className="flex md:text-lg p-5">
        <div className="flex flex-col gap-y-3 w-1/2">
          <div>CarDle API</div>
          <div className="flex flex-wrap text-neutral-400">
            The cars are generated via an API, and their model year is 2019. When
            guessing, it is not necessary to select the same engine version and drive of
            the car.
          </div>
        </div>
        <div className="w-1/2 flex flex-wrap flex-col items-center">
          <div className="p-2">Want to see more projects?</div>
          <div className="hover:underline underline-offset-4">
            <a
              href="https://github.com/Sp3EdQQ"
              target="_blank"
              className="cursor-pointer"
            >
              Github
            </a>
          </div>
          <div className="hover:underline underline-offset-4">
            <a href="https://bartoszjanik.pl" target="_blank" className="cursor-pointer">
              Portfolio
            </a>
          </div>
        </div>
      </div>
      <div className="justify-center flex">© Copyright. All rights reserved.</div>
    </footer>
  )
}
