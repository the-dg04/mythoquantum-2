export default function DropDownCard(props){
    return(
        <li className="w-24 h-full hover:bg-gray-100">
            <button className=" w-24 h-full hover:bg-gray-100 text-left px-5" onClick={()=>{props.setRequestMethod(props.requestType);props.setDropdownToggle(!props.dropdownToggle)}}>{props.requestType}</button>
        </li>
    );
}