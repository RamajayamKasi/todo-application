function CustomButton(props){
    return(<button className={`btn rounded ${props.class}`} style={props.style}>{props.text}</button>)
}

export default CustomButton;