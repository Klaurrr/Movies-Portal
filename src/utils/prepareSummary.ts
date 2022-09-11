const prepareSummary = (value:string | undefined) => {  
    return (value) ? value.replace(/<\/?[a-zA-Z]+>/gi,'') : 'Фильмец классный'
}

export default prepareSummary;