import { DiGithubBadge } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiNodejsSmall } from "react-icons/di";

export const AboutPage = () => {
    return (
        <section className="text-white flex justify-center my-10">
            <div className="container flex flex-col items-center gap-10">
                <h1 className="text-5xl">About this project</h1>
                <p className="text-left">This project was made by Lucas Rodrigues. The front-end was made using React with Typescript and Tailwind CSS. The back-end was made using Node.js with Express, PostgreSQL with Typeorm in the database and Json Web Token for authentication.
                </p>
                <h2 className="text-4xl">See repositories below</h2>
                <a href="https://github.com/lucasRodrigues0/app-gerenciamento-vagas" target="blank" className="text-2xl hover:text-violet-300 transition-all">
                    <DiReact className="inline text-2xl" />
                    Front-end Repository
                </a>
                <a href="https://github.com/lucasRodrigues0/api-gerenciamento-vagas" target="blank" className="text-2xl hover:text-violet-300 transition-all">
                    <DiNodejsSmall className="inline text-2xl" />
                    Back-end Repository
                </a>
                <h2 className="text-2xl hover:text-violet-300 transition-all">
                    <a href="https://github.com/lucasRodrigues0" target="blank">
                        <DiGithubBadge className="inline text-2xl" />
                        My Github
                    </a>
                </h2>
            </div>
        </section>
    )
}