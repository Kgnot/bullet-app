import "./TitleWithEffect.css"

export const TitleWithEffect = ({text}: { text: string }) => {
    return (
        <div className="TitleWithEffect">
            {text.split("").map((char, index) => (
                <span
                    key={index}
                    className={char === " " ? "space" : ""}
                    style={{animationDelay: `${index * 60}ms`}}
                >
                            {char}
                        </span>
            ))}
        </div>
    )
}