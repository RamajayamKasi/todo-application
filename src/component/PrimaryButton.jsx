function PrimaryButton(props){
    return(<button className={`btn btn-primary rounded ${props.class}`} onClick={props.onClick} id={props.id}>{props.text}</button>)
}

export default PrimaryButton;