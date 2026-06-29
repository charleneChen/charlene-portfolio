export default function Experience() {
  return (
    <div className="grid rounded-2xl p-10 font-medium shadow-xl outline outline-black/5 sm:grid-cols-8 sm:gap-8 md:gap-4">
      <div aria-label="From2016 to 2019" className="col-span-2 text-lg">
        2016 - 2019
      </div>
      <div className="col-span-6">
        <p className="text-2xl font-bold" aria-label="Job title">
          Ruby on Rails Developer @ 4399
        </p>
        <p className="text-md text-mauve-500" aria-label="Location">
          Guangzhou, China
        </p>
        <div className="text-lg" aria-label="Responsibilities">
          <ul>
            <li className="before:mr-2 before:inline-block before:aspect-square before:w-[1cap] before:rounded-full before:bg-black before:content-['']">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo
              tempore dicta accusantium accusamus eveniet porro quidem aliquam.
              Impedit, deleniti nulla.
            </li>
            <li className="before:mr-2 before:inline-block before:aspect-square before:w-[1cap] before:rounded-full before:bg-black before:content-['']">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
              voluptate.
            </li>
            <li className="before:mr-2 before:inline-block before:aspect-square before:w-[1cap] before:rounded-full before:bg-black before:content-['']">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              suscipit incidunt. Autem assumenda consectetur esse quod nostrum
              tenetur eum maiores.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
