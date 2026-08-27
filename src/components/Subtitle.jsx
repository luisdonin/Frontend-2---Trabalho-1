import './css/Subtitle.css'
export function Subtitle({highlighted, paragraph}){
    return(
    <div className="text-box">
        <div className="text-half-screen">
            <p><strong>{highlighted}</strong> <b>{paragraph}</b> </p>
        </div>
    </div>
    );
}