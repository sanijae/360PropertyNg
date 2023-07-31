
import {components} from 'react-select'

export const styles = {
    control:base=>({
      ...base,
      border:'1px solid #550055',
      color:'#550055',
      borderRadius:'10px',
      boxShadow:'none',
      '&:hover':{
        border:'1px solid #550055',
        outline:'none'
      }
    }),
    option: (styles,{isFocused})=>{
      return{
        ...styles,
        color: isFocused ? '#550055':'#fff',
        textAlign:'left',
        backgroundColor: isFocused ? '#fff':'#550055',
        ':active':{
          backgroundColor:'white'
        },
        ':hover': {
          backgroundColor: 'white',
          color:'#550055'
        },
      };
    },
    menu: styles => {
      return {
        ...styles,
        backgroundColor: '#550055',
        color:'#fff',
        padding:'10px'
      }
    },
  }
  export function Option(props){
    return(
      <div>
        <components.Option {...props}>
          <input type={'checkbox'} checked={props.isSelected}
           onChange={()=>null} style={{borderColor:'#550055'}}/>
          {" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    )
  }