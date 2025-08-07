const SignUpButton=({submit,name})=>{
    return(
        <button type={submit} style={{boxShadow: 'inset 0 0 17px gray'}}className="bg-brand-500 mt-7 w-80 h-13 font-bold rounded-xl text-white text-lg hover:cursor-pointer hover:bg-brand-550 text-bold">{name}</button>
    )
}

export default SignUpButton;