import { SkillsData } from "../fixtures/skills.mock"

const Skills = () => {
    return (
        <div>
            <div>
                <h2>Frontend</h2>
                {SkillsData.frontend.map((skill, index) => (
                    <p key={index}>{skill.title}</p>
                ))}
            </div>
            <div>
                <h2>Backend</h2>
                {SkillsData.backend.map((skill, index) => (
                    <p key={index}>{skill.title}</p>
                ))}
            </div>
            <div>
                <h2>Tools</h2>
                {SkillsData.tools.map((skill, index) => (
                    <p key={index}>{skill.title}</p>
                ))}
            </div>
        </div>
    )
}

export default Skills