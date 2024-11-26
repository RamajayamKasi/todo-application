import SecondaryButton from '../SecondaryButton';
import CustomButton from '../CustomButton';
import InputTag from '../InputTag';

function TaskListView(props){
    return(<>
        <div className="row align-items-baseline TaskViewContainer text-center mt-2">
            <div className="col-1">
                <InputTag data={['checkbox','','taskSelect','',"form-check-input"]}/> {props.SNo}
            </div>
            <div className="col-7">
                <p className='text-start m-0'> {props.task}</p>
            </div>
            <div className="col-2">
                <CustomButton style={{ backgroundColor: 'red',color:'white'}} text={props.statusText}/>
            </div>
            <div className="col-2">
                <SecondaryButton text="X"/>
            </div>
        </div>
    </>)
}

export default TaskListView;