export const CandidateSection = ({ user }: props) => {
    return (
        <div className="mt-10">
            <h1 className="text-white text-5xl">Skills</h1>
            <div className="flex gap-2 flex-wrap">
                {
                    user.skills.map((skill: skill) => {
                        return (
                            <p className="text-white border-white border-2 rounded-full w-[100px] text-center py-2 bg-slate-500" key={skill.id}>{skill.name}</p>
                        )
                    })
                }
            </div>
            <div className="flex gap-2 flex-wrap">
                {
                    user.applications.map((application: any) => {
                        return (
                            <div className="" key={`applc-${application.id}-${application.date}`}>
                                <p className="">{application.job.title}</p>
                                <p className="">{application.job.description}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

type props = {
    user: any
}

type skill = {
    id: number,
    name: string
}