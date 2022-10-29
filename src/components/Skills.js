import { SkillsData } from "../fixtures/skills.mock"

const Skills = () => {
    const skillCardStyle = {
        borderRadius: "30px",
        border: "4px solid darksalmon",
        backgroundColor: "#eee",
        margin: "10px",
        width: "30%",
        textAlign: "center"
    }

    return (
        <div>
            <h1 style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                backgroundColor: '#eee',
                textAlign: "center"
            }}>Skills</h1>
            <div style={{
                display: "flex",
                justifyContent: "space-evenly",
                backgroundColor: "inherit"
            }}>
                <div style={skillCardStyle}>
                    <h2>Frontend</h2>
                    {SkillsData.frontend.map((skill, index) => (
                        <p key={index}>{skill.title}</p>
                    ))}
                </div>
                <div style={skillCardStyle}>
                    <h2>Backend</h2>
                    {SkillsData.backend.map((skill, index) => (
                        <p key={index}>{skill.title}</p>
                    ))}
                </div>
                <div style={skillCardStyle}>
                    <h2>Tools</h2>
                    {SkillsData.tools.map((skill, index) => (
                        <p key={index}>{skill.title}</p>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Skills