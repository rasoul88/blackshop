import React from 'react';

class ProgressBar extends React.Component {
    constructor() {
        super();

        this.state = {
            scrolled: 0
        }
    }
    componentDidMount() {
        window.addEventListener("scroll", this.scrollProgress);
    }
    componentWillUnmount() {
        window.removeEventListener("scroll", this.scrollProgress);
    }
    scrollProgress = () => {
        const scrollPx = document.documentElement.scrollTop;
        const winHeightPx = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = `${scrollPx / winHeightPx * 100}%`;
    
        this.setState({
          scrolled: scrolled
        });
    };

    render() {
        const progressContainerStyle = {
            background: "",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            height: "4px",
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            zIndex: 99
        };
      
        const progressBarStyle = {
            height: "4px",
            // background: "#e91e63",
            backgroundImage: "linear-gradient(to right, yellow, red, red, red, yellow)",
            width: this.state.scrolled,
            borderRadius:"4px"
        };
      
        return(
                <div className="progress-container" style={progressContainerStyle}>
                    <div className="progress-bar" style={progressBarStyle} />
                </div>
        )
    }
}

export default ProgressBar;