import useDarkMode from "../hooks/useDarkMode.js";

export default function Search({handleSearch}) {
    const [colorTheme, setTheme] = useDarkMode();
    const getFill = () => {
        return colorTheme === 'light' ? 'currentColor' : 'hsl(209, 23%, 22%)'
    }
    return (
        <div className="searchWrapper" style={{padding: '5px 20px'}}>
            <span style={{display: 'block', marginRight: '15px', alignSelf:'center'}}>
                <svg x="0px" y="0px" viewBox="0 0 15 15" width="15" height="15" fill={getFill()}>
                    <path d="M14.7,12.7l-2.9-2.9c-0.1-0.1-0.3-0.2-0.5-0.2h-0.5c0.8-1,1.3-2.3,1.3-3.7c0-3.3-2.7-6-6-6s-6,2.7-6,6s2.7,6,6,6 c1.4,0,2.7-0.5,3.7-1.3v0.5c0,0.2,0.1,0.4,0.2,0.5l2.9,2.9c0.3,0.3,0.7,0.3,1,0l0.8-0.8C15,13.4,15,13,14.7,12.7z M6.2,9.6 C4.2,9.6,2.6,8,2.6,6c0-2,1.6-3.7,3.7-3.7c2,0,3.7,1.6,3.7,3.7C9.9,8,8.3,9.6,6.2,9.6z"/>
                </svg>
            </span>
            <input placeholder="Search for a country..." className="searchbar" onChange={(e) => handleSearch(e && e.target && e.target.value ? e.target.value : '')} />
        </div>
    )
}
