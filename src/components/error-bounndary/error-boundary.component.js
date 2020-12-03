import React from 'react';
import { ErrorImageOverlay, ErrorImageContainer, ErrorImageText } from "./error-boundary.styles";

class ErrorBoundary extends React.Component {
    constructor(){
        super();

        this.state = {
            hasError : false
        }
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo){
        // You can also log the error to an error reporting service
        console.log(error)
    }

    render() {
        if(this.state.hasError){
            return (
                <ErrorImageOverlay>
                    {/* https://i.imgur.com/qIufhof.png */}
                    <ErrorImageContainer imageUrl={'https://i.imgur.com/A040Lxr.png'} />
                    <ErrorImageText> <p>Sorry!!!</p><br/> Because of using firebase to implement back-end and authentication you cannot use this page with Iran🇮🇷 IP range, please use a <span>VPN</span> </ErrorImageText>
                </ErrorImageOverlay>
            )
        }

        return this.props.children;
    }
}

export default ErrorBoundary;